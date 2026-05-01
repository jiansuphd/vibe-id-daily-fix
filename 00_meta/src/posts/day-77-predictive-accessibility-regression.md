---
title: "day 77 predictive accessibility regression"
layout: post.njk
---

# Day 77: Predictive Accessibility Regression

- **The Pointer:** Predict which course updates are most likely to introduce accessibility regressions before they are made.
- **The Details:** Accessibility debt is often introduced through 'innocent' content updates: adding a table, embedding a video, updating a PDF. An agent can flag high-risk edit types before the editor touches the file.
- **Action:**

```bash
gemini "I am about to make these changes to Module 2: [list]. Predict the accessibility risk for each change. Flag any that historically introduce WCAG violations."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)