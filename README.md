# Abik Mathew George — Portfolio v2

A multi-page editorial portfolio for a senior software engineer. Dark, calm, typographic. Static-exported Next.js, deployed to GitHub Pages.

**Live:** https://abikmathew.github.io/portfolio/

## What's here

- **Home** (`/`) — hero, spotlight project, editorial project index, about strip, links, closer
- **Projects index** (`/projects/`) — full archive grouped by year
- **Project case study** (`/projects/<slug>/`) — hero media, summary, contributions, gallery, links
- **About** (`/about/`) — bio, experience timeline, skills, résumé download
- **Site chrome** — fixed top nav with status pill, side rail with section ticks (home only), custom cursor lens, ambient grain + edge glow

## Tech

- **Framework**: [Next.js 14](https://nextjs.org/) App Router, static export (`output: 'export'`)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) as a thin layer over CSS-variable design tokens (in `src/app/globals.css`)
- **Smooth scroll**: [Lenis](https://lenis.darkroom.engineering/) via `lenis/react`
- **Fonts**: [next/font](https://nextjs.org/docs/app/api-reference/components/font) for Inter, Playfair Display, JetBrains Mono
- **Motion**: vanilla `IntersectionObserver` reveal primitives + CSS transitions. No framer-motion.
- **Deployment**: GitHub Pages via `.github/workflows/deploy.yml` on push to `main`

## Architecture

```
src/
├── app/                       Routes (App Router)
│   ├── layout.tsx             Fonts, ambient chrome, providers
│   ├── page.tsx               Home
│   ├── globals.css            Design tokens + component classes
│   ├── not-found.tsx          Styled 404
│   ├── projects/page.tsx      Projects archive
│   ├── projects/[slug]/page.tsx  Per-project case study (statically generated)
│   └── about/page.tsx         Bio + experience + skills + résumé
├── components/
│   ├── chrome/                Site-wide UI (TopNav, SideRail, CursorLens, AmbientLayers, LenisProvider, RouteCrossfade)
│   ├── sections/              Home page sections (Hero, Spotlight, ProjectIndex, About, LinksSection, Closer)
│   ├── projects/              Project page pieces (ProjectCaseStudy, ProjectHero, VideoEmbed, Gallery, ProjectMeta, ProjectsIndexGrid)
│   ├── about/                 ExperienceTimeline, SkillsList, ResumeButton
│   └── ui/                    Primitives (Reveal, Chip, Button, Eyebrow, SectionHead, ExternalLink, SplitTitle)
├── data/                      All content + UI copy (see src/data/README.md)
├── lib/                       asset.ts, youtube.ts, routing.ts, utils.ts
└── types.ts                   Shared schemas
```

## Editing content

All content lives in `src/data/`. See [`src/data/README.md`](./src/data/README.md) for the full schema.

| To… | Edit |
|---|---|
| Add a project | Append to `src/data/projects.ts`. Build picks up the new slug. |
| Add a job | Append to `src/data/experience.ts` (newest first). |
| Update bio / status / contact | `src/data/profile.ts` |
| Update résumé | Replace `public/assets/resume.pdf` |
| Edit any UI copy (eyebrows, headings, button labels) | `src/data/copy.ts` |
| Tweak design tokens (colors, spacing, motion) | `src/app/globals.css` `:root` block |

## Run locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Verify the static export (with basePath)

```bash
npm run build
mkdir -p /tmp/gh-mock/portfolio && cp -r out/* /tmp/gh-mock/portfolio/
npx serve /tmp/gh-mock -p 5050
# Open http://localhost:5050/portfolio/
```

This catches any hardcoded paths that bypass `getAssetPath()`.

## Deploy

Push to `main`. The GitHub Action at `.github/workflows/deploy.yml` builds the static export and publishes `out/` to GitHub Pages.

## License

MIT.
