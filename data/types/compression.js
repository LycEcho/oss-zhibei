/* ═══ 类型：压缩 / 解压 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "compress",
  name: "压缩 / 解压",
  kw: "压缩 解压 7zip nanazip peazip keka winrar bandizip 压缩软件 解压软件",
  one: "最古老的工具品类，也有最新的坑：7-Zip 在 GitHub 才 4 千星（因为那只是镜像）、Bandizip「改个人免费」的说法与事实相反、Keka 连 LICENSE 文件都没有。压缩界的协议与传闻水深超乎想象。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（7-Zip alternative 生态）",
  status: "ok",
  count: 7,
  fit: [
    "Windows 用户想要现代体验的压缩工具（NanaZip 段）",
    "跨平台要处理 200+ 种格式的全能选手（PeaZip 段）",
    "macOS 用户想压 7z/zstd 这些系统原生不支持的格式（Keka 段）"
  ],
  nofit: [
    "以为「网上下载的无广告 Bandizip」是官方的 —— 均为第三方魔改，已有下载中毒案例",
    "以为开源工具能创建 RAR 的 —— 全宇宙只有 WinRAR 能创建 RAR，开源阵营只能解"
  ],
  dims: [
    ["平台", "Windows 生态（7-Zip 系）/ 跨平台 GUI / macOS（Keka）/ Linux 轻量（Xarchiver）"],
    ["格式面", "解压格式数量 PeaZip（243 种）> 7-Zip 系（30+）—— 但常用格式大家都全"],
    ["RAR 立场", "所有开源工具都只能「解压」RAR——创建 RAR 是 WinRAR 的独家垄断（UnRAR 源码受限许可所致）"],
    ["许可拼图", "7-Zip 本身就是 LGPL+BSD+unRAR 三段混合许可；NanaZip 的 MIT 只盖自己那层"],
    ["安全", "压缩包是投毒重灾区：7-Zip 2026 年连修两个 CVE（含 XZ 解压 RCE），保持更新"]
  ],
  segs: [
    {
      name: "Windows 生态（7-Zip 系）",
      tag: "标杆 + 它的现代外壳",
      def: {
        proj: "7-Zip",
        meta: "★ 4.2k（GitHub 仅镜像）· LGPL+BSD+unRAR 混合 · 活跃 · v26.04",
        why: "压缩界的标杆老黄牛：打包 7 种、解压 30+ 种（含 RAR/NSIS/ISO/MSI/DMG/QCOW2 等镜像格式）、AES-256 加密、命令行可脚本化，压缩率与免费程度至今是所有横评的对照组。⚠ star 陷阱：GitHub 仓库只是 Igor Pavlov 的镜像，主站与发布渠道是 7-zip.org——4 千星不等于不火，是 star 在这里失灵。2026 年连修两个 CVE（含 XZ 解压远程代码执行），保持更新。"
      },
      swaps: [
        { t: "要 Windows 11 现代体验（右键菜单/暗色/ARM64）", p: "NanaZip", m: "★ 15.9k · MIT（自身代码）· 活跃 · 滚动发布", d: "7-Zip 官方源码的 fork，给老引擎换新壳：MSIX 打包、智能解压、额外编解码器（Zstd/Brotli/LZ4）与 XChaCha20 加密、安全加固（CFG/CET）。引擎照搬 7-Zip，体验全部现代化。官方推荐 Microsoft Store 安装。" }
      ],
      nofit: ""
    },
    {
      name: "跨平台 GUI（格式大满贯）",
      tag: "200+ 格式的万能转接头",
      def: {
        proj: "PeaZip",
        meta: "★ 8.0k · LGPL-3.0 · 活跃 · 11.4.0",
        why: "跨平台全能选手（Win/mac/Linux/BSD）：官方口径支持 243 种格式（解压 RAR/zipx/zpaq/iso/wim 等），认证加密+双因素（密码+密钥文件）、加密密码管理器、安全删除。代价是体量比 7-Zip 重——格式广度和轻量不可兼得。"
      },
      swaps: [
        { t: "Linux 轻量桌面（Xfce 系）", p: "Xarchiver", m: "★ 204 · GPL-2.0 · 维护中", d: "GTK 前端+外部命令行后端的「转接头」架构，自己几乎不实现压缩；小众但轻。" }
      ],
      nofit: ""
    },
    {
      name: "macOS 生态",
      tag: "苹果用户的默认答案",
      def: {
        proj: "Keka",
        meta: "★ 7.5k · ⚠ 无 LICENSE 文件 · 活跃 · v1.6.8",
        why: "「The macOS file archiver」：把 7z/zstd/brotli 这些 macOS 原生不支持的格式塞进原生体验，可创建 14 种、解压 33 种格式，7z 用 AES-256 加密。⚠ 如实标注：仓库根目录没有 LICENSE 文件、GitHub 侧栏与官网均未声明许可——源码公开但许可条款未能确认，商用分发前自行核验。官网免费+捐赠模式，App Store 版同款付费（购买即支持开发）。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "闭源对照（不进名单）：WinRAR / Bandizip", b: "WinRAR：全网唯一能创建 RAR 的工具（开源工具只能解，根基是受限许可的 UnRAR 源码），「40 天试用期用几十年」的活化石，2023 年修过被在野利用的 0-day。Bandizip：⚠ 政策变迁与坊间说法相反——6.x 时代完全免费无广告，2020 年 7.0 起免费含广告+新功能进付费墙（$30 买断）；网上流传的「无广告版」均为第三方魔改，已有中毒案例。", s: "Bandizip 的「改个人免费」说法是错的，正确说法是「免费但含广告」。以官方 changelog 为准。" },
    { t: "p7zip —— 7-Zip 的 Linux 移植，已维护停滞", b: "搜索中高频出现但已停更；Linux 用户现在可直接用官方 7-Zip 的 Linux 二进制（2026 年仍发布）。", s: "老教程高发区。" }
  ],
  myths: [
    ["「7-Zip 在 GitHub 才 4 千星，过气了」", "star 在这个页面完全失灵：GitHub 仓库只是 Igor Pavlov 官方的源码镜像，主站与发布渠道是 7-zip.org。它的地位不靠 star，靠「所有横评的对照组」这个事实。"],
    ["「Bandizip 6.x 之后改成了个人免费」", "与坊间说法相反：2020 年 7.0 起「标准版免费但含广告 + 新功能进付费墙」，商业化方向没变过。所谓「无广告版」是第三方魔改，官方从未发布，已有下载中毒案例。"],
    ["「Keka 是知名开源软件」", "仓库无 LICENSE 文件、侧栏与官网均未声明许可——源码可见但授权条款未确认。本页已经第 N 次遇到「有源码 ≠ 有许可」，这条红线在压缩工具里也存在。"],
    ["「RAR 是公开格式，谁都能做」", "RAR 压缩算法闭源，各开源工具能「解压」RAR 靠的是 RARLAB 以受限许可开放的 UnRAR 源码；「创建」RAR 至今是 WinRAR 独家。这也是 WinRAR 活化石地位的根基。"]
  ]
});
