# Hervé — proof of work

A fast, single-page personal site for turning introductions and cold outreach into useful product conversations. It is built with Astro and deployed to GitHub Pages.

## Local development

```sh
npm install
npm run dev
```

The site is available at `http://localhost:4321`.

## Content

Project cards live in [`src/data/projects.ts`](src/data/projects.ts). Update a project’s name, role, status, and video URL there without changing the page layout. The presentation and responsive styling live in [`src/pages/index.astro`](src/pages/index.astro) and [`src/styles/global.css`](src/styles/global.css).

## Deployment

Pushes to `main` trigger the GitHub Pages workflow. It builds the static Astro output and deploys the generated `dist` artifact, which is intentionally not committed.
