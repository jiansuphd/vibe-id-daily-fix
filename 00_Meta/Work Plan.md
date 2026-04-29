---
title: Vibe Coding for IDs - Work Plan
date: 2026-04-29
tags:
  - work-plan
  - id
  - vibe-coding
  - roadmap
---

# 🛠️ Vibe Coding for IDs: Implementation Roadmap

> [!info] Status: Phase 2 - Content Digitization
> Transitioning the "Daily Node" infrastructure to support the "Vibe Coding Daily Pointers" for Instructional Designers.

## 🎯 Project Vision
Create a front-facing dashboard that aggregates daily strategic "pointers" for Instructional Designers, helping them master agentic workflows, prompt engineering for pedagogy, and automated ID infrastructure.

## 🚦 System Health
- **Build**: Passing (Local Eleventy build successful).
- **Wiki**: Undergoing linting/reorganization.
- **Deployment**: GitHub Actions configured.

## 🗺️ Detailed Work Plan

### Phase 1: Infrastructure & The Dashboard (Completed)
**Goal**: Establish the repository as a Knowledge Compiler and set up the Eleventy dashboard.
*   [x] **Repository Pivot**: Overhaul README and .gitignore to reflect the ID focus.
*   [x] **Legacy Cleanup**: Surgically removed all legacy project source files and documentation (Probability Lab, Alchemy Formula, etc.).
*   [x] **Framework Setup**: Eleventy (11ty) configured for "Modern Tech Dashboard" aesthetic.
*   [x] **First Transmission**: Publish "Issue #001" based on Day 1 of the Vibe Coding Log.
*   [x] **MOC Update**: Ensure all Maps of Content (00_Root_MOC, etc.) are synchronized with the new structure.

