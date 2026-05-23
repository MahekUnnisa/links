# Personal Portfolio

A fast, static single-page portfolio built for GitHub Pages. Edit `config.js`, run `npm run build`, deploy.

## Why this is fast

- **Pre-rendered HTML** — content is baked in at build time (no empty-page flash)
- **Zero CDN dependencies** — no Google Fonts or Font Awesome (~100KB+ saved)
- **System fonts** — instant text render, no font download
- **Inline SVG icons** — small, no extra requests
- **Minified CSS** — smaller payload in production
- **Tiny JS** (~1KB) — only theme toggle, smooth scroll, and nav highlight

## Quick start

```bash
# Edit your content
vim config.js

# Build static site → docs/
node build.js

# Preview locally
python3 -m http.server 8080 --directory docs
# or
npm run preview
```

Open http://localhost:8080

## GitHub Pages deployment

### Option A — GitHub Actions (recommended)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` — the workflow builds and deploys automatically
3. You do **not** need to commit `docs/` when using Actions

### Option B — `/docs` folder (classic)

1. Run `node build.js` locally
2. Commit and push the `docs/` folder
3. Repo **Settings → Pages → Source: main branch, `/docs` folder**

## Customize

Edit `config.js` only:

```javascript
const config = {
    profile: { name, greeting, tagline, image: "./DP.jpg", initials: "MU" },
    contact: { email, links: [...] },
    about: { text: "..." },
    experience: [{ company, role, period, highlights: [...] }],
    skills: ["JavaScript", "Python"],
    projects: { items: [...] },
    onlinePresence: { items: [...] },
    education: [{ institution, degree, period }],
    social: [{ name, url, icon }]
};
```

Add your photo as `DP.jpg` or `DP.png` in the project root — the build copies it to `docs/`.

## Project structure

```
config.js      ← edit this (your content)
style.css      ← edit this (your styles)
build.js       ← static site generator
app.js         ← tiny runtime JS (theme + nav)
icons.js       ← inline SVG icons
docs/          ← generated output (GitHub Pages serves this)
```

## Technologies

- HTML / CSS / vanilla JavaScript
- Node.js (build only — not needed at runtime on GitHub Pages)
