/* ═══ 类型：知识库 / RAG 平台 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "rag",
  name: "知识库 / RAG 平台",
  kw: "rag 知识库 dify ragflow fastgpt openwebui anythingllm maxkb 文档问答 本地大模型知识库 二脑",
  one: "把文档喂给 AI、让它用你的资料回答问题的自托管方案。本页 14 个项目协议分四档——「都叫开源」和「能怎么商用」之间隔着好几道条款，逐个拆给你看。",
  date: "2026-10-20",
  src: "四层漏斗 · 扩散搜索（中文 RAG 对比生态）",
  status: "ok",
  count: 14,
  fit: [
    "想给自己的文档/手册/wiki 建一个 AI 问答的团队",
    "想配 Ollama 本地模型搭「完全离线的知识库」的个人",
    "要在产品里加检索增强能力、正在选自建方案的开发者"
  ],
  nofit: [
    "以为「Apache 2.0 协议 = 随便商用」的 —— 本页头部项目全是「Apache + 附加条件」，多租户/去 LOGO 都要授权",
    "以为 RAG 平台装完就答得准的 —— 检索质量取决于分块策略与文档质量，平台只是工具"
  ],
  dims: [
    ["形态", "一站式平台（装完即用）/ 聊天前端（配 Ollama 即全家桶）/ 开发框架（自己写代码组装）"],
    ["协议（本页重点）", "四档：标准宽松 / Apache+附加条件 / GPL 强传染 / 自定义品牌条款——商用前逐个核对"],
    ["本地模型", "全部 14 项均可接 Ollama，但「内置本地引擎」的只有 AnythingLLM"],
    ["文档处理能力", "扫描件/表格/版面理解是拉开差距的地方（RAGFlow 的 DeepDoc 是差异化点）"],
    ["检索 vs 编排", "重检索质量选 RAG 引擎；重工作流编排选一站式平台"]
  ],
  segs: [
    {
      name: "一站式应用平台",
      tag: "装完即用：界面+知识库+工作流全带",
      def: {
        proj: "Dify",
        meta: "★ 159.0k · 修改版 Apache 2.0 + 附加条件 · 当日仍提交",
        why: "一站式 LLM 应用开发平台的事实标准：可视化 Workflow、RAG Pipeline、Agent（带沙箱与 MCP）、LLMOps 观测、Backend-as-a-Service 全带，官方支持接 Ollama。⚠ 协议注意：不是纯 Apache——附加条件要求「运营多租户环境需商业授权」且不得移除控制台 LOGO；自用/内部部署不受影响。"
      },
      swaps: [
        { t: "检索质量优先（扫描件、表格、复杂版面文档）", p: "RAGFlow", m: "★ 92.5k · Apache-2.0（标准）· 活跃", d: "差异化在 DeepDoc 深度文档理解（版面分析/OCR/表格识别）与模板化分块，协议也是本页最干净的一档。" },
        { t: "中文知识库问答 + 可视化编排", p: "FastGPT", m: "★ 29.9k · Apache 2.0 + 附加条件", d: "数据处理→RAG 检索→工作流编排全链路，支持 RPA 节点与双向 MCP；协议与 Dify 同款附加条件（多租户/LOGO）。" },
        { t: "个人桌面党：要 MIT 干净协议 + 内置本地引擎", p: "AnythingLLM", m: "★ 67.3k · MIT（标准）· 活跃", d: "本页唯一内置本地 LLM 引擎（llama.cpp 系，CPU/GPU 免配置），有桌面版——本地优先体验最完整，协议也是全页最干净。" },
        { t: "企业级知识库要接公司各系统数据源", p: "Onyx（原 Danswer）", m: "★ 32.6k · MIT 主体 + ee 目录企业授权", d: "强项是连接器：同步企业内各系统知识做企业搜索 + AI 助手，Agentic RAG 与 Deep Research 齐全。" },
        { t: "开箱即用的企业智能体平台（国内生态）", p: "MaxKB", m: "★ 23.0k · GPL-3.0（本页唯一）· 默认分支 v2", d: "零代码嵌入第三方系统、RAG Pipeline + 工作流。GPL 意味着基于它改造后对外提供服务需开源你的改动——与 MIT/Apache 系的传染性差别要清楚。" }
      ],
      nofit: ""
    },
    {
      name: "聊天前端 / Agent 工作台",
      tag: "本体是对话界面，配 Ollama 即本地全家桶",
      def: {
        proj: "Open WebUI",
        meta: "★ 156.2k · 自定义品牌条款（BSD-3 风格 + 品牌）· 活跃",
        why: "Ollama 的第一等公民搭档：插件体系（Filters/Actions/Tools/Skills + MCP）、按用户组的模型与知识权限、几十个搜索源注入对话做 RAG。⚠ 品牌条款：30 天滚动周期内最终用户 ≤50 人可自由去品牌，超限需书面许可——个人与小组完全无感，公司部署要留意。"
      },
      swaps: [
        { t: "要的是 7×24 的 AI 团队编排（不只聊天）", p: "LobeHub（原 lobe-chat）", m: "★ 83.4k · Apache 2.0 + 附加条件", d: "定位已升级为「Chief Agent Operator」；协议注意：不改源码可直接商用，但开发并分发衍生作品需向官方购买商业授权。" },
        { t: "个人「第二大脑」、连自己笔记一起问", p: "Khoj", m: "★ 37.8k · AGPL-3.0 · ⚠ 更新放缓（约 2.5 个月无提交）", d: "自托管个人 AI 助手，从网络+你的文档取答、可建自定义 agent。AGPL 是本页最强传染协议——对外提供网络服务也触发开源义务。" }
      ],
      nofit: ""
    },
    {
      name: "开发框架（自己写代码组装）",
      tag: "代码库不是产品，协议最干净",
      def: {
        proj: "LlamaIndex",
        meta: "★ 52.6k · MIT · 活跃",
        why: "文档处理平台定位，RAG 场景对口：官方 Ollama 集成包、海量向量库与模型集成。⚠ 时效提示：公司重心已转向文档解析（LlamaParse），开源框架仍开放可用但选型时知道这个重心在哪。"
      },
      swaps: [
        { t: "做的不只是 RAG、要通用 agent 工程", p: "LangChain", m: "★ 148.1k · MIT · 活跃", d: "agent 工程平台定位（描述原话），与 LangGraph/LangSmith 生态衔接；官方 langchain-ollama 集成包。用它「搭」知识库而非「装」知识库。" }
      ],
      nofit: ""
    }
  ],
  dead: [
    { t: "Verba（★ 7.7k）—— Weaviate 官方出品也归档了", b: "README 顶部醒目声明 Project Discontinued、仓库已归档——官方背书不保证永生。", s: "别再新选。" },
    { t: "ragapp（★ 4.4k）", b: "「像配 GPTs 一样配企业 RAG」的轻量方案，已约 21 个月无提交，实质停滞。", s: "理念不错但没人维护了。" },
    { t: "Quivr（★ 39.6k）—— 不是死了，是换了个人", b: "已从「第二大脑 RAG 问答」转型为 Go 写的内容流摄取/混合检索引擎（Quivr V2），仓库也从 QuivrHQ 转移到 The-Vibe-Company。", s: "引用旧定位介绍它会完全失实——看转型后的定位是否还是你要的。" }
  ],
  myths: [
    ["「Dify 是 Apache 2.0，随便商用」", "它是「修改版 Apache 2.0 + 附加条件」：运营多租户环境需商业授权、不得移除控制台 LOGO。内部自用没事，做成对外服务前必须读附加条款。"],
    ["「Open WebUI 是 BSD-3 开源」", "是「BSD-3 风格 + 品牌条款」的自定义许可：50 人以内免费去品牌，超限要授权。个人完全无感，公司部署要数人头。"],
    ["「协议栏写着 Other/无协议 = 没协议」", "本页多个头部项目（Dify/FastGPT/Open WebUI/LobeHub）GitHub 都识别为 Other，因为用的是自定义许可——这不是「没限制」，是限制写在 LICENSE 文件里等你自己去读。"],
    ["「star 高的 RAG 平台检索一定准」", "Dify 15.9 万星是编排能力的结果；检索质量看的是文档理解与分块（RAGFlow 的 DeepDoc 才是这维度的事实标准）。编排强 ≠ 检索强，按你的瓶颈选。"]
  ]
});
