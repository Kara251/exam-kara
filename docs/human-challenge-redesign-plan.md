# 人机测试闯关重构方案

## 目标

把“人机测试大全”从当前混合页面，重构成一个边界清楚、用户能理解、资产安全可控的正式测试。

这份方案只定义下一版产品与工程结构，不把尚未接入的反 bot 项目包装成已上线能力。

## 核心判断

- “免费优先”“中国玩家优先”是内部产品约束，不应该作为页面主视觉或按钮文案直接展示给普通访问者。
- EXAM KARA 首页只负责测试目录，不承载任何单个测试的答题区。
- 人机测试页必须和 EXAM KARA 首页拆开，也要把封面页、闯关页、结果页拆开。
- 真服务和占位状态必须明确分离。没有真实 key、实例或网关时，不允许用本地 PoW 冒充 Cap、mCaptcha、Anubis。
- 所有 API key、secret、HMAC key、网关 token 都必须走 Cloudflare Pages 变量或 secret，不进仓库明文。

## 页面架构

### EXAM KARA 首页

路由：`/`

用途：

- 展示测试目录。
- 展示返回 `kara251.com`、GitHub、雨云、微信定制入口。
- 每个测试只以卡片或列表项出现。
- 人机测试只展示为“你能闯过几个人机测试”卡片，点击进入独立测试页。

禁止：

- 不放人机测试答题区。
- 不放关卡列表。
- 不放结果区。
- 不把“免费优先”“中国玩家优先”作为用户可见卖点。

### 人机测试封面页

路由：`/tests/human-challenge/`

用途：

- 作为该测试的开始页。
- 提供清晰标题、短介绍、开始按钮、更多测验按钮。
- 告诉用户这是从旧式验证码到现代反爬挑战的闯关测试。

建议文案：

- 标题：`你能闯过几个人机测试？`
- 副标题：`从老式英文字母验证码一路闯到现代反爬网关，看看你的浏览器能走到第几层。`
- 说明：`文字题只使用英文字母；无需登录；结果图只展示本轮闯关表现。`
- 主按钮：`开始闯关`
- 次按钮：`更多测验`

UI 要求：

- `开始闯关` 与 `更多测验` 同一按钮组、同一视觉节奏、方正按钮。
- 移动端首屏必须能看到主要标题、两个按钮，以及下方还有内容的提示。
- 不显示开发者口吻的策略词，例如“免费优先”“中国玩家优先”“无付费供应商”。

### 人机测试闯关页

路由：`/tests/human-challenge/play/`

用途：

- 只负责闯关。
- 展示当前层、题目、提交、跳过、下一层、通关记录。

UI 要求：

- 不复用首页 hero。
- 不把结果图区域预先堆在首屏。
- 移动端优先：当前题目、可操作控件、进度必须在一屏内形成清晰关系。
- `更多测验` 不放在闯关操作组里，避免和验证操作混淆。

流程：

1. 进入 `/play/` 后创建 session。
2. 每层向 Orchestrator 请求签发。
3. 前端只采集交互，不直接判定通关。
4. 用户完成或跳过后再进入下一层。
5. 完成后跳转到结果视图。

### 人机测试结果页

可选路由：

- `/tests/human-challenge/result/`
- 或 `/tests/human-challenge/play/#result`

用途：

- 展示称号、最高层、分数、跳过层、风险标签、二维码。
- 提供保存结果图和查看结果图。

UI 要求：

- 保存结果图不包含操作按钮。
- 二维码指向正常短链接：`https://exam.kara251.com/tests/human-challenge/`
- 不生成带超长 query 的分享 URL。

## 用户可见文案原则

应该写：

- `从旧式验证码闯到现代反爬`
- `文字题只使用英文字母`
- `不需要登录`
- `结果只记录本轮闯关表现`
- `部分云验证未配置时会自动标记为跳过`

不应该写：

- `免费优先`
- `中国玩家优先`
- `无付费供应商`
- `MVP`
- `Orchestrator`
- `API 风控编排`
- `开发路线`

这些内容只放在 README 或 docs。

## 关卡与真实接入边界

### 已可作为主线的站内关卡

- 字母验证码。
- 干扰字母验证码。
- 找目标字母。
- 字母顺序点击。
- 拖拽形态。
- 拼合形态。
- 轨迹描线。
- 反向拖拽陷阱。
- 蜜罐字段。
- 行为节奏检测。
- BotD 自动化信号。
- 组合 Boss。

这些可以作为站内体验与基础反自动化层，但不能对外宣称等价于商业风控系统。

### 已接入真服务的关卡

- ALTCHA：官方 widget + `altcha-lib` 服务端签发/验签。

### 可配置后启用的真服务

