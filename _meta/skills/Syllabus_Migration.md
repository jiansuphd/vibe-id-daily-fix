# SOP: Syllabus_Migration

## Overview
A strategic workflow for migrating traditional, document-based syllabi into modular, interactive course structures within a Learning Management System (LMS) or digital dashboard.

## Objectives
- Extract core pedagogical data points (LOs, Schedule, Policies) from legacy documents.
- Transform static text into interactive, environment-aware components.
- Ensure consistency across modular course units.

## Procedure

### 1. Document Deconstruction
- **Identify Core Components**: LOs, Weekly Schedule, Grading Rubrics, and University Policies.
- **Categorization**: Distinguish between "Static" content (policies) and "Dynamic" content (weekly activities).

### 2. Semantic Mapping
- Map each Learning Objective to specific modules and assessments.
- Use a "Skeleton-First" approach to build the course shell before injecting detailed content.

### 3. Vibe Coding Implementation (Gemini CLI)
Use the following prompt pattern to automate the extraction and transformation:

```bash
gemini "Analyze the attached syllabus.
1. Extract the weekly schedule into a JSON format.
2. Identify Learning Objectives and map them to the corresponding weeks.
3. Suggest 3 interactive activities that align with the LO for Week [X]."
```

### 4. Modular Injection
- Inject the extracted JSON into the dashboard's data store or LMS module templates.
- Create "Context Anchors" (e.g., `LO_Week_01.md`) to guide the AI in future content generation for that specific unit.

## Maintenance
- Audit migrated syllabi each semester for broken links or outdated policy references.
- Update mapping logic as course Learning Objectives evolve.

---
**Backlinks:** [Root MOC](../../root_MOC.md) | [Meta MOC](../_meta_MOC.md)
