const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const { build } = require('./build');

const WATCH_FILES = [
    'config.js',
    'style.css',
    'render.js',
    'icons.js',
    'app.js'
];
const WATCH_DIRS = ['assets'];

let timer;
let building = false;

function rebuild() {
    clearTimeout(timer);
    timer = setTimeout(() => {
        if (building) return;
        building = true;
        try {
            build();
        } catch (err) {
            console.error(err.message);
        }
        building = false;
    }, 150);
}

build();
console.log('Watching for changes…');

const server = spawn('node', ['server.js'], { stdio: 'inherit' });
server.on('exit', (code) => process.exit(code ?? 0));

for (const file of WATCH_FILES) {
    const filePath = path.join(__dirname, file);
    if (fs.existsSync(filePath)) {
        fs.watch(filePath, rebuild);
    }
}

for (const dir of WATCH_DIRS) {
    const dirPath = path.join(__dirname, dir);
    if (fs.existsSync(dirPath)) {
        fs.watch(dirPath, { recursive: true }, rebuild);
    }
}

process.on('SIGINT', () => {
    server.kill('SIGINT');
    process.exit(0);
});
