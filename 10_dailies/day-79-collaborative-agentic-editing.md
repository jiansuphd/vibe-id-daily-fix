---
title: "Day 79: Collaborative Agentic Editing"
date: 2026-06-17
tags: [issue, vibe-coding]
---
# Day 79: Collaborative Agentic Editing

- **The Pointer:** Orchestrate two AI agents in a writer-editor loop: one drafts, one edits, and you approve the delta.
- **The Details:** The bottleneck in AI-assisted writing is quality assurance. A writer-editor loop reduces your role to approval rather than generation - you only intervene at the disagreement points.
- **Action:**

```bash
gemini 'Draft Module 3 introduction for an adult learner audience.' > draft.md
gemini 'Edit this draft for clarity and Bloom\'s alignment. Show tracked changes.' draft.md > edited.md
diff draft.md edited.md
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)