# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with Turbopack
npm run build      # Production build
npm run typecheck  # TypeScript type checking (tsc --noEmit)
npm run lint       # Biome linter
npm run format     # Biome formatter (auto-fix)
```

No test suite is configured.

## Architecture

This is a Next.js 16 App Router portfolio site with React 19, Tailwind CSS v4, and Framer Motion.

### Layout pattern

Each page uses a two-column grid: a **Card** (left, shows title/subheading or active box detail) and a **BoxGroup** (right, vertical stack of clickable colored boxes). Selecting a box animates the Card to show that box's content via Framer Motion `AnimatePresence`.

- **Static pages** (home): render `Card` + `BoxGroup` directly as RSCs with `active={null}` (no interactivity).
- **Interactive pages** (work, contact): delegate to `PageClient`, a `'use client'` wrapper that owns the `active` state and `onClick` handler.

### Content system

All page content is defined as typed `PageContent` objects in `src/lib/content/`. Each file exports a single content object consumed by its corresponding page. The types live in `src/lib/content/types.ts`.

- `BoxContent` fields: `id`, `classNames` (required), plus optional `title`, `subtitle`, `desc`, `features`, `link`, `image`, `color`.
- Adding a new page means creating a content file, a `page.tsx`, and adding the route to `src/app/sitemap.ts`.

### SEO

- Global metadata and JSON-LD Person schema are in `src/app/layout.tsx`.
- Per-page metadata should be exported from each `page.tsx` using Next.js `export const metadata`.
- Sitemap is generated via `src/app/sitemap.ts`; robots.txt is static in `public/`.

### Tooling

- **Biome** handles both linting and formatting (no ESLint/Prettier).
- Path alias `@/` maps to `src/`.
- Tailwind CSS v4 via PostCSS.
