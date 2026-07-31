# noetheca mathematics

The first noetheca domain repository. It keeps mathematics knowledge content
separate from the shared renderer and validator.

The initial site is a deliberately small vertical slice:

- language-independent concept IDs and relationships in `concept.yaml`;
- one Markdown file per locale;
- validation through `@noetheca/knowledge-engine`;
- static pages built with Astro;
- a JSON manifest for future organization-wide aggregation.

The current content and URL layout are prototypes.

## Local development

Place this repository next to `knowledge-engine`:

```text
NOETHECA/
├─ knowledge-engine/
└─ mathematics/
```

Then run:

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm dev
```

The development site is served under `/mathematics/`, matching GitHub Pages.

## Content

See the shared
[`content-contract.md`](https://github.com/noetheca/knowledge-engine/blob/main/docs/content-contract.md).
All included knowledge text is a draft until reviewed.

## Licensing

The content license has not yet been approved. No license file is included, and
external contributions are not currently accepted.
