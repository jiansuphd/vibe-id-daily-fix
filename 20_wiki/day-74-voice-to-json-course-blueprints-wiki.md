---
tags:
  - wiki
  - vibe-coding
  - phase-6
  - day-74
---

# Day 74: Voice-to-JSON Course Blueprints - Wiki

## Core Concept

Extend the voice pipeline to produce valid Rise 360 JSON - not just Markdown - enabling direct LMS import from a spoken draft. Markdown is an intermediate format. A pipeline that goes voice → structured JSON → Rise import eliminates the re-typing step entirely and closes the low-strokes loop.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | Voice-to-JSON Course Blueprints |
| **Phase** | Phase 6: Advanced Orchestration & Scaling |
| **Key Skill** | voice, json, blueprint |

## Agentic CLI Prompt

```bash
whisper audio.mp3 | gemini 'Convert this transcript to valid Rise 360 lesson JSON with lessons array, objectives, and block types. Validate the JSON before output.'
```

## Key Terms

- **Voice-to-JSON:** The core technique or system described in this entry.
- **Phase 6:** Advanced Orchestration & Scaling - the overarching theme of Days 121–120.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-74-voice-to-json-course-blueprints.md)
