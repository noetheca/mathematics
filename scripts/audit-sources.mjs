import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

const LOCATOR_PATTERN =
  /(?:\bp{1,2}\.\s*\d|§|第[^。]*(?:章|節|学年)|Definitions?|Postulates?|Common Notions?|Introduction|Part\s|Chapter\s|Proposition\s|Table\s|本文|全体|原著|規則)/iu;

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

function unquote(value) {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

async function auditFile(path, root) {
  const source = await readFile(path, "utf8");
  const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/u.exec(source);
  if (!frontmatter) return [];
  const lines = frontmatter[1].split(/\r?\n/u);
  const sourceStart = lines.findIndex((line) => /^sources:\s*$/u.test(line));
  const sourceEnd = lines.findIndex(
    (line, index) => index > sourceStart && /^status:\s*/u.test(line),
  );
  const relativePath = relative(root, path).replaceAll("\\", "/");
  if (sourceStart < 0 || sourceEnd < 0) {
    return [{ file: relativePath, line: 1, message: "sources blockがありません。" }];
  }

  const blocks = [];
  let current;
  for (let index = sourceStart + 1; index < sourceEnd; index += 1) {
    const line = lines[index];
    const title = /^\s*-\s+title:\s*(.+)$/u.exec(line);
    if (title) {
      current = { title: unquote(title[1]), line: index + 2 };
      blocks.push(current);
      continue;
    }
    const field = /^\s+(url|note):\s*(.+)$/u.exec(line);
    if (field && current) current[field[1]] = unquote(field[2]);
  }

  const issues = [];
  if (blocks.length === 0) {
    issues.push({ file: relativePath, line: sourceStart + 2, message: "出典が0件です。" });
  }
  for (const block of blocks) {
    if (!block.url || !/^https?:\/\//u.test(block.url)) {
      issues.push({ file: relativePath, line: block.line, message: `${block.title}: HTTP(S) URLがありません。` });
    }
    if (block.url && /\bexample\.(?:com|org|net)\b/iu.test(block.url)) {
      issues.push({ file: relativePath, line: block.line, message: `${block.title}: 例示用URLが残っています。` });
    }
    if (!block.note || !LOCATOR_PATTERN.test(block.note)) {
      issues.push({
        file: relativePath,
        line: block.line,
        message: `${block.title}: noteに節・頁・表・本文などの参照位置がありません。`,
      });
    }
  }
  return issues;
}

const projectRoot = resolve(import.meta.dirname, "..");
const sourceRoots = [
  join(projectRoot, "concepts"),
  join(projectRoot, "docs", "samples", "format-validation"),
];
const issues = (
  await Promise.all(
    (
      await Promise.all(sourceRoots.map((root) => findJapaneseArticles(root)))
    )
      .flat()
      .map((path) => auditFile(path, projectRoot)),
  )
).flat();

if (issues.length === 0) {
  console.log("Source audit passed.");
  process.exit(0);
}
for (const finding of issues) {
  console.error(`${finding.file}:${finding.line} — ${finding.message}`);
}
console.error(`Source audit found ${issues.length} issue(s).`);
process.exitCode = 1;
