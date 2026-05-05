---
title: "Phase 4 Tutorial - Scale & Sustainability"
date: 2026-05-05
tags:
  - tutorial
  - phase-4
  - beginner
  - mcp
  - rss
  - sustainability
---

# Phase 4 Tutorial: Scale & Sustainability

**Audience:** Total beginners who have completed Phases 1, 2, and 3.
**Prerequisite:** Phase 3 is complete - you have a scheduled CI pipeline, a Skill Library, a link checker, and the Cyborg Aggregator running on a cron schedule.
**Goal:** By the end of this guide, you will have connected your Obsidian vault to the Gemini CLI via MCP, published an RSS/Atom feed, added an email subscription widget, automated future-date publishing, renamed your MOC files to a clean numeric convention, bulk-created all 100 daily post stubs with correct sequential dates, and extended the Wiki MOC to cover all 100 days.

**What you are building in Phase 4:**

```
Obsidian Vault  →  MCP Bridge (obsidian-mcp-server)  →  Gemini CLI
                                                              ↓
                                               Semantic search across your
                                               entire Second Brain without
                                               manual copy-paste

10_dailies/day-NN-*.md  →  parse_dailies.js  →  future-date filter  →  Live site
(Days 1-100 stubs,                              (post.date <= now)
 all pre-dated)                                  New post goes live
                                                 automatically at midnight UTC

feed.xml  →  RSS reader / email subscriber  →  Passive audience growth
             (follow.it widget on homepage
              + RSS autodiscovery in <head>)
```

---

## Table of Contents

