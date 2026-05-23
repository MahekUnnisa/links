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

Your site URL for this repo is **https://mahekunnisa.github.io/links/** (repo name = `links`).

If you see the README instead of the portfolio, Pages is pointed at the **repo root**. Fix it using one option below.

### Option A — GitHub Actions (recommended)

1. Run `npm run build` locally (optional; CI also builds on push)
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**
3. Push to `main` — workflow `.github/workflows/deploy.yml` builds `docs/` and deploys it

### Option B — `/docs` folder on `main`

1. Run `npm run build`
2. Commit and push the `docs/` folder (including `docs/.nojekyll`)
3. Repo **Settings → Pages → Source: Deploy from a branch → `main` → `/docs`**

Do **not** use “`/ (root)`” as the folder — that serves `README.md`, not the portfolio.

## Stack

- Pre-rendered HTML at build time (no empty-page flash)
- Inter via Google Fonts
- Inline SVG icons (no Font Awesome)
- Minified CSS in production
- Small runtime JS (~1KB): theme toggle, smooth scroll, nav highlight
