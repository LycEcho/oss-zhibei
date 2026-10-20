/* ═══ 类型：虚拟机 / 虚拟化 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "vm",
  name: "虚拟机 / 虚拟化",
  kw: "虚拟机 virtualbox vmware utm qemu 虚拟化 winboat 快速启动 虚拟机软件 mac虚拟机",
  one: "虚拟机选型在 2024-2025 年被两个事件改写：VMware 被 Broadcom 收购后全量免费（连商用都免费），Linux 上冒出了无缝跑 Windows 应用的 WinBoat。本页的 star 陷阱也最密集——qemu/VirtualBox 的 GitHub 全是镜像。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（VirtualBox alternative 生态）",
  status: "ok",
  count: 11,
  fit: [
    "要在电脑上跑另一个操作系统（测试/兼容/隔离）的所有人",
    "Apple Silicon Mac 用户找免费虚拟机的（UTM 段）",
    "Linux 上想无缝跑 Windows 应用的（WinBoat 新形态段）"
  ],
  nofit: [
    "以为「VMware 收费了，必须换开源」的 —— 它 2024-11 起全量免费（含商用），只是没有工单支持",
    "用 GitHub star 判断虚拟机热度的 —— qemu/VirtualBox/Boxes 全是官方只读镜像，star 严重失真"
  ],
  dims: [
    ["形态", "桌面 GUI 虚拟机 / 命令行快速起机 / 应用集成新形态 / 企业 Hypervisor"],
    ["平台", "跨平台（VirtualBox）/ macOS 专精（UTM/Parallels）/ Linux KVM 系（virt-manager）"],
    ["免费政策", "VMware 全量免费但闭源无支持 vs 开源全功能——两条不同的选型轴"],
    ["底层依赖", "几乎所有开源虚拟机都站在 QEMU 肩上（UTM/Boxes/quickemu 全是它的壳）"],
    ["成熟度", "WinBoat 0.9.0 早期——新物种再火也别押生产"]
  ],
  segs: [
    {
      name: "桌面虚拟机（GUI）",
      tag: "点几下就能跑另一个系统",
      def: {
        proj: "VirtualBox",
        meta: "★ 1.5k（⚠ 2025-05 才建的官方镜像）· GPLv3 + 专有扩展包 · Oracle 出品",
        why: "跨平台桌面虚拟机的老牌标准（Win/mac/Linux 通吃）：快照/克隆/Guest Additions（共享剪贴板/无缝模式）、免费全功能。⚠ 两个标注：GitHub 仓库是 Oracle 2025 年才建的镜像（1.5k 星不代表真实地位，主站在 virtualbox.org）；Extension Pack 扩展包是专有许可——「开源核心 + 专有扩展」模式的老祖宗。"
      },
      swaps: [
        { t: "macOS / Apple Silicon 用户", p: "UTM", m: "★ 36.0k（本页最高）· Apache-2.0 · 当日提交", d: "macOS/iOS/visionOS 上的开源虚拟机（QEMU 底座 + Hypervisor.framework 加速），Apple Silicon 免费首选；免费 DMG + 付费 App Store 版 + 免费 UTM SE（iOS 侧载）三通道。" },
        { t: "Linux + KVM 系（服务器级图形管理）", p: "virt-manager", m: "★ 3.3k · GPL-2.0 · 活跃", d: "libvirt 前端，配套 virt-install/virt-clone/virt-xml 命令行三件套，管理 QEMU/KVM/Xen。" },
        { t: "GNOME 桌面要极简开箱即用", p: "GNOME Boxes", m: "★ 180（镜像）· LGPLv2+ · 活跃", d: "选 ISO 即起 VM，牺牲高级选项换零门槛。" }
      ],
      nofit: ""
    },
    {
      name: "命令行快速起机",
      tag: "几条命令跑起一千种系统",
      def: {
        proj: "quickemu",
        meta: "★ 16.6k · MIT · 活跃 · 本批增速最快之一",
        why: "命令行快速起机新锐：quickget 自动下载系统镜像并生成配置，支持近 1000 个 OS 版本（Windows 10/11 含 TPM 2.0、macOS 全系、Linux 各发行版），SPICE 剪贴板/文件共享/USB 直通全带。测试兼容性、临时起一台系统的效率神器。"
      },
      swaps: [],
      nofit: ""
    },
    {
      name: "新形态：应用级集成",
      tag: "不是跑虚拟机，是跑应用",
      def: {
        proj: "WinBoat",
        meta: "★ 23.2k · MIT · 2025-04 建仓一年半冲 2 万+ · ⚠ v0.9.0 早期",
        why: "2025 新物种：让 Windows 应用以「原生集成」方式跑在 Linux 里（Docker 容器 + FreeRDP 路线）——不是传统虚拟机 GUI，是「Windows for Penguins」。本批增速第一。⚠ 0.9.0 版本号说明一切：关注它，别押生产。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "企业级开源对照：Proxmox VE / XCP-ng", b: "Proxmox VE：Debian 底座企业虚拟化平台（KVM+LXC + 集群/在线迁移/Ceph），AGPL-3+、无订阅全功能可用（付费是支持服务）；无单一 GitHub 主仓库（组件镜像仅 106 星——star 失真又一例）。XCP-ng：企业级开源 Xen 平台（XenServer 社区分支），源码分布在多个子仓库。", s: "服务器虚拟化是另一个品类，此处作边界指引。" },
    { t: "闭源对照（不进名单）：VMware / Parallels", b: "⚠ VMware 政策时间线：2024-05 个人免费（砍掉免费 Player）→ 2024-11 对所有用户免费（含商用，Pro 停售、功能无阉割，但无工单支持）——「闭源但免费」从此是一条独立的选型轴：免费用，但不可审计、随时可变、无支持。Parallels：macOS 独占体验最打磨，订阅制（标准版一次性 460 元促销价）。", s: "VMware 免费化是本品类近年最大变量——但它没有变开源，别混淆。" }
  ],
  myths: [
    ["「VirtualBox 才 1.5k 星，早过气了」", "GitHub 仓库是 Oracle 2025-05 才创建的官方镜像——star 与它的真实地位（桌面虚拟化默认答案之一）完全无关。本站 star 失灵案例的巅峰之作。"],
    ["「VMware 收费了，赶紧换 VirtualBox」", "方向完全反了：Broadcom 收购后的动作是 2024-05 个人免费、2024-11 全量免费（连商用），付费 Pro 停售。真正该权衡的是：闭源免费（VMware）vs 开源（VirtualBox/UTM）——免费用 vs 有主权用。"],
    ["「QEMU 是给内核开发者用的，跟我无关」", "你用的 UTM、GNOME Boxes、quickemu、Proxmox 底层全是 QEMU——它是几乎所有开源虚拟机的公共底座。选「哪个虚拟机」很多时候是在选「哪个 QEMU 壳」。"],
    ["「WinBoat 2.3 万星，直接用它替代 Windows 虚拟机」", "23.2k 星是路线的胜利（Linux 无缝跑 Windows 应用），不是成熟度的证明：v0.9.0、README 自述早期。新物种的正确姿势是关注+试玩，不是迁移生产。"]
  ]
});
