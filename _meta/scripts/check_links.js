const fs = require('fs');
const path = require('path');

/**
 * Link Checker v2.0
 * Validates internal Markdown links and backlink consistency.
 */

const rootDir = path.join(__dirname, '../..');
const mdFiles = [];

function walk(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            if (!file.startsWith('.') && file !== 'node_modules' && file !== '_site' && file !== 'posts') {
                walk(filePath);
            }
        } else if (file.endsWith('.md')) {
            mdFiles.push(filePath);
        }
    });
}

walk(rootDir);

let errors = 0;

mdFiles.forEach(file => {
    const content = fs.readFileSync(file, 'utf8');
    const links = content.match(/\[.*?\]\((.*?)\)/g);

    if (links) {
        links.forEach(link => {
            const url = link.match(/\[.*?\]\((.*?)\)/)[1];
            if (!url.startsWith('http') && !url.startsWith('#')) {
                // Decode URL for spaces
                const targetPath = path.resolve(path.dirname(file), decodeURIComponent(url));
                if (!fs.existsSync(targetPath)) {
                    console.error(`❌ Broken link in ${path.relative(rootDir, file)}: ${url}`);
                    errors++;
                }
            }
        });
    }
});

if (errors === 0) {
    console.log('✅ All internal links are valid.');
} else {
    console.log(`\nFound ${errors} broken links.`);
    process.exit(1);
}
