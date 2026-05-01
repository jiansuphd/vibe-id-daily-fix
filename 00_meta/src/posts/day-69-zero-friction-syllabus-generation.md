---
layout: post.njk
title: "Day 69: Zero-Friction Synthesis"
date: 2026-06-07
tags: [issue, vibe-coding]
---

- **The Pointer:** Generate a compliant, complete syllabus from a course blueprint in under 5 minutes using a policy-aware system prompt.
- **The Details:** The syllabus is a legal document. An agent templated to embed required policy language (academic integrity, ADA, grade appeal) transforms a JSON blueprint into a compliant draft instantly.
- **Action:**

```bash
gemini --system ./04_Policy/UTA_Syllabus_Template.md "Generate a full syllabus for this course blueprint. Include all required policy statements verbatim. Output Markdown."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)