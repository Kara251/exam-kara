# EXAM KARA

`exam.kara251.com` 的静态主站与测试总仓。

当前已接入的子路由：

- `/tests/anime-summer-2026/`：2026 夏季番性格测验
- `/tests/galgame-test/`：GalGame 命定路线测验

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
- `scripts/build.mjs`：构建脚本
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

## 构建行为

构建时会：

- 把 `src/` 输出到站点根目录
- 把 `tests-src/anime-summer-2026/` 输出到 `/tests/anime-summer-2026/`
- 把 `tests-src/galgame-test/` 输出到 `/tests/galgame-test/`
- 生成 `/tests/galgame-match/` 到新 GalGame 路由的跳转页
- 为首页与测试页写入新的构建版本号，用于强制刷新静态缓存

## 文档

- [部署说明](docs/deployment.md)
- [夏番测试资料依据](docs/result.md)
