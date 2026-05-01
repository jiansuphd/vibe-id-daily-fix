# Schema for Knowledge Compiler Wiki

This repository is maintained using the "knowledge compiler" concept. The Gemini CLI acts as the maintainer of a persistent, compounding wiki that documents the contents of this repository.

## 🏁 Project Horizon
- **Limit**: This project is architected for a **100-day development cycle**.
- **End Date**: Operations will conclude on **Day 100**.

## ⚙️ Automated Workflows
1. **Daily Build**: Automated midnight UTC deployment to GitHub Pages.
2. **Periodic Linting**: Integrated link checking and vault integrity validation during every build.
3. **Cyborg Aggregation**: Automated daily trend scraping and report generation (11:30 PM UTC).

## Architecture

1. **_meta**: Repository configuration, schemas, and ignored progress/logs.
2. **10_Projects (Raw Sources)**: Technical assets, code snippets, and interactive components (e.g., `src/`, `skills/`). These are the primary sources of truth.
3. **_wiki**: Contains LLM-generated markdown files that summarize, index, and synthesize the raw sources.
4. **MOCs (Maps of Content)**: Central index files like `root_MOC.md`, `10_Projects_MOC.md`, and `_wiki_MOC.md` (located in `_meta/`) that provide an interconnected overview.

## Core Files

- `_meta/root_MOC.md`: The central hub connecting all top-level domains.
- `_meta/_wiki_MOC.md`: A catalog of all pages in the wiki, organized by category. Each entry includes a link and a one-line summary.
- `_meta/log.md`: An append-only chronological log of all actions taken by the LLM (ingests, queries, lint passes). Entries start with `## [YYYY-MM-DD] action | Description`.

## Operations

When instructed to **Ingest** a new source or update an existing one:
1. Read the source files.
2. Create or update a corresponding markdown page in the `_wiki/` directory.
3. Add/update the link and summary in the appropriate MOCs (e.g., `_wiki/_wiki_MOC.md`).
4. Append a log entry to `_meta/log.md` detailing the action.

When instructed to **Query**:
1. Search and read relevant wiki pages or MOCs first.
2. Synthesize an answer.
3. If the answer generates new, valuable synthesis, file it back into the wiki as a new page, update MOCs and `_meta/log.md`.

When instructed to **Lint**:
1. Check for contradictions, stale claims, orphan pages, or missing cross-references.
2. Ensure MOCs accurately reflect the contents of their directories.
3. Verify that `_meta/log.md` is properly formatted.
---
**Backlinks:** [Root MOC](../root_MOC.md)

