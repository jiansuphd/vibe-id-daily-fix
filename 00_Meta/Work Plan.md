---
title: VibeID Daily - Work Plan
date: 2026-04-29
tags:
  - work-plan
  - id
  - vibe-coding
  - roadmap
---

# 🛠️ VibeID Daily: Implementation Roadmap

> [!info] Status: Phase 3 - Automation & Agentic Workflows
> Moving from manual content digitization to automated aggregation and skill-based auditing.

## 🎯 Project Vision
Create a front-facing dashboard that aggregates daily strategic "pointers" for Instructional Designers, helping them master agentic workflows, prompt engineering for pedagogy, and automated ID infrastructure.

## 🚦 System Health
- **Build**: Passing (Local Eleventy build successful).
- **Wiki**: Synthesis of Phases 1-3 complete.
- **Deployment**: GitHub Actions configured.

## 🗺️ Detailed Work Plan

### Phase 1: Infrastructure & The Dashboard (Completed)
**Goal**: Establish the repository as a Knowledge Compiler and set up the Eleventy dashboard.
*   [x] **Repository Pivot**: Overhaul README and .gitignore to reflect the ID focus.
*   [x] **Legacy Cleanup**: Removed legacy files.
*   [x] **Framework Setup**: Eleventy (11ty) configured for "Modern Tech Dashboard" aesthetic.
*   [x] **MOC Update**: Ensure all Maps of Content are synchronized.

### Phase 2: Content Digitization (Completed)
**Goal**: Convert raw logs into structured daily issues and wiki entries.
*   [x] **ID Persona Anchors**: Formalize "Senior ID" and "Accessibility Auditor".
*   [x] **Log-to-Post Pipeline**: Created parsing script in `00_Meta/scripts/`.
*   [x] **Eleventy Fixes**: PathPrefix and URL filters configured.
*   [x] **Wiki Synthesis**: Synthesized deep-dives for core ID strategic pointers in `20_Wiki`.
*   [x] **Branding Selection**: **VibeID Daily** officially selected.

### Phase 3: Automation & Agentic Workflows (Active)
**Goal**: Automate the generation of daily pointers and ID-specific audits.
*   [x] **The "Cyborg" Script**: Created `00_Meta/scripts/cyborg_aggregator.js` to aggregate ID trends.
*   [ ] **Skill Library**: Build out `00_Meta/skills/` with SOPs (e.g., `AltText_Reviewer.md`, `Syllabus_Migration.md`).
*   [ ] **GitHub Actions Orchestration**: Automated daily builds and periodic wiki maintenance lints.

### Phase 4: Scale & Sustainability
*   [ ] **Cross-Vault Synthesis**: Integrate with MCP servers.
*   [ ] **Community Feedback Loop**: (Optional) RSS/Email distribution.

---

**Backlink:** [[00_Root_MOC|Root MOC]]
