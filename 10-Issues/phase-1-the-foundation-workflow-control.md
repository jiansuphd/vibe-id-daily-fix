---
title: "📅 Phase 1: The Foundation (Workflow & Control)"
date: 2026-04-29
tags: [issue]
---

# 📅 Phase 1: The Foundation (Workflow & Control)

### Day 1: The "Entry Point" Protocol (AGENTS.md / GEMINI.md)

- **The Pointer:** Create a GEMINI.md file in your root folder to act as the AI's "Mission Briefing."
- **The Details:** The CLI automatically searches for this. By placing your ID Persona and UT Brand Standards here, you eliminate "Prompt Drift."
- **ID Application:** Define your "Voice" (Senior ID) and "Pedagogy" (Bloom's Taxonomy, Quality Matters).

### Day 2: The "Skeleton - First" Prompt

- **The Pointer:** Demand a project architecture or a "Plan" before any code is generated.
- **The Details:** Use the /plan command or prompt for a "File Tree." This forces the AI to check its logic against your GEMINI.md first.
- **ID Application:** Ask for a 15 - week module map before individual page content.

### Day 3: The "Draft - to - Diff" Workflow

- **The Pointer:** Request changes in "Diff" (Difference) format to keep total control of your files.
- **The Details:** Avoid total rewrites that lose academic tone. A "Diff" fixes specific items like aria - labels or CSS classes.
- **ID Application:** Audit existing Canvas pages without overwriting the Subject Matter Expert's (SME) original text.

### Day 4: "Prompt Injection" for Standards

- **The Pointer:** Use the @ symbol or /path to feed the AI specific reference documents.
- **The Details:** This is "Zero - Shot Learning." Provide the "Answer Key" (Brand Guide, Syllabus Template) so the AI doesn't guess.
- **ID Application:** Inject the official UT Knoxville syllabus template before generating a new draft.

### Day 5: The "Self - Documenting" Loop

- **The Pointer:** End every session by asking the AI to summarize its successful steps.
- **The Details:** The CLI is session - based. Ask it to format findings into a "Skill" for your library.
- **ID Application:** Turns a one - time success (like a complex table build) into a repeatable SOP.

### Day 6: The "Multi - Agent Debate"

- **The Pointer:** Simulate a "Committee Review" by asking the AI to role - play 3 specific personas.
- **The Details:** This triggers "Latent Perspective." The AI critiques its own work as a Student, Auditor, and SME.
- **ID Application:** Pressure - test a module's navigation and cognitive load.

### Day 7: The "Raw - to - Refined" Proxy (The Lynx Strategy)

- **The Pointer:** Use the CLI to process "ugly" raw data (SME notes, PDF dumps) before designing.
- **The Details:** Use !lynx -dump [URL] | gemini to strip noise and extract high - signal text.
- **ID Application:** Fast - track turning a 50 - page PDF into 5 clean Learning Objectives.

### Day 8: The "Modular Skill" (Atomic SOPs)

- **The Pointer:** Build a 02_Skills folder containing small, task - specific Markdown files.
- **The Details:** This is "Agentic Infrastructure." Use specialized files like AltText_Reviewer.md to run targeted audits.
- **ID Application:** Run: /path ./02_Skills/AltText_Reviewer.md then gemini "Run this skill on index.html."
