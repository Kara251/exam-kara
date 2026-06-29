const SESSION_TTL_MS = 2 * 60 * 60 * 1000;
const CHALLENGE_TTL_MS = 8 * 60 * 1000;
const TEXT_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ";
const SHAPE_POOL = ["circle", "triangle", "square", "diamond", "hexagon"];
const COLOR_POOL = ["blue", "green", "red", "black"];
const MEMORY_SESSIONS = globalThis.__EXAM_KARA_HUMAN_CHALLENGE_SESSIONS ||
  (globalThis.__EXAM_KARA_HUMAN_CHALLENGE_SESSIONS = new Map());

const LAYERS = [
  { id: "letters-basic", title: "字母老验证码", type: "letters", weight: 4 },
  { id: "letters-noisy", title: "字母干扰线", type: "letters", weight: 5 },
  { id: "target-letter", title: "找出目标字母", type: "pickLetters", weight: 5 },
  { id: "letter-sequence", title: "字母顺序点击", type: "sequenceLetters", weight: 6 },
  { id: "shape-slot", title: "拖到正确轮廓", type: "shapeSlot", weight: 6 },
  { id: "jigsaw-shape", title: "拼合正确形态", type: "jigsaw", weight: 7 },
  { id: "trace-line", title: "轨迹描线", type: "trace", weight: 7 },
  { id: "reverse-drag", title: "反向拖拽陷阱", type: "reverseDrag", weight: 7 },
  { id: "honeypot", title: "蜜罐按钮", type: "honeypot", weight: 7 },
  { id: "timing", title: "速度异常门", type: "timing", weight: 8 },
  { id: "botd", title: "BotD 检测", type: "botd", weight: 8 },
  { id: "turnstile", title: "Cloudflare 守门人", type: "turnstile", weight: 9 },
  { id: "hcaptcha", title: "hCaptcha 图像关", type: "hcaptcha", weight: 9 },
  { id: "cap-pow", title: "Cap 哈希门", type: "pow", weight: 10, prefix: "cap", difficulty: 3 },
  { id: "altcha-pow", title: "ALTCHA 称重", type: "pow", weight: 10, prefix: "altcha", difficulty: 3 },
  { id: "mcaptcha-pow", title: "mCaptcha 备用 PoW", type: "pow", weight: 10, prefix: "mcaptcha", difficulty: 4 },
  { id: "anubis", title: "Anubis 反爬门", type: "pow", weight: 11, prefix: "anubis", difficulty: 4 },
  { id: "recaptcha", title: "Google 雾门", type: "recaptcha", weight: 8 },
  { id: "combo-boss", title: "连续组合 Boss", type: "combo", weight: 14 },
  { id: "whitelist", title: "人类白名单", type: "final", weight: 0 }
];

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      ...headers
    }
  });
}

function text(data, status = 200) {
  return new Response(data, {
    status,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "no-store"
    }
  });
}

