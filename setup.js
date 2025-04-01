const fs = require('fs-extra');
const path = require('path');

async function setup() {
    try {
        // Create directories if they don't exist
        await fs.ensureDir('public');
        await fs.ensureDir('docs');

        // List of files to copy
        const files = ['index.html', 'config.js', 'style.css', 'script.js', 'DP.jpg'];

        // Copy files to public directory
        for (const file of files) {
            if (await fs.pathExists(file)) {
                await fs.copy(file, path.join('public', file));
                console.log(`✓ Copied ${file} to public/`);
                
                // Also copy to docs for GitHub Pages
                await fs.copy(file, path.join('docs', file));
                console.log(`✓ Copied ${file} to docs/`);
            } else {
                console.log(`⚠ File not found: ${file}`);
            }
        }

        console.log('\n✨ Setup completed successfully!');
        console.log('You can now run:');
        console.log('npm install');
        console.log('npm run dev');
    } catch (err) {
        console.error('Error during setup:', err);
        process.exit(1);
    }
}

setup(); 