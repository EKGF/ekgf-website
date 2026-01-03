# Markdown & Formatting Setup Summary

This document summarizes the markdown handling and formatting
configuration added to ekgf-website, based on patterns from the EKG
project repositories.

## Configuration Sources

Configurations were adapted from these repositories:

- **ekg-method** - Line length: 70 chars
- **ekg-catalog** - Line length: 140 chars (updated to 70)
- **ekg-maturity** - Standard EditorConfig
- **ekg-principles** - Line length: 140 chars (updated to 70)

**Decision:** Standardized on **70 characters** for consistency with
ekg-method.

## Files Added

### 1. `.editorconfig`

Cross-editor configuration for basic settings:

```ini
[*.md]
max_line_length = off
trim_trailing_whitespace = false
```

- Disables max line length (Prettier handles this)
- Preserves trailing whitespace (markdown uses for breaks)

### 2. `.prettierrc.json`

Prettier configuration for automatic formatting:

```json
{
  "printWidth": 70,
  "proseWrap": "always"
}
```

- Wraps all prose at 70 characters
- Applies to markdown, YAML, and other text files

### 3. `.prettierignore`

Excludes files that shouldn't be formatted:

- node_modules
- Build outputs (.next, out, dist)
- Lock files (pnpm-lock.yaml)
- Generated files (CHANGELOG.md)

### 4. `.markdownlint.json`

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

- Enforces 70 character limit
- Applies to headings and code blocks too

### 5. `.vscode/settings.json`

VS Code specific configuration:

- Format on save: Enabled
- Default formatter: Prettier
- Word wrap: At column 70 (for markdown)
- Visual ruler: At 70 characters

### 6. `.cursor/rules/markdown-formatting.mdc`

Cursor AI rules for markdown:

- Line length: 70 characters
- Lists: Use `-` not `*` or `+`
- Headers: ATX-style with sentence case
- Code blocks: Always specify language

### 7. `.cursor/rules/yaml-formatting.mdc`

Cursor AI rules for YAML:

- Multiline syntax: Use `>-` for long strings
- Line length: 70 characters
- No quoted strings for long content

## NPM Scripts Added

```json
{
  "lint:md": "markdownlint '**/*.md' --ignore node_modules
    --ignore .husky",
  "format": "prettier --write .",
  "format:check": "prettier --check .",
  "format:md": "prettier --write '**/*.md'"
}
```

## Packages Installed

```json
{
  "devDependencies": {
    "prettier": "^3.7.4",
    "markdownlint-cli": "^0.47.0"
  }
}
```

## CI Integration

Updated `.github/workflows/ci.yml` to include:

1. **Format check** - `pnpm format:check`
2. **Markdown linting** - `pnpm lint:md`

Both must pass before merging to main.

## Key Standards

### Line Length

- **Maximum: 70 characters**
- Applies to: Markdown, YAML, comments
- Does not apply to: Code (uses Prettier defaults)

### Why 70 Characters?

1. **Readability** - Easier to scan
2. **Git diffs** - Cleaner, focused changes
3. **Split screens** - Works with side-by-side
4. **Mobile** - Better on small screens
5. **Consistency** - Matches ekg-method standard

### Markdown Style

- **Headers:** ATX-style (`# Header`)
- **Lists:** Use `-` for unordered
- **Emphasis:** `**bold**`, `_italic_`, `` `code` ``
- **Links:** Inline style `[text](url)`
- **Code blocks:** Fenced with language ID

### YAML Style

- **Multiline strings:** Use block scalars (`>-`, `|-`)
- **Line length:** 70 characters
- **No quoted strings:** For long content
- **Indentation:** 2 spaces

## Usage Examples

### Formatting Files

```bash
# Format all files
pnpm format

# Check formatting (CI)
pnpm format:check

# Format only markdown
pnpm format:md

# Lint markdown
pnpm lint:md
```

### Editor Integration

**VS Code:**

- Auto-formats on save
- Shows ruler at 70 characters
- Wraps markdown at 70 characters

**Cursor:**

- Follows `.cursor/rules/` guidelines
- Suggests proper formatting
- Understands 70 character limit

### Manual Formatting

For files that need manual attention:

```bash
# Format specific file
prettier --write path/to/file.md

# Check specific file
markdownlint path/to/file.md
```

## Comparison with Other Repos

| Repo               | Line Length                | Format Tool    | Lint Tool        |
| ------------------ | -------------------------- | -------------- | ---------------- |
| **ekg-method**     | 70                         | Prettier       | markdownlint     |
| **ekg-catalog**    | 70 (Prettier) / 140 (lint) | Prettier       |
| markdownlint       |
| **ekg-maturity**   | Not specified              | Not configured | Not              |
| configured         |
| **ekg-principles** | 140                        | Not configured | markdownlint     |
| **ekgf-website**   | **70**                     | **Prettier**   | **markdownlint** |
|  |

## Migration Notes

When adapting existing markdown files:

1. Run `pnpm format` to auto-format
2. Fix any markdownlint errors manually
3. Review git diff to ensure changes are correct
4. Commit with `docs: reformat to 70 char lines`

## Testing the Setup

### Test Formatting

```bash
# Create a test file with long lines
echo "# Test\n\nThis is a very long line that
  definitely exceeds seventy characters and should be
  wrapped by prettier." > test.md

# Format it
pnpm format:md

# Check result
cat test.md
```

### Test Linting

```bash
# Create file with linting issues
echo "# Header\n# Another Header\n\nThis line is way
  way way way way way way way way way way way way way
  too long" > test.md

# Lint it
pnpm lint:md
```

## Troubleshooting

### Files Not Formatting

1. Check file is not in `.prettierignore`
2. Verify `.prettierrc.json` exists
3. Run `pnpm format` manually
4. Check VS Code default formatter setting

### Linting Errors

Common issues:

- **MD013** - Line too long (use `pnpm format`)
- **MD025** - Multiple H1 headers (fix manually)
- **MD041** - First line must be H1 (fix manually)

### Format vs Lint Conflicts

- Prettier (format): Enforces 70 chars
- markdownlint (lint): Checks 70 chars
- Both should agree, but if not: Prettier wins

## Documentation

Comprehensive documentation available:

- [FORMATTING.md](FORMATTING.md) - Complete formatting guide
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Includes formatting section
- [README.md](../README.md) - Quick commands
- `.cursor/rules/` - AI assistant rules

## Summary

✅ **EditorConfig** - Cross-editor settings ✅ **Prettier** -
Auto-formatting (70 chars) ✅ **markdownlint** - Linting rules ✅ **VS
Code** - Editor integration ✅ **Cursor rules** - AI guidelines ✅
**CI checks** - Automated validation ✅ **NPM scripts** - Easy
commands ✅ **Documentation** - Complete guides

All markdown and YAML files will now:

- Auto-format to 70 characters
- Lint for common issues
- Maintain consistent style
- Pass CI checks

This ensures consistent, readable documentation across the entire
project.
