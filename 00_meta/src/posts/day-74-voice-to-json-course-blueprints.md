---
layout: post.njk
title: "Day 74: Voice-to-JSON Course Blueprints"
date: 2026-06-12
tags:
  - post
  - day-74
  - phase-6
  - voice
  - json
  - blueprint
---

# Day 74: Voice-to-JSON Course Blueprints

- **The Pointer:** Extend the voice pipeline to produce valid Rise 360 JSON — not just Markdown — enabling direct LMS import from a spoken draft.
- **The Details:** Markdown is an intermediate format. A pipeline that goes voice → structured JSON → Rise import eliminates the re-typing step entirely and closes the low-strokes loop.
- **Action:**

```bash
whisper audio.mp3 | gemini 'Convert this transcript to valid Rise 360 lesson JSON with lessons array, objectives, and block types. Validate the JSON before output.'
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
