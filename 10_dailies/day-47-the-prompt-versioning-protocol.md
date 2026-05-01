# Day 47: The 'Prompt Versioning' Protocol (Instructional Reliability)

- **The Pointer:** Treat prompts like code: version them, test them, and document regressions.
- **The Details:** A prompt that works today may drift when a model is updated. Version your system prompts in git, run them against a fixed test case, and log output changes as 'prompt regressions'.
- **Action:**

```bash
git log --oneline -- prompts/ | head -20
git diff HEAD~1 HEAD -- prompts/system_grader.md
```

---

*Phase 5: Institutional Leadership & AI Governance*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)