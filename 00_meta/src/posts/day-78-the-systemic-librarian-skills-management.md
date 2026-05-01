---
layout: post.njk
title: "Day 78: The 'Systemic Librarian' (Skills Management)"
date: 2026-06-16
tags:
  - post
  - day-78
  - phase-6
  - skills
  - knowledge-management
  - vault
---

# Day 78: The 'Systemic Librarian' (Skills Management)

- **The Pointer:** Audit and prune the 00_meta/skills/ directory — retiring stale skills, merging duplicates, and surfacing underused gems.
- **The Details:** Skills drift. What was useful in Month 1 may be superseded by Month 6. The librarian agent reads all skill files, checks their last-used date, and recommends a retention or archive decision.
- **Action:**

```bash
gemini "Read all files in 00_meta/skills/. For each skill: (1) identify if it overlaps with another, (2) estimate last relevance based on daily references, (3) recommend keep/merge/archive."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
