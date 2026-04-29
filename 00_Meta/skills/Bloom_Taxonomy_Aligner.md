# SOP: Bloom_Taxonomy_Aligner

## Overview
A specialized agentic workflow for auditing course content and learning activities against Bloom's Taxonomy to ensure cognitive depth and pedagogical alignment.

## Objectives
- Verify that learning activities match the intended cognitive level (Knowledge, Comprehension, Application, Analysis, Synthesis, Evaluation).
- Transition "Lower-Order Thinking Skills" (LOTS) tasks into "Higher-Order Thinking Skills" (HOTS) where appropriate.
- Standardize active verb usage across course modules.

## Procedure

### 1. Objective Analysis
- Extract the Learning Objective (LO) from the module.
- Identify the primary action verb (e.g., "Describe," "Design," "Evaluate").

### 2. Cognitive Mapping
- Map the verb to the corresponding level of Bloom's Taxonomy.
- Determine if the associated activity (quiz, discussion, project) actually requires the student to perform at that level.

### 3. Vibe Coding Implementation (Gemini CLI)
Use the following prompt pattern to automate the alignment audit:

```bash
gemini "Analyze this activity: [Activity Description]
Learning Objective: [LO]
1. Which level of Bloom's Taxonomy does this activity currently address?
2. Suggest 2 ways to elevate this activity to the next cognitive level.
3. Rewrite the instructions using HOTS-aligned verbs."
```

### 4. Alignment Verification
- Update the course blueprint with the corrected verbs and activities.
- Create a "Pedagogical Anchor" in the module folder to guide future content generation.

## Maintenance
- Annual review of the SOP to incorporate updated pedagogical research (e.g., "Bloom's Digital Taxonomy").

---
**Backlinks:** [[00_Root_MOC|Root MOC]] | [[00_Meta_MOC|Meta MOC]]
