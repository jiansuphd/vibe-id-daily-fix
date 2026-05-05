# Project Progress Log

## Phase 1: Foundation & Pivot (Completed)
- [x] **Project Realignment**: Pivoted mission from general AI news to "Vibe Coding for IDs."
- [x] **Legacy Cleanup**: Surgically removed all legacy project source files and documentation.
- [x] **SSG Setup**: Established Eleventy baseline with "Modern Tech Dashboard" aesthetic.
- [x] **Wiki Initialization**: Initialized Knowledge Compiler with synchronized MOCs and Vibe Coding intro.
- [x] **Deployment**: Configured GitHub Actions for automated GH Pages deployment.

## Phase 2: Content Digitization (Completed)
- [x] **Branding Selection**: Finalized **VibeID Daily** as the project brand.
- [x] **Log Conversion**: Transferring `Vibe_Coding_Daily_Log.md` entries to dashboard editions via parsing script.
- [x] **Persona Development**: Established Senior ID and Accessibility Auditor behavioral anchors.
- [x] **Pipeline Fixes**: Fixed GitHub Pages CSS absolute pathing issues.
- [x] **Wiki Deep-Dives**: Created synthesized wiki pages for core ID strategic pointers.

## Phase 3: Automation & Agentic Workflows (Completed)
- [x] **The "Cyborg" Script**: Created `scripts/cyborg_aggregator.js` to aggregate ID trends, accessibility news, and pedagogical research.
- [x] **Skill Library**: Established `_meta/skills/` and created `AltText_Reviewer.md` SOP.
- [x] **Skill Library Expansion**: Built out `Bloom_Taxonomy_Aligner.md`, `Synthetic_Student_Simulator.md`, and `Prompt_Injection_Auditor.md` SOPs.
- [x] **UI Refinement (v4.0)**: Replaced high-contrast terminal theme with "Midnight Pro" (Deep Slate/Violet) and simplified transmission titles.
- [x] **Home Page Feed**: Updated the landing page to show a scrollable feed of the latest 5 transmissions with full content.
- [x] **GitHub Actions Orchestration**: Automated daily builds at midnight UTC and integrated repo-wide link linting.
- [x] **Phase 3 Audit (2026-05-01)**: Verified all 6 Phase 3 deliverables complete. `cyborg_aggregator.js` v2.0 outputs to `10_dailies/`; `00_meta/skills/` contains 6 SOPs (`AltText_Reviewer.md`, `Bloom_Taxonomy_Aligner.md`, `Synthetic_Student_Simulator.md`, `Prompt_Injection_Auditor.md`, `Syllabus_Migration.md`, `MCP_Knowledge_Bridge.md`); Midnight Pro theme confirmed (`#020617`/`#8b5cf6`/`#06b6d4`); `index.njk` renders `collections.posts | head(5)`; `daily_cyborg.yml` runs at 23:30 UTC, `deploy.yml` builds at midnight + on push with lint gate.

