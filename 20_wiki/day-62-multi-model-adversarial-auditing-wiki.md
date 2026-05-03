---
tags:
  - wiki
  - vibe-coding
  - phase-6
  - day-62
---

# Day 62: Multi-Model Adversarial Auditing — Wiki

## Core Concept

Use two different AI models to audit the same course design and synthesize their disagreements into an improvement plan. Model A praises; Model B critiques. Where they disagree is where the real design risk lives. The audit extracts that disagreement as a structured delta and turns it into a revision checklist.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Multi-Model Adversarial Auditing |
| **Phase** | Phase 6: Advanced Orchestration & Scaling |
| **Key Skill** | multi-model, adversarial, quality |

## Agentic CLI Prompt

```bash
gemini 'Evaluate this course design. Focus on pedagogical strengths.' > review_a.md
claude 'Evaluate the same course design. Focus only on what will fail.' > review_b.md
gemini 'Synthesize these two reviews into a prioritized revision plan.' review_a.md review_b.md
```

## Key Terms

- **Multi-Model:** The core technique or system described in this entry.
- **Phase 6:** Advanced Orchestration & Scaling — the overarching theme of Days 121–120.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-62-multi-model-adversarial-auditing.md)
