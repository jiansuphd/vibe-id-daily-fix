---
tags:
  - wiki
  - vibe-coding
  - phase-6
  - day-77
---

# Day 77: Predictive Accessibility Regression — Wiki

## Core Concept

Predict which course updates are most likely to introduce accessibility regressions before they are made. Accessibility debt is often introduced through 'innocent' content updates: adding a table, embedding a video, updating a PDF. An agent can flag high-risk edit types before the editor touches the file.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Predictive Accessibility Regression |
| **Phase** | Phase 6: Advanced Orchestration & Scaling |
| **Key Skill** | accessibility, prediction, regression |

## Agentic CLI Prompt

```bash
gemini "I am about to make these changes to Module 2: [list]. Predict the accessibility risk for each change. Flag any that historically introduce WCAG violations."
```

## Key Terms

- **Predictive:** The core technique or system described in this entry.
- **Phase 6:** Advanced Orchestration & Scaling — the overarching theme of Days 121–120.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-77-predictive-accessibility-regression.md)
