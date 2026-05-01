---
layout: post.njk
title: "Day 75: Advanced Component Generation"
date: 2026-06-13
tags: [issue, vibe-coding]
---

- **The Pointer:** Generate accessible, theme-aware UI components for course shells that pass WCAG AA contrast checks automatically.
- **The Details:** Custom LMS CSS can accidentally break accessibility. An agent generates CSS that is WCAG-compliant by construction, with contrast ratios embedded as custom properties.
- **Action:**

```bash
gemini "Generate a CSS component for a institutionally-branded callout box. Requirements: WCAG AA contrast (4.5:1 min), dark-mode variant, no fixed pixel sizes. Include the contrast ratio calculation."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)