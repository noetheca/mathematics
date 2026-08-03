import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

const VISUAL_OPTIONAL = new Set([
  "math/foundations/axiomatic-method",
  "math/foundations/mathematical-induction",
  "math/foundations/peano-axioms",
  "math/foundations/predicates-and-quantifiers",
  "math/foundations/proof-and-counterexample",
  "math/foundations/propositions-and-logical-connectives",
  "math/foundations/sets-functions-and-relations",
]);

// These are advisory design expectations, not content-schema declarations.
// A proposed mode remains a warning until the engine contract and renderer are
// implemented and accepted. Once accepted, move the corresponding check into
// normal validation and update this table to the adopted spelling.
const SEMANTIC_EXPECTATIONS = new Map();

async function findConceptFiles(directory) {
  const found = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.name.startsWith(".") || entry.name === "node_modules") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) found.push(...(await findConceptFiles(path)));
    else if (entry.name === "concept.yaml") found.push(path);
  }
  return found;
}

function conceptId(source) {
  return /^id:\s*(\S+)\s*$/mu.exec(source)?.[1];
}

function parseInteractive(source) {
  const match = /^::interactive\[[^\r\n]+\]\{([^\r\n}]*)\}\s*$/mu.exec(source);
  if (!match) return undefined;
  const attributes = new Map();
  for (const attribute of match[1].matchAll(/([A-Za-z][A-Za-z0-9-]*)="([^"]*)"/gu)) {
    attributes.set(attribute[1], attribute[2]);
  }
  return attributes;
}

const projectRoot = resolve(import.meta.dirname, "..");
const issues = [];
const warnings = [];
let checked = 0;
let required = 0;
let covered = 0;

for (const metadataPath of await findConceptFiles(join(projectRoot, "concepts"))) {
  const metadata = await readFile(metadataPath, "utf8");
  const id = conceptId(metadata);
  if (!id) continue;

  const articlePath = join(dirname(metadataPath), "ja.md");
  let article;
  try {
    article = await readFile(articlePath, "utf8");
  } catch {
    continue;
  }

  checked += 1;
  const interactives = article.match(/^::interactive\[[^\r\n]+\]\{[^\r\n]+\}\s*$/gmu) ?? [];
  const label = relative(projectRoot, articlePath).replaceAll("\\", "/");

  if (interactives.length > 1) {
    issues.push(`${label} — 主図解は原則1件です（現在${interactives.length}件）。`);
  }
  const expectation = SEMANTIC_EXPECTATIONS.get(id);
  const attributes = interactives.length === 1 ? parseInteractive(interactives[0]) : undefined;
  if (expectation && !attributes) {
    warnings.push(
      `${label} — 設計警告（非致命）: 主図解なし、提案 ${expectation.kind}/${expectation.proposedModes.join("|")}。${expectation.reason}。`,
    );
  } else if (expectation && attributes) {
    const actualKind = attributes.get("kind");
    const actualMode = attributes.get("mode");
    const missingAttributes = (expectation.proposedAttributes ?? [])
      .filter((name) => !attributes.has(name));
    if (
      actualKind !== expectation.kind ||
      !expectation.proposedModes.includes(actualMode) ||
      missingAttributes.length > 0
    ) {
      const expected = `${expectation.kind}/${expectation.proposedModes.join("|")}`;
      const missing = missingAttributes.length > 0
        ? `、提案属性 ${missingAttributes.join(", ")} が未指定`
        : "";
      warnings.push(
        `${label} — 設計警告（非致命）: 現在 ${actualKind ?? "?"}/${actualMode ?? "?"}、提案 ${expected}${missing}。${expectation.reason}。`,
      );
    }
  }
  if (VISUAL_OPTIONAL.has(id)) continue;

  required += 1;
  if (interactives.length === 0) {
    issues.push(`${label} — 具体物または関係を操作できるinteractive図解がありません。`);
  } else {
    covered += 1;
  }
}

for (const warning of warnings) console.warn(warning);

if (issues.length === 0) {
  console.log(
    `Interactive audit passed: ${covered}/${required} required article(s), ${checked} total article(s), ${warnings.length} advisory warning(s).`,
  );
  process.exit(0);
}
for (const finding of issues) console.error(finding);
console.error(
  `Interactive audit found ${issues.length} issue(s); coverage ${covered}/${required}.`,
);
process.exitCode = 1;
