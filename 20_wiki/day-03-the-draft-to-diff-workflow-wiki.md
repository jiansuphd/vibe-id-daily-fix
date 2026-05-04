---
title: "The 'Draft-to-Diff' Workflow - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# The "Draft-to-Diff" Workflow - Pedagogical Synthesis

*Deep-dive analysis of the Draft-to-Diff precision modification workflow from Day 3.*

## ID Framework Integration

**Gagné's Fifth Event of Instruction - Providing Learning Guidance:** The Draft-to-Diff workflow operationalizes this event at the content-maintenance level. Just as learning guidance scaffolds the learner without replacing their cognitive effort, a diff scaffolds the AI's contribution without replacing the SME's instructional voice. The AI guides the remediation; the expert retains authorship.

**Quality Matters Standard 8.2 - Accessibility:** "The course design facilitates readability and minimizes distractions." Total rewrites introduce variability in tone, structure, and terminology that creates unnecessary cognitive load for learners. The Draft-to-Diff approach preserves the structural consistency that QM requires while still achieving compliance improvements.

**UDL Principle 1 - Multiple Means of Representation:** The diff workflow is the preferred delivery mechanism for adding UDL scaffolds to existing content. Rather than rewriting an entire page, a diff adds a text alternative here, a glossary tooltip there - layering representation options onto existing content without disrupting the primary instructional flow.

**Cognitive Load Theory - Extraneous Load Reduction:** A total rewrite forces the reviewer to re-read the entire document to discover what changed. This is pure extraneous cognitive load - mental effort that contributes nothing to instructional quality. A diff eliminates this by making change explicit and bounded. The reviewer's cognitive resources are directed entirely at evaluating the change, not finding it.

## Technical Implementation

The Draft-to-Diff workflow uses three prompt patterns depending on the task type:

### Pattern 1 - Accessibility Patch

Use when: fixing WCAG violations in existing HTML without touching content.

```
"Review the following HTML. Identify all WCAG 2.2 Level AA violations.
For each violation:
1. Cite the specific WCAG criterion number (e.g., 1.3.1 Info and Relationships)
2. Show only the corrected lines in a diff block:
   - lines prefixed with - are the originals to remove
   + lines prefixed with + are the replacements to add
Do not modify any paragraph text, heading copy, or image src attributes."
```

**Example output format the AI should produce:**
```diff
- <table>
+ <table>
+   <caption>Weekly module completion rates by student cohort</caption>
    <thead>
-     <tr><th>Week</th><th>Rate</th></tr>
+     <tr><th scope="col">Week</th><th scope="col">Rate</th></tr>
    </thead>
```

### Pattern 2 - UDL Scaffold Addition

Use when: adding representation scaffolds (glossary links, guided notes, alt text) to existing content without altering the academic prose.

```
"Read the following lecture transcript. Identify three terms that graduate
students encountering this topic for the first time would likely need defined.
For each term, show only the diff required to wrap it in a <dfn> tag with
a title attribute containing a one-sentence definition.
Do not change any other text."
```

### Pattern 3 - Version Delta Audit

Use when: comparing a 2025 syllabus to its 2026 revision to document all changes for compliance records.

```
"Compare the following two syllabus versions.
Output a structured diff organized by section:
- Section name
- Lines removed (prefix with -)
- Lines added (prefix with +)
- Pedagogical rationale for each change (one sentence)
Do not summarize sections that are identical."
```

## Advanced Applications

**Git as Instructional Diff Tool:** The most powerful implementation of Draft-to-Diff is using Git itself as the diff engine. When course content is stored in a version-controlled repository, `git diff` produces a machine-readable record of every change across every course revision. A QM reviewer or accessibility auditor can inspect the exact delta between any two course versions without manual comparison.

**Staged Diff Reviews:** For large courses with multiple stakeholders (faculty, accessibility officer, instructional team), apply diffs in stages. Stage 1: accessibility fixes only (no content changes). Stage 2: UDL scaffold additions (no structural changes). Stage 3: instructional improvements (flagged for faculty review). Each stage is a discrete commit, reviewable in isolation.

**The Diff as Documentation:** Every diff-based change becomes a self-documenting audit trail. The commit message + the diff = a complete record of what changed, why, and when. This is the operational foundation for ADA compliance documentation - the diff *is* the evidence.

## Common Pitfalls

**Accepting total rewrites:** The most common failure mode. If the AI returns a complete new version of a document when you asked for a diff, reject it and re-prompt with the Pattern 1 or Pattern 2 templates above. A total rewrite is not a diff regardless of how similar it looks.

**No scope constraint in the prompt:** Without explicitly stating "Do not modify [X]," the AI will improve everything it notices. Add hard exclusion clauses: "Do not modify paragraph text," "Do not change heading copy," "Do not alter any formula or equation."

**Applying diffs without review:** A diff from an AI is a proposal, not a command. Each `+` line requires human verification before it enters production. The speed gain from a diff is in the review stage, not in skipping it.

**Single-pass audits:** One diff pass catches one category of issues. Run separate diff passes for: (1) WCAG structural issues, (2) color contrast, (3) reading level, (4) UDL gaps. Combining all into one pass produces a diff that is too large to review efficiently.

---
**Reference:** [Original Daily Pointer](../10_dailies/day-03-the-draft-to-diff-workflow.md)
