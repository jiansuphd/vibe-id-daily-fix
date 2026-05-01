# Design: Vault-wide Link Refactor (2025-05-15)

## Goal
Update all internal links and file references in Markdown files to align with the new directory and Map of Content (MOC) naming structure.

## Context
The following renames have occurred:
- `_meta/` -> `_meta/`
- `_dailies/` -> `_dailies/`
- `_wiki/` -> `_wiki/`
- `_meta/_meta_MOC.md` -> `_meta/_meta_MOC.md`
- `_dailies/_dailies_MOC.md` -> `_dailies/_dailies_MOC.md`
- `20_wiki/20_wiki_MOC.md` -> `20_wiki/20_wiki_MOC.md`
- `root_MOC.md` -> `root_MOC.md`

## Scope
- **Target Files**: All `.md` files in the repository.
- **Excluded Directories**: `node_modules/`, `_site/`, `.git/`.
- **Modifications**: Text replacements within Markdown content.

## Proposed Replacements
The following string replacements will be applied sequentially:

1.  `_meta/` -> `_meta/` (and case-insensitive `_meta/` -> `_meta/`)
2.  `_dailies/` -> `_dailies/` (and case-insensitive `_dailies/` -> `_dailies/`)
3.  `_wiki/` -> `_wiki/` (and case-insensitive `_wiki/` -> `_wiki/`)
4.  `_meta_MOC.md` -> `_meta_MOC.md`
5.  `_dailies_MOC.md` -> `_dailies_MOC.md`
6.  `_wiki_MOC.md` -> `_wiki_MOC.md`
7.  `root_MOC.md` -> `root_MOC.md`
8.  `root_MOC.md` -> `root_MOC.md`
9.  `root_MOC` -> `root_MOC` (fragment replacement)

*Note: For the directory replacements (1-3), I will also look for instances without the trailing slash if they appear to be references to the folders themselves.*

## Approach
1.  **Discovery**: Identify all `.md` files using `find`.
2.  **Implementation**: Use a Python script to iterate through files and apply replacements. Using Python ensures cross-platform compatibility and allows for more nuanced regex if needed.
3.  **Validation**:
    - Run `grep` to ensure no instances of the old strings remain in `.md` files.
    - Manually check a few key files (`README.md`, `root_MOC.md`).
4.  **Logging**: Update `_meta/log.md` with the action taken.

## Risk Mitigation
- **Regex Anchoring**: Ensure directory replacements don't accidentally match parts of other words (though "_meta" is unique enough).
- **External Links**: Replacements will only target the specific prefix strings, minimizing impact on external URLs.
