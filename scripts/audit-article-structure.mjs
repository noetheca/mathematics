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

function plainDirectiveText(value) {
  return value.replace(
    /:ruby\[([^\]]+)\]\{[^}\r\n]+\}/gu,
    (_match, label) => label,
  );
}

function issue(issues, file, line, message) {
  issues.push({ file, line, message });
}

async function auditFile(path, root) {
  const source = await readFile(path, "utf8");
  const relativePath = relative(root, path).replaceAll("\\", "/");
  const frontmatter = /^---\r?\n[\s\S]*?\r?\n---(?:\r?\n|$)/u.exec(source);
  const issues = [];
  if (!frontmatter) {
    issue(issues, relativePath, 1, "frontmatterがありません。");
    return issues;
  }
  const offset = frontmatter[0].split(/\r?\n/u).length - 1;
  const body = source.slice(frontmatter[0].length);
  const plain = plainDirectiveText(body);
  const lines = plain.split(/\r?\n/u);
  const headings = lines
    .map((line, index) => ({ line, index }))
    .filter(({ line }) => /^#{1,3}\s+/u.test(line));

  if (headings.some(({ line }) => /^#\s+/u.test(line))) {
    issue(issues, relativePath, offset + 1, "本文にH1があります。H1はページ側で表示します。");
  }
  const firstH2 = headings.find(({ line }) => /^##\s+/u.test(line));
  if (!firstH2 || !/^##\s+説明\s*$/u.test(firstH2.line)) {
    issue(
      issues,
      relativePath,
      offset + (firstH2?.index ?? 0) + 1,
      "最初のH2は「説明」にします。",
    );
  }
  if (!headings.some(({ line }) => /^##\s+例題\s*$/u.test(line))) {
    issue(issues, relativePath, offset + 1, "「## 例題」がありません。");
  }

  const examples = headings.filter(({ line }) => /^###\s+例題(?:\s|$)/u.test(line));
  if (examples.length < 1 || examples.length > 2) {
    issue(
      issues,
      relativePath,
      offset + 1,
      `例題は原則1〜2題です（現在${examples.length}題）。`,
    );
  }
  for (const [index, example] of examples.entries()) {
    const nextHeading = headings.find(
      ({ index: headingIndex }) => headingIndex > example.index,
    );
    const block = lines
      .slice(example.index + 1, nextHeading?.index ?? lines.length)
      .join("\n");
    const lineNumber = offset + example.index + 1;
    if (!block.includes("問題")) {
      issue(issues, relativePath, lineNumber, `例題${index + 1}に「問題」がありません。`);
    }
    if (!block.includes("考え方")) {
      issue(issues, relativePath, lineNumber, `例題${index + 1}に「考え方」がありません。`);
    }
    if (!/:::details\{[^\r\n]*summary="[^"]*解答/u.test(block)) {
      issue(
        issues,
        relativePath,
        lineNumber,
        `例題${index + 1}の解答がdetailsにありません。`,
      );
    }
  }

  const exerciseHeading = headings.find(({ line }) => /^##\s+練習問題\s*$/u.test(line));
  if (exerciseHeading) {
    const exerciseBlock = lines.slice(exerciseHeading.index + 1).join("\n");
    if (!/:::details\{[^\r\n]*summary="[^"]*解答/u.test(exerciseBlock)) {
      issue(
        issues,
        relativePath,
        offset + exerciseHeading.index + 1,
        "練習問題の解答がdetailsにありません。",
      );
    }
  }
  return issues;
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
  console.log("Article structure audit passed.");
  process.exit(0);
}
for (const finding of issues) {
  console.error(`${finding.file}:${finding.line} — ${finding.message}`);
}
console.error(`Article structure audit found ${issues.length} issue(s).`);
process.exitCode = 1;