## Phase 4: Scale & Sustainability (Completed)
- [x] **Vault Standardization**: Converted all Obsidian Wikilinks to standard Markdown links (80+ files).
- [x] **Infrastructure Rebuild**: Rebuilt Eleventy dashboard from scratch with "Midnight Pro" theme.
- [x] **Visual Refinement**: Polished UI with "New Yorker" editorial style (Serif headers, high-fidelity contrast).
- [x] **Content Distribution**: Implemented automated Atom/RSS feed (`feed.xml`).
- [x] **Hybrid Architecture**: Config files at root, source files inside `_meta/src` for a clean vault.
- [x] **Modern Deployment**: Switched to official GitHub Actions deployment to resolve 404s.
- [x] **Live Site Diagnosis (2026-05-01)**: Identified that GitHub Pages was serving the default Jekyll README instead of the Eleventy build. Root cause: the `peaceiris/actions-gh-pages` publish-to-branch approach was mismatched with the repo's workflow-based Pages source setting.
- [x] **Workflow Fix**: Replaced `peaceiris/actions-gh-pages@v3` with the official pipeline (`actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages`) and updated permissions to `pages: write` + `id-token: write`.
- [x] **RSS Plugin Fix (2026-05-01)**: The `feat: RSS feed` commit introduced `@11ty/eleventy-plugin-rss@^3.0.0`, which requires Eleventy v3+ but the project targets v2. This caused CI to fail with `Invalid EleventyConfig.addPlugin signature`. Fixed by downgrading the plugin to `^1.2.0` (the v1 series, CJS-compatible with Eleventy v2) and using the default export via `require('@11ty/eleventy-plugin-rss')`.
- [x] **Midnight Pro v4.0 Redesign (2026-05-01)**: Rewrote `base.njk`, `style.css`, `index.njk`, `archive.njk`, `post.njk` to match reference screenshot - dark bg `#020617`, violet `#8b5cf6`, cyan `#06b6d4`, HUD header, dashboard grid + sidebar, `// TRANSMISSION` label.
- [x] **Folder Rename (2026-05-01)**: Renamed vault folders `_meta→00_meta`, `_dailies→10_dailies`, `_wiki→20_wiki`. Updated all path references in `.eleventy.js`, `package.json`, scripts, workflow, `root_MOC.md`, `index.njk`.
- [x] **Days 32–40 Created (2026-05-01)**: Created 9 new daily post files in `10_dailies/` and committed. Day 32 (`day-32-the-schema-driven-id-json-architect.md`) is dated 2026-05-01. Live page: `https://jiansuphd.github.io/vibe-id-daily/posts/day-32-the-schema-driven-id-json-architect/`
- [x] **Day 32 Wiki Created (2026-05-01)**: Added `20_wiki/day-32-the-schema-driven-id-json-architect-wiki.md` with schema table, JSON example, and ID framework integration notes.
- [x] **MOC + Cyborg Posts Removed (2026-05-01)**: Deleted MOC and cyborg aggregation files from `00_meta/src/posts/`. Updated parse script to only match `day-\d+-.+\.md` pattern so they are never re-added.
- [x] **Sidebar Cleanup (2026-05-01)**: Removed "// Phase 4 Active" widget (Progress Log / Work Plan links) from `index.njk`. Removed "Phase: 4 - Scale & Sustain" metric from HUD metrics bar.
- [x] **Front Page Tagline (2026-05-01)**: Added tagline to `index.njk` - "The Vibe ID Daily - Tracking the journey from Natural Language to Systemic Automation."
- [x] **Wiki Broken Links Fix (2026-05-01)**: After folder rename, all 31 `20_wiki/*.md` backlinks pointed to `../_dailies/` (old path). Fixed via bulk sed replace to `../10_dailies/`. CI lint now passes cleanly.
- [x] **Progress Log**: https://github.com/jiansuphd/vibe-id-daily/blob/main/00_meta/progress.md
- [x] **Article Title Cleanup (2026-05-01)**: Replaced the repetitive full descriptive title inside each article `<h1>` with a clean "Day N" label. Archive and sidebar links still show the full title. Changes: added `dayLabel` filter to `.eleventy.js`; updated `post.njk` to use `Day N` (fallback to `title` for non-day posts); updated `parse_dailies.js` to strip the duplicate `# Heading` from the markdown body during parse.
- [x] **Source Vault Headings Updated (2026-05-01)**: Bulk-updated all 39 source files in `10_dailies/` so their in-body H1 reads `# Day N` instead of the full descriptive title. Keeps the Obsidian vault clean and consistent with the published site.
- [x] **Day 18 Created (2026-05-01)**: Added missing `10_dailies/day-18-multiple-means-of-action-and-expression-udl-how.md` - "Multiple Means of Action & Expression (The HOW of Learning)" - dated 2026-04-17 to fill the gap between Day 17 and Day 19. Covers the UDL principle of varied response methods, keyboard navigability, and alternative submission formats. Live: `https://jiansuphd.github.io/vibe-id-daily/posts/day-18-multiple-means-of-action-and-expression-udl-how/`

