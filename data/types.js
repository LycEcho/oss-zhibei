/* ═══════════════════════════════════════════════════════════
   类型清单（manifest）—— 加新类型只动这里 + 新建一个数据文件

   加类型三步：
   1. 在 data/types/ 下新建一个 .js 文件（照抄现有文件的结构）
   2. 把文件路径加进下面这个清单（顺序 = 首页卡片顺序）
   3. 提交到 GitHub —— 页面自动出现新类型，界面代码不用动
   ═══════════════════════════════════════════════════════════ */

window.TYPE_MANIFEST = [
  "data/types/api-token-gateway.js",
  "data/types/local-llm-runtime.js",
  "data/types/ai-coding-agents.js",
  "data/types/ai-reverse-engineering.js",
  "data/types/local-ai-voice.js",
  "data/types/network-tunnel.js",
  "data/types/file-transfer.js",
  "data/types/note-apps.js",
  "data/types/game-emulators.js",
  "data/types/selfhosted.js",
  "data/types/knowledge-rag.js",
  "data/types/agent-skills.js",
  "data/types/download-tools.js",
  "data/types/screenshot-recorder.js",
  "data/types/ocr.js",
  "data/types/image-editor.js",
  "data/types/ssh-client.js",
  "data/types/code-editor.js",
  "data/types/api-debugger.js",
  "data/types/compression.js",
  "data/types/terminal.js",
  "data/types/phone-tool.js",
  "data/types/container.js",
  "data/types/pdf.js",
  "data/types/video-edit.js",
  "data/types/dbgui.js",
  "data/types/vm.js",
  "data/types/serverpanel.js",
  "data/types/audio.js",
  "data/types/backup.js",
  "data/types/nas.js",
  "data/types/agent-infra-watchlist.js",
  "data/types/discovery-funnel.js",
  "data/types/community-picks.js"
];

window.TYPE_DATA = []; // 各类型文件会 push 进来，不要手动改这里
