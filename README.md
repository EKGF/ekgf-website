# EKGF Website

Official website for the Enterprise Knowledge Graph Foundation.

[![CI](https://github.com/EKGF/ekgf-website/actions/workflows/ci.yml/badge.svg)](https://github.com/EKGF/ekgf-website/actions/workflows/ci.yml)

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Package Manager:** pnpm
- **UI Components:** Radix UI, Lucide Icons
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20 or later
- pnpm 10 or later (install: `corepack enable`)

### Development Setup

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Commands

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm lint:md      # Lint markdown files
pnpm format       # Format all files
pnpm format:check # Check formatting
```

## Contributing

This project enforces **Angular style Conventional Commits** and
**strict formatting standards**.

### Quick Start

```bash
# Format before committing
pnpm format

# Good commit messages ✅
git commit -m "feat: add homepage hero section"
git commit -m "fix(navigation): resolve mobile menu bug"
git commit -m "docs: update installation guide"

# Bad commit messages ❌
git commit -m "Added feature"     # No type, wrong tense
git commit -m "feat: Add feature" # Capitalized subject
git commit -m "feat: add feature." # Period at end
```

### Documentation

- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [FORMATTING.md](.github/FORMATTING.md) - Formatting standards

## Automation

This project includes automated:

- **Dependency Updates:** Weekly Dependabot PRs
- **Auto-Merge:** Automatic approval and merging of patch/minor
  updates
- **Version Bumping:** Automated patch version bumps using Cocogitto
- **Changelog Generation:** Automatic changelog from conventional
  commits
- **GitHub Releases:** Automatic release creation with generated notes

See [VERSIONING.md](.github/VERSIONING.md) for details.

## Project Structure

```
ekgf-website/
├── .github/              # GitHub Actions workflows and reusable actions
├── .husky/               # Git hooks (commit-msg, pre-commit)
├── public/               # Static assets
├── src/
│   ├── app/             # Next.js App Router pages
│   └── lib/             # Utility functions
├── cog.toml             # Cocogitto configuration
├── commitlint.config.js # Commit message linting rules
└── package.json         # Dependencies and scripts
```

## Documentation

- [Contributing Guidelines](CONTRIBUTING.md)
- [pnpm Configuration](.github/PNPM_CONFIG.md)
- [Formatting Standards](.github/FORMATTING.md)
- [Versioning & Release Process](.github/VERSIONING.md)
- [Cocogitto Bump Verification](.github/COG_BUMP_VERIFICATION.md)
- [Commit Message Convention](.github/COMMIT_CONVENTION.md)
- [GitHub Actions](.github/actions/README.md)
- [Automation Summary](.github/AUTOMATION_SUMMARY.md)

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
- [Cocogitto Documentation](https://docs.cocogitto.io/)

## License

[License information to be added]