- Cloudflare Turnstile。
- hCaptcha。
- reCAPTCHA：只建议作为海外隐藏支线，不放中国玩家默认主线。

### 不能伪装的项目

- Cap：必须接真实 Cap widget / server / hosted endpoint 后才能启用。
- mCaptcha：必须有真实 mCaptcha 实例、site key、account secret 后才能启用。
- Anubis：是独立反爬网关，不是页面内 widget。必须部署在受保护路由前，不能用本地 PoW 替代。

建议 Anubis 路由：

- `/tests/human-challenge/anubis-gate/`
- 或 `/api/human-challenge/anubis/*`

不建议：

- 不保护整个 EXAM KARA 首页。
- 不用 wildcard 子域做入口。
- 不把 Anubis 写成普通关卡 widget。

## API 与会话

保留当前 API 基础：

- `POST /api/human-challenge/session`
- `GET /api/human-challenge/state`
- `POST /api/human-challenge/challenge/:id/start`
- `POST /api/human-challenge/challenge/:id/verify`
- `POST /api/human-challenge/challenge/:id/skip`
- `POST /api/human-challenge/result`

新增建议：

- `GET /api/human-challenge/integrations`：返回每个外部服务的真实启用状态。
- `POST /api/human-challenge/result-image-token`：如果后续需要服务端结果图，可签发短期 token。

约束：

- 前端不能拿到 secret。
- 前端不能自行判定通关。
- session 使用 KV，TTL 保持 2 小时。
- 不保存明文 IP。
- 轨迹只保存统计摘要，不保存完整轨迹。

## 资产安全

### 仓库允许提交

- 变量名。
- binding 名。
- placeholder 示例。
- `.env.example` 或 `.dev.vars.example`，但只能写假值。
- 文档里的配置步骤。

### 仓库禁止提交

- Cloudflare API token。
- Turnstile secret。
- hCaptcha secret。
- reCAPTCHA secret。
- ALTCHA HMAC secret。
- Cap / mCaptcha / Anubis secret。
- 私钥、证书、cookie、真实 session dump。

### Cloudflare Pages secrets

真实密钥必须通过 Cloudflare Pages secret 写入：

```bash
npx wrangler@4 pages secret put ALTCHA_HMAC_SECRET --project-name exam-kara
npx wrangler@4 pages secret put TURNSTILE_SECRET_KEY --project-name exam-kara
npx wrangler@4 pages secret put HCAPTCHA_SECRET_KEY --project-name exam-kara
npx wrangler@4 pages secret put RECAPTCHA_SECRET_KEY --project-name exam-kara
```

非敏感 site key 可以作为普通环境变量，但如果不确定，也统一放变量，不写死在代码里。

### `.gitignore` 必须覆盖

- `dist/`
- `node_modules/`
- `.wrangler/`
- `.env`
- `.env.*`
- `.env.local`
- `.env.*.local`
- `.dev.vars`
- `.dev.vars.*`
- `*.pem`
- `*.key`
- `*.p8`
- `*.p12`
- `secrets.*`
- `wrangler-*.log`

## 实施顺序

1. 清理安全边界：补 `.gitignore`，确认仓库没有明文 key。
2. 拆路由：封面页 `/tests/human-challenge/` 与闯关页 `/tests/human-challenge/play/` 分开。
3. 调整首页：EXAM KARA 首页只保留测试目录，不嵌入人机测试区域。
4. 调整封面 UI：修复 `更多测验` 错位，统一按钮组。
5. 调整闯关 UI：移除 hero，改为紧凑操作台。
6. 调整文案：删除用户可见的内部策略词。
7. 检查外部服务状态：只展示真实启用状态。
8. 构建、提交、推送、Cloudflare Pages 部署。
9. 线上验证自定义域、API、ALTCHA、未配置服务状态。

## 验收标准

- 首页看起来只是 EXAM KARA 测试目录。
- `/tests/human-challenge/` 只像测试封面页。
- `/tests/human-challenge/play/` 才出现关卡和记录。
- 用户看不到“免费优先”“中国玩家优先”这类内部策略词。
- `更多测验` 不错位。
- 没有明文 API key 或 secret 进入 Git。
- Cap / mCaptcha / Anubis 未接入时明确显示未接入，不可被本地 PoW 通过。
- ALTCHA 线上状态为 ready。
- 部署后 `exam.kara251.com` 和 `/tests/human-challenge/` 都可访问。

## 待确认事项

- Anubis 真实网关要保护哪个路由。
- Turnstile 是否作为默认主线启用。
- hCaptcha 是否接受中国玩家访问体验。
- reCAPTCHA 是否只保留隐藏支线。
- Cap 是使用 hosted 服务还是自部署 server。
- mCaptcha 是否有可长期运行的实例。
