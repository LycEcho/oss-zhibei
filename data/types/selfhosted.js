/* ═══ 类型：自托管服务（Homelab 起步）═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "selfhost",
  name: "自托管服务（Homelab 起步）",
  kw: "自托管 selfhosted homelab nextcloud immich jellyfin nas 网盘 相册 密码 监控 home assistant gitea",
  one: "把自己的网盘、相册、影音库、密码管理、监控装在自己机器上——数据攥在自己手里。本页按「起步要装什么」分三段：存东西、看媒体、跑管家服务，每个用途给一个事实标准。",
  date: "2026-10-20",
  src: "四层漏斗 · awesome-selfhosted 生态 + 扩散搜索",
  status: "ok",
  count: 15,
  fit: [
    "有一台闲置电脑 / NAS，想把数据从云厂商手里拿回来的",
    "在意隐私（相册人脸识别、密码库不出门）的",
    "喜欢折腾并愿意承担维护责任的人"
  ],
  nofit: [
    "只想省订阅费、不想花维护时间的 —— 自托管的成本是硬件 + 电费 + 你的时间，数据丢了也是你的责任",
    "以为装完就一劳永逸的 —— 备份、升级、证书续期都是长期活"
  ],
  dims: [
    ["起步场景", "先装刚需（相册/密码）还是兴趣优先（影音/家居）—— 决定从哪段开始"],
    ["硬件", "NAS / 树莓派 / 旧电脑 / 服务器 —— 低配设备选轻量实现（Rust/Go 系）"],
    ["部署形态", "Docker Compose 是本品类通用语；个别有官方全家桶安装器"],
    ["协议", "AGPL/GPL 系自用无碍，对外提供服务前过法务；混合许可逐个看"],
    ["备份", "任何自托管的第一原则：先想好备份再装服务"]
  ],
  segs: [
    {
      name: "存东西（网盘 / 相册 / 文档 / 同步）",
      tag: "数据主权第一站",
      def: {
        proj: "Immich",
        meta: "★ 116.7k（本页最高）· AGPL-3.0 · 当日仍提交 · Docker Compose",
        why: "自托管相册的事实标准：手机照片视频自动备份、人脸/场景识别与智能搜索、多用户共享相册——「Google Photos 平替」的完整答案，也是当下 homelab 社区的第一大入坑点。"
      },
      swaps: [
        { t: "要的是网盘 + 在线协作全家桶（不只相册）", p: "Nextcloud", m: "★ 37.2k · AGPL-3.0 · 老牌", d: "文件同步共享 + 日历/联系人/在线办公应用生态；官方推荐用 All-in-One 安装器起步。" },
        { t: "要消灭家里的纸质文件（扫描件 OCR 归档）", p: "Paperless-ngx", m: "★ 46.9k · GPL-3.0 · 活跃", d: "扫描、OCR、自动打标签归档、全文检索——纸质文档数字化的完整方案。" },
        { t: "只要多设备文件同步、不想要网盘形态", p: "Syncthing", m: "★ 89.5k · MPL-2.0 · 2013 年至今", d: "设备间 P2P 持续同步，无云中转、传输加密，Windows/macOS/Linux/Android 全平台。" }
      ],
      nofit: ""
    },
    {
      name: "看媒体（影音流媒体）",
      tag: "自己的 Netflix / Spotify",
      def: {
        proj: "Jellyfin",
        meta: "★ 58.3k · GPL-2.0 · 活跃 · 全开源",
        why: "Plex/Emby 的全开源替代：电影/剧集/音乐整理与流媒体播放，网页/电视/手机/盒子多客户端，还支持直播电视。无付费墙、无许可服务器——媒体服务器里唯一「完全免费软件」路线的主流选择。"
      },
      swaps: [
        { t: "只要音乐流媒体（不需要影音库）", p: "Navidrome", m: "★ 24.3k · GPL-3.0 · 活跃", d: "轻量音乐流媒体服务，兼容海量 Subsonic API 手机客户端，低配设备友好。" }
      ],
      nofit: ""
    },
    {
      name: "管家服务（密码 / DNS / 监控 / Git）",
      tag: "装完这些，家里服务器才算成年人",
      def: {
        proj: "Vaultwarden",
        meta: "★ 69.3k · AGPL-3.0 · Rust · NAS/树莓派可跑",
        why: "Bitwarden 兼容的自建服务端：官方全平台客户端直接连，Rust 实现极轻量。密码库是自托管清单里「安全收益最大」的第一件——但记住它存的是所有钥匙，备份和磁盘加密必须做在它前面。"
      },
      swaps: [
        { t: "全屋设备去广告（DNS 层一次搞定）", p: "AdGuard Home", m: "★ 37.6k · GPL-3.0 · 活跃", d: "接管全家用设备的 DNS 过滤，广告/追踪拦截、家长控制、加密上游（DoH/DoT）、DHCP 全带。单二进制安装脚本或 Docker。" },
        { t: "盯住自己所有服务的死活", p: "Uptime Kuma", m: "★ 92.7k · MIT · 活跃", d: "颜值向拨测监控（HTTP/TCP/Ping/DNS/Docker 容器等十余种），可对外分享状态页、多渠道告警。要盯多台机器的资源指标就加 Beszel（★26.4k · MIT，hub+agent 架构）。" },
        { t: "小团队私有 GitHub", p: "Gitea", m: "★ 58.6k · MIT · 活跃", d: "轻量 Git 托管 + 代码评审 + 内置 CI/CD（Gitea Actions），单二进制或容器，低配机器友好。" },
        { t: "给自己的应用加即时搜索", p: "Meilisearch", m: "★ 59.6k · MIT + BUSL-1.1 混合", d: "毫秒级全文搜索 API、拼写容错、AI 混合搜索。注意混合许可：社区版主体 MIT，部分企业功能是 BUSL——商用部署前看清自己用的部分归哪边。" },
        { t: "智能家居中枢", p: "Home Assistant", m: "★ 91.6k · Apache-2.0 · 2013 年至今", d: "本地优先的家居自动化平台，集成生态海量。官方推荐安装方式是 Home Assistant OS（专用系统）而非裸 Docker。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "MinIO（★ 61.3k）—— 归档停维护，选型高危", b: "S3 兼容对象存储的事实标准，2026-04-25 仓库正式归档只读；2025-10 起停发预编译二进制与 Docker 镜像，2026-09 起 Docker Hub 拉取开始失败。", s: "存量用户评估迁移（社区分叉或 Garage / SeaweedFS / Ceph RGW 等替代）；新部署不要再选它。" }
  ],
  myths: [
    ["「MinIO 是自建对象存储的标准答案」", "曾经是，2026-04 已归档停维护、镜像停发。教材更新：现在新部署选 Garage / SeaweedFS / Ceph RGW 等替代。"],
    ["「Meilisearch 是 MIT 开源，随便用」", "混合许可：SPDX 标识为 MIT AND BUSL-1.1——社区功能 MIT，企业功能是 Business Source License。商用前核对你依赖的功能归属。"],
    ["「自托管等于省钱」", "省的是订阅费，花的是硬件、电费和维护时间；云厂商替你扛的可用性与备份责任，现在全在你身上。先建备份流程，再装第一个服务。"],
    ["「Docker 会写的一律 docker compose 拉起来就行」", "本品类多数如此（Immich/Paperless/AdGuard 等官方首推），但有例外：Home Assistant 官方推荐专用系统 HA OS，Nextcloud 官方推荐 All-in-One 安装器——装之前看官方推荐的安装方式。"]
  ]
});
