---
title: "day 93 voice command optimization zsh aliases"
layout: post.njk
---

# Day 93: Voice-Command Optimization (Zsh Aliases)

- **The Pointer:** Expand the voice command vocabulary by adding 5 new contextual aliases derived from the most-repeated phrases in your weekly work.
- **The Details:** Voice commands only save effort if they are natural. Track the phrases you say most often while working, then create zsh functions that map those phrases to complex commands.
- **Action:**

```bash
# Review last month's command history for patterns
history | awk '{print $2}' | sort | uniq -c | sort -rn | head -20
# Then add top candidates to .zshrc as functions
```

---

*Phase 7: Endgame & Sustained Resilience*

**Backlink:** [Dailies MOC](10_dailies_MOC.md)