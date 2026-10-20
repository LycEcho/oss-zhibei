/* ═══ 类型：终端模拟器 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "terminal",
  name: "终端模拟器",
  kw: "终端 terminal ghostty alacritty wezterm kitty warp windowsterminal 终端模拟器",
  one: "GPU 渲染时代终端的战国格局：Ghostty 横空出世、Warp 突然开源、WezTerm 单人维护拉响警报。本页事实纠偏一处流传广泛的说法——Warp 已经不是闭源软件了。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（Ghostty vs Alacritty vs WezTerm 生态）",
  status: "ok",
  count: 9,
  fit: [
    "嫌系统自带终端难用、想要 GPU 渲染现代体验的所有人",
    "有配置癖、想把终端调成自己形状的极客",
    "活在终端里的开发者（选终端前先想清楚 tmux 要不要一起解决）"
  ],
  nofit: [
    "Windows 用户想用 Ghostty/kitty 的 —— 它们都放弃 Windows，WT 是你的答案",
    "以为「终端选哪个无所谓」的 —— 配置哲学三极分化（GUI/key=value/编程式），选错天天难受"
  ],
  dims: [
    ["平台覆盖", "第一分水岭：五平台全占只有 WezTerm；Ghostty/kitty 无 Windows；iTerm2 仅 Mac"],
    ["配置哲学", "三极：GUI 图形设置（低门槛）↔ key=value 极简 ↔ Lua 编程式（高自由）"],
    ["内置多路复用", "要不要内置 tmux 能力——WezTerm 有、Alacritty 刻意没有（设计如此）"],
    ["维护风险", "单人维护是本类型结构性风险（WezTerm 案例）；Warp 从闭源转开源是 2026 最大变量"],
    ["渲染", "全员 GPU 化已成共识，差异在原生 UI（Ghostty Metal/SwiftUI）vs 跨平台 OpenGL"]
  ],
  segs: [
    {
      name: "GPU 现代系",
      tag: "快、好看、可折腾",
      def: {
        proj: "Ghostty",
        meta: "★ 62.4k · MIT · 当日提交 · macOS/Linux（无 Windows）",
        why: "HashiCorp 联合创始人 Mitchell Hashimoto 出品、Zig 写就、2025 年大热：卖点「快、功能全、平台原生 UI 三者兼得」——macOS 上是真 SwiftUI+Metal 应用，Linux 上 GTK+OpenGL，配置却是最简单的 key=value。libghostty 可嵌入库、Kitty 图形协议兼容领先。2026 年各对比文共识：多数人的默认选择。"
      },
      swaps: [
        { t: "极致性能与资源占用、接受没有 tabs/splits", p: "Alacritty", m: "★ 66.0k · Apache-2.0 · 活跃 · v0.17", d: "极简性能派：OpenGL 渲染、资源占用最低，「不集成其他应用的功能，tabs/splits 留给窗口管理器和 tmux」——没有这些不是缺陷是设计。" },
        { t: "要内置多路复用替代 tmux、五平台全占", p: "WezTerm", m: "★ 29.3k · MIT · 活跃（有前科）", d: "Rust+Lua 编程式配置（配置是真程序），内置 SSH/串口/多路复用（断线会话不丢），唯一五平台全占。⚠ 维护风险如实告知：稳定版停滞 2024-02 至今、7,000+ 提交来自一人，2025-12 社区曾公开质疑停更，2026-06 维护者回归并新增第二位维护者——未弃坑但建议跟 nightly。" },
        { t: "要功能最全的老牌 + 协议创新者", p: "kitty", m: "★ 35.4k · GPL-3.0 · 活跃 · 无 Windows", d: "可编程 tabs/splits、Python 扩展体系；自创的 Kitty 图形协议（图片/动画）与键盘协议已成行业事实标准（Ghostty 都实现了它）。" },
        { t: "追求桌面+浏览器双形态的差异化", p: "Rio", m: "★ 7.6k · MIT · 活跃", d: "GPU 新生代，Metal 渲染，视觉特性激进（CRT shader），主打桌面+浏览器（WASM）都能跑。" }
      ],
      nofit: ""
    },
    {
      name: "官方 / 经典系",
      tag: "不开折腾，开箱即用",
      def: {
        proj: "Windows Terminal",
        meta: "★ 105.2k · MIT · 当日提交 · Windows 独占",
        why: "微软官方出品、本页 star 最高：多标签/多窗格/标签撕离、GPU 加速渲染、PowerShell/CMD/WSL 发行版/Azure Cloud Shell 全部能挂，图形设置界面零门槛——Windows 用户的默认答案，不用犹豫。"
      },
      swaps: [
        { t: "macOS 经典老牌、功能大而全", p: "iTerm2", m: "★ 18.2k · GPL-2.0 · 仅 macOS · 活跃", d: "2011 年至今的 mac 终端经典：tmux -CC 集成（窗格变原生窗口）、Shell Integration（命令追踪/SCP 点击下载）、2026 版已内置 AI Chat（可读终端内容代跑命令）。" },
        { t: "跨平台全家桶、不想碰配置文件", p: "Tabby", m: "★ 75.0k · MIT · 活跃", d: "Electron 路线：终端+SSH/Telnet+串口一体、插件/主题生态、GUI 设置——SSH 重度用户请配合本站 SSH 客户端页食用。" }
      ],
      nofit: ""
    },
    {
      name: "AI 商业开源对照",
      tag: "2026 年最大变量：Warp 开源了",
      def: {
        proj: "Warp",
        meta: "★ 65.6k · AGPL-3.0 + MIT（UI 部分）· 当日提交 · 全平台",
        why: "⚠ 事实纠偏：Warp 已于 2026-04-28 官宣开源（客户端 AGPL 为主、UI crates 双 MIT），不再是闭源软件——开源当日即 3.6 万星，8 个月 6.6 万。AI 优先的「agentic 开发环境」：内置 coding agent、也支持自带 Claude Code/Codex 等外部 agent、Warp Factories 用代码定义 agent 流水线。⚠ open-core 注意：客户端开源，云平台 Oz/后端仍专有。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "WezTerm 稳定版停滞（⚠ 未死，有前科）", b: "最后稳定版 2024-02-03，此后两年多只发 nightly；2025-12 社区公开质疑停更（归因：单人维护者倦怠无报酬）；2026-06 维护者回归并增设第二位维护者，2026-10 仍活跃提交。", s: "结构性风险未根治（第二贡献者提交量仅为主要维护者的 2%）：选它可以，跟 nightly，别指望稳定版节奏。" }
  ],
  myths: [
    ["「Warp 是闭源 AI 终端」", "过期信息：2026-04-28 官宣开源（客户端 AGPL 为主），OpenAI 是开源仓库创始赞助方。但它是 open-core——客户端开源、云平台 Oz 仍专有，别把两层混为一谈。"],
    ["「WezTerm 已经弃坑了」", "稳定版停滞两年多是事实，但 2026-06 维护者回归、次日历仍在推进。「单人维护的疲态」与「弃坑」是两种病，前者可逆——但选型时要把这个风险写进决策。"],
    ["「Alacritty 功能残缺，连分屏都没有」", "刻意设计：「不重新实现别的应用的功能，tabs/splits 最好留给窗口管理器或多路复用器」（README 原文哲学声明）。批评它没有 tmux 功能，就像批评螺丝刀不会敲钉子。"],
    ["「终端都一样，系统自带凑合用」", "配置哲学三极分化（GUI 低门槛/key=value 极简/Lua 编程式），平台覆盖各不相同（Ghostty/kitty 弃 Windows、WezTerm 五平台）——天天用的工具，选错哲学天天难受。"]
  ]
});
