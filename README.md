# tifenn-guillas.github.io

> Personal website and portfolio of Tifenn Guillas — [tifenn-guillas.fr](https://tifenn-guillas.fr)

Built with **Astro 6** and **Tailwind CSS v4**, fully static, bilingual (FR/EN), deployed on GitHub Pages.

---

## Tech Stack

| | |
|---|---|
| Framework | [Astro 6](https://astro.build) (static output) |
| CSS | [Tailwind CSS v4](https://tailwindcss.com) via `@tailwindcss/vite` |
| Language | TypeScript |
| Node | ≥ 22.12.0 |
| Extras | `@astrojs/sitemap`, `sharp` |

---

## Getting Started

Two ways to run the project locally: **Docker via `just`** (recommended, no local Node required) or **npm directly**.

### Docker — preferred

Requires [Docker](https://www.docker.com) and [just](https://github.com/casey/just).

```bash
just install    # Install dependencies
just dev        # Start dev server → http://localhost:4321
just stop       # Stop the dev server
just build      # Production build
just preview    # Preview production build → http://localhost:4321
just shell      # Open a bash shell in the Node container
```

### npm — direct

Requires Node ≥ 22.12.0.

```bash
npm install
npm run dev      # → http://localhost:4321
npm run build    # Output to ./dist
npm run preview
```

---

## Project Structure

```
src/
  components/
    sections/       # One component per page section
    atoms/          # Reusable components (Card, Loader, BlockName)
    Navbar.astro
    Footer.astro
  data/             # ← Source of truth for all content (TypeScript files)
    about.ts, skills.ts, resume.ts, formation.ts, portfolio.ts
    goals.ts, hobbies.ts, contact.ts, socials.ts
    header.ts, footer.ts, navbar.ts, layout.ts, sections.ts
  types/            # TypeScript types per section
  pages/
    index.astro           # Redirects to /fr/
    fr/index.astro        # French version
    en/index.astro        # English version
  layouts/
    BaseLayout.astro
  i18n/
    index.ts              # Locale helpers
  styles/
    global.css
public/
  assets/
    images/         # Site images (profile, portfolio, icons)
    fonts/          # Roboto woff2 (self-hosted)
    fontawesome/    # Font Awesome icons (self-hosted)
    js/app.js
scripts/
  convert-webp.mjs  # Image conversion utility
```

---

## Content & i18n

All user-facing content lives in **`src/data/*.ts`** — edit these files to update text, links, or images. Components are purely presentational and consume the data files.

- **Default locale**: `fr` → `/fr/`
- **Alternate locale**: `en` → `/en/`
- Root `/` redirects to `/fr/`
- Translations are inlined as `{ fr: '...', en: '...' }` objects directly in data files
- Section order and navbar visibility are controlled by `src/data/sections.ts`

---

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds the site and deploys it to the `gh-pages` branch, served by GitHub Pages at **[tifenn-guillas.fr](https://tifenn-guillas.fr)**.

```
push to main → npm ci → npm run build → deploy ./dist → gh-pages branch
```

---

## License

[MIT](LICENSE)
