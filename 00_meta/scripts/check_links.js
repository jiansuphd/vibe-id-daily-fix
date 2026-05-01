const fs = require('fs');
const path = require('path');

/**
 * Link Checker v3.0
 * Validates internal Markdown links and optionally checks external URLs.
 */

const rootDir = path.join(__dirname, '../..');
const mdFiles = [];
const shouldCheckExternal = process.env.CHECK_EXTERNAL_LINKS === 'true';
const strictExternalChecks = process.env.STRICT_EXTERNAL_LINKS === 'true';
const externalUrls = new Set();
const externalWarningStatuses = new Set([401, 403, 405, 429]);

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

function stripIgnoredRegions(markdown) {
    return markdown
        .replace(/<!--[\s\S]*?-->/g, '')
        .replace(/```[\s\S]*?```/g, '')
        .replace(/~~~[\s\S]*?~~~/g, '')
        .replace(/`[^`\n]+`/g, '');
}

function safeDecode(value) {
    try {
        return decodeURIComponent(value);
    } catch {
        return value;
    }
}

function normalizeInternalTarget(url) {
    const [pathPart] = url.split('#');
    const cleaned = pathPart.split('?')[0].trim();
    return safeDecode(cleaned);
}

function isExternalUrl(url) {
    return /^https?:\/\//i.test(url);
}

function isSkippableUrl(url) {
    return /^(#|mailto:|tel:|data:|javascript:)/i.test(url);
}

async function checkExternalUrl(url) {
    const init = {
        method: 'HEAD',
        redirect: 'follow',
        headers: {
            'user-agent': 'vibe-id-daily-link-checker/3.0 (+https://github.com/jiansuphd/vibe-id-daily)'
        }
    };

    try {
        const headResponse = await fetch(url, init);
        if (headResponse.status >= 200 && headResponse.status < 400) {
            return { ok: true };
        }

        const getResponse = await fetch(url, {
            method: 'GET',
            redirect: 'follow',
            headers: {
                'user-agent': 'vibe-id-daily-link-checker/3.0 (+https://github.com/jiansuphd/vibe-id-daily)'
            }
        });
        if (getResponse.status >= 200 && getResponse.status < 400) {
            return { ok: true };
        }

        return { ok: false, status: getResponse.status };
    } catch {
        return { ok: false, status: 'ERR' };
    }
}

async function checkExternalUrls(urls) {
    let externalErrors = 0;
    let externalWarnings = 0;

    for (const url of urls) {
        const result = await checkExternalUrl(url);
        if (!result.ok) {
            if (!strictExternalChecks && externalWarningStatuses.has(result.status)) {
                console.warn(`⚠️ External link blocked/rate-limited: ${url} (${result.status})`);
                externalWarnings++;
            } else {
                console.error(`❌ External link check failed: ${url} (${result.status})`);
                externalErrors++;
            }
        }
    }

    return { externalErrors, externalWarnings };
}

mdFiles.forEach(file => {
    const rawContent = fs.readFileSync(file, 'utf8');
    const content = stripIgnoredRegions(rawContent);
    const links = content.match(/\[[^\]]*\]\(([^)]+)\)/g);

    if (links) {
        links.forEach(link => {
            const match = link.match(/\[[^\]]*\]\(([^)]+)\)/);
            if (!match) {
                return;
            }

            const url = match[1].trim();

            if (isSkippableUrl(url)) {
                return;
            }

            if (isExternalUrl(url)) {
                if (shouldCheckExternal) {
                    externalUrls.add(url);
                }
                return;
            }

            const normalizedTarget = normalizeInternalTarget(url);
            if (!normalizedTarget) {
                return;
            }

            const targetPath = normalizedTarget.startsWith('/')
                ? path.resolve(rootDir, `.${normalizedTarget}`)
                : path.resolve(path.dirname(file), normalizedTarget);

            if (!fs.existsSync(targetPath)) {
                const withMdExtension = `${targetPath}.md`;
                const withIndexMd = path.join(targetPath, 'index.md');
                const withReadmeMd = path.join(targetPath, 'README.md');

                if (!fs.existsSync(withMdExtension) && !fs.existsSync(withIndexMd) && !fs.existsSync(withReadmeMd)) {
                    console.error(`❌ Broken link in ${path.relative(rootDir, file)}: ${url}`);
                    errors++;
                }
            }
        });
    }
});

async function main() {
    if (errors > 0) {
        console.log(`\nFound ${errors} broken internal links.`);
        process.exit(1);
    }

    if (!shouldCheckExternal) {
        console.log('✅ All internal links are valid.');
        console.log('ℹ️ External link checks skipped. Set CHECK_EXTERNAL_LINKS=true to enable.');
        return;
    }

    const { externalErrors, externalWarnings } = await checkExternalUrls([...externalUrls]);
    if (externalWarnings > 0) {
        console.log(`ℹ️ External link warnings: ${externalWarnings} (set STRICT_EXTERNAL_LINKS=true to fail on these).`);
    }
    if (externalErrors > 0) {
        console.log(`\nFound ${externalErrors} failing external links.`);
        process.exit(1);
    }

    console.log('✅ All internal and external links are valid.');
}

main().catch(error => {
    console.error('❌ Link check failed unexpectedly:', error.message);
    process.exit(1);
});
