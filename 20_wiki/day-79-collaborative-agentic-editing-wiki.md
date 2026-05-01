---
tags:
  - wiki
  - vibe-coding
  - phase-6
  - day-79
---

# Day 79: Collaborative Agentic Editing — Wiki

## Core Concept

Orchestrate two AI agents in a writer-editor loop: one drafts, one edits, and you approve the delta. The bottleneck in AI-assisted writing is quality assurance. A writer-editor loop reduces your role to approval rather than generation — you only intervene at the disagreement points.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Collaborative Agentic Editing |
| **Phase** | Phase 6: Advanced Orchestration & Scaling |
| **Key Skill** | collaboration, editing, multi-agent |
| **AS Accommodation** | Low-keystroke or voice-driven where possible |

## Agentic CLI Prompt

```bash
gemini 'Draft Module 3 introduction for an adult learner audience.' > draft.md
gemini 'Edit this draft for clarity and Bloom\'s alignment. Show tracked changes.' draft.md > edited.md
diff draft.md edited.md
```

## Key Terms

- **Collaborative:** The core technique or system described in this entry.
- **Phase 6:** Advanced Orchestration & Scaling — the overarching theme of Days 121–120.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-79-collaborative-agentic-editing.md)
