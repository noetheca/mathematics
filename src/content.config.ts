import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import {
  isAllowedSourceUrl,
  READING_LEVEL_CURRICULUM_PATTERN,
  READING_LEVEL_GRADE_MAX,
  READING_LEVEL_GRADE_MIN,
} from "@noetheca/knowledge-engine";

const sourceUrl = z
  .url()
  .refine(isAllowedSourceUrl, "Source URL must use http or https.")
  .refine(
    (url) =>
      !["example.com", "example.org", "example.net"].includes(
        new URL(url).hostname,
      ),
    "Source URL must not be a placeholder domain.",
  );
const source = z.object({
  title: z.string().min(1),
  url: sourceUrl,
  note: z.string().min(10),
});
const readingLevel = z.object({
  curriculum: z.string().regex(
    READING_LEVEL_CURRICULUM_PATTERN,
    "Curriculum must be a lowercase ID.",
  ),
  grade: z
    .number()
    .int()
    .min(READING_LEVEL_GRADE_MIN)
    .max(READING_LEVEL_GRADE_MAX),
});

const concepts = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./concepts",
    deferRender: true,
  }),
  schema: z.object({
    locale: z.string().min(2),
    title: z.string().min(1),
    summary: z.string().min(1),
    sources: z.array(source).min(1),
    status: z.enum(["draft", "review", "published"]),
    readingLevel: readingLevel.optional(),
  }),
});

export const collections = { concepts };
