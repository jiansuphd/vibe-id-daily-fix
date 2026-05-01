# Day 52: The 'Compliance Crawler' (Institutional Scrutiny)

- **The Pointer:** Build an agent that crawls a course shell for policy non-compliance: syllabus requirements, grade policies, academic integrity statements.
- **The Details:** Every institution has policies that are often missed under deadline pressure. The crawler is a pre-submission checklist agent that reads the policy doc and the course shell simultaneously.
- **Action:**

```bash
gemini --system ./04_Policy/UTA_Syllabus_Requirements.md "Audit this syllabus. List every required element that is missing or incomplete. Output as a structured checklist."
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)