- [x] **MCP Integration (2026-05-01)**: Connect vault to external Model Context Protocol servers.
- [x] **MCP Integration Scaffold (2026-05-01)**: Created `.gemini/settings.example.json` with `mcpServers` block targeting `obsidian-mcp-server` via `npx`. Updated `GEMINI.md` with MCP activation steps, usage prompts, and security guardrail. Updated `.gitignore` to ignore `.gemini/` but allow `.gemini/settings.example.json`. **Remaining user action:** (1) Install Obsidian Local REST API plugin, (2) copy `settings.example.json` → `settings.json`, (3) replace `REPLACE_WITH_YOUR_LOCAL_REST_API_KEY` with real key from plugin settings. Once key is in place, run `gemini` CLI - the `obsidian` MCP server activates automatically.
- [x] **Community Loop (2026-05-01)**: Implemented RSS/Email distribution. Fixed Atom feed self-link path, added RSS autodiscovery `<link rel="alternate">` to `<head>` on all pages, and added a `// Subscribe` sidebar widget to the homepage with an email subscription form (follow.it) and a fallback RSS reader link. All 8 automated output checks pass.
- [x] **Phase 4 Audit (2026-05-01)**: Verified all 8 core Phase 4 deliverables complete. (1) Vault Standardization - zero `[[wikilinks]]` remain across `10_dailies/`, `20_wiki/`, `00_meta/`. (2) Infrastructure Rebuild - `00_meta/src/` contains all Eleventy templates; site builds cleanly. (3) Visual Refinement - New Yorker serif style was intentionally superseded by Midnight Pro v4.0 (Inter/sans-serif, `#020617`/`#8b5cf6`/`#06b6d4`); both items are correctly checked off. (4) Content Distribution - `_site/feed.xml` present with 10 entries and correct self-link. (5) Hybrid Architecture - `.eleventy.js` and `package.json` at root; all source in `00_meta/src/`. (6) Modern Deployment - `deploy.yml` uses `actions/configure-pages@v4` → `upload-pages-artifact@v3` → `deploy-pages@v4`; no `peaceiris` reference. (7) Live Site Diagnosis - documented historically; root cause (Jekyll vs. Eleventy Pages source mismatch) resolved. (8) Workflow Fix - official pipeline with `pages: write` + `id-token: write` permissions confirmed active.
- [x] **Phase 4 Sub-item Audit (2026-05-01)**: Verified all 9 logged Phase 4 sub-items. (1) RSS Plugin Fix - `package.json` pinned to `^1.2.0`; `.eleventy.js` uses default CJS `require()`. (2) Midnight Pro v4.0 - `style.css` confirmed: `--bg:#020617`, `--accent:#8b5cf6`, `--cyan:#06b6d4`, `// TRANSMISSION` pseudo-content, `.hud` header in `base.njk`. (3) Folder Rename - `.eleventy.js` references `00_meta/src` throughout; no legacy `_meta`/`_dailies`/`_wiki` paths remain in config. (4) Days 32–40 - all 9 files present in `10_dailies/` (`day-32` through `day-40`). (5) Day 32 Wiki - `20_wiki/day-32-the-schema-driven-id-json-architect-wiki.md` confirmed present. (6) Parse Script Pattern - `parse_dailies.js` filters on `/^day-\d+-.+\.md$/`; MOC/cyborg files excluded. (7) Sidebar Cleanup - no `Phase 4`, `Work Plan`, or `Progress Log` widget references remain in `index.njk`. (8) Front Page Tagline - line 30 of `index.njk` confirmed: "Tracking the journey from Natural Language to Systemic Automation." (9) Wiki Broken Links Fix - all `20_wiki/*.md` backlinks point to `../10_dailies/`; zero `../_dailies/` references remain. `npm run lint` passes cleanly.
- [x] **Final Phase 4 Item Audit (2026-05-01)**: Verified remaining 5 logged items. (1) Article Title Cleanup - `dayLabel` filter present in `.eleventy.js` (line 20); `post.njk` renders `<h1>Day N</h1>` via filter (confirmed in built `_site/posts/day-18.../index.html` line 39); `parse_dailies.js` strips leading `# Heading` from body (line 37). (2) Source Vault Headings - all 40 `day-*.md` files in `10_dailies/` have `# Day N` as their only H1; no descriptive titles remain. (3) Day 18 Created - file present, `date: 2026-04-17`, fills gap between Day 17 and Day 19. (4) MCP Integration - **Complete (Repo-side)**; troubleshooting finished. Identified port (27124), SSL (false), and API key variable name as primary fix points. `settings.example.json` and `GEMINI.md` updated with correct connection logic. (5) Community Loop - RSS autodiscovery `<link rel="alternate">` confirmed in `base.njk` line 11; subscribe widget with email form and RSS fallback confirmed in `index.njk`. All 8 output checks passed.

- [x] **MCP Troubleshooting & Sync (2026-05-01)**: Resolved schema errors by updating configuration logic and documented local-side fixes. Pushed final synchronized state to GitHub.

