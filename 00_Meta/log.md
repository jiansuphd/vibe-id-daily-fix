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
- **Consolidation**: Moved `src/` and `scripts/` into `00_Meta/`.
- **Pipeline**: Created `scripts/cyborg_aggregator.js` and updated `scripts/parse_logs.js`.
- **Wiki**: Synthesized pedagogical deep-dives for Phases 1, 2, and 3.
- **Consistency**: Updated MOCs and README to reflect the final 3-tier architecture.

## [2026-04-29] Style and Deployment Update | Applied New Yorker theme and fixed GitHub Actions.
- **Style**: Overwrote `00_Meta/src/css/style.css` with the New Yorker style theme.
- **Standards**: Fixed em dashes to comply with project standards (" - ").
- **Workflow**: Updated `.github/workflows/deploy.yml` to support building from the `00_Meta` directory.
- **Validation**: Verified the build locally and pushed to main.

## [2026-04-29] Automation Orchestration | Configured daily builds and wiki linting.
- **CI/CD**: Added a `lint` job to `.github/workflows/deploy.yml` that runs before every build.
- **Automation**: Scheduled daily builds at midnight UTC to ensure the dashboard remains fresh.
- **Linting**: Improved `00_Meta/scripts/check_links.js` to perform repository-wide link validation.
- **Scripts**: Integrated linting into `package.json` for easier local and CI execution.

## [2026-04-29] Dash Usage Fix | Corrected "Day 27" formatting.
- **Surgical Update**: Fixed dash usage for "Day 27: The "Vibe-to-SOP" (Auto-Documentation)" across 5 files.
- **Clarification**: Removed spaces around hyphens for compound words/phrases as per instructions, maintaining " - " for em dashes elsewhere.
- **Files Affected**: `Work Plan.md`, `day-27-...md`, `day-27-...-wiki.md`, `10_Issues_MOC.md`, `20_Wiki_MOC.md`.

---

**Backlinks:** [[00_Root_MOC|Root MOC]]
