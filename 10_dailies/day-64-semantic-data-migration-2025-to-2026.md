# Day 64: Semantic Data Migration (2025 to 2026)

- **The Pointer:** Migrate course content from one academic year to the next using semantic diffing — not search-and-replace.
- **The Details:** Date-stamped content drifts. An agent that reads the 2025 version and the 2026 context (new policies, new tools, new regulations) generates a semantic diff and a migration plan.
- **Action:**

```bash
gemini "Compare this 2025 syllabus to current UT policy. Identify every date, tool reference, or policy that is stale. Output a migration checklist."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)