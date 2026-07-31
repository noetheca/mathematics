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

The cross-repository GitHub Actions job and Pages deployment stay skipped while
this repository is private. They activate after the repositories are made
public.

## Content

See the shared
[`content-contract.md`](https://github.com/noetheca/knowledge-engine/blob/main/docs/content-contract.md).
All included knowledge text is a draft until reviewed.

Concept directories are organizational only. Routes and relationships use the
stable ID from `concept.yaml`; moving a directory must not change that ID.

## Licensing

Source code is licensed under MPL 2.0. Knowledge content under `concepts/**` is
licensed under CC BY-SA 4.0. See [`LICENSING.md`](LICENSING.md) for the
path-level scope and [`ATTRIBUTION.md`](ATTRIBUTION.md) for credits.
