---
layout: post.njk
title: "Day 52: The 'Compliance Crawler' (Institutional Scrutiny)"
date: 2026-05-21
tags:
  - post
  - day-52
  - phase-5
  - compliance
  - policy
  - audit
---

# Day 52: The 'Compliance Crawler' (Institutional Scrutiny)

- **The Pointer:** Build an agent that crawls a course shell for policy non-compliance: syllabus requirements, grade policies, academic integrity statements.
- **The Details:** Every institution has policies that are often missed under deadline pressure. The crawler is a pre-submission checklist agent that reads the policy doc and the course shell simultaneously.
- **Action:**

```bash
gemini --system ./04_Policy/UTA_Syllabus_Requirements.md "Audit this syllabus. List every required element that is missing or incomplete. Output as a structured checklist."
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlinks:** [Daily MOC](../../10_dailies/_dailies_MOC.md) | [Root MOC](../../root_MOC.md)
