# Personal Portfolio

A fast, static single-page portfolio for GitHub Pages. Edit `config.js`, run `npm run build`, deploy.

## Quick start

```bash
# Edit your content
vim config.js

# Build static site → docs/
npm run build

# Preview with live rebuild on save
npm run dev
```

Open http://localhost:8080

## Project structure

```
config.js      ← your content (single source of truth)
style.css      ← styles
render.js      ← HTML templates (used by build)
icons.js       ← inline SVG icons
build.js       ← static site generator
app.js         ← runtime JS (theme, scroll, nav highlight)
watch.js       ← dev server with auto-rebuild
assets/        ← logos and images
docs/          ← build output (served on GitHub Pages)
```

## Customize

Edit `config.js` only. Add your photo as `DP.jpg` or `DP.png` in the project root — the build copies it to `docs/`.

Put company or school logos in `assets/` and reference them in config, e.g. `"./assets/newsbytes-logo.png"`.

## GitHub Pages deployment

### Option A — GitHub Actions (recommended)

1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
2. Push to `main` — the workflow runs `node build.js` and deploys
3. You do not need to commit `docs/` when using Actions

### Option B — `/docs` folder

1. Run `npm run build` locally
2. Commit and push the `docs/` folder
3. Repo **Settings → Pages → Source: main branch, `/docs` folder**

## Stack

- Pre-rendered HTML at build time (no empty-page flash)
- Inter via Google Fonts
- Inline SVG icons (no Font Awesome)
- Minified CSS in production
- Small runtime JS (~1KB): theme toggle, smooth scroll, nav highlight
