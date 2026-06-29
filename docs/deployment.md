# Cloudflare Pages Deployment

## Build And Preview

```bash
npm run build
npm run dev
```

构建输出目录为 `dist/`。

## Pages Project

```bash
npm run cf:login
npm run cf:project:create
```

Pages 项目名：`exam-kara`

## Deploy

```bash
npm run deploy:pages
```

## Route Layout

- `/` -> EXAM KARA 首页
- `/tests/anime-summer-2026/` -> 夏季番测试
- `/tests/galgame-test/` -> GalGame 测试
- `/tests/human-challenge/` -> 人机测试闯关
- `/api/human-challenge/*` -> 人机测试 Orchestrator API
- `/tests/galgame-match/` -> 兼容旧地址，自动跳转到 `/tests/galgame-test/`

## Build Notes

构建阶段会直接读取仓库内源码：

- `src/`
- `tests-src/anime-summer-2026/`
- `tests-src/galgame-test/`
- `tests-src/human-challenge/`
- `functions/api/human-challenge/`

不再依赖外部兄弟目录同步。

## Human Challenge Bindings

人机测试闯关默认不依赖付费服务。正式会话绑定：

- `HUMAN_CHALLENGE_KV`：Cloudflare KV namespace，保存 2 小时会话，配置见 `wrangler.jsonc`。

可选免费云验证：

- `TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY`
- `HCAPTCHA_SITE_KEY` / `HCAPTCHA_SECRET_KEY`
- `ALTCHA_HMAC_SECRET`，启用官方 ALTCHA widget + `altcha-lib` 签发/验签
- `RECAPTCHA_SITE_KEY` / `RECAPTCHA_SECRET_KEY`，仅作为隐藏彩蛋层

未配置的云验证层会显示为未启用，用户可跳过并扣分。Cap / mCaptcha / Anubis 没有真实服务或网关时只显示接入状态，不再用本地 PoW 冒充。

## Custom Domain

第一次部署完成后，在 Cloudflare Pages 项目设置中绑定：

- `exam.kara251.com`
