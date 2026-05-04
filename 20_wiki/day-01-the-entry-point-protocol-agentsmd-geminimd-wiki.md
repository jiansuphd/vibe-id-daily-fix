---
title: "The 'Entry Point' Protocol (AGENTS.md / GEMINI.md) - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# The "Entry Point" Protocol - Pedagogical Synthesis

*Deep-dive analysis of the GEMINI.md mission briefing concept from Day 1.*

## ID Framework Integration

The Entry Point Protocol maps directly to **Gagné's First Event of Instruction: Gaining Attention**. Just as an ID designs a course opening to orient and prime the learner before content begins, GEMINI.md orients the AI before any work begins. The analogy is precise - both are zero-cost, high-leverage interventions at the point of entry that determine the quality of everything that follows.

It also enforces **Quality Matters Standard 1.1**: "The course instructions make clear how to get started and where to find various course components." For the AI agent, GEMINI.md is that getting-started document. Without it, the AI must infer context from each individual prompt - the equivalent of a course with no introduction, no syllabus, and no learning objectives.

**UDL Connection:** The protocol embodies UDL Principle 3 (Multiple Means of Engagement) at the system level. By embedding pedagogical scaffolds into the environment itself (the GEMINI.md file), you reduce the motivational and cognitive effort required to maintain instructional quality across every AI interaction. The scaffold is architectural, not manual.

**Bloom's Taxonomy alignment:** The protocol operates at the **Apply** level for the AI (applying known institutional standards to new tasks) and at the **Evaluate** level for the Senior ID (evaluating whether the AI's output meets those standards before it reaches a learner or stakeholder).

## Technical Implementation

GEMINI.md is a plain Markdown file placed in the repository root. The Gemini CLI reads it automatically at startup. Effective implementation requires four sections:

### 1. Project Architecture
Tell the AI what folders exist and what each one contains. Without this, the AI guesses at structure and may create files in the wrong location.

```markdown
## Architecture
- 10_dailies/: Raw daily notes. Primary source of truth. Do not modify.
- 20_wiki/: Synthesis pages. Create and update these.
- 00_meta/: Config and scripts. Modify only when instructed.
```

### 2. Voice and Persona
Define the behavioral role explicitly. "Be professional" is too vague. Specify the audience, the tone, and the non-negotiables.

```markdown
## Voice
Act as a Senior Instructional Designer. Maintain an authoritative,
evidence-based tone focused on institutional scale. Be direct.
Do not hedge pedagogical recommendations.
```

### 3. Standards (by name and version)
Cite frameworks by their exact name and version so the AI cannot hallucinate compliance.

```markdown
## Standards
- Pedagogical: Bloom's Taxonomy (Anderson & Krathwohl, 2001), Quality Matters SRS
- Accessibility: WCAG 2.2 AA (not "accessibility best practices" - cite the standard)
- Formatting: Spaced hyphens ( - ), not em dashes. No wikilinks.
```

### 4. Operational Procedures
Define how to handle the three most common request types. This prevents the AI from inventing its own workflow.

```markdown
## Operations
When asked to Ingest a source: read it, create a wiki page, update the MOC, log the action.
When asked to Lint: check links, check MOC accuracy, check ops log format.
When asked to Query: search wiki first, synthesize, file new synthesis back into wiki.
```

## Advanced Applications

**Living Document Pattern:** GEMINI.md should be version-controlled like code. Treat it as a manifest. When institutional standards update (a new QM edition, a WCAG version bump), update GEMINI.md in a dedicated commit with a message like `standards: update to WCAG 2.2 from 2.1`. Every AI session after that commit automatically operates under the new standard.

**Multi-Persona Pattern:** For projects with multiple roles (Senior ID, Accessibility Auditor, SME Reviewer), keep a shared GEMINI.md for project-wide rules and a separate `ID_Personas.md` for role-specific prompt prefixes. The base briefing anchors the environment; the persona file anchors the session role.

**The Zero-Shot Grounding effect:** When the AI reads GEMINI.md before your first prompt, it arrives at your question already contextualized. You can ask "Review this syllabus" and receive a QM-aligned, Bloom's-ordered, WCAG-aware response without a single additional instruction. This is the shift from a Chat model to an Environment model.

## Common Pitfalls

**Too vague:** "Be helpful and professional" gives the AI no actionable constraints. Specify frameworks by name and version. "Follow WCAG 2.2 AA" is actionable. "Be accessible" is not.

**Too long:** A GEMINI.md over 300 lines consumes significant context window space on every session. Prioritize the 10 most critical constraints. If a rule has not affected output in 10 sessions, remove it.

**Set and forget:** An outdated GEMINI.md is worse than no GEMINI.md - it confidently enforces the wrong standards. Review it when you update any referenced framework or when you notice the AI consistently ignoring a rule (usually means the rule is contradicted elsewhere in the file).

**No architecture section:** The most common omission. Without it, the AI creates files wherever it decides is logical. After 20 sessions, your vault structure becomes inconsistent.

---
**Reference:** [Original Daily Pointer](../10_dailies/day-01-the-entry-point-protocol-agentsmd-geminimd.md)
