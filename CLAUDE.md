# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based static site project (l8p.tech) using the minimal starter template. The project is in its initial state with minimal configuration and a basic setup.

## Development Commands

All commands are run from the root of the project:

- `npm install` - Install dependencies
- `npm run dev` - Start local dev server at `localhost:4321`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview the build locally before deploying
- `npm run astro ...` - Run Astro CLI commands (e.g., `astro add`, `astro check`)

## Architecture

### Project Structure

```
/
├── public/          - Static assets (images, fonts, etc.)
├── src/
│   └── pages/       - File-based routing (.astro or .md files)
│       └── index.astro
├── astro.config.mjs - Astro configuration
└── tsconfig.json    - TypeScript configuration (extends astro/tsconfigs/strict)
```

### Routing

Astro uses file-based routing. Files in `src/pages/` become routes based on their filename:
- `src/pages/index.astro` → `/`
- `src/pages/about.astro` → `/about`
- `src/pages/blog/[slug].astro` → `/blog/:slug` (dynamic routes)

### TypeScript Configuration

The project uses Astro's strict TypeScript configuration. The build output is excluded from type checking via the `tsconfig.json` exclude list.

## Key Conventions

- Components should be placed in `src/components/` (not yet created)
- Static assets go in `public/` directory
- Page files use the `.astro` extension and combine frontmatter (between `---` delimiters) with HTML template syntax
- The project uses ES modules (`"type": "module"` in package.json)
