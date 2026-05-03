---
tags:
  - wiki
  - vibe-coding
  - phase-5
  - day-59
---

# Day 59: The 'Zero-Keystroke' Ideal (Voice-to-Course) — Wiki

## Core Concept

Prototype a fully voice-driven course authoring pipeline: speak → transcribe → structure → export to LMS. The zero-keystroke ideal is not a luxury — it is an accessibility standard for yourself. If a pipeline requires typing, it can be replaced. Whisper → Gemini → Rise API is the target stack.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | The 'Zero-Keystroke' Ideal |
| **Phase** | Phase 5: Institutional Leadership & AI Governance |
| **Key Skill** | voice, automation, zero-keystrokes |

## Agentic CLI Prompt

```bash
whisper --model medium audio_draft.mp3 --output_format txt && cat audio_draft.txt | gemini 'Convert to Rise 360 JSON blueprint' > blueprint.json
```

## Key Terms

- **Zero-Keystroke:** The core technique or system described in this entry.
- **Phase 5:** Institutional Leadership & AI Governance — the overarching theme of Days 101–100.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-59-the-zero-keystroke-ideal-voice-to-course.md)
