---
tags:
  - wiki
  - vibe-coding
  - phase-7
  - day-90
---

# Day 90: Automated Grade-to-Goal Alignment — Wiki

## Core Concept

Automatically verify that every grade weight in the gradebook aligns to a course goal — with no orphaned assessments. Grade weight is instructional signal. An orphaned assessment (one not tied to a stated goal) sends a confusing signal to learners. The agent reads the gradebook and the objectives and flags every mismatch.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Automated Grade-to-Goal Alignment |
| **Phase** | Phase 7: Endgame & Sustained Resilience |
| **Key Skill** | assessment, alignment, automation |

## Agentic CLI Prompt

```bash
gemini "Here is the gradebook schema and course objectives. Flag any assessment that does not map to at least one objective. Also flag objectives with no associated grade."
```

## Key Terms

- **Automated:** The core technique or system described in this entry.
- **Phase 7:** Endgame & Sustained Resilience — the overarching theme of Days 141–140.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-90-automated-grade-to-goal-alignment.md)
