/* ═══ 类型：图像编辑（位图修图）═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "imageedit",
  name: "图像编辑（修图 / 绘画 / RAW）",
  kw: "修图 图像编辑 gimp krita photoshop darktable raw 绘画 图片处理 抠图",
  one: "开源修图三流派：通用修图（GIMP）、数字绘画（Krita）、RAW 摄影后期（darktable）——它们不是互相替代，是三件不同的工具。本页顺便粉碎一个流传十年的谣言：GIMP 早就不是 2.10 了。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（Photoshop 平替生态）",
  status: "ok",
  count: 10,
  fit: [
    "想甩掉 Photoshop 订阅、找免费修图方案的（通用修图段）",
    "画插画/漫画/概念图的（绘画段——注意不是修图）",
    "拍 RAW 格式的摄影爱好者（显影段）"
  ],
  nofit: [
    "以为「Krita 是免费版 Photoshop」的 —— Krita 是绘画软件，2009 年起就主动放弃了通用修图定位",
    "指望开源修图自带生成式 AI 的 —— GIMP/Krita 均无内置，只能靠插件补"
  ],
  dims: [
    ["流派", "通用修图 / 数字绘画 / RAW 显影——三段选一，别跨段比较"],
    ["学习曲线", "GIMP/darktable 陡（自成一派），Pinta/Photopea 低"],
    ["版本状态", "GIMP 3.x 时代已到来（非破坏性编辑落地）；Krita 双轨版本（Qt5 生产/Qt6 实验）"],
    ["闭源新格局", "Affinity 全线免费（2025-10 起）搅动了闭源侧对照——免费 ≠ 开源，别混"],
    ["AI 能力", "均无内置生成式 AI；GIMP 可经 GIMP-ML、Krita 可接 AI Diffusion 插件补"]
  ],
  segs: [
    {
      name: "通用修图（Photoshop 对标）",
      tag: "图层/蒙版/滤镜/抠图",
      def: {
        proj: "GIMP",
        meta: "★ 6.5k（GitHub 镜像）· GPL-3.0+ · 活跃 · 稳定版 3.2.6",
        why: "开源修图旗舰，1995 年起步的 Photoshop 直接对标者。⚠ 粉碎谣言：GIMP 3.0 已于 2025-03 发布（结束 7 年开发），当前稳定 3.2.6——非破坏性编辑（滤镜可后期修改/开关/移除）、链接图层、矢量图层都来了，「GIMP 停在 2.10」的旧说法已过时。注意 GitHub 上只是只读镜像（主开发在 GNOME GitLab），star 数不代表热度。"
      },
      swaps: [
        { t: "只要轻量修图（类画图工具+图层）", p: "Pinta", m: "★ 4.1k · MIT · 活跃 · 3.1.2", d: "Paint.NET 的开源跨平台克隆，学习曲线全页最低。" },
        { t: "不装软件、浏览器直接修（PSD 兼容）", p: "Photopea（闭源对照）", m: "免费+广告 · 网页版", d: "界面即 Photoshop、PSD 全兼容、40+ 格式含 RAW；闭源在线服务，文件默认本地处理。免费够用，Premium 去广告。" }
      ],
      nofit: ""
    },
    {
      name: "数字绘画（插画 / 漫画 / 动画）",
      tag: "笔刷引擎是招牌",
      def: {
        proj: "Krita",
        meta: "★ 10.6k（镜像）· GPL-3.0 · 活跃 · 5.3.4（Qt5 生产推荐）",
        why: "数字绘画/插画/漫画/2D 动画专用：9 种笔刷引擎、压感防抖稳定器、内置逐帧动画（洋葱皮+FFmpeg 导出）、HDR 与 16/32-bit 色深。注意双轨版本：Qt5 线 5.3.4 是官方推荐生产用，Qt6 线 6.0.4 同日发布但偏实验。"
      },
      swaps: [
        { t: "极简绘画本、数位板随手画", p: "MyPaint", m: "★ 3.0k · GPL-2.0 · 发布停滞（2020 后无新版，代码仍动）", d: "无限画布极简流，libmypaint 笔刷引擎（Krita 也用了它）。" }
      ],
      nofit: "想修照片/做设计的别选 Krita——它 2009 年起主动放弃通用修图定位，错位使用双方都难受。"
    },
    {
      name: "RAW 显影（摄影后期）",
      tag: "Lightroom 的开源答案",
      def: {
        proj: "darktable",
        meta: "★ 13.3k · GPL-3.0+ · 活跃 · 5.6.2",
        why: "开源 Lightroom：RAW 显影+摄影工作流全流程（lighttable 管理/darkroom 显影/联机拍摄），非破坏编辑（调整存 XMP 旁车文件）、32-bit float 引擎、67+ 调整模块、OpenCL GPU 加速。GIMP/Krita 都不做 RAW——这是摄影党的独立工具。"
      },
      swaps: [
        { t: "要去马赛克算法与调参深度（不服自动化的）", p: "RawTherapee", m: "★ 4.2k · GPL-3.0+ · 活跃 · 5.13", d: "显影算法专精：多种拜耳去马赛克算法、富士 X-Trans 专项、色彩管理软打样。社区共识：工作流选 darktable，调参深挖选 RawTherapee。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "闭源对照区（不进名单）：Photoshop / Affinity / Photopea / Paint.NET", b: "Photoshop：行业标准、订阅 $22.99/月。Affinity：原最大买断制对手，2025-10 起三合一套装全线免费（AI 功能要 Canva 付费档）——闭源侧新格局。Photopea：网页版 PS 克隆。Paint.NET：Windows 轻量闭源免费（2009 年从开源转闭源）。", s: "「免费」与「开源」是两回事——Affinity 免费但闭源，别混进开源推荐。" },
    { t: "PhotoGIMP 补丁（⚠ 已 404）", b: "曾广泛流传的「GIMP 改造成 Photoshop 布局」补丁（搜索结果显示 18.4k star），仓库现已 404（改名或移除）。", s: "教程高发区，引用前先点开仓库确认还活着。" }
  ],
  myths: [
    ["「GIMP 十几年都停在 2.10」", "曾是事实，2025-03-16 GIMP 3.0.0 正式发布（结束 7 年开发），当前稳定 3.2.6——非破坏性编辑这个十年老诉求已落地。旧评测已全部过时。"],
    ["「Krita 是免费版 Photoshop」", "错位认知的典型：Krita 是数字绘画软件（笔刷引擎是灵魂），2009 年起主动放弃通用修图定位。画画选它，修图选 GIMP。"],
    ["「开源修图没有 AI 功能」", "GIMP/Krita 确实均无内置生成式 AI（2026-09 报道确认），但都可经插件补：GIMP-ML、Krita 的 AI Diffusion 插件。「没有」和「不能有」是两回事。"],
    ["「Affinity 免费了，开源修图没意义了」", "Affinity 免费是闭源侧的大好事，但它是专有软件——数据格式锁定、无法审计、随时可改回收费。免费和开源解决的是不同的问题。"]
  ]
});
