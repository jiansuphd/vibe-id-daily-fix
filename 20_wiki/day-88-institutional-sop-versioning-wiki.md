---
tags:
  - wiki
  - vibe-coding
  - phase-7
  - day-88
---

# Day 88: Institutional SOP Versioning - Wiki

## Core Concept

Apply software versioning principles (SemVer) to institutional SOPs - making policy changes traceable, diff-able, and rollback-able. SOPs are living documents that change without documentation. Applying SemVer (MAJOR.MINOR.PATCH) to each SOP and storing them in git makes every policy change an auditable git commit.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Institutional SOP Versioning |
| **Phase** | Phase 7: Endgame & Sustained Resilience |
| **Key Skill** | sop, versioning, governance |

## Agentic CLI Prompt

```bash
git log --oneline -- SOPs/ | head -10
git diff v1.2.0..v1.3.0 -- SOPs/course_review_sop.md
```

## Key Terms

- **Institutional:** The core technique or system described in this entry.
- **Phase 7:** Endgame & Sustained Resilience - the overarching theme of Days 141–140.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-88-institutional-sop-versioning.md)
