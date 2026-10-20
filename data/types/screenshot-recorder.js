/* ═══ 类型：截图 / 录屏 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "screenshot",
  name: "截图 / 录屏",
  kw: "截图 录屏 sharex flameshot snipaste obs 录屏软件 gif 截图工具",
  one: "截图标注、录屏直播、精美录屏分享——三种需求三个物种。本页顺便破一个流传已久的谣言：ShareX「维护放缓」。",
  date: "2026-10-20",
  src: "第一批漏斗 · 扩散搜索（ShareX alternative 生态）",
  status: "ok",
  count: 9,
  fit: [
    "要「截图→标注→上传→拿链接」一条龙自动化的（Windows）",
    "要录屏、直播、多源场景合成的创作者",
    "要录屏后美化（背景/缩放/字幕）再发给他人的（教程作者）"
  ],
  nofit: [
    "Linux 用户想要 ShareX 的 —— 它官方只有 Windows 版，跨平台选 Flameshot/ksnip",
    "以为 Snipaste 有开源版的 —— 贴图神器是闭源免费（个人），本页对照项"
  ],
  dims: [
    ["需求物种", "截图工作流（截→标→传）/ 录屏直播 / 精美化录屏分享——三种工具不互相替代"],
    ["平台", "本类型 Windows 与跨平台阵营分明，选前看平台列"],
    ["自动化", "是否需要 OCR、取色、40+ 图床自动上传这类工作流能力"],
    ["协议", "GPL 为主，但 ScreenToGif 是 MS-PL、Cap 是 AGPL 混合——二创前看清"],
    ["存储主权", "录屏分享类要问：视频传谁的服务器？Cap 支持全自托管"]
  ],
  segs: [
    {
      name: "截图工作流（截 → 标 → 传）",
      tag: "一条龙自动化，Windows 重镇",
      def: {
        proj: "ShareX",
        meta: "★ 40.2k · GPL-3.0 · 当日发新版本（活跃已恢复）",
        why: "Windows 截图工作流之王：多模式捕获 + 内置标注编辑器 + 40+ 上传目的地自动化的完整链条，附带 OCR、取色、二维码识别。网传「维护放缓」已被 2026 年三连发版（v20.2/21.0/22.0）证伪——活跃如初。⚠ 仅 Windows：代码里虽有跨平台探索（Avalonia），零官方跨平台发行版。"
      },
      swaps: [
        { t: "跨平台（Win/mac/Linux 都要）", p: "Flameshot", m: "★ 31.3k · GPL-3.0 · 活跃", d: "「就地标注」流派：框选完直接在选区里画箭头/打码，不用切编辑器；支持脚本化调用。" },
        { t: "嫌 ShareX 太复杂、只想要轻量截图+标注", p: "Greenshot", m: "★ 5.2k · GPL-3.0 · 仅 Windows · 活跃", d: "「嫌 ShareX 复杂」人群的经典答案，轻量够用。" },
        { t: "跨平台备胎（Qt 三平台）", p: "ksnip", m: "★ 约 3.4k · GPL-3.0", d: "低调的跨平台截图+标注，Flameshot 之外的备选。" }
      ],
      nofit: ""
    },
    {
      name: "录屏 / 直播",
      tag: "全能之王 + 各平台小助手",
      def: {
        proj: "OBS Studio",
        meta: "★ 77.8k · GPL-2.0 · 活跃 · Win/mac/Linux",
        why: "录屏与直播的双料之王：多源场景合成（窗口/显示器/摄像头/麦克风自由组合）、高性能本地录制、RTMP 直播推流，三图形后端跨全平台。本页体量最大，没有之一。"
      },
      swaps: [
        { t: "只为做 GIF 动图（逐帧编辑是灵魂）", p: "ScreenToGif", m: "★ 27.8k · MS-PL · 仅 Windows", d: "录屏→逐帧编辑→导出 GIF/APNG/视频/PSD。注意许可：MS-PL 非 GPL 系。" },
        { t: "Linux/GNOME 用户要极简录屏", p: "Kooha", m: "★ 3.5k · GPL-3.0 · Wayland 原生", d: "两个按钮开录，麦克风/桌面音频分轨，多格式输出。" }
      ],
      nofit: ""
    },
    {
      name: "精美录屏分享（Loom / Screen Studio 向）",
      tag: "录完就发，好看是生产力",
      def: {
        proj: "Cap",
        meta: "★ 23.4k · AGPL-3.0 混合（部分 MIT）· 两年冲到 23k · Win/mac",
        why: "官方定位「开源 Loom 替代」（社区常说的 Screen Studio 平替是引申）：Instant Mode 录完秒得分享链接；Studio Mode 本地编辑背景/缩放/字幕；S3/R2/MinIO 存储自选 + Docker 全自托管——录屏视频的数据主权也能攥在自己手里。附带 AI 自动标题/摘要/字幕。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "Snipaste（闭源对照，不进名单）", b: "国产闭源（广州作者），个人免费、商用 2.0+ 付费。F3 把截图钉在屏幕上当参照物的「贴图」是独特功能，官网未提 OCR。", s: "作为 ShareX 的极简闭源对照列在此处；无开源指标可采。" }
  ],
  myths: [
    ["「ShareX 维护放缓了/快死了」", "2023-2024 确有发布间隔拉长的讨论，但 2026 年实测三连发版（5 月/7 月/10 月当日）——「放缓」谣言已被数据证伪。看提交日期，别看传闻。"],
    ["「ShareX 是跨平台的」", "官方仅 Windows（README/官网/商店三重印证），Avalonia 跨平台版仍在探索未落地。跨平台请选 Flameshot 或 ksnip。"],
    ["「Cap 是 Screen Studio 的开源平替」", "官方原话是「Loom alternative」；Screen Studio 平替是媒体引申说法。两者功能确有重叠，但引用时以官方定位为准。"],
    ["「截图工具都一样，随便装一个」", "截图工作流、录屏直播、精美录屏分享是三个不同物种——教程作者要的是 Cap，游戏主播要的是 OBS，办公室文档侠要的是 ShareX。先分清你是谁。"]
  ]
});
