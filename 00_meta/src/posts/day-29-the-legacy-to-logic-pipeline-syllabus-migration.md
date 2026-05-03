---
layout: post.njk
title: "The 'Legacy-to-Logic' Pipeline (Syllabus Migration)"
date: 2026-04-28
tags: [issue, vibe-coding]
---

- **The Pointer:** Use the CLI to strip formatting from old (2024 / 2025) courses and convert them into structured JSON "Skeletons" for 2026.
- **The Details:** This is "Technical Debt Management." By removing "baked-in" styles from old Canvas pages, you create a clean slate for modern, accessible UT templates.
- **ID Application:** Mass-converts legacy subject-matter courses into a standardized data format.
- **Action:** read legacy_page.html | gemini "Strip all inline styles and fixed-width containers. Output the content as a clean JSON object with keys for 'Objectives', 'Content', and 'Tasks'."


