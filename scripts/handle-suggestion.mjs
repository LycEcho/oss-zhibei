#!/usr/bin/env node
/* ═══════════════════════════════════════════════════════════
   社区建议处理 —— issue 表单 → 校验 → 自动收录进「社区推荐」区

   输入：环境变量（ISSUE_TITLE/BODY/NUMBER/AUTHOR），不经过 shell 插值
   输出：GITHUB_OUTPUT（result=ok|duplicate|invalid + comment=回评文本）
   安全设计：
   - URL 白名单（仅 github.com 仓库链接）
   - 文本清洗（去 HTML 标签与危险字符，防存储型 XSS —— 页面直接 innerHTML 渲染）
   - 全量 JSON.stringify 重写数据文件（双保险，保证语法合法、无代码注入）
   - 与已收录条目 / 正式类型文件查重
   ═══════════════════════════════════════════════════════════ */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = path.join(ROOT, "data", "types", "community-picks.js");
const TYPES_DIR = path.join(ROOT, "data", "types");

const env = process.env;
const body = env.ISSUE_BODY || "";
const issueNo = env.ISSUE_NUMBER || "0";
const author = (env.ISSUE_AUTHOR || "anonymous").replace(/[^A-Za-z0-9-]/g, "");

/* ── GitHub Actions 输出 ── */
function emit(key, value) {
  const line = `${key}<<EOF\n${value}\nEOF\n`;
  if (env.GITHUB_OUTPUT) fs.appendFileSync(env.GITHUB_OUTPUT, line);
  else console.log(`[dry-run output] ${key} = ${value}`);
}
function finish(result, comment) {
  emit("result", result);
  emit("comment", comment);
  console.log(`RESULT: ${result}`);
}

/* ── 解析表单正文：### 字段名 / 内容 分段 ── */
function parseForm(text) {
  const sections = {};
  for (const part of text.split(/^### /m).slice(1)) {
    const nl = part.indexOf("\n");
    if (nl < 0) continue;
    const label = part.slice(0, nl).trim();
    const value = part.slice(nl + 1).trim();
    sections[label] = value === "_No response_" ? "" : value;
  }
  return sections;
}

/* ── 文本清洗：去标签/危险字符/截断（页面 innerHTML 直插，必须先洗） ── */
function clean(text, maxLen) {
  return text
    .replace(/<[^>]*>/g, " ")            // 成对/残缺 HTML 标签
    .replace(/[<>&"'`$\\{}]/g, "")       // 危险字符与模板注入符
    .replace(new RegExp("[\\u0000-\\u001F\\u007F]", "g"), " ") // 控制字符
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLen);
}

/* ── URL 白名单：只收 github.com 仓库主页链接 ── */
function parseRepoUrl(raw) {
  const m = raw.trim().match(
    /^https:\/\/github\.com\/([A-Za-z0-9](?:[A-Za-z0-9-]{0,38}[A-Za-z0-9])?)\/([A-Za-z0-9_.-]+?)\/?$/
  );
  if (!m) return null;
  const owner = m[1];
  const repo = m[2].replace(/\.git$/i, "");
  return { owner, repo, url: `https://github.com/${owner}/${repo}`, key: `${owner}/${repo}`.toLowerCase() };
}

/* ── 在沙箱里读取数据文件的真实对象 ── */
function readDataFile() {
  const win = { TYPE_DATA: [] };
  const fn = new Function("window", fs.readFileSync(DATA_FILE, "utf8"));
  fn(win);
  const obj = win.TYPE_DATA[0];
  if (!obj || !Array.isArray(obj.obsList)) throw new Error("community-picks.js 结构异常");
  return obj;
}

/* ── 全量重写（JSON.stringify 保证合法字面量） ── */
function writeDataFile(obj, note) {
  const banner = `/* ═══ 社区推荐 · 自动收录区 ═══\n   由「推荐一个项目」issue 表单经 scripts/handle-suggestion.mjs 自动追加。\n   未经人工核验，只当线索看；人工核验后转正进正式类型页。\n   请勿手改本文件结构 —— 脚本会全量重写。${note ? `\n   ${note}` : ""} */\n`;
  fs.writeFileSync(DATA_FILE, `${banner}window.TYPE_DATA.push(${JSON.stringify(obj, null, 2)});\n`);
}

/* ── 与正式类型文件查重（尽力而为：正式文件里出现同 owner/repo 字样即算重复） ── */
function existsInOfficialTypes(key) {
  for (const f of fs.readdirSync(TYPES_DIR)) {
    if (f === "community-picks.js") continue;
    const text = fs.readFileSync(path.join(TYPES_DIR, f), "utf8").toLowerCase();
    if (text.includes(key)) return f;
  }
  return null;
}

/* ═══ 主流程 ═══ */
function main() {
try {
  const form = parseForm(body);
  const name = clean(form["项目名称"] || "", 40);
  const reason = clean(form["一句话推荐"] || "", 200);
  const category = clean(form["属于哪一类"] || "还不确定", 30);
  const repo = parseRepoUrl(form["项目地址"] || "");

  if (!name || !reason || !repo) {
    return finish("invalid",
      "❌ 未通过自动校验，已关闭本建议。\n\n" +
      "常见原因：\n- 「项目地址」必须是 `https://github.com/用户名/仓库名` 形式的仓库主页链接\n" +
      "- 「项目名称」和「一句话推荐」不能为空\n\n" +
      "修好后欢迎重新提交一个 issue。");
  }
  if (repo.key.length > 100) {
    return finish("invalid", "❌ 链接超长，未通过自动校验，已关闭本建议。");
  }

  const obj = readDataFile();

  const inCommunity = obj.obsList.some(r => typeof r[4] === "string" && r[4] === repo.key);
  const inOfficial = existsInOfficialTypes(repo.key);
  if (inCommunity || inOfficial) {
    return finish("duplicate",
      `⚠️ 项目 **${repo.owner}/${repo.repo}** 已被收录过${inOfficial ? `（见正式类型页：${inOfficial}）` : "（社区推荐区）"}，本建议已关闭。\n\n` +
      "如果你想补充新的判断或证据，欢迎在已收录条目所在的类型页另开讨论。");
  }

  const today = new Date().toISOString().slice(0, 10);
  obj.obsList.push([
    `<a href="${repo.url}" target="_blank" rel="noopener noreferrer">${name}</a>`,
    reason,
    category,
    `issue #${issueNo} · @${author} · ${today}`,
    repo.key   // 第5列内部查重键，渲染时不输出（obsPage 只读前4列）
  ]);
  obj.count = obj.obsList.length;
  obj.date = today;
  writeDataFile(obj, `最后自动更新：${today} by issue #${issueNo}`);

  return finish("ok",
    `✅ **${name}** 已自动收录进「社区推荐 · 待核验」专区，几分钟内上线。\n\n` +
    "机器只做了格式与重复校验，**内容未经人工核验** —— 采信前请自己点开仓库确认。\n" +
    "站长核验后，优质条目会转正进正式类型页并标注核验戳。\n\n" +
    `查看：https://lycecho.github.io/oss-zhibei/ （搜索「${name}」即可定位）`);
} catch (err) {
  console.error(err);
  finish("invalid", "❌ 处理本建议时脚本出错，已关闭。这不是你的问题 —— 请稍后重新提交，或直接联系站长。");
}
}

main();
