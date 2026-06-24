# EXAM KARA

EXAM KARA 是 `exam.kara251.com` 的静态主站，用来承载多个互动测试，并把各个测试统一挂到同一个 Cloudflare Pages 域名下。

目前已接入的测试：

- `/tests/anime-summer-2026/`：2026 夏季番性格测验
- `/tests/galgame-match/`：GalGame 命定路线测验

## GitHub 仓库

- EXAM 主页： [Kara251/exam-kara](https://github.com/Kara251/exam-kara)
- 动漫测试来源项目： [Kara251/26July-Anime-Test](https://github.com/Kara251/26July-Anime-Test)
- GalGame 测试来源项目： [Kara251/GalGame-Test](https://github.com/Kara251/GalGame-Test)

## 仓库结构

- `src/`：主站源码
- `anime-route-patch/`：夏番测试在接入主站时覆盖使用的补丁文件
- `galgame-route-patch/`：GalGame 测试在接入主站时覆盖使用的补丁文件
- `scripts/build.mjs`：构建脚本，会生成主站并同步测试子路由
- `docs/`：部署说明与测试来源依据

## 开发与构建

```bash
npm run build
npm run dev
npm run sync:tests
```

构建产物会输出到 `dist/`。

## 发布

```bash
npm run deploy:pages
```

Cloudflare Pages 项目名为 `exam-kara`，默认构建输出目录为 `dist`。

## 子路由同步规则

构建时会尝试从相邻目录同步两个测试项目：

- 来源目录：`../26July-Anime-Test`
- 目标路由：`/tests/anime-summer-2026/`
- 来源目录：`../GalGame-Test`
- 目标路由：`/tests/galgame-match/`

同步时会：

- 过滤来源项目中的 Markdown、README 和 `.gitignore`
- 删除当前项目里明确排除的非日本 ACG 海报素材
- 用 `anime-route-patch/` 覆盖测试页接入主站所需的本地化与主站集成逻辑

同步时会过滤 README、Markdown、`.gitignore` 和无关目录，再用各自的 route patch 覆盖为 EXAM KARA 站内版本。

## 文档

- [部署说明](docs/deployment.md)
- [夏番测试来源依据](docs/result.md)
