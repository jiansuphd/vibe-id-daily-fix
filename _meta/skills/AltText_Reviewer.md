# SOP: AltText_Reviewer

## Overview
A specialized agentic workflow for reviewing and generating accessibility-compliant alternative text for complex instructional images (charts, diagrams, and technical illustrations).

## Objectives
- Ensure WCAG 2.1 AA compliance for non-text content.
- Provide concise yet descriptive summaries that convey the pedagogical intent of the image.
- Standardize alt text across multiple courses and platforms (e.g., Canvas, Articulate Rise).

## Procedure

### 1. Image Triage
- **Identify Image Type**: Is it Decorative, Informational, or Functional?
- **Decorative**: Use empty `alt=""`.
- **Informational**: Requires descriptive text.
- **Functional**: Describe the action (e.g., "Search button").

### 2. Context Analysis
- Read the surrounding text to understand what the student is supposed to learn from the image.
- Avoid repeating information already present in the caption or body text.

### 3. Drafting the Alt Text
- **The "Elevator Pitch" Rule**: Describe the image in 1-2 sentences.
- **Start with the Subject**: e.g., "A bar chart showing..."
- **Highlight Trends**: Focus on the data points relevant to the learning objective.
- **Avoid "Image of" or "Photo of"**: Screen readers already announce that it's an image.

### 4. Vibe Coding Implementation (Gemini CLI)
Use the following prompt pattern to automate the review:

```bash
gemini "Review the following alt text for an image in a [Subject] course.
Learning Objective: [Objective]
Alt Text: [Draft]
Provide a corrected version if it fails to meet WCAG standards or repeats body text."
```

## Maintenance
- Review this SOP quarterly against updated W3C Accessibility Guidelines.
- Log common failure patterns in the project wiki.

---
**Backlinks:** [Root MOC](../../root_MOC.md) | [Meta MOC](../_meta_MOC.md)
