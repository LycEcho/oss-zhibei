/* ═══ 类型：本地大模型运行 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "local",
  name: "本地大模型运行",
  kw: "本地 ollama llm 大模型 vllm jan 推理 llama cpp gpt4all lm studio",
  one: "不连外部服务、在自己电脑或服务器上跑开源大模型。数据不出门、没有按量付费；代价是效果受限于硬件。类型里住着三种完全不同的角色 —— 选错形态是新手最常见的浪费。",
  date: "2026-10-20",
  src: "种子清单 + 扩散搜索",
  status: "ok",
  count: 11,
  fit: [
    "数据敏感不想出网的（本地文档问答、内网场景）",
    "想给自己的应用接便宜模型服务的开发者",
    "想折腾学习的人"
  ],
  nofit: [
    "预期「本地免费 = ChatGPT 质量」的人 —— 本地能跑的模型和云端旗舰差距肉眼可见",
    "企业多人共用的需求属于「推理服务器 + 网关」组合，不是装个桌面软件能解决的"
  ],
  dims: [
    ["硬件门槛", "无 GPU 普通笔记本 → 消费级显卡 → 机房级 GPU，工具适配范围差别巨大"],
    ["使用形态", "双击界面聊 / 给程序供 API / 高并发服务 —— 对应三个形态段"],
    ["模型获取", "内置模型市场一键下，还是自己去 HuggingFace 找 GGUF 文件"],
    ["OpenAI 兼容 API", "决定能不能把现有工具（写作助手、代码插件）直接指到本地模型"],
    ["后端与量化", "决定你的硬件（Apple 芯片 / N 卡 / A 卡 / CPU）能不能跑、跑多快"]
  ],
  segs: [
    {
      name: "个人桌面，双击就用",
      tag: "小白友好",
      def: {
        proj: "Jan",
        meta: "★ 45k · Apache 2.0（README 口径，协议待核）· 活跃",
        why: "开源版 ChatGPT 桌面替身：从 HuggingFace 拉模型直接聊，带本地 API 服务器（OpenAI 兼容）和 MCP 扩展，是从「纯聊天」走向「接工具」最顺的路径。"
      },
      swaps: [
        { t: "只要最好的图形体验、不在乎闭源", p: "LM Studio（闭源对照项，不进短名单）", m: "闭源 · 免费（含商用）", d: "模型发现和下载体验全场最好的个人桌面 GUI。" },
        { t: "玩角色扮演 / 故事，要单文件零安装", p: "KoboldCpp", m: "★ 12k · MIT", d: "单可执行文件，内嵌浏览器 UI，附带文生图与语音。" },
        { t: "喜欢自己换底层引擎、调参折腾", p: "text-generation-webui", m: "★ 47.7k · AGPL-3.0", d: "一个界面下热切换 llama.cpp / ExLlamaV3 等多后端，还能训 LoRA。" }
      ],
      projects: [],
      nofit: ""
    },
    {
      name: "开发者：给程序供模型的本地服务",
      tag: "工程向",
      def: {
        proj: "Ollama",
        meta: "★ 183.9k · MIT · 当日仍有提交",
        why: "一条命令跑起来，官方模型库 ollama run 即用，本机 REST API + Python/JS SDK 齐全。注意：OpenAI 兼容 API 是子集（tool_choice、logit_bias、n 等不支持）—— 接现有工具链前先查兼容表。"
      },
      swaps: [
        { t: "要极致控制、量化粒度、冷门硬件后端", p: "llama.cpp", m: "★ 131.7k · MIT · 当日提交", d: "整个类型的地基 —— Ollama、Jan、KoboldCpp、LM Studio 底层都是它。直接用它等于自己造轮子，换来的是每一步都可控。" },
        { t: "要把模型打包成单文件发给别人", p: "llamafile", m: "Apache-2.0", d: "模型+引擎合为单个可执行文件；Windows 单文件上限 4GB。" },
        { t: "要 OpenAI 接口的「无缝替身」+ 多模态 + 多用户隔离", p: "LocalAI", m: "★ 49.7k · MIT · 活跃", d: "drop-in 兼容 OpenAI / Anthropic / ElevenLabs 接口，带鉴权、配额、RBAC。" }
      ],
      projects: [],
      nofit: ""
    },
    {
      name: "生产推理服务器",
      tag: "机房 GPU、多用户并发",
      def: {
        proj: "vLLM",
        meta: "★ 94.2k · Apache-2.0 · 当日仍有提交",
        why: "为「一排 GPU 伺候很多人」设计：PagedAttention 显存管理、continuous batching，官方自称吞吐 SOTA（自称口径，无第三方 benchmark 不写成事实）。OpenAI 兼容之外还支持 Anthropic Messages API 和 gRPC。"
      },
      swaps: [
        { t: "Agent 型负载（超长上下文、反复调用、强化学习采样）", p: "SGLang", m: "★ 37.5k · Apache-2.0 · 活跃", d: "官方定位主攻 agentic workloads 和 RL rollout；OpenAI 兼容性待核。" }
      ],
      projects: [],
      nofit: "没有独立 GPU 服务器的小团队 —— 它们的优势建立在机房硬件上。"
    }
  ],
  dead: [
    { t: "GPT4All（★ 77.4k）", b: "网上教程最多的老牌工具，截至 2026-10-20 已 17 个月无任何代码提交（未标归档，靠活跃数据才抓得出来）。", s: "教程还能跑，但别为它做长期选型。" }
  ],
  myths: [
    ["「Ollama 和 llama.cpp 二选一」", "不是竞争关系 —— Ollama 底层就是 llama.cpp，是包装关系。"],
    ["「OpenAI 兼容 = 完全兼容」", "Ollama 明确只支持子集；工具链迁移时字段级兼容问题最常见。"],
    ["拿 star 论英雄", "GPT4All 7.7 万 star 依然停更。真正的质量信号是发版节奏和 issue 响应。"],
    ["以为本地模型能白嫖旗舰质量", "本地跑的是缩小版模型，硬件决定上限。"]
  ]
});
