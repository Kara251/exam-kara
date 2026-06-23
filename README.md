# EXAM KARA

EXAM KARA 是 `exam.kara251.com` 的静态主站，用来承载多个互动测试，并把各个测试统一挂到同一个 Cloudflare Pages 域名下。

目前已接入的测试：

- `/tests/anime-summer-2026/`：2026 夏季番性格测验

## 仓库结构

- `src/`：主站源码
- `anime-route-patch/`：夏番测试在接入主站时覆盖使用的补丁文件
- `scripts/build.mjs`：构建脚本，会生成主站并同步夏番测试子路由
- `docs/`：部署说明与测试来源依据

## 开发与构建

```bash
npm run build
npm run dev
```

构建产物会输出到 `dist/`。

## 发布

```bash
npm run deploy:pages
```

Cloudflare Pages 项目名为 `exam-kara`，默认构建输出目录为 `dist`。

## 子路由同步规则

构建时会尝试从相邻目录同步夏番测试项目：

- 来源目录：`../26July-Anime-Test`
- 目标路由：`/tests/anime-summer-2026/`

同步时会：

- 过滤来源项目中的 Markdown、README 和 `.gitignore`
- 删除当前项目里明确排除的非日本 ACG 海报素材
- 用 `anime-route-patch/` 覆盖测试页接入主站所需的本地化与主站集成逻辑

如果来源目录不存在，构建脚本会生成一个占位页，而不是让子路由失效。

## 文档

- [部署说明](docs/deployment.md)
- [夏番测试来源依据](docs/result.md)
