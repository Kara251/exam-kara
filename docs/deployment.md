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
- `/tests/galgame-match/` -> 兼容旧地址，自动跳转到 `/tests/galgame-test/`

## Build Notes

构建阶段会直接读取仓库内源码：

- `src/`
- `tests-src/anime-summer-2026/`
- `tests-src/galgame-test/`

不再依赖外部兄弟目录同步。

## Custom Domain

第一次部署完成后，在 Cloudflare Pages 项目设置中绑定：

- `exam.kara251.com`
