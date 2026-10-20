/* ═══ 类型：Agent 技能包 / Skills 生态 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "skills",
  name: "Agent 技能包 / Skills 生态",
  kw: "skills 技能包 claude code 插件 superpowers mattpocock agent skills 市场 plugin",
  one: "给 AI 编码 agent 装能力的包：编码方法论、文档处理、科研工具包……2026 年这条生态一年之间从零长到 30 万星量级。两大流派之争（接管全流程 vs 小而可改编）是本页第一个选型问题。",
  date: "2026-10-20",
  src: "四层漏斗 · 上期雷达双圈信号 + 扩散搜索",
  status: "ok",
  count: 15,
  fit: [
    "用 Claude Code / Codex / Cursor 等编码 agent、想让它更按你的方法论干活的人",
    "想给 agent 加垂直能力（科研/文档/演示文稿）的",
    "同时用多个编码工具、想让技能跨工具同步的"
  ],
  nofit: [
    "以为「装了技能包 = agent 自动变强」的 —— 技能是方法论注入，你要先认同它的方法论",
    "预期生态稳定的 —— 本类型 star 一个月能涨三倍，引用数据必须带日期"
  ],
  dims: [
    ["流派", "接管全流程（superpowers 式完整方法论）vs 小而可改编（mattpocock 式零件）—— 理念之争，先选边"],
    ["宿主", "支持哪些工具：Claude Code / Codex / Cursor / Gemini CLI……跨宿主通用的是趋势"],
    ["官方 vs 社区", "官方目录（自动注册、有审核）vs 社区技能集（自由但质量自担）"],
    ["协议", "本类型连「官方仓库」都可能不是全开源（source-available、无 LICENSE）——逐个看"],
    ["安装方式", "官方插件命令 / npx skills 通用安装器 / 手动 git clone"]
  ],
  segs: [
    {
      name: "综合技能集（开发方法论）",
      tag: "两大流派，先选边",
      def: {
        proj: "superpowers",
        meta: "★ 302.3k（本类型最高）· MIT · 已进官方目录 · 18+ 宿主",
        why: "完整开发方法论框架：brainstorm → spec → plan → TDD → 子代理执行 → review，15 个技能自动触发无需手动调用。适合「想让 agent 按一套严谨流程干活」的人——注意它会接管你的开发流程，认不认同这套方法论是前提。"
      },
      swaps: [
        { t: "反感被接管流程、想要小而可改编的零件", p: "mattpocock/skills", m: "★ 298.0k · MIT · 一个月涨近 20 万星", d: "知名 TypeScript 教育者出品：约 27 个工程/效率技能（tdd、code-review、diagnosing-bugs……），理念明确反对「接管全过程」式框架，强调小型、可组合、可改编。两大流派选哪个看你工作脾气。" },
        { t: "量大管饱、全领域覆盖", p: "claude-skills", m: "★ 28.4k · MIT · ⚠ 约 2 个月未提交", d: "自称 380+ 技能 20 领域——量大但更新已放缓，本页头部里最弱的一个。" }
      ],
      nofit: ""
    },
    {
      name: "官方目录与规范",
      tag: "装前自动注册、有质量审核",
      def: {
        proj: "claude-plugins-official",
        meta: "★ 43.3k · Apache-2.0 · Anthropic 运营 · 当日更新",
        why: "Claude Code 启动即自动注册的官方市场：40 个官方自维护插件（code-review、security-guidance、各语言 LSP……）+ 14 个第三方合作插件（github、playwright、context7 等），上架需过质量与安全审核。装插件的默认入口。"
      },
      swaps: [
        { t: "看官方技能的参考实现与开放规范", p: "anthropics/skills", m: "★ 182.4k · ⚠ 混合：多数 Apache 2.0，文档四件套 source-available", d: "Agent Skills 开放规范（agentskills.io）所在地 + 19 个参考技能。⚠ 注意：docx/pdf/pptx/xlsx 四个文档技能是 source-available 非开源——「官方仓库」不等于「全开源」。" },
        { t: "Cursor 用户", p: "cursor/plugins", m: "★ 13.1k · ⚠ 无 LICENSE 文件", d: "Cursor 版插件规范 + 17 个官方插件。没有任何 LICENSE——按默认版权法你只有使用权没有再分发权，二创前想清楚。" }
      ],
      nofit: ""
    },
    {
      name: "垂直技能包 / 安装器 / 管理器",
      tag: "细分能力与跨工具管理",
      def: {
        proj: "scientific-agent-skills",
        meta: "★ 53.1k · MIT · 177 个科研技能 + 100+ 科学数据库",
        why: "垂直技能包的标杆：生物/化学/医药/药物发现领域，自称 25 万科研人员在用，有配套论文（arXiv）。跨宿主通用（Claude Code/Codex/Cursor/Antigravity 均可装），是「技能包」这个概念商业价值的最强证明。"
      },
      swaps: [
        { t: "跨 50+ 编码工具统一管理技能", p: "skills-manager", m: "★ 6.6k · MIT · 桌面应用 + CLI", d: "统一技能库、内置市场、预设组、多设备同步——多工具重度用户的瑞士军刀（brew/exe/AppImage 全平台）。" },
        { t: "只要一个通用安装命令", p: "vercel-labs/skills", m: "★ 35.8k · MIT · 活跃", d: "npx skills 一条命令跨 agent 安装技能 + skills.sh 市场（按真实安装遥测排名）。" },
        { t: "想逛清单挑着装（索引不是安装包）", p: "awesome-claude-code", m: "★ 56.1k · 自定义许可 · 活跃", d: "社区精选索引：skills/hooks/commands 分类目录。注意它是清单不是软件。" }
      ],
      nofit: ""
    },
    {
      name: "新星观察区（本类型专属）",
      tag: "创建不满半年 · 照实说还没推荐",
      def: {
        proj: "garden-skills",
        meta: "★ 13.0k · MIT · 创建仅 5 个月",
        why: "中文开发者圈技能集合（网页设计、知识检索、图像生成），增速快但资历浅——观察中。"
      },
      swaps: [
        { t: "做 PPT / 短剧 / 网页等垂直场景", p: "dashi-ppt-skill ★9.7k / shuohao-skills ★4.9k / html-anything ★9.2k", m: "创建 2.5-5.3 个月", d: "单技能垂直包新星：可编辑 PPT 生成、中文短剧制作、agentic HTML 编辑器。都太年轻，装着玩可以，别当生产依赖。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "claude-skills 的停滞警示已并入正文（约 2 个月未提交）", b: "另有外媒热传的 anthropics/claude-community 仓库——实测 404 不存在，「314 个官方插件」等口径与实测不符。", s: "本类型二手信息污染严重：一切以仓库实测为准，star 引用必须带日期。" }
  ],
  myths: [
    ["「官方的 = 全开源的」", "anthropics/skills 的文档四件套是 source-available 非开源；cursor/plugins 连 LICENSE 文件都没有。官方背书 ≠ 开源授权。"],
    ["「star 数字什么时候看都一样」", "mattpocock/skills 一个月内从第三方报道的 10 万涨到实测 29.8 万——本类型数据以天为单位变化，引用必须带日期。"],
    ["「外媒推荐的仓库都存在」", "多篇文章引用的 anthropics/claude-community 实测 404；「314 个插件」「87 万次安装」等二手口径与实测有出入。"],
    ["「技能包装得越多越强」", "superpowers（接管全流程）与 mattpocock（反对接管）是两种相反的方法论哲学——全装等于让 agent 在两套哲学之间精神分裂。先选流派，再选包。"]
  ]
});
