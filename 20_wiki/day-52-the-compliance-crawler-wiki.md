---
tags:
  - wiki
  - vibe-coding
  - phase-5
  - day-52
---

# Day 52: The 'Compliance Crawler' (Institutional Scrutiny) — Wiki

## Core Concept

Build an agent that crawls a course shell for policy non-compliance: syllabus requirements, grade policies, academic integrity statements. Every institution has policies that are often missed under deadline pressure. The crawler is a pre-submission checklist agent that reads the policy doc and the course shell simultaneously.

## ID Framework Alignment

| Dimension | Application |
|-----------|-------------|
| **Design Principle** | The 'Compliance Crawler' |
| **Phase** | Phase 5: Institutional Leadership & AI Governance |
| **Key Skill** | compliance, policy, audit |
| **AS Accommodation** | Low-keystroke or voice-driven where possible |

## Agentic CLI Prompt

```bash
gemini --system ./04_Policy/UTA_Syllabus_Requirements.md "Audit this syllabus. List every required element that is missing or incomplete. Output as a structured checklist."
```

## Key Terms

- **Compliance Crawler:** The core technique or system described in this entry.
- **Phase 5:** Institutional Leadership & AI Governance — the overarching theme of Days 101–100.
- **Pointer:** The strategic framing that makes this technique generalizable beyond its immediate application.

## Backlinks

- [20 Wiki MOC](20_wiki_MOC.md)
- [Root MOC](../root_MOC.md)
- [Source Daily](../10_dailies/day-52-the-compliance-crawler.md)