- [x] **Phase 4 Complete (2026-05-01)**: All Phase 4 items verified and closed. MCP scaffold delivered (`.gemini/settings.example.json`, `GEMINI.md` docs). Community Loop live (RSS + email subscribe widget). MOC renames complete (`00_meta_MOC.md`, `10_dailies_MOC.md`, `20_wiki_MOC.md`). Work Plan updated to reflect Phases 1–4 all complete. `npm run lint` passes clean.
- [x] **MCP Scaffold Final Verification (2026-05-01)**: Full check run against all 5 MCP deliverables. (1) `.gemini/settings.example.json` - committed and tracked by git (`git ls-files` confirmed); contains valid `mcpServers` JSON block targeting `obsidian-mcp-server` via `npx`, with `OBSIDIAN_API_URL` and placeholder `OBSIDIAN_API_KEY`. (2) `.gitignore` - line 35: `.gemini/` ignored; line 36: `!.gemini/settings.example.json` whitelisted; real keys cannot be accidentally committed. (3) `GEMINI.md` - `## 🌉 MCP Integration (Obsidian Bridge)` section at line 45; includes 4-step activation instructions, 2 usage prompt examples, and security guardrail warning. (4) `progress.md` - both MCP items marked `[x]`; Phase 4 Complete entry logged. (5) `Work Plan.md` - status banner reads "Phases 1–4 Complete ✅"; System Health MCP = ✅; Phase 4 header = `(Completed)`; MCP line item = `[x]`. All checks pass. Note: stale audit text on progress.md line 54 ("not yet complete") is historical - superseded by the `[x]` entries that follow it in append-only log order.
- [x] **Wiki MOC Extended to Day 40 (2026-05-01)**: Updated `20_wiki/20_wiki_MOC.md` to cover all 40 days. (1) Inserted missing Day 18 entry (`day-18-multiple-means-of-action-and-expression-udl-how-wiki.md`) into Phase 3 between Day 17 and Day 19. (2) Created `20_wiki/day-18-multiple-means-of-action-and-expression-udl-how-wiki.md` stub with core concept, ID framework table (UDL checkpoints), agentic CLI prompt, key terms, and backlinks. (3) Added new **Phase 4: Advanced Synthesis (Integration & Scale)** section covering Days 32–40 with links to all 9 existing wiki files (`day-32` through `day-40`). Committed as `dfd29a6`. CI workflow run: https://github.com/jiansuphd/vibe-id-daily/actions/runs/25136898160/workflow
- [x] **Archive Page Subscribe Widget (2026-05-01)**: Replaced the plain RSS link in the `/archive/` sidebar with the full `// Subscribe` widget (follow.it email form + RSS reader fallback link), matching the homepage. Updated `00_meta/src/archive.njk`.
- [x] **Tooling Recommendation (2026-05-01)**: For this kind of work - editing files, running terminal commands, committing code - **VS Code desktop is significantly better**: full terminal access (no command simplification), file explorer/diff view/source control panel visible alongside chat, faster (no browser rendering overhead), and extensions work fully (GitHub Pull Requests, GitLens, etc.). The browser version is convenient for quick questions or when away from your machine, but for agentic workflows (lint → edit → commit → push), VS Code desktop is the right tool. To reconnect to this Codespace from VS Code desktop: Command Palette → **Codespaces: Connect to Codespace** (requires the GitHub Codespaces extension).
- [x] **RSS Feed Entry URL Fix (2026-05-01)**: Diagnosed "feed not found" error on follow.it subscribe. Root cause: `feed.njk` built entry `<link>` URLs using `post.url | absoluteUrl(metadata.url)` - but `post.url` does not include the `pathPrefix` (`/vibe-id-daily/`), so all 10 entry links resolved to `https://jiansuphd.github.io/posts/...` (404s). Fixed by applying the `| url` filter first: `post.url | url | absoluteUrl(metadata.url)`. Verified post-deploy - all entry links now correctly read `https://jiansuphd.github.io/vibe-id-daily/posts/...`. Committed `d91314e`. **Next step for follow.it**: re-submit `https://jiansuphd.github.io/vibe-id-daily/feed.xml` in the follow.it dashboard to refresh their feed cache after this fix.

- [x] **follow.it Subscription Setup - URL & Verification (2026-05-01)**: Fixed two remaining follow.it issues: (1) Updated form action URL in `00_meta/src/index.njk` and `00_meta/src/archive.njk` from stale pre-registration URL to new `api.follow.it/subscription-form/NnBnOFdoNUVm.../8` endpoint from the PUBLISH tab embed code. (2) Added follow.it domain verification meta tag (`u9MQkA8XcPXKWJTfAcg8`) to `_includes/base.njk` `<head>`. Commits: `b84e031`, `16452b0`.
- [x] **Future-Date Publishing Filter (2026-05-01)**: Added `post.date <= now` filter to the `posts` collection in `.eleventy.js`. Future-dated posts are hidden from the live site until midnight UTC on their publish date - zero manual intervention needed. Committed `a1832ca`.
- [x] **Days 41-60 Initial Stubs (2026-05-01)**: Batch-created 20 stub placeholder files in `10_dailies/` and `00_meta/src/posts/` with generic topics (the "Spaced Repetition Engine", "Rubric-as-Prompt", etc.). Dates: Day 41 = 2026-05-10 through Day 60 = 2026-05-29. **These stubs were replaced** in the next entry with canonical Phase 5 content. Committed `c84cc3b`.
- [x] **Work Plan 100-Day Roadmap Complete (2026-05-01)**: Added Phase 5 (Days 41-60, Institutional Leadership & AI Governance), Phase 6 (Days 61-80, Advanced Orchestration & Scaling), and Phase 7 (Days 81-100, Endgame & Sustained Resilience) to `Work Plan.md`. Status banner updated to "Phases 1–4 Complete ✅ | Phases 5–7 Queued (Days 41–100)". Commits: `d781847`, `1eee564`.
- [x] **Daily Posts & Wikis Full Canonical Update (2026-05-01)**: (1) Removed all 20 generic Day 41-60 stub files from `10_dailies/` and `00_meta/src/posts/`. (2) Re-created Days 41-60 with canonical Phase 5 content: "Institutional AI Manifesto", "Accessibility Debt Calculator", "Inter-Departmental Knowledge Graph", etc. (3) Created Days 61-80 (Phase 6: Advanced Orchestration) and Days 81-100 (Phase 7: Endgame & Sustained Resilience) daily posts in both `10_dailies/` and `00_meta/src/posts/`. (4) Created 60 wiki stubs in `20_wiki/` for Days 41-100. (5) Extended `20_wiki/20_wiki_MOC.md` to cover all 100 days with Phase 5, 6, and 7 sections.

