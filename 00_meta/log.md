# Maintenance Log

Append-only record of wiki operations. Sorted chronologically (oldest to newest).

---

## [2026-04-29] Project Pivot | Realigned focus to "Vibe Coding for IDs".
- Overhauled README, .gitignore, and Work Plan.
- Surgically removed all legacy project source files and documentation.
- Synchronized MOCs (Root, Projects, Wiki) to reflect a clean ID-focused state.
- Created Vibe Coding Intro wiki page.
- Updated Eleventy dashboard with ID-focused content.
- Updated project progress roadmap and status trackers.

## [2026-04-29] Lint and Update | Fixes and URL updates.
- Updated repository URLs to `dlab_jsu1` (initial rename).
- Linted vault links and fixed broken README reference.

## [2026-04-29] Structural Reorganization | Finalizing VibeID Daily.
- **Branding**: Officially selected **VibeID Daily**.
- **Renaming**: Renamed `10-Issues` to `10_Issues`.
- **Consolidation**: Moved `src/` and `scripts/` into `_meta/`.
- **Pipeline**: Created `scripts/cyborg_aggregator.js` and updated `scripts/parse_logs.js`.
- **Wiki**: Synthesized pedagogical deep-dives for Phases 1, 2, and 3.
- **Consistency**: Updated MOCs and README to reflect the final 3-tier architecture.

## [2026-04-29] Style and Deployment Update | Applied New Yorker theme and fixed GitHub Actions.
- **Style**: Overwrote `_meta/src/css/style.css` with the New Yorker style theme.
- **Standards**: Fixed em dashes to comply with project standards (" - ").
- **Workflow**: Updated `.github/workflows/deploy.yml` to support building from the `_meta` directory.
- **Validation**: Verified the build locally and pushed to main.

## [2026-04-29] Automation Orchestration | Configured daily builds and wiki linting.
- **CI/CD**: Added a `lint` job to `.github/workflows/deploy.yml` that runs before every build.
- **Automation**: Scheduled daily builds at midnight UTC to ensure the dashboard remains fresh.
- **Linting**: Improved `_meta/scripts/check_links.js` to perform repository-wide link validation.
- **Scripts**: Integrated linting into `package.json` for easier local and CI execution.

## [2026-04-29] Dash Usage Fix | Corrected "Day 27" formatting.
- **Surgical Update**: Fixed dash usage for "Day 27: The "Vibe-to-SOP" (Auto-Documentation)" across 5 files.
- **Clarification**: Removed spaces around hyphens for compound words/phrases as per instructions, maintaining " - " for em dashes elsewhere.
- **Files Affected**: `Work Plan.md`, `day-27-...md`, `day-27-...-wiki.md`, `10_Issues_MOC.md`, `_wiki_MOC.md`.

## [2026-05-01] Link Fixes | Corrected all specified links for GitHub compatibility.
- Fixed links in root_MOC.md for correct file paths.
- Corrected day numbering inconsistencies and links in _wiki/_wiki_MOC.md.
- Verified links in _dailies/_dailies_MOC.md are correct.
- Fixed script file extensions and relative paths for dashboard components in _meta/_meta_MOC.md.
- Corrected root_MOC linking in README.md.

## [2026-05-01] Theme Contrast Pass | Softened reading surfaces and shipped to production.
- Added a dedicated `--text-soft` variable to `00_meta/src/css/style.css`.
- Applied the softer tone to `body`, `.prose`, list items, blockquotes, and widget paragraphs while keeping headings and strong emphasis bright.
- Lifted the site canvas from near-black to dark blue-gray (`#020617` -> `#0b1220`) and aligned the HUD backdrop.
- Rebuilt locally, validated computed colors in browser, pushed the production release, and verified the public site post-deploy.

---

## [2026-05-02] Mobile Responsive Fix | Added 600px breakpoint to style.css.
- Scaled down `.intro-block h1`, `article h1`, and `.prose` font sizes on narrow screens.
- Added `overflow-wrap: break-word` to prose; `flex-wrap: wrap` to HUD metrics.
- Subscribe form stacks vertically on mobile. Dashboard grid padding reduced.
- Viewport meta tag confirmed already present in `base.njk`.

## [2026-05-02] Day 33 Automation Confirmed | Cron deploy fired at midnight UTC.
- Day 33 went live at `/posts/day-33-the-context-pruning-strategy-token-efficiency/` with no manual action.
- Future-date pipeline confirmed working through Day 100 (2026-07-08).

## [2026-05-03] Post Prev/Next Navigation | Added prev/next nav to all post pages.
- Added `postsChron` Eleventy collection (oldest-first, future posts filtered) to `.eleventy.js` to power directional nav.
- Updated `post.njk` with a two-column nav block: ← Previous on left, Next → on right.
- Day 1 behavior: empty left slot, Next → right. Day 100 behavior: ← Previous left, "Full Archive →" right.
- Added `.post-nav`, `.post-nav-inner`, `.post-nav-btn`, `.post-nav-label`, `.post-nav-title` CSS with hover glow and mobile stacking at 600px.
- Commit: `11dcc01`.

## [2026-05-03] Design Audit Implementation | Applied three CSS refinements from design review.
- **Styled scrollbars**: Added webkit `::-webkit-scrollbar` rules (8px, purple thumb, dark track) and Firefox `scrollbar-color`/`scrollbar-width` to `html`. Eliminates white scrollbar immersion break.
- **Subtle background grid**: Added `background-image` repeating linear-gradient to `body` — 48px grid at 4% purple opacity. Adds terminal depth without distracting from content.
- **Fluid type for intro heading**: Replaced fixed `1.3rem` on `.intro-block h1` with `clamp(0.95rem, 2.5vw + 0.5rem, 1.3rem)`. Scales smoothly across viewport widths; 600px override now only adjusts `letter-spacing`.
- Items already confirmed done: CSS variables (all in `:root`), mobile breakpoints, color contrast. No changes needed for those.

## [2026-05-03] Q&A | Post nav behavior on daily publish cycles confirmed.
- Question: what happens to the prev/next nav on Day 34 when Day 35 goes live?
- Answer: fully automatic — Eleventy rebuilds all 100+ pages on each cron run. `postsChron` re-evaluates `post.date <= now` at build time. Day 34's nav updates from "Full Archive →" to "Next → Day 35" the moment the May 4 cron fires. No manual changes needed, no stale HTML.

---

**Backlinks:** [Root MOC](../root_MOC.md)
