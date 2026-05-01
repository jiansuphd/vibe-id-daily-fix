---
layout: post.njk
title: "Day 84: The 'Agentic Peer Reviewer' (SME Persona)"
date: 2026-06-22
tags:
  - post
  - day-84
  - phase-7
  - peer-review
  - sme
  - persona
---

# Day 84: The 'Agentic Peer Reviewer' (SME Persona)

- **The Pointer:** Instantiate an AI persona trained on a specific SME's published work and have it review your course content as that expert would.
- **The Details:** A well-prompted SME persona catches discipline-specific errors that a generic AI cannot. The persona reads the SME's papers, then audits your course for content accuracy and disciplinary alignment.
- **Action:**

```bash
gemini --system ./personas/sme_dr_chen.md "Review Module 4 content for accuracy and disciplinary alignment with current learning science. Flag any claims that contradict recent literature."
```

---

*Phase 7: Endgame & Sustained Resilience*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
