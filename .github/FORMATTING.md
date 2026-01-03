# Formatting & Markdown Guidelines

This document describes the formatting standards for the ekgf-website
project.

## Overview

The project uses several tools to maintain consistent code and
documentation formatting:

- **EditorConfig** - Editor-agnostic settings
- **Prettier** - Opinionated code formatter
- **markdownlint** - Markdown linting
- **ESLint** - JavaScript/TypeScript linting

## Line Length Standard

**Maximum line length: 70 characters**

This applies to:

- ✅ Markdown prose
- ✅ YAML files
- ✅ Code comments (when possible)
- ❌ Code (follows Prettier defaults)

### Why 70 characters?

1. **Readability** - Easier to scan and read
2. **Git diffs** - Cleaner, more focused diffs
3. **Split screens** - Works well with side-by-side editing
4. **Mobile** - Better experience on smaller screens

## Configuration Files

### `.editorconfig`

Cross-editor configuration for basic formatting:

- Indent: 2 spaces (most files)
- Charset: UTF-8
- Insert final newline: Yes
- Trim trailing whitespace: No (for markdown)

### `.prettierrc.json`

Prettier configuration:

```json
{
  "printWidth": 70,
  "proseWrap": "always",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "printWidth": 70,
        "proseWrap": "always"
      }
    }
  ]
}
```

Key settings:

- `printWidth: 70` - Wrap lines at 70 characters
- `proseWrap: "always"` - Always wrap markdown prose

### `.markdownlint.json`

Markdown linting rules:

```json
{
  "MD013": {
    "line_length": 70,
    "heading_line_length": 70,
    "code_block_line_length": 70
  }
}
```

### `.vscode/settings.json`

VS Code specific settings:

- Format on save: Enabled
- Default formatter: Prettier
- Word wrap: At 70 characters (for markdown)
- Ruler: Shown at 70 characters

## Markdown Formatting

### Headings

Use ATX-style headers with sentence case:

```markdown
# This is the main heading

## This is a subheading

### This is a sub-subheading
```

### Lists

Use `-` for unordered lists:

```markdown
- First item
- Second item
  - Nested item
  - Another nested item
- Third item
```

Use `1.` for ordered lists:

```markdown
1. First step
2. Second step
3. Third step
```

### Code Blocks

Use fenced code blocks with language identifiers:

````markdown
```typescript
const greeting = "Hello, world!";
console.log(greeting);
```
````

### Links

Use inline links:

```markdown
[Link text](https://example.com)
```

For repeated links, use reference style:

```markdown
[Link text][ref]

[ref]: https://example.com
```

### Emphasis

- **Bold**: `**text**`
- _Italic_: `_text_`
- `Code`: `` `text` ``

### Line Breaks

- Use blank lines to separate paragraphs
- Use `\` at end of line for hard breaks (rarely needed)
- Let Prettier handle wrapping

## YAML Formatting

### Multiline Strings

Always use block scalar syntax for long strings:

```yaml
# Good
description: >-
  This is a long description that wraps across multiple lines
  for better readability. Each line should be under 70
  characters.

# Bad
description:
  "This is a long description that wraps across multiple
  lines but uses quoted string syntax."
```

### Block Scalar Types

- `>-` - Folded, strip trailing newline (most common)
- `|-` - Literal, strip trailing newline
- `|` - Literal, keep trailing newline
- `>` - Folded, keep trailing newline

### Example

```yaml
name: My Workflow
description: >-
  This workflow runs on push to main. It performs linting, testing,
  and deployment. All steps must pass before merging.
steps:
  - name: Checkout
    uses: actions/checkout@v4
```

## TypeScript/JavaScript Formatting

Prettier handles all TypeScript/JavaScript formatting. Key settings:

- Indent: 2 spaces
- Semicolons: Yes (Prettier default)
- Quotes: Double (Prettier default)
- Trailing commas: ES5 (Prettier default)

## NPM Scripts

Available formatting commands:

```bash
# Format all files
pnpm format

# Check formatting without modifying
pnpm format:check

# Format only markdown files
pnpm format:md

# Lint markdown files
pnpm lint:md

# Run ESLint
pnpm lint
```

## Editor Setup

### VS Code

Install recommended extensions:

1. **Prettier - Code formatter** (esbenp.prettier-vscode)
2. **markdownlint** (DavidAnson.vscode-markdownlint)
3. **EditorConfig for VS Code** (EditorConfig.EditorConfig)

Settings are configured in `.vscode/settings.json`.

### Other Editors

EditorConfig is supported by most modern editors:

- **Cursor** - Built-in support
- **WebStorm/IntelliJ** - Built-in support
- **Sublime Text** - Install EditorConfig plugin
- **Vim/Neovim** - Install editorconfig-vim plugin

## CI/CD Integration

The CI workflow checks:

1. **ESLint** - Code linting
2. **Prettier** - Formatting check
3. **markdownlint** - Markdown linting

All checks must pass before merging to main.

## Pre-commit Hooks

Husky runs these checks before each commit:

1. **ESLint** - Prevents committing linting errors
2. **Commitlint** - Validates commit message format

To format before committing:

```bash
# Format all files
pnpm format

# Or let your editor format on save
```

## Troubleshooting

### Prettier not formatting

1. Check that `.prettierrc.json` exists
2. Verify Prettier extension is installed
3. Check `editor.defaultFormatter` in VS Code settings
4. Run manually: `pnpm format`

### Markdown linting errors

Run `pnpm lint:md` to see specific errors.

Common issues:

- **MD013** - Line too long (should be ≤ 70 chars)
- **MD025** - Multiple top-level headings
- **MD041** - First line should be top-level heading

### Format on save not working

1. Check `.vscode/settings.json` exists
2. Verify `editor.formatOnSave: true`
3. Check that file is not in `.prettierignore`
4. Reload VS Code window

### Conflicting formatters

If multiple formatters are fighting:

1. Set Prettier as default:
   `"editor.defaultFormatter": "esbenp.prettier-vscode"`
2. Disable other formatters for specific languages
3. Clear format-on-save for conflicting file types

## Examples

### Good Markdown

````markdown
# Project setup guide

This guide explains how to set up the project for local development.

## Prerequisites

Before starting, ensure you have:

- Node.js 20 or later
- pnpm 10 or later
- Git

## Installation

1. Clone the repository:

   ```bash
   git clone git@github.com:EKGF/ekgf-website.git
   cd ekgf-website
   ```
````

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Start the development server:
   ```bash
   pnpm dev
   ```

````

### Good YAML

```yaml
name: CI Workflow

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  lint:
    name: Run linting checks
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
````

## Resources

- [Prettier Documentation](https://prettier.io/docs/)
- [markdownlint Rules](https://github.com/DavidAnson/markdownlint/blob/main/doc/Rules.md)
- [EditorConfig](https://editorconfig.org/)
- [Markdown Guide](https://www.markdownguide.org/)

## Related Documentation

- [CONTRIBUTING.md](../CONTRIBUTING.md) - Contribution guidelines
- [VERSIONING.md](VERSIONING.md) - Version management
- `.cursor/rules/markdown-formatting.mdc` - Cursor-specific rules
- `.cursor/rules/yaml-formatting.mdc` - YAML formatting rules
