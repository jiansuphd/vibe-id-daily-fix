---
title: "day 42 the accessibility debt calculator"
layout: post.njk
---

# Day 42: The 'Accessibility Debt' Calculator

- **The Pointer:** Quantify the accessibility gap in a course or program before proposing remediation.
- **The Details:** Use a structured rubric (WCAG 2.2, Section 508, UDL) to estimate the 'debt' — hours, cost, risk — of every non-conformant element. Makes the business case for upfront accessibility.
- **Action:**

```bash
gemini "Analyze this course shell. Output a JSON object with: { wcag_failures: [], estimate_hours: N, risk_level: 'high|medium|low' }"
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)