- [x] **Privacy Cleanup - Personal Info Removed (2026-05-01)**: Stripped all personal references from 119 files across the entire repo. Replaced with neutral professional equivalents. Zero matches confirmed via final grep verification.
- [x] **13 Canonical Title Corrections (2026-05-01)**: Updated titles for Days 45, 54, 66, 67, 69, 70, 75, 78, 80, 82, 86, 89, and 91 across posts, wiki stubs, dailies, MOCs, and Work Plan. Old titles have been replaced with neutral and professional equivalents.
- [x] **Vibe Coding Intro Page (2026-05-01)**: (1) Updated `20_wiki/vibe-coding-intro.md` from stub to full 420-line canonical 100-day strategic pointer log. (2) Created `00_meta/src/vibe-coding-intro.njk` - standalone Eleventy page at `/vibe-coding-intro/` with full 100-day guide formatted for the web. (3) Added "// The Vibe Coding Guide" sidebar widget to `index.njk` homepage linking to the guide. Live at: `https://jiansuphd.github.io/vibe-id-daily/vibe-coding-intro/`
- [x] **Future-Date Schedule Fixed (2026-05-01)**: Days 33–100 had no `date:` front matter, causing Eleventy to use the file creation date (today) and show all posts simultaneously on the live site. Fixed by injecting correct sequential dates: Day 33 = 2026-05-02, Day 34 = 2026-05-03, …, Day 100 = 2026-07-08. The future-date filter in `.eleventy.js` now correctly gates each post. One new post goes live automatically each day at midnight UTC via the scheduled GitHub Actions cron job. Commit: `55af9f4`.
- [x] **Theme Contrast Softening (2026-05-01)**: Added `--text-soft` to `00_meta/src/css/style.css` and applied it to `body`, `.prose`, `.prose li`, `.prose blockquote`, and `.widget p` so long-form reading surfaces render at `rgb(214, 222, 232)` instead of the previous near-white `rgb(241, 245, 249)`. Bright hierarchy was preserved for headings and strong emphasis. Production ship commit: `a626b06`.
- [x] **Blue-Gray Canvas Pass (2026-05-01)**: Lifted the global background from `#020617` to `#0b1220` and aligned the sticky HUD backdrop to `rgba(11, 18, 32, 0.8)`. Result: calmer overall contrast without changing layout or accent colors. Verified on the live site after deploy.
- [x] **Production Deploy + Post-Deploy Sweep (2026-05-01)**: Shipped the softened theme to GitHub Pages via `main`; deploy workflow completed successfully. Post-deploy browser check confirmed live values on homepage and post pages: body background `rgb(11, 18, 32)`, body/prose text `rgb(214, 222, 232)`, bright headings `rgb(241, 245, 249)`, HUD backdrop `rgba(11, 18, 32, 0.8)`. No urgent visual regressions observed.

- [x] **Homepage Intro Block Added (2026-05-02)**: Added "Introduction to Vibe Coding for IDs" block to `index.njk` above the post feed. Includes Core Principles and Key Workflows. Styled with `.intro-block.prose` and `hr.intro-divider`. Commit: `c4672f9`.
- [x] **Sidebar Reordered (2026-05-02)**: Final sidebar order: Start Here → About → Repository → Archives → Subscribe. Multiple commits: `e2c1f51`, `35cbf1d`, `e374c64`, `3158bce`.
- [x] **Color Contrast Improved (2026-05-02)**: Brightened `--text` to `#f1f5f9`, `--text-dim` to `#cbd5e1`. Added `--text-soft` for reading surfaces. Canvas lifted from `#020617` to `#0b1220`. Commits: `942c8fb`, `a626b06`.
- [x] **Mobile Responsive Layout Fixed (2026-05-02)**: Added `600px` breakpoint to `style.css` - intro heading scales down, prose stays within screen, subscribe form stacks vertically, HUD metrics wrap. Commit: `9059101`.
- [x] **Day 33 Automation Verified (2026-05-02)**: Confirmed cron deploy fired at midnight UTC and Day 33 went live automatically. Pipeline working end-to-end through Day 100 (2026-07-08).

