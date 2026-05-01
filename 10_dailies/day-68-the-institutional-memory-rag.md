# Day 68: The 'Institutional Memory' RAG

- **The Pointer:** Build a Retrieval-Augmented Generation index over your entire vault so any prompt can draw on past decisions without manual context injection.
- **The Details:** RAG turns your vault into a queryable memory. Every decision log, SOP, and skill file becomes a retrievable fact. The agent answers 'what did we decide about X?' from the corpus, not from hallucination.
- **Action:**

```bash
gemini --rag ./vault/ "What has been our standard approach to branching scenario design in past courses? Cite the specific file and decision."
```

---

*Phase 6: Advanced Orchestration & Scaling*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)