# Vault-wide Link Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Perform a repository-wide refactor of Markdown links to align with the new directory and file naming structure.

**Architecture:** Use a Python script to perform regex-based replacements on all `.md` files (excluding `_site` and `node_modules`).

**Tech Stack:** Python 3, Regex.

---

### Task 1: Create the Refactor Script

**Files:**
- Create: `scripts/refactor_vault_links.py`

- [ ] **Step 1: Write the refactor script**

```python
import os
import re

def refactor_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    replacements = [
        (r'_meta/', '_meta/'),
        (r'_meta/', '_meta/'),
        (r'_dailies/', '_dailies/'),
        (r'_dailies/', '_dailies/'),
        (r'_wiki/', '_wiki/'),
        (r'_wiki/', '_wiki/'),
        (r'_meta_MOC\.md', '_meta_MOC.md'),
        (r'_dailies_MOC\.md', '_dailies_MOC.md'),
        (r'_wiki_MOC\.md', '_wiki_MOC.md'),
        (r'root_MOC\.md', 'root_MOC.md'),
        (r'Root_MOC\.md', 'root_MOC.md'),
        (r'root_MOC', 'root_MOC')
    ]

    new_content = content
    for pattern, replacement in replacements:
        new_content = re.sub(pattern, replacement, new_content)

    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    exclude_dirs = {'.git', 'node_modules', '_site'}
    updated_count = 0
    
    for root, dirs, files in os.walk('.'):
        dirs[:] = [d for d in dirs if d not in exclude_dirs]
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                if refactor_file(file_path):
                    print(f"Updated: {file_path}")
                    updated_count += 1
    
    print(f"Total files updated: {updated_count}")

if __name__ == "__main__":
    main()
```

- [ ] **Step 2: Commit the script**

```bash
git add scripts/refactor_vault_links.py
git commit -m "tool: add vault-wide link refactor script"
```

---

### Task 2: Execute the Refactor

- [ ] **Step 1: Run the script**

Run: `python3 scripts/refactor_vault_links.py`
Expected: Output listing updated files and a total count.

- [ ] **Step 2: Verify changes with grep**

Run: `grep -rEi "_meta/|_dailies/|_wiki/|_meta_MOC.md|_dailies_MOC.md|_wiki_MOC.md|root_MOC|root_MOC.md" . --exclude-dir={node_modules,_site,.git}`
Expected: No matches in Markdown files (except maybe for non-link text if not matched by script).

- [ ] **Step 3: Commit the changes**

```bash
git add .
git commit -m "refactor: update vault links to new directory structure"
```

---

### Task 3: Manual Verification and Cleanup

- [ ] **Step 1: Check README.md and root_MOC.md**
Check for any remaining `_meta` or `_wiki` strings that weren't caught because they lacked a trailing slash.

- [ ] **Step 2: Update log.md**
Append a new entry to `_meta/log.md` detailing the refactor.

- [ ] **Step 3: Commit final changes**

```bash
git add README.md root_MOC.md _meta/log.md
git commit -m "docs: finalize link refactor and update log"
```
