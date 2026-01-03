# Contributing to EKGF Website

## Commit Message Guidelines

This project enforces
[Angular Conventional Commits](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
using Husky and commitlint.

### Commit Message Format

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

- **type** and **subject** are mandatory
- **scope** is optional but recommended
- **body** and **footer** are optional

### Allowed Types (Angular Style)

- **build**: Changes that affect the build system or external
  dependencies (example scopes: npm, pnpm, webpack)
- **ci**: Changes to CI configuration files and scripts (example
  scopes: github, vercel)
- **docs**: Documentation only changes
- **feat**: A new feature
- **fix**: A bug fix
- **perf**: A code change that improves performance
- **refactor**: A code change that neither fixes a bug nor adds a
  feature
- **test**: Adding missing tests or correcting existing tests
- **style**: Changes that do not affect the meaning of the code
  (white-space, formatting, missing semi-colons, etc)
- **chore**: Other changes that don't modify src or test files (e.g.,
  updating .gitignore)
- **revert**: Reverts a previous commit

### Subject Line Rules (Angular Style)

1. Use imperative, present tense: "change" not "changed" nor "changes"
2. Don't capitalize the first letter
3. No period (.) at the end
4. Maximum 100 characters
5. Should complete the sentence: "If applied, this commit will _your
   subject line here_"

### Examples

```bash
# Good examples
feat: add user authentication
feat(auth): implement JWT token validation
fix(navigation): resolve menu toggle bug on mobile
docs(readme): update installation instructions
refactor(api): simplify error handling logic
perf(images): lazy load hero section images
build(deps): upgrade next to 16.1.1
ci(github): add conventional commits check to PR workflow

# With scope
feat(homepage): add hero section component
fix(button): correct disabled state styling

# With body
feat(auth): implement JWT token validation

Add middleware to validate JWT tokens on protected routes.
Includes refresh token logic for expired sessions.

# With footer (breaking change)
feat(api): redesign authentication API

BREAKING CHANGE: The authentication endpoints have been redesigned.
Please update client code to use the new /auth/v2 endpoints.
```

### Scope Guidelines

The scope should be the name of the affected area/module. Examples:

- **auth**: Authentication and authorization
- **api**: API-related changes
- **ui**: UI components
- **navigation**: Navigation components
- **homepage**: Homepage-specific changes
- **deps**: Dependencies
- **config**: Configuration files

### Git Hooks

This project uses Husky to enforce quality standards:

- **pre-commit**: Runs ESLint to check code quality
- **commit-msg**: Validates commit messages against Angular
  conventional commits format

### What Happens When You Commit

1. When you run `git commit`, the **pre-commit** hook runs ESLint
2. If linting passes, the **commit-msg** hook validates your commit
   message against Angular style
3. If the message doesn't follow the strict format, the commit will be
   **rejected**

### Common Validation Errors

❌ **Subject must not be sentence-case, start-case, pascal-case,
upper-case**

```bash
# Bad
feat: Add user authentication
feat: ADD_USER_AUTH

# Good
feat: add user authentication
```

❌ **Subject must not end with period**

```bash
# Bad
fix: resolve bug.

# Good
fix: resolve bug
```

❌ **Type must be lowercase**

```bash
# Bad
Feat: add feature
FEAT: add feature

# Good
feat: add feature
```

❌ **Invalid type**

```bash
# Bad
added: new feature
updated: documentation

# Good
feat: new feature
docs: update documentation
```

### Testing Your Commit Message

Before committing, you can test your commit message:

```bash
echo "feat: add new feature" | pnpm exec commitlint
```

### Setup for New Contributors

When you first clone the repository and run `pnpm install`, Husky will
automatically set up the Git hooks via the `prepare` script.

## Versioning & Releases

This project uses automated version bumping and changelog generation.
See [VERSIONING.md](.github/VERSIONING.md) for details on:

- How version bumping works
- Using Cocogitto for manual releases
- Automated release workflows
- Changelog generation

## Code Formatting

This project enforces strict formatting standards. See
[FORMATTING.md](.github/FORMATTING.md) for details.

**Quick commands:**

```bash
# Format all files
pnpm format

# Check formatting
pnpm format:check

# Lint markdown
pnpm lint:md
```

**Key standards:**

- Maximum line length: 70 characters (markdown, YAML)
- Auto-format on save (if using VS Code)
- Prettier for all file formatting
- markdownlint for markdown files

## Testing Your Changes

Before submitting a PR:

```bash
# Install dependencies
pnpm install

# Run linters
pnpm lint          # ESLint
pnpm lint:md       # Markdown

# Check formatting
pnpm format:check

# Build the project
pnpm build

# Test commit message
echo "feat: your commit message" | pnpm exec commitlint
```

### References

- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [commitlint](https://commitlint.js.org/)
- [Versioning Documentation](.github/VERSIONING.md)
