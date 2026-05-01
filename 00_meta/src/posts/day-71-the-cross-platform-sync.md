---
layout: post.njk
title: "Day 71: The 'Cross-Platform' Sync (Sync-Logic)"
date: 2026-06-09
tags:
  - post
  - day-71
  - phase-6
  - sync
  - multi-platform
  - automation
---

# Day 71: The 'Cross-Platform' Sync (Sync-Logic)

- **The Pointer:** Detect and resolve content drift between Canvas, Rise, and your Obsidian vault using a three-way sync agent.
- **The Details:** Content lives in three places and diverges. The sync agent reads all three, identifies the canonical version, and outputs a reconciliation plan with explicit source-of-truth rules.
- **Action:**

```bash
gemini "Compare Module 3 content across: [Canvas export], [Rise JSON], [10_dailies entry]. Identify the canonical version and list all deviations. Suggest one source of truth."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
