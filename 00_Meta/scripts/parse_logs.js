const fs = require('fs');
const path = require('path');

const workPlanPath = path.join(__dirname, '..', 'Work Plan.md');
const issuesDir = path.join(__dirname, '..', '..', '10_Issues');
const wikiDir = path.join(__dirname, '..', '..', '20_Wiki');

// Ensure directories exist
if (!fs.existsSync(issuesDir)) fs.mkdirSync(issuesDir, { recursive: true });
if (!fs.existsSync(wikiDir)) fs.mkdirSync(wikiDir, { recursive: true });

const content = fs.readFileSync(workPlanPath, 'utf-8');
console.log(`Read ${content.length} characters from ${workPlanPath}`);

// More flexible regex to find daily entries starting with "### Day X:"
// We account for potential variations in dashes (hyphen vs em-dash) and spacing
const entryRegex = /### Day (\d+): (.*?)\r?\n([\s\S]*?)(?=\r?\n### Day \d+:|\r?\n## |\r?\n---|$)/g;

let match;
let count = 0;

// Reference date is Wednesday, April 29, 2026 (Day 30/31)
const baseDate = new Date('2026-04-29');

while ((match = entryRegex.exec(content)) !== null) {
  const dayNum = parseInt(match[1]);
  const titleLine = match[2].trim();
  const body = match[3].trim();

  // Create a slug for the file name
  // Use a simple title cleaner for the slug
  const titleSlug = titleLine.toLowerCase()
    .replace(/[^\w\s-]/g, '') // remove non-word chars
    .replace(/[\s-]+/g, '-')  // collapse spaces and dashes
    .replace(/(^-|-$)/g, ''); // trim dashes
    
  const slug = `day-${dayNum.toString().padStart(2, '0')}-${titleSlug}`;
  
  const issueFileName = `${slug}.md`;
  const wikiFileName = `${slug}-wiki.md`;

  // Calculate backdate: Day 30 is baseDate, Day 1 is baseDate - 29 days
  const issueDate = new Date(baseDate);
  issueDate.setDate(baseDate.getDate() - (30 - dayNum));
  const dateString = issueDate.toISOString().split('T')[0];

  // Calculation for title stripping and hyphenation fix
  const cleanTitle = titleLine.replace(/^Day \d+: /, '').replace(/ - /g, '-');
  
  const issueContent = `---
title: "${cleanTitle}"
date: ${dateString}
tags: [issue, vibe-coding]
---

# ${cleanTitle}

${body.replace(/ - /g, '-')}

---
**Backlink:** [[10_Issues_MOC|Issues MOC]]
`;

  const wikiContent = `---
title: "${cleanTitle} - Concept Wiki"
tags: [wiki, concept, instructional-design]
---

# ${cleanTitle} - Pedagogical Synthesis

*This is an auto-generated wiki page for the concepts discussed in the daily pointer.*

## ID Framework Integration
(To be expanded by VibeID Daily using Bloom's Taxonomy or QM Standards)

## Technical Implementation
(To be expanded)

---
**Reference:** [[${issueFileName}|Original Issue]]
`;

  fs.writeFileSync(path.join(issuesDir, issueFileName), issueContent);
  fs.writeFileSync(path.join(wikiDir, wikiFileName), wikiContent);
  count++;
}

if (count === 0) {
    console.log("No matches found. Investigating line endings and format...");
    const lines = content.split(/\r?\n/);
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes("### Day")) {
            console.log(`Found marker at line ${i+1}: "${lines[i]}"`);
            // Check hex codes of the characters in that line
            let hex = "";
            for (let j = 0; j < lines[i].length; j++) {
                hex += lines[i].charCodeAt(j).toString(16) + " ";
            }
            console.log(`Hex: ${hex}`);
        }
    }
} else {
    console.log(`Successfully backdated and parsed ${count} entries into 10_Issues and 20_Wiki.`);
}
