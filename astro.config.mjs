import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://noetheca.github.io",
  base: "/mathematics",
  output: "static",
  build: {
    format: "directory",
  },
  markdown: {
    syntaxHighlight: false,
  },
});
