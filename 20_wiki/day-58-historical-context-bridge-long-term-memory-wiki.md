---
tags:
  - wiki
  - vibe-coding
  - phase-5
  - day-58
---

# Day 58: 'Historical Context' Bridge (Long-Term Memory) — Wiki

## Core Concept

Inject historical project decisions into a current prompt so the agent reasons with institutional memory, not just the current document. AI has no memory. You do. Build a 'context bridge' — a structured summary of past decisions, rationales, and constraints — that you paste into every major prompt to simulate institutional memory.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | 'Historical Context' Bridge |
| **Phase** | Phase 5: Institutional Leadership & AI Governance |
| **Key Skill** | memory, rag, context |
| **AS Accommodation** | Low-keystroke or voice-driven where possible |

## Agentic CLI Prompt

```bash
cat ./00_meta/project_decisions.md | gemini "Given this decision history, what is the most consistent approach to [current design problem]?"
```

## Key Terms

- **Historical Context:** The core technique or system described in this entry.
- **Phase 5:** Institutional Leadership & AI Governance — the overarching theme of Days 101–100.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-58-historical-context-bridge-long-term-memory.md)
