const fs = require('fs');
const path = require('path');

const getAllFiles = (dirPath, arrayOfFiles) => {
  const files = fs.readdirSync(dirPath);
  arrayOfFiles = arrayOfFiles || [];
  files.forEach(function(file) {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('_site') && !fullPath.includes('.git')) {
        arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
      }
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
};

const rootPath = process.cwd();
const allFiles = getAllFiles(rootPath);
let hasErrors = false;

// Create sets for validation
const validPaths = new Set(allFiles.map(f => path.relative(rootPath, f).replace(/\\/g, '/')));
const validBasenames = new Set(allFiles.map(f => path.basename(f, path.extname(f))));

console.log('Linting Vault Links starting from:', rootPath);

// Only lint .md files
const markdownFiles = allFiles.filter(f => f.endsWith('.md'));

markdownFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf-8');
  const relativeFile = path.relative(rootPath, file);
  
  // 1. Find WikiLinks: [[link]] or [[link|text]]
  const wikiLinkRegex = /\[\[(.*?)(?:\|.*?)?\]\]/g;
  let match;
  while ((match = wikiLinkRegex.exec(content)) !== null) {
    const linkTarget = match[1];
    const targetBasename = path.basename(linkTarget, path.extname(linkTarget));
    
    // Check if it's a valid path or a valid basename
    if (!validPaths.has(linkTarget) && 
        !validPaths.has(linkTarget + '.md') && 
        !validBasenames.has(linkTarget) &&
        !validBasenames.has(targetBasename)) {
      console.log(`❌ Broken WikiLink in ${relativeFile}: [[${linkTarget}]]`);
      hasErrors = true;
    }
  }

  // 2. Find standard Markdown links: [text](path)
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
