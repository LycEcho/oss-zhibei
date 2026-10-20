/* ═══ 类型：PDF 工具箱 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "pdf",
  name: "PDF 工具箱",
  kw: "pdf stirling 合并 拆分 转换 pdf工具 pdf编辑 pdf压缩 ocrmypdf 批注",
  one: "合并、拆分、压缩、OCR、签名——PDF 工具的自托管方案本页全有。头版头条：9.5 万星的 Stirling-PDF 是 open-core（MIT 只是表象），协议演进而期是「从 Apache 走到 GPL 再回到 MIT+专有」的过山车。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（Stirling-PDF 生态）",
  status: "ok",
  count: 9,
  fit: [
    "要自托管一个「所有 PDF 操作都能做」的网页工具箱的（Stirling/bentopdf 段）",
    "要在自己程序里处理 PDF 的开发者（管线段）",
    "用手写笔在 PDF 上批注、记笔记的（批注段）"
  ],
  nofit: [
    "以为「Stirling-PDF 是 MIT 开源，生产随便用」的 —— 目录级 open-core：专有目录生产/规模化使用需付费订阅",
    "把「本地处理」当卖点的闭源在线工具当开源用的 —— Photopea 式陷阱在 PDF 工具里同样存在（PDF24）"
  ],
  dims: [
    ["形态", "自托管 Web 工具箱 / 浏览器端（隐私最强）/ 开发者管线 API / 桌面批注"],
    ["隐私模型", "Stirling 走服务端处理；bentopdf 全程浏览器端（文件不出设备）——两种隐私哲学"],
    ["许可深水区", "Stirling 目录级 open-core（专有目录生产用需订阅）；bentopdf 是 AGPL（传染最强）——都不是「随便商用」"],
    ["部署复杂度", "Stirling 2026 已是三运行时（Java+Python 微服务+TS 前端），评测给 Docker 就绪度 3/10——大而全的代价"],
    ["单点 vs 全能", "OCRmyPDF/Gotenberg 是「只做一件事」的单点工具，管线拼装更灵活"]
  ],
  segs: [
    {
      name: "自托管 Web 工具箱",
      tag: "一个面板吃掉所有 PDF 需求",
      def: {
        proj: "Stirling-PDF",
        meta: "★ 94.6k · ⚠ MIT 开源核心 + 多目录专有（open-core）· 当日提交",
        why: "GitHub 上的 #1 PDF 应用：50+ 工具（编辑/合并/拆分/签名/脱敏/OCR/压缩/转换）、无代码流水线可处理百万级 PDF、SSO/审计/40+ 语言。⚠ 协议必须如实拆解：MIT 只覆盖开源核心，`app/proprietary` 等专有目录（security 包、SaaS 功能）的生产/规模化使用需付费订阅——README 自述「open-core」。且部署已复杂化为三运行时（Java 后端+Python 微服务+TS 前端），有评测给 Docker 就绪度 3/10。"
      },
      swaps: [
        { t: "隐私最大化：文件全程不出浏览器（接受 AGPL）", p: "bentopdf", m: "★ 16.1k · AGPL-3.0 · 活跃 · 静态托管即可", d: "「Privacy First PDF Toolkit」：无服务端处理，文件全程不离开浏览器，静态托管即可部署。⚠ 搜索中流传的「MIT」是误传，以仓库 package.json 与 LICENSE 为准是 AGPL——传染性最强的许可，二处分发要开源。" }
      ],
      nofit: ""
    },
    {
      name: "开发者管线（API / 库）",
      tag: "把 PDF 处理嵌进自己的程序",
      def: {
        proj: "Gotenberg",
        meta: "★ 13.4k · MIT · 活跃 · Docker HTTP API",
        why: "开发者友好的文档转 PDF API：HTML/URL/Markdown/Office 一律转 PDF，Docker 一行拉起、无界面纯管线——微服务架构里「PDF 转换节点」的标准答案。"
      },
      swaps: [
        { t: "Python 技术栈", p: "pypdf", m: "★ 10.3k · BSD-3-Clause · 活跃", d: "Python 生态标准 PDF 库（pyPdf→PyPDF2 合并而来）：拆分/合并/裁剪/加解密/取文本元数据。" },
        { t: "Go 技术栈", p: "pdfcpu", m: "★ 8.9k · Apache-2.0 · 活跃", d: "Go 引擎，库+CLI 双形态：校验/优化/拆合/水印/签名校验/表单填写，偏结构操作。" },
        { t: "扫描件 OCR 专精（命令行）", p: "OCRmyPDF", m: "★ 35.1k · MPL-2.0 · 活跃", d: "给扫描 PDF 加可搜索文字层的事实标准（详见本站 OCR 页）。" }
      ],
      nofit: ""
    },
    {
      name: "手写批注（数位板党）",
      tag: "压感笔 + PDF 批注",
      def: {
        proj: "Xournal++",
        meta: "★ 15.5k · GPL-2.0 · 当日提交 · 全平台",
        why: "手写笔记 + PDF 批注：压感笔/数位板（Wacom 等全支持）+笔迹稳定化，在背景 PDF 上书写并可选文字高亮/下划线，导出 SVG/PNG/PDF。注意它是「人手写批注」赛道，与 Web 工具箱的「批量处理」不是一类活。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "闭源对照（不进名单）：Adobe Acrobat / PDF24", b: "Acrobat：PDF 格式制定者、功能天花板、闭源订阅。PDF24：德国闭源免费工具箱（在线+桌面），免费但不可自托管不可审计——「免费但不可控」档的对照。", s: "对照项。" }
  ],
  myths: [
    ["「Stirling-PDF 是 MIT 开源，生产环境随便用」", "它 2025-11 起定型为目录级 open-core：MIT 只盖开源核心，专有目录（security 包/SaaS 功能）的生产与规模化使用需付费订阅（LICENSE 原文：「may not use the Software in production, at scale, or for business-critical processes unless…hold an active User License subscription」）。9.5 万星 ≠ 随便商用。"],
    ["「Stirling-PDF 从 MIT 改走了开源协议」", "方向反了：逐 commit 取证的协议史是 Apache-2.0（2023-01 建仓）→ GPL-3.0（2023-05）→ MIT（2024-09）→ MIT+专有目录 open-core（2025-11）。它不是「从开源改闭源」，是「开源核心+商业层」的渐进演化——故事讲错了会误导选型。"],
    ["「bentopdf 是 MIT，比 Stirling 干净」", "流传的 MIT 是误传：package.json 与 LICENSE 均为 AGPL-3.0-only——对商用分发来说 AGPL 反而是传染性最强的许可。隐私最强和许可最宽松是两回事。"],
    ["「自托管 PDF 工具箱就是一个 Docker 镜像的事」", "Stirling-PDF 2026 年已演化为三运行时平台（Java 后端 + Python OCR 微服务 + TS 前端），有评测给 Docker 就绪度 3/10。功能大全的代价是部署复杂度——轻量派看 bentopdf（纯静态托管）。"]
  ]
});
