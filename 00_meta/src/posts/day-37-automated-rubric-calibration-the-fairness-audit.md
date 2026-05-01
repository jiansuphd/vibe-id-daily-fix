---
layout: post.njk
title: "Automated Rubric Calibration (The Fairness Audit)"
date: 2026-05-03
tags: [issue, vibe-coding, rubric, qa]
---

# Automated Rubric Calibration (The Fairness Audit)

- **The Pointer:** Use the CLI to compare a Syllabus, a Rubric, and a Sample Assignment simultaneously.
- **The Details:** This is "Triangulation." The AI identifies "Rubric Drift" — where the grading criteria don't actually measure the stated learning objective.
- **ID Application:** High-level QA for Haslam graduate courses where grading consistency is critical.
- **Action:** `gemini --files syllabus.pdf, rubric.md, assignment.html "Check for alignment. Is the 20% weight on 'Analysis' supported by the instructions?"`