1. [Understand the Phase 4 Goal](#1-understand-the-phase-4-goal)
2. [What Languages Do You Need for Phase 4?](#2-what-languages-do-you-need-for-phase-4)
3. [MCP Integration - Connect Obsidian to Gemini CLI](#3-mcp-integration)
4. [Install and Configure the Eleventy RSS Plugin](#4-eleventy-rss-plugin)
5. [Build the Feed Template](#5-build-the-feed-template)
6. [Add RSS Autodiscovery to Your HTML Templates](#6-rss-autodiscovery)
7. [Add an Email Subscribe Widget to the Homepage](#7-email-subscribe-widget)
8. [Add the Subscribe Widget to the Archive Page](#8-archive-subscribe-widget)
9. [Future-Date Publishing Filter](#9-future-date-filter)
10. [Rename and Relink Your MOC Files](#10-moc-rename-and-relink)
11. [Bulk-Create 100-Day Post Stubs](#11-bulk-create-post-stubs)
12. [Extend the Wiki MOC to All 100 Days](#12-extend-wiki-moc)
13. [Update GEMINI.md for Phase 4](#13-update-geminimd)
14. [End-to-End Test](#14-end-to-end-test)
15. [Phase 4 Checklist](#15-checklist)

---

## 1. Understand the Phase 4 Goal

Phase 1 built the container. Phase 2 filled it. Phase 3 made it self-running. Phase 4 makes it self-sustaining and connected to your broader knowledge ecosystem.

**The four problems Phase 4 solves:**

| Problem | Solution |
|---------|----------|
| You manually copy-paste Obsidian notes into Gemini CLI every session | MCP bridge gives the AI direct read access to your vault |
| People who like your site have no way to subscribe | RSS feed + email widget gives them passive follow options |
| You have to remember which posts are ready to publish | Future-date filter publishes exactly one post per day at midnight UTC automatically |
| Your MOC files use inconsistent naming conventions | Standardize to `00_meta_MOC.md`, `10_dailies_MOC.md`, `20_wiki_MOC.md` |
| You only have Days 1-32 - the 100-day calendar has gaps | Bulk-create stubs for Days 33-100 with correct sequential dates |

**Mental model for Phase 4:** If Phase 3 was the nervous system (automation signals), Phase 4 is the circulatory system - the flow of information between your vault, your site, and your audience. The MCP bridge connects inward (Obsidian → AI). The RSS feed connects outward (site → audience). The future-date calendar connects forward (today's work → tomorrow's publish).

**The four Phase 4 deliverables:**

```
MCP Integration
  .gemini/settings.example.json  →  obsidian-mcp-server  →  Gemini CLI
  GEMINI.md updated with MCP activation instructions

Community Feedback Loop
  feed.xml (Atom/RSS)  →  <link rel="alternate"> autodiscovery
  follow.it widget  →  email subscribers

Future-Date Publishing
  .eleventy.js: post.date <= now  →  automated calendar publish

Content Scale
  Days 33-100 stubs  +  Wiki MOC extended to all 100 days
```

---

## 2. What Languages Do You Need for Phase 4?

Phase 4 is lighter on new programming concepts than Phase 3. Most work involves configuration files, Nunjucks templates, and a small Node.js script. Here is an honest assessment.

### Already required from Phases 1-3 (no new depth needed)

| Language / Tool | What you already know | Phase 4 change |
|----------------|----------------------|----------------|
| **Markdown** | Frontmatter, body, lists, links | None |
| **JavaScript (Node.js)** | Scripts, `fs`, loops, template literals | Minor - one new script section |
| **Nunjucks** | Templates, `for`, `if`, filters | Moderate - new feed template syntax |
| **YAML** | Frontmatter, GitHub Actions | Minor - one new config file |
| **CSS** | Variables, selectors, flexbox | Moderate - subscribe widget styling |
| **Git / Terminal** | `add`, `commit`, `push` | None |
| **GitHub Actions** | lint job, deploy job, cron schedule | None - workflow is complete from Phase 3 |

### New in Phase 4

**JSON (beginner level)**

The MCP configuration file (`.gemini/settings.example.json`) is written in JSON. JSON (JavaScript Object Notation) is a data format made of key-value pairs, arrays, and nested objects. If you have written frontmatter YAML before, JSON is the same concept with different punctuation rules:

| Feature | YAML | JSON |
|---------|------|------|
| Key-value pair | `key: value` | `"key": "value"` |
| Nested object | Indentation | `{ "key": { ... } }` |
| Array | `- item` | `["item1", "item2"]` |
| Strings | `value` or `'value'` | Always `"value"` (double quotes required) |
| Comments | `# comment` | **Not allowed in JSON** |
| Trailing commas | Allowed | **Not allowed** (last item in object/array has no comma) |

**The two most common beginner JSON errors:**

```json
// WRONG - trailing comma after last item
{
  "name": "Alice",
  "age": 30,
}

// WRONG - single quotes instead of double quotes
{
  'name': 'Alice'
}

// CORRECT
{
  "name": "Alice",
  "age": 30
}
```

To validate JSON before using it: paste it into [jsonlint.com](https://jsonlint.com) - it will highlight any syntax errors.

**Nunjucks - Feed Template Syntax (new)**

The RSS feed is generated by a Nunjucks template (`feed.njk`). It outputs XML instead of HTML. The same Nunjucks tags (`{{ }}` for variables, `{% %}` for logic) work identically - the only difference is the file output is XML markup instead of HTML. You will see tags like `<feed>`, `<entry>`, and `<link>` which are Atom feed XML elements, not HTML elements. Do not try to mix them.

**Bash - bulk file creation (beginner level)**

Step 11 uses a short `for` loop in bash to create 68 stub files at once instead of creating them one by one:

```bash
for i in $(seq 33 100); do
  echo "creating stub for day $i"
done
```

You do not need to understand bash deeply. The loop is fully written in this tutorial - copy and run it. The key concept: `seq 33 100` generates the numbers 33, 34, 35 ... 100, and the `for` loop runs the body once for each number, with `$i` set to the current number.

### What you do NOT need for Phase 4

- React, Vue, or any front-end framework
- TypeScript
- Python
- SQL or databases
- Docker or containers
- Advanced regex

### Skill Level Summary

| Skill | Phase 3 | Phase 4 Target |
|-------|---------|---------------|
| Markdown | Beginner | Beginner (no change) |
| JavaScript/Node | Intermediate | Intermediate (no change) |
| YAML | Beginner-Intermediate | Beginner-Intermediate (no change) |
| Nunjucks | Beginner-Intermediate | Intermediate (feed template) |
| CSS | Intermediate | Intermediate (no change) |
| JSON | None | Beginner |
| Bash scripting | None | Beginner (one loop) |
| Git | Beginner | Beginner (no change) |
| GitHub Actions | Intermediate | Intermediate (no change) |

---

## 3. MCP Integration

MCP (Model Context Protocol) is an open standard that lets AI tools connect to external data sources. In this project, you will connect the Gemini CLI to your Obsidian vault via `obsidian-mcp-server`. Once connected, you can ask Gemini: "Search my vault for notes on UDL" and it will actually search your vault files rather than relying on what you copy-paste.

### What MCP does and does not do

| Does | Does not |
|------|---------|
| Lets Gemini CLI read files from your Obsidian vault | Send your notes to a remote server |
| Enables semantic search across vault notes | Modify or write files to your vault |
| Eliminates manual copy-paste of reference notes | Require an internet connection (runs locally) |
| Works with the Obsidian Local REST API plugin | Work without the Obsidian app running |

### Step 3a - Install the Obsidian Local REST API Plugin

1. Open Obsidian.
2. Go to **Settings** → **Community Plugins** → **Browse**.
3. Search for "Local REST API".
4. Install and enable it.
5. Go to **Settings** → **Local REST API** (now in the left sidebar).
6. Note the **API Key** shown there. You will need it in the next step.
7. Note the **Port** (default: 27124).
8. Make sure **Enable HTTPS** is set to **off** (use plain HTTP for local connections).

### Step 3b - Create the MCP Configuration File

The Gemini CLI reads MCP server configuration from `.gemini/settings.json` in your project root. You will commit a template file (`.gemini/settings.example.json`) but keep the real file (`.gemini/settings.json`) gitignored so your API key is never committed to GitHub.

First, update `.gitignore` to protect the real settings file while allowing the example:

Open `.gitignore` and add these two lines anywhere in the file:

```
.gemini/
!.gemini/settings.example.json
```

The first line ignores everything inside `.gemini/`. The second line is an exception that un-ignores the example file. The `!` prefix means "do not ignore this specific file."

Create the directory and example file:

```bash
mkdir -p .gemini
```

Create `.gemini/settings.example.json`:

```json
{
  "mcpServers": {
    "obsidian": {
      "command": "npx",
      "args": [
        "-y",
        "obsidian-mcp-server"
      ],
      "env": {
        "OBSIDIAN_API_URL": "http://localhost:27124",
        "OBSIDIAN_API_KEY": "REPLACE_WITH_YOUR_LOCAL_REST_API_KEY"
      }
    }
  }
}
```

**What each field means:**

| Field | Meaning |
|-------|---------|
| `"obsidian"` | The name you give this MCP server connection (can be anything) |
| `"command": "npx"` | Run the server using Node's `npx` (no global install needed) |
| `"args": ["-y", "obsidian-mcp-server"]` | `-y` auto-confirms install; `obsidian-mcp-server` is the npm package |
| `"OBSIDIAN_API_URL"` | Where the Obsidian Local REST API is listening (port 27124 is default) |
| `"OBSIDIAN_API_KEY"` | Your private API key from the Obsidian plugin settings |

### Step 3c - Create Your Real Settings File (Not Committed)

Copy the example to create the real settings file:

```bash
cp .gemini/settings.example.json .gemini/settings.json
```

Open `.gemini/settings.json` in a text editor and replace `REPLACE_WITH_YOUR_LOCAL_REST_API_KEY` with your actual API key from the Obsidian plugin settings panel.

**Verify the key is set:**

```bash
grep "OBSIDIAN_API_KEY" .gemini/settings.json
# Should show your real key, NOT the placeholder text
```

**Verify the real file is gitignored:**

```bash
git status .gemini/settings.json
# Should NOT appear in the output (ignored files are not listed)
```

```bash
git status .gemini/settings.example.json
# SHOULD appear as an untracked or modified file (it is committed)
```

### Step 3d - Test the MCP Connection

Open a terminal in your project root and start the Gemini CLI:

```bash
gemini
```

At the prompt, try:

```
search my obsidian vault for notes about WCAG
```

If MCP is working, Gemini will query the Obsidian Local REST API and return results from your actual vault files. If it returns an error about the connection, check:

1. Is Obsidian open and running?
2. Is the Local REST API plugin enabled in Obsidian settings?
3. Is the port in your settings.json (27124) the same as the port shown in the Obsidian plugin panel?
4. Is the API key correct (no extra spaces or quotes)?

### Step 3e - Commit the Example File

```bash
git add .gemini/settings.example.json .gitignore
git commit -m "feat: add MCP configuration template for Obsidian vault bridge"
git push origin main
```

**Security reminder:** Never run `git add .gemini/` without first confirming that `settings.json` is gitignored. Always run `git status` before staging MCP-related files.

---

## 4. Eleventy RSS Plugin

An RSS/Atom feed lets subscribers receive your new posts automatically in RSS readers and email newsletters. You will use the official Eleventy RSS plugin (`@11ty/eleventy-plugin-rss`).

### Important: Version Compatibility

This project uses **Eleventy v2**. The Eleventy RSS plugin has two major version lines:

| Plugin version | Eleventy compatibility | Module format |
|---------------|----------------------|---------------|
| `^1.2.0` | Eleventy v2 (this project) | CommonJS (`require()`) |
| `^3.0.0` | Eleventy v3+ only | ESM (`import`) |

Installing v3 on an Eleventy v2 project will break your build with the error: `Invalid EleventyConfig.addPlugin signature`. Always use v1 for this project.

### Install the Plugin

```bash
npm install @11ty/eleventy-plugin-rss@^1.2.0
```

Verify `package.json` now shows:

```json
"dependencies": {
  "@11ty/eleventy": "^2.0.0",
  "@11ty/eleventy-plugin-rss": "^1.2.0"
}
```

### Register the Plugin in .eleventy.js

Open `.eleventy.js` and add the plugin registration near the top of the `module.exports` function, before the collections:

```javascript
const { DateTime } = require("luxon");
const rssPlugin = require('@11ty/eleventy-plugin-rss');  // ADD THIS LINE
const now = new Date();

module.exports = function(eleventyConfig) {

  // Register the RSS plugin (must be before collections and filters)
  eleventyConfig.addPlugin(rssPlugin);  // ADD THIS LINE

  // ... rest of your existing config (collections, filters, etc.)
```

**What does `require('@11ty/eleventy-plugin-rss')` return?**

It returns the plugin function itself (the default export). The `addPlugin()` call registers it with Eleventy so filter functions like `| absoluteUrl` and `| dateToRfc3339` become available in all your Nunjucks templates. You will use these filters in the feed template in the next step.

### Create a Metadata File

The feed template needs your site's metadata (title, URL, author). Create `00_meta/src/_data/metadata.json`:

```json
{
  "title": "VibeID Daily",
  "url": "https://YOURUSERNAME.github.io/vibe-id-daily/",
  "description": "Tracking the journey from Natural Language to Systemic Automation.",
  "author": {
    "name": "Senior ID"
  },
  "language": "en"
}
```

Replace `YOURUSERNAME` with your GitHub username.

**What is `_data/`?** Eleventy automatically reads all files in the `_data/` folder (relative to your input directory) and makes them available as global variables in all templates. A file named `metadata.json` is accessible in Nunjucks as `{{ metadata.title }}`, `{{ metadata.url }}`, etc.

---

## 5. Build the Feed Template

Create `00_meta/src/feed.njk`:

```njk
---
permalink: /feed.xml
eleventyExcludeFromCollections: true
---
<?xml version="1.0" encoding="utf-8"?>
<feed xmlns="http://www.w3.org/2005/Atom" xml:lang="{{ metadata.language }}">
  <title>{{ metadata.title }}</title>
  <subtitle>{{ metadata.description }}</subtitle>
  <link href="{{ metadata.url | url | absoluteUrl(metadata.url) }}" rel="self"/>
  <link href="{{ metadata.url }}"/>
  <updated>{{ collections.posts | getNewestCollectionItemDate | dateToRfc3339 }}</updated>
  <id>{{ metadata.url }}</id>
  <author>
    <name>{{ metadata.author.name }}</name>
  </author>
  {%- for post in collections.posts | head(10) %}
  {%- set absolutePostUrl = post.url | url | absoluteUrl(metadata.url) %}
  <entry>
    <title>{{ post.data.title }}</title>
    <link href="{{ absolutePostUrl }}"/>
    <updated>{{ post.date | dateToRfc3339 }}</updated>
    <id>{{ absolutePostUrl }}</id>
    <content type="html">
      {{ post.templateContent | htmlToAbsoluteUrls(absolutePostUrl) | escape }}
    </content>
  </entry>
  {%- endfor %}
</feed>
```

**Breaking down the key lines:**

| Line | What it does |
|------|-------------|
| `permalink: /feed.xml` | Outputs this template as `/feed.xml` in the built site |
| `eleventyExcludeFromCollections: true` | Prevents the feed page itself from appearing in your posts collection |
| `absoluteUrl(metadata.url)` | Converts relative URLs to absolute URLs (required for feed readers) |
| `| head(10)` | Only includes the 10 most recent posts in the feed |
| `dateToRfc3339` | Formats dates to the RFC 3339 standard that Atom feeds require |
| `| htmlToAbsoluteUrls(absolutePostUrl)` | Converts all links and image src attributes to absolute URLs |
| `| escape` | Escapes HTML entities so the XML is valid |

**Why is `| url` needed before `| absoluteUrl`?**

In Eleventy v2 with a `pathPrefix` (like `/vibe-id-daily/`), `post.url` returns the path WITHOUT the prefix (e.g., `/posts/day-01.../`). The `| url` filter applies the pathPrefix, giving `/vibe-id-daily/posts/day-01.../`. Then `| absoluteUrl(metadata.url)` prepends the domain. Without `| url`, all feed entry links would be 404s.

**Test the feed locally:**

```bash
npm run build
cat _site/feed.xml | head -30
```

You should see valid XML starting with `<?xml version="1.0"...`. Open `_site/feed.xml` in a browser - modern browsers display Atom feeds formatted as a readable page if they are valid XML.

---

## 6. RSS Autodiscovery

RSS autodiscovery is a `<link>` tag in your HTML `<head>` that tells RSS readers and browsers "this site has a feed at this URL." Many RSS readers automatically detect it when someone enters your site URL.

Open `00_meta/src/_includes/base.njk` and add this line inside the `<head>` block, after the `<title>` tag:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title or metadata.title }}</title>

  <!-- ADD THIS LINE: RSS autodiscovery -->
  <link rel="alternate" type="application/atom+xml" title="{{ metadata.title }}" href="{{ '/feed.xml' | url }}">

  <link rel="stylesheet" href="{{ '/css/style.css' | url }}">
</head>
```

**What `type="application/atom+xml"` means:** This MIME type tells the browser and RSS readers that the linked file is an Atom feed (the XML format used by `feed.njk`). RSS readers scan for this tag automatically. Without it, someone would need to know your feed URL to subscribe.

**Why `{{ '/feed.xml' | url }}`?** The `| url` filter applies your `pathPrefix` so the link resolves to `/vibe-id-daily/feed.xml` instead of `/feed.xml`. Without this, the autodiscovery link would point to a 404.

---

## 7. Email Subscribe Widget

The subscribe widget sits in your sidebar and gives readers two ways to follow the site: via email (using the follow.it service) or directly via RSS reader.

### Step 7a - Register with follow.it

1. Go to [follow.it](https://follow.it)
2. Sign up for a free account
3. Click **New Publisher** and enter your site URL: `https://YOURUSERNAME.github.io/vibe-id-daily/`
4. follow.it will detect your `/feed.xml` via the autodiscovery tag you added in Step 6
5. After adding your publisher, go to the **PUBLISH** tab
6. Copy the **Subscription Form** embed code - it will look like:
   ```html
   <form action="https://api.follow.it/subscription-form/YOURCODE/8" method="post">
   ```
7. Note your unique form action URL - you need it in the next step

### Step 7b - Add the Widget to the Homepage

Open `00_meta/src/index.njk` and add the subscribe widget to the sidebar section. Find where your other sidebar widgets are (they follow a `<div class="widget">` pattern) and add this block:

```html
<div class="widget">
  <div class="widget-header">// Subscribe</div>
  <div class="widget-body">
    <p>Get new posts by email:</p>
    <form action="https://api.follow.it/subscription-form/YOURCODE/8" method="post">
      <input type="email" name="email" placeholder="your@email.com" required
             style="width:100%;padding:6px 8px;background:#0f172a;border:1px solid #334155;
                    color:#f1f5f9;border-radius:4px;margin-bottom:6px;font-size:0.85rem;">
      <button type="submit"
              style="width:100%;padding:6px 8px;background:#8b5cf6;color:#fff;
                     border:none;border-radius:4px;cursor:pointer;font-size:0.85rem;">
        Subscribe
      </button>
    </form>
    <p style="margin-top:8px;">
      Or <a href="{{ '/feed.xml' | url }}" target="_blank" rel="noopener">subscribe via RSS</a>.
    </p>
  </div>
</div>
```

Replace `YOURCODE` with the actual code from your follow.it embed URL.

**What is follow.it?** It is a free service that sends email notifications to subscribers whenever your RSS feed publishes a new entry. You do not build or maintain any email infrastructure - follow.it polls your feed and handles delivery. The form posts to their API server, which stores the email address and sends notifications on your behalf.

**Why inline styles?** The sidebar widget body uses inline styles here to keep the subscribe form self-contained and to match the existing dark Midnight Pro theme (`#0f172a` background, `#f1f5f9` text) without requiring new CSS classes.

### Step 7c - Add follow.it Domain Verification

follow.it requires a verification meta tag in your `<head>` to confirm you own the site. After registering, go to your follow.it dashboard and find your verification tag. It looks like:

```html
<meta name="follow.it-verification-code" content="YOURVERIFICATIONCODE">
```

Add this to `00_meta/src/_includes/base.njk` inside the `<head>` block, alongside the RSS autodiscovery link:

```html
<link rel="alternate" type="application/atom+xml" title="{{ metadata.title }}" href="{{ '/feed.xml' | url }}">
<meta name="follow.it-verification-code" content="YOURVERIFICATIONCODE">
```

---

## 8. Archive Subscribe Widget

The archive page (`/archive/`) gets the same subscribe widget so subscribers can find it from any page, not just the homepage.

Open `00_meta/src/archive.njk` and add the same `// Subscribe` widget block from Step 7b to the archive page's sidebar section.

It should be the identical HTML block - copy it exactly from `index.njk`. Both the homepage and archive page should now show the subscribe form.

---

## 9. Future-Date Publishing Filter

Right now, if you create a post with `date: 2026-07-01`, it might appear on your site immediately (if Eleventy uses the file creation date or a past date). The future-date filter gates posts so they only appear when their date arrives.

### How the filter works

Open `.eleventy.js`. Find your `posts` collection and update the filter function:

```javascript
const now = new Date(); // declared at the top of the file, outside module.exports

eleventyConfig.addCollection("posts", function(collectionApi) {
  return collectionApi
    .getFilteredByGlob("00_meta/src/posts/day-*.md")
    .filter(post => post.date <= now)   // ADD THIS LINE - the future-date gate
    .reverse(); // newest first
});

// postsChron must use the same filter for consistency
eleventyConfig.addCollection("postsChron", function(collectionApi) {
  return collectionApi
    .getFilteredByGlob("00_meta/src/posts/day-*.md")
    .filter(post => post.date <= now);  // ADD THIS LINE
  // Note: no .reverse() - oldest first for prev/next navigation
});
```

**Why `post.date <= now` evaluates correctly:**

Eleventy parses the `date:` frontmatter value into a JavaScript `Date` object. `now` is also a `Date` object (set when the build starts). JavaScript can compare two `Date` objects with `<=` - it compares their internal timestamp values (milliseconds since Unix epoch). A post dated `2026-07-01` has a timestamp in the future, so `post.date <= now` is `false` and the post is filtered out.

**When does a future post become visible?**

When the GitHub Actions cron job runs at midnight UTC, `now` is set to the current build time. Any post whose `date` is on or before that day becomes visible. Because your cron runs at `0 0 * * *` (midnight UTC), each post with `date: YYYY-MM-DD` will first appear on the midnight UTC build of that calendar date.

**Testing the filter locally:**

Create a test post with tomorrow's date and run `npm run build`. Confirm it does NOT appear in the local build. Then temporarily change the date to yesterday, rebuild, and confirm it DOES appear. Revert the date back to tomorrow before pushing.

### Important: Eleventy uses UTC dates

Frontmatter dates like `date: 2026-07-01` are interpreted as `2026-07-01T00:00:00Z` (midnight UTC). If you are in a timezone behind UTC (US Eastern = UTC-4 or UTC-5), a post dated `2026-07-01` goes live at 8:00 PM Eastern on June 30th (when it becomes July 1st UTC). This is intentional - the cron schedule and the date filter both operate on UTC.

---

## 10. Rename and Relink Your MOC Files

MOC (Map of Content) files are index pages for each folder. Phase 4 standardizes their names to match the numeric folder prefixes so the vault structure is consistent and self-documenting.

**The rename:**

| Old name | New name |
|----------|----------|
| `_meta_MOC.md` | `00_meta_MOC.md` |
| `_dailies_MOC.md` | `10_dailies_MOC.md` |
| `_wiki_MOC.md` | `20_wiki_MOC.md` |

### Step 10a - Rename the Files

```bash
cd /workspaces/vibe-id-daily

# Rename each MOC file
mv 00_meta/_meta_MOC.md 00_meta/00_meta_MOC.md
mv 10_dailies/_dailies_MOC.md 10_dailies/10_dailies_MOC.md
mv 20_wiki/_wiki_MOC.md 20_wiki/20_wiki_MOC.md
```

### Step 10b - Update All References

Every file that links to the old MOC names now has a broken link. Find and fix all references:

```bash
# Find all files referencing the old names
grep -rn "_meta_MOC\|_dailies_MOC\|_wiki_MOC" --include="*.md" .
```

For each file the grep returns, open it and update the link. The common patterns:

| Old reference | New reference |
|---------------|---------------|
| `[Meta MOC](_meta_MOC.md)` | `[Meta MOC](00_meta_MOC.md)` |
| `[Dailies MOC](../_dailies_MOC.md)` | `[Dailies MOC](../10_dailies_MOC.md)` |
| `[Wiki MOC](../_wiki_MOC.md)` | `[Wiki MOC](../20_wiki_MOC.md)` |
| `[Dailies MOC](10_dailies/_dailies_MOC.md)` | `[Dailies MOC](10_dailies/10_dailies_MOC.md)` |

If there are many files to update, you can use `sed` to do it in bulk:

```bash
# Update references in all .md files (run from repo root)
find . -name "*.md" -not -path "./node_modules/*" -not -path "./_site/*" \
  -exec sed -i \
    -e 's/_meta_MOC\.md/00_meta_MOC.md/g' \
    -e 's/_dailies_MOC\.md/10_dailies_MOC.md/g' \
    -e 's/_wiki_MOC\.md/20_wiki_MOC.md/g' \
  {} \;
```

### Step 10c - Verify with the Link Checker

```bash
npm run lint
```

If any broken links remain, the output will show exactly which file and which link target is broken. Fix each one before proceeding.

---

## 11. Bulk-Create 100-Day Post Stubs

A stub is a minimal post file with correct frontmatter and a one-line placeholder body. It serves as a calendar holder - the post will show up on the live site on its scheduled date, and you fill in the real content before or after that date.

### Step 11a - Verify the Sequential Date Logic

The date pattern is: Day 1 = whatever your first post date is, then +1 day per day number. In this project:
- Day 1 = `2026-04-09` (your project start date)
- Day N = `2026-04-09` + (N-1) days
- Day 33 = `2026-05-02`
- Day 100 = `2026-07-08`

Verify the formula for any day number:

```bash
# Day 33: start from Day 1 date (2026-04-09), add 32 days
date -d "2026-04-09 + 32 days" +%Y-%m-%d
# Expected: 2026-05-02
```

### Step 11b - Create Stubs for Days 33-100

Each stub needs: the `10_dailies/` source file (with full frontmatter), and a title that describes a real vibe coding technique.

Below is the bash script that creates all stubs. Run this from your repository root. It uses an associative array to map day numbers to titles:

```bash
#!/bin/bash

# Base date for Day 1
BASE_DATE="2026-04-09"

# Function to calculate the date for day N
get_date() {
  local day=$1
  local offset=$((day - 1))
  date -d "$BASE_DATE + $offset days" +%Y-%m-%d
}

# Map of day numbers to titles and slugs
declare -A TITLES
TITLES[33]="the-context-pruning-strategy-token-efficiency"
TITLES[34]="the-pedagogical-shadowing-aria-mirroring"
TITLES[35]="the-voice-to-logic-pipeline-ergonomic-level-up"
TITLES[36]="the-course-as-api-concept"
TITLES[37]="automated-rubric-calibration-the-fairness-audit"
TITLES[38]="the-cross-model-consensus-model-diversity-audit"
TITLES[39]="bilingual-sync-content-mirroring"
TITLES[40]="the-recursive-workspace-self-evolving-manual"

declare -A READABLE
READABLE[33]="The 'Context-Pruning' Strategy (Token Efficiency)"
READABLE[34]="The 'Pedagogical Shadowing' (ARIA-Mirroring)"
READABLE[35]="The 'Voice-to-Logic' Pipeline (Ergonomic Level-Up)"
READABLE[36]="The 'Course-as-API' Concept"
READABLE[37]="Automated Rubric Calibration (The Fairness Audit)"
READABLE[38]="The 'Cross-Model' Consensus (Model Diversity Audit)"
READABLE[39]="Bilingual Sync (Content Mirroring)"
READABLE[40]="The 'Recursive Workspace' (Self-Evolving Manual)"

# Create the stubs
for day in $(seq 33 40); do
  # Format day number with leading zero for file naming
  day_padded=$(printf "%02d" $day)
  slug="${TITLES[$day]}"
  title="${READABLE[$day]}"
  post_date=$(get_date $day)
  filename="10_dailies/day-${day_padded}-${slug}.md"

  # Skip if file already exists
  if [ -f "$filename" ]; then
    echo "Skipping (exists): $filename"
    continue
  fi

  cat > "$filename" << EOF
---
title: "Day ${day} - ${title}"
date: ${post_date}
tags: [vibe-coding, phase-4, daily]
---

# Day ${day}

*Full post coming on ${post_date}.*

**The Pointer:** [Coming soon]

**The Details:** [Coming soon]

**ID Application:** [Coming soon]

**Try This Today:** Run the Day ${day} technique on a current project and note one unexpected output.

---
**Backlinks:** [10_dailies MOC](../10_dailies/10_dailies_MOC.md)
EOF

  echo "Created: $filename"
done
```

Run the script:

```bash
bash scripts/create_stubs.sh
# Or paste the above and run it directly in terminal
```

### Step 11c - Verify the Stubs

```bash
# Count how many day-NN files now exist
ls 10_dailies/day-*.md | wc -l

# Check the date on a specific stub
head -5 10_dailies/day-40-the-recursive-workspace-self-evolving-manual.md
```

### Step 11d - Run the Lint Check

```bash
npm run lint
```

If any stub has a broken backlink (because the MOC rename in Step 10 is not yet complete), fix those first.

---

## 12. Extend the Wiki MOC

The Wiki MOC (`20_wiki/20_wiki_MOC.md`) is an index of all wiki deep-dive pages, organized by Phase. After creating stubs for Days 33-40 (and eventually 41-100), the Wiki MOC needs a corresponding entry for each day's wiki page.

### Step 12a - Check Current State of Wiki MOC

```bash
cat 20_wiki/20_wiki_MOC.md
```

Find the last day listed. If it ends at Day 32, you need to add entries for Days 33-40.

### Step 12b - Add Phase 4 Section to Wiki MOC

Open `20_wiki/20_wiki_MOC.md` and add a new Phase 4 section after the Phase 3 section:

```markdown
## Phase 4: Systemic Engineering & Institutional Scaling (Days 32-40)

| Day | Wiki Page | Core Concept |
|-----|-----------|-------------|
| 32 | [Day 32 - Schema-Driven ID](day-32-the-schema-driven-id-json-architect-wiki.md) | JSON schemas as instructional scaffolding |
| 33 | [Day 33 - Context Pruning](day-33-the-context-pruning-strategy-token-efficiency-wiki.md) | Token efficiency for long AI sessions |
| 34 | [Day 34 - Pedagogical Shadowing](day-34-the-pedagogical-shadowing-aria-mirroring-wiki.md) | ARIA as a separate build step |
| 35 | [Day 35 - Voice-to-Logic](day-35-the-voice-to-logic-pipeline-ergonomic-level-up-wiki.md) | Dictation as a CLI input strategy |
| 36 | [Day 36 - Course as API](day-36-the-course-as-api-concept-wiki.md) | Course structure as queryable data |
| 37 | [Day 37 - Rubric Calibration](day-37-automated-rubric-calibration-the-fairness-audit-wiki.md) | Automated alignment between syllabus, rubric, assignment |
| 38 | [Day 38 - Cross-Model Consensus](day-38-the-cross-model-consensus-model-diversity-audit-wiki.md) | Using multiple AI models to reduce false confidence |
| 39 | [Day 39 - Bilingual Sync](day-39-bilingual-sync-content-mirroring-wiki.md) | Semantic mirroring across languages |
| 40 | [Day 40 - Recursive Workspace](day-40-the-recursive-workspace-self-evolving-manual-wiki.md) | Self-auditing the agentic infrastructure |
```

### Step 12c - Create Wiki Stub Pages

For each new day in the Wiki MOC table, the linked wiki file must exist (or the link checker will flag it as broken). Create minimal stub pages:

```bash
for day in 33 34 35 36 37 38 39 40; do
  day_padded=$(printf "%02d" $day)
  # You need to map day numbers to their exact slug - use the same slugs from Step 11b
done
```

A wiki stub looks like this (example for Day 33):

```markdown
---
title: "Day 33 Wiki - The Context-Pruning Strategy"
tags: [wiki, phase-4, token-efficiency]
---

# Day 33 Wiki: The Context-Pruning Strategy (Token Efficiency)

**Core Concept:** Periodically summarizing and compressing long AI chat histories into a `MISSION_UPDATE.md` file prevents "token noise" from degrading AI focus and output quality.

## Framework Integration

| Framework | Element | Application |
|-----------|---------|-------------|
| Cognitive Load Theory | Extraneous load | Token noise = extraneous cognitive load for the AI |
| Instructional Design | Chunking | Compressed context = chunked session state |
| Quality Matters | Documentation | Audit trail of session decisions |

## Key Terms

- **Token Noise:** Outdated context in a long AI session that competes with current goals
- **Context Window:** The maximum amount of text an AI model can consider at once
- **MISSION_UPDATE.md:** A compressed summary file that replaces the full chat history at session boundaries

---
**Backlinks:** [Wiki MOC](20_wiki_MOC.md) | [Day 33 Post](../10_dailies/day-33-the-context-pruning-strategy-token-efficiency.md)
```

Create one stub for each day using the same pattern.

### Step 12d - Verify No Broken Links

```bash
npm run lint
```

All wiki MOC entries must resolve to actual files. Fix any broken links before moving on.

---

## 13. Update GEMINI.md for Phase 4

With MCP integration, the RSS feed, and the 100-day calendar in place, update `GEMINI.md` to reflect the Phase 4 state of the project.

Open `GEMINI.md` and append a Phase 4 section:

```markdown
## Phase 4: Scale & Sustainability Architecture

### MCP Integration (Active)
The Gemini CLI can now access the Obsidian vault directly via the obsidian-mcp-server.

**Activation:** Requires `.gemini/settings.json` with a valid Obsidian Local REST API key.
Copy `.gemini/settings.example.json` to `.gemini/settings.json` and replace the placeholder key.

**Usage prompts:**
- "Search my vault for notes on UDL checkpoint 2.2."
- "Based on my accessibility standards notes, suggest 3 improvements for Module 1."
- "Find all my wiki pages tagged with 'prompt-injection' and summarize the patterns."

**Security guardrail:** Never commit `.gemini/settings.json`. The real settings file is gitignored.
Only `.gemini/settings.example.json` (with placeholder key) is committed to the repository.

### Community Infrastructure
- **RSS feed:** `/feed.xml` - Atom format, 10 most recent posts, updated on every build.
- **Email subscriptions:** follow.it widget on homepage and archive page.
- **RSS autodiscovery:** `<link rel="alternate">` in `<head>` on all pages.

### Publishing Calendar
- Future-date filter: `post.date <= now` in `.eleventy.js`
- Posts go live automatically at midnight UTC on their scheduled date.
- Day 1 = 2026-04-09. Day 100 = 2026-07-08.
- Stubs for all 100 days exist in `10_dailies/`.

### Phase 4 Agentic Directives
- When editing posts for a future date, never change the `date:` frontmatter to today's date. Leave it at the scheduled date.
- When creating new wiki pages, always add the corresponding entry to `20_wiki/20_wiki_MOC.md` before committing.
- When asked to "check the feed," run `npm run build && cat _site/feed.xml | head -50`.
- When adding a new skill SOP, also add its entry to the Skill Library table in this file.
```

---

## 14. End-to-End Test

Run the full Phase 4 pipeline to verify every component:

### 14a. MCP Connection Test

```bash
# Start Gemini CLI (Obsidian must be open and running)
gemini
# At the prompt:
> search my vault for notes about cognitive load
# Expected: results from your Obsidian vault files
```

### 14b. RSS Feed Test

```bash
npm run build
# Check the feed file exists and has content
cat _site/feed.xml | head -20
# Expected: valid XML with <feed> root element and <entry> children

# Check the feed URL in the built HTML
grep "feed.xml" _site/index.html
# Expected: <link rel="alternate" ... href="/vibe-id-daily/feed.xml">
```

### 14c. Future-Date Filter Test

```bash
# Count how many posts appear (should not include future-dated stubs)
npm run build 2>&1 | grep "posts"

# Check the live count in the built site
ls _site/posts/ | wc -l
```

### 14d. Full Pipeline Test

```bash
npm run lint       # Should pass - 0 broken links
npm run build      # Should pass - builds cleanly
npm start          # Start local server
```

Open `http://localhost:8080/vibe-id-daily/` and check:

- [ ] Homepage loads with posts feed
- [ ] Subscribe widget appears in sidebar with email form and RSS link
- [ ] RSS link in subscribe widget resolves to `/vibe-id-daily/feed.xml`
- [ ] The feed.xml file has `<entry>` blocks for your recent posts
- [ ] No future posts appear in the feed (check the homepage post list dates)
- [ ] Archive page also shows the subscribe widget
- [ ] MOC links throughout the vault resolve to renamed files (no 404s)

### 14e. Push and Verify CI

```bash
git add .
git status
git commit -m "feat: Phase 4 - MCP integration, RSS feed, future-date filter, 100-day calendar"
git push origin main
```

Go to GitHub → **Actions** tab. Watch the workflow run:

1. **Check Links** job shows ✅
2. **Build and Deploy** job shows ✅
3. Open the live site URL from the Actions log
4. Open the live `feed.xml` URL directly in a browser
5. Paste the feed URL into the [W3C Feed Validator](https://validator.w3.org/feed/) to confirm it is valid Atom

---

## 15. Phase 4 Checklist

**MCP Integration:**
- [ ] Obsidian Local REST API plugin installed and enabled
- [ ] `.gemini/` added to `.gitignore` (entire folder ignored)
- [ ] `!.gemini/settings.example.json` exception added to `.gitignore`
- [ ] `.gemini/settings.example.json` committed with placeholder key
- [ ] `.gemini/settings.json` created locally with real key (NOT committed)
- [ ] `git status .gemini/settings.json` shows no output (it is ignored)
- [ ] MCP connection test passed in Gemini CLI (vault search returns results)

**RSS/Atom Feed:**
- [ ] `@11ty/eleventy-plugin-rss@^1.2.0` installed (v1, not v3)
- [ ] `rssPlugin` registered in `.eleventy.js` with `addPlugin()`
- [ ] `00_meta/src/_data/metadata.json` created with correct site URL
- [ ] `00_meta/src/feed.njk` created with `permalink: /feed.xml`
- [ ] `_site/feed.xml` exists after build
- [ ] Feed entries use `| url | absoluteUrl(metadata.url)` (pathPrefix applied)
- [ ] W3C Feed Validator reports 0 errors on the live feed URL

**RSS Autodiscovery:**
- [ ] `<link rel="alternate" type="application/atom+xml">` in `base.njk` `<head>`
- [ ] Autodiscovery link uses `| url` filter (resolves with pathPrefix)

**Email Subscribe Widget:**
- [ ] follow.it account created and site registered
- [ ] Subscribe widget added to `index.njk` sidebar
- [ ] Subscribe widget added to `archive.njk` sidebar
- [ ] follow.it domain verification meta tag in `base.njk`
- [ ] Form action URL uses the PUBLISH tab embed code from follow.it dashboard

**Future-Date Filter:**
- [ ] `const now = new Date()` declared outside `module.exports` in `.eleventy.js`
- [ ] `.filter(post => post.date <= now)` applied to both `posts` and `postsChron` collections
- [ ] Future-dated stubs do NOT appear in local build
- [ ] A stub dated yesterday DOES appear in local build (tested and reverted)

**MOC Rename:**
- [ ] `_meta_MOC.md` renamed to `00_meta_MOC.md`
- [ ] `_dailies_MOC.md` renamed to `10_dailies_MOC.md`
- [ ] `_wiki_MOC.md` renamed to `20_wiki_MOC.md`
- [ ] All references to old MOC names updated across all `.md` files
- [ ] `npm run lint` passes 0 broken links after rename

**100-Day Content Calendar:**
- [ ] Stubs exist for Days 33-40 in `10_dailies/`
- [ ] Each stub has correct `date:` frontmatter (sequential from Day 1 base date)
- [ ] Each stub has a descriptive `title:` matching the Work Plan pointer
- [ ] `npm run lint` passes with stubs in place

**Wiki MOC:**
- [ ] Phase 4 section added to `20_wiki/20_wiki_MOC.md` (Days 32-40)
- [ ] All wiki MOC links resolve to actual files
- [ ] Wiki stub pages created for Days 33-40
- [ ] Each wiki stub has backlinks to the MOC and the corresponding daily post

**GEMINI.md:**
- [ ] Phase 4 section added (MCP, community infrastructure, publishing calendar, directives)
- [ ] Security guardrail documented (never commit real settings.json)

**Full Pipeline:**
- [ ] `npm run lint && npm run build` completes without errors
- [ ] Live site reflects all Phase 4 changes
- [ ] Subscribe widget visible on homepage and archive page
- [ ] feed.xml accessible at `https://YOURUSERNAME.github.io/vibe-id-daily/feed.xml`
- [ ] W3C Feed Validator passes on live feed URL

---

## What Comes Next - Phase 5 Preview

Phase 5 (Days 41-60) focuses on Institutional Leadership & AI Governance:

- **Policy as Code**: Convert AI usage policies into system prompts and guardrail files that are injected into every workflow session. High-stakes environments need audit trails, not just good intentions.
- **Accessibility Debt Calculator**: Use the CLI to estimate remediation time for legacy courses based on audit outputs. Move from reactive fixing to strategic planning.
- **Multi-Persona Focus Groups**: Run a course module through a panel of AI personas (faculty, student, employer, auditor, dean) simultaneously to surface institutional resistance before launch.
- **Prompt Versioning**: Track your Skill SOPs in Git with version tags so that every audit run is reproducible and comparable across time. Essential for compliance documentation.
- **LRS Integration**: Connect anonymized student interaction data (Learning Record Store) to the CLI to verify that your design decisions are actually producing the engagement patterns you intended.

**Prerequisite for Phase 5:** All Phase 4 checklist items above are complete. The 100-day publishing calendar is running automatically. The MCP bridge is active and tested. The RSS feed has at least one real subscriber.

---
**Backlinks:** [Meta MOC](00_meta_MOC.md) | [Phase 1 Tutorial](phase_1.md) | [Phase 2 Tutorial](phase_2.md) | [Phase 3 Tutorial](phase_3.md)
