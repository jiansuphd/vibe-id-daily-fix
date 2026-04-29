const fs = require('fs');
const path = require('path');
const Parser = require('rss-parser');
const parser = new Parser();

// ID, Accessibility, and Pedagogy RSS Feeds
const FEEDS = [
  { name: 'eLearning Industry', url: 'https://elearningindustry.com/feed' },
  { name: 'EdSurge', url: 'https://www.edsurge.com/articles_rss' },
  { name: 'WCAG Updates (W3C)', url: 'https://www.w3.org/blog/news/feed' },
  { name: 'Faculty Focus', url: 'https://www.facultyfocus.com/feed/' }
];

const ISSUES_DIR = path.join(__dirname, '..', '10-Issues');

async function aggregateFeeds() {
  console.log('🤖 Cyborg Script Initiated: Scanning for ID Trends, Accessibility, and Pedagogical Research...');
  
  if (!fs.existsSync(ISSUES_DIR)) {
    fs.mkdirSync(ISSUES_DIR, { recursive: true });
  }

  let aggregatedContent = `---
title: "🤖 Cyborg Aggregation: Latest ID & Accessibility Trends"
date: ${new Date().toISOString().split('T')[0]}
tags: [aggregation, trends, accessibility]
---

# Daily Cyborg Aggregation

*This automated report aggregates the latest trends in Instructional Design, Web Accessibility, and Pedagogical Research to fuel your Vibe Coding sessions.*

## Latest Trends & Updates
`;

  for (const feedConfig of FEEDS) {
    try {
      console.log(`Fetching: ${feedConfig.name}`);
      const feed = await parser.parseURL(feedConfig.url);
      
      aggregatedContent += `\n### 📰 ${feedConfig.name}\n`;
      
      // Get top 3 items from each feed
      feed.items.slice(0, 3).forEach(item => {
        aggregatedContent += `- **[${item.title}](${item.link})**\n`;
        if (item.contentSnippet) {
          // Clean up HTML from snippet and truncate
          let snippet = item.contentSnippet.replace(/(<([^>]+)>)/gi, "").substring(0, 150);
          aggregatedContent += `  > *${snippet}...*\n`;
        }
      });
    } catch (error) {
      console.error(`❌ Failed to fetch ${feedConfig.name}: ${error.message}`);
    }
  }

  aggregatedContent += `\n\n---
**Reference:** [[10_Issues_MOC|Issues MOC]]
`;

  const dateSlug = new Date().toISOString().split('T')[0];
  const filename = path.join(ISSUES_DIR, `cyborg-aggregation-${dateSlug}.md`);
  
  fs.writeFileSync(filename, aggregatedContent);
  console.log(`✅ Aggregation complete! Report generated at: ${filename}`);
}

aggregateFeeds();
