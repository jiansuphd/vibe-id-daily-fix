---
title: "The Cross-Model Consensus (Model Diversity Audit) - Concept Wiki"
tags: [wiki, concept, accessibility, ai-strategy, compliance]
---

# The Cross-Model Consensus (Model Diversity Audit) - Pedagogical Synthesis

*Expanded concepts from the Day 38 daily pointer.*

## Core Concept

No single AI model catches every issue. The Cross-Model Consensus runs the same audit through two models with different strengths — one optimized for speed (Flash), one for depth (Pro) — then compares outputs to produce a high-confidence "Conflict Report." Discrepancies flag the highest-risk areas.

## Model Pairing Strategy

| Model | Strength | Use For |
|---|---|---|
| Gemini Flash | Speed, broad coverage | First-pass accessibility scan |
| Gemini Pro | Deep reasoning, nuance | Complex ARIA / keyboard flow audit |
| Consensus | Intersection of findings | High-confidence issue list |
| Delta | Points of disagreement | High-risk areas for manual review |

## CPACC Compliance Application

- Run Flash on all course pages for baseline coverage
- Run Pro on pages flagged by Flash
- Cross-reference: any issue found by Pro but missed by Flash = **high-risk, manual review required**
- Document the consensus output as evidence for CPACC audit trail

## Why Two Models?

Different training data and reasoning strategies mean different blind spots. Flash may miss a keyboard trap that Pro detects; Pro may over-report false positives that Flash dismisses. The conflict report reveals which issues are unambiguously real vs. model-specific artifacts.

---
**Reference:** [Original Pointer](../10_dailies/day-38-the-cross-model-consensus-model-diversity-audit.md)
