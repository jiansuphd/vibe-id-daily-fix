const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '..', '00_Meta', 'Vibe_Coding_Daily_Log.md');
const issuesDir = path.join(__dirname, '..', '10-Issues');
const wikiDir = path.join(__dirname, '..', '20_Wiki');

// Ensure directories exist
if (!fs.existsSync(issuesDir)) fs.mkdirSync(issuesDir, { recursive: true });
if (!fs.existsSync(wikiDir)) fs.mkdirSync(wikiDir, { recursive: true });

const logContent = fs.readFileSync(logFilePath, 'utf-8');

// A simple regex to find daily entries in the log
// Assuming entries start with "## Day X" or "## [Date]"
const entryRegex = /##\s+(.*?)\n([\s\S]*?)(?=\n##\s+|$)/g;

let match;
let count = 0;

while ((match = entryRegex.exec(logContent)) !== null) {
  const titleLine = match[1].trim();
  const body = match[2].trim();

  // Create a slug for the file name
  const slug = titleLine.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  if (!slug) continue;

  const issueFileName = `${slug}.md`;
  const wikiFileName = `${slug}-wiki.md`;

  const issueContent = `---
title: "${titleLine}"
date: ${new Date().toISOString().split('T')[0]}
tags: [issue]
---

# ${titleLine}

${body}
`;

  const wikiContent = `---
title: "${titleLine} - Concept Wiki"
tags: [wiki, concept]
---

# ${titleLine} - Pedagogical Synthesis

*This is an auto-generated wiki page for the concepts discussed in the daily pointer.*

## ID Framework Integration
(To be expanded by Vibe Coding using Bloom's Taxonomy or QM Standards)

## Technical Implementation
(To be expanded)

---
**Reference:** [[${issueFileName}|Original Issue]]
`;

  fs.writeFileSync(path.join(issuesDir, issueFileName), issueContent);
  fs.writeFileSync(path.join(wikiDir, wikiFileName), wikiContent);
  count++;
}

console.log(`Successfully parsed ${count} entries into 10-Issues and 20_Wiki.`);
