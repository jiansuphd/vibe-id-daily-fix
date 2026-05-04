---
title: "The 'Skeleton-First' Prompt - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# The "Skeleton-First" Prompt - Pedagogical Synthesis

*Deep-dive analysis of the Skeleton-First architectural planning concept from Day 2.*

## ID Framework Integration

**Gagné's Second Event of Instruction — Informing the Learner of the Objective:** The Skeleton-First Prompt is a direct implementation of this event at the system level. Before any content is generated, the AI is made aware of the structural destination. Just as a learner performs better when shown the learning objective before the lesson, the AI performs better when shown the architecture before the content.

**Cognitive Load Theory (Sweller):** The skeleton externalizes what would otherwise be held in working memory. Without a pre-defined structure, both the AI and the ID must simultaneously manage the macro-structure ("where does this module fit?") and the micro-content ("what does this sentence say?"). This dual burden inflates extraneous cognitive load. The skeleton separates these concerns into two discrete phases, optimizing germane load for the content-generation phase.

**Quality Matters Standard 2.1:** "The course learning objectives, or competencies, describe outcomes that are measurable." Skeleton-First enforces this at the planning stage — you cannot map LOs to activities in a skeleton without making them concrete and countable. Vague objectives are exposed immediately when you try to assign them to a file tree node.

**Bloom's Taxonomy — Progressive Architecture:** When the skeleton is a module map, the cognitive level of each activity becomes visible at a glance. A well-formed skeleton will show cognitive progression (Remember → Understand → Apply → Analyze) explicitly. A poorly formed skeleton — where a case study (Analyze) precedes any foundational content (Remember/Understand) — reveals the misalignment before a single word is written.

## Technical Implementation

The Skeleton-First workflow has three stages:

### Stage 1 — Request the Skeleton

Use one of these directive patterns depending on the task type:

**For a course module:**
```
"Before writing any content, produce a module map for Week 4.
Show: the module title, 3 learning objectives with Bloom's level tags,
the sequence of activities (reading → discussion → assessment),
and the estimated time-on-task for each. Do not write student-facing
content until I approve this map."
```

**For a file structure / technical build:**
```
"Provide a file tree for this interactive component before writing
any code. Include every file you plan to create, its purpose, and
how it connects to adjacent files. Wait for my approval."
```

**For a syllabus:**
```
"Outline the 15-week structure of this course. For each week,
show only: the topic, the primary Bloom's level, and one
assessment type. No prose content yet."
```

### Stage 2 — Audit the Skeleton

Before approving, check:
- [ ] Do the cognitive levels progress logically week over week?
- [ ] Is each LO measurable (starts with an action verb)?
- [ ] Does every assessment map to at least one LO?
- [ ] Are any weeks overloaded (too many high-cognitive activities clustered)?
- [ ] Does the structure align with the QM rubric for course design?

### Stage 3 — Lock and Proceed

Only after explicit approval does the AI proceed to content. Use a locking phrase:
```
"Skeleton approved. Proceed to generate content for Week 1 only.
Do not move to Week 2 without a separate approval."
```

This "approval gate" pattern prevents the AI from drifting into later sections while you are still reviewing earlier ones — a common cause of Instructional Debt.

## Advanced Applications

**JSON Schema as Skeleton:** For data-driven course builds (LMS imports, xAPI statement structures), request the skeleton as a JSON schema instead of a markdown list. The schema becomes the contract — any generated content that cannot be validated against the schema is immediately flagged as structurally non-compliant.

**The Nested Skeleton:** For large-scale curriculum redesigns (program-level, not course-level), use a two-pass skeleton. First skeleton: program map (which courses, in which sequence, covering which competencies). Second skeleton: module map within a single course. Never jump from program-level intent to lesson-level content in one step.

**Skeleton as Audit Tool:** An existing course with no skeleton can be reverse-engineered. Prompt: `"Read this syllabus and produce the skeleton it implies — module map, LOs per week, Bloom's levels, and assessment types. Do not add anything; only extract what is already there."` The resulting skeleton makes structural gaps visible immediately.

## Common Pitfalls

**Approving a vague skeleton:** A skeleton that says "Week 3: Supply Chain Concepts" with no LOs and no activities is not a skeleton — it is a label. Reject it. Require measurable objectives and explicit activity types before approving.

**Skipping the audit:** The skeleton only works if you actually review it before proceeding. Rubber-stamping the plan defeats the purpose. Budget 5-10 minutes for the skeleton audit — it consistently saves hours of content revision.

**One skeleton for everything:** A file-tree skeleton is appropriate for a technical build; a module-map skeleton is appropriate for a course design; a narrative outline is appropriate for a long-form document. Using the wrong skeleton type for the task produces a structurally sound artifact of the wrong shape.

**Not locking the scope:** Without an explicit approval gate, the AI will begin generating content during the skeleton phase. Build the "do not proceed until approved" instruction into every Skeleton-First prompt.

---
**Reference:** [Original Daily Pointer](../10_dailies/day-02-the-skeleton-first-prompt.md)
