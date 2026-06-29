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
| 14 | Cap 哈希门 | Cap 思路的 PoW | 免费开源 PoW 形态的浏览器称重 |
| 15 | ALTCHA 称重 | ALTCHA 思路的 PoW | 免费开源 PoW 形态的浏览器称重 |
| 16 | mCaptcha 备用 PoW | mCaptcha 思路的 PoW | 免费开源 PoW 形态的浏览器称重 |
| 17 | Anubis 反爬门 | Anubis 思路的 PoW | 免费开源反爬网关形态 |
| 18 | Google 雾门 | reCAPTCHA | 隐藏彩蛋，默认不作为中国玩家主线 |
| 19 | 连续组合 Boss | 本站 Orchestrator | 字母顺序 + 短 PoW |
| 20 | 人类白名单 | 结果页 | 生成称号和结果图 |

## 接入优先级

1. Cloudflare Turnstile：免费层、无感优先，正式生产第一优先。
2. hCaptcha Basic：免费云服务，作为图像/选择题体验补位。
3. BotD Open Source：浏览器端自动化信号，结果只扣分。
4. Cap / ALTCHA / mCaptcha / Anubis：优先使用成熟开源项目的思路和可替换接口；本站 MVP 先用本地 SHA-256 PoW 做闯关体验，不宣称等同这些项目的完整安全能力。
5. reCAPTCHA：仅保留隐藏彩蛋或海外支线，不放进中国玩家默认主线。

## 不进入默认主线

腾讯云、阿里云、极验、百度、数美、易盾、顶象等验证码形态丰富，但目前按公开资料看主要是商业、试用或按量产品。除非后续确认存在长期免费生产额度，否则不接入默认主线。

reCAPTCHA 虽有免费额度，但对中国玩家可访问性和体感压力过高，因此只作为隐藏或高级挑战。

## 当前 MVP 边界

- 已做真实服务端编排、会话、签发、验证、计分和结果图。
- 已做 Turnstile、hCaptcha、reCAPTCHA 的正式 token 校验接口；只有配置 key 后才启用。
- PoW 关卡现在是轻量兼容层，不需要自建额外服务，后续可以替换为 Cap / ALTCHA / mCaptcha / Anubis 的完整部署。
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

可选绑定：

- `HUMAN_CHALLENGE_KV`：正式会话存储。
- `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`：启用 Turnstile。
- `HCAPTCHA_SITE_KEY` / `HCAPTCHA_SECRET_KEY`：启用 hCaptcha。
- `RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`：启用隐藏 Google 雾门。
