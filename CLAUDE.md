# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Immobot marketing website - a static Next.js 15 site for a real estate automation service. The site links to the main application at `app.immobot.pro`.

## Commands

```bash
npm run dev      # Development server with Turbopack (localhost:3000)
npm run build    # Production build (static export to /out)
npm start        # Production server
```

No test or lint scripts are configured.

## Architecture

**Stack:** Next.js 15 (App Router) with React 19, Tailwind CSS 4, Framer Motion

**Static Export:** Site builds to static HTML (`output: 'export'` in next.config.mjs). No server runtime - all pages are pre-rendered.

**Import Alias:** `@/*` maps to `./src/*`

### Directory Structure

- `src/app/` - Next.js App Router pages and components
- `src/app/components/` - Reusable components organized by page (home/, preise/, funktionen/, ueber-uns/, contact/)
- `public/` - Static assets (images, sitemap.xml)

### Component Patterns

- Most components use `"use client"` for interactivity (Header, Footer, feature sections)
- Pages compose multiple section components (e.g., preise/page.js imports Hero, Plan, Functions, etc.)
- Framer Motion handles scroll animations (`whileInView`, `initial`, `animate`)
- Responsive design uses Tailwind breakpoints: `sm:`, `md:`, `lg:`

### Pages

- `/` - Home
- `/preise/` - Pricing
- `/funktionen/` - Features
- `/ueber-uns/` - About
- `/kontakt/` - Contact
- `/blog/` - Blog

### Key Files

- `src/app/layout.js` - Root layout with Header, Footer, and SEO metadata
- `src/app/components/Header.jsx` - Sticky navigation with mobile drawer
- `src/app/components/Footer.jsx` - Footer with social links
- `next.config.mjs` - Static export config, trailing slashes enabled, unoptimized images
