/* ═══ 类型：容器管理（Docker 桌面与面板）═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "container",
  name: "容器管理（Docker 桌面与面板）",
  kw: "docker 容器 podman portainer lazydocker k8s kubernetes dockge colima 容器管理 面板",
  one: "Docker Desktop 对大企业收费后，免费替代长成了一个生态：桌面 App、Web 面板、TUI、无 GUI 运行时四条路线。本页按「你的容器跑在哪」分段——本机开发机、远程服务器、还是纯终端流。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（Docker Desktop alternative 生态）",
  status: "ok",
  count: 8,
  fit: [
    "本机开发要跑容器、不想付 Docker Desktop 订阅的（桌面 App 段）",
    "服务器上一堆 compose 栈想有个面板管的（Web 面板段）",
    "终端党只想一屏看完容器/日志/镜像的（TUI 段）"
  ],
  nofit: [
    "以为「Portainer 是 MIT 随便商用」的 —— 它是少见的 Zlib 协议，商业版 BE 另算",
    "K8s 重度玩家找管理平台的 —— 本页是「容器」管理，K8s 多集群平台是另一个品类"
  ],
  dims: [
    ["形态", "桌面 App（本机）/ Web 面板（服务器侧）/ TUI+CLI（终端流）——按容器跑在哪选"],
    ["K8s 支持", "桌面 App 派全部支持（Rancher 内置 k3s）；Web 面板派看个体（Dockge 明确不做）"],
    ["许可", "Zlib（Portainer）是本页冷门协议；其余 MIT/Apache 常规"],
    ["活跃度", "Podman Desktop/Dozzle 当天仍有提交；Lazydocker/Dockge 约半年未推（TUI 完成态特性）"],
    ["macOS 特殊性", "Mac 上容器跑在 VM 里——免费方案 Colima 与闭源 OrbStack（收费）之争"]
  ],
  segs: [
    {
      name: "桌面 App（本机开发机）",
      tag: "Docker Desktop 的免费替代",
      def: {
        proj: "Podman Desktop",
        meta: "★ 8.1k · Apache-2.0 · 当日提交 · v1.30 · 全平台",
        why: "Red Hat 系的免费开源 Docker Desktop 替代：daemonless + rootless 架构，可同时管理 Podman 与 Docker 引擎（docker socket 兼容层），内置 K8s 工作流并可扩展 Kind/Minikube/MicroShift。2026-02 Red Hat 企业版 GA——背后有全职团队，是这个赛道最稳的后台。"
      },
      swaps: [
        { t: "一键内置 Kubernetes（k3s）", p: "Rancher Desktop", m: "★ 7.4k · Apache-2.0 · 活跃 · 全平台", d: "SUSE/Rancher 出品：内置 k3s（可选 K8s 版本、一键重置），运行时二选一（containerd+nerdctl 或 dockerd+docker CLI），免费无授权门槛。" }
      ],
      nofit: ""
    },
    {
      name: "Web 面板（服务器侧）",
      tag: "远程服务器的容器管家",
      def: {
        proj: "Portainer CE",
        meta: "★ 38.7k · Zlib 协议 · 活跃 · 2016 年至今",
        why: "服务器侧最主流的自托管面板：单机 Docker、Swarm、K8s 集群统一管理，模板与 Stack（compose）部署、多用户访问控制。⚠ 协议冷知识：社区版是少见的 Zlib 许可（不是 MIT/GPL），细粒度 RBAC 在收费 BE 版。"
      },
      swaps: [
        { t: "只管 compose 栈、要轻量现代", p: "Dockge", m: "★ 24.6k · MIT · 约半年未推（Uptime Kuma 作者出品）", d: "以 compose.yaml 为中心：直接管理文件不另存副本、docker run 一键转 compose、镜像一键更新。明确不做 K8s——compose 专精。" },
        { t: "只看容器日志（极轻）", p: "Dozzle", m: "★ 14.7k · MIT · 当日提交", d: "实时日志查看器，Docker/Swarm/K8s 都支持、多主机 agent 聚合、兼容 Podman 与 Colima——只做一件事的典范。" }
      ],
      nofit: ""
    },
    {
      name: "TUI / CLI（终端党）",
      tag: "不离开终端的一切",
      def: {
        proj: "Lazydocker",
        meta: "★ 53.2k（本类目最高）· MIT · 约半年未推（TUI 完成态）",
        why: "终端里的 Docker 全能 TUI：容器/日志/stats/镜像/卷一屏搞定，按 compose 服务分组操作。半年未推——TUI 工具的典型「完成态」，功能不缺就不用常更新（lazygit 同作者，那一个更新更勤）。"
      },
      swaps: [
        { t: "macOS/Linux 上不想要任何 GUI、免费跑 Docker", p: "Colima", m: "★ 31.3k · MIT · 活跃", d: "基于 Lima VM 的最小配置运行时：colima start 后原样用 docker/compose 命令，三运行时可选（Docker/containerd/Incus），--kubernetes 可选开 K8s。Apple Silicon 性能口碑好——macOS 免费方案首选（闭源对照 OrbStack 是 Mac 事实标准但商用收费 $8/用户/月）。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "闭源对照：Docker Desktop（不进名单）", b: "闭源商业产品。⚠ 收费边界精确版：仅对「≥250 名员工且年收入 ≥1000 万美元」的企业收费（Pro $11/Team $16/Business $24 每用户/月），个人/教育/小微公司免费。", s: "「Docker Desktop 要收费了」的说法只在企业语境成立——个人用户被吓跑是不必要的。" }
  ],
  myths: [
    ["「Portainer 是 MIT 开源，随便商用」", "它是少见的 Zlib 协议（本页最冷门许可奖），且细粒度 RBAC 等在收费 BE 版。Zlib 允许商用但别拿它当 MIT 理解——条款是独立的。"],
    ["「Lazydocker 半年没更新，弃坑了」", "TUI 工具的「完成态」：功能不缺就不用常更新（它的兄弟 lazygit 更新更勤是因为还在加功能）。判断活跃度要结合「功能是否完整」——本站已多次强调 push 日期优先，但完成态工具是例外语境。"],
    ["「Docker Desktop 对个人也收费了」", "2021 年起的政策只针对 ≥250 人且年收入 ≥1000 万美元的企业。个人/教育/小微免费且含 Kubernetes——被标题党吓到而迁移的人，多数根本不在收费范围。"],
    ["「macOS 跑容器必须买 OrbStack 或 Docker Desktop」", "Colima 是完全免费的 macOS 容器运行时（Apple Silicon 性能口碑好），docker 命令原样可用。OrbStack 是体验最 polished 的闭源选择（$8/用户/月）——体验付费和别无选择是两回事。"]
  ]
});
