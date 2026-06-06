# BOAT3000

Marketing homepage for **BOAT3000**, a craft-focused product studio. A single
scrolling page: hero, ticker, products showcase, studio + process, selected
work gallery, FAQ, and a book-a-call footer.

## Tech stack

- [Next.js 16](https://nextjs.org) (App Router) + React 19
- [Tailwind CSS v4](https://tailwindcss.com) (inline `@theme` tokens in
  `app/globals.css`)
- [shadcn](https://ui.shadcn.com)-ready (`components.json`, `cn` helper in
  `lib/utils.ts`)
- Fonts via `next/font`: Schibsted Grotesk (display/UI) + JetBrains Mono
  (labels, eyebrows, footnotes)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the dev server (Turbopack)     |
| `npm run build` | Production build                     |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Lint with ESLint                     |

## Project structure

```
app/
  layout.tsx     Root layout, font loading, metadata
  page.tsx       The homepage (all sections + client interactions)
  globals.css    Design tokens (@theme) + ported component styles
components/ui/    shadcn primitives (added on demand)
lib/utils.ts      cn() class-name helper
public/           Images + the BOXTYPE demo video
```

## Design system

Two accent colors only: red (`#E0342A`) and blue (`#5B92F2`), used sparingly.
Tokens (`--paper`, `--ink`, `--red`, etc.) live in `app/globals.css`.
Interactions respect `prefers-reduced-motion`, and section content is visible
by default (reveals are gated behind a JS flag) so SSR / no-JS renders fully.

## Deployment

Deploys cleanly to [Vercel](https://vercel.com). Push the branch and import the
repo, or run `npm run build && npm run start` behind any Node host.
