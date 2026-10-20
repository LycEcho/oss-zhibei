/* ═══ 类型：备份工具 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "backup",
  name: "备份工具",
  kw: "备份 restic borg kopia duplicati timeshift 快照 数据备份 增量备份 云备份",
  one: "备份是「装了不后悔、丢了哭半年」的那类工具。命令行三强（restic/Kopia/Borg）+ 图形系（Duplicati）+ 系统快照（Timeshift），外加一个「源码可见但不是开源」的边界物种 Duplicacy。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（restic vs borg vs kopia 生态）",
  status: "ok",
  count: 10,
  fit: [
    "服务器/工作站数据要增量快照+加密上云的（命令行三强段）",
    "想要图形界面+调度+策略引擎一站式搞定的（图形段）",
    "Linux 用户想要「系统玩坏了一键回滚」的（快照段）"
  ],
  nofit: [
    "以为「备份工具功能都差不多」的 —— 云后端支持差异巨大（Borg 原生只支持本地/SSH）",
    "以为「Duplicacy 是开源软件」的 —— 源码可见但非 OSI：个人免费、商用按机器购买许可"
  ],
  dims: [
    ["形态", "命令行增量快照（三强）/ 图形 Web UI / C/S 网络备份平台 / 系统快照"],
    ["云后端", "restic/Kopia/Duplicati 原生直写 S3/B2；Borg 只管本地+SSH（S3 要 rclone 变通）"],
    ["加密", "客户端端到端加密是标配（AES-256 系）；UrBackup 服务端默认明文是例外"],
    ["防勒索", "Borg 的 append-only 模式（服务端设置）是防勒索加密的关键设计"],
    ["维护主体", "Timeshift 已从个人转 Linux Mint 官方维护——owner 变更要跟紧"]
  ],
  segs: [
    {
      name: "命令行增量快照（三强）",
      tag: "服务器与开发机的标配",
      def: {
        proj: "restic",
        meta: "★ 36.7k · BSD-2-Clause · 活跃 · 单二进制",
        why: "无服务端架构的命令行增量快照引擎：客户端加密（AES-256-CTR+Poly1305）、内容寻址去重+zstd 压缩、云后端支持最广（S3/B2/Azure/GCS/SFTP 原生，rclone 可再扩）、Windows 支持 VSS。⚠ 破除过时印象：「restic 不支持压缩」是 v0.14（2022）之前的老黄历。"
      },
      swaps: [
        { t: "要内置 GUI/Web UI 和策略引擎（免 cron）", p: "Kopia", m: "★ 14.4k · Apache-2.0 · 当日提交", d: "三强中唯一内置 GUI+Web UI（localhost:51515）与按目录策略引擎：客户端端到端加密（AES-256-GCM/ChaCha20）、内置调度与保留策略——「三强里最省心」。" },
        { t: "备份到自己控制的 SSH 服务器 + 防勒索", p: "Borg", m: "★ 13.9k · BSD-3-Clause · 当日提交", d: "两端都要装 Borg 的去重归档器：认证加密、压缩率与内存占用最优、append-only 模式（服务端设置）防勒索加密。⚠ 两个边界：原生后端只有本地/SSH（上云要 rclone 变通）；Windows 仅 WSL/Cygwin 实验性；2.0 仍是 Beta 勿基于它建方案。" }
      ],
      nofit: ""
    },
    {
      name: "图形 / Web UI（不想碰命令行）",
      tag: "点几下，备份策略就位",
      def: {
        proj: "Duplicati",
        meta: "★ 15.1k · MIT（+例外条款）· ⚠ 历史停更已恢复，现节奏密集",
        why: "带 Web UI 的文件级增量备份：AES-256 加密、块级去重、云存储直写覆盖面广。⚠ 活跃度如实记录：曾有长期停更低谷期，但实测 2026 年 stable 版密集发布（10 月/9 月/4-7 月连续）+ canary 每两周一个——「恢复情况良好」要写成现在时。⚠ 协议小字：现行 MIT 但 proprietary/ 目录与第三方组件各自按原协议。"
      },
      swaps: [
        { t: "用 restic 但想要 Web 管理层", p: "Backrest", m: "★ 7.7k · GPL-3.0 · 活跃", d: "restic 的官方外挂图形层：Web UI+编排+调度，引擎仍是 restic——两全方案。" }
      ],
      nofit: ""
    },
    {
      name: "网络备份平台 / 系统快照",
      tag: "多机 C/S 与「一键回滚系统」",
      def: {
        proj: "UrBackup",
        meta: "★ 939 · AGPL-3.0 · 活跃 · C/S 架构",
        why: "客户端/服务器网络备份（文件+整盘镜像双轨）、运行中可备份、可裸机恢复，小团队/Windows 环境最易用。⚠ 安全边界如实告知：服务端存储默认明文（去重需要），加密靠文件系统层（ZFS/btrfs/LUKS）——敏感数据必须自己补这层。"
      },
      swaps: [
        { t: "Linux 系统快照/还原点（玩坏了回滚）", p: "Timeshift", m: "★ 4.3k · GPL-3.0 · Linux Mint 官方维护", d: "rsync+硬链接或 BTRFS 快照、计划快照、Live USB 恢复。⚠ owner 变更案例：原作者 teejee2008 仓库已归档（2023-05 停），现由 Linux Mint 项目官方维护——认准 linuxmint/timeshift。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "Duplicacy（★ 5.7k）—— 边界物种：源码可见非 OSI 开源", b: "无锁（lock-free）去重云备份，技术受认可，但 LICENSE 原文：「Free for personal use or commercial trial; Non-trial commercial use requires per-computer CLI licenses」——商用要按机器买许可。", s: "放进推荐列表前必须说明它不是传统开源——按机器收费的 CLI 与「开源备份」的预期不符。" },
    { t: "闭源对照（不进名单）：Acronis / Macrium Reflect", b: "Acronis：订阅制全家桶（镜像+克隆+反勒索+云）。Macrium Reflect：Windows 磁盘镜像专精（快速差量恢复+备份文件防篡改）。", s: "对照项。企业磁带库场景另有 Bareos（Bacula 分支，AGPL）。" }
  ],
  myths: [
    ["「restic 不支持压缩」", "2022 年 v0.14 起就支持 zstd 压缩了——这是备份圈流传最广的过时信息，多份 2026 对比文仍在纠正它。引用对比文先看它的测试版本。"],
    ["「Duplicati 早就不更新了，别用」", "历史低谷属实，但实测 2026 年 stable 密集发布（10 月/9 月/4-7 月连续）+ canary 每两周一个。「曾经停更」和「现在停更」必须分开写——恢复中的项目需要的是重新评估，不是一票否决。"],
    ["「备份加密都一样，选个顺眼的」", "差异在三处：加密位置（客户端端到端 vs 服务端明文——UrBackup 默认明文要文件系统层补）、算法（Borg 的认证加密=防篡改）、防勒索（Borg append-only）。丢过数据的人才知道这些差异值多少钱。"],
    ["「Timeshift 那个老项目还能用」", "能，但它已经易主：原作者仓库 2023-05 归档，Linux Mint 项目接手官方维护。认准 linuxmint/timeshift——装了老仓库版本的该升级了。"]
  ]
});
