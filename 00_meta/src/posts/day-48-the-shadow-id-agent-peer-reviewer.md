---
layout: post.njk
title: "Day 48: The 'Shadow ID' Agent (Peer Reviewer)"
date: 2026-05-17
tags:
  - post
  - day-48
  - phase-5
  - peer-review
  - quality-assurance
  - id
---

# Day 48: The 'Shadow ID' Agent (Peer Reviewer)

- **The Pointer:** Create a 'shadow' AI agent that acts as a second instructional designer — reviewing your work from a different pedagogical stance.
- **The Details:** Every ID decision has trade-offs. The shadow agent is prompted to 'disagree professionally' — it finds the course design choice you didn't consider and articulates the pedagogical risk.
- **Action:**

```bash
gemini --system ./personas/shadow_id.md "Here is my course design rationale. Find three decisions where I traded learner-centeredness for convenience. Be direct."
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
