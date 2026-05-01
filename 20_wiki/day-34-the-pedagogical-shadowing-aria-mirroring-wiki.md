---
title: "The Pedagogical Shadowing (ARIA-Mirroring) - Concept Wiki"
tags: [wiki, concept, accessibility, aria, instructional-design]
---

# The Pedagogical Shadowing (ARIA-Mirroring) - Pedagogical Synthesis

*Expanded concepts from the Day 34 daily pointer.*

## Core Concept

Pedagogical Shadowing separates content generation from accessibility annotation. Instead of generating "accessible HTML" in one pass, you build in two layers: first the visible content, then a dedicated "shadow pass" that adds ARIA roles, labels, and screen-reader-only text.

## Two-Pass Build Model

| Pass | Prompt Goal | Output |
|---|---|---|
| Pass 1 — Content | Generate semantic HTML structure | `<section>`, `<h2>`, `<ul>` with content |
| Pass 2 — Shadow | Add ARIA layer to existing code | `aria-label`, `role`, `aria-describedby`, `<span class="sr-only">` |

## ID Application

- **SCM data visualizations:** Charts and tables get a hidden `<caption>` and `aria-describedby` pointing to a prose summary
- **Canvas interactive elements:** Accordions, tabs, and modals get role and keyboard navigation annotations
- **Screen magnifier optimization:** Focus indicators and region labels added without cluttering the visual layout

## WCAG 2.2 Alignment

- **1.3.1 Info and Relationships** — Structure conveyed via ARIA when CSS-only
- **4.1.2 Name, Role, Value** — Every interactive element has a programmatic name
- **2.4.6 Headings and Labels** — Descriptive ARIA labels for complex components

---
**Reference:** [Original Pointer](../10_dailies/day-34-the-pedagogical-shadowing-aria-mirroring.md)
