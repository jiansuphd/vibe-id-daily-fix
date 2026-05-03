---
tags:
  - wiki
  - vibe-coding
  - phase-6
  - day-71
---

# Day 71: The 'Cross-Platform' Sync (Sync-Logic) - Wiki

## Core Concept

Detect and resolve content drift between Canvas, Rise, and your Obsidian vault using a three-way sync agent. Content lives in three places and diverges. The sync agent reads all three, identifies the canonical version, and outputs a reconciliation plan with explicit source-of-truth rules.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | The 'Cross-Platform' Sync |
| **Phase** | Phase 6: Advanced Orchestration & Scaling |
| **Key Skill** | sync, multi-platform, automation |

## Agentic CLI Prompt

```bash
gemini "Compare Module 3 content across: [Canvas export], [Rise JSON], [10_dailies entry]. Identify the canonical version and list all deviations. Suggest one source of truth."
```

## Key Terms

- **Cross-Platform:** The core technique or system described in this entry.
- **Phase 6:** Advanced Orchestration & Scaling - the overarching theme of Days 121–120.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-71-the-cross-platform-sync.md)
