---
title: "Day 62: Multi-Model Adversarial Auditing"
date: 2026-05-31
tags: [issue, vibe-coding]
---
# Day 62: Multi-Model Adversarial Auditing

- **The Pointer:** Use two different AI models to audit the same course design and synthesize their disagreements into an improvement plan.
- **The Details:** Model A praises; Model B critiques. Where they disagree is where the real design risk lives. The audit extracts that disagreement as a structured delta and turns it into a revision checklist.
- **Action:**

```bash
gemini 'Evaluate this course design. Focus on pedagogical strengths.' > review_a.md
claude 'Evaluate the same course design. Focus only on what will fail.' > review_b.md
gemini 'Synthesize these two reviews into a prioritized revision plan.' review_a.md review_b.md
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)