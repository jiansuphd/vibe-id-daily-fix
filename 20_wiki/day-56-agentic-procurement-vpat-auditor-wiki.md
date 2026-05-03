---
tags:
  - wiki
  - vibe-coding
  - phase-5
  - day-56
---

# Day 56: 'Agentic Procurement' (VPAT Auditor) - Wiki

## Core Concept

Use an agent to parse a vendor VPAT and extract every 'Partially Supports' or 'Does Not Support' row - turning a legal document into a risk matrix. VPATs are dense. Procurement teams skip them. An agent that reads the VPAT and outputs a structured risk table with recommended mitigations makes accessibility a procurement gate, not an afterthought.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | 'Agentic Procurement' |
| **Phase** | Phase 5: Institutional Leadership & AI Governance |
| **Key Skill** | vpat, procurement, accessibility |

## Agentic CLI Prompt

```bash
gemini "Parse this VPAT. Extract all rows where conformance is not 'Supports'. For each, output: criterion | status | risk | suggested accommodation."
```

## Key Terms

- **Agentic Procurement:** The core technique or system described in this entry.
- **Phase 5:** Institutional Leadership & AI Governance - the overarching theme of Days 101–100.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-56-agentic-procurement-vpat-auditor.md)
