---
layout: post.njk
title: "Day 67: Vision-to-Vibe (LMS Visual Audit)"
date: 2026-06-05
tags:
  - post
  - day-67
  - phase-6
  - vision
  - lms
  - visual-audit
---

# Day 67: Vision-to-Vibe (LMS Visual Audit)

- **The Pointer:** Use a vision-capable AI to audit an LMS course shell screenshot for visual hierarchy, color contrast, and brand compliance.
- **The Details:** Post a screenshot of the Canvas course homepage and let the agent assess it as a visual designer would — flagging broken hierarchy, low-contrast text, and inconsistent iconography.
- **Action:**

```bash
gemini --vision canvas_screenshot.png "Audit this LMS screen for: (1) WCAG AA color contrast, (2) visual hierarchy clarity, (3) UTA brand compliance. Score each 1-5."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
