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

## Content Architecture: Three Layers, One Pipeline

The content system has three distinct layers. Understanding how they relate prevents confusion about why files exist in multiple folders.

```
10_dailies/          →   parse_dailies.js   →   00_meta/src/posts/   →   _site/
(source of truth)        (transform step)        (build artifact)         (output)

20_wiki/                                                                (never published)
(private reference layer)
```

### `10_dailies/` — Source of Truth

The vault-native daily post files. Written in Obsidian-compatible Markdown.

- **You edit these.** Commit here, push once — done.
- Obsidian-style formatting: `# Day N` H1 heading, `**Backlink:**` footer line, smart quotes in titles
- Front matter has `date:` for scheduling and `tags:` but no `layout:`
- **Git-tracked.** This is the canonical record.

### `00_meta/src/posts/` — Build Artifact

Generated automatically by `parse_dailies.js` as part of every build. **Never edit these directly** and **not committed to git.**

Transformations applied during parse:
- `layout: post.njk` injected into front matter
- Leading `# Day N` H1 stripped from body (rendered by the template instead)
- `**Backlink:**` footer line stripped
- Smart quotes in titles converted to straight quotes (YAML compatibility)

Because `npm run parse` is wired as a `prebuild` hook in `package.json`, this folder is always regenerated before Eleventy runs — locally and in CI.

### `20_wiki/` — Private Reference Layer

Separate files entirely. Never published to the live site. Obsidian knowledge base only.

- Filename pattern: `day-NN-...-wiki.md` (`-wiki` suffix distinguishes from dailies)
- Longer synthesis format: framework tables, WCAG/Bloom's alignment, agentic CLI prompts
- No `date:` front matter — Eleventy never picks these up
- **Git-tracked.** Permanent vault reference.

### Why This Structure?

| Concern | Solution |
|---|---|
| Single source of truth | Edit `10_dailies/` only |
| Obsidian compatibility | `10_dailies/` stays in raw vault format |
| Eleventy compatibility | `parse_dailies.js` transforms for SSG |
| No duplicate commits | `src/posts/` is in `.gitignore` |
| CI works without commits | `prebuild` hook regenerates posts on every deploy |
| Private deep-dives | `20_wiki/` stays in vault, never hits the web |

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

*Last Updated: May 3, 2026*

**Backlinks:** [Root MOC](../root_MOC.md)
