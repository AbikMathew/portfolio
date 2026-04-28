# Portfolio data

All site content lives in this directory. Component code does not contain copy or content — just structure and styling.

## Files

| File | What's in it |
|------|--------------|
| `profile.ts` | Name, tagline, location, bio paragraphs, status pill, contact info, hero meta titles, "currently" table |
| `experience.ts` | Work history (newest first). Each entry: id, company, role, period, type, description, optional highlights |
| `projects.ts` | Every project. Each entry: slug (route segment), title, year, role, category, summary, longDescription, stack, contributions, hero media, gallery, links, featured/spotlight flags, atCompany cross-link to experience |
| `skills.ts` | Skill groups (Mobile, Web, Backend & DB, Tools, State Management). One array per group. |
| `links.ts` | Social & project links shown on the home Links section. `channel` is `'social'` or `'project'` |
| `site.ts` | baseUrl, basePath, resume PDF path/filename, version, nav items |
| `copy.ts` | All UI chrome text (section eyebrows, headings, button labels, page titles, empty states). One file to scan when tweaking copy |
| `index.ts` | Re-exports everything — components import via `import { projects } from '@/data'` |

## How to add a new project

1. Append a new entry to `projects.ts`. Required: `slug`, `title`, `year`, `role`, `category`, `summary`, `stack`, `hero`, `links`. Optional: `longDescription`, `contributions`, `gallery`, `featured`, `spotlight`, `atCompany`, `titleParts`, `spotlightTagline`.
2. If the project has a hero image, drop it in `public/assets/<your-image>.png` and reference as `hero: { kind: 'image', src: '/assets/<your-image>.png', alt: '...' }`.
3. If it has a YouTube demo, set `hero: { kind: 'video', provider: 'youtube', videoId: 'YT_VIDEO_ID' }`. The case study page renders a privacy-friendly lite-embed.
4. If the demo isn't ready, use `hero: { kind: 'placeholder', label: 'Demo coming soon' }`. The page handles it gracefully.
5. Push. The build picks up the new slug, generates `/projects/<slug>/`, and the home Index renders the new row automatically.

**Spotlight rule**: exactly one project should have `spotlight: true`. The build warns if zero or many.

## How to add a new job

Append to `experience.ts`, newest first. Set `current: true` if it's your current role. The about-page timeline renders automatically.

## How to update the resume PDF

Replace `public/assets/resume.pdf`. The download button on the home and about pages picks up the new file. The download filename comes from `site.resumeFilename`.

## How to edit any UI copy on the site

Open `copy.ts`. Find the screen (`home`, `projects`, `projectDetail`, `about`, etc.) and the section. Edit the string. That's it — no component changes needed.

For text that describes content (project summaries, bio paragraphs, experience descriptions), edit the relevant data file instead of `copy.ts`. Rule of thumb: if changing the wording could change the design's voice, it's chrome (`copy.ts`); if it's describing a thing in the world, it's content (`profile.ts`, `projects.ts`, etc.).

## Cross-linking projects to jobs

A project can reference an experience entry via `atCompany: '<experience.id>'`. The case study page renders a small "Built at @<company> →" link to the about page, anchored to that experience entry. One-way — experience entries don't backlink.

## Project ↔ home behavior

- `featured: true` → appears in home "The Index"
- `spotlight: true` → appears in home Spotlight section (one project, prominent placement)
- Neither flag → only on `/projects` page (full archive)
