(function () {
  var localeApi = window.ExamKaraLocale;
  var currentLocale = localeApi ? localeApi.getLocale() : "sc";
  var state = {
    sessionToken: "",
    layers: [],
    session: null,
    currentIndex: 0,
    challenge: null,
    selected: [],
    mapping: {},
    activeDrag: "",
    trace: null,
    startedAt: 0,
    pointerMoves: 0,
    previewUrl: "",
    loadedScripts: {}
  };

  var COPY = {
    sc: {
      title: "你能闯过几个人机测试",
      lead: "从老派英文字母验证码开始，一路穿过拖拽、轨迹、蜜罐、PoW 和免费云验证。你能走到第几层？",
      start: "开始闯关",
      skip: "跳过此关",
      next: "下一层",
      verify: "提交验证",
      reset: "重置会话",
      more: "更多测验",
      languageSubtitle: "进入后右上角仍然可以切换。文字类关卡只使用英文字母。"
    },
    tc: {
      title: "你能闖過幾個人機測試",
      lead: "從老派英文字母驗證碼開始，一路穿過拖拽、軌跡、蜜罐、PoW 與免費雲驗證。你能走到第幾層？",
      start: "開始闖關",
      skip: "跳過此關",
      next: "下一層",
      verify: "提交驗證",
      reset: "重置會話",
      more: "更多測驗",
      languageSubtitle: "進入後右上角仍然可以切換。文字類關卡只使用英文字母。"
    },
    en: {
      title: "How Many Human Checks Can You Clear?",
      lead: "Start with old-school letter CAPTCHA, then drag, trace, dodge traps, solve PoW, and face free cloud checks.",
      start: "Start",
      skip: "Skip Layer",
      next: "Next Layer",
      verify: "Submit",
      reset: "Reset",
      more: "More Tests",
      languageSubtitle: "You can switch language in the top-right corner. Text challenges use A-Z letters only."
    },
    ja: {
      title: "人間判定を何層突破できる？",
      lead: "昔ながらの英字 CAPTCHA から、ドラッグ、軌跡、罠、PoW、無料クラウド検証まで進みます。",
      start: "開始",
      skip: "この層をスキップ",
      next: "次の層",
      verify: "送信",
      reset: "リセット",
      more: "ほかのテスト",
      languageSubtitle: "右上で言語を切り替えられます。文字問題は英字のみです。"
    }
  };

  function copy() {
    return COPY[currentLocale] || COPY.sc;
  }

  function $(id) {
    return document.getElementById(id);
  }

  function setMessage(text) {
    $("message-line").textContent = text || "";
  }

  function setBusy(busy) {
    ["verify-btn", "skip-btn", "next-btn", "start-btn", "reset-btn"].forEach(function (id) {
      var node = $(id);
      if (node) node.disabled = busy;
    });
  }

  function headers() {
    var value = { "content-type": "application/json" };
    if (state.sessionToken) {
      value["x-human-session"] = state.sessionToken;
    }
    return value;
  }

  function api(path, options) {
    return fetch("/api/human-challenge/" + path, {
      method: options && options.method ? options.method : "POST",
      headers: headers(),
      body: options && options.body ? JSON.stringify(options.body) : undefined
    }).then(function (response) {
      return response.json().then(function (data) {
        if (!response.ok) {
          throw new Error(data.error || data.message || "API error");
        }
        if (data.sessionToken) {
          state.sessionToken = data.sessionToken;
          try {
            window.sessionStorage.setItem("human-challenge-session", state.sessionToken);
          } catch {}
        }
        if (data.session) {
          state.session = data.session;
        }
        return data;
      });
    });
  }

  function renderLanguageGate() {
    var select = $("lang-select");
    var gate = $("lang-gate");
    var options = $("lang-gate-options");
    var cp = copy();

    document.documentElement.lang = localeApi ? localeApi.getConfig(currentLocale).htmlLang : "zh-Hans";
    $("masthead-title").textContent = cp.title;
    $("hero-lead").textContent = cp.lead;
    $("start-btn").textContent = cp.start;
    $("skip-btn").textContent = cp.skip;
    $("next-btn").textContent = cp.next;
    $("verify-btn").textContent = cp.verify;
    $("reset-btn").textContent = cp.reset;
    document.querySelector(".hero-actions a").textContent = cp.more;
    $("lang-gate-subtitle").textContent = cp.languageSubtitle;

    if (!localeApi || !select || !options) {
      if (gate) gate.classList.add("is-hidden");
      return;
    }

    select.innerHTML = "";
    options.innerHTML = "";
    localeApi.locales.forEach(function (locale) {
      var option = document.createElement("option");
      option.value = locale.code;
      option.textContent = locale.label;
      select.appendChild(option);

      var button = document.createElement("button");
      button.type = "button";
      button.className = "lang-gate-button" + (locale.code === currentLocale ? " is-current" : "");
      button.textContent = locale.label;
      button.addEventListener("click", function () {
        currentLocale = localeApi.setLocale(locale.code);
        renderLanguageGate();
        gate.classList.add("is-hidden");
        document.body.classList.remove("lang-gate-open");
      });
      options.appendChild(button);
    });
    select.value = currentLocale;
    select.addEventListener("change", function () {
      currentLocale = localeApi.setLocale(select.value);
      renderLanguageGate();
    });

    if (localeApi.shouldShowLanguageGate()) {
      document.body.classList.add("lang-gate-open");
    } else {
      gate.classList.add("is-hidden");
    }
  }

  function renderLayers() {
    var list = $("layer-list");
    var passed = new Set((state.session && state.session.passed) || []);
    var skipped = new Set((state.session && state.session.skipped) || []);
    list.innerHTML = "";
    state.layers.forEach(function (layer, index) {
      var item = document.createElement("div");
      item.className = "layer-item";
      if (index === state.currentIndex) item.classList.add("is-current");
      if (passed.has(layer.id)) item.classList.add("is-passed");
      if (skipped.has(layer.id)) item.classList.add("is-skipped");
      if (!layer.enabled) item.classList.add("is-disabled");
      item.innerHTML = '<span class="layer-num">' + layer.number + '</span><span>' + layer.title + '</span>';
      list.appendChild(item);
    });
  }

  function renderSession() {
    var session = state.session || { score: 0, title: "验证码新兵", passedCount: 0, skippedCount: 0, failedCount: 0, events: [] };
    $("score-title").textContent = session.title;
    $("score-value").textContent = session.score;
    $("passed-count").textContent = session.passedCount;
    $("skipped-count").textContent = session.skippedCount;
    $("failed-count").textContent = session.failedCount;

    var log = $("event-log");
    log.innerHTML = "";
    (session.events || []).slice().reverse().forEach(function (event) {
      var item = document.createElement("li");
      var layer = state.layers.find(function (entry) { return entry.id === event.layerId; });
      item.textContent = (layer ? layer.title : event.layerId) + " / " + event.status;
      log.appendChild(item);
    });
    renderLayers();
  }

  function currentLayer() {
    return state.layers[state.currentIndex];
  }

  function resetInteraction() {
    state.selected = [];
    state.mapping = {};
    state.activeDrag = "";
    state.trace = null;
    state.startedAt = Date.now();
    state.pointerMoves = 0;
  }

  function shapeMarkup(shape) {
    return '<span class="shape-icon shape-' + shape + '"></span>';
  }

  function renderLetters(challenge) {
    var card = $("challenge-card");
    card.innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<div class="captcha-svg">' + challenge.data.lettersSvg + '</div>' +
      '<div><input class="text-input" id="answer-input" autocomplete="off" spellcheck="false" maxlength="8"></div>';
    $("answer-input").focus();
  }

  function renderLetterCards(challenge) {
    var card = $("challenge-card");
    card.innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p><div class="letter-grid" id="letter-grid"></div>';
    challenge.data.cards.forEach(function (entry) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "letter-card";
      button.dataset.id = entry.id;
      button.style.transform = "rotate(" + entry.rot + "deg)";
      button.textContent = entry.letter;
      button.addEventListener("click", function () {
        if (challenge.data.sequenceMode) {
          state.selected.push(entry.id);
          button.classList.add("is-selected");
        } else if (state.selected.indexOf(entry.id) >= 0) {
          state.selected = state.selected.filter(function (id) { return id !== entry.id; });
          button.classList.remove("is-selected");
        } else {
          state.selected.push(entry.id);
          button.classList.add("is-selected");
        }
      });
      $("letter-grid").appendChild(button);
    });
  }

  function renderDragBoard(challenge, reverse) {
    var card = $("challenge-card");
    var items = challenge.data.items || [];
    var slots = challenge.data.slots || [];
    card.innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<div class="drag-board"><div class="drag-items" id="drag-items"></div><div class="slot-list" id="slot-list"></div></div>';

    items.forEach(function (item) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "drag-item";
      button.draggable = true;
      button.dataset.id = item.id;
      button.dataset.color = item.color || "";
      button.innerHTML = reverse ? item.label : shapeMarkup(item.shape) + item.shape.toUpperCase();
      button.addEventListener("click", function () {
        state.activeDrag = item.id;
        document.querySelectorAll(".drag-item").forEach(function (node) { node.classList.remove("is-selected"); });
        button.classList.add("is-selected");
      });
      button.addEventListener("dragstart", function (event) {
        state.activeDrag = item.id;
        event.dataTransfer.setData("text/plain", item.id);
      });
      $("drag-items").appendChild(button);
    });

    slots.forEach(function (slot) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "slot-card";
      button.dataset.id = slot.id;
      button.innerHTML = reverse ? "SAFE SLOT" : shapeMarkup(slot.shape) + slot.shape.toUpperCase();
      function fill(itemId) {
        if (!itemId) return;
        if (reverse) {
          state.mapping.item = itemId;
          state.mapping.slot = slot.id;
        } else {
          state.mapping[itemId] = slot.id;
        }
        button.classList.add("is-filled");
        button.textContent = button.textContent + " <- " + itemId.replace(/^(item|drag)_/, "#");
      }
      button.addEventListener("click", function () {
        fill(state.activeDrag);
      });
      button.addEventListener("dragover", function (event) {
        event.preventDefault();
      });
      button.addEventListener("drop", function (event) {
        event.preventDefault();
        fill(event.dataTransfer.getData("text/plain"));
      });
      $("slot-list").appendChild(button);
    });
  }

  function renderTrace(challenge) {
    var data = challenge.data;
    var card = $("challenge-card");
    card.innerHTML = '<p class="challenge-prompt">' + data.prompt + '</p><div class="trace-board" id="trace-board">' +
      '<svg viewBox="0 0 310 104" aria-hidden="true"><polyline points="' + data.route.map(function (p) { return p.x + "," + p.y; }).join(" ") + '" fill="none" stroke="#1a1a1a" stroke-width="3" stroke-dasharray="8 8"/><rect x="' + data.forbidden.x + '" y="' + data.forbidden.y + '" width="' + data.forbidden.w + '" height="' + data.forbidden.h + '" fill="#1a1a1a"/></svg>' +
      '<canvas id="trace-canvas" width="620" height="208"></canvas></div>';
    var board = $("trace-board");
    var canvas = $("trace-canvas");
    var ctx = canvas.getContext("2d");
    var drawing = false;
    var last = null;
    state.trace = { points: 0, durationMs: 0, pathLength: 0, hitForbidden: false, startedAt: 0 };

    function point(event) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: (event.clientX - rect.left) / rect.width * canvas.width,
        y: (event.clientY - rect.top) / rect.height * canvas.height
      };
    }

    function inForbidden(p) {
      var f = data.forbidden;
      var x = p.x / canvas.width * 310;
      var y = p.y / canvas.height * 104;
      return x >= f.x && x <= f.x + f.w && y >= f.y && y <= f.y + f.h;
    }

    board.addEventListener("pointerdown", function (event) {
      drawing = true;
      last = point(event);
      state.trace.startedAt = Date.now();
      ctx.lineWidth = 5;
      ctx.strokeStyle = "#2f91bd";
      ctx.beginPath();
      ctx.moveTo(last.x, last.y);
      board.setPointerCapture(event.pointerId);
    });
    board.addEventListener("pointermove", function (event) {
      if (!drawing) return;
      var next = point(event);
      ctx.lineTo(next.x, next.y);
      ctx.stroke();
      state.trace.points += 1;
      state.trace.pathLength += Math.hypot(next.x - last.x, next.y - last.y);
      state.trace.hitForbidden = state.trace.hitForbidden || inForbidden(next);
      last = next;
    });
    board.addEventListener("pointerup", function () {
      drawing = false;
      state.trace.durationMs = Date.now() - state.trace.startedAt;
    });
  }

  function renderHoneypot(challenge) {
    $("challenge-card").innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<p class="empty-state">正常用户只需要等待一秒后提交。隐藏字段是给脚本踩的。</p>' +
      '<input id="hp-field" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;width:1px;height:1px" aria-hidden="true">';
  }

  function renderTiming(challenge) {
    $("challenge-card").innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<div class="timing-meter"><div class="timing-fill" id="timing-fill"></div></div>' +
      '<p class="empty-state">移动鼠标或手指，让浏览器留下自然动作，然后等读条走完。</p>';
    $("challenge-card").addEventListener("pointermove", function () {
      state.pointerMoves += 1;
    });
    requestAnimationFrame(function () {
      $("timing-fill").classList.add("is-running");
    });
  }

  function renderBotD(challenge) {
    $("challenge-card").innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<p class="empty-state">本站只读取基础自动化信号，不保存原始指纹。检测结果只扣分，不一票否决。</p>';
  }

  function renderExternal(challenge) {
    var configured = challenge.data.configured;
    $("challenge-card").innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<p class="empty-state">' + (configured ? "此层已配置，请完成官方 widget 后提交 token。" : "此免费云服务尚未配置 key。可以跳过此关并扣分。") + '</p>' +
      '<div id="vendor-widget"></div><input class="text-input" id="vendor-token" placeholder="vendor token" ' + (configured ? "" : "disabled") + '>';
    if (configured) {
      loadVendorWidget(challenge);
    }
  }

  function renderPow(challenge) {
    $("challenge-card").innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p>' +
      '<p class="empty-state">点击提交后浏览器会本地计算 nonce。低端手机可能需要几秒。</p><code>seed: ' + challenge.data.seed + '</code>';
  }

  function renderCombo(challenge) {
    $("challenge-card").innerHTML = '<p class="challenge-prompt">' + challenge.data.prompt + '</p><div class="letter-grid" id="letter-grid"></div><p class="empty-state">提交时会再计算一次短 PoW。</p>';
    challenge.data.letters.forEach(function (entry) {
      var button = document.createElement("button");
      button.type = "button";
      button.className = "letter-card";
      button.textContent = entry.letter;
      button.addEventListener("click", function () {
        state.selected.push(entry.id);
        button.classList.add("is-selected");
      });
      $("letter-grid").appendChild(button);
    });
  }

  function renderFinal() {
    var session = state.session || {};
    $("challenge-card").innerHTML = '<p class="challenge-prompt">人类白名单</p><p class="empty-state">本轮已生成结果。可以保存结果图，或者重置再闯一次。</p>';
    $("result-panel").hidden = false;
    $("result-title").textContent = session.title || "验证码新兵";
    $("result-copy").textContent = "你本轮通过 " + (session.passedCount || 0) + " 层，跳过 " + (session.skippedCount || 0) + " 层。";
    $("result-passed").textContent = session.passedCount || 0;
    $("result-score").textContent = session.score || 0;
    $("result-skipped").textContent = session.skippedCount || 0;
    renderQr();
    $("verify-btn").disabled = true;
    $("skip-btn").disabled = true;
    $("next-btn").disabled = true;
  }

  function renderChallenge(challenge) {
    resetInteraction();
    state.challenge = challenge;
    $("current-title").textContent = challenge.title;
    $("current-kicker").textContent = "LAYER " + (state.currentIndex + 1);
    $("verify-btn").disabled = false;
    $("skip-btn").disabled = false;
    $("next-btn").disabled = true;

    if (challenge.type === "letters") renderLetters(challenge);
    else if (challenge.type === "pickLetters" || challenge.type === "sequenceLetters") renderLetterCards(challenge);
    else if (challenge.type === "shapeSlot" || challenge.type === "jigsaw") renderDragBoard(challenge, false);
    else if (challenge.type === "trace") renderTrace(challenge);
    else if (challenge.type === "reverseDrag") renderDragBoard(challenge, true);
    else if (challenge.type === "honeypot") renderHoneypot(challenge);
    else if (challenge.type === "timing") renderTiming(challenge);
    else if (challenge.type === "botd") renderBotD(challenge);
    else if (["turnstile", "hcaptcha", "recaptcha"].indexOf(challenge.type) >= 0) renderExternal(challenge);
    else if (challenge.type === "pow") renderPow(challenge);
    else if (challenge.type === "combo") renderCombo(challenge);
    else renderFinal();

    if (challenge.type === "final") {
      $("verify-btn").disabled = true;
      $("skip-btn").disabled = true;
      $("next-btn").disabled = true;
    }
  }

  function startLayer() {
    var layer = currentLayer();
    if (!layer) {
      showResult();
      return;
    }
    setBusy(true);
    setMessage("正在签发关卡...");
    api("challenge/" + layer.id + "/start", { body: {} })
      .then(function (data) {
        renderChallenge(data.challenge);
        renderSession();
        setMessage(layer.enabled ? "关卡已准备。" : "此层未启用，可跳过。");
      })
      .catch(function (error) {
        setMessage(error.message);
      })
      .finally(function () {
        setBusy(false);
        $("verify-btn").disabled = false;
        $("skip-btn").disabled = false;
      });
  }

  async function sha256HexClient(value) {
    var buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
    return Array.from(new Uint8Array(buffer), function (byte) {
      return byte.toString(16).padStart(2, "0");
    }).join("");
  }

  function loadScriptOnce(id, src) {
    if (state.loadedScripts[id]) {
      return state.loadedScripts[id];
    }
    state.loadedScripts[id] = new Promise(function (resolve, reject) {
      var existing = document.getElementById(id);
      if (existing) {
        existing.addEventListener("load", resolve, { once: true });
        resolve();
        return;
      }
      var script = document.createElement("script");
      script.id = id;
      script.src = src;
      script.async = true;
      script.defer = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
    return state.loadedScripts[id];
  }

  function loadVendorWidget(challenge) {
    var input = $("vendor-token");
    var siteKey = challenge.data.siteKey;
    var provider = challenge.data.provider;
    if (!input || !siteKey) return;

    function setToken(token) {
      input.value = token || "";
    }

    if (provider === "turnstile") {
      loadScriptOnce("cf-turnstile-api", "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit")
        .then(function () {
          if (window.turnstile && $("vendor-widget")) {
            window.turnstile.render("#vendor-widget", { sitekey: siteKey, callback: setToken });
          }
        })
        .catch(function () { setMessage("Turnstile 脚本加载失败，可以跳过此关。"); });
    } else if (provider === "hcaptcha") {
      loadScriptOnce("hcaptcha-api", "https://js.hcaptcha.com/1/api.js?render=explicit")
        .then(function () {
          if (window.hcaptcha && $("vendor-widget")) {
            window.hcaptcha.render("vendor-widget", { sitekey: siteKey, callback: setToken });
          }
        })
        .catch(function () { setMessage("hCaptcha 脚本加载失败，可以跳过此关。"); });
    } else if (provider === "recaptcha") {
      loadScriptOnce("recaptcha-api", "https://www.google.com/recaptcha/api.js?render=explicit")
        .then(function () {
          if (window.grecaptcha && $("vendor-widget")) {
            window.grecaptcha.ready(function () {
              window.grecaptcha.render("vendor-widget", { sitekey: siteKey, callback: setToken });
            });
          }
        })
        .catch(function () { setMessage("reCAPTCHA 脚本加载失败，可以跳过此关。"); });
    }
  }

  async function solvePow(seed, difficulty) {
    var prefix = "0".repeat(difficulty);
    var nonce = 0;
    while (nonce < 2000000) {
      var digest = await sha256HexClient(seed + ":" + nonce);
      if (digest.indexOf(prefix) === 0) {
        return String(nonce);
      }
      nonce += 1;
      if (nonce % 500 === 0) {
        await new Promise(function (resolve) { setTimeout(resolve, 0); });
      }
    }
    return "";
  }

  async function collectPayload() {
    var challenge = state.challenge;
    var payload = {};
    if (!challenge) return payload;

    if (challenge.type === "letters") {
      payload.answer = $("answer-input") ? $("answer-input").value : "";
    } else if (challenge.type === "pickLetters" || challenge.type === "sequenceLetters") {
      payload.selected = state.selected.slice();
    } else if (challenge.type === "shapeSlot" || challenge.type === "jigsaw") {
      payload.mapping = state.mapping;
    } else if (challenge.type === "trace") {
      payload.trace = state.trace || {};
    } else if (challenge.type === "reverseDrag") {
      payload.item = state.mapping.item;
      payload.slot = state.mapping.slot;
    } else if (challenge.type === "honeypot") {
      payload.honeypot = $("hp-field") ? $("hp-field").value : "";
      payload.elapsedMs = Date.now() - state.startedAt;
    } else if (challenge.type === "timing") {
      payload.elapsedMs = Date.now() - state.startedAt;
      payload.pointerMoves = state.pointerMoves;
    } else if (challenge.type === "botd") {
      payload.signals = await collectBotSignals();
    } else if (["turnstile", "hcaptcha", "recaptcha"].indexOf(challenge.type) >= 0) {
      payload.token = $("vendor-token") ? $("vendor-token").value : "";
    } else if (challenge.type === "pow") {
      setMessage("正在计算 PoW...");
      payload.nonce = await solvePow(challenge.data.seed, challenge.data.difficulty);
    } else if (challenge.type === "combo") {
      setMessage("正在计算 Boss PoW...");
      payload.selected = state.selected.slice();
      payload.nonce = await solvePow(challenge.data.powSeed, challenge.data.difficulty);
    }
    return payload;
  }

  async function collectBotSignals() {
    var fallback = {
        webdriver: navigator.webdriver,
        userAgent: navigator.userAgent,
        languages: navigator.languages,
        plugins: navigator.plugins ? navigator.plugins.length : 0,
        touch: navigator.maxTouchPoints || 0,
        platform: navigator.platform || "",
        hardwareConcurrency: navigator.hardwareConcurrency || 0,
        deviceMemory: navigator.deviceMemory || 0,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
        screen: {
          width: window.screen ? window.screen.width : 0,
          height: window.screen ? window.screen.height : 0,
          colorDepth: window.screen ? window.screen.colorDepth : 0
        }
      };

    try {
      var botdModule = await import("https://openfpcdn.io/botd/v2");
      var botd = await botdModule.load();
      var detection = botd.detect();
      fallback.botd = {
        bot: detection.bot,
        botKind: detection.botKind || ""
      };
    } catch {
      fallback.botd = {
        bot: false,
        botKind: "unavailable"
      };
    }
    return fallback;
  }

  function verifyCurrent() {
    var layer = currentLayer();
    if (!layer || !state.challenge) return;
    setBusy(true);
    collectPayload()
      .then(function (payload) {
        return api("challenge/" + layer.id + "/verify", { body: payload });
      })
      .then(function (data) {
        state.session = data.session;
        renderSession();
        setMessage(data.result.message);
        $("verify-btn").disabled = true;
        $("skip-btn").disabled = true;
        $("next-btn").disabled = false;
      })
      .catch(function (error) {
        setMessage(error.message);
      })
      .finally(function () {
        setBusy(false);
        $("next-btn").disabled = false;
      });
  }

  function skipCurrent() {
    var layer = currentLayer();
    if (!layer) return;
    setBusy(true);
    api("challenge/" + layer.id + "/skip", { body: {} })
      .then(function (data) {
        state.session = data.session;
        renderSession();
        setMessage(data.result.message);
        $("verify-btn").disabled = true;
        $("skip-btn").disabled = true;
        $("next-btn").disabled = false;
      })
      .catch(function (error) {
        setMessage(error.message);
      })
      .finally(function () {
        setBusy(false);
        $("next-btn").disabled = false;
      });
  }

  function nextLayer() {
    state.currentIndex += 1;
    if (state.currentIndex >= state.layers.length) {
      showResult();
      return;
    }
    startLayer();
  }

  function showResult() {
    api("result", { body: {} })
      .then(function (data) {
        state.session = data.result || data.session || state.session;
        renderSession();
        renderFinal();
        window.location.hash = "result-panel";
      })
      .catch(function () {
        renderFinal();
      });
  }

  function startSession() {
    setBusy(true);
    setMessage("正在创建会话...");
    api("session", { body: {} })
      .then(function (data) {
        state.layers = data.layers || [];
        state.session = data.session;
        state.currentIndex = 0;
        $("result-panel").hidden = true;
        renderSession();
        startLayer();
      })
      .catch(function (error) {
        setMessage(error.message);
      })
      .finally(function () {
        setBusy(false);
      });
  }

  function resetSession() {
    state.sessionToken = "";
    state.session = null;
    state.layers = [];
    state.currentIndex = 0;
    try {
      window.sessionStorage.removeItem("human-challenge-session");
    } catch {}
    $("challenge-card").innerHTML = '<p class="empty-state">点击“开始闯关”，从第一层开始称量你的浏览器灵魂。</p>';
    $("result-panel").hidden = true;
    startSession();
  }

  function renderQr() {
    var node = $("result-qr-code");
    if (!node || !window.QRCode) return;
    node.innerHTML = "";
    new window.QRCode(node, {
      text: "https://exam.kara251.com/tests/human-challenge/",
      width: 112,
      height: 112,
      correctLevel: window.QRCode.CorrectLevel.M
    });
  }

  function captureResult() {
    if (!window.html2canvas) {
      return Promise.reject(new Error("html2canvas not loaded"));
    }
    return window.html2canvas($("result-card"), {
      backgroundColor: "#faf8f4",
      scale: Math.min(2, window.devicePixelRatio || 1.5),
      useCORS: true
    }).then(function (canvas) {
      return new Promise(function (resolve, reject) {
        canvas.toBlob(function (blob) {
          if (!blob) reject(new Error("capture failed"));
          else resolve(blob);
        }, "image/png", 0.96);
      });
    });
  }

  function saveResult() {
    captureResult().then(function (blob) {
      var url = URL.createObjectURL(blob);
      var link = document.createElement("a");
      link.href = url;
      link.download = "exam-kara-human-challenge.png";
      link.click();
      setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
    }).catch(function (error) {
      setMessage(error.message);
    });
  }

  function previewResult() {
    captureResult().then(function (blob) {
      if (state.previewUrl) URL.revokeObjectURL(state.previewUrl);
      state.previewUrl = URL.createObjectURL(blob);
      $("image-preview-image").src = state.previewUrl;
      $("image-preview-modal").hidden = false;
      $("image-preview-modal").setAttribute("aria-hidden", "false");
      document.body.classList.add("preview-open");
    }).catch(function (error) {
      setMessage(error.message);
    });
  }

  function closePreview() {
    $("image-preview-modal").hidden = true;
    $("image-preview-modal").setAttribute("aria-hidden", "true");
    $("image-preview-image").removeAttribute("src");
    document.body.classList.remove("preview-open");
  }

  function init() {
    renderLanguageGate();
    $("start-btn").addEventListener("click", startSession);
    $("reset-btn").addEventListener("click", resetSession);
    $("verify-btn").addEventListener("click", verifyCurrent);
    $("skip-btn").addEventListener("click", skipCurrent);
    $("next-btn").addEventListener("click", nextLayer);
    $("save-result-btn").addEventListener("click", saveResult);
    $("preview-result-btn").addEventListener("click", previewResult);
    $("image-preview-close").addEventListener("click", closePreview);
    $("image-preview-backdrop").addEventListener("click", closePreview);

    if (window.ExamKaraRuntime && window.ExamKaraRuntime.ensureFresh) {
      window.ExamKaraRuntime.ensureFresh().then(function (ready) {
        if (ready) startSession();
      });
    } else {
      startSession();
    }
  }

  document.addEventListener("DOMContentLoaded", init);
})();
