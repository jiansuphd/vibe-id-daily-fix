---
title: "The Course-as-API Concept - Concept Wiki"
tags: [wiki, concept, instructional-design, automation, data-architecture]
---

# The Course-as-API Concept - Pedagogical Synthesis

*Expanded concepts from the Day 36 daily pointer.*

## Core Concept

Treat each course module as a queryable API endpoint. When course content is structured as indexed data (JSON, Markdown with frontmatter, Master File Index), an AI agent can "query" the course architecture the way a developer queries a REST API.

## The Master File Index as a Database

| Field | SQL Analogy | ID Content |
|---|---|---|
| `module_id` | Primary Key | `MOD-3`, `MOD-5` |
| `bloom_level` | Column | `Apply`, `Analyze` |
| `udl_principle` | Column | `Representation`, `Engagement` |
| `has_case_study` | Boolean | `true` / `false` |
| `cognitive_load_score` | Integer | `1–10` |

## Sample Queries (Natural Language → AI)

- *"What is the average cognitive load score of Module 3 vs Module 5?"*
- *"Identify any modules missing a Real-World Application case study."*
- *"List all pages where Bloom Level is 'Remember' — these are candidates for redesign."*

## ID Application

- Enables systematic QA across an entire course without opening each page manually
- Supports data-driven course architecture decisions
- Scales to multi-course programs (BZAN 503, SCM 571) managed from a single index

---
**Reference:** [Original Pointer](../10_dailies/day-36-the-course-as-api-concept.md)
