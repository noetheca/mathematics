import { defineConfig, passthroughImageService } from "astro/config";
import { createArticleMarkdownProcessor } from "@noetheca/knowledge-engine";
import { fileURLToPath } from "node:url";

const workspaceRoot = fileURLToPath(new URL("..", import.meta.url));

export default defineConfig({
  site: "https://noetheca.github.io",
  base: "/mathematics",
  output: "static",
  build: {
    format: "directory",
  },
  image: {
    service: passthroughImageService(),
  },
  markdown: {
    processor: createArticleMarkdownProcessor(),
    syntaxHighlight: false,
  },
  vite: {
    server: {
      fs: {
        allow: [workspaceRoot],
      },
    },
  },
});