## Phase 5: Post Experience & Polish (In Progress)
- [x] **Post Prev/Next Navigation (2026-05-03)**: Added directional nav to all post pages. `postsChron` collection (oldest-first) powers `getPreviousCollectionItem` / `getNextCollectionItem` filters. Day 1 shows Next → only; Day 100 shows ← Previous + "Full Archive →". CSS: `.post-nav` panel cards with purple accent label, cyan title, hover glow, mobile-stacking at 600px. Commit: `11dcc01`.
- [x] **Design Audit CSS (2026-05-03)**: Implemented three improvements from design review: (1) Styled dark scrollbars - webkit + Firefox `scrollbar-color`, eliminates white scrollbar immersion break. (2) Subtle terminal background grid - 48px repeating linear-gradient at 4% purple opacity on `body`. (3) Fluid type on intro heading - `clamp(0.95rem, 2.5vw + 0.5rem, 1.3rem)` replaces fixed size for smooth viewport scaling. Items already complete: CSS variables (all in `:root`), mobile breakpoints, color contrast.

- [x] **Privacy & Redundancy Audit (2026-05-03)**: Thorough repo-wide lint. Removed personal and institution references from 80 files (60 wiki files + post tags + post content). Renamed day-86 files to neutral slugs. Removed duplicate Day 60 post and stale `superpowers/` planning directory. Lint and build pass clean. Commit: `a1f39c3`.

---

## Ops Log

*Append-only chronological record of vault operations. Supplements the phase checklist above with day-by-day operational detail.*

### [2026-04-29] Project Pivot | Realigned focus to "Vibe Coding for IDs".
- Overhauled README, .gitignore, and Work Plan.
- Surgically removed all legacy project source files and documentation.
- Synchronized MOCs (Root, Projects, Wiki) to reflect a clean ID-focused state.
- Created Vibe Coding Intro wiki page. Updated Eleventy dashboard and progress roadmap.

### [2026-04-29] Lint and Update | Fixes and URL updates.
- Updated repository URLs to `dlab_jsu1` (initial rename). Linted vault links and fixed broken README reference.

### [2026-04-29] Structural Reorganization | Finalizing VibeID Daily.
- **Branding**: Officially selected **VibeID Daily**.
- **Renaming**: Renamed `10-Issues` to `10_Issues`.
- **Consolidation**: Moved `src/` and `scripts/` into `_meta/`.
- **Pipeline**: Created `scripts/cyborg_aggregator.js` and updated `scripts/parse_logs.js`.
- **Wiki**: Synthesized pedagogical deep-dives for Phases 1, 2, and 3.
- **Consistency**: Updated MOCs and README to reflect the final 3-tier architecture.

### [2026-04-29] Style and Deployment Update | Applied New Yorker theme and fixed GitHub Actions.
- **Style**: Overwrote `_meta/src/css/style.css` with the New Yorker style theme.
- **Standards**: Fixed em dashes to comply with project standards (" - ").
- **Workflow**: Updated `.github/workflows/deploy.yml` to support building from the `_meta` directory.
- **Validation**: Verified the build locally and pushed to main.

### [2026-04-29] Automation Orchestration | Configured daily builds and wiki linting.
- **CI/CD**: Added a `lint` job to `.github/workflows/deploy.yml` that runs before every build.
- **Automation**: Scheduled daily builds at midnight UTC.
- **Linting**: Improved `_meta/scripts/check_links.js` for repository-wide link validation.
- **Scripts**: Integrated linting into `package.json` for easier local and CI execution.

### [2026-04-29] Dash Usage Fix | Corrected "Day 27" formatting.
- Fixed dash usage for "Day 27" across 5 files. Removed spaces around hyphens for compound words while maintaining " - " for em dashes.

### [2026-05-01] Link Fixes | Corrected all specified links for GitHub compatibility.
- Fixed links in root_MOC.md, _wiki_MOC.md, _dailies_MOC.md, _meta_MOC.md, README.md.

### [2026-05-01] Theme Contrast Pass | Softened reading surfaces and shipped to production.
- Added `--text-soft` variable; applied to body, prose, blockquotes, widget paragraphs.
- Lifted canvas from `#020617` → `#0b1220` and aligned HUD backdrop.

