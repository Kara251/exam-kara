# EXAM KARA

`exam.kara251.com` 的静态主站与测试总仓。

当前已接入的子路由：

- `/tests/anime-summer-2026/`：2026 夏季番性格测验
- `/tests/galgame-test/`：GalGame 命定路线测验（100 题池随机抽 15 题）
- `/tests/human-challenge/`：免费优先的人机测试闯关

兼容旧链接：

- `/tests/galgame-match/` 会自动跳转到 `/tests/galgame-test/`

## GitHub

- 当前站点与测试页统一仓库：
  [github.com/Kara251/exam-kara](https://github.com/Kara251/exam-kara)

上游资料来源仍保留在文档中，仅作为内容考据与题库依据，不再参与构建依赖。

## 目录结构

- `src/`：EXAM KARA 首页源码
- `tests-src/anime-summer-2026/`：站内版动漫测试源码
- `tests-src/galgame-test/`：站内版 GalGame 测试源码
- `tests-src/human-challenge/`：站内版人机测试闯关源码
- `functions/api/human-challenge/`：人机测试 Orchestrator API
- `scripts/build.mjs`：构建脚本
- `wrangler.jsonc`：Cloudflare Pages 项目与 KV binding 配置
- `docs/`：部署与资料说明

## 本地开发

```bash
npm run build
npm run dev
```

构建产物输出到 `dist/`。

## Cloudflare Pages

```bash
npm run deploy:pages
```

Pages 项目名：`exam-kara`

人机测试闯关使用 `HUMAN_CHALLENGE_KV` 保存 2 小时会话。KV namespace 已写入 `wrangler.jsonc`。ALTCHA、Turnstile、hCaptcha、reCAPTCHA 的 secret 类变量不要提交到仓库。

## 构建行为

构建时会：

- 把 `src/` 输出到站点根目录
- 把 `tests-src/anime-summer-2026/` 输出到 `/tests/anime-summer-2026/`
- 把 `tests-src/galgame-test/` 输出到 `/tests/galgame-test/`
- 把 `tests-src/human-challenge/` 输出到 `/tests/human-challenge/`
- 生成 `/tests/galgame-match/` 到新 GalGame 路由的跳转页
- 把官方 ALTCHA widget 输出到 `/vendor/altcha.js`
- 为首页与测试页写入新的构建版本号，用于强制刷新静态缓存

## 语言与结果图

- 语言选择会写入本地存储，后续访问默认沿用上次所选语言
- 仍可通过首页或测试页右上角语言菜单随时切换
- GalGame 测试结果图支持站内预览与下载，导出时会保留标题、封面、特质分布与二维码

## 文档

- [部署说明](docs/deployment.md)
- [人机测试闯关方案](docs/human-challenge.md)
- [人机测试重构方案](docs/human-challenge-redesign-plan.md)
- [夏番测试资料依据](docs/result.md)
