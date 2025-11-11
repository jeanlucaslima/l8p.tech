# L8P.tech - Proposal Site

A lightweight, password-gated website for publishing client proposals written in Markdown, built with Astro 5.15 and Tailwind CSS v4.

## Features

- 📝 **Markdown-based proposals** with full content collections support
- 🔒 **Per-proposal password protection** with session persistence
- 🎨 **Clean, printable design** with optimized print styles
- 🚀 **Static-first architecture** for fast load times
- 🌐 **Portuguese-first** with hierarchical URLs (`/proposta/[company]/[proposal]`)
- ♿ **Accessible** with semantic HTML and keyboard navigation
- 📱 **Responsive** mobile-friendly design

## Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:4321](http://localhost:4321) in your browser.

3. **Build for production**
   ```bash
   npm run build
   ```

4. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── PasswordPrompt.astro
│   │   ├── ProposalHeader.astro
│   │   ├── ProposalMeta.astro
│   │   └── TOC.astro
│   ├── content/
│   │   ├── config.ts       # Content collections schema
│   │   └── proposals/      # Proposal markdown files
│   │       ├── [company]/
│   │       │   └── [proposal].md
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro     # Landing page
│   │   ├── 404.astro       # 404 page
│   │   ├── health.ts       # Health check endpoint
│   │   └── proposta/
│   │       ├── index.astro # Proposals list
│   │       └── [company]/
│   │           └── [proposal].astro  # Dynamic proposal page
│   └── styles/
│       └── global.css      # Global styles + print styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Content Model

Proposals are stored in `src/content/proposals/` organized by company:

```
src/content/proposals/
  ├── oracle-latam/
  │   └── plataforma-2025.md
  └── coffee-chain-hk/
      └── tasting-and-sourcing-2025.md
```

### Frontmatter Schema

```yaml
---
title: "Proposal Title"
client: "company-slug"
date: 2025-11-03
status: "sent"  # draft | sent | accepted | archived
summary: "Brief description"
tags: ["tag1", "tag2"]
password: "optional-password"  # Omit for public proposals
slug: "optional-custom-slug"   # Defaults to filename
---
```

### Password Protection

- **With password**: Proposal requires password before viewing
- **Without password**: Proposal is immediately visible
- Unlocked state persists per-proposal in sessionStorage
- Re-lock button available when unlocked

## Adding a New Proposal

1. Create a company folder in `src/content/proposals/` (if new):
   ```bash
   mkdir -p src/content/proposals/company-name
   ```

2. Create a markdown file:
   ```bash
   touch src/content/proposals/company-name/proposal-name.md
   ```

3. Add frontmatter and content:
   ```markdown
   ---
   title: "Project Title"
   client: "company-name"
   date: 2025-11-15
   status: sent
   summary: "Brief description"
   tags: ["consulting", "development"]
   password: "secure-password"  # Optional
   ---

   # Your Proposal Content

   Write your proposal here using standard Markdown...
   ```

4. The proposal will automatically appear at:
   - List: `/proposta`
   - Detail: `/proposta/company-name/proposal-name`

## Available Commands

| Command            | Action                                      |
| :----------------- | :------------------------------------------ |
| `npm install`      | Install dependencies                        |
| `npm run dev`      | Start dev server at `localhost:4321`        |
| `npm run build`    | Build production site to `./dist/`          |
| `npm run preview`  | Preview build locally before deploying      |
| `npm run lint`     | Lint code with ESLint                       |
| `npm run format`   | Format code with Prettier                   |
| `npm run typecheck`| Type-check with Astro                       |

## Development

### Tech Stack

- **Framework**: Astro 5.15
- **Styling**: Tailwind CSS v4 (via @tailwindcss/vite)
- **Font**: Archivo Variable (@fontsource-variable/archivo)
- **TypeScript**: Strict mode
- **Linting**: ESLint + Prettier

### Code Quality

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Formatting
npm run format
```

## Limitations & Security Notes

### Soft Gatekeeping

The password protection is **intentionally simple** and provides soft gatekeeping:

- Passwords are stored in frontmatter (visible in source)
- Validation happens client-side (minimal JS)
- No server-side authentication
- Links should be treated as **semi-private**

**Not suitable for:**
- Highly confidential information
- Compliance-sensitive data
- Public-facing sensitive content

**Suitable for:**
- Client proposals with shared passwords
- Light access control for direct links
- Discouraging casual browsing

### Future Upgrades

For stronger protection, consider:
- Edge middleware with server-only secrets
- HTTP Basic Authentication
- Encrypted auth cookies
- Private sharing tokens per proposal
- Read receipts / analytics

## Print Styles

Proposals include optimized print styles:

- Hides navigation and interactive elements
- Adjusts typography for readability
- Ensures proper page breaks
- Shows link URLs in parentheses
- A4 page size with 2cm margins

To print: Click "Imprimir" button or use Ctrl/Cmd+P

## Routes

- `/` - Landing page
- `/proposta` - List all proposals (sorted by date)
- `/proposta/[company]/[proposal]` - View specific proposal
- `/health` - Health check endpoint (returns "ok")
- `/*` - 404 page

## Environment Variables

**None required for v1** - All configuration is done through frontmatter.

## Contributing

This project uses:
- **Branching**: Feature branches from `main`
- **Commits**: Small, atomic commits with clear messages
- **Code Style**: Enforced via ESLint + Prettier

## License

© 2025 L8P. All rights reserved.

## Support

For questions or issues, contact: contact@l8p.tech
