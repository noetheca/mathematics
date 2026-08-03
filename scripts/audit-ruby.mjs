import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

// 文部科学省「学年別漢字配当表」の第1〜3学年。
// https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
const GRADE_1 =
  "一右雨円王音下火花貝学気九休玉金空月犬見五口校左三山子四糸字耳七車手十出女小上森人水正生青夕石赤千川先早草足村大男竹中虫町天田土二日入年白八百文木本名目立力林六";
const GRADE_2 =
  "引羽雲園遠何科夏家歌画回会海絵外角楽活間丸岩顔汽記帰弓牛魚京強教近兄形計元言原戸古午後語工公広交光考行高黄合谷国黒今才細作算止市矢姉思紙寺自時室社弱首秋週春書少場色食心新親図数西声星晴切雪船線前組走多太体台地池知茶昼長鳥朝直通弟店点電刀冬当東答頭同道読内南肉馬売買麦半番父風分聞米歩母方北毎妹万明鳴毛門夜野友用曜来里理話";
const GRADE_3 =
  "悪安暗医委意育員院飲運泳駅央横屋温化荷界開階寒感漢館岸起期客究急級宮球去橋業曲局銀区苦具君係軽血決研県庫湖向幸港号根祭皿仕死使始指歯詩次事持式実写者主守取酒受州拾終習集住重宿所暑助昭消商章勝乗植申身神真深進世整昔全相送想息速族他打対待代第題炭短談着注柱丁帳調追定庭笛鉄転都度投豆島湯登等動童農波配倍箱畑発反坂板皮悲美鼻筆氷表秒病品負部服福物平返勉放味命面問役薬由油有遊予羊洋葉陽様落流旅両緑礼列練路和";

const allowedByGrade = new Map([
  [1, new Set([...GRADE_1])],
  [2, new Set([...GRADE_1, ...GRADE_2])],
  [3, new Set([...GRADE_1, ...GRADE_2, ...GRADE_3])],
]);
const HAN_PATTERN = /[\p{Unified_Ideograph}々〇〆〻]/gu;

function mask(value) {
  return value.replace(/[^\r\n]/gu, " ");
}

function maskMatches(value, pattern) {
  return value.replace(pattern, (match) => mask(match));
}

async function findJapaneseArticles(directory) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...(await findJapaneseArticles(path)));
    else if (entry.name === "ja.md") found.push(path);
  }
  return found;
}

function laterKanji(text, allowed) {
  return [...new Set(text.match(HAN_PATTERN) ?? [])].filter(
    (character) => !allowed.has(character),
  );
}

function auditDirectiveLabels(line, allowed, lineNumber, issues) {
  const directive = /^\s*(:::details|:::callout|::interactive)\b/u.exec(line)?.[0];
  if (!directive) return false;

  const checks = line.includes("details")
    ? [[/\bsummary="([^"]*)"/u, "summaryReading"]]
    : line.includes("callout")
      ? [[/\btitle="([^"]*)"/u, "titleReading"]]
      : [[/^\s*::interactive\[([^\]]*)\]/u, "captionReading"]];

  for (const [labelPattern, readingAttribute] of checks) {
    const label = labelPattern.exec(line)?.[1];
    if (!label) continue;
    const missing = laterKanji(label, allowed);
    if (missing.length > 0 && !line.includes(`${readingAttribute}=`)) {
      issues.push({
        line: lineNumber,
        kanji: missing.join(""),
        text: `${readingAttribute} がないdirective見出し: ${label}`,
      });
    }
  }
  return true;
}

async function auditFile(path, root) {
  const source = await readFile(path, "utf8");
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(source);
  if (!frontmatter) return [];
  const gradeMatch = /\bgrade:\s*([123])\s*$/mu.exec(frontmatter[1]);
  const grade = gradeMatch ? Number(gradeMatch[1]) : undefined;
  const allowed = grade ? allowedByGrade.get(grade) : undefined;
  if (!allowed) return [];
  const frontmatterLineCount = frontmatter[0].split(/\r?\n/u).length - 1;

  const issues = [];
  const articleBody = source.slice(frontmatter[0].length);
  for (const match of articleBody.matchAll(
    /\$\$[\s\S]*?\$\$|\$[^$\r\n]+\$/gu,
  )) {
    const missing = laterKanji(match[0], allowed);
    if (missing.length === 0) continue;
    const line =
      frontmatterLineCount +
      articleBody.slice(0, match.index).split(/\r?\n/u).length;
    issues.push({
      line,
      kanji: missing.join(""),
      text: `数式内テキストはルビを付けられないため、学年内漢字か記号へ言い換える: ${match[0].replace(/\s+/gu, " ").slice(0, 80)}`,
    });
  }

  let body = articleBody;
  body = maskMatches(body, /```[\s\S]*?```/gu);
  body = maskMatches(body, /`[^`\r\n]*`/gu);
  body = maskMatches(body, /\$\$[\s\S]*?\$\$/gu);
  body = maskMatches(body, /\$[^$\r\n]+\$/gu);
  body = maskMatches(body, /:ruby\[[^\]]+\]\{[^}\r\n]+\}/gu);
  body = maskMatches(body, /!\[[^\]]*\]\([^\r\n)]*\)/gu);
  body = body.replace(/\]\((?:https?:\/\/|\.\/|\.\.\/)[^\r\n)]*\)/gu, "]");

  const lines = body.split(/\r?\n/u);
  for (const [index, line] of lines.entries()) {
    const lineNumber = frontmatterLineCount + index + 1;
    if (auditDirectiveLabels(line, allowed, lineNumber, issues)) continue;
    const missing = laterKanji(line, allowed);
    if (missing.length === 0) continue;
    issues.push({
      line: lineNumber,
      kanji: missing.join(""),
      text: line.trim().replace(/\s+/gu, " ").slice(0, 120),
    });
  }
  return issues.map((issue) => ({
    ...issue,
    file: relative(root, path).replaceAll("\\", "/"),
    grade,
  }));
}

const projectRoot = resolve(import.meta.dirname, "..");
const conceptRoot = join(projectRoot, "concepts");
const issues = (
  await Promise.all(
    (await findJapaneseArticles(conceptRoot)).map((path) =>
      auditFile(path, projectRoot),
    ),
  )
).flat();

if (issues.length === 0) {
  console.log("Ruby audit passed for grade 1–3 article bodies.");
  process.exit(0);
}

for (const issue of issues) {
  console.error(
    `${issue.file}:${issue.line}${issue.grade ? ` [grade ${issue.grade}]` : ""} ${issue.kanji} — ${issue.text}`,
  );
}
console.error(`Ruby audit found ${issues.length} potential omission(s).`);
process.exitCode = 1;
