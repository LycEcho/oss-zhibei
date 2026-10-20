/* ═══ 类型：数据库客户端 ═══ 字段说明见 README */
window.TYPE_DATA.push({
  id: "dbg",
  name: "数据库客户端（GUI）",
  kw: "数据库 dbeaver beekeeper navicat tableplus datagrip sql 客户端 数据库管理 chat2db",
  one: "连接数据库的图形客户端。本页的协议考古有惊喜：DbGate 是 GPL-3.0 而非传闻的 MIT、Chat2DB 5.3.0 起收紧为附加条件许可、Beekeeper 的商业代码目录单独授权——「印象中的协议」又一次全线失守。",
  date: "2026-10-20",
  src: "第二批漏斗 · 扩散搜索（DBeaver alternative 生态）",
  status: "ok",
  count: 10,
  fit: [
    "日常要看库改数据跑 SQL 的开发者（全能段或轻量段）",
    "只固定用一个数据库、想要专精工具的（专精段）",
    "被 Navicat/TablePlus 订阅与限制劝退、找免费路线的"
  ],
  nofit: [
    "以为「DBeaver 全功能开源」的 —— CE 本体 Apache 没错，但 ER 图/建模/NoSQL 高级支持在闭源 PRO 分叉",
    "以为「Chat2DB 是纯 Apache 2.0」的 —— 5.3.0 起收紧为附加条件版：禁止无授权对外提供服务/白标/OEM"
  ],
  dims: [
    ["形态", "全能（80+ 数据库）/ 轻量易用 / 单库专精——支持广度和清爽度不可兼得"],
    ["协议现况", "本页「印象协议」翻车率最高的页面之一：DbGate 非 MIT、Beekeeper 非 MIT、Chat2DB 已收紧"],
    ["收费档", "开源客户端的「免费-付费」分界线五花八门：Beekeeper 按数据库种类分档、DBeaver 按功能分叉、DbGate 按高级功能"],
    ["数据库广度", "DBeaver JDBC 全覆盖（约 80+）vs 专精工具只管一个库但体验最好"],
    ["闭源对照", "TablePlus 买断 $99 起（免费版限 2 tabs）、DataGrip 非商业免费"]
  ],
  segs: [
    {
      name: "全能系（跨库通吃）",
      tag: "一个客户端连所有库",
      def: {
        proj: "DBeaver",
        meta: "★ 52.1k · Apache-2.0（CE）· 当日提交 · 2015 年至今",
        why: "全能系天花板：基于 JDBC 号称支持几乎所有数据库（评测口径 80+），数据编辑/元数据管理/SQL 开发全套。⚠ 许可拆分如实告知：CE 本体 Apache-2.0 没错，但 ER 图、数据建模、NoSQL 高级支持在闭源 PRO 发行版（年订阅制）——「CE 够用但 PRO 留了一手」的典型。"
      },
      swaps: [
        { t: "要 AI 加持 + 40+ 库 + 桌面/Web/CLI/MCP 全形态", p: "Chat2DB", m: "★ 28.3k · ⚠ 5.3.0+ 修改版 Apache 2.0", d: "可自带 AI 模型生成/解释/优化 SQL。⚠ 协议收紧实录：5.3.0 前是纯 Apache 2.0，5.3.0 起附加条件（禁止无书面授权对外提供服务、白标、OEM、托管交付）——升级前看清你用哪个版本。" },
        { t: "SQL + NoSQL 双吃（MongoDB 也要）", p: "DbGate", m: "★ 7.3k · GPL-3.0（⚠ 不是传闻的 MIT）· 活跃", d: "轻量全能：MySQL/PG/SQL Server/MongoDB/SQLite，桌面+Web 双形态；Premium 付费档加 schema 对比/可视化查询设计器。" },
        { t: "清爽易用优先（「比 DBeaver 清爽」的头号答案）", p: "Beekeeper Studio", m: "★ 23.8k · GPLv3 + 商业目录单独授权 · 活跃", d: "零遥测、SSH 隧道、表格化编辑。⚠ 收费分界独特：免费版含主流库（PG/MySQL/SQLite/SQL Server/Redis 等），Oracle/Cassandra/ClickHouse/MongoDB/Snowflake 要 $9-18/月档。"
        }
      ],
      nofit: ""
    },
    {
      name: "单库专精（体验最好）",
      tag: "只管一个库，但管到极致",
      def: {
        proj: "DB Browser for SQLite",
        meta: "★ 24.7k · MPL-2.0 + GPL-3.0+ 双许可 · 全免费",
        why: "SQLite 的事实标准 GUI：表格化（spreadsheet 式）编辑、100% 免费无付费档。SQLite 是世界上部署量最大的数据库——每个开发者的本地项目里都躺着几个 .db 文件，这个工具就是为它们准备的。"
      },
      swaps: [
        { t: "PostgreSQL 重度用户", p: "pgAdmin 4", m: "★ 3.9k · PostgreSQL Licence · 官方出品", d: "Postgres 官方管理开发平台，桌面+Web 双形态，完全免费无付费档。" },
        { t: "macOS + MySQL/MariaDB", p: "Sequel Ace", m: "★ 7.6k · MIT · 活跃", d: "Sequel Pro 的正统续作（原项目 2020 年弃更），macOS 上管理 MySQL 的轻量选择。" }
      ],
      nofit: ""
    },
    {
      name: "Windows 老牌轻量",
      tag: "2002 年至今的活化石",
      def: {
        proj: "HeidiSQL",
        meta: "★ 6.3k · GPL-2.0 · 活跃 · 2002 年起",
        why: "Windows 老牌轻量客户端（Delphi 编写，现跨 Linux/macOS）：MariaDB/MySQL/MSSQL/PostgreSQL/SQLite 等 7 种库，完全免费捐赠制无付费档，SSH 隧道/数据编辑/权限管理齐备——「重但免费」阵营里的轻量异类。"
      },
      swaps: [],
      nofit: ""
    }
  ],
  dead: [
    { t: "闭源对照（不进名单）：TablePlus / DataGrip / Navicat", b: "TablePlus：原生买断制（免费版限 2 tabs/2 窗口/2 过滤器，$99 起）。DataGrip：JetBrains 出品、非商业免费、订阅制。Navicat：闭源订阅贵的代名词（本次未采，中文圈无人不晓）。", s: "三个对照各自定义了「付费的理由」：原生体验、全家桶集成、中文生态。" }
  ],
  myths: [
    ["「DbGate 是 MIT 协议，随便商用」", "实测 LICENSE 原文是 GPL-3.0（README 原文：「licensed under GPL-3.0 license and is free to use for any purpose」）。传闻与 LICENSE 文件冲突时，永远信文件。"],
    ["「Chat2DB 是纯 Apache 2.0 开源」", "版本敏感的典型案例：5.3.0 之前是纯 Apache 2.0，5.3.0 起收紧为附加条件版（禁止无授权对外提供服务/白标/OEM/托管交付）。锁定版本号的选型才算数。"],
    ["「Beekeeper Studio 免费版什么库都能连」", "免费版含主流关系库没错，但 Oracle/Cassandra/ClickHouse/DuckDB/MongoDB/Snowflake 在 $9-18/月档——「支持哪些数据库」本身就是它的付费墙，这在数据库客户端里是独特设计。"],
    ["「DBeaver 开源，所以 PRO 功能也该免费」", "CE 本体 Apache-2.0 是真开源，PRO 是闭源商业分叉——「开源核心+商业分叉」模式在数据库客户端里由 DBeaver 发扬光大，它没有违约也没有骗人，只是别把两层混为一谈。"]
  ]
});
