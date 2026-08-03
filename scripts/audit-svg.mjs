import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

// 文部科学省「学年別漢字配当表」の第1〜3学年。
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

async function findSvgFiles(directory) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...(await findSvgFiles(path)));
    else if (entry.name.toLowerCase().endsWith(".svg")) found.push(path);
  }
  return found;
}

const projectRoot = resolve(import.meta.dirname, "..");
const issues = [];
const forbiddenElements = /<(?:script|foreignObject|iframe|object|embed|audio|video|animate|animateMotion|animateTransform|set)\b/iu;
const eventAttribute = /\son[a-z]+\s*=/iu;
const remoteReference = /(?:href|src)\s*=\s*["']\s*(?:https?:|\/\/|data:|javascript:)/iu;
const cssImport = /@import\b|url\(\s*["']?\s*(?:https?:|\/\/|data:)/iu;

for (const path of await findSvgFiles(join(projectRoot, "concepts"))) {
  const source = await readFile(path, "utf8");
  const label = relative(projectRoot, path).replaceAll("\\", "/");
  const root = /<svg\b(?<attributes>[^>]*)>/iu.exec(source);
  if (!root) {
    issues.push(`${label} — missing svg root`);
    continue;
  }
  if (!/\bviewBox\s*=\s*["'][^"']+["']/iu.test(root.groups.attributes)) {
    issues.push(`${label} — missing viewBox`);
  }
  if (!/<title(?:\s[^>]*)?>[^<\s][\s\S]*?<\/title>/iu.test(source)) {
    issues.push(`${label} — missing non-empty title`);
  }
  if (!/<desc(?:\s[^>]*)?>[^<\s][\s\S]*?<\/desc>/iu.test(source)) {
    issues.push(`${label} — missing non-empty desc`);
  }
  if (forbiddenElements.test(source)) {
    issues.push(`${label} — contains a forbidden active/embedded element`);
  }
  if (eventAttribute.test(source)) {
    issues.push(`${label} — contains an event-handler attribute`);
  }
  if (remoteReference.test(source) || cssImport.test(source)) {
    issues.push(`${label} — contains an external, data, or executable reference`);
  }

  const articlePath = join(dirname(dirname(path)), "ja.md");
  try {
    const article = await readFile(articlePath, "utf8");
    const gradeMatch = /^\s*grade:\s*([123])\s*$/mu.exec(article);
    const allowed = gradeMatch
      ? allowedByGrade.get(Number(gradeMatch[1]))
      : undefined;
    if (allowed) {
      for (const match of source.matchAll(/<text\b[^>]*>([\s\S]*?)<\/text>/giu)) {
        const visibleText = match[1].replace(/<[^>]+>/gu, "");
        const missing = [
          ...new Set(visibleText.match(HAN_PATTERN) ?? []),
        ].filter((character) => !allowed.has(character));
        if (missing.length > 0) {
          const line = source.slice(0, match.index).split(/\r?\n/u).length;
          issues.push(
            `${label}:${line} — visible SVG label uses later-grade Kanji (${missing.join("")}): ${visibleText.trim()}`,
          );
        }
      }
    }
  } catch {
    // Standalone assets without a Japanese article are handled by other checks.
  }
}

if (issues.length === 0) {
  console.log("SVG audit passed.");
  process.exit(0);
}
for (const issue of issues) console.error(issue);
console.error(`SVG audit found ${issues.length} issue(s).`);
process.exitCode = 1;
