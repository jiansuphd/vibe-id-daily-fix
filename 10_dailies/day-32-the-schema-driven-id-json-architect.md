---
title: "The 'Schema-Driven' ID (JSON Architect)"
date: 2026-05-01
tags: [issue, vibe-coding, json, automation]
---

# The "Schema-Driven" ID (JSON Architect)

- **The Pointer:** Move from writing "Prompt Instructions" to defining "Data Schemas."
- **The Details:** Instead of asking for a quiz, provide a JSON structure (Schema) and ask the AI to fill it. This ensures the output is 100% compatible with Canvas bulk-upload tools or your own Python scripts.
- **ID Application:** Define a standard `Module_Schema` that includes keys for `UDL_Alignment` and `Bloom_Level`.
- **Action:** `gemini "Generate the Week 4 content following this JSON schema: {title, objective_id, content_html, accessibility_notes}."`

---
**Backlink:** [Dailies MOC](_dailies_MOC.md)
