/* ═══ 类型：SSH 客户端 / 服务器管理 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "sshclient",
  name: "SSH 客户端 / 服务器管理",
  kw: "ssh 客户端 tabby windterm electerm termius xshell mobaxterm 服务器管理 sftp 终端",
  one: "连服务器用的图形终端。本页的核心命题是「Termius 的免费替代有哪些路线」——桌面平替、自托管网页版、移动端覆盖，三条路线各有答案。顺带一个国产高星项目的停更警示。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（Termius alternative 生态）",
  status: "ok",
  count: 9,
  fit: [
    "管一堆服务器、想要多标签+图形 SFTP+会话管理的运维/开发者",
    "被 Termius 云同步订阅劝退、想找免费路线的",
    "要给团队统一服务器管理入口的（自托管段）"
  ],
  nofit: [
    "纯命令行老炮 —— OpenSSH 本体就是你的答案，图形客户端是给需要会话管理的人准备的",
    "以为「XShell 个人免费能带到公司用」的 —— 其免费授权仅限个人/教育，商用违反 EULA"
  ],
  dims: [
    ["路线", "桌面客户端 / 自托管网页版 / 移动端覆盖 —— 三条免费路线解决 Termius 痛点"],
    ["图形 SFTP", "内置 / 插件 / web 版提供 —— Tabby 用户最常踩的点"],
    ["同步", "Termius 把云同步放收费墙里；开源阵营同步普遍免费（gist/WebDAV/自建）"],
    ["维护状态", "高星 ≠ 活跃：32.5k 星的 WindTerm 已 14 个月无提交"],
    ["协议广度", "SSH 之外要不要 RDP/VNC/串口/Spice——electerm 是覆盖之王"]
  ],
  segs: [
    {
      name: "桌面客户端（图形全能）",
      tag: "多标签 + SFTP + 插件",
      def: {
        proj: "Tabby",
        meta: "★ 75.0k · MIT · 活跃",
        why: "图形全能系旗舰：SSH/Telnet 连接管理器（跳板机/端口转发/agent forwarding）、插件生态最丰富（docker/SFTP/串口/MCP server 等设置内直装）、分屏+Quake 下拉窗。官方自述「不是轻量终端」——要的就是全功能。⚠ SFTP 靠 web 版或插件提供，不是开箱内置。"
      },
      swaps: [
        { t: "协议覆盖之王（SSH/SFTP/FTP/RDP/VNC/串口 一体）+ 免费同步 + 移动端", p: "electerm", m: "★ 15.4k · MIT · 当日级活跃", d: "国产开源：全协议含 RDP/VNC/Spice，覆盖国产系统（UOS/麒麟/LoongArch）与鸿蒙/iOS；数据同步走 gist/WebDAV/自建全免费，内置 AI 助手。" },
        { t: "2026 新锐：内置 AI Agent 管服务器", p: "Netcatty", m: "★ 6.7k · GPL-3.0 · 当天有提交", d: "作者自述因 Termius 订阅太贵而做：自然语言操作服务器、SFTP 双面板、多主机编排。很年轻，媒体称的「免费云同步」在仓库正文未确认，引用需注明。" }
      ],
      nofit: ""
    },
    {
      name: "自托管网页版",
      tag: "浏览器就是客户端，数据全在自己服务器",
      def: {
        proj: "Termix",
        meta: "★ 15.6k · Apache-2.0 · 活跃",
        why: "把 Termius 的体验搬进自托管：Docker 一键部署，浏览器/PWA/移动端访问；SSH 终端（4 分屏+宏）、SFTP 文件管理器（含服务器互传）、Docker 管理、监控全部插件化（约 30 个官方插件）；OIDC/2FA/审计日志/静态加密齐备。团队统一服务器管理入口的答案。"
      },
      swaps: [],
      nofit: ""
    },
    {
      name: "底层对照",
      tag: "所有图形工具脚下的地基",
      def: {
        proj: "OpenSSH",
        meta: "★ 4.1k · BSD 系 · 持续维护",
        why: "SSH 协议的参考实现：ssh/sshd/scp/sftp/ssh-keygen 全套命令行件，sshd 沙箱加固。图形客户端们吵得再热闹，底下跑的都是它——服务端加固看它，客户端选型才是本页的事。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "WindTerm（★ 32.5k）—— 高星但已停滞 14 个月 + 部分开源", b: "国产高性能终端（协议最全、内存优化、图形 SFTP），但最后提交 2025-02，release 也停在同日；README 自述「源码逐步开放中」——即 Apache-2.0 之外仍有未开放部分。", s: "存量可用，但一年多没动+许可不完整，新选型绕行。高星与停更并存是本页最重要的一课。" },
    { t: "闭源对照（不进名单）：Termius / XShell / MobaXterm", b: "Termius：全平台体验最完整，但跨设备云同步=Pro $10/月（年付价）。XShell+Xftp：个人/教育免费但禁商用。MobaXterm：Windows 免费全能但限 12 会话/2 隧道/4 宏，Pro $69。", s: "三个对照各有明确的收费点或限制——免费替代的靶心就在这。" }
  ],
  myths: [
    ["「WindTerm 3 万多星，社区大、放心用」", "star 是历史积累不是维护承诺：14 个月无提交、release 同步停摆、「源码逐步开放中」意味着许可不完整。本页高星停更第一案例。"],
    ["「Termius 免费版够用了」", "本地 vault 和 SSH 确实免费，但它的核心卖点「跨设备加密云同步」明确在 Pro 付费墙（$10/月年付价）。要同步的，开源路线 electerm（免费同步）或 Termix（自托管）都在等。"],
    ["「XShell 免费版公司也能用」", "官网写明「家庭与学校免费」仅限个人与教育用途，商用违反 EULA。公司环境要么买授权，要么换开源方案。"],
    ["「star 最高的 Tabby 一定最好」", "Tabby 75k 星是图形全能旗舰没错，但它的 SFTP 要靠 web 版或插件——要内置图形 SFTP 的看 WindTerm（停更警示）/electerm，没有全答统一的卷。按你的痛点选，别按 star 选。"]
  ]
});