### [2026-05-02] Mobile Responsive Fix | Added 600px breakpoint to style.css.
- Scaled `.intro-block h1`, `article h1`, `.prose` for narrow screens.
- Added `overflow-wrap: break-word`; subscribe form stacks vertically; HUD metrics wrap.

### [2026-05-02] Day 33 Automation Confirmed | Cron deploy fired at midnight UTC.
- Day 33 went live with no manual action. Future-date pipeline confirmed through Day 100.

### [2026-05-03] Post Prev/Next Navigation | Added prev/next nav to all post pages.
- `postsChron` collection + `getPreviousCollectionItem` / `getNextCollectionItem` filters.
- Day 1: Next → only. Day 100: ← Previous + "Full Archive →". Mobile-stacks at 600px. Commit: `11dcc01`.

### [2026-05-03] Design Audit Implementation | Three CSS refinements applied.
- Styled dark scrollbars (webkit + Firefox). Subtle 48px terminal background grid. Fluid type on intro heading via `clamp()`.

### [2026-05-03] Q&A | Post nav behavior on daily publish cycles confirmed.
- Eleventy rebuilds all pages on each cron run. `postsChron` re-evaluates `post.date <= now` at build time. Nav updates automatically - no stale HTML, no manual changes needed.

### [2026-05-03] Privacy & Redundancy Audit | 80 files cleaned, 261 lines removed.
- Removed personal and institution references from 60 wiki files, post tags, and post content. Renamed day-86 files to neutral slugs. Deleted duplicate Day 60 post and stale `superpowers/` planning directory. Lint and build pass clean.

### [2026-05-03] Log Merge | `log.md` merged into `progress.md`; log.md deleted.
- Ops Log section added to `progress.md`. References updated in 5 files. Backlinks corrected.

### [2026-05-03] Build Pipeline Refactor | `src/posts/` made a build artifact.
- `parse_dailies.js` generates `00_meta/src/posts/` at build time. Added to `.gitignore`, removed from git tracking. Created `.eleventyignore`. Set `setUseGitIgnore(false)` in `.eleventy.js`. `prebuild` npm hook added to `package.json`.

### [2026-05-03] Docs | `vibe-tech-stack.md` expanded.
- Added content architecture section (3-layer pipeline) and post navigation section (postsChron, template logic, edge cases, CSS).

### [2026-05-03] README Cleanup | Personal narrative and refs removed.
- Removed "Senior ID" - changed to "Senior ID". Cleaned health, certification, and institution refs from Manifesto section. Updated folder descriptions to reflect current build artifact pipeline.

### [2026-05-03] Style | Em dashes normalized to ` - ` across repo.
- 123 files updated. All `—` replaced with spaced hyphens per project dash standard.

### [2026-05-04] Accuracy Fix | Wiki page count corrected in Work Plan.
- `Work Plan.md` line updated: 40 deep-dive pages → 101. Commit `5e15264`.

### [2026-05-04] Docs | Phase 1 beginner tutorial created.
- `00_meta/phase_1.md` created (1,172 lines). Covers 16 steps: prerequisites, repo setup, folder structure, Node.js init, Eleventy install, `.gitignore`, GEMINI.md, `.eleventy.js`, CSS, Nunjucks layout, homepage, MOCs, parser script, first build, GitHub Actions deploy, and verification checklist. Commits `6cb8abd`, `9651085`.

### [2026-05-04] Docs | Phase 2 beginner tutorial created.
- `00_meta/phase_2.md` created (1,340 lines). Covers 16 steps: brand finalization, daily post format, enhanced parser with inline annotations, `post.njk` with prev/next nav, archive page, dashboard-grid homepage, ID persona anchors, `pathPrefix` / `url` filter fix, 5 example posts, wiki deep-dive pages, wiki MOC maintenance, and full pipeline verification. Commits `226cfb4`, `faad49a`.

### [2026-05-04] Content | Day 1 expanded with full detail.
- `10_dailies/day-01-...md` rewritten from 3-bullet summary to full post: Prompt Drift, Zero-Shot Grounding, Chat-to-Environment model, Senior ID Persona, QM/UDL guardrails, Bloom's Taxonomy integration, and "Try This Today" exercise.
- `20_wiki/day-01-...wiki.md` fully synthesized: Gagné Event 1 / QM 1.1 / UDL / Bloom's framework integration, 4-section GEMINI.md implementation guide with code examples, Living Document and Multi-Persona advanced patterns, 4 common pitfalls. Commit `79cbf5d`.

