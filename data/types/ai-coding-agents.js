/* ═══ 类型：AI 编程助手（coding agents）═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "agents",
  name: "AI 编程助手（coding agents）",
  kw: "ai 编程 claude code codex opencode gemini cli cline aider cursor windsurf coding agent 编码助手",
  one: "终端 CLI、IDE 插件、自主 agent 三种形态的 AI 编码工具。2026 年这条赛道刚经历大洗牌——三个曾经的头部项目停运/被收购/改名，本页数据截至洗牌后，帮你避开存量陷阱。",
  date: "2026-10-20",
  src: "四层漏斗 · coding agents 为英文圈最高频词 + 扩散搜索",
  status: "ok",
  count: 17,
  fit: [
    "想在终端里用自然语言改代码、跑 git 的开发者（CLI 段）",
    "想在 IDE 里获得跨文件修改与审批闸门的（插件段）",
    "想让 AI agent 自主跑多步任务、甚至编排多个 agent 的（编排段）"
  ],
  nofit: [
    "预期「开源项目 = 官方工具的免费同款」的 —— 官方 CLI（Claude Code 等）闭源且绑定订阅，开源阵营是另一套体验",
    "想要开箱零配置的 —— 开源阵营普遍 BYOK（自备各家 API key），部分支持复用已有订阅"
  ],
  dims: [
    ["工作形态", "终端 CLI / IDE 插件 / 自主 agent 编排 —— 决定下面选哪段"],
    ["接入方式", "BYOK（自带各家 key，自由换模型）vs 绑定官方订阅（省心但锁定）"],
    ["协议", "MIT/Apache 宽松系 vs FSL 期限开源 vs 完全专有 —— 三档分明"],
    ["活跃度", "本赛道洗牌极快：三个头部项目 2026 年内停运/被收购/改名 —— 提交日期是第一信号"],
    ["模型自由度", "能否接本地模型（Ollama）与任意 OpenAI 兼容端点"]
  ],
  segs: [
    {
      name: "终端 CLI",
      tag: "在终端里指挥 agent 干活",
      def: {
        proj: "opencode",
        meta: "★ 218.2k（开源阵营第一）· MIT · 当日仍在提交",
        why: "自称「The open source coding agent」，BYOK 接 75+ 家提供商（含 Ollama 本地模型与任意 OpenAI 兼容端点），内置 build（全权）/ plan（只读）双 agent 与子代理。注意：原 sst 组织已更名 anomalyco，认准现名。"
      },
      swaps: [
        { t: "有 ChatGPT 订阅、想要 OpenAI 官方出品", p: "Codex CLI", m: "★ 130.0k · Apache-2.0（开源）· 活跃", d: "开源但推荐路径是登录 ChatGPT 订阅（Plus/Pro 等），API key 属次要路径。可装入 VS Code/Cursor 等作为扩展。" },
        { t: "用 Google 生态", p: "gemini-cli", m: "★ 107.5k · Apache-2.0 · 活跃", d: "⚠ 免费档用户注意：官方公告 2026-06-18 起免费档被导向 Antigravity CLI，且 gemini-cli 未针对 Gemini 4 优化——白嫖党先确认自己的路还通不通。" },
        { t: "用 Qwen 生态、要阿里官方维护", p: "qwen-code", m: "★ 28.6k · Apache-2.0 · 活跃", d: "源自 gemini-cli fork，自称 Claude Code 平替，迭代凶猛。" },
        { t: "喜欢精致终端 UI（TUI）", p: "crush", m: "★ 28.7k · FSL-1.1-MIT（非传统开源）", d: "Charm 出品。注意协议：FSL 禁止「竞争用途」，每版两年后自动转 MIT——不是 OSI 开源，商用竞争品慎用。" },
        { t: "Python 生态、AI 结对编程鼻祖", p: "aider", m: "★ 49.7k · Apache-2.0 · ⚠ 2026-05 后无提交", d: "纯 BYOK、自动 git 提交、repo map 撑大项目。但维护明显放缓，社区已在讨论替代品——存量可用，新选型建议先看上面的活跃选项。" }
      ],
      nofit: ""
    },
    {
      name: "IDE 插件",
      tag: "在 VS Code / JetBrains 里干活",
      def: {
        proj: "Cline",
        meta: "★ 70.6k · Apache-2.0 · 当日仍在提交",
        why: "插件形态最主流的选择：跨文件改码 + diff 审查 + 检查点，Plan/Act 双模式带审批闸门，BYOK 接任意提供商（含 Ollama/LM Studio 本地）。已扩展出 CLI、桌面端与 SDK 多形态。"
      },
      swaps: [
        { t: "想要「免 key 起步」+ 模型零加价通道", p: "Kilo Code", m: "★ 27.7k · MIT · 活跃", d: "500+ 模型按提供商原价走、零加价，也可完全 BYOK；CLI 是 opencode 的 fork。" }
      ],
      projects: [],
      nofit: "已被停运项目占坑的：见下方警示区，Roo Code 与 Continue 都在这个形态里倒下。"
    },
    {
      name: "自主 agent / 编排中心",
      tag: "让 agent 自己跑多步任务",
      def: {
        proj: "OpenHands",
        meta: "★ 91.3k · MIT · 当日仍在提交 · 自托管",
        why: "已从单体 agent 演变为「Agent Canvas」开发者控制中心：自托管（本地/Docker/VM/云），可编排自家及第三方 agent（Claude Code、Codex、OpenCode 经 ACP 接入），带定时/webhook 自动化与 Slack/GitHub 集成。BYOK，云服务可选。安全提示：无沙箱运行会给 agent 完整文件系统权限，务必开启 Docker 隔离。"
      },
      swaps: [
        { t: "想复用已有的 Claude/ChatGPT/Gemini 订阅", p: "goose", m: "★ 55.5k · Apache-2.0 · Linux 基金会 AAIF 治理", d: "Block 开源、基金会接管，经 ACP 协议复用现有订阅，MCP 扩展 70+。治理结构在开源 agent 里最正规。" },
        { t: "元老级、追求极简与全本地", p: "gptme", m: "★ 4.5k · MIT · 活跃", d: "2023 年就在的终端个人 agent，可复用 ChatGPT Plus 订阅、可接 Ollama 全本地，体量小但活得好。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "Roo Code（★ 24.3k）—— 已停运归档", b: "2026-05-15 正式停运并归档仓库，v3.54.0 为最终版。已安装用户可继续用但不再有安全补丁；团队转向云端 agent Roomote。", s: "社区迁移方向：上游 Cline、Kilo Code。别再新装。" },
    { t: "Continue（★ 36.3k）—— 被收购后只读", b: "2026-06 被 Cursor（Anysphere）收购，仓库标注「不再维护、对所有用户只读」，云服务已关。最终版 2.0.0 移除了云依赖，留下一个干净可 fork 的库。", s: "JetBrains 用户被官方建议迁移到其 CLI；存量可用，无后续。" },
    { t: "plandex（★ 15.8k）", b: "终端大型任务编码引擎，官方云服务 2025-10 关停，代码停滞约一年。", s: "README 自述 winding down，选型慎入。" },
    { t: "闭源对照区（不进推荐名单）：Claude Code / Cursor / Windsurf", b: "Claude Code（★ 152.8k）仓库只含文档/插件/issue，CLI 本体闭源（All rights reserved），绑定 Claude 订阅。Cursor：闭源 VS Code fork，Pro $20/月。Windsurf：2026-06 已更名 Devin Desktop（Cognition 旗下）。", s: "三者体验成熟但锁定生态；本页只做选型参考，谁好用你自己试。" }
  ],
  myths: [
    ["「Claude Code 在 GitHub 有 15 万星，是开源的」", "不是。仓库里只有文档、插件示例和 issue 区，CLI 本体一行源码都没有——协议栏写的是 All rights reserved。它是本页的闭源对照项，不是开源推荐。"],
    ["「Codex 开源了，等于免费随便用」", "代码 Apache-2.0 没错，但官方推荐路径是登录 ChatGPT 付费订阅，API key 属于「需要额外配置」的次要路径。开源的是壳，喂模型的还是你的钱。"],
    ["「Roo Code / Continue 还能正常装」", "一个已停运归档（无安全补丁），一个被收购后只读。存量能用，但 2026 年新选型选它们等于接盘。"],
    ["「star 最高就是最好的」", "opencode 21.8 万星是开源第一，但先看形态匹配：终端党选 CLI、IDE 党选插件、要编排选 OpenHands——跨形态比 star 没有意义。"]
  ]
});
