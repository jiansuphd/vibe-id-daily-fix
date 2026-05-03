---
tags:
  - wiki
  - vibe-coding
  - phase-7
  - day-93
---

# Day 93: Voice-Command Optimization (Zsh Aliases) - Wiki

## Core Concept

Expand the voice command vocabulary by adding 5 new contextual aliases derived from the most-repeated phrases in your weekly work. Voice commands only save effort if they are natural. Track the phrases you say most often while working, then create zsh functions that map those phrases to complex commands.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Voice-Command Optimization |
| **Phase** | Phase 7: Endgame & Sustained Resilience |
| **Key Skill** | voice, zsh, aliases |

## Agentic CLI Prompt

```bash
# Review last month's command history for patterns
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -20
# Then add top candidates to .zshrc as functions
```

## Key Terms

- **Voice-Command:** The core technique or system described in this entry.
- **Phase 7:** Endgame & Sustained Resilience - the overarching theme of Days 141–140.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-93-voice-command-optimization-zsh-aliases.md)
