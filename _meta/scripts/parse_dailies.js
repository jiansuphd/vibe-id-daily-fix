const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../../_dailies');
const destDir = path.join(__dirname, '../src/posts');

// Ensure destination exists
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);

files.forEach(file => {
    if (file.endsWith('.md') && file !== '10_dailies_MOC.md') {
        const filePath = path.join(srcDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // Add layout to frontmatter if not present
        if (content.startsWith('---')) {
            const endOfFrontmatter = content.indexOf('---', 3);
            if (endOfFrontmatter !== -1) {
                let frontmatter = content.substring(0, endOfFrontmatter + 3);
                let body = content.substring(endOfFrontmatter + 3);
                
                // Fix titles with nested quotes
                frontmatter = frontmatter.replace(/title: "(.*)"/g, (match, p1) => {
                    const cleanTitle = p1.replace(/"/g, "'");
                    return `title: "${cleanTitle}"`;
                });

                if (!frontmatter.includes('layout:')) {
                    frontmatter = frontmatter.replace('---', '---\nlayout: post.njk');
                }
                content = frontmatter + body;
            }
        } else {
            // No frontmatter, add minimal one
            const title = file.replace('.md', '').replace(/-/g, ' ');
            content = `---\ntitle: "${title}"\nlayout: post.njk\n---\n\n${content}`;
        }

        // Strip the Obsidian backlink at the end
        content = content.replace(/---\n\*\*Backlink:\*\*.*$/m, '');

        fs.writeFileSync(path.join(destDir, file), content);
        console.log(`Processed: ${file}`);
    }
});
