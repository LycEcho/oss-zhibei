/* ═══ 类型：设备间传文件（AirDrop 平替）═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "sendfile",
  name: "设备间传文件（AirDrop 平替）",
  kw: "传文件 localsend airdrop 互传 局域网传输 隔空投送 手机电脑互传 snapdrop croc",
  one: "手机和电脑、电脑和电脑之间互传文件，不用网盘不用数据线。分三种玩法：同网段直传、命令行加密传输、自托管中转——先想清楚对方是谁、在哪个网络。",
  date: "2026-10-20",
  src: "四层漏斗 · 扩散搜索（LocalSend 生态横评）",
  status: "ok",
  count: 12,
  fit: [
    "手机和电脑之间频繁互传照片、文件的人",
    "跨 Windows / Mac / Linux / 安卓多设备办公的",
    "要给客户或朋友发大文件、不想传网盘的"
  ],
  nofit: [
    "想和 iPhone 的 AirDrop 直接互传的 —— 协议不通，开源方案只在装了同一工具的设备间工作",
    "对端是完全不懂技术的长辈且设备不受控 —— 选浏览器方案（见 PairDrop）并做好现场指导"
  ],
  dims: [
    ["对方设备", "装得了 app（同网段直传）/ 装不了（浏览器或 QR 码）/ 纯命令行场景"],
    ["网络环境", "同一个 WiFi？跨网络？—— 决定直传还是中转"],
    ["加密需求", "敏感文件看端到端加密（croc / wormhole 的 PAKE）；一般文件 HTTPS 足够"],
    ["平台覆盖", "iOS 支持普遍是开源方案的短板，选型时逐个核对"],
    ["维护状态", "本类型祖师爷 Snapdrop 已停更被收购 —— 提交日期先看一眼"]
  ],
  segs: [
    {
      name: "同网段直传（GUI，AirDrop 平替主流）",
      tag: "同一 WiFi 下互传，装 app",
      def: {
        proj: "LocalSend",
        meta: "★ 95.0k · Apache-2.0 · 当月有提交",
        why: "品类头部：跨 Windows/macOS/Linux/Android/iOS 全平台，无需第三方服务器与账号，HTTPS 传输且 TLS 证书在每台设备上现生成。有官方 CLI，支持文本与文件夹互发。"
      },
      swaps: [
        { t: "对方设备装不了 app（演示、临时场景）", p: "PairDrop", m: "★ 11.6k · GPL-3.0 · 维护中（节奏放缓）", d: "浏览器打开即传的 Snapdrop 社区续作：6 位码持久配对、临时公共房间可跨网、可自托管。" },
        { t: "主要和安卓手机互传、想要原生协议直连", p: "rquickshare", m: "★ 3.6k · GPL-3.0 · 活跃", d: "与安卓原生 Quick Share 协议互通（mDNS+蓝牙广播），安卓端不用装任何东西；目前 Linux 端成熟，macOS 还在进行中。" },
        { t: "Linux Mint 用户 / 只在 Linux 生态内", p: "Warpinator", m: "★ 1.6k · GPL-3.0 · 活跃", d: "Mint 系出品，组口令安全模式；注意 Android/Windows 端是第三方非官方实现。官网警告 warpinator.com/.net 为假冒网站。" }
      ],
      nofit: ""
    },
    {
      name: "命令行加密互传（跨网络也稳）",
      tag: "终端党、敏感文件、断点续传",
      def: {
        proj: "croc",
        meta: "★ 40.7k · MIT · 活跃 · 支持断点续传",
        why: "一条命令把文件安全送出去：基于 PAKE 的端到端加密（对口令派生强密钥），P2P 优先中继回退，中继可自建，断点续传、多文件文件夹、IPv6 全都有。"
      },
      swaps: [
        { t: "更老牌、学术验证的加密方案", p: "magic-wormhole", m: "★ 23.0k · MIT · 活跃", d: "SPAKE2 由短口令派生密钥，中继只见密文；一次性人工可读码，恶意服务器也只有一次猜测机会。比 croc 更早，主流发行版均有打包。" },
        { t: "电脑 → 手机，手机什么都不想装", p: "qrcp", m: "★ 10.5k · MIT · 活跃", d: "终端起临时 web 服务生成二维码，手机扫码即收；收发双向，可选 HTTPS（需自带证书，默认关闭）。" }
      ],
      nofit: ""
    },
    {
      name: "自托管中转（给外部人发文件）",
      tag: "WeTransfer 式，对方拿链接下载",
      def: {
        proj: "PsiTransfer",
        meta: "★ 2.0k · BSD-2-Clause · 低速维护",
        why: "自托管的一次性文件分享：上传到自己服务器，对方拿限时链接下载，一次性下载 + bucket 过期 + AES 口令保护下载列表。注意如实标注：尚无端到端载荷加密——传输敏感内容需自行叠加。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "Snapdrop（★ 19.7k）—— 祖师爷退场", b: "浏览器直传鼻祖，2025-02 起约 20 个月零提交，已被 LimeWire 收购并导向其商业平台；经典版仍可自托管。", s: "续作是 PairDrop（Snapdrop 的社区 fork），新选型直接用它。" },
    { t: "timvisee/send（★ 5.9k）", b: "Firefox Send 的社区复活版（端到端加密血统），但已约 15 个月无提交；GitHub 仓库只是镜像，主仓在 GitLab。", s: "「自称活体项目」与实际提交记录不符——以提交日期为准。" },
    { t: "LANDrop（★ 6.0k）—— 临时闭源，慎列开源推荐", b: "README 原文宣布「temporarily close source」，仓库已两年无提交且不再反映最新发布版（成品在官网）。跨平台覆盖曾是卖点。", s: "搜索结果里常被当开源竞品罗列——引用它必须带上这个坑。" },
    { t: "AirDrop（闭源对照，不进名单）", b: "苹果私有方案（蓝牙发现 + AWDL 点对点），仅 Apple 设备生态内可用。", s: "本页所有开源项目的共同对照物，但协议不通、无法与它们互传。" }
  ],
  myths: [
    ["「LocalSend 是 AirDrop 平替，能和 iPhone 的 AirDrop 互传」", "不能。LocalSend 用自己的协议（端口 53317），AirDrop 用苹果私有 AWDL——两者互不相通。想不装 app 和安卓原生互传的是 rquickshare。"],
    ["「开源项目会一直开源」", "LANDrop 2024 年宣布临时闭源，仓库两年不动且不反映最新版本。选型时看仓库提交日期和 LICENSE 状态，别只看当年口碑。"],
    ["「浏览器打开就能传，最方便就是最好」", "PairDrop/Snapdrop 的传输加密细节未在 README 明确说明——日常文件无妨，敏感文件选端到端加密的 croc / magic-wormhole。"],
    ["「README 说自己是活体项目就是活体」", "timvisee/send 自称「社区接力的活体项目」，实际 15 个月无提交。判断活跃度只看最后提交日期。"]
  ]
});
