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

const rootPath = path.resolve(__dirname, '../../');
const markdownFiles = getAllFiles(rootPath);
let hasErrors = false;

// Create a set of all valid basenames (without extension) for [[wikilink]] checking
const validBasenames = new Set(markdownFiles.map(f => path.basename(f, '.md')));

console.log('Linting Vault Links starting from:', rootPath);

markdownFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  
  const relativeFile = path.relative(rootPath, file);
  
  // Find WikiLinks: [[link]] or [[link|text]]
  const wikiLinkRegex = /\[\[(.*?)(?:\|.*?)?\]\]/g;
  let match;
  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const linkTarget = match[1];
    // Simple check: does any file have this basename?
    if (!validBasenames.has(linkTarget) && !validBasenames.has(path.basename(linkTarget, '.md'))) {
      console.log(`❌ Broken WikiLink in ${relativeFile}: [[${linkTarget}]]`);
      hasErrors = true;
    }
  }

  // Find standard Markdown links: [text](path)
  const mdLinkRegex = /\[.*?\]\((.*?)\)/g;
  while ((match = mdLinkRegex.exec(content)) !== null) {
    const linkPath = match[1].split('#')[0]; // ignore hash fragments
    if (linkPath.startsWith('http') || linkPath.startsWith('mailto:') || linkPath === '' || linkPath.startsWith('//')) continue;
    
    // Resolve relative to the file it's in
    const absoluteLinkPath = path.resolve(path.dirname(file), linkPath);
    if (!fs.existsSync(absoluteLinkPath)) {
      console.log(`❌ Broken Markdown Link in ${relativeFile}: (${linkPath})`);
      hasErrors = true;
    }
  }
});

if (!hasErrors) {
  console.log('✅ All links are valid!');
} else {
  process.exit(1);
}
