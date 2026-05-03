---
tags:
  - wiki
  - vibe-coding
  - phase-5
  - day-47
---

# Day 47: The 'Prompt Versioning' Protocol (Instructional Reliability) - Wiki

## Core Concept

Treat prompts like code: version them, test them, and document regressions. A prompt that works today may drift when a model is updated. Version your system prompts in git, run them against a fixed test case, and log output changes as 'prompt regressions'.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | The 'Prompt Versioning' Protocol |
| **Phase** | Phase 5: Institutional Leadership & AI Governance |
| **Key Skill** | prompt-engineering, versioning, reliability |

## Agentic CLI Prompt

```bash
git log --oneline -- prompts/ | head -20
git diff HEAD~1 HEAD -- prompts/system_grader.md
```

## Key Terms

- **Prompt Versioning:** The core technique or system described in this entry.
- **Phase 5:** Institutional Leadership & AI Governance - the overarching theme of Days 101–100.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-47-the-prompt-versioning-protocol.md)
