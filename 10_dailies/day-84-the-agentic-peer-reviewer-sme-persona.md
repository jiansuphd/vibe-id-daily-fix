---
title: "Day 84: The 'Agentic Peer Reviewer' (SME Persona)"
date: 2026-06-22
tags: [issue, vibe-coding]
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

**Backlink:** [Dailies MOC](10_dailies_MOC.md)