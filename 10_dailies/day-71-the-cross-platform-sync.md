# Day 71: The 'Cross-Platform' Sync (Sync-Logic)

- **The Pointer:** Detect and resolve content drift between Canvas, Rise, and your Obsidian vault using a three-way sync agent.
- **The Details:** Content lives in three places and diverges. The sync agent reads all three, identifies the canonical version, and outputs a reconciliation plan with explicit source-of-truth rules.
- **Action:**

```bash
gemini "Compare Module 3 content across: [Canvas export], [Rise JSON], [10_dailies entry]. Identify the canonical version and list all deviations. Suggest one source of truth."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)