### Phase 2: Content Digitization (Completed)
**Goal**: Convert the `Vibe_Coding_Daily_Log.md` into structured daily posts and wiki entries.
*   [x] **ID Persona Anchors**: Formalize the "Senior ID" and "Accessibility Auditor" personas in `00_Meta`.
*   [x] **Log-to-Post Pipeline**: Created a script to parse the raw Vibe Coding Daily Log into individual issue files (`10-Issues`) and concept wiki templates (`20_Wiki`).
*   [x] **Eleventy Fixes**: Fixed GitHub Pages CSS paths by configuring Eleventy's pathPrefix.
*   [x] **Wiki Synthesis**: Expand on the generated wiki templates in `20_Wiki` using specific ID frameworks (Bloom's Taxonomy, QM Standards).
*   [x] **Branding Selection**: Finalize between **VibeID Daily** or **The Daily VibeID**. Decision: **VibeID Daily**

### Phase 3: Automation & Agentic Workflows (Active - Week 3+)
**Goal**: Automate the generation of daily pointers and ID-specific audits.
*   [x] **The "Cyborg" Script**: Adapt the aggregation script to focus on ID trends, accessibility news, and pedagogical research.
*   [ ] **Skill Library**: Build out `10_Projects/skills/` with SOPs for "AltText_Reviewer," "Syllabus_Migration," etc.
*   [ ] **GitHub Actions Orchestration**: Automated daily builds and periodic wiki maintenance lints.

### Phase 4: Scale & Sustainability
*   [ ] **Cross-Vault Synthesis**: Integrate with MCP servers for broader context access.
*   [ ] **Community Feedback Loop**: (Optional) Add RSS/Email distribution for other IDs.

---

# Vibe Coding: Daily Strategic Pointers & Logic Log

**Tracking the journey from Natural Language to Systemic Automation.**

## 📅 Phase 1: The Foundation (Workflow & Control)

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

## 📅 Phase 2: Agentic ID Mastery (Context & Alignment)

### Day 9: The "Semantic Cross - Check" (Alignment)

- **The Pointer:** Use the CLI to verify alignment between Assessments and Learning Objectives.
- **The Details:** Feed the AI your Quiz and Objectives to find "Orphaned Objectives" (taught but not tested).
- **ID Application:** Ensures courses meet Quality Matters (QM) standards for Alignment.

### Day 10: The "Cognitive Load Audit" (Density Check)

- **The Pointer:** Use the CLI to audit the "Visual Weight" and word counts of Canvas pages.
- **The Details:** Identify walls of text or high link density that increase learner frustration.
- **ID Application:** Prompt: "Identify any section exceeding 100 words and suggest a split into a list or accordion."

### Day 11: Prompt Injection for Brand Compliance

- **The Pointer:** Feed the AI your CSS "Global Stylesheet" before asking for HTML design.
- **The Details:** Forces the AI to use local UT hex codes (Torch Orange, Smokey Grey) instead of generic Bootstrap colors.
- **ID Application:** Ensures all generated Canvas pages are unified and "on - vibe" with UT Brand Standards.

### Day 12: The "Predictive Syllabus" (Contextual Mapping)

- **The Pointer:** Use the CLI to map out a "Project Timeline" based on a single Syllabus PDF.
- **The Details:** Process deadlines and weights to predict high - workload weeks.
- **ID Application:** Suggest a "Low - Friction" design (shorter content) for weeks with massive term papers to prevent burnout.

## 📅 Phase 3: Continuous Optimization (Scale & Sustainability)

### Day 13: The "Accessibility Regression" Protocol

- **The Pointer:** Use the CLI to compare updated files against an "Accessibility Baseline."
- **The Details:** When you update a file's content, the CLI should re - run your AltText_Reviewer.md and WCAG_Audit skills automatically.
- **Action:** read updated_page.html | gemini "Check for any new accessibility violations compared to the previous version. Pay special attention to heading levels."

### Day 14: The "Synthetic Student" Simulation (Agentic UX)

- **The Pointer:** Use specific disability profiles as "Agentic Personas" to stress - test course navigation.
- **The Details:** Create personas (e.g., "Student with low - vision using a screen magnifier") and ask the AI to "navigate" your course structure.
- **Action:** Prompt: "As a student with Dyslexia, read this Module Overview. Identify the 3 most confusing sentences and re - write them for better readability."

### Day 15: The "Automated Indexing" Habit

- **The Pointer:** Use the CLI to auto - update your master_file_index.md after every major architectural change.
- **The Details:** Treat your Index as "Documentation - as - Code." Never manually update it; describe the changes to the CLI and let it maintain the directory.
- **Action:** gemini "Update the Master File Index and reorganize the Professional Development section."

### Day 16: The "Environment - Aware" Pre - Flight Check

- **The Pointer:** Force the Agent to define its "Environmental Assumptions" before outputting a single line of code.
- **The Details:** Catch missing CDNs, incorrect root IDs, or CSS conflicts by asking for an "Assumptions List" first.
- **Action:** "Before generating the React component, list the external libraries, CDN links, and HTML structure required for this to run in a Canvas context."

### Day 17: The "Full - Vault Synthesis" (MCP Integration)

- **The Pointer:** Use the Model Context Protocol (MCP) to bridge your "Second Brain" (Obsidian) directly into your CLI.
- **The Details:** Connecting your vault via the obsidian - mcp - server eliminates manual copy - pasting. The AI can now semantically search past research.
- **Action:** gemini "Based on my CPACC study notes and the AREC 342 course map, suggest 3 accessibility improvements for the Module 1 syllabus."

### Day 19: The "Agentic Git" (Instructional Assets as Code)

- **The Pointer:** Use the github - mcp - server to manage your instructional assets as versioned repositories.
- **The Details:** Treat your Canvas HTML snippets and interactives as "Instructional Software." Use the CLI to pull updates and track issues.
- **Action:** gemini "Check my GitHub repo for open issues related to 'Accessibility' and cross - reference them with my CPACC study notes."

### Day 20: The "Semantic Bridge" (Historical Knowledge Extraction)

- **The Pointer:** Use the CLI to extract "Latent Knowledge" from your 99_System/Archive to inform current projects.
- **The Details:** Your Archive is a goldmine. Use the AI to find "how we solved this in 2025" and bridge those successes into your new course builds.
- **Action:** gemini "Search the 99_System/Archive for previous EdTech Hub presentations and extract the best practices for AI Avatars to use in AREC 342."

### Day 21: The "Self - Correction Pattern" (Agentic Reflection)

- **The Pointer:** Prompt the AI to audit its own output against a specific constraint before the final reveal.
- **The Details:** Use a "Thinking" instruction: "First, identify potential accessibility errors in the proposed code. Then, provide the final corrected version."
- **ID Application:** Ensures interactive H5P or Rise - like components are checked for keyboard accessibility _during_ the generation process.
- **Action:** gemini "Create a custom video player. Before outputting the code, check if it contains any keyboard traps and verify the focus indicator contrast."

### Day 22: The "Multi - Modal Audit" (Vision - to - Text)

- **The Pointer:** Use Gemini's vision capabilities to audit visual "Brand Alignment" and "Visual Weight."
- **The Details:** Upload a screenshot of a Canvas page and ask the AI to "Describe the visual hierarchy and identify any color contrast violations based on the UT Brand Guide."
- **ID Application:** Bridges the gap between "it looks good" and "it is accessible / on - brand" for non - technical stakeholders.
- **Action:** [Upload Screenshot] | gemini "Does this layout follow the UDL principle of Reducing Distractions? Highlight any cluttered areas."

### Day 23: The "Constraint - Based Prompt" (Guardrail Logic)

- **The Pointer:** Explicitly list what the AI _cannot_ do before defining the task.
- **The Details:** This is "Negative Prompting." By banning specific bad habits (like using base64 images or inline styles), you force the AI into better architectural patterns.
- **ID Application:** Prevents the AI from generating "fixed - width" containers that break Reflow standards.
- **Action:** gemini "Design a module header. Constraints: No inline CSS, no absolute positioning, must use REM units for font - size."

### Day 24: The "Pedagogical Alignment Agent" (Bloom's Auditor)

- **The Pointer:** Use the AI to audit the "Verbs" in your learning objectives against Bloom's Taxonomy levels.
- **The Details:** This ensures that your assessments actually match the cognitive level of your objectives.
- **ID Application:** Identifies if a "Level 4: Analyze" objective is only being tested by a "Level 1: Remember" multiple - choice question.
- **Action:** read syllabus.md | gemini "Map these objectives to Bloom's Taxonomy. Flag any objectives that are under - assessed in the current quiz bank."

### Day 25: The "Synthetic SME" (Context Injection)

- **The Pointer:** Use a "Shadow SME" persona to review your instructional tone and technical accuracy.
- **The Details:** Ask the AI to act as a cynical subject matter expert to find gaps in your content logic or pedagogical flow.
- **ID Application:** Identifies where a Finance or SCM concept might be over - simplified for a graduate - level audience.
- **Action:** gemini "Review this module on the Bullwhip Effect. Act as a Supply Chain PhD and critique the technical depth of the Case Study."

### Day 26: The "Accessibility Unit Test" (Failure Injection)

- **The Pointer:** Deliberately introduce a "break" in a component and ask the AI to find it using your skills.
- **The Details:** This tests your AltText_Reviewer.md or WCAG_Audit.md skill files for accuracy. If the AI can't find the "planted" error, your skill file needs refining.
- **ID Application:** Ensures your automated audit tools are actually working before running them on production Canvas pages.
- **Action:** gemini "I have added a hidden accessibility error to this code. Use the AltText_Reviewer skill to identify it."

### Day 27: The "Vibe - to - SOP" (Auto - Documentation)

- **The Pointer:** Convert a "Successful Vibe" session into a Standard Operating Procedure (SOP) immediately.
- **The Details:** Use the /path command to save the step - by - step logic of a win as a new skill in 02_Skills.
- **ID Application:** Turns a complex, one - off interactive build into a repeatable template for the rest of the Digital Learning team.
- **Action:** gemini "Summarize our workflow for creating this interactive timeline. Format it as an SOP and save it to 02_Skills/Rise_Timeline_Builder.md."

### Day 28: The "Ergonomic Flow" Persona 

- **The Pointer:** Instruct the AI to suggest "Low - Strokes" alternatives for complex tasks when physical fatigue is present.
- **The Details:** This is "Energy Mapping." By disclosing your physical constraints, the AI can pivot from "Code this from scratch" to "Find a library / utility that handles 90% of the work."
- **ID Application:** Focus on systemic efficiency. Instead of custom CSS, use pre - built Tailwind classes to minimize typing.
- **Action:** gemini "I have high physical fatigue today. Suggest the most keystroke - efficient way to build this interactive grid."

### Day 29: The "Legacy - to - Logic" Pipeline (Syllabus Migration)

- **The Pointer:** Use the CLI to strip formatting from old (2024 / 2025) courses and convert them into structured JSON "Skeletons" for 2026.
- **The Details:** This is "Technical Debt Management." By removing "baked - in" styles from old Canvas pages, you create a clean slate for modern, accessible UT templates.
- **ID Application:** Mass - converts legacy SCM courses into a standardized data format.
- **Action:** read legacy_page.html | gemini "Strip all inline styles and fixed - width containers. Output the content as a clean JSON object with keys for 'Objectives', 'Content', and 'Tasks'."

### Day 30: The "Course - Specific Memory" Anchor (NotebookLM Bridge)

- **The Pointer:** Use the new Gemini / NotebookLM integration to keep "Course - Specific Context" persistent across months of development.
- **The Details:** Instead of re - uploading the same 200 - page SCM 571 handbook every session, "Anchor" the chat to a persistent Notebook.
- **ID Application:** Ensures every "Vibe" session for a specific course is grounded in the _exact_ SME voice and project history of that course.
- **Action:** [Toggle Notebook: SCM 571 Handbook] | gemini "Based on the BZAN 503 prep notes in this notebook, draft the Week 1 welcome announcement."

### Day 31: The "Reparse Point" Audit (Junction Repair)

- **The Pointer:** Use the CLI to identify and repair broken Directory Junctions in your configuration folders.
- **The Details:** In complex multi - drive or cloud - synced environments (OneDrive / Google Drive), symbolic links or junctions can break if the target path shifts. Use `cmd /c dir /al` to expose hidden reparse points that standard file explorers often ignore.
- **ID Application:** Rapidly fix Obsidian vaults or local development environments that "fail to load" due to missing plugin paths without needing to re - install or lose data.
- **Action:** `cmd /c dir /al /s` | gemini "Identify any broken junctions in this directory and suggest the rmdir / mklink /j repair command."

---

**Backlink:** [[00_Root_MOC|Root MOC]]




# Vibe Coding: Daily Strategic Pointers & Logic Log

**Tracking the journey from Natural Language to Systemic Automation.**

## 📅 Phase 1: The Foundation (Workflow & Control)

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

## 📅 Phase 2: Agentic ID Mastery (Context & Alignment)

### Day 9: The "Semantic Cross - Check" (Alignment)

- **The Pointer:** Use the CLI to verify alignment between Assessments and Learning Objectives.
- **The Details:** Feed the AI your Quiz and Objectives to find "Orphaned Objectives" (taught but not tested).
- **ID Application:** Ensures courses meet Quality Matters (QM) standards for Alignment.

### Day 10: The "Cognitive Load Audit" (Density Check)

- **The Pointer:** Use the CLI to audit the "Visual Weight" and word counts of Canvas pages.
- **The Details:** Identify walls of text or high link density that increase learner frustration.
- **ID Application:** Prompt: "Identify any section exceeding 100 words and suggest a split into a list or accordion."

### Day 11: Prompt Injection for Brand Compliance

- **The Pointer:** Feed the AI your CSS "Global Stylesheet" before asking for HTML design.
- **The Details:** Forces the AI to use local UT hex codes (Torch Orange, Smokey Grey) instead of generic Bootstrap colors.
- **ID Application:** Ensures all generated Canvas pages are unified and "on - vibe" with UT Brand Standards.

### Day 12: The "Predictive Syllabus" (Contextual Mapping)

- **The Pointer:** Use the CLI to map out a "Project Timeline" based on a single Syllabus PDF.
- **The Details:** Process deadlines and weights to predict high - workload weeks.
- **ID Application:** Suggest a "Low - Friction" design (shorter content) for weeks with massive term papers to prevent burnout.

## 📅 Phase 3: Continuous Optimization (Scale & Sustainability)

### Day 13: The "Accessibility Regression" Protocol

- **The Pointer:** Use the CLI to compare updated files against an "Accessibility Baseline."
- **The Details:** When you update a file's content, the CLI should re - run your AltText_Reviewer.md and WCAG_Audit skills automatically.
- **Action:** read updated_page.html | gemini "Check for any new accessibility violations compared to the previous version. Pay special attention to heading levels."

### Day 14: The "Synthetic Student" Simulation (Agentic UX)

- **The Pointer:** Use specific disability profiles as "Agentic Personas" to stress - test course navigation.
- **The Details:** Create personas (e.g., "Student with low - vision using a screen magnifier") and ask the AI to "navigate" your course structure.
- **Action:** Prompt: "As a student with Dyslexia, read this Module Overview. Identify the 3 most confusing sentences and re - write them for better readability."

### Day 15: The "Automated Indexing" Habit

- **The Pointer:** Use the CLI to auto - update your master_file_index.md after every major architectural change.
- **The Details:** Treat your Index as "Documentation - as - Code." Never manually update it; describe the changes to the CLI and let it maintain the directory.
- **Action:** gemini "Update the Master File Index and reorganize the Professional Development section."

### Day 16: The "Environment - Aware" Pre - Flight Check

- **The Pointer:** Force the Agent to define its "Environmental Assumptions" before outputting a single line of code.
- **The Details:** Catch missing CDNs, incorrect root IDs, or CSS conflicts by asking for an "Assumptions List" first.
- **Action:** "Before generating the React component, list the external libraries, CDN links, and HTML structure required for this to run in a Canvas context."

### Day 17: The "Full - Vault Synthesis" (MCP Integration)

- **The Pointer:** Use the Model Context Protocol (MCP) to bridge your "Second Brain" (Obsidian) directly into your CLI.
- **The Details:** Connecting your vault via the obsidian - mcp - server eliminates manual copy - pasting. The AI can now semantically search past research.
- **Action:** gemini "Based on my CPACC study notes and the AREC 342 course map, suggest 3 accessibility improvements for the Module 1 syllabus."

### Day 19: The "Agentic Git" (Instructional Assets as Code)

- **The Pointer:** Use the github - mcp - server to manage your instructional assets as versioned repositories.
- **The Details:** Treat your Canvas HTML snippets and interactives as "Instructional Software." Use the CLI to pull updates and track issues.
- **Action:** gemini "Check my GitHub repo for open issues related to 'Accessibility' and cross - reference them with my CPACC study notes."

### Day 20: The "Semantic Bridge" (Historical Knowledge Extraction)

- **The Pointer:** Use the CLI to extract "Latent Knowledge" from your 99_System/Archive to inform current projects.
- **The Details:** Your Archive is a goldmine. Use the AI to find "how we solved this in 2025" and bridge those successes into your new course builds.
- **Action:** gemini "Search the 99_System/Archive for previous EdTech Hub presentations and extract the best practices for AI Avatars to use in AREC 342."

### Day 21: The "Self - Correction Pattern" (Agentic Reflection)

- **The Pointer:** Prompt the AI to audit its own output against a specific constraint before the final reveal.
- **The Details:** Use a "Thinking" instruction: "First, identify potential accessibility errors in the proposed code. Then, provide the final corrected version."
- **ID Application:** Ensures interactive H5P or Rise - like components are checked for keyboard accessibility _during_ the generation process.
- **Action:** gemini "Create a custom video player. Before outputting the code, check if it contains any keyboard traps and verify the focus indicator contrast."

### Day 22: The "Multi - Modal Audit" (Vision - to - Text)

- **The Pointer:** Use Gemini's vision capabilities to audit visual "Brand Alignment" and "Visual Weight."
- **The Details:** Upload a screenshot of a Canvas page and ask the AI to "Describe the visual hierarchy and identify any color contrast violations based on the UT Brand Guide."
- **ID Application:** Bridges the gap between "it looks good" and "it is accessible / on - brand" for non - technical stakeholders.
- **Action:** [Upload Screenshot] | gemini "Does this layout follow the UDL principle of Reducing Distractions? Highlight any cluttered areas."

### Day 23: The "Constraint - Based Prompt" (Guardrail Logic)

- **The Pointer:** Explicitly list what the AI _cannot_ do before defining the task.
- **The Details:** This is "Negative Prompting." By banning specific bad habits (like using base64 images or inline styles), you force the AI into better architectural patterns.
- **ID Application:** Prevents the AI from generating "fixed - width" containers that break Reflow standards.
- **Action:** gemini "Design a module header. Constraints: No inline CSS, no absolute positioning, must use REM units for font - size."

### Day 24: The "Pedagogical Alignment Agent" (Bloom's Auditor)

- **The Pointer:** Use the AI to audit the "Verbs" in your learning objectives against Bloom's Taxonomy levels.
- **The Details:** This ensures that your assessments actually match the cognitive level of your objectives.
- **ID Application:** Identifies if a "Level 4: Analyze" objective is only being tested by a "Level 1: Remember" multiple - choice question.
- **Action:** read syllabus.md | gemini "Map these objectives to Bloom's Taxonomy. Flag any objectives that are under - assessed in the current quiz bank."

### Day 25: The "Synthetic SME" (Context Injection)

- **The Pointer:** Use a "Shadow SME" persona to review your instructional tone and technical accuracy.
- **The Details:** Ask the AI to act as a cynical subject matter expert to find gaps in your content logic or pedagogical flow.
- **ID Application:** Identifies where a Finance or SCM concept might be over - simplified for a graduate - level audience.
- **Action:** gemini "Review this module on the Bullwhip Effect. Act as a Supply Chain PhD and critique the technical depth of the Case Study."

### Day 26: The "Accessibility Unit Test" (Failure Injection)

- **The Pointer:** Deliberately introduce a "break" in a component and ask the AI to find it using your skills.
- **The Details:** This tests your AltText_Reviewer.md or WCAG_Audit.md skill files for accuracy. If the AI can't find the "planted" error, your skill file needs refining.
- **ID Application:** Ensures your automated audit tools are actually working before running them on production Canvas pages.
- **Action:** gemini "I have added a hidden accessibility error to this code. Use the AltText_Reviewer skill to identify it."

### Day 27: The "Vibe - to - SOP" (Auto - Documentation)

- **The Pointer:** Convert a "Successful Vibe" session into a Standard Operating Procedure (SOP) immediately.
- **The Details:** Use the /path command to save the step - by - step logic of a win as a new skill in 02_Skills.
- **ID Application:** Turns a complex, one - off interactive build into a repeatable template for the rest of the Digital Learning team.
- **Action:** gemini "Summarize our workflow for creating this interactive timeline. Format it as an SOP and save it to 02_Skills/Rise_Timeline_Builder.md."

### Day 28: The "Ergonomic Flow" Persona 

- **The Pointer:** Instruct the AI to suggest "Low - Strokes" alternatives for complex tasks when physical fatigue is present.
- **The Details:** This is "Energy Mapping." By disclosing your physical constraints, the AI can pivot from "Code this from scratch" to "Find a library / utility that handles 90% of the work."
- **ID Application:** Focus on systemic efficiency. Instead of custom CSS, use pre - built Tailwind classes to minimize typing.
- **Action:** gemini "I have high physical fatigue today. Suggest the most keystroke - efficient way to build this interactive grid."

### Day 29: The "Legacy - to - Logic" Pipeline (Syllabus Migration)

- **The Pointer:** Use the CLI to strip formatting from old (2024 / 2025) courses and convert them into structured JSON "Skeletons" for 2026.
- **The Details:** This is "Technical Debt Management." By removing "baked - in" styles from old Canvas pages, you create a clean slate for modern, accessible UT templates.
- **ID Application:** Mass - converts legacy SCM courses into a standardized data format.
- **Action:** read legacy_page.html | gemini "Strip all inline styles and fixed - width containers. Output the content as a clean JSON object with keys for 'Objectives', 'Content', and 'Tasks'."

### Day 30: The "Course - Specific Memory" Anchor (NotebookLM Bridge)

- **The Pointer:** Use the new Gemini / NotebookLM integration to keep "Course - Specific Context" persistent across months of development.
- **The Details:** Instead of re - uploading the same 200 - page SCM 571 handbook every session, "Anchor" the chat to a persistent Notebook.
- **ID Application:** Ensures every "Vibe" session for a specific course is grounded in the _exact_ SME voice and project history of that course.
- **Action:** [Toggle Notebook: SCM 571 Handbook] | gemini "Based on the BZAN 503 prep notes in this notebook, draft the Week 1 welcome announcement."

### Day 31: The "Reparse Point" Audit (Junction Repair)

- **The Pointer:** Use the CLI to identify and repair broken Directory Junctions in your configuration folders.
- **The Details:** In complex multi - drive or cloud - synced environments (OneDrive / Google Drive), symbolic links or junctions can break if the target path shifts. Use `cmd /c dir /al` to expose hidden reparse points that standard file explorers often ignore.
- **ID Application:** Rapidly fix Obsidian vaults or local development environments that "fail to load" due to missing plugin paths without needing to re - install or lose data.
- **Action:** `cmd /c dir /al /s` | gemini "Identify any broken junctions in this directory and suggest the rmdir / mklink /j repair command."

## 🛠️ Persona Anchors

- **Senior ID:** Strategic overview; focuses on UDL, QM Standards, and Term Prep deadlines.
- **Accessibility Auditor:** Technical focus on WCAG 2.1 AA, ARIA roles, and semantic HTML.
- **Vibe Coder:** Fast, iterative; focuses on clean CSS and functional React / HTML components.

## 🔗 Backlinks

- **Strategic Context:** ID_Learning_Trajectory_Roadmap
- **Tool Guide:** Gemini_CLI_Command_Explainer
- **System Manual:** workspace_technical_manual.md

**Last Updated:** April 29, 2026