function base64Url(bytes) {
  let value = "";
  new Uint8Array(bytes).forEach((byte) => {
    value += String.fromCharCode(byte);
  });
  return btoa(value).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function hex(bytes) {
  return Array.from(new Uint8Array(bytes), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

async function sha256Hex(value) {
  return hex(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)));
}

function cloneSession(session) {
  return JSON.parse(JSON.stringify(session));
}

function cleanMemorySessions() {
  const now = Date.now();
  MEMORY_SESSIONS.forEach((session, key) => {
    if (!session || !session.expiresAt || session.expiresAt <= now) {
      MEMORY_SESSIONS.delete(key);
    }
  });
}

async function loadSession(env, token) {
  if (!token || !String(token).startsWith("session_")) {
    return null;
  }

  if (env.HUMAN_CHALLENGE_KV) {
    const raw = await env.HUMAN_CHALLENGE_KV.get(token);
    if (!raw) {
      return null;
    }
    try {
      const session = JSON.parse(raw);
      if (!session || !session.expiresAt || session.expiresAt <= Date.now()) {
        return null;
      }
      return session;
    } catch {
      return null;
    }
  }

  cleanMemorySessions();
  const session = MEMORY_SESSIONS.get(token);
  if (!session || !session.expiresAt || session.expiresAt <= Date.now()) {
    return null;
  }
  return cloneSession(session);
}

async function saveSession(env, session) {
  const ttl = Math.max(60, Math.ceil((session.expiresAt - Date.now()) / 1000));

  if (env.HUMAN_CHALLENGE_KV) {
    await env.HUMAN_CHALLENGE_KV.put(session.id, JSON.stringify(session), { expirationTtl: ttl });
    return;
  }

  cleanMemorySessions();
  MEMORY_SESSIONS.set(session.id, cloneSession(session));
}

async function parseBody(request) {
  if (request.method === "GET") {
    return {};
  }
  try {
    return await request.json();
  } catch {
    return {};
  }
}

function randomId(prefix = "hc") {
  const bytes = new Uint8Array(12);
  crypto.getRandomValues(bytes);
  return `${prefix}_${base64Url(bytes)}`;
}

function choice(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function shuffle(list) {
  const clone = list.slice();
  for (let index = clone.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    const current = clone[index];
    clone[index] = clone[swapIndex];
    clone[swapIndex] = current;
  }
  return clone;
}

function randomLetters(length) {
  let value = "";
  for (let index = 0; index < length; index += 1) {
    value += choice(TEXT_ALPHABET);
  }
  return value;
}

function normalizeAnswer(value) {
  return String(value || "").trim().toUpperCase().replace(/[^A-Z]/g, "");
}

function layerById(id) {
  return LAYERS.find((layer) => layer.id === id);
}

function publicLayers(env) {
  return LAYERS.map((layer, index) => ({
    id: layer.id,
    title: layer.title,
    type: layer.type,
    number: index + 1,
    enabled: isLayerEnabled(layer, env),
    weight: layer.weight
  }));
}

function isLayerEnabled(layer, env) {
  if (layer.type === "turnstile") {
    return Boolean(env.TURNSTILE_SITE_KEY && env.TURNSTILE_SECRET_KEY);
  }
  if (layer.type === "hcaptcha") {
    return Boolean(env.HCAPTCHA_SITE_KEY && env.HCAPTCHA_SECRET_KEY);
  }
  if (layer.type === "recaptcha") {
    return Boolean(env.RECAPTCHA_SITE_KEY && env.RECAPTCHA_SECRET_KEY);
  }
  return true;
}

async function createSession(request) {
  const now = Date.now();
  const ua = request.headers.get("user-agent") || "";
  return {
    id: randomId("session"),
    createdAt: now,
    expiresAt: now + SESSION_TTL_MS,
    uaHash: await sha256Hex(ua),
    passed: [],
    failed: [],
    skipped: [],
    events: [],
    score: 0,
    currentChallenge: null
  };
}

function addEvent(session, event) {
  session.events = (session.events || []).concat({
    ...event,
    ts: Date.now()
  }).slice(-30);
}

function issueLettersChallenge(layer) {
  const length = layer.id === "letters-noisy" ? 5 : 4;
  const answer = randomLetters(length);
  return {
    publicData: {
      prompt: layer.id === "letters-noisy" ? "输入图中的 5 个英文字母" : "输入图中的 4 个英文字母",
      lettersSvg: renderLetterSvg(answer, layer.id === "letters-noisy")
    },
    answer: { value: answer }
  };
}

function renderLetterSvg(answer, noisy) {
  const lines = noisy
    ? Array.from({ length: 8 }, (_, index) => {
        const x1 = Math.round(Math.random() * 250);
        const x2 = Math.round(Math.random() * 250);
        const y1 = Math.round(Math.random() * 78);
        const y2 = Math.round(Math.random() * 78);
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1a1a1a" stroke-opacity="0.22" stroke-width="${index % 3 + 1}"/>`;
      }).join("")
    : "";
  const chars = answer.split("").map((letter, index) => {
    const x = 34 + index * 43;
    const y = 52 + Math.round((Math.random() - 0.5) * 8);
    const rotate = Math.round((Math.random() - 0.5) * (noisy ? 24 : 12));
    return `<text x="${x}" y="${y}" transform="rotate(${rotate} ${x} ${y})">${letter}</text>`;
  }).join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="260" height="82" viewBox="0 0 260 82" role="img" aria-label="letter captcha"><rect width="260" height="82" fill="#faf8f4"/><g font-family="Georgia,serif" font-size="34" font-weight="700" fill="#1a1a1a">${chars}</g>${lines}</svg>`;
}

function issuePickLettersChallenge(sequenceMode) {
  const target = shuffle(TEXT_ALPHABET.split("")).slice(0, sequenceMode ? 4 : 2);
  const distractors = shuffle(TEXT_ALPHABET.split("").filter((item) => !target.includes(item))).slice(0, 10);
  const cards = shuffle(target.concat(distractors)).map((letter, index) => ({
    id: `card_${index}`,
    letter,
    rot: Math.round((Math.random() - 0.5) * 12)
  }));
  const answerIds = sequenceMode
    ? target.map((letter) => cards.find((card) => card.letter === letter).id)
    : cards.filter((card) => target.includes(card.letter)).map((card) => card.id).sort();
  return {
    publicData: {
      prompt: sequenceMode ? `按顺序点击 ${target.join("-")}` : `点击所有 ${target.join(" / ")}`,
      cards,
      sequenceMode
    },
    answer: { ids: answerIds, sequenceMode }
  };
}

function issueShapeChallenge(layer) {
  const shapes = shuffle(SHAPE_POOL).slice(0, layer.id === "jigsaw-shape" ? 4 : 3);
  const items = shuffle(shapes).map((shape, index) => ({
    id: `item_${index}`,
    shape,
    color: choice(COLOR_POOL.filter((color) => color !== "red"))
  }));
  const slots = shuffle(shapes).map((shape, index) => ({
    id: `slot_${index}`,
    shape
  }));
  const mapping = {};
  items.forEach((item) => {
    mapping[item.id] = slots.find((slot) => slot.shape === item.shape).id;
  });
  return {
    publicData: {
      prompt: layer.id === "jigsaw-shape" ? "把碎片拖进对应形态槽" : "把物件拖进对应轮廓",
      items,
      slots
    },
    answer: { mapping }
  };
}

function issueTraceChallenge() {
  const route = [
    { x: 18, y: 74 },
    { x: 80, y: 30 },
    { x: 145, y: 64 },
    { x: 220, y: 26 },
    { x: 286, y: 78 }
  ];
  return {
    publicData: {
      prompt: "沿虚线画到终点，避开黑色禁区",
      route,
      forbidden: { x: 136, y: 26, w: 36, h: 22 }
    },
    answer: { minPoints: 12, minDurationMs: 900, minPathLength: 180 }
  };
}

function issueReverseDragChallenge() {
  const items = shuffle(COLOR_POOL).map((color, index) => ({
    id: `drag_${index}`,
    color,
    label: color.toUpperCase()
  }));
  return {
    publicData: {
      prompt: "把任意一个物件拖进灰色槽，但不要拖红色",
      items,
      slots: [{ id: "safe_slot", shape: "slot" }]
    },
    answer: { bannedColor: "red", slotId: "safe_slot" }
  };
}

function issueTimingChallenge() {
  return {
    publicData: {
      prompt: "移动一下指针，等读条完成后再按确认",
      minMs: 1600
    },
    answer: { minMs: 1600, minMoves: 2 }
  };
}

async function issuePowChallenge(layer) {
  const seed = randomId(layer.prefix || "pow");
  const difficulty = layer.difficulty || 3;
  return {
    publicData: {
      prompt: `计算一个 SHA-256 hex 前缀为 ${"0".repeat(difficulty)} 的 nonce`,
      seed,
      difficulty,
      algorithm: "SHA-256"
    },
    answer: { seed, difficulty }
  };
}

function issueExternalChallenge(layer, env) {
  if (layer.type === "turnstile") {
    return {
      publicData: {
        prompt: "Cloudflare Turnstile Free",
        provider: "turnstile",
        siteKey: env.TURNSTILE_SITE_KEY || "",
        configured: isLayerEnabled(layer, env)
      },
      answer: { provider: "turnstile" }
    };
  }
  if (layer.type === "hcaptcha") {
    return {
      publicData: {
        prompt: "hCaptcha Basic Free",
        provider: "hcaptcha",
        siteKey: env.HCAPTCHA_SITE_KEY || "",
        configured: isLayerEnabled(layer, env)
      },
      answer: { provider: "hcaptcha" }
    };
  }
  return {
    publicData: {
      prompt: "Google reCAPTCHA 噩梦彩蛋",
      provider: "recaptcha",
      siteKey: env.RECAPTCHA_SITE_KEY || "",
      configured: isLayerEnabled(layer, env)
    },
    answer: { provider: "recaptcha" }
  };
}

async function issueChallenge(layer, env) {
  if (layer.type === "letters") return issueLettersChallenge(layer);
  if (layer.type === "pickLetters") return issuePickLettersChallenge(false);
  if (layer.type === "sequenceLetters") return issuePickLettersChallenge(true);
  if (layer.type === "shapeSlot" || layer.type === "jigsaw") return issueShapeChallenge(layer);
  if (layer.type === "trace") return issueTraceChallenge();
  if (layer.type === "reverseDrag") return issueReverseDragChallenge();
  if (layer.type === "honeypot") {
    return {
      publicData: { prompt: "不要填写隐藏字段，正常点击继续" },
      answer: { minMs: 1100 }
    };
  }
  if (layer.type === "timing") return issueTimingChallenge();
  if (layer.type === "botd") {
    return {
      publicData: { prompt: "读取浏览器自动化信号，只扣分不一票否决" },
      answer: {}
    };
  }
  if (layer.type === "pow") return issuePowChallenge(layer);
  if (["turnstile", "hcaptcha", "recaptcha"].includes(layer.type)) return issueExternalChallenge(layer, env);
  if (layer.type === "combo") {
    const letters = shuffle(TEXT_ALPHABET.split("")).slice(0, 4).join("");
    return {
      publicData: {
        prompt: `按 ${letters.split("").join("-")} 顺序点击，再完成一次短 PoW`,
        letters: shuffle(letters.split("").concat(shuffle(TEXT_ALPHABET.split("")).slice(0, 6))).map((letter, index) => ({ id: `combo_${index}`, letter })),
        powSeed: randomId("combo"),
        difficulty: 3
      },
      answer: { letters, difficulty: 3 }
    };
  }
  return {
    publicData: { prompt: "生成最终结果" },
    answer: {}
  };
}

function sameSet(left, right) {
  return left.length === right.length && left.slice().sort().join("|") === right.slice().sort().join("|");
}

async function verifyExternal(layer, answer, body, env) {
  if (!isLayerEnabled(layer, env)) {
    return {
      passed: false,
      skipped: true,
      message: "此免费云服务尚未配置 key，本轮跳过并扣分。",
      riskTags: ["vendor_not_configured"]
    };
  }
  const token = String(body.token || "");
  if (!token) {
    return { passed: false, message: "缺少 vendor token。", riskTags: ["missing_token"] };
  }

  let endpoint = "";
  let secret = "";
  if (layer.type === "turnstile") {
    endpoint = "https://challenges.cloudflare.com/turnstile/v0/siteverify";
    secret = env.TURNSTILE_SECRET_KEY;
  } else if (layer.type === "hcaptcha") {
    endpoint = "https://api.hcaptcha.com/siteverify";
    secret = env.HCAPTCHA_SECRET_KEY;
  } else {
    endpoint = "https://www.google.com/recaptcha/api/siteverify";
    secret = env.RECAPTCHA_SECRET_KEY;
  }

  const form = new FormData();
  form.set("secret", secret);
  form.set("response", token);
  const response = await fetch(endpoint, { method: "POST", body: form });
  const result = await response.json();
  const passed = Boolean(result.success);
  return {
    passed,
    message: passed ? "官方校验通过。" : "官方校验未通过。",
    riskTags: passed ? ["vendor_pass"] : ["vendor_reject"]
  };
}

async function verifyChallenge(layer, challenge, body, env) {
  const answer = challenge.answer || {};
  if (layer.type === "letters") {
    const passed = normalizeAnswer(body.answer) === answer.value;
    return { passed, message: passed ? "字母识别通过。" : "字母不匹配。", riskTags: passed ? [] : ["wrong_letters"] };
  }
  if (layer.type === "pickLetters" || layer.type === "sequenceLetters") {
    const selected = Array.isArray(body.selected) ? body.selected.map(String) : [];
    const passed = answer.sequenceMode ? selected.join("|") === answer.ids.join("|") : sameSet(selected, answer.ids);
    return { passed, message: passed ? "点击序列通过。" : "点击目标不正确。", riskTags: passed ? [] : ["wrong_click_target"] };
  }
  if (layer.type === "shapeSlot" || layer.type === "jigsaw") {
    const mapping = body.mapping && typeof body.mapping === "object" ? body.mapping : {};
    const keys = Object.keys(answer.mapping);
    const passed = keys.every((key) => mapping[key] === answer.mapping[key]);
    return { passed, message: passed ? "形态匹配通过。" : "有物件放错槽。", riskTags: passed ? [] : ["wrong_shape_slot"] };
  }
  if (layer.type === "trace") {
    const stats = body.trace || {};
    const passed = Number(stats.points) >= answer.minPoints &&
      Number(stats.durationMs) >= answer.minDurationMs &&
      Number(stats.pathLength) >= answer.minPathLength &&
      !stats.hitForbidden;
    return { passed, message: passed ? "轨迹自然度通过。" : "轨迹太短、太快或碰到禁区。", riskTags: passed ? [] : ["trace_anomaly"] };
  }
  if (layer.type === "reverseDrag") {
    const item = (body.item && challenge.publicData.items || []).find((entry) => entry.id === body.item);
    const passed = Boolean(item && item.color !== answer.bannedColor && body.slot === answer.slotId);
    return { passed, message: passed ? "避开红色，拖拽通过。" : "拖错了，红色是陷阱。", riskTags: passed ? [] : ["trap_color"] };
  }
  if (layer.type === "honeypot") {
    const elapsedMs = Number(body.elapsedMs || 0);
    const passed = !body.honeypot && elapsedMs >= answer.minMs;
    return { passed, message: passed ? "蜜罐未触发。" : "隐藏字段或过快提交触发陷阱。", riskTags: passed ? [] : ["honeypot_or_fast_submit"] };
  }
  if (layer.type === "timing") {
    const passed = Number(body.elapsedMs || 0) >= answer.minMs && Number(body.pointerMoves || 0) >= answer.minMoves;
    return { passed, message: passed ? "行为节奏通过。" : "动作太像脚本。", riskTags: passed ? [] : ["timing_anomaly"] };
  }
  if (layer.type === "botd") {
    const signals = body.signals || {};
    const botd = signals.botd && typeof signals.botd === "object" ? signals.botd : {};
    const userAgent = String(signals.userAgent || "");
    const suspicious = Boolean(signals.webdriver) ||
      Boolean(botd.bot) ||
      /HeadlessChrome|PhantomJS|Playwright|Puppeteer/i.test(userAgent) ||
      (Number(signals.plugins || 0) === 0 && !/Mobile|Android|iPhone|iPad/i.test(userAgent));
    return { passed: true, suspicious, message: suspicious ? "发现自动化痕迹，扣分但继续。" : "未见明显自动化信号。", riskTags: suspicious ? ["automation_hint"] : [] };
  }
  if (layer.type === "pow") {
    const nonce = String(body.nonce || "");
    const digest = await sha256Hex(`${answer.seed}:${nonce}`);
    const passed = digest.startsWith("0".repeat(answer.difficulty));
    return { passed, message: passed ? "PoW 通过。" : "PoW nonce 不正确。", riskTags: passed ? [] : ["pow_failed"] };
  }
  if (["turnstile", "hcaptcha", "recaptcha"].includes(layer.type)) {
    return verifyExternal(layer, answer, body, env);
  }
  if (layer.type === "combo") {
    const selected = Array.isArray(body.selected) ? body.selected : [];
    const targetIds = answer.letters.split("").map((letter) => {
      const card = challenge.publicData.letters.find((entry) => entry.letter === letter);
      return card && card.id;
    });
    const digest = await sha256Hex(`${challenge.publicData.powSeed}:${String(body.nonce || "")}`);
    const passed = selected.join("|") === targetIds.join("|") && digest.startsWith("0".repeat(answer.difficulty));
    return { passed, message: passed ? "组合 Boss 通过。" : "组合验证不完整。", riskTags: passed ? [] : ["combo_failed"] };
  }
  if (layer.type === "final") {
    return { passed: true, message: "进入结果页。", riskTags: [] };
  }
  return { passed: false, message: "未知关卡。", riskTags: ["unknown_layer"] };
}

function summarize(session) {
  const passedCount = (session.passed || []).length;
  const skippedCount = (session.skipped || []).length;
  const failedCount = (session.failed || []).length;
  let title = "验证码新兵";
  if (passedCount >= 20) title = "人类白名单";
  else if (passedCount >= 18) title = "风控迷宫穿行者";
  else if (passedCount >= 13) title = "浏览器体能怪物";
  else if (passedCount >= 9) title = "网页老用户";
  else if (passedCount >= 5) title = "拖拽幸存者";
  return {
    sessionId: session.id,
    passedCount,
    skippedCount,
    failedCount,
    score: Math.max(0, Math.round(session.score || 0)),
    title,
    passed: session.passed || [],
    skipped: session.skipped || [],
    failed: session.failed || [],
    events: session.events || []
  };
}

async function withSession(context, body) {
  const url = new URL(context.request.url);
  const token = context.request.headers.get("x-human-session") ||
    body.sessionToken ||
    url.searchParams.get("sessionToken") ||
    "";
  const session = await loadSession(context.env || {}, token);
  if (!session) {
    return { error: json({ error: "Session expired or invalid." }, 401) };
  }
  return { session };
}

async function responseWithSession(env, session, data, status = 200) {
  await saveSession(env || {}, session);
  return json({ ...data, sessionToken: session.id }, status);
}

async function handleRequest(context) {
  const request = context.request;
  const url = new URL(request.url);
  const segments = url.pathname.replace(/^\/api\/human-challenge\/?/, "").split("/").filter(Boolean);
  const body = await parseBody(request);

  if (request.method === "OPTIONS") {
    return text("", 204);
  }

  if (segments.length === 0 && request.method === "GET") {
    return json({ ok: true, layers: publicLayers(context.env || {}) });
  }

  if (segments[0] === "session" && request.method === "POST") {
    const session = await createSession(request);
    return responseWithSession(context.env, session, {
      session: summarize(session),
      layers: publicLayers(context.env || {})
    });
  }

  if (segments[0] === "state" && request.method === "GET") {
    const state = await withSession(context, body);
    if (state.error) return state.error;
    return responseWithSession(context.env, state.session, {
      session: summarize(state.session),
      layers: publicLayers(context.env || {})
    });
  }

  if (segments[0] === "challenge" && segments[2] === "start" && request.method === "POST") {
    const state = await withSession(context, body);
    if (state.error) return state.error;
    const layer = layerById(segments[1]);
    if (!layer) return json({ error: "Unknown challenge." }, 404);
    const issued = await issueChallenge(layer, context.env || {});
    const challenge = {
      id: randomId("challenge"),
      layerId: layer.id,
      type: layer.type,
      createdAt: Date.now(),
      expiresAt: Date.now() + CHALLENGE_TTL_MS,
      answer: issued.answer,
      publicData: issued.publicData
    };
    state.session.currentChallenge = challenge;
    addEvent(state.session, { layerId: layer.id, status: "started" });
    return responseWithSession(context.env, state.session, {
      challenge: {
        id: challenge.id,
        layerId: layer.id,
        type: layer.type,
        title: layer.title,
        expiresAt: challenge.expiresAt,
        data: issued.publicData,
        enabled: isLayerEnabled(layer, context.env || {})
      }
    });
  }

  if (segments[0] === "challenge" && segments[2] === "verify" && request.method === "POST") {
    const state = await withSession(context, body);
    if (state.error) return state.error;
    const layer = layerById(segments[1]);
    const challenge = state.session.currentChallenge;
    if (!layer || !challenge || challenge.layerId !== layer.id) {
      return json({ error: "No active matching challenge." }, 409);
    }
    if (Date.now() > challenge.expiresAt) {
      state.session.failed = (state.session.failed || []).concat(layer.id);
      addEvent(state.session, { layerId: layer.id, status: "expired" });
      state.session.currentChallenge = null;
      return responseWithSession(context.env, state.session, {
        result: { passed: false, message: "关卡已过期，请重试。", riskTags: ["expired"] },
        session: summarize(state.session)
      }, 408);
    }
    const result = await verifyChallenge(layer, challenge, body, context.env || {});
    if (result.skipped) {
      state.session.skipped = Array.from(new Set((state.session.skipped || []).concat(layer.id)));
      state.session.score = (state.session.score || 0) - Math.max(1, Math.round(layer.weight / 2));
    } else if (result.passed) {
      state.session.passed = Array.from(new Set((state.session.passed || []).concat(layer.id)));
      state.session.score = (state.session.score || 0) + layer.weight - (result.suspicious ? 3 : 0);
    } else {
      state.session.failed = (state.session.failed || []).concat(layer.id).slice(-20);
      state.session.score = (state.session.score || 0) - Math.max(2, Math.round(layer.weight / 2));
    }
    addEvent(state.session, {
      layerId: layer.id,
      status: result.skipped ? "skipped" : result.passed ? "passed" : "failed",
      riskTags: result.riskTags || []
    });
    state.session.currentChallenge = null;
    return responseWithSession(context.env, state.session, {
      result,
      session: summarize(state.session)
    });
  }

  if (segments[0] === "challenge" && segments[2] === "skip" && request.method === "POST") {
    const state = await withSession(context, body);
    if (state.error) return state.error;
    const layer = layerById(segments[1]);
    if (!layer) return json({ error: "Unknown challenge." }, 404);
    state.session.skipped = Array.from(new Set((state.session.skipped || []).concat(layer.id)));
    state.session.score = (state.session.score || 0) - Math.max(1, Math.round(layer.weight / 2));
    state.session.currentChallenge = null;
    addEvent(state.session, {
      layerId: layer.id,
      status: "skipped",
      riskTags: ["user_skip"]
    });
    return responseWithSession(context.env, state.session, {
      result: {
        passed: false,
        skipped: true,
        message: "已跳过此关，保留通关记录并扣分。",
        riskTags: ["user_skip"]
      },
      session: summarize(state.session)
    });
  }

  if (segments[0] === "result" && request.method === "POST") {
    const state = await withSession(context, body);
    if (state.error) return state.error;
    return responseWithSession(context.env, state.session, {
      result: summarize(state.session)
    });
  }

  return json({ error: "Not found." }, 404);
}

export async function onRequest(context) {
  try {
    return await handleRequest(context);
  } catch (error) {
    return json({ error: "Internal error.", detail: String(error && error.message ? error.message : error) }, 500);
  }
}
