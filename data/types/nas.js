/* ═══ 类型：NAS 操作系统 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "nas",
  name: "NAS 操作系统",
  kw: "nas truenas openmediavault zimaos unraid 群晖 存储 家庭服务器 raid nas系统",
  one: "把一台机器变成家庭存储服务器的大脑。企业级选 TrueNAS（OpenZFS），家用选 OpenMediaVault（低门槛）——而热度和功能都不差的新锐 ZimaOS，居然没有 LICENSE 文件。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（TrueNAS vs OMV vs unRAID 生态）",
  status: "ok",
  count: 8,
  fit: [
    "有闲置机器/攒机计划，想搭家庭存储中心的（两段按专业度选）",
    "被群晖定价与硬盘白名单政策劝退、想自建的",
    "想跑 Docker 应用全家桶顺便存文件的（各段都支持）"
  ],
  nofit: [
    "以为「ZimaOS 是开源 NAS 系统」的 —— 全仓库无 LICENSE 文件，仅 source-available，商用分发无授权",
    "以为「CasaOS 是 NAS 系统」的 —— 它是装在现有 Linux 上的面板（本站服务器面板页已收录），不是操作系统"
  ],
  dims: [
    ["专业度", "企业/发烧友（OpenZFS 数据完整性）vs 家用（低门槛+低硬件要求）"],
    ["文件系统", "ZFS（TrueNAS，要求盘规格一致）vs 文件系统无关（OMV，SnapRAID+mergerfs 混盘玩法）"],
    ["硬件门槛", "TrueNAS 仅 x86_64 且 ≥8GB 内存；OMV 1GiB 可跑还支持树莓派"],
    ["仓库勘误", "truenas/truenas 与 ZimaOS/ZimaOS 均 404——本页仓库名错误率全站最高，引用前先验证"],
    ["闭源变量", "unRAID 订阅化定价争议（2024）、Synology 硬盘白名单风波（2025，已部分回撤）"]
  ],
  segs: [
    {
      name: "企业 / 发烧友级",
      tag: "OpenZFS 数据完整性优先",
      def: {
        proj: "TrueNAS CE",
        meta: "★ 2.6k（middleware 仓）· LGPL-3.0 · 当日提交 · 25.10 Goldeye",
        why: "OpenZFS 存储平台（FreeNAS 后继）：RAIDZ/块级校验自愈/快照/复制、RAIDZ 在线扩容（24.10 起）、内置 Docker 应用目录与 KVM 虚拟机、Boot Environment 系统回滚。⚠ 两个勘误：`truenas/truenas` 仓库不存在（主源码在 truenas/middleware）；SCALE 自 25.04 已改名 TrueNAS Community Edition，FreeNAS 已 EOL（2025-03）。硬件门槛：仅 x86_64、≥8GB 内存。"
      },
      swaps: [],
      nofit: "只有一块盘/硬件很弱/只想简单共享文件的——上 TrueNAS 是杀鸡用牛刀，看家用段。"
    },
    {
      name: "家用 / 小型办公级",
      tag: "1GiB 内存就能跑，树莓派也行",
      def: {
        proj: "OpenMediaVault",
        meta: "★ 7.0k · GPL-3.0 · 当日提交 · OMV 8（Debian 13 底座）",
        why: "家用 NAS 的低门槛答案：SMB/NFS/FTP 共享、插件体系（omv-extras+Docker Compose 插件）、文件系统无关（ext4/XFS/Btrfs 原生，社区流行 SnapRAID+mergerfs 混盘玩法——不同容量硬盘组大池子的省钱方案）。1GiB 内存可跑、支持树莓派/ARM64、可单盘休眠。⚠ 勘误：openmediavault 官方 org 下这个就是主仓库（8,558 commits），OpenMediaVault-Plugin-Developers 只是插件生态组织。"
      },
      swaps: [
        { t: "轻量/另类路线：Btrfs 主打（openSUSE 底座）", p: "Rockstor", m: "★ 610 · GPL-3.0 · 维护中（社区小）", d: "仓库已拆分改名（rockstor/rockstor 404，现为 rockstor-core）——小众但 Btrfs 深度集成。" },
        { t: "极简 Debian 系统装机器（不是 RAID 型 NAS）", p: "DietPi", m: "★ 6.3k · GPL-2.0 · 当日提交", d: "极轻量 Debian 系，SBC/迷你主机向，dietpi-software 一键装服务——「轻 NAS」的底座选项。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "ZimaOS（★ 3.0k）—— 边界物种：全仓库无 LICENSE 文件", b: "ZimaBoard 厂商出品的家用 NAS OS：图形化 RAID、100+ 应用商店、系统快照回滚——功能是完整的。但仓库全树实证无 LICENSE/COPYING（仅 source-available），2024-12 有用户开 issue 索要许可证至今未解决；网上「MIT/Apache」的说法疑似与同厂 CasaOS（Apache-2.0）混淆。另勘误：ZimaOS/ZimaOS 仓库不存在，正确 owner 是 IceWhaleTech。", s: "个人玩可以，商用/分发无授权依据——等它把许可证补上再考虑进推荐名单。" },
    { t: "闭源对照（不进名单）：unRAID / Synology DSM", b: "unRAID：parity array 混插不同容量硬盘的招牌 + ZFS（7.0+），但 2024-03 定价改版（$49/$109/$249 + 年费 $36）被媒体定性为「放弃永久许可转向订阅」。Synology DSM：开箱即用标杆，但 2025 年「硬盘白名单」政策（第三方盘丧失核心功能）引发风波后部分回撤（DSM 7.3 恢复 3.5 寸 HDD 与 SATA SSD，M.2/NVMe 仍受限）。", s: "两个对照各是一条教训：闭源厂商的定价与兼容性政策，随时可以单方面改变。" }
  ],
  myths: [
    ["「TrueNAS 的 GitHub 才 2.6k 星，不行吧」", "star 失真又一例：TrueNAS 是多仓库结构（middleware/scale-build/apps/webui 分仓），2.6k 只是中间件组件；它是企业级 OpenZFS 平台的事实标准，iXsystems 有整机生意养着全职团队。"],
    ["「ZimaOS 是 MIT/Apache 开源的」", "仓库全树无 LICENSE 文件（已实证），第三方数据站也只标 source-available——「开源」说法大概率是与同厂 CasaOS（Apache-2.0）混淆。功能再好，没有许可就没有商用与分发的授权依据。"],
    ["「CasaOS 装上就是 NAS 系统」", "CasaOS 是装在「现有 Linux」上的 Docker 应用面板（本站服务器面板页收录），它不管 RAID/文件系统/存储池——「NAS 系统」和「NAS 面板」是两层东西，ZimaOS 才是它的系统版。"],
    ["「群晖买了就一劳永逸」", "2025 年硬盘白名单风波（第三方盘丧失存储池/健康监控等核心功能，估算销量跌 20%）虽在 DSM 7.3 部分回撤，但 M.2/NVMe 与企业线仍受限——闭源生态绑定硬件的政策风险，自建 NAS 派存在的核心理由。"]
  ]
});
