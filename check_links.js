const fs = require('fs');
const path = require('path');

const getAllFiles = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('_site') && !fullPath.includes('.git')) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      if (file.endsWith('.md')) {
        arrayOfFiles.push(fullPath);
      }
    }
  });
  return arrayOfFiles;
};

const markdownFiles = getAllFiles(__dirname);
let hasErrors = false;

// Create a set of all valid basenames (without extension) for [[wikilink]] checking
const validBasenames = new Set(markdownFiles.map(f => path.basename(f, '.md')));
const validFiles = new Set(markdownFiles.map(f => path.relative(__dirname, f).replace(/\\/g, '/')));

console.log('Linting Vault Links...');

markdownFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  
  // Find WikiLinks: [[link]] or [[link|text]]
  const wikiLinkRegex = /\[\[(.*?)(?:\|.*?)?\]\]/g;
  let match;
  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const linkTarget = match[1];
    // Simple check: does any file have this basename?
    // Note: this is a basic check. Obsidian resolves wikilinks by basename.
    if (!validBasenames.has(linkTarget) && !validBasenames.has(path.basename(linkTarget, '.md'))) {
      console.log(`❌ Broken WikiLink in ${path.relative(__dirname, file)}: [[${linkTarget}]]`);
      hasErrors = true;
    }
  }

  // Find standard Markdown links: [text](path)
  const mdLinkRegex = /\[.*?\]\((.*?)\)/g;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const linkPath = match[1].split('#')[0]; // ignore hash fragments
    if (linkPath.startsWith('http') || linkPath.startsWith('mailto:') || linkPath === '') continue;
    
    const absoluteLinkPath = path.resolve(path.dirname(file), linkPath);
    if (!fs.existsSync(absoluteLinkPath)) {
      console.log(`❌ Broken Markdown Link in ${path.relative(__dirname, file)}: (${linkPath})`);
      hasErrors = true;
    }
  }
});

if (!hasErrors) {
  console.log('✅ All links are valid!');
}
