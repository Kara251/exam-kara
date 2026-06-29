# 人机测试闯关测试

## 定位

`/tests/human-challenge/` 是 EXAM KARA 的免费优先人机验证闯关测试，主要服务中国玩家，也尽量兼顾海外访问者。

主线原则：

- 永久免费、开源免费或明确免费层优先。
- 中国玩家可访问优先。
- 云服务优先，其次成熟开源项目；能接成熟服务就不自造风控。
- 文字类题目只使用英文字母。
- 付费、企业、仅试用服务不进入默认主线。
- 前端只做 UI 和交互采集，不直接判定通关。

## 默认关卡

| 层 | 关卡 | 默认实现 | 说明 |
|---:|---|---|---|
| 1 | 字母老验证码 | 本站 Orchestrator | 4 位英文字母 |
| 2 | 字母干扰线 | 本站 Orchestrator | 5 位英文字母与干扰线 |
| 3 | 找出目标字母 | CaptchaWorld 风格题 | 点选目标英文字母 |
| 4 | 字母顺序点击 | CaptchaWorld 风格题 | 按英文字母序列点击 |
| 5 | 拖到正确轮廓 | CaptchaWorld 风格题 | 拖拽形态到对应槽 |
| 6 | 拼合正确形态 | CaptchaWorld 风格题 | 多个形态碎片匹配 |
| 7 | 轨迹描线 | CaptchaWorld 风格题 | 沿虚线绘制并避开禁区 |
| 8 | 反向拖拽陷阱 | 本站 Orchestrator | 不要拖红色物件 |
| 9 | 蜜罐按钮 | DOM trap | 隐藏字段与过快提交扣分 |
| 10 | 速度异常门 | Timing checks | 检查过快、零移动等行为 |
| 11 | BotD 检测 | BotD v2 Open Source | 检查 webdriver/headless，仅扣分 |
| 12 | Cloudflare 守门人 | Turnstile Free | 配置 key 后启用 |
| 13 | hCaptcha 图像关 | hCaptcha Basic Free | 配置 key 后启用 |
| 14 | ALTCHA 官方称重 | ALTCHA widget + altcha-lib | 配置 secret 后启用官方签发/验签 |
| 15 | Cap 真服务门 | 未启用 | 只展示真实接入状态，不再用本地 PoW 冒充 |
| 16 | mCaptcha 实例门 | 未启用 | 需要真实 mCaptcha 实例和 key |
| 17 | Anubis 网关门 | 未启用 | 需要独立 Anubis 网关，不是页面内 widget |
| 18 | Google 雾门 | reCAPTCHA | 隐藏彩蛋，默认不作为中国玩家主线 |
| 19 | 连续组合 Boss | 本站 Orchestrator | 字母顺序 + 短 PoW |
| 20 | 人类白名单 | 结果页 | 生成称号和结果图 |

## 接入优先级

1. Cloudflare Turnstile：免费层、无感优先，正式生产第一优先。
2. hCaptcha Basic：免费云服务，作为图像/选择题体验补位。
3. BotD Open Source：浏览器端自动化信号，结果只扣分。
4. ALTCHA：已接官方 widget 和 `altcha-lib`；只在配置 `ALTCHA_HMAC_SECRET` 后启用。
5. Cap / mCaptcha / Anubis：不再放本地 PoW 替身；没有真实服务或网关时只显示“未接入真服务”并跳过扣分。
6. 本站自建 PoW：只保留在组合 Boss 内作为站内机制，不再挂 Cap / ALTCHA / mCaptcha / Anubis 的名字。
7. reCAPTCHA：仅保留隐藏彩蛋或海外支线，不放进中国玩家默认主线。

## 不进入默认主线

腾讯云、阿里云、极验、百度、数美、易盾、顶象等验证码形态丰富，但目前按公开资料看主要是商业、试用或按量产品。除非后续确认存在长期免费生产额度，否则不接入默认主线。

reCAPTCHA 虽有免费额度，但对中国玩家可访问性和体感压力过高，因此只作为隐藏或高级挑战。

## 当前 MVP 边界

- 已做真实服务端编排、会话、签发、验证、计分和结果图。
- 已做 Turnstile、hCaptcha、reCAPTCHA 的正式 token 校验接口；只有配置 key 后才启用。
- 已做 ALTCHA 官方签发/验签接口；只有配置 `ALTCHA_HMAC_SECRET` 后才启用。
- Cap / mCaptcha / Anubis 当前只做真实接入状态展示，不会使用自制检测替代，也不会让用户误以为已经接入真货。
- 阴招层包括蜜罐、过快提交、零移动、隐藏字段、反向拖拽、轨迹自然度、BotD 自动化信号和组合 Boss，但所有异常都以扣分为主，避免误伤玩家。

## API

Cloudflare Pages Functions 路由：

- `POST /api/human-challenge/session`
- `GET /api/human-challenge/state`
- `POST /api/human-challenge/challenge/:id/start`
- `POST /api/human-challenge/challenge/:id/verify`
- `POST /api/human-challenge/challenge/:id/skip`
- `POST /api/human-challenge/result`

会话优先使用 `HUMAN_CHALLENGE_KV` 绑定保存，TTL 为 2 小时。没有 KV 时使用函数内存 Map 作为本地和预览 fallback。

## 安全与隐私

- 供应商 secret 不进入前端。
- 前端不直接判定通关。
- 会话只暴露随机 session id。
- UA 只保存 SHA-256 摘要。
- 不保存明文 IP。
- 轨迹只保存摘要统计，不保存完整原始轨迹。
- 单项异常不一票否决，连续异常才扣更多分或进入更高风险称号。

## 部署配置

已配置绑定：

- `HUMAN_CHALLENGE_KV`：正式会话存储，KV namespace 配置见 `wrangler.jsonc`。

可选免费云验证变量：

- `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`：启用 Turnstile。
- `HCAPTCHA_SITE_KEY` / `HCAPTCHA_SECRET_KEY`：启用 hCaptcha。
- `ALTCHA_HMAC_SECRET`：启用官方 ALTCHA challenge 签发与验签。
- `ALTCHA_COST` / `ALTCHA_COUNTER_MIN` / `ALTCHA_COUNTER_MAX`：可选，调整 ALTCHA PoW 强度；默认值偏中高，兼顾手机玩家。
- `RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`：启用隐藏 Google 雾门。

## 需要确认或配置

以下内容不能由页面代码凭空完成，需要在 Cloudflare 或外部服务侧确认：

- Turnstile：需要你在 Cloudflare 创建 widget，并把 site key / secret 配到 Pages。
- hCaptcha：需要你创建免费站点 key 和 secret，并确认中国玩家访问体验是否能接受。
- ALTCHA：需要一个服务端 HMAC secret；已可在 Pages Functions 内运行，不需要外部服务器。
- Cap：需要确认采用哪个 Cap 官方项目或服务地址，再接它的真实 widget 和验证接口。
- mCaptcha：需要一个可访问的 mCaptcha 实例、site key 和 account secret；没有实例就不能启用。
- Anubis：需要作为独立反爬网关部署在受保护路由前。建议只保护 `/tests/human-challenge/anubis-gate/` 或 `/api/human-challenge/anubis/*`，不要直接保护整个 EXAM KARA 主页。
- reCAPTCHA：对中国玩家压力很大，只建议作为海外隐藏支线；启用前需要你确认是否接受。
