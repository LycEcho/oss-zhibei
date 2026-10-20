# 调研：社区建议/PR 的 Actions 自动化（2026-10-20）

> 调研问题：别人提交建议（issue 表单）或直接提 PR 时，如何用 GitHub Actions 自动接住——校验、起草、部署。
> 方法：两路并行调研（真实案例 + 官方文档），结合本站结构（`data/types/*.js` 数据文件驱动、纯静态无构建）收敛落地形态。
> 结论先行：业界有成熟标准玩法（GitHub 官方命名为 **IssueOps**），本站方案 = 标准三段式 + 校验脚本，AI 只做可选的单次调用环节。

---

## 一、两路调研的核心发现

### 1.1 PR 自动校验（别人直接改数据文件提 PR）

真实案例（按与本站形态相似度排序）：

| 案例 | 形态 | 做法 | 链接 |
|---|---|---|---|
| **opsre/awesome-ops** | 数据文件驱动导航站（与本站同构） | json-yaml-validate 只扫数据目录 + 自动评论到 PR；push main 后从数据生成站点 | [yaml-lint.yml](https://github.com/opsre/awesome-ops/blob/main/.github/workflows/yaml-lint.yml)、[generator.yml](https://github.com/opsre/awesome-ops/blob/main/.github/workflows/generator.yml) |
| **EbookFoundation/free-programming-books** | 70 万 star 清单 | 三件套：自写 linter（错误存 artifact）→ 链接死活检查 → workflow_run 链式工作流下载 artifact 自动评论 + 贴/摘标签 | [fpb-lint.yml](https://github.com/EbookFoundation/free-programming-books/blob/main/.github/workflows/fpb-lint.yml)、[comment-pr.yml](https://github.com/EbookFoundation/free-programming-books/blob/main/.github/workflows/comment-pr.yml) |
| **sindresorhus/awesome** | 清单总目录 | PR 只改 readme 时触发，diff 提取新增链接逐个 awesome-lint | [main.yml](https://github.com/sindresorhus/awesome/blob/main/.github/workflows/main.yml) |
| 对照组：awesome-selfhosted（32 万 star） | 清单 | **无任何 workflow**，纯人工审 + PR 模板——每天人工过滤大量不合格 PR | [.github](https://github.com/awesome-selfhosted/awesome-selfhosted/tree/master/.github) |

反馈方式四档（干扰从低到高）：check 标红（零权限，配 required check 可挡合并）→ `::error file=...line=...::` 行级注解（标在 diff 对应行）→ 自动评论/标签 → 请求修改（reviewdog 模式）。小项目用前三档足够。

**本站校验清单**（从 data 结构直接推导，脚本可查）：
1. 语法合法（node 加载不抛错——一个逗号错全站挂，此条最有价值）
2. 必填字段：id/name/kw/one/date/status/count/segs
3. id 唯一、不与现有冲突；date 为合法 YYYY-MM-DD 且不晚于今日
4. status ∈ {ok, obs}；manifest 登记了新文件路径且路径存在
5. segs 每段 def.proj 非空（"写不出默认选谁就拆段"的机器可查部分）

### 1.2 issue 建议表单 → 自动起草 PR（IssueOps）

- 官方方法论：[IssueOps（github.blog, 2025-03）](https://github.blog/engineering/issueops-automate-ci-cd-and-more-with-github-issues-and-actions)——issue 生命周期当状态机：opened → parsed → validated → submitted → approved/denied，label 当状态，评论命令当审批门。官方工具链：[issue-ops/parser](https://github.com/issue-ops/parser)、validator、labeler。
- 表单：`.github/ISSUE_TEMPLATE/*.yml`（input/textarea/dropdown/checkboxes，`required` 仅公开仓库生效）。提交后正文是 `### 字段名` 渲染 Markdown，不是 JSON——需解析回结构化数据（issue-ops/parser 或 GrantBirki/issue-template-parser）。
- 开 PR 事实标准：[peter-evans/create-pull-request](https://github.com/peter-evans/create-pull-request)（有 diff 才开，自动建分支）；回评 issue 用 create-issue-from-file。
- 真实案例：**All-Hands-AI/OpenHands resolver**（打 `fix-me` label → agent 修 → draft PR，workflow 公开可抄）；sweepai（先驱，已停更）；GitHub Copilot coding agent（官方产品，付费，免费层不含）。

### 1.3 PR 合并后自动部署 Pages

官方标准三件套（[static.yml 模板](https://github.com/actions/starter-workflows/blob/main/pages/static.yml)）：`configure-pages → upload-pages-artifact(path: '.') → deploy-pages`，触发只有 `push: branches: [main]` + `workflow_dispatch`，permissions `pages: write + id-token: write`，配 `concurrency: group: pages`。前提：仓库 Settings → Pages → Source 选 **GitHub Actions**。

Actions 方式 vs deploy-from-branch：本站纯静态两者都可行；选 Actions 方式的实际好处 = **校验不过走不到部署**，且 PR 改动永远不会被部署。

### 1.4 AI 接入对比（2026 现状）

| 选项 | 成本 | 评价 |
|---|---|---|
| 纯脚本（无 AI） | 0 | 表单字段足够结构化时**够用**：校验 URL、查重、按模板生成条目。多数 awesome 类仓库的实际选择 |
| 纯脚本 + DeepSeek 单次调用 | 一条建议 <1 厘钱（[定价](https://api-docs.deepseek.com/quick_start/pricing)，deepseek-flash 低谷半价） | 只在"润色推荐语/自动分类"这类非结构化环节挂；输出限定 JSON，不跑 agent |
| anthropics/claude-code-action | API key 按 token，或 Claude 订阅 OAuth token（`claude setup-token` 生成）抵扣 | 功能最全（@claude 即干活、可开 PR），但单次 token 成本高，[usage 文档](https://github.com/anthropics/claude-code-action/blob/main/docs/usage.md) |
| google-github-actions/run-gemini-cli | 免费层 2026 被砍狠（flash 实测 20 次/天，lite 500 次/天） | 上手快但 issue→PR 要自己拼装 |

**结论**：校验/生成用脚本（确定性、零成本、防注入）；AI 不直接写数据文件，最多单次调用润色。让完整 agent 改 JS 数据文件是高射炮打蚊子且扩大注入面。

## 二、防滥用（公开仓库，陌生人也能触发）

1. **fork PR 天然隔离**（平台强制）：secrets 不下发、GITHUB_TOKEN 只读——机器人没法在陌生 PR 里写东西，除非用 workflow_run 链式（跑在主仓库上下文，fpb 教科书实现）。
2. **权限最小化**：顶层 `permissions: {}` 按需给；校验工作流只有 `contents: read`。
3. **永不碰 `pull_request_target`**：跑在基仓库上下文带全部权限，checkout 执行 PR 代码 = 被注入（[官方 pwn request 防御](https://securitylab.github.com/research/github-actions-preventing-pwn-requests/)）。
4. **用户输入绝不 `${{ }}` 插进 run:**：一律走环境变量传给脚本（官方安全强化文档明确）。
5. **label 门控 AI**：issue form 自带 label 只能路由不能授权（提交者自动打上的）；授权 label 必须维护者手动加（普通用户加不了 label）。首次贡献者（author_association=FIRST_TIME_CONTRIBUTOR/NONE）默认只走脚本+人工，不触发 AI。
6. **bot PR 的 CI 需人工批准**（2026-06 官方新规）：[changelog](https://github.blog/changelog/2026-06-11-bot-created-pull-requests-can-run-workflows-if-approved/)——机器人开的 PR，其检查要有写权限的人点 "Approve workflows to run"。正好与"人工核验"铁律同构，平台级兜底。
7. **第三方 action 钉 commit SHA**：前车之鉴 tj-actions/changed-files 2025-03 被劫持（CVE-2025-30066，2.3 万仓库波及，进 CISA 目录）。读改动文件这类小事自己几行 git/jq 实现更稳。
8. 额度：Actions 公开仓库免费，真成本是 LLM token——label 门控即人工限流 + 并发组 cancel-in-progress + 供应商预算告警。

## 三、本站落地形态（定稿建议）

```
① PR 体检（纯规则，免费）
   PR 改了 data/types/*.js → node scripts/validate.mjs
   → 行级注解标错 + check 红叉（配 required check 挡合并）
   → 失败自动贴"待修复"标签（workflow_run 链式绕 fork 只读）

② 部署（官方三件套）
   push main → configure-pages → upload-pages-artifact → deploy-pages
   （校验不过走不到部署这步）

③ 建议表单 → 自动起草（IssueOps）
   填表（名称/URL/分类/理由，required）→ on: issues [opened]
   → 脚本解析 + 查重 + 生成标准 diff → create-pull-request 开 draft PR
   → 回评 issue「已起草 #x，等人工审核」
   → （可选）维护者打 ai-polish label → DeepSeek 单次调用润色 → 更新 PR
   → 人工审核合并 → 自动部署
```

顺序依赖：先推完整仓库 + 开 Pages（当前线上是 2 次提交的半成品：缺数据文件、根目录有误传文件 `1`、README 在线链接是旧账号占位符 skentsun 应改 LycEcho），再上 ①②，最后 ③（AI 环节可选后置）。

## 四、待办（落地时）

- [ ] 同步本地完整版到 LycEcho/oss-zhibei（删 `1`、改 README 链接），需 gh 授权
- [ ] Settings → Pages → Source = GitHub Actions
- [ ] 写 scripts/validate.mjs（按 §1.1 清单）+ pr-check workflow + deploy workflow
- [ ] .github/ISSUE_TEMPLATE 建议表单 + issue→draft-PR workflow（含解析/防注入/env 传递）
- [ ] 分支保护：required check = pr-check
- [ ] （可选后置）ai-polish label 门控的润色工作流（DeepSeek 单次调用）
