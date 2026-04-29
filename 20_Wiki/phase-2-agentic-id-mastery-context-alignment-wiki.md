---
title: "Phase 2: Agentic ID Mastery (Context & Alignment) - Concept Wiki"
tags: [wiki, concept, instructional-design, alignment]
---

# Phase 2: Agentic ID Mastery (Context & Alignment) - Pedagogical Synthesis

*This page synthesizes the daily pointers from Phase 2 through the lens of a Senior Instructional Designer. It focuses on leveraging Vibe Coding to enforce instructional alignment, manage cognitive load, and ensure brand compliance.*

## 🧠 ID Framework Integration

Phase 2 shifts from basic control to **Systemic Alignment**. Here, we use the AI not just to generate content, but to actively audit our pedagogical logic against established frameworks.

### 1. Quality Matters (QM) & The "Semantic Cross-Check"
QM Standard 4.1 dictates that instructional materials must contribute to the achievement of stated course and module learning objectives. QM Standard 3.1 requires that assessments measure these same objectives.
* **Application:** A common failure point in manual ID work is "Orphaned Objectives" (objectives that are taught but never assessed) or "Rogue Assessments" (questions testing material never formally introduced). By feeding both the syllabus and the quiz bank into the CLI and asking for a "Semantic Cross-Check," the AI can instantly map the alignment matrix and flag violations of QM Standards 3.1 and 4.1.

### 2. Cognitive Load Theory & The "Density Check"
High "Visual Weight" (walls of text) drastically increases intrinsic cognitive load, leading to learner fatigue and decreased retention.
* **Application:** The AI can be utilized as a "Cognitive Load Auditor." By instructing it to scan a Canvas HTML page for sections exceeding a specific word count (e.g., 100 words without a break), you can systematically identify areas that require "chunking." The AI can then propose turning those dense paragraphs into bulleted lists or accordions, directly applying the redundancy and signaling principles of Cognitive Load Theory.

### 3. Student Burnout & The "Predictive Syllabus"
Predicting points of high friction in a 15-week term is a hallmark of senior ID strategy. 
* **Application:** By feeding the AI a syllabus PDF and asking it to map deadlines and point weights, it can identify "choke points" (e.g., Week 8, where a midterm and a major paper collide). A Senior ID can then use this data to proactively design "Low-Friction" content for that week (e.g., opting for a 5-minute video overview rather than a 20-page reading) to prevent student burnout.

## 🛠️ Technical Implementation for IDs

*   **Global Stylesheet Injection:** To maintain institutional brand compliance (like UT's Torch Orange), always feed the AI your `global.css` file *before* asking it to design a layout. This prevents it from hallucinating generic Bootstrap colors and ensures the output is instantly usable in Canvas.
*   **The CLI as an Auditor:** Stop using the AI solely as a writer. Use it as a reader. Commands like `read page.html | gemini "Audit this for visual density"` shift the agent from a generative tool to an analytical quality assurance mechanism.

---
**Reference:** [[phase-2-agentic-id-mastery-context-alignment.md|Original Issue]]