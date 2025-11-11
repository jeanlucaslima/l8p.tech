# Proposal Template - All Available Fields

This template shows all available frontmatter fields for a proposal.

## File Location
Place this file in: `src/content/proposals/[company-name]/[proposal-name].md`

Example: `src/content/proposals/acme-corp/website-redesign-2025.md`

---

## Template with All Fields

```markdown
---
# REQUIRED FIELDS

# Title of the proposal (string, required)
title: "Complete Website Redesign & Development"

# Client company slug - must match the folder name (string, required)
# This should be lowercase with hyphens
client: "acme-corp"

# Date of the proposal (YYYY-MM-DD format, required)
date: 2025-11-15

# Status of the proposal (required, default: "sent")
# Options: "draft" | "sent" | "accepted" | "archived"
status: sent


# OPTIONAL FIELDS

# Brief summary shown on proposal cards (string, optional)
summary: "Full website redesign with modern tech stack, CMS integration, and performance optimization."

# Tags for categorization (array of strings, optional)
tags: ["web development", "design", "consulting"]

# Custom URL slug (string, optional)
# If not provided, uses the filename
# Example: If you want /proposta/acme-corp/custom-url instead of /proposta/acme-corp/website-redesign-2025
slug: "website-redesign-2025"

# Password protection (string, optional)
# If provided, the proposal requires this password to view
# If omitted, the proposal is publicly accessible
password: "acme2025secure"
---

# Your Proposal Content Here

Write your proposal content using standard Markdown syntax.

## Project Overview

Describe the project...

## Scope of Work

### Phase 1: Discovery
- Stakeholder interviews
- Competitive analysis
- User research

### Phase 2: Design
- Wireframes
- Visual design
- Prototyping

### Phase 3: Development
- Frontend implementation
- Backend/CMS setup
- Testing & QA

## Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| Discovery | 2 weeks | Research report |
| Design | 4 weeks | Design files |
| Development | 8 weeks | Working website |

## Investment

**Total Project Cost:** $75,000 USD

- Discovery: $10,000
- Design: $20,000
- Development: $40,000
- Testing & Launch: $5,000

## Terms & Conditions

1. Payment schedule: 40% upfront, 30% at design approval, 30% at launch
2. Timeline assumes client feedback within 3 business days
3. Includes 30 days post-launch support

---

**This proposal is valid for 30 days from the date above.**
```

---

## Field Descriptions

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | The proposal title shown in lists and detail pages |
| `client` | string | Company slug (must match folder name, lowercase-with-hyphens) |
| `date` | date | Proposal date in YYYY-MM-DD format |
| `status` | enum | Current status: `draft`, `sent`, `accepted`, or `archived` |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `summary` | string | Brief description shown on proposal cards (recommended) |
| `tags` | array | List of tags for categorization (e.g., `["consulting", "development"]`) |
| `slug` | string | Custom URL slug (defaults to filename if omitted) |
| `password` | string | Password required to view (omit for public access) |

---

## Examples by Use Case

### Example 1: Public Proposal (No Password)

```markdown
---
title: "Q4 Marketing Campaign"
client: "startupxyz"
date: 2025-12-01
status: sent
summary: "Integrated marketing campaign for Q4 product launch."
tags: ["marketing", "strategy"]
---

# Campaign content here...
```

**Result:** Accessible at `/proposta/startupxyz/q4-marketing-campaign` without password

---

### Example 2: Password-Protected Proposal

```markdown
---
title: "Enterprise Cloud Migration"
client: "bigcorp"
date: 2025-11-20
status: draft
summary: "Complete cloud infrastructure migration strategy."
tags: ["infrastructure", "cloud", "enterprise"]
password: "bigcorp-secure-2025"
---

# Confidential migration details...
```

**Result:** Requires password "bigcorp-secure-2025" to view

---

### Example 3: Minimal Proposal (Only Required Fields)

```markdown
---
title: "Website Maintenance Retainer"
client: "local-biz"
date: 2025-11-10
status: accepted
---

# Simple maintenance agreement...
```

**Result:** Works fine with just required fields

---

## Status Badge Colors

When displayed, statuses show these colors:

- **draft** → Gray badge
- **sent** → Blue badge
- **accepted** → Green badge
- **archived** → Gray badge (muted)

---

## URL Generation

Given this file structure:
```
src/content/proposals/
  └── acme-corp/
      └── website-redesign-2025.md
```

The proposal will be accessible at:
```
/proposta/acme-corp/website-redesign-2025
```

Or if you set `slug: "custom"` in frontmatter:
```
/proposta/acme-corp/custom
```

---

## Tips

1. **Date format:** Always use `YYYY-MM-DD` (e.g., `2025-11-15`)
2. **Client slug:** Keep it simple, lowercase, use hyphens (e.g., `abc-company`, not `ABC Company`)
3. **Passwords:** Use memorable but unique passwords per client
4. **Tags:** Keep them consistent across proposals for better organization
5. **Summary:** Write 1-2 sentences max for best card display
6. **Markdown:** Use standard Markdown - headings, lists, tables, links, bold, italic

---

## Adding a New Proposal (Quick Steps)

1. Create company folder if needed:
   ```bash
   mkdir -p src/content/proposals/company-name
   ```

2. Create proposal file:
   ```bash
   touch src/content/proposals/company-name/proposal-name.md
   ```

3. Copy template, fill in fields, write content

4. Access at: `http://localhost:4321/proposta/company-name/proposal-name`

---

For more details, see the main README.md
