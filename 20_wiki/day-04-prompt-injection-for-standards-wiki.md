---
title: "'Prompt Injection' for Standards - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# "Prompt Injection" for Standards - Pedagogical Synthesis

*Deep-dive analysis of the Grounded Logic / Prompt Injection workflow from Day 4.*

## ID Framework Integration

**Gagné's Second Event of Instruction - Informing the Learner of the Objective:** Just as an effective lesson opens by stating what the learner will be able to do, Prompt Injection states what the AI will be held to before it begins. The injected document is the AI's explicit performance standard - concrete, measurable, and non-negotiable.

**Quality Matters Standard 4.1 - Instructional Materials Contribute to Learning Objectives:** QM requires that every instructional material directly supports the stated objectives. An AI without a grounded template cannot guarantee QM alignment because it has no access to the specific objectives in your course design. Prompt injection solves this by giving the AI the QM rubric or course framework as a reference artifact before generation begins.

**UDL Principle 2 - Multiple Means of Action and Expression:** Prompt injection operationalizes UDL at the authoring level. When an accessibility standards document is injected before content generation, the result inherently includes multiple representation options - because the AI is explicitly instructed to follow them. UDL ceases to be a post-hoc audit and becomes a pre-wired constraint.

**Cognitive Load Theory - Reducing Extraneous Load on the ID:** Without prompt injection, the Senior ID carries the full cognitive burden of remembering and checking every institutional standard. With injection, that burden is externalized to the document reference. The ID's working memory is freed for higher-order evaluation (Does this meet the SME's learning goals?) rather than lower-order recall (What was the correct font size for headings?).

## Technical Implementation

Three prompt injection patterns cover the majority of ID use cases:

### Pattern 1 - Syllabus Template Injection

Use when: drafting or reformatting any course syllabus to enforce institutional policy compliance.

```
"You are a Senior ID. Before generating any output, read @syllabus_standard_2026.md.
This document defines the required sections, mandatory policy language, and formatting
rules for all course syllabi.

Using the provided SME notes below, draft the 'Course Policies' section.
Rules:
- Every mandatory section listed in the template MUST appear in your output.
- Do not paraphrase the Disability Services statement - use the exact template language.
- Flag any SME note that conflicts with policy language rather than silently overriding it.

[paste SME notes here]"
```

**Why the explicit flag instruction matters:** Without it, the AI will silently choose between the SME note and the policy language, often picking whichever is longer or more recent in context. The flag rule makes the conflict visible so the ID can make the decision.

### Pattern 2 - WCAG Audit Injection

Use when: auditing any HTML page for accessibility compliance against a specific, curated standard.

```
"You are an Accessibility Auditor. Before auditing, read @wcag_for_id_cheatsheet.md.
This document contains the specific WCAG 2.2 Level AA criteria that apply to LMS content.

Audit the following HTML page against ONLY the criteria listed in the cheatsheet.
For each violation found:
1. Cite the WCAG criterion number and name from the cheatsheet
2. Quote the failing code (max 3 lines)
3. Provide the corrected replacement code
4. Do not flag criteria not listed in the cheatsheet.

[paste HTML here]"
```

**Key design principle - scope restriction:** The instruction "ONLY the criteria listed" prevents the AI from auditing against WCAG 3.0 draft criteria or deprecated WCAG 2.0 requirements. Your cheatsheet is the authority; the AI's training data is not.

### Pattern 3 - Brand Compliance Injection

Use when: generating HTML components that must match institutional visual standards.

```
"You are a front-end developer working within a strict brand system.
Before writing any code, read @brand_guide.md. This defines:
- Approved color hex codes (use only these)
- Typography rules (font family, size scale, weight)
- Component patterns (button styles, card layouts, link styles)

Generate an HTML/CSS module card component for an online course.
Constraints:
- Use only hex codes defined in the brand guide
- Class names must follow the naming conventions in the brand guide
- Flag any design request that cannot be fulfilled within the brand guide constraints

[describe the component here]"
```

## Advanced Applications

**Layered Injection - Multiple Reference Documents:** For complex tasks, inject multiple documents simultaneously. A full course page build might inject: (1) the syllabus template, (2) the brand guide, and (3) the WCAG cheatsheet. Each document constrains a different dimension of the output. The AI processes all three as concurrent constraints, and the output is compliant across all three standards simultaneously.

Example layered prompt structure:
```
"Read these three reference documents before proceeding:
@syllabus_standard_2026.md - institutional policy requirements
@brand_guide.md - visual design constraints
@wcag_for_id_cheatsheet.md - accessibility compliance requirements

Now: [task description]"
```

**Living Reference Files:** Treat your injected reference files as versioned assets. When institutional standards change (new Disability Services language, updated WCAG criteria, revised brand colors), update the reference file - not every prompt you use. All future injection sessions automatically inherit the updated standard. This is "Infrastructure as Documentation."

**SME Voice Preservation via Injection:** Inject the SME's original transcript or lecture notes alongside the institutional template. The two-document injection constrains the AI to use the SME's vocabulary and examples while enforcing policy structure. Result: a syllabus that sounds like the faculty member wrote it, structured exactly as the institution requires.

## Common Pitfalls

**Injecting outdated documents:** The most common failure. If your injected `syllabus_standard_2026.md` was last updated in 2024, the AI will enforce 2024 standards with complete confidence. Maintain a version date in the filename or in the document's frontmatter and audit the reference library at the start of each term.

**Assuming injection equals reading:** Large language models process the injected document but may prioritize the most recent content in context when there is a conflict. Place the injected document reference at the beginning of the prompt - before the task description - so it occupies high-weight context position.

**No conflict escalation clause:** Without an explicit instruction to flag conflicts between the SME content and the injected standard, the AI will silently resolve conflicts on its own, often incorrectly. Always include: "If the SME notes conflict with the reference document, flag the conflict rather than resolving it yourself."

**Single document for all cases:** A 200-page institution policy PDF is not an effective injection document. Extract only the criteria relevant to the task into a lean reference file. The WCAG cheatsheet should be 1-2 pages of the 10 criteria most relevant to LMS content - not all 87 WCAG 2.2 success criteria. Precision in the reference document produces precision in the output.

---
**Reference:** [Original Daily Pointer](../10_dailies/day-04-prompt-injection-for-standards.md)
