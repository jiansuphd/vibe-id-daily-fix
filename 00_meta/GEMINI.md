# Schema for Knowledge Compiler Wiki

This repository is maintained using the "knowledge compiler" concept. The Gemini CLI acts as the maintainer of a persistent, compounding wiki that documents the contents of this repository.

## Architecture

1. **00_Meta**: Repository configuration, schemas, and ignored progress/logs.
2. **10_Projects (Raw Sources)**: Technical assets, code snippets, and interactive components (e.g., `src/`, `skills/`). These are the primary sources of truth.
3. **20_Wiki**: Contains LLM-generated markdown files that summarize, index, and synthesize the raw sources.
4. **MOCs (Maps of Content)**: Central index files like `00_Root_MOC.md`, `10_Projects_MOC.md`, and `20_Wiki_MOC.md` (located in `00_Meta/`) that provide an interconnected overview.

## Core Files

- `00_Meta/00_Root_MOC.md`: The central hub connecting all top-level domains.
- `00_Meta/20_Wiki_MOC.md`: A catalog of all pages in the wiki, organized by category. Each entry includes a link and a one-line summary.
- `00_Meta/log.md`: An append-only chronological log of all actions taken by the LLM (ingests, queries, lint passes). Entries start with `## [YYYY-MM-DD] action | Description`.

## Operations

When instructed to **Ingest** a new source or update an existing one:
1. Read the source files.
2. Create or update a corresponding markdown page in the `20_Wiki/` directory.
3. Add/update the link and summary in the appropriate MOCs (e.g., `20_Wiki/20_Wiki_MOC.md`).
4. Append a log entry to `00_Meta/log.md` detailing the action.

When instructed to **Query**:
1. Search and read relevant wiki pages or MOCs first.
2. Synthesize an answer.
3. If the answer generates new, valuable synthesis, file it back into the wiki as a new page, update MOCs and `00_Meta/log.md`.

When instructed to **Lint**:
1. Check for contradictions, stale claims, orphan pages, or missing cross-references.
2. Ensure MOCs accurately reflect the contents of their directories.
3. Verify that `00_Meta/log.md` is properly formatted.
---
**Backlinks:** [Root MOC](../root_MOC.md)

