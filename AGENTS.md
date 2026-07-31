# AGENTS.md

Read the organization project brief before implementation:
`https://github.com/noetheca/.github/blob/main/docs/PROJECT_BRIEF.md`.

## Repository responsibilities

- Store mathematics content, assets, and language-independent relationships.
- Keep presentation, parsing, validation, and shared UI in `knowledge-engine`.
- Treat all AI-assisted content as an unreviewed draft.

## Constraints

- Never derive a concept ID from its title, filename, locale, or URL.
- Use one Markdown body per locale.
- Keep prerequisites and related relationships in `concept.yaml`.
- Do not use MDX, raw HTML, or arbitrary scripts in content.
- Record sources and verify facts before changing status to `published`.
- Do not finalize schema, URL, fallback, or license choices without explicit
  approval.
- Run `pnpm check` before handing off a change.
