---
title: "Phase 2 Tutorial - Content Digitization"
date: 2026-05-04
tags:
  - tutorial
  - phase-2
  - beginner
  - content
  - pipeline
---

# Phase 2 Tutorial: Content Digitization

**Audience:** Total beginners who have completed Phase 1.
**Prerequisite:** Phase 1 is complete — you have a running Eleventy site deployed to GitHub Pages.
**Goal:** By the end of this guide, you will have a working log-to-post pipeline that transforms raw Markdown daily notes into published dashboard posts, a finalized project brand, two AI persona anchors, a post template with prev/next navigation, an archive page, and synthesized wiki deep-dive pages.

**What you are building in Phase 2:**

```
Raw daily log  →  Parser (enhanced)  →  Post template  →  Live post with nav
     ↓
  Wiki page     →  Wiki MOC entry    →  Cross-referenced knowledge base
```

---

## Table of Contents

1. [Understand the Phase 2 Goal](#1-understand-the-phase-2-goal)
2. [Finalize Your Brand — VibeID Daily](#2-finalize-your-brand)
3. [Understand the Daily Post Format](#3-daily-post-format)
4. [Upgrade the Parser Script](#4-upgrade-the-parser-script)
5. [Create the Post Layout Template](#5-post-layout-template)
6. [Add Prev/Next Navigation CSS](#6-prevnext-navigation-css)
7. [Build the Archive Page](#7-archive-page)
8. [Update the Homepage for the Dashboard Grid](#8-update-the-homepage)
9. [Establish ID Persona Anchors](#9-id-persona-anchors)
10. [Fix GitHub Pages CSS Pathing](#10-fix-css-pathing)
11. [Write Your First Batch of Daily Posts](#11-write-daily-posts)
12. [Create Wiki Deep-Dive Pages](#12-wiki-deep-dive-pages)
13. [Update the Wiki MOC](#13-update-the-wiki-moc)
14. [Run the Full Pipeline — Build and Verify](#14-run-the-full-pipeline)
15. [Commit and Push](#15-commit-and-push)
16. [Phase 2 Checklist](#16-checklist)

---

## 1. Understand the Phase 2 Goal

Phase 1 gave you the empty container — folder structure, Eleventy config, GitHub Actions deployment. Phase 2 fills that container with real content and makes the pipeline robust enough to handle many posts.

**The four problems Phase 2 solves:**

| Problem | Solution |
|---------|----------|
| The parser is too simple — it just copies files | Upgrade it to inject layout, strip duplicates, and clean Obsidian artifacts |
| Posts have no individual page template | Create `post.njk` with title, date, prev/next navigation |
| No place to see all posts at once | Build an archive page |
| No persona anchors for AI sessions | Create `ID_Personas.md` with shared behavioral definitions |

**Mental model for Phase 2:** Think of your `10_dailies/` folder as a journalist's raw notebook. The parser is the copy editor who formats each entry for publication. The wiki is the reference library built from those published pieces.

---

## 2. Finalize Your Brand

Before writing a single post, lock down your project identity. A consistent brand name prevents confusion when the site grows and others find it.

**For this project, the brand is: `VibeID Daily`**

The brand has three components:

| Component | Value | Purpose |
|-----------|-------|---------|
| **Name** | VibeID Daily | Appears in the site title, header, and README |
| **Tagline** | Natural Language // Systemic Automation | Sub-tagline in the header HUD |
| **Voice** | Senior ID — analytical, structured, outcome-driven | Guides all AI-generated content |

### 2a. Update README.md

Open `README.md` and update the top of the file to reflect the finalized brand:

```markdown
# VibeID Daily: Strategic Pointers for Instructional Designers

Welcome to **VibeID Daily**. This repository is a dedicated environment for
exploring the intersection of Instructional Design (ID) and AI-assisted
development (Vibe Coding).

## Mission
To provide daily, actionable strategic pointers and logic logs for
Instructional Designers transitioning from natural language workflows to
systemic automation.

## The Knowledge Compiler Concept
This repository is maintained as a **compounding, searchable wiki**:

- **10_dailies**: Raw daily pointers. Each file is one "transmission."
- **20_wiki**: LLM-generated pedagogical synthesis and analysis.
- **00_meta**: The "brain" — roadmaps, scripts, MOCs, and dashboard source.

## Navigation
Start with the central hub:
👉 **[Root MOC](root_MOC.md)**

## The Live Dashboard
Built with Eleventy, hosted on GitHub Pages.
- **URL**: [https://YOUR_USERNAME.github.io/vibe-id-daily/](https://YOUR_USERNAME.github.io/vibe-id-daily/)
- **Aesthetic**: Modern Tech Dashboard / Terminal.
```

> **Why finalize branding now?** The brand name appears in templates, the site `<title>`, the RSS feed, and the footer. Changing it after 50 posts forces updates everywhere. Decide now, lock it in.

---

## 3. Daily Post Format

Every file in `10_dailies/` follows the same structure. This consistency is what makes automation possible — the parser can reliably extract the title, date, and body from every file.

### 3a. Filename convention

```
day-01-the-entry-point-protocol.md
day-02-the-skeleton-first-prompt.md
day-10-the-cognitive-load-audit.md
```

Rules:
- Start with `day-` followed by a zero-padded two-digit number: `day-01`, `day-02` ... `day-09`, `day-10`
- All lowercase, words separated by hyphens
- No spaces, no underscores, no special characters
- Always ends in `.md`

> **Why zero-pad?** Computers sort filenames alphabetically. Without zero-padding, `day-10` sorts before `day-2`, which breaks chronological ordering. `day-02` always sorts before `day-10`.

### 3b. Frontmatter

Every Markdown file starts with a **frontmatter block** — a section between `---` lines that contains structured metadata. Eleventy reads this to know the post's title, date, and tags.

```markdown
---
title: "The 'Entry Point' Protocol (AGENTS.md / GEMINI.md)"
date: 2026-03-31
tags: [issue, vibe-coding]
---
```

**Field definitions:**

| Field | Type | Required | Notes |
|-------|------|----------|-------|
| `title` | string | Yes | Quoted. Use single quotes inside if the title contains double quotes. |
| `date` | YYYY-MM-DD | Yes | Sets the publication date. Future dates are hidden from the live site until that date arrives. |
| `tags` | list | No | Used for filtering. `issue` identifies a daily pointer; `wiki` identifies a synthesis page. |

### 3c. Body structure

After the frontmatter, the body follows a consistent three-field pattern:

```markdown
- **The Pointer:** One sentence. The core idea.
- **The Details:** Two to four sentences. The technical context or mechanism.
- **ID Application:** One to two sentences. How an Instructional Designer applies this.
```

**Full example — `10_dailies/day-01-the-entry-point-protocol.md`:**

```markdown
---
title: "The 'Entry Point' Protocol (AGENTS.md / GEMINI.md)"
date: 2026-03-31
tags: [issue, vibe-coding]
---

- **The Pointer:** Create a GEMINI.md file in your root folder to act as the AI's "Mission Briefing."
- **The Details:** The Gemini CLI automatically searches for this file at startup. By placing your ID Persona and pedagogical standards here, you eliminate "Prompt Drift" - the gradual degradation of AI output when the model forgets earlier instructions.
- **ID Application:** Define your voice (Senior ID) and pedagogy (Bloom's Taxonomy, Quality Matters) once in GEMINI.md. Every AI session inherits those standards automatically.

---
**Backlink:** [Dailies MOC](..10_dailies/_dailies_MOC.md)
```

> **The backlink at the end** is an Obsidian convention for vault navigation. The enhanced parser will strip it automatically before publishing so it does not appear on the live site.

---

## 4. Upgrade the Parser Script

The parser from Phase 1 was a simple file copier. Phase 2's parser does real work:

1. Reads only files matching the `day-NN-*.md` pattern (skips MOCs and other files)
2. Injects a `layout: post.njk` field into the frontmatter (so each post uses the post template)
3. Strips the leading `# Day N` heading from the body (it would duplicate the template's `<h1>`)
4. Fixes nested quote issues in title fields that can break YAML parsing
5. Strips the `---\n**Backlink:**...` footer line (Obsidian artifact not needed on the web)

Open `00_meta/scripts/parse_dailies.js` and replace its entire contents:

```javascript
const fs   = require('fs');
const path = require('path');

// Source: where you write your raw daily notes
const srcDir  = path.join(__dirname, '../../10_dailies');
// Destination: where Eleventy reads posts from
const destDir = path.join(__dirname, '../src/posts');

// -------------------------------------------------------
// STEP 1: Ensure the destination folder exists.
// fs.mkdirSync with { recursive: true } creates every
// folder in the path, and does nothing if it already exists.
// -------------------------------------------------------
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// -------------------------------------------------------
// STEP 2: Read the source directory and filter to only
// files that match our naming convention: day-01-*.md
// The regex /^day-\d+-.+\.md$/ means:
//   ^day-       starts with "day-"
//   \d+         one or more digits
//   -.+         a hyphen then any characters
//   \.md$       ends with ".md"
// -------------------------------------------------------
const files = fs.readdirSync(srcDir).filter(file =>
    /^day-\d+-.+\.md$/.test(file)
);

let processedCount = 0;

files.forEach(file => {
    const srcPath  = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    // Read the raw file content as a UTF-8 string
    let content = fs.readFileSync(srcPath, 'utf-8');

    if (content.startsWith('---')) {
        // -------------------------------------------------------
        // STEP 3: Parse the frontmatter block.
        // A frontmatter block looks like:
        //   ---          ← opening fence (index 0)
        //   title: "..."
        //   date: ...
        //   ---          ← closing fence (find from index 3)
        // -------------------------------------------------------
        const closingFence = content.indexOf('---', 3);

        if (closingFence !== -1) {
            let frontmatter = content.substring(0, closingFence + 3);
            let body        = content.substring(closingFence + 3);

            // -------------------------------------------------------
            // STEP 4: Fix nested double quotes in the title field.
            // YAML breaks if a title like:
            //   title: "The "Entry Point" Protocol"
            // has unescaped inner quotes. Replace inner " with '.
            // -------------------------------------------------------
            frontmatter = frontmatter.replace(
                /title: "(.*)"/g,
                (match, captured) => {
                    const cleaned = captured.replace(/"/g, "'");
                    return `title: "${cleaned}"`;
                }
            );

            // -------------------------------------------------------
            // STEP 5: Inject layout if not already present.
            // Eleventy needs to know which template to use.
            // We insert it right after the opening --- fence.
            // -------------------------------------------------------
            if (!frontmatter.includes('layout:')) {
                frontmatter = frontmatter.replace('---', '---\nlayout: post.njk');
            }

            // -------------------------------------------------------
            // STEP 6: Strip the leading H1 heading from the body.
            // The post.njk template renders its own <h1> from the
            // title in frontmatter. A raw "# Day 1" or "# Title"
            // heading in the body would create a duplicate heading,
            // which also breaks accessibility (two H1s per page).
            // The regex matches an optional newline, then # ... \n
            // -------------------------------------------------------
            body = body.replace(/^\n*(# [^\n]+\n)/, '\n');

            content = frontmatter + body;
        }
    } else {
        // -------------------------------------------------------
        // STEP 7: Handle files with NO frontmatter.
        // Generate a minimal frontmatter block from the filename.
        // -------------------------------------------------------
        const titleFromFilename = file
            .replace('.md', '')
            .replace(/-/g, ' ');
        content = `---\ntitle: "${titleFromFilename}"\nlayout: post.njk\n---\n\n${content}`;
    }

    // -------------------------------------------------------
    // STEP 8: Strip the Obsidian backlink footer.
    // Obsidian adds "---\n**Backlink:** ..." at the end of
    // files for vault navigation. This is not useful on the
    // web. The regex matches the --- divider followed by the
    // Backlink line through to the end of the file.
    // -------------------------------------------------------
    content = content.replace(/---\n\*\*Backlink:\*\*.*$/ms, '');

    // -------------------------------------------------------
    // STEP 9: Write the processed file to the destination.
    // -------------------------------------------------------
    fs.writeFileSync(destPath, content);
    console.log(`[parse_dailies] Processed: ${file}`);
    processedCount++;
});

console.log(`[parse_dailies] Done. ${processedCount} posts written to src/posts/`);
```

**Test the parser now** (before touching templates):

```bash
npm run parse
```

Expected output:
```
[parse_dailies] Processed: day-01-the-entry-point-protocol.md
[parse_dailies] Done. 1 posts written to src/posts/
```

Check `00_meta/src/posts/day-01-the-entry-point-protocol.md` — it should now have `layout: post.njk` in its frontmatter and the backlink stripped.

---

## 5. Post Layout Template

In Phase 1, all pages used `base.njk`. In Phase 2, individual posts need their own richer template: a title, a publication date, the post content, and navigation links to the previous and next post.

Create `00_meta/src/_includes/post.njk`:

```html
---
layout: base.njk
---
<div class="page-grid">
  <article>

    <header>
      {# dayLabel filter: extracts "Day 1" from "day-01-the-entry-point..." #}
      {% set dayLabel = page.fileSlug | dayLabel %}
      <h1>{{ dayLabel if dayLabel else title }}</h1>
      <div class="post-meta">
        <time datetime="{{ date | htmlDateString }}">{{ date | readableDate }}</time>
      </div>
    </header>

    {# The post's body content, rendered as HTML #}
    <div class="prose">
      {{ content | safe }}
    </div>

    {# --------------------------------------------------------
       Prev/Next Navigation
       Eleventy's built-in helpers getPreviousCollectionItem and
       getNextCollectionItem walk the postsChron collection
       (oldest-first) to find adjacent posts.
    -------------------------------------------------------- #}
    {% set prevPost = collections.postsChron | getPreviousCollectionItem(page) %}
    {% set nextPost = collections.postsChron | getNextCollectionItem(page) %}

    <nav class="post-nav" aria-label="Post navigation">
      <div class="post-nav-inner">

        <div class="post-nav-prev">
          {% if prevPost %}
            <a href="{{ prevPost.url | url }}" class="post-nav-btn">
              <span class="post-nav-label">← Previous</span>
              <span class="post-nav-title">{{ prevPost.data.title }}</span>
            </a>
          {% endif %}
        </div>

        <div class="post-nav-next">
          {% if nextPost %}
            <a href="{{ nextPost.url | url }}" class="post-nav-btn post-nav-btn--right">
              <span class="post-nav-label">Next →</span>
              <span class="post-nav-title">{{ nextPost.data.title }}</span>
            </a>
          {% else %}
            {# Last post: link to the full archive instead #}
            <a href="{{ '/archive/' | url }}" class="post-nav-btn post-nav-btn--right">
              <span class="post-nav-label">End of Series</span>
              <span class="post-nav-title">Full Archive →</span>
            </a>
          {% endif %}
        </div>

      </div>
    </nav>

    <div style="margin-top: 1.5rem;">
      <a href="{{ '/' | url }}" class="btn">&larr; Back to Latest</a>
    </div>

  </article>
</div>
```

**How the template inheritance chain works:**

```
post.njk  (defines article structure)
    ↓ layout: base.njk
base.njk  (wraps everything in <html>, header, footer)
    ↓ {{ content | safe }}
    Renders post.njk's output inside base.njk's <main>
```

This chain means you only need to define the header and footer once in `base.njk`. Every post automatically inherits it.

---

## 6. Prev/Next Navigation CSS

Add these styles to the bottom of `00_meta/src/css/style.css`:

```css
/* ---- Individual post page layout ---- */
.page-grid {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

/* Prose: readable body text for post content */
.prose {
  line-height: 1.8;
  color: var(--text-soft);
  margin: 1.5rem 0;
}

.prose ul, .prose ol {
  padding-left: 1.5rem;
  margin-bottom: 1rem;
}

.prose li { margin-bottom: 0.4rem; }

.prose strong { color: var(--text); }

/* Prev/Next nav block */
.post-nav {
  margin-top: 2.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--border);
}

.post-nav-inner {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.post-nav-btn {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 4px;
  text-decoration: none;
  max-width: 48%;
  transition: border-color 0.2s, background 0.2s;
}

.post-nav-btn:hover {
  border-color: var(--accent);
  background: var(--panel-light);
}

.post-nav-btn--right {
  text-align: right;
  margin-left: auto;
}

.post-nav-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--text-dim);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.post-nav-title {
  font-size: 0.85rem;
  color: var(--text);
  line-height: 1.4;
}

/* Back button */
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  background: var(--panel);
  border: 1px solid var(--accent);
  border-radius: 4px;
  color: var(--accent-light);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  text-decoration: none;
  transition: background 0.2s;
}

.btn:hover { background: var(--panel-light); }
```

---

## 7. Archive Page

The archive page shows every published post in reverse-chronological order. It is useful once you have more posts than the homepage lists.

Create `00_meta/src/archive.njk`:

```njk
---
layout: base.njk
title: Transmission Archive
permalink: /archive/
---

<div class="dashboard-grid">
  <div class="content">
    <div class="page-header">
      <h1>The Transmission Archive</h1>
      <p class="page-subtitle">A chronological history of all strategic pointers.</p>
    </div>

    <div class="archive-list">
      {% for post in collections.posts %}
        <a href="{{ post.url | url }}" class="archive-item">
          <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
          <span class="archive-item-title">{{ post.data.title }}</span>
        </a>
      {% endfor %}
    </div>
  </div>

  <aside class="sidebar">
    <div class="widget">
      <h3>// About</h3>
      <p>VibeID Daily - Tracking the journey from Natural Language to Systemic Automation.</p>
    </div>
    <div class="widget">
      <h3>// Navigate</h3>
      <ul>
        <li><a href="{{ '/' | url }}">Latest Transmissions</a></li>
        <li><a href="{{ '/feed.xml' | url }}">RSS Feed</a></li>
        <li><a href="https://github.com/YOUR_USERNAME/vibe-id-daily" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
      </ul>
    </div>
  </aside>
</div>
```

Add archive page CSS to `style.css`:

```css
/* ---- Dashboard grid (homepage + archive two-column layout) ---- */
.dashboard-grid {
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;
  align-items: start;
  padding: 2rem;
  max-width: var(--max-width);
  margin: 0 auto;
}

@media (max-width: 768px) {
  .dashboard-grid {
    grid-template-columns: 1fr;
  }
}

/* ---- Archive list ---- */
.archive-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.archive-item {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  padding: 0.6rem 1rem;
  background: var(--panel);
  border: 1px solid var(--border-dim);
  border-radius: 3px;
  text-decoration: none;
  transition: border-color 0.15s, background 0.15s;
}

.archive-item:hover {
  border-color: var(--accent);
  background: var(--panel-light);
}

.archive-item time {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--text-dim);
  white-space: nowrap;
  min-width: 90px;
}

.archive-item-title {
  color: var(--text);
  font-size: 0.9rem;
}

/* ---- Sidebar widgets ---- */
.sidebar {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.widget {
  background: var(--panel);
  border: 1px solid var(--border-dim);
  border-top: 2px solid var(--accent);
  padding: 1rem 1.25rem;
  border-radius: 4px;
}

.widget h3 {
  font-size: 0.8rem;
  margin-bottom: 0.75rem;
  color: var(--accent-light);
}

.widget ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.widget li a, .widget p a {
  font-size: 0.85rem;
  color: var(--text-soft);
  text-decoration: none;
}

.widget li a:hover { color: var(--accent-light); }

.page-header { margin-bottom: 1rem; }

.page-subtitle {
  color: var(--text-dim);
  font-size: 0.9rem;
  margin-top: 0.25rem;
}
```

---

## 8. Update the Homepage

The Phase 1 homepage was a simple list. Phase 2 upgrades it to the full dashboard grid with a sidebar and an introduction block.

Replace the contents of `00_meta/src/index.njk`:

```njk
---
layout: base.njk
title: Latest Transmissions
---

<div class="dashboard-grid">
  <div class="content">

    <section class="intro-block prose">
      <h1>Introduction to Vibe Coding for IDs</h1>
      <p>Vibe Coding is the practice of using high-level natural language instructions
      to drive AI agents in the creation, auditing, and maintenance of digital assets.
      For Instructional Designers, this represents a shift from manual content creation
      to <strong>Agentic Instructional Design</strong>.</p>

      <h2>Core Principles</h2>
      <ol>
        <li><strong>Instructional Logic over Syntax</strong>: Focus on pedagogy (Bloom's,
        QM) and let the agent handle the technical implementation.</li>
        <li><strong>Systemic Automation</strong>: Build repeatable SOPs and Skills instead
        of one-off solutions.</li>
        <li><strong>Accessibility First</strong>: Use agentic audits to ensure WCAG 2.2
        compliance at every step.</li>
      </ol>
    </section>

    <hr class="intro-divider">

    {% if collections.posts.length > 0 %}
      {% for post in collections.posts | head(5) %}
        <article>
          <header>
            <h2><a href="{{ post.url | url }}">{{ post.data.title }}</a></h2>
            <div class="post-meta">
              <time datetime="{{ post.date | htmlDateString }}">{{ post.date | readableDate }}</time>
            </div>
          </header>
          <div class="prose">
            {{ post.templateContent | safe }}
          </div>
        </article>
        <hr class="intro-divider">
      {% endfor %}
    {% else %}
      <p>No transmissions found. Add Markdown files to <code>10_dailies/</code>
      and run <code>npm run parse</code>.</p>
    {% endif %}

  </div>

  <aside class="sidebar">
    <div class="widget">
      <h3>// Start Here</h3>
      <p>New to the series? Begin at Day 1.</p>
      <ul>
        <li><a href="{{ '/posts/day-01-the-entry-point-protocol/' | url }}">Day 1 - The Entry Point Protocol</a></li>
      </ul>
    </div>
    <div class="widget">
      <h3>// About</h3>
      <p>VibeID Daily - Tracking the journey from Natural Language to Systemic Automation.</p>
    </div>
    <div class="widget">
      <h3>// Repository</h3>
      <ul>
        <li><a href="https://github.com/YOUR_USERNAME/vibe-id-daily" target="_blank" rel="noopener noreferrer">GitHub Repo</a></li>
        <li><a href="{{ '/archive/' | url }}">Full Archive</a></li>
        <li><a href="{{ '/feed.xml' | url }}">RSS Feed</a></li>
      </ul>
    </div>
    <div class="widget">
      <h3>// Recent</h3>
      <ul>
        {% for post in collections.posts | head(6) %}
          <li><a href="{{ post.url | url }}">{{ post.data.title }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </aside>
</div>
```

Add one more CSS rule to `style.css` for the section divider:

```css
.intro-divider {
  border: none;
  border-top: 1px solid var(--border-dim);
  margin: 2rem 0;
}

.intro-block { margin-bottom: 0; }
```

---

## 9. ID Persona Anchors

Persona anchors are reusable AI "roles" defined in a single file. Every time you start an AI session, you paste one of these prompt prefixes to immediately establish the correct voice and standards — without re-explaining the entire framework.

Create `00_meta/ID_Personas.md`:

```markdown
# ID Persona Anchors

These personas act as behavioral anchors for AI-assisted (Vibe Coding)
sessions in this repository. By instructing the AI to adopt one of these
personas, the generated output aligns with specific pedagogical, structural,
or accessibility standards.

---

## 1. The Senior ID

**Role:** Strategic planning, curriculum architecture, and pedagogical alignment.
**Voice:** Analytical, structured, objective-driven, focused on measurable outcomes.

### Core Directives
- **Pedagogical Anchoring:** Always map learning activities back to Bloom's Taxonomy
  or Gagné's Nine Events of Instruction.
- **Quality Assurance:** Ensure alignment with Quality Matters (QM) rubrics or
  similar higher-education standards.
- **Modularity:** Design content to be reusable across different learning pathways
  and modalities.
- **Cognitive Load:** Prioritize cognitive load management - minimize extraneous load,
  optimize germane load in all instructional materials.

### Example Prompt Prefix
> "Act as a Senior ID. Review the following module outline and suggest improvements
> for cognitive scaffolding and alignment with Bloom's Taxonomy. Respond in bullet
> points organized by Bloom's level."

---

## 2. The Accessibility Auditor

**Role:** Compliance checking, inclusive design enforcement, and usability testing.
**Voice:** Meticulous, empathetic, uncompromising on standards, detail-oriented.

### Core Directives
- **Compliance:** Strictly enforce WCAG 2.2 AA (or AAA) standards for all
  digital artifacts.
- **Alt Text Validation:** Ensure all visual media has descriptive, context-aware,
  and pedagogical alternative text.
- **Semantic Structure:** Verify semantic HTML structure (H1 → H2 → H3) for screen
  readers and logical tab ordering.
- **Inclusive Design:** Advocate for Universal Design for Learning (UDL) - provide
  multiple means of representation, expression, and engagement.

### Example Prompt Prefix
> "Act as an Accessibility Auditor. Evaluate the following Eleventy template for
> WCAG 2.2 AA compliance. List each issue with its WCAG criterion number, severity
> (A/AA/AAA), and a specific remediation suggestion."

---

## How to Use These Personas

1. Open a new AI session (Gemini CLI, GitHub Copilot, ChatGPT, Claude, etc.)
2. Type the persona prefix at the start of your prompt
3. Follow with the specific task
4. The AI will maintain that persona's voice and standards for the entire session

**Example combined prompt:**
> "Act as a Senior ID. I am building a 4-week online module on data literacy
> for undergraduate agricultural students at UTK. Create a week-by-week objective
> map aligned to Bloom's Taxonomy levels 2-4."

---
**Backlinks:** [Root MOC](../root_MOC.md)
```

> **Why one file for both personas?** Keeping them together makes it easy to paste the relevant section into any AI tool. A single file is also easier to maintain and version-control than scattered prompt files.

---

## 10. Fix GitHub Pages CSS Pathing

This is a common beginner mistake that causes the live site to load with no styles — while the local `npm start` version looks fine.

**The problem:** When you deploy to GitHub Pages, your site lives at a subdirectory URL:
```
https://YOUR_USERNAME.github.io/vibe-id-daily/
```
Not at the root:
```
https://YOUR_USERNAME.github.io/
```

If your CSS link uses an absolute path without the subdirectory prefix:
```html
<!-- Wrong for GitHub Pages -->
<link rel="stylesheet" href="/css/style.css">
```

The browser looks for `https://YOUR_USERNAME.github.io/css/style.css` — which does not exist. The file is actually at `/vibe-id-daily/css/style.css`.

**The fix:** Always use Eleventy's `url` filter for all links in templates. This filter automatically prepends the `pathPrefix` from `.eleventy.js`.

```html
<!-- Correct: the | url filter adds /vibe-id-daily/ automatically -->
<link rel="stylesheet" href="{{ '/css/style.css' | url }}">
```

**Audit your `base.njk` now.** Every `href`, `src`, and `action` attribute in your templates that points to your own site must go through `| url`:

```html
<!-- CSS -->
<link rel="stylesheet" href="{{ '/css/style.css' | url }}">

<!-- RSS feed -->
<link rel="alternate" href="{{ '/feed.xml' | url }}">

<!-- Navigation links -->
<a href="{{ '/' | url }}">Home</a>
<a href="{{ '/archive/' | url }}">Archive</a>

<!-- Post URLs (in templates iterating over collections) -->
<a href="{{ post.url | url }}">{{ post.data.title }}</a>
```

**External links** (GitHub, Google Fonts, follow.it) do NOT use `| url` because they are full absolute URLs and do not live on your site.

### How to check this is working

1. Run `npm run build`
2. Open `_site/index.html` in a text editor (do not open in a browser yet)
3. Search for `/css/style.css`
4. You should see `/vibe-id-daily/css/style.css` — with the prefix

If you see just `/css/style.css` without the prefix, a template is missing `| url`. Find and fix it.

---

## 11. Write Your First Batch of Daily Posts

Now apply everything from Section 3 to write your first five posts. The pattern is the same for every post.

Create these files in `10_dailies/`:

**`day-01-the-entry-point-protocol.md`**
```markdown
---
title: "The Entry Point Protocol (AGENTS.md / GEMINI.md)"
date: 2026-03-31
tags: [issue, vibe-coding]
---

- **The Pointer:** Create a GEMINI.md file in your root folder to act as the AI's Mission Briefing.
- **The Details:** The Gemini CLI automatically searches for this file at startup. By placing your ID Persona and pedagogical standards here, you eliminate Prompt Drift - the gradual degradation of AI output quality over a long session.
- **ID Application:** Define your voice (Senior ID) and pedagogy (Bloom's Taxonomy, Quality Matters) once. Every AI session inherits those standards automatically, eliminating re-explanation overhead.

---
**Backlink:** [Dailies MOC](../_dailies_MOC.md)
```

**`day-02-the-skeleton-first-prompt.md`**
```markdown
---
title: "The Skeleton-First Prompt"
date: 2026-04-01
tags: [issue, vibe-coding]
---

- **The Pointer:** Demand a project architecture or "Plan" before any content is generated.
- **The Details:** Use a /plan command or ask for a file tree first. This forces the AI to check its logic against your GEMINI.md mission briefing before writing a single line. It is the agentic equivalent of outlining before drafting.
- **ID Application:** Ask for a 15-week module map before requesting individual lesson content. The structure audit catches alignment gaps before you invest time in content development.
```

**`day-03-the-draft-to-diff-workflow.md`**
```markdown
---
title: "The Draft-to-Diff Workflow"
date: 2026-04-02
tags: [issue, vibe-coding]
---

- **The Pointer:** Never ask the AI to rewrite an entire file. Ask for a targeted diff.
- **The Details:** A "diff" is a precise description of only the lines that change. By asking "show me only the lines that need to change," you maintain surgical control over your files and can verify each edit before it is applied.
- **ID Application:** When updating a course outline, prompt: "Show only the sections of the syllabus that need to change to align with Bloom's Level 3 objectives." This prevents wholesale rewrites that erase deliberate design decisions.
```

**`day-04-the-prompt-injection-for-standards.md`**
```markdown
---
title: "Prompt Injection for Standards"
date: 2026-04-03
tags: [issue, vibe-coding]
---

- **The Pointer:** Inject your standards document directly into the prompt context at the start of every session.
- **The Details:** Instead of referencing "QM Standards," paste the actual QM rubric criteria into the prompt. The AI cannot hallucinate compliance when the source document is directly in the context window.
- **ID Application:** Paste the Quality Matters Specific Review Standards (SRS) rubric items into the prompt before asking for a course design review. The AI will cite specific rubric numbers rather than making vague claims.
```

**`day-05-the-self-documenting-loop.md`**
```markdown
---
title: "The Self-Documenting Loop"
date: 2026-04-04
tags: [issue, vibe-coding]
---

- **The Pointer:** End every AI session by asking the AI to write a one-paragraph summary of what was done and why.
- **The Details:** This summary becomes the commit message, the ops log entry, and the institutional memory artifact. The AI that did the work is the best entity to summarize it - as long as you ask immediately, before the context window clears.
- **ID Application:** After a course revision session, prompt: "Write a one-paragraph summary of every change made to the syllabus today, including the pedagogical rationale for each change." Paste into your progress log.
```

After creating all five files, run the parser:

```bash
npm run parse
```

You should see:
```
[parse_dailies] Processed: day-01-the-entry-point-protocol.md
[parse_dailies] Processed: day-02-the-skeleton-first-prompt.md
[parse_dailies] Processed: day-03-the-draft-to-diff-workflow.md
[parse_dailies] Processed: day-04-the-prompt-injection-for-standards.md
[parse_dailies] Processed: day-05-the-self-documenting-loop.md
[parse_dailies] Done. 5 posts written to src/posts/
```

---

## 12. Create Wiki Deep-Dive Pages

Each daily post gets a corresponding wiki page in `20_wiki/`. The wiki page is a **synthesis** — it goes deeper than the pointer, connecting the concept to ID frameworks, explaining the technical mechanism, and suggesting advanced applications.

### 12a. Wiki file naming convention

The wiki filename mirrors the daily post filename with `-wiki` appended:

```
10_dailies/day-01-the-entry-point-protocol.md
20_wiki/day-01-the-entry-point-protocol-wiki.md
```

### 12b. Wiki page structure

Every wiki page follows this template:

```markdown
---
title: "CONCEPT TITLE - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# CONCEPT TITLE - Pedagogical Synthesis

*Deep-dive analysis of the concept from the daily pointer.*

## ID Framework Integration

*(Connect the concept to Bloom's Taxonomy, UDL, WCAG, QM, or Gagné.)*

## Technical Implementation

*(Explain how to actually do this, with examples.)*

## Advanced Applications

*(What does this look like at scale, or in complex real scenarios?)*

## Common Pitfalls

*(What goes wrong for beginners? What are the failure modes?)*

---
**Reference:** [Original Daily Pointer](../10_dailies/day-01-the-entry-point-protocol.md)
```

### 12c. Example — Day 1 wiki page

Create `20_wiki/day-01-the-entry-point-protocol-wiki.md`:

````markdown
---
title: "The Entry Point Protocol - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# The Entry Point Protocol - Pedagogical Synthesis

*Deep-dive analysis of the GEMINI.md / AGENTS.md mission briefing concept.*

## ID Framework Integration

The Entry Point Protocol maps directly to **Gagné's First Event of Instruction:
Gaining Attention**. Just as an ID designs a course opening to orient the learner,
GEMINI.md orients the AI before any work begins.

It also enforces **Quality Matters Standard 1.1**: "The course instructions make
clear how to get started." For the AI agent, GEMINI.md is that getting-started
document.

**Bloom's Taxonomy alignment:** The protocol operates at the **Apply** level for
the AI (applying known standards to new tasks) and at the **Evaluate** level for
the ID (evaluating whether the AI's output meets those standards).

## Technical Implementation

GEMINI.md is a plain Markdown file in the repository root. The Gemini CLI reads
it automatically at startup. It should contain:

1. **Project architecture** — what folders exist and what they contain
2. **Voice and persona** — the AI's behavioral role for this project
3. **Standards** — specific frameworks to enforce (WCAG 2.2, QM, Bloom's)
4. **Operational procedures** — how to handle common requests (Ingest, Lint, Query)

```markdown
# My GEMINI.md

## Voice
Act as a Senior Instructional Designer. Professional, precise, outcome-driven.

## Standards
- Pedagogical: Bloom's Taxonomy, Quality Matters
- Accessibility: WCAG 2.2 AA
- Formatting: Use spaced hyphens ( - ) not em dashes

## Architecture
- 10_dailies/: Raw daily notes - do not modify
- 20_wiki/: Your synthesis pages - create and update here
- 00_meta/: Config and scripts - modify only when instructed
```

## Advanced Applications

At scale, GEMINI.md becomes a **living document**. As the project grows, append
new conventions. The AI reads it fresh every session, so updates take effect
immediately without retraining or memory injection.

For teams, maintain separate persona files (`ID_Personas.md`) alongside GEMINI.md
so multiple contributors can invoke different roles (Senior ID, Accessibility
Auditor, SME Reviewer) without rewriting the base briefing.

## Common Pitfalls

**Too vague:** "Be helpful and professional" gives the AI no actionable
constraints. Specify frameworks by name and version (WCAG 2.2, not "accessibility
standards").

**Too long:** A GEMINI.md over 300 lines consumes context window space. Prioritize
the top 10 most critical constraints, not everything you might ever want.

**Set and forget:** Update GEMINI.md when project standards change. An outdated
briefing is worse than no briefing — it confidently enforces the wrong standards.

---
**Reference:** [Original Daily Pointer](../10_dailies/day-01-the-entry-point-protocol.md)
````

### 12d. Generate wiki pages with AI

Once you have established the wiki page format, you can use the AI to generate them at scale. Use the Accessibility Auditor persona for any accessibility-related days, and the Senior ID persona for pedagogy-focused days.

**Prompt template for generating a wiki page:**

```
Act as a Senior ID. Read the following daily pointer and write a wiki synthesis
page following this exact structure:
1. ID Framework Integration (connect to Bloom's, UDL, WCAG, QM, or Gagné)
2. Technical Implementation (concrete steps with a code or prompt example)
3. Advanced Applications (the concept at scale or in complex scenarios)
4. Common Pitfalls (three to five specific failure modes with explanations)

Here is the daily pointer:
[paste the content of your day-XX.md file here]

Use the title format: "CONCEPT TITLE - Concept Wiki"
Use the frontmatter: tags: [wiki, concept, instructional-design]
End with: ---\n**Reference:** [Original Daily Pointer](../10_dailies/day-XX-filename.md)
```

---

## 13. Update the Wiki MOC

Every time you add a wiki page, add an entry to `20_wiki/_wiki_MOC.md`. This keeps the MOC as a reliable index that reflects the actual directory contents.

Open `20_wiki/_wiki_MOC.md` and add entries:

```markdown
# Wiki MOC

Index of all deep-dive synthesis pages, organized by phase.

## Phase 1: Foundation Concepts (Days 1-10)

- **[Day 1 - The Entry Point Protocol](day-01-the-entry-point-protocol-wiki.md)**: Using GEMINI.md to eliminate Prompt Drift through persistent AI mission briefings.
- **[Day 2 - The Skeleton-First Prompt](day-02-the-skeleton-first-prompt-wiki.md)**: Architecture-before-content as an agentic planning pattern.
- **[Day 3 - The Draft-to-Diff Workflow](day-03-the-draft-to-diff-workflow-wiki.md)**: Surgical file control using targeted diffs instead of full rewrites.
- **[Day 4 - Prompt Injection for Standards](day-04-the-prompt-injection-for-standards-wiki.md)**: Injecting source documents directly into context for compliance audits.
- **[Day 5 - The Self-Documenting Loop](day-05-the-self-documenting-loop-wiki.md)**: End-of-session summaries as institutional memory artifacts.

---
**Backlinks:** [Root MOC](../root_MOC.md)
```

> **MOC maintenance rule:** The MOC is always a reflection of the directory. If you add a wiki page, add a MOC entry. If you delete a wiki page, remove the MOC entry. A stale MOC is worse than no MOC — it creates dead links.

---

## 14. Run the Full Pipeline — Build and Verify

Run the complete build pipeline:

```bash
npm run build
```

This triggers in order:
1. `prebuild` → runs `npm run parse` → processes `10_dailies/` → writes to `00_meta/src/posts/`
2. Eleventy reads `00_meta/src/` → builds HTML into `_site/`

Expected output:
```
[parse_dailies] Processed: day-01-the-entry-point-protocol.md
[parse_dailies] Processed: day-02-the-skeleton-first-prompt.md
[parse_dailies] Processed: day-03-the-draft-to-diff-workflow.md
[parse_dailies] Processed: day-04-the-prompt-injection-for-standards.md
[parse_dailies] Processed: day-05-the-self-documenting-loop.md
[parse_dailies] Done. 5 posts written to src/posts/

[11ty] Writing 10 files in 0.5 seconds (v2.0.1)
```

**Expected file count:** 10 files = 5 posts + homepage + archive + feed.xml + vibe-coding-intro (if present) + sitemap.

### 14a. Verify locally

```bash
npm start
```

Open `http://localhost:8080/vibe-id-daily/` and check:

- [ ] Homepage loads with the dashboard grid (content + sidebar)
- [ ] The 5 posts appear in the feed
- [ ] Click a post — individual post page loads with the correct title and date
- [ ] On a post page, "Next →" link appears and goes to the next post
- [ ] On a post page, "← Previous" link appears (except Day 1)
- [ ] On the last post, "Full Archive →" appears instead of Next
- [ ] Archive page loads at `/vibe-id-daily/archive/`
- [ ] All post titles in the archive are clickable

### 14b. Check for broken paths on the built site

```bash
grep -rn 'href="/' _site/ | grep -v 'vibe-id-daily' | grep -v 'http'
```

If this returns any results, those links are missing the `pathPrefix` — they will be broken on GitHub Pages. Find the template generating them and add `| url`.

---

## 15. Commit and Push

```bash
# Stage all changes
git add .

# Review what you are about to commit
git status

# Commit
git commit -m "feat: Phase 2 content digitization - pipeline, personas, wiki, archive"

# Push - GitHub Actions will deploy automatically
git push origin main
```

Watch the GitHub Actions tab in your repository. The deployment process takes about 60-90 seconds. When the checkmark turns green, your updated site is live.

**Verify on the live site:**
1. Open `https://YOUR_USERNAME.github.io/vibe-id-daily/`
2. Check that the CSS loads (if styles are missing, the `pathPrefix` fix in Section 10 was not applied correctly)
3. Click through to a post and verify prev/next navigation works
4. Visit `/vibe-id-daily/archive/` — all 5 posts should be listed

---

## 16. Phase 2 Checklist

**Brand:**
- [ ] README updated with finalized `VibeID Daily` brand and description
- [ ] `base.njk` header shows correct brand name and tagline

**Parser (`parse_dailies.js`):**
- [ ] Filters to only `day-NN-*.md` files
- [ ] Injects `layout: post.njk` into frontmatter
- [ ] Fixes nested quote issues in title fields
- [ ] Strips duplicate leading H1 heading from body
- [ ] Strips Obsidian backlink footers
- [ ] `npm run parse` runs without errors

**Templates:**
- [ ] `post.njk` created with title, date, prose container, prev/next nav, back button
- [ ] `archive.njk` created with full post list and sidebar
- [ ] `index.njk` updated to dashboard-grid layout with sidebar

**CSS:**
- [ ] `.page-grid`, `.prose`, `.post-nav`, `.btn` styles added
- [ ] `.dashboard-grid`, `.archive-list`, `.sidebar`, `.widget` styles added
- [ ] `.intro-divider` style added
- [ ] Responsive breakpoint at 768px for single-column mobile layout

**Pathing:**
- [ ] All template links use `| url` filter
- [ ] `grep -rn 'href="/' _site/` returns no unprefix-ed internal links

**Content:**
- [ ] At least 5 daily posts created in `10_dailies/` with correct frontmatter
- [ ] At least 1 wiki page created in `20_wiki/`
- [ ] `_wiki_MOC.md` updated with entries for all new wiki pages

**Personas:**
- [ ] `00_meta/ID_Personas.md` created with Senior ID and Accessibility Auditor
- [ ] Each persona has Core Directives and an Example Prompt Prefix

**Build and deploy:**
- [ ] `npm run build` completes without errors
- [ ] `npm start` — local preview shows homepage, post pages, and archive
- [ ] `git push` triggers GitHub Actions deployment
- [ ] Live site loads with CSS and all navigation working

---

## Common Errors and Fixes

### Posts appear on local but not on the live site
The `pathPrefix` is wrong or missing in `.eleventy.js`. Confirm it exactly matches your repository name, including the leading and trailing slash: `"/vibe-id-daily/"`.

### Post page shows a blank or broken layout
The parser did not inject `layout: post.njk`. Open a file in `00_meta/src/posts/` and confirm the frontmatter contains `layout: post.njk`. If not, re-run `npm run parse`.

### Prev/Next navigation does not appear
The `postsChron` collection must contain at least two posts. Confirm you have at least two `day-NN-*.md` files processed. Also confirm `.eleventy.js` has the `postsChron` collection defined.

### Title shows as "day 01 the entry point protocol" (no hyphens, all lowercase)
The file had no frontmatter and fell through to the "no frontmatter" branch of the parser. Add a proper `---\ntitle: "..."\n---` frontmatter block to the source file.

### Wiki links show `../10_dailies/` but the file is not found
Wiki pages link to daily posts using relative paths. Confirm the filename in the link matches the actual filename in `10_dailies/` exactly, including the zero-padding on the day number.

---

## Next Step: Phase 3

Phase 3 covers full automation — the cyborg aggregator for external trend data, the link checker script, the skill library (SOPs as reusable AI prompts), and the GitHub Actions workflow for automated nightly builds.

See `00_meta/phase_3.md` (coming soon).

---

*Tutorial authored May 2026 | VibeID Daily*
