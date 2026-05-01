---
title: "The Context-Pruning Strategy (Token Efficiency) - Concept Wiki"
tags: [wiki, concept, instructional-design, prompt-engineering, automation]
---

# The Context-Pruning Strategy (Token Efficiency) - Pedagogical Synthesis

*Expanded concepts from the Day 33 daily pointer.*

## Core Concept

Long AI conversations accumulate "token noise" — resolved decisions, abandoned drafts, and outdated context that dilutes the model's focus. Context-Pruning is the deliberate act of compressing session history into a clean `MISSION_UPDATE.md` before starting a new phase of work.

## Why It Matters for IDs

| Session State | Effect on Output |
|---|---|
| Fresh session, no context | Prompt drift, generic responses |
| Long session, pruned context | Focused, phase-specific outputs |
| Long session, unpruned | Contradictions, token limit errors |

## Pruning Protocol

1. At the end of a major work phase, prompt: `"Summarize all finalized decisions from this session into a bullet list."`
2. Save output as `MISSION_UPDATE_[date].md`
3. Open new session; inject only the summary as the opening context
4. Archive the full session log for audit purposes

## ID Application

- **Course Mapping → Page Building transition:** Prune after objectives are locked
- **Rubric design → Assessment creation:** Prune after scoring criteria are finalized
- **BZAN 503 / online course phase handoff:** Prevents cross-course contamination

---
**Reference:** [Original Pointer](../10_dailies/day-33-the-context-pruning-strategy-token-efficiency.md)
