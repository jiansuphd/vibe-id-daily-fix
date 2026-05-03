---
tags:
  - wiki
  - vibe-coding
  - phase-6
  - day-63
---

# Day 63: The 'SME Voice' Fine-Tuning — Wiki

## Core Concept

Calibrate an AI agent to write in the SME's voice by providing writing samples before content generation. Generic AI prose is recognizable. By injecting 3-5 writing samples from the SME, the agent mirrors their terminology, sentence rhythm, and pedagogical stance — making AI-assisted content feel authentic.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | The 'SME Voice' Fine-Tuning |
| **Phase** | Phase 6: Advanced Orchestration & Scaling |
| **Key Skill** | sme, voice, personalization |

## Agentic CLI Prompt

```bash
cat ./sme_samples/*.md | gemini --system "You write exactly like the examples provided. Never use passive voice. Always use first person." "Draft Module 2 introduction."
```

## Key Terms

- **SME Voice:** The core technique or system described in this entry.
- **Phase 6:** Advanced Orchestration & Scaling — the overarching theme of Days 121–120.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-63-the-sme-voice-fine-tuning.md)
