import { readFile, readdir } from "node:fs/promises";
import { join, relative, resolve } from "node:path";

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

function mask(value) {
  return value.replace(/[^\r\n]/gu, " ");
}

function maskMatches(value, pattern) {
  return value.replace(pattern, (match) => mask(match));
}

async function auditFile(path, root) {
  const source = await readFile(path, "utf8");
  const frontmatter = /^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/u.exec(source);
  if (!frontmatter) return [];
  const offset = frontmatter[0].split(/\r?\n/u).length - 1;
  let body = source.slice(frontmatter[0].length);
  body = maskMatches(body, /```[\s\S]*?```/gu);
  body = maskMatches(body, /`[^`\r\n]*`/gu);
  body = maskMatches(body, /\$\$[\s\S]*?\$\$/gu);
  body = maskMatches(body, /\$[^$\r\n]+\$/gu);
  body = maskMatches(body, /!\[[^\]]*\]\([^\r\n)]*\)/gu);
  body = body.replace(/\]\((?:https?:\/\/|\.\/|\.\.\/)[^\r\n)]*\)/gu, "]");
  // Ruby attributes contain `=` as directive syntax. Keep only the visible
  // label so that the notation audit does not mistake metadata for prose.
  body = body.replace(
    /:ruby\[([^\]]+)\]\{[^}\r\n]+\}/gu,
    (_match, label) => label,
  );

  const issues = [];
  const relativePath = relative(root, path).replaceAll("\\", "/");
  for (const [index, originalLine] of body.split(/\r?\n/u).entries()) {
    if (/^\s*:{2,3}\w/u.test(originalLine)) continue;
    let line = originalLine;
    line = line.replace(/^\s*\d+[.)]\s+/u, "");
    line = line.replace(
      /^(#{2,3}\s+(?:(?!\d).)*例題(?:[^\d\r\n]*))\d+(?=\D|$)/u,
      "$1",
    );
    const hasRawNumber = /[0-9０-９]/u.test(line);
    const hasRawMathSymbol = /[×÷＝=<>≤≥°²³]/u.test(line);
    if (!hasRawNumber && !hasRawMathSymbol) continue;
    issues.push({
      file: relativePath,
      line: offset + index + 1,
      text: line.trim().replace(/\s+/gu, " ").slice(0, 140),
    });
  }
  return issues;
}

const projectRoot = resolve(import.meta.dirname, "..");
const issues = (
  await Promise.all(
    (await findJapaneseArticles(join(projectRoot, "concepts"))).map((path) =>
      auditFile(path, projectRoot),
    ),
  )
).flat();

if (issues.length === 0) {
  console.log("Math notation audit passed.");
  process.exit(0);
}
for (const finding of issues) {
  console.error(`${finding.file}:${finding.line} — ${finding.text}`);
}
console.error(`Math notation audit found ${issues.length} potential omission(s).`);
process.exitCode = 1;
