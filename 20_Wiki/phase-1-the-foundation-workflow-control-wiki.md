---
title: "Phase 1: The Foundation (Workflow & Control) - Concept Wiki"
tags: [wiki, concept, instructional-design, workflow]
---

# Phase 1: The Foundation (Workflow & Control) - Pedagogical Synthesis

*This page synthesizes the daily pointers from Phase 1 through the lens of a Senior Instructional Designer. It anchors automated workflows (Vibe Coding) to established pedagogical frameworks and quality assurance standards.*

## 🧠 ID Framework Integration

The overarching theme of Phase 1 is **Establishing Guardrails**. When transitioning from manual ID workflows to AI-assisted generation, it is critical to prevent "Prompt Drift" and ensure cognitive load is managed. We achieve this by front-loading pedagogical frameworks into the AI's system prompt (the "Mission Briefing").

### 1. Bloom's Taxonomy & The "Skeleton-First" Prompt
Before generating granular content, IDs must demand a macro-level view (a 15-week map or a File Tree). 
* **Application:** By forcing the AI to build the "Skeleton First," you are ensuring the structural alignment of the course. You can verify that the overarching learning objectives (the "Create" and "Evaluate" levels of Bloom's) are properly scaffolded by lower-level tasks (the "Remember" and "Understand" levels) earlier in the module sequence. 

### 2. Quality Matters (QM) & "Prompt Injection"
Quality Matters (specifically standard 1.2 regarding the introduction of the purpose and structure of the course) requires consistency and clarity. 
* **Application:** Relying on the AI to "guess" the format leads to QM violations. By utilizing **"Prompt Injection"** (feeding the AI the official syllabus template or brand guide *before* generation), you guarantee that the output intrinsically aligns with institutional standards and QM rubrics from the very first draft.

### 3. Cognitive Load Theory & The "Multi-Agent Debate"
Instructional materials must minimize *extraneous* cognitive load to maximize *germane* load (learning). 
* **Application:** Simulating a "Committee Review" via AI role-play (e.g., asking the AI to review a module as a Student, an Accessibility Auditor, and a Subject Matter Expert) is a rapid way to pressure-test navigation and cognitive load before a human ever sees the draft. The "Student" persona will often highlight confusing instructions that increase extraneous load.

## 🛠️ Technical Implementation for IDs

Implementing these theoretical concepts requires specific technical workflows within the Vibe Coding environment:

*   **The Mission Briefing (`GEMINI.md`):** This file is your permanent pedagogical anchor. It should contain your institution's specific QM checklists and Bloom's verb guidelines. The CLI automatically reads this, eliminating the need to re-explain your pedagogy every session.
*   **The "Draft-to-Diff" Workflow:** When auditing existing Canvas pages or SME content, never ask the AI to "rewrite." Ask it to provide "Diffs" (differences/edits). This surgically fixes issues (like missing `aria-labels` for accessibility) without destroying the SME's academic tone.
*   **Agentic Infrastructure (`02_Skills/`):** Transform successful, one-off prompts into repeatable Standard Operating Procedures (SOPs). For example, if you successfully prompt the AI to extract clean learning objectives from a noisy 50-page PDF (using the "Raw-to-Refined" strategy), save that prompt as a `.md` file in your Skills folder. You can then instantly deploy this "Skill" on future PDFs.

---
**Reference:** [[phase-1-the-foundation-workflow-control.md|Original Issue]]