---
layout: post.njk
title: "Day 53: The 'Cross-Platform Mirroring' (Canvas-to-Rise)"
date: 2026-05-22
tags:
  - post
  - day-53
  - phase-5
  - canvas
  - rise
  - authoring
---

# Day 53: The 'Cross-Platform Mirroring' (Canvas-to-Rise)

- **The Pointer:** Maintain structural parity between a Canvas course shell and a Rise 360 course — using an agent to detect drift.
- **The Details:** When two systems hold the same content, they drift. The agent compares module titles, objective lists, and media references, flagging every divergence as a 'mirror break'.
- **Action:**

```bash
gemini "Here is Canvas module list and Rise module list. Find every structural discrepancy. Output a diff table: Canvas | Rise | Action."
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
