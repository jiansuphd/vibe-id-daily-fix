---
title: "Day 88: Institutional SOP Versioning"
date: 2026-06-26
tags: [issue, vibe-coding]
---
# Day 88: Institutional SOP Versioning

- **The Pointer:** Apply software versioning principles (SemVer) to institutional SOPs — making policy changes traceable, diff-able, and rollback-able.
- **The Details:** SOPs are living documents that change without documentation. Applying SemVer (MAJOR.MINOR.PATCH) to each SOP and storing them in git makes every policy change an auditable git commit.
- **Action:**

```bash
git log --oneline -- SOPs/ | head -10
git diff v1.2.0..v1.3.0 -- SOPs/course_review_sop.md
```

---

*Phase 7: Endgame & Sustained Resilience*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)