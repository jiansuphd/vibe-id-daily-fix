---
title: "Day 56: 'Agentic Procurement' (VPAT Auditor)"
date: 2026-05-25
tags: [issue, vibe-coding]
---
# Day 56: 'Agentic Procurement' (VPAT Auditor)

- **The Pointer:** Use an agent to parse a vendor VPAT and extract every 'Partially Supports' or 'Does Not Support' row — turning a legal document into a risk matrix.
- **The Details:** VPATs are dense. Procurement teams skip them. An agent that reads the VPAT and outputs a structured risk table with recommended mitigations makes accessibility a procurement gate, not an afterthought.
- **Action:**

```bash
gemini "Parse this VPAT. Extract all rows where conformance is not 'Supports'. For each, output: criterion | status | risk | suggested accommodation."
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)