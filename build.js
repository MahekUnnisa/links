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

function build() {
    const config = loadConfig();
    fs.mkdirSync(OUT, { recursive: true });

    fs.writeFileSync(path.join(OUT, 'index.html'), buildHtml(config));

    const css = fs.readFileSync(path.join(ROOT, 'style.css'), 'utf8');
    fs.writeFileSync(path.join(OUT, 'style.css'), minifyCss(css));

    fs.copyFileSync(path.join(ROOT, 'app.js'), path.join(OUT, 'app.js'));

    for (const asset of ASSETS) {
        const src = path.join(ROOT, asset);
        if (fs.existsSync(src)) {
            fs.copyFileSync(src, path.join(OUT, asset));
        }
    }

    for (const dir of ASSET_DIRS) {
        copyDir(path.join(ROOT, dir), path.join(OUT, dir));
    }

    console.log('Built static site → docs/');
}

if (require.main === module) {
    build();
}

module.exports = { build, loadConfig };
