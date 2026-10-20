/* ═══ 类型：服务器管理面板 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "serverpanel",
  name: "服务器管理面板 / 自托管 PaaS",
  kw: "服务器面板 1panel 宝塔 coolify casaos 运维面板 建站面板 自托管 paas docker面板",
  one: "Linux 服务器要不要个面板？三个流派：运维面板（管网站/数据库）、自托管 PaaS（管应用部署）、家庭服务器系统（管全家桶）。本页还有一场「协议罗生门」的澄清：1Panel 从未改过 GPL。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（1Panel vs 宝塔 / Coolify 生态）",
  status: "ok",
  count: 9,
  fit: [
    "管着几台 VPS、受够了手敲命令的（运维面板段）",
    "想要「git push 就部署」的自托管 PaaS 体验的（PaaS 段）",
    "家里有 NAS/旧电脑想变成家庭云的（家庭系统段）"
  ],
  nofit: [
    "以为「1Panel 把 GPL 改了」的 —— 仓库 LICENSE 至今是标准 GPL-3.0，争议在安装时的另一份协议",
    "把「宝塔教程最多」当选型理由的 —— 它的强制登录与推广插件争议有公开记录"
  ],
  dims: [
    ["流派", "运维面板（1Panel/宝塔）/ 自托管 PaaS（Coolify/Dokploy）/ 家庭云（CasaOS/YunoHost）"],
    ["协议罗生门", "LICENSE 文件、安装时勾选的 EULA、社区争议三层要分开看——1Panel 案例教科书"],
    ["付费模式", "开源核心 + Pro 订阅是主流（1Panel/Cosmos）；纯免费也有（CasaOS 靠硬件变现）"],
    ["生态绑定", "面向国内生态（1Panel/宝塔）还是国际（Coolify/YunoHost）——教程与插件生态差异大"],
    ["安全姿态", "面板本身是攻击面：容器化降暴露（1Panel）/反 DDoS（Cosmos）各家思路不同"]
  ],
  segs: [
    {
      name: "运维面板（管网站/数据库/容器）",
      tag: "国产新贵 vs 国产老牌",
      def: {
        proj: "1Panel",
        meta: "★ 37.2k · GPL-3.0（LICENSE 现版标准原文）· 当日提交 · 2022 年起",
        why: "飞致云出品的新一代 Linux 运维面板：Web GUI 管主机监控/文件/数据库/容器，应用商店一键建站（WordPress/Halo 深度集成+SSL），容器化部署降暴露面 + WAF/备份。⚠ 协议罗生门澄清：LICENSE 文件层面从未变更（与 GPL-3.0 官方文本字节数一致）；真实争议在安装时勾选的《FIT2CLOUD 社区软件许可协议》含「禁止反编译/衍生、许可可撤销」条款，被社区指与 GPL 冲突（2026-02 官方 Discussion #11823）——仓库协议和安装协议是两层。"
      },
      swaps: [
        { t: "要「git push 就部署」的 PaaS 体验而非运维面板", p: "Coolify", m: "★ 63.3k（本批最高）· Apache-2.0 纯标准 · 活跃", d: "自托管 Vercel/Heroku/Netlify 平替：从 GitHub/GitLab 拉代码自动构建部署、PR 预览、回滚、360+ 一键服务、多服务器管理。自托管免费 + Cloud 托管收费。"
        },
        { t: "老牌但闭源（对照）", p: "宝塔面板", m: "闭源 · 免费版+专业版 699 元/年", d: "国产 LNMP 建站面板老牌（2014 年起），中文教程与插件存量最大。争议有公开记录：2022-08 的 7.8.0 强制登录绑定账号引发大量批评后撤回；面板内推广付费插件。", "risk": "闭源对照项。" }
      ],
      nofit: ""
    },
    {
      name: "自托管 PaaS 新生代",
      tag: "Coolify 之外的选手",
      def: {
        proj: "Dokploy",
        meta: "★ 37.9k · ⚠ Apache-2.0 + DSAL 双轨（/proprietary 生产用需商业协议）· 活跃",
        why: "Coolify 最直接的竞品：新一代自托管 PaaS，Docker/Docker Compose/Nixpacks 构建部署、多服务器、模板市场。⚠ open-core 双轨如实标注：主体 Apache-2.0，/proprietary 目录为 DSAL v1.0（源码可得，生产使用需与 Dokploy 签商业协议）——2024 年生即双轨。"
      },
      swaps: [
        { t: "老牌极简 PaaS 鼻祖（2013 年起的 mini-Heroku）", p: "Dokku", m: "★ 32.2k · MIT · 活跃", d: "Shell 插件架构 + Go 核心，最小化哲学，免费 + 官方付费支持。" },
        { t: "安全优先的家庭服务器网关", p: "Cosmos-Server", m: "★ 6.2k · ⚠ Apache+Commons Clause+反篡改（源码可得非纯开源）· 活跃", d: "反向代理自动 HTTPS + 认证服务器（MFA/OpenID）+ 反 bot/反 DDoS + VPN 免开端口 + Restic 加密备份一体的整合套件；免费 + Pro $16/月起。" }
      ],
      nofit: ""
    },
    {
      name: "家庭服务器系统",
      tag: "把旧电脑/NAS 变成家庭云",
      def: {
        proj: "CasaOS",
        meta: "★ 37.3k · Apache-2.0 · ZimaBoard 硬件厂商出品",
        why: "家庭「个人云」系统：No code 的家用友好 UI、多硬件支持（ZimaBoard/NUC/树莓派/旧电脑）、精选应用商店一键安装。商业模式干净：软件免费开源，靠卖 ZimaBoard/ZimaCube 硬件变现。"
      },
      swaps: [
        { t: "要完整自托管操作系统（500+ 应用+邮件栈+SSO）", p: "YunoHost", m: "★ 3.0k（核心仓）· AGPL-3.0 · 非营利 + 欧盟基金资助 · 2014 年起", d: "法语区老牌：把整台服务器变成自托管系统，500+ 应用一键部署、LDAP 用户管理 + SSO 门户、完整邮件栈、Let's Encrypt/fail2ban 全配好。完全免费非营利运营——理想主义者的答案。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "协议罗生门记录（1Panel 案例已并入正文）", b: "「1Panel 从 GPL 改协议」的说法在 LICENSE 文件层面未获证实（现版为标准 GPL-3.0 原文）；真实争议在安装时勾选的《FIT2CLOUD 社区软件许可协议》与 GPL 的冲突——官方已开 Discussion 回应。", s: "三层分离：仓库 LICENSE / 安装 EULA / 社区争议——只看一层都会得出错误结论。" }
  ],
  myths: [
    ["「1Panel 把开源协议从 GPL 改掉了」", "LICENSE 文件取证：现版与 GPL-3.0 官方标准文本完全一致、无附加条款，变更史无证据。真实情况是「仓库协议没改，安装时另有一份飞致云协议且条款与 GPL 存在冲突争议」——把两层混为一谈是本页最大流言。"],
    ["「宝塔被骂惨了，肯定不能用」", "它的争议（2022 强制登录、推广插件）有公开记录，但中文教程存量与插件生态也是事实。选型不是站队：知道坑在哪、能不能接受，比跟风骂或无脑用都重要。"],
    ["「Coolify 6 万星，直接装上就是自己的 Vercel」", "Coolify 确实是自托管 PaaS 的标杆（Apache-2.0 纯标准、自托管免费），但它管的是「应用部署」——Web 面板式的网站/数据库运维（1Panel 的强项）它并不覆盖。两类面板解决的问题不同。"],
    ["「服务器面板都是国产软件的天下」", "国产系（1Panel/宝塔）在中文圈声量大，但国际生态里 Coolify（63k）、Dokploy（38k）、YunoHost（2014 年起的非营利项目）体量与理念都不同——你的服务器面向谁，决定选哪个生态。"]
  ]
});
