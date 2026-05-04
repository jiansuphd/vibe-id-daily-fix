---
title: "The 'Skeleton-First' Prompt (Architectural Integrity)"
date: 2026-04-01
tags: [issue, vibe-coding]
---

**The Pointer:** Demand a project architecture or a "Plan" before any code or content is generated.

## The Details

In the initial stages of any complex instructional design project, the most common pitfall is the rush to generate "content." Whether you are building a module page, a technical quiz, or a React-based interactive component, diving straight into the drafting phase often leads to a total collapse in instructional logic. Without a predefined structure, the AI is forced to make assumptions about your course's hierarchy, resulting in "hallucinated" alignment or inconsistent pedagogical flow. This creates "Instructional Debt" - the accumulation of poorly structured content that requires significant manual intervention to repair later.

The "Skeleton-First" Prompt is a mandatory guardrail for Systemic Engineering. It requires the AI to output a high-level plan - typically in the form of a file tree, a JSON schema, or a nested list - before it is allowed to produce a single word of student-facing text. This phase forces the model to reconcile your current request with the mission briefing established in Day 1 (GEMINI.md). By requesting a `/plan` first, you are requiring the system to "think" about the structural relationships within the course before it commits to the details.

### The Mechanics of Structural Planning

When you prompt for a skeleton, you are establishing an Instructional Architecture. This is achieved by using specific CLI commands or explicit directives such as: `"Provide a file tree and a module map for this 15-week term before generating content."`

This approach moves the workflow from a "reactive" state (correcting errors in a completed wall of text) to a "proactive" state (verifying a high-level map). It is significantly more efficient to refine a list of fifteen headers than it is to re-edit fifteen pages of content. By establishing the "Skeleton," you create a technical contract between your instructional intent and the AI's output. If the skeleton is aligned, the subsequent content will follow the same logical path. This minimizes unnecessary iteration and ensures that the final output is "Born Accessible" and operationally sound.

## ID Application: Hierarchy & Bloom's Alignment

**Module Mapping:** Before building out any course module, demand a map that shows how the Learning Objectives (LOs) relate to the proposed activities. A Skeleton-First prompt might look like: `"Map out Week 4. Show me the relationship between the core objective and the final case study before we write the page content."`

**Taxonomy Verification:** The skeleton allows for a "Cognitive Audit" at the earliest possible stage. You can verify that the cognitive verbs in your module map are progressively increasing according to Bloom's Taxonomy without being distracted by the prose of the content.

**Quality Matters (QM) Alignment:** By viewing the "Skeleton" of an assignment alongside the rubric, you can ensure that every point value is accounted for and that the instructions are logically sequenced. This ensures that QM standards for clarity are baked into the infrastructure before any content is written.

## Strategic Impact: Reducing Rework

The Skeleton-First approach is your primary defense against project drift. As a Senior ID, your goal is to ensure institutional scalability. A course built on a solid skeleton can be easily updated, migrated, or audited by other members of the instructional team. By prioritizing structure over speed, you drastically reduce the overhead of long-form editing and manual correction. You are no longer "fixing" content - you are Orchestrating it.

## Try This Today

Take a complex task (like a syllabus update or a new interactive build). Instead of asking the AI to "do it," ask it to:

> `"Outline the 5 key structural components of this task and provide a file tree for how they should be organized."`

Do not let it proceed until that skeleton is 100% correct.

---
**Backlink:** [Dailies MOC](10_dailies_MOC.md)
