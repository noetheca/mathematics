import { readFile, readdir } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";

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

function scalar(source, key) {
  return new RegExp(`^${key}:\\s*(\\S+)`, "mu").exec(source)?.[1];
}

function list(source, key, nextKey) {
  const match = new RegExp(
    `^${key}:\\s*(?:\\[\\])?\\s*\\r?\\n?(?<body>.*?)(?=^${nextKey}:|(?![\\s\\S]))`,
    "msu",
  ).exec(source);
  if (!match) return [];
  return [...match.groups.body.matchAll(/^\s*-\s*(\S+)\s*$/gmu)].map(
    (item) => item[1],
  );
}

function readingGrade(source) {
  const frontmatter = /^---\r?\n(?<body>[\s\S]*?)\r?\n---/u.exec(source);
  if (!frontmatter) return undefined;
  const match = /^\s*grade:\s*(\d+)\s*$/mu.exec(frontmatter.groups.body);
  return match ? Number(match[1]) : undefined;
}

function reachable(graph, start, target, visited = new Set()) {
  if (start === target) return true;
  if (visited.has(start)) return false;
  visited.add(start);
  return (graph.get(start)?.prerequisites ?? []).some((next) =>
    reachable(graph, next, target, visited),
  );
}

const projectRoot = resolve(import.meta.dirname, "..");
const graph = new Map();
for (const path of await findConceptFiles(join(projectRoot, "concepts"))) {
  const source = await readFile(path, "utf8");
  const id = scalar(source, "id");
  if (!id) continue;
  const articlePath = join(dirname(path), "ja.md");
  let grade;
  try {
    grade = readingGrade(await readFile(articlePath, "utf8"));
  } catch {
    // Translation completeness is checked by the content validator.
  }
  graph.set(id, {
    id,
    path: relative(projectRoot, path).replaceAll("\\", "/"),
    grade,
    prerequisites: list(source, "prerequisites", "related"),
    related: list(source, "related", "__end_of_file__"),
  });
}

const issues = [];
for (const concept of graph.values()) {
  const prerequisiteSet = new Set(concept.prerequisites);
  const relatedSet = new Set(concept.related);
  if (prerequisiteSet.size !== concept.prerequisites.length) {
    issues.push(`${concept.path} — duplicate prerequisite`);
  }
  if (relatedSet.size !== concept.related.length) {
    issues.push(`${concept.path} — duplicate related concept`);
  }
  for (const id of prerequisiteSet.intersection(relatedSet)) {
    issues.push(`${concept.path} — ${id} is both prerequisite and related`);
  }
  for (const prerequisite of concept.prerequisites) {
    const dependency = graph.get(prerequisite);
    if (!dependency) {
      issues.push(`${concept.path} — missing prerequisite ${prerequisite}`);
      continue;
    }
    if (
      concept.grade !== undefined &&
      dependency.grade !== undefined &&
      dependency.grade > concept.grade
    ) {
      issues.push(
        `${concept.path} — grade ${concept.grade} depends on later grade ${dependency.grade}: ${prerequisite}`,
      );
    }
    const alternatives = concept.prerequisites.filter(
      (candidate) => candidate !== prerequisite,
    );
    if (
      alternatives.some((candidate) =>
        reachable(graph, candidate, prerequisite, new Set()),
      )
    ) {
      issues.push(
        `${concept.path} — transitive prerequisite should be omitted: ${prerequisite}`,
      );
    }
  }
}

if (issues.length === 0) {
  console.log(`Prerequisite audit passed for ${graph.size} concept(s).`);
  process.exit(0);
}
for (const issue of issues) console.error(issue);
console.error(`Prerequisite audit found ${issues.length} issue(s).`);
process.exitCode = 1;
