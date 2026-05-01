# SOP: Synthetic_Student_Simulator

## Overview
An agentic UX testing workflow that uses "Synthetic Student" personas to simulate the experience of navigating course instructions, identifying potential friction points and areas of confusion.

## Objectives
- Reduce student support tickets by pre-emptively identifying unclear instructions.
- Ensure that technical directions (e.g., "Upload your ZIP file here") are unambiguous.
- Test for "Instructional Friction" across diverse learner personas.

## Procedure

### 1. Persona Definition
- Define the persona characteristics (e.g., "Novice Learner with low tech-fluency," "Advanced Professional with limited time").
- Assign a "Confusion Threshold" to each persona.

### 2. Instruction Injection
- Provide the full text of a course assignment, discussion prompt, or navigation guide.

### 3. Vibe Coding Implementation (Gemini CLI)
Use the following prompt pattern to run the simulation:

```bash
gemini "Adopt the persona of [Learner Persona].
Read these instructions: [Instruction Text]
1. List 3 questions you would have before starting this task.
2. Identify 1 step that feels 'vague' or 'overwhelming'.
3. Rewrite the instructions to be 100% clear for your specific persona."
```

### 4. Friction Mitigation
- Refactor the instructions based on the synthetic feedback.
- Use "Formatting Anchors" (bolding, numbered lists, specific naming conventions) to reduce cognitive load.

## Maintenance
- Update personas every semester based on actual student feedback and demographic data.

---
**Backlinks:** [Root MOC](../../root_MOC.md) | [Meta MOC](../00_meta_MOC.md)
