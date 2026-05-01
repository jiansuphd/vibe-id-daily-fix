---
title: "The Schema-Driven ID (JSON Architect) - Concept Wiki"
tags: [wiki, concept, instructional-design, json, automation]
---

# The Schema-Driven ID (JSON Architect) - Pedagogical Synthesis

*Expanded concepts from the Day 32 daily pointer.*

## Core Concept

Schema-Driven Design shifts the ID's role from **prompt author** to **data architect**. Instead of describing what you want in natural language, you define a strict JSON structure and instruct the AI to populate it. The output is machine-readable, reusable, and compatible with LMS bulk-upload tools.

## ID Framework Integration

| Schema Key | ID Framework Alignment |
|---|---|
| `title` | Course/Module naming conventions |
| `objective_id` | Bloom's Taxonomy action verb tagging |
| `content_html` | UDL representation principle |
| `accessibility_notes` | WCAG 2.2 / QM Standard 8 |
| `UDL_Alignment` | UDL checkpoint cross-reference |
| `Bloom_Level` | Cognitive domain classification |

## Technical Implementation

```json
{
  "title": "Week 4: Agentic Workflow Foundations",
  "objective_id": "OBJ-4.2-APPLY",
  "content_html": "<p>...</p>",
  "accessibility_notes": "All images include alt text; heading hierarchy maintained.",
  "UDL_Alignment": "Representation — Multiple Means",
  "Bloom_Level": "Apply"
}
```

**Action prompt:** `gemini "Generate the Week 4 content following this JSON schema: {title, objective_id, content_html, accessibility_notes}."`

## Why This Matters

- Eliminates prompt drift — the schema enforces consistent output structure every time
- Enables downstream automation — Python scripts and Canvas APIs can parse the output directly
- Creates audit trails — every AI-generated object is tied to an objective ID and Bloom level

---
**Reference:** [Original Pointer](../10_dailies/day-32-the-schema-driven-id-json-architect.md)
