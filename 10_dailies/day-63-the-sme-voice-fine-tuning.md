---
title: "Day 63: The 'SME Voice' Fine-Tuning"
date: 2026-06-01
tags: [issue, vibe-coding]
---
# Day 63: The 'SME Voice' Fine-Tuning

- **The Pointer:** Calibrate an AI agent to write in the SME's voice by providing writing samples before content generation.
- **The Details:** Generic AI prose is recognizable. By injecting 3-5 writing samples from the SME, the agent mirrors their terminology, sentence rhythm, and pedagogical stance — making AI-assisted content feel authentic.
- **Action:**

```bash
cat ./sme_samples/*.md | gemini --system "You write exactly like the examples provided. Never use passive voice. Always use first person." "Draft Module 2 introduction."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)