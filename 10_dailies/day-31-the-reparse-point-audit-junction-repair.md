---
title: "The "Reparse Point" Audit (Junction Repair)"
date: 2026-04-30
tags: [issue, vibe-coding]
---

# The "Reparse Point" Audit (Junction Repair)

- **The Pointer:** Use the CLI to identify and repair broken Directory Junctions in your configuration folders.
- **The Details:** In complex multi-drive or cloud-synced environments (OneDrive / Google Drive), symbolic links or junctions can break if the target path shifts. Use `cmd /c dir /al` to expose hidden reparse points that standard file explorers often ignore.
- **ID Application:** Rapidly fix Obsidian vaults or local development environments that "fail to load" due to missing plugin paths without needing to re-install or lose data.
- **Action:** `cmd /c dir /al /s` | gemini "Identify any broken junctions in this directory and suggest the rmdir / mklink /j repair command."

---
**Backlink:** [[10_Issues_MOC|Issues MOC]]
