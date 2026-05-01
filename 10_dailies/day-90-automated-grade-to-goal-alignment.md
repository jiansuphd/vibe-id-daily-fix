# Day 90: Automated Grade-to-Goal Alignment

- **The Pointer:** Automatically verify that every grade weight in the gradebook aligns to a course goal — with no orphaned assessments.
- **The Details:** Grade weight is instructional signal. An orphaned assessment (one not tied to a stated goal) sends a confusing signal to learners. The agent reads the gradebook and the objectives and flags every mismatch.
- **Action:**

```bash
gemini "Here is the gradebook schema and course objectives. Flag any assessment that does not map to at least one objective. Also flag objectives with no associated grade."
```

---

*Phase 7: Endgame & Sustained Resilience*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)