### [2026-05-04] Fix | Broken backlink in Day 1 unblocked CI deploy.
- Day 1 backlink pointed to `_dailies_MOC.md` (does not exist); corrected to `10_dailies_MOC.md`. Lint was failing in GitHub Actions before the build step, silently keeping the live site on the prior version. Commit `6a8cce5`.

### [2026-05-04] Content | Day 2 expanded with full detail.
- `10_dailies/day-02-the-skeleton-first-prompt.md` rewritten from 3-bullet summary to full post: Instructional Debt concept, Mechanics of Structural Planning, Module Mapping / Taxonomy Verification / QM Alignment under ID Application, Strategic Impact, and actionable "Try This Today" blockquote exercise.
- `20_wiki/day-02-the-skeleton-first-prompt-wiki.md` fully synthesized: Gagné Event 2, Cognitive Load Theory (Sweller), QM Standard 2.1, Bloom's progressive architecture framework integration; 3-stage technical implementation with real prompt templates and audit checklist; JSON Schema and Nested Skeleton advanced patterns; 4 common pitfalls with specific failure modes. Commit `01f4138`.

### [2026-05-04] Content | Day 3 expanded with full detail.
- `10_dailies/day-03-the-draft-to-diff-workflow.md` rewritten from 3-bullet summary to full post: Total Rewrite vs. Delta Management concept, Instructional Debt framing, Draft-to-Diff mechanics with directive prompt pattern, ID application covering SME voice preservation and WCAG 2.2 accessibility patching, audit transparency, and "Try This Today" UDL-diff exercise.
- `20_wiki/day-03-the-draft-to-diff-workflow-wiki.md` fully synthesized: Gagné Event 5 / QM 8.2 / UDL Principle 1 / Cognitive Load framework integration; 3 technical prompt patterns (Accessibility Patch, UDL Scaffold Addition, Version Delta Audit) with real diff-block examples; advanced applications (Git as instructional diff tool, staged diff reviews, diff as ADA documentation); 4 common pitfalls. Commit `9621159`.

### [2026-05-05] Docs | Phase 3 beginner tutorial created.
- `00_meta/phase_3.md` created (1,332 lines, 16 steps). Covers: three-layer automation hierarchy, GitHub Actions YAML with cron syntax decoder, intermediate Node.js skills breakdown, Eleventy `setUseGitIgnore(false)` bug explanation, `cyborg_aggregator.js` (fully commented, with duplicate-guard), Skill Library rationale and 3 SOPs (AltText Reviewer, Bloom Taxonomy Aligner, Prompt Injection Auditor), `check_links.js` with regex walkthrough, two-job GitHub Actions workflow (`lint` → `deploy` with `needs: lint`), GEMINI.md Phase 3 update, end-to-end test sequence, and 25-item Phase 3 checklist. Commit `871fc15`.

### [2026-05-05] Content | Day 4 expanded with full detail.
- `10_dailies/day-04-prompt-injection-for-standards.md` rewritten from 3-bullet stub to full post: Generic Template problem framed as core ID friction, Zero-Shot Learning / Grounded Logic model, Mechanics of Grounding (Hallucinated Compliance concept, Read-Only library pattern), ID Application covering syllabus template injection, brand compliance injection, and WCAG 2.2 technical audit alignment (criteria 2.5.8, 2.4.11), Strategic Impact (Artisanal Editing → Systemic Reliability), and "Try This Today" CLI prompt exercise. Privacy rules applied: institution names and course codes removed.
- `20_wiki/day-04-prompt-injection-for-standards-wiki.md` fully synthesized: Gagné Event 2 / QM 4.1 / UDL Principle 2 / Cognitive Load Theory framework integration; 3 technical prompt patterns with full templates (Syllabus Template Injection, WCAG Audit Injection, Brand Compliance Injection); advanced applications (Layered Injection with 3 simultaneous documents, Living Reference Files, SME Voice Preservation via injection); 4 common pitfalls (outdated documents, context position, no conflict escalation clause, over-large reference files). Commit `1812137`.

### [2026-05-05] Privacy Audit | Removed institution names, course codes, and personal data repo-wide.
- Scanned all `.md` files via grep for: institution names (UT, Haslam), course codes (AREC, SCM), "Digital Learning team", WCAG 2.1 references.
- Found 17 violations across 5 files: `Work Plan.md` (13 violations), `day-11`, `day-17`, `day-20`, `day-27` (1 each).
- Fixed: "UT Brand Standards" → "institutional brand standards", "AREC 342" → "a current course", "Digital Learning team" → "instructional team", "Torch Orange, Smokey Grey" → "institutional hex codes", course-specific file paths → generic equivalents.
- All 17 violations resolved. Lint passes clean. Commit `17ae609`.

---
**Backlinks:** [Root MOC](../root_MOC.md)
