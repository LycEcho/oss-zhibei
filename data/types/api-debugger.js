/* ═══ 类型：API 调试工具 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "apitool",
  name: "API 调试 / 测试工具",
  kw: "api postman bruno hoppscotch insomnia apifox 接口调试 api测试 rest graphql",
  one: "Postman 强制登录逼出来的一个开源赛道。本页的招牌是一条被仓库证据推翻的传闻：Insomnia「改过源码可用许可」——实抓 LICENSE 全史证明它从未存在，真实的争议另有其事。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（Postman alternative 生态）",
  status: "ok",
  count: 8,
  fit: [
    "被 Postman 强制登录与云依赖劝退的开发者",
    "要团队协作 API 集合、又不想把接口数据放别人云上的",
    "要 CLI 进 CI/CD 跑接口测试的"
  ],
  nofit: [
    "以为「开源 API 客户端 = 团队协作全免费」的 —— 本页几乎所有选项的团队功能都另有收费档",
    "以为「Insomnia 改过源码可用许可」的 —— 仓库证据不支持这个流传甚广的说法（见误区区）"
  ],
  dims: [
    ["形态", "桌面离线优先 / Web 系（PWA+自托管）/ CLI—— Bruno 与 Hoppscotch 是两条路线的旗手"],
    ["数据存放", "本地纯文本（Git 协作）/ 云工作区 / 自托管——接口数据敏感度决定选哪边"],
    ["协议纯净度", "Bruno 纯 MIT、Yaak 源码 MIT 但二进制商用收费、Insomnia Apache（云服务闭源）"],
    ["协作收费点", "私有仓库接入 / 团队工作区 / SSO——每家收费点不同，对照表见正文"],
    ["代际故事", "Insomnia 原作者卖掉它后做了 Yaak 延续本地优先——选型也是选作者价值观"]
  ],
  segs: [
    {
      name: "桌面 · 离线优先",
      tag: "数据在本地文件系统，Git 协作",
      def: {
        proj: "Bruno",
        meta: "★ 47.8k · 纯 MIT（无附加条款）· 活跃",
        why: "离线优先系的旗手，立场写在 README 里：「Bruno is offline-only. There are no plans to add cloud-sync, ever.」——集合以纯文本 .bru 文件存本地、用 Git 任意版本控制协作，REST/GraphQL/gRPC/WebSocket/SOAP 全支持，bru CLI 可进 CI。⚠ 免费版的 Git 协作仅支持公开仓库，私有仓库接入在付费档。"
      },
      swaps: [
        { t: "想听同一段故事的另一个版本（原作者亲述）", p: "Yaak", m: "★ 19.3k · 源码 MIT / 二进制商用收费", d: "Insomnia 原作者 2019 年卖掉它之后、2024 年另起炉灶的作品，延续本地优先路线。注意：源码 MIT 但官方二进制商用需付费（$79/年起）。" },
        { t: "极简主义、什么都不想要只想要请求", p: "Restfox", m: "★ 2.8k · MIT · 活跃", d: "Web+桌面离线极简系，无云协作无收费——功能少是特性。" }
      ],
      nofit: ""
    },
    {
      name: "Web 系（浏览器即开即用）",
      tag: "PWA 零安装，可自托管",
      def: {
        proj: "Hoppscotch",
        meta: "★ 80.7k（本组最高）· MIT · 当日提交",
        why: "Web 系代表：浏览器 PWA 零安装即用，多协议覆盖（REST/GraphQL/WebSocket/SSE/Socket.IO/MQTT），社区版 MIT 可 Docker 自托管。⚠ 收费地图要记清：Cloud 个人免费、Business $6/用户/月、企业 $11、自托管企业版 $19/用户/月——「自托管也要钱」的是企业功能不是软件本体。"
      },
      swaps: [],
      nofit: ""
    },
    {
      name: "传统桌面（Cloud/Local/Git 三存储）",
      tag: "最像 Postman 的那个",
      def: {
        proj: "Insomnia",
        meta: "★ 40.1k · Apache-2.0 · 活跃",
        why: "最像 Postman 的传统桌面客户端：多协议、Scratch Pad 免登录纯本地模式、Cloud/Local/Git 三种存储、Inso CLI 进 CI。⚠ 协作收费点：Git Sync 免费版限 3 用户，Pro $12/用户/月。⚠ 澄清：云同步服务是闭源的，桌面应用本体才是 Apache。"
      },
      swaps: [
        { t: "命令行党（发请求不需要界面）", p: "HTTPie", m: "★ 38.7k · BSD-3 · CLI 近 10 个月无提交但稳定", d: "CLI 形态的补充选项；注意其桌面/Web 版是闭源 freemium，开源的只是 CLI。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "闭源对照（不进名单）：Postman / Apifox", b: "Postman：行业事实标准的闭源 SaaS，强制登录+云依赖是开源替代集体围攻的靶心；2026 年定价 Free/Solo $9/Team $19/Enterprise $49（旧档名已废弃）。Apifox：国产闭源一体化（文档+调试+Mock+测试），免费版限 3 人协作。", s: "对照项。Apifox 在中文团队生态里地位特殊，列出来供公平比较。" }
  ],
  myths: [
    ["「Insomnia 曾经改过源码可用许可（Commons Clause）」", "这个流传甚广的说法被仓库证据推翻：实抓 LICENSE 全史（2016 初版→2017 AGPL→2017 MIT→2023 Apache）与 2022 年时点快照证明它从未有源码可用时代。真实的争议是 2023 年强制账号登录 + 云同步服务闭源——传闻和事实要分开。"],
    ["「Bruno 完全免费，团队协作也免费」", "核心的 Git 工作流确实免费，但仅限公开仓库；私有仓库接入、OpenAPI 同步、SSO 都在 Pro $6/Ultimate $11 付费档。完全免费的是 Restfox（无协作功能）。"],
    ["「Hoppscotch 自托管就完全免费」", "社区版 MIT 自托管确实免费——但「自托管企业版」是 $19/用户/月的独立收费档（SSO/SCIM/审计）。个人与小团队无感，企业采购要问清楚。"],
    ["「Postman 免费版就够了，没必要换」", "免费版能用的前提是接受强制登录与云依赖——这正是 2023 年 Insomnia 强制登录事件后整个开源赛道集体围攻的靶心。你的接口集合数据放不放别人云上，是个选型问题不是习惯问题。"]
  ]
});
