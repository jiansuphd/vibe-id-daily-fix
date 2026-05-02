# Vibe Tech Stack: The Anatomy of Vibe ID Daily

Based on the repository language breakdown, this project follows a high-efficiency Static Site Generator (SSG) pattern using **Eleventy (11ty)**.

---

## 1. Nunjucks (51.7%) — The Blueprint

Nunjucks is a templating engine for JavaScript. It acts as the "glue" between raw data (Markdown files) and the final website.

**Why the high percentage?** Layouts, components (like the LOC/REL/AUTH HUD bar), and page structures are all written in `.njk` files.

**Key Feature:** Template inheritance. The header and footer are defined once in `base.njk` — every other page extends it.

**Vibe Coding Use Case:** Nunjucks shortcodes allow a simple tag like `{% vibePointer "Day 1" %}` to automatically expand into a complex, styled HTML block.

---

## 2. CSS (21.1%) — The Aesthetic

This is where the Vibe ID Daily look lives.

- High-contrast purples, neon cyans, and dark backgrounds
- CSS custom properties (`--accent`, `--cyan`, `--text`) for consistent theming
- `@media` breakpoints for mobile responsiveness
- File: `00_meta/src/css/style.css`

---

## 3. JavaScript (19.3%) — The Interaction

Runtime behavior for the static HTML.

- Eleventy filters and collections defined in `.eleventy.js`
- Future-date filter (`post.date <= now`) gates daily post publishing
- `parse_dailies.js` — syncs source vault files to Eleventy post format
- Link checker scripts in `scripts/`

---

## 4. Python (7.9%) — The Automation

The "compiler" layer of the Knowledge Compiler.

- Batch front matter injection into source vault files
- Privacy cleanup scripts (bulk find/replace across the repo)
- Date sequencing for the 100-day publishing schedule
- Scripts live in `00_meta/scripts/`

---

## Vibe Coding with Nunjucks

When adding a new section to the site, you edit a Nunjucks template — not raw HTML.

**Example: The HUD Info Bar**

To change `LOC EARTH_01` site-wide, you edit one `.njk` file:

```njk
<div class="hud-metrics">
  <span class="metric">
    <span class="metric-label">LOC</span>
    {{ location | default('EARTH_01') }}
  </span>
  <span class="metric">
    <span class="metric-label">REL</span>
    {{ date }}
  </span>
  <span class="metric">
    <span class="metric-label">AUTH</span>
    {{ author }}
  </span>
</div>
```

The value is defined once — every page that extends `base.njk` inherits it automatically.

---

*Last Updated: May 2, 2026*

**Backlinks:** [Root MOC](../root_MOC.md)
