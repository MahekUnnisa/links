const fs = require('fs');
const path = require('path');
const { buildHtml } = require('./render');

const ROOT = __dirname;
const OUT = path.join(ROOT, 'docs');
const ASSET_DIRS = ['assets'];
const ASSETS = ['DP.jpg', 'DP.png'];

function loadConfig() {
    const code = fs.readFileSync(path.join(ROOT, 'config.js'), 'utf8');
    return new Function(`${code}\nreturn config;`)();
}

function minifyCss(css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/\s+/g, ' ')
        .replace(/\s*([{}:;,])\s*/g, '$1')
        .trim();
}

function copyDir(srcDir, destDir) {
    if (!fs.existsSync(srcDir)) return;
    fs.mkdirSync(destDir, { recursive: true });
    for (const file of fs.readdirSync(srcDir)) {
        if (file.startsWith('.')) continue;
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    }
}

/** Copy built site files into dest (docs/ or repo root for GitHub Pages). */
function publishSite(config, dest, { minifyCss: shouldMinify = true, skipCss = false } = {}) {
    fs.mkdirSync(dest, { recursive: true });

    fs.writeFileSync(path.join(dest, 'index.html'), buildHtml(config));

    if (!skipCss) {
        const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');
        fs.writeFileSync(path.join(dest, 'style.css'), shouldMinify ? minifyCss(css) : css);
    }

    fs.copyFileSync(path.join(ROOT, 'app.js'), path.join(dest, 'app.js'));

    for (const asset of ASSETS) {
        const src = path.join(ROOT, asset);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(dest, asset));
        }
    }

    for (const dir of ASSET_DIRS) {
        copyDir(path.join(ROOT, dir), path.join(dest, dir));
    }

    fs.writeFileSync(path.join(dest, '.nojekyll'), '');
}

function build() {
    const config = loadConfig();

    publishSite(config, OUT);
    // GitHub Pages is often set to deploy from repo root; index.html beats README.md
    publishSite(config, ROOT, { skipCss: true });

    console.log('Built static site → docs/ and repo root (for GitHub Pages)');
}

if (require.main === module) {
    build();
}

module.exports = { build, loadConfig };
