/* ═══ 类型：代码编辑器 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "codeeditor",
  name: "代码编辑器",
  kw: "编辑器 vscode zed neovim vscodium helix lapce 代码编辑 ide 轻量编辑器",
  one: "从 VS Code 的许可身份拆解，到「开源 Cursor」Void 的死亡——本页把编辑器的许可光谱（真开源 → 源码可得但成品专有）铺成一根连续的轴给你看，顺带记录一个反直觉规律：AI 越强的编辑器，离「纯净开源」越远。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（VS Code alternative 生态）",
  status: "ok",
  count: 10,
  fit: [
    "被 VS Code 遥测与许可困扰、想要干净替代的（VSCodium 段）",
    "嫌 Electron 重、要原生性能的（Zed/Lapce 段）",
    "终端流老玩家（Neovim/Helix 段）"
  ],
  nofit: [
    "以为「VS Code 标着 MIT 所以是开源软件」的 —— 源码 MIT、官方成品专有+遥测，双重身份要拆开看",
    "在找「开源 Cursor」的 —— Void 已官方弃维，本页警示区有详情"
  ],
  dims: [
    ["形态", "现代原生（Rust+GPU）/ 终端系 / VS Code 系（Electron）—— 性能与生态的取舍"],
    ["许可身份", "连续谱：MIT/Apache 纯开源 → GPL+托管服务 → 源码可得+成品专有（VS Code 式）"],
    ["AI 能力", "与「纯净开源」当前呈负相关：AI 最强的 Zed 是 copyleft+托管服务模式"],
    ["插件生态", "VS Code 官方市场 80k+ 且条款绑定专有成品；VSCodium 只能用 Open VSX"],
    ["存活率", "开源编辑器死亡率不低：Void 弃维、Lite XL 减速、Atom 已成历史（Pulsar 续命）"]
  ],
  segs: [
    {
      name: "现代原生系（Rust + GPU 渲染）",
      tag: "性能派，嫌 Electron 重的来",
      def: {
        proj: "Zed",
        meta: "★ 92.0k · GPL-3.0（部分组件 Apache-2.0）· 当日仍有提交 · v1.24.3",
        why: "Atom 与 Tree-sitter 原班人马用 Rust 从零重写：GPU 渲染、多核并行，本页 AI 能力最强——内置 agentic editing、自研开放权重模型 Zeta2 驱动编辑预测、经 ACP 接入 Claude Agent/Codex/OpenCode、支持 MCP、不锁模型可自带 key。1.x 已发。注意许可身份：编辑器本体 GPL-3.0 开源，官方托管协作服务不在本仓库。"
      },
      swaps: [
        { t: "同为 Rust 原生但想要 Apache-2.0 纯净许可", p: "Lapce", m: "★ 38.9k · Apache-2.0 · 活跃（曾放缓已恢复）", d: "「任何按键延迟都被当 bug 修」的性能哲学，WASI 插件（任意语言可写）。但无原生 AI，生态早期，版本仍在 0.4.x。2024 中-2025 上半年曾有 10 个月发版空窗，此后恢复。" }
      ],
      nofit: ""
    },
    {
      name: "终端系",
      tag: "键盘流的老家",
      def: {
        proj: "Neovim",
        meta: "★ 103.1k · Apache-2.0（Vim 移植部分除外）· 当日提交 · 月更补丁",
        why: "终端系事实标准：以可扩展性重造的 Vim 分支，Lua 插件生态最庞大（init.lua 一切皆可配）、内置 LSP/Tree-sitter/终端、RPC 让任何语言都能写扩展、还能 --embed 嵌进别的编辑器当引擎。学习曲线陡是唯一的坑——但这坑本身是它的护城河。"
      },
      swaps: [
        { t: "想要开箱即用、拒绝配置地狱", p: "Helix", m: "★ 46.6k · MPL-2.0 · 年度大版本制", d: "Kakoune 式多光标 + 内置 LSP/模糊查找（batteries included），「No Electron. No VimScript. No JavaScript.」。⚠ 硬短板如实告知：至今没有插件系统（官网自认「someday 会有」）——极简主义的两面。" }
      ],
      nofit: ""
    },
    {
      name: "VS Code 系（Electron）",
      tag: "要 VS Code 生态但不要微软的壳",
      def: {
        proj: "VSCodium",
        meta: "★ 33.7k · 二进制 MIT 免遥测 · 活跃",
        why: "「去掉微软的 VS Code」：用上游 MIT 源码构建的免遥测二进制，品牌/遥测/专有许可全部剥离。⚠ 两个如实告知：① 插件只能用 Open VSX 市场（微软 Marketplace 条款禁止配套非官方构建使用），且部分扩展（如 Copilot 系）许可上不可用；② 它与 VS Code 同源同重，非性能主张。"
      },
      swaps: [
        { t: "就要官方 VS Code（接受身份）", p: "VS Code（闭源对照）", m: "★ 194.0k · 源码 MIT + 成品专有 · 双重身份", d: "官网自称「The open source AI code editor」——「开源」指的是源码可得层（Code-OSS 是 MIT），官方发布的成品是专有许可 + 内置遥测。Copilot 全家桶 + 80k+ 插件市场是真实的护城河，但插件市场条款与专有成品绑定。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "Void（★ 28.7k）—— 「开源 Cursor」已官方弃维", b: "VS Code fork 的开源 AI 编辑器，曾以「开源 Cursor」对标出圈。README 原文宣布 deprecated、不再接受贡献，官方指向 void-forks 列表供后续者接力（2026-06 起）。", s: "搜「开源 AI 编辑器」的高频结果——已死，fork 们群龙无首，选型绕行。" },
    { t: "Lite XL（★ 6.5k）—— 减速中", b: "极致轻量（Lua 写的）文本编辑器，已约 7 个月未 push。", s: "喜欢极简的可以玩，别指望节奏。" },
    { t: "Pulsar（★ 4.2k）—— Atom 的社区续命", b: "Atom 2022 年停服后的社区续作，延续 Atom 包生态，仍活跃但体量小。", s: "Atom 老用户的收容所；新用户没有入坑理由。" }
  ],
  myths: [
    ["「VS Code 是开源软件」", "最著名的许可双重身份：仓库源码（Code-OSS）是 MIT，但微软官方发布的成品是专有许可 + 内置遥测，插件市场条款也绑定专有成品。官网自称 open source 指的只是源码层。想要真开源成品 = VSCodium。"],
    ["「AI 最强的编辑器就是最好的编辑器」", "本页一个反直觉规律：AI 能力与「纯净开源」呈负相关——AI 最强的 Zed 是 GPL+托管服务模式，纯 MIT/Apache 系（Lapce/Helix/Lite XL）AI 全部空白。要 AI 还是要纯净，是真实取舍。"],
    ["「Helix 是 Neovim 的现代替代」", "编辑理念相通但能力互补：Helix 开箱即用却至今没有插件系统（官网自认），Neovim 配置地狱却什么都能装。「替代」不成立，是两种哲学。"],
    ["「star 最高的编辑器最值得用」", "VS Code 194k 星第一，但它的 star 一半属于「专有成品」；开源侧 star 最高的 Neovim 103k 又是最难上手的。本类型 star 与「适合你」的相关性，可能是全部页面里最低的。"]
  ]
});
