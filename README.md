# EKGF Website

Modern, responsive website for the Enterprise Knowledge Graph
Foundation (EKGF), built with Next.js 15, TypeScript, and Tailwind
CSS.

## Overview

This is the main landing page and portal for EKGF, serving as the
central hub linking to all documentation sites:

- **Method**: [method.ekgf.org](https://method.ekgf.org) - Use Case
  Tree Method
- **Catalog**:
  [Client 360](https://catalog.ekgf.org/use-case/client-360/) - EKG
  Catalog
- **Maturity**: [maturity.ekgf.org](https://maturity.ekgf.org) -
  Maturity Model
- **Principles**:
  [Principles](https://principles.ekgf.org/principle/#10-principles) -
  Principles & Manifesto
- **DPROD**: [ekgf.github.io/dprod](https://ekgf.github.io/dprod) -
  Data Product Ontology

## Features

- ✨ **Modern Stack**: Next.js 15 with App Router, React 19,
  TypeScript
- 🎨 **Beautiful UI**: Tailwind CSS v4 + shadcn/ui components
- 🌓 **Dark Mode**: System-aware theme with manual toggle
- 📱 **Responsive**: Mobile-first design
- ♿ **Accessible**: WCAG 2.1 compliant
- 🚀 **Fast**: Optimized for performance
- 📊 **Analytics**: Google Analytics integration
- 📧 **Contact Form**: Server Actions for form handling
- 🔍 **SEO**: Comprehensive metadata and sitemap
- 🎯 **EKGF Branding**: Custom color scheme matching existing docs

## EKGF Activities

The website showcases five main activities of EKGF:

### 1. Use Case Tree Method

Comprehensive methodology for EKG development through use case trees
and structured implementation.

### 2. EKG Catalog

Browse the catalog of EKG components, patterns, and best practices for
building knowledge graphs.

### 3. Maturity Model

Assessment framework for evaluating and improving EKG implementations.

### 4. Principles & Manifesto

Core principles for Enterprise Knowledge Graphs, guiding strategic
implementation.

### 5. Data Product Ontology (DPROD)

**OMG standard** for describing Data Products using W3C technologies.
DPROD enables:

- Decentralized data architectures (Data Mesh)
- Standardized metadata across platforms
- Input/output port definitions with DCAT Data Services
- Integration with ODRL (rights), PROV (lineage), and DQV (quality)

DPROD is built on W3C technologies (DCAT, RDF, OWL, SHACL, PROV) and
is standardized by the Object Management Group (OMG). The DPROD page
(`/dprod`) provides an overview before linking to the full
specification at `https://ekgf.github.io/dprod/`.

## Tech Stack

### Core

- **Next.js 15** - Latest stable, App Router
- **TypeScript 5** - Type safety
- **React 19** - UI library

### Styling

- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Component library
- **Lucide React** - Icon library
- **next-themes** - Dark mode support

### Forms & Validation

- **Zod** - Schema validation
- **React Server Actions** - Form handling

### SEO & Analytics

- **@next/third-parties** - Google Analytics
- **Next.js Metadata API** - SEO optimization

### Dev Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Commitlint** - Commit message linting

## Getting Started

### Prerequisites

- Node.js 24
- pnpm 10+

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
open http://localhost:3000
```

### Development Commands

```bash
# Start dev server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Format code
pnpm format

# Check formatting
pnpm format:check
```

## Project Structure

```text
ekgf-website/
├── src/
│   ├── app/                   # Next.js App Router
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── resources/        # Resources page
│   │   ├── dprod/            # DPROD explanation page
│   │   ├── method/           # Method redirect
│   │   ├── catalog/          # Catalog redirect
│   │   ├── maturity/         # Maturity redirect
│   │   ├── principles/       # Principles redirect
│   │   ├── actions/          # Server Actions
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   ├── globals.css       # Global styles
│   │   ├── sitemap.ts        # Sitemap generation
│   │   └── robots.ts         # Robots.txt generation
│   ├── components/           # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── Header.tsx       # Site header
│   │   ├── Footer.tsx       # Site footer
│   │   ├── Hero.tsx         # Hero section
│   │   ├── DocumentationGrid.tsx
│   │   ├── ContactForm.tsx
│   │   └── theme-provider.tsx
│   └── lib/                  # Utilities
│       └── utils.ts         # Helper functions
├── public/                   # Static assets
│   └── ekgf-logo-*.svg      # Logos
├── .github/                  # GitHub workflows
├── DEPLOYMENT.md            # Deployment guide
├── vercel.json              # Vercel configuration
└── package.json
```

## Color Scheme

The site uses EKGF's brand colors:

- **Primary**: `#4051b5` (Indigo) - Main brand color
- **Primary Light**: `#5c6bc0` - Lighter variant for dark mode
- **Primary Dark**: `#303f9f` - Darker variant
- **Accent**: `#ff6f00` - Orange accent
- **Accent Light**: `#ff9800` - Lighter orange
- **Accent Dark**: `#e65100` - Darker orange

These match the colors used in the existing MkDocs documentation
sites.

## Typography

- **Sans Serif**: Roboto (300, 400, 500, 700 weights)
- **Monospace**: Roboto Mono

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment
instructions.

### Quick Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically
4. Configure custom domain

## Environment Variables

See `.env.example` for all available environment variables.

Optional variables:

- `RESEND_API_KEY` - For email functionality (contact form)
- `NEXT_PUBLIC_SITE_URL` - Site URL for metadata

## Contact Form

The contact form uses Next.js Server Actions for form handling. Email
integration with [Resend](https://resend.com) is prepared but
commented out in `/src/app/actions/contact.ts`.

To enable email sending:

1. Sign up for Resend
2. Add and verify domain
3. Add `RESEND_API_KEY` to environment variables
4. Uncomment Resend code in `contact.ts`
5. Install Resend: `pnpm add resend`

## SEO

The site includes:

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card tags
- Google Analytics (G-9LCW4TSSRP)
- Sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Google Search Console verification

## License

```text
Copyright (c) 2026 EDMCouncil Inc., d/b/a Enterprise Data Management Association ("EDMA")
```

This work is licensed under a
[Creative Commons Attribution-ShareAlike 4.0 International License](http://creativecommons.org/licenses/by-sa/4.0/).

When using or sharing this content, please provide attribution to:

- EDMCouncil Inc., d/b/a Enterprise Data Management Association
  ("EDMA")

## Partnership

This project is a partnership between:

- [Enterprise Knowledge Graph Forum (EKGF)](https://ekgf.org) - an
  initiative of the Object Management Group (OMG)
- [Object Management Group (OMG)](https://omg.org) - now part of
  EDMCouncil Inc., d/b/a Enterprise Data Management Association
  ("EDMA")

## Support

- **Documentation**: Check the `/docs` folder
- **Issues**:
  [GitHub Issues](https://github.com/EKGF/ekgf-website/issues)
- **Contact**: Use the contact form on the website

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for contribution guidelines.
