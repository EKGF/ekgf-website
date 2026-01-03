# Versioning & Release Process

This project uses **Cocogitto** for automated version bumping and
changelog generation based on
[Conventional Commits](https://www.conventionalcommits.org/).

## Overview

The automation works in two phases:

1. **Dependabot** creates weekly dependency update PRs
2. When merged, **auto-version-bump** workflow:
   - Bumps the patch version
   - Updates `package.json` and `pnpm-lock.yaml`
   - Generates changelog from conventional commits
   - Creates a Git tag
   - Creates a GitHub Release

## Cocogitto Configuration

Configuration is in `cog.toml`:

```toml
tag_prefix = "v"

pre_bump_hooks = [
    "npm version {{version}} --no-git-tag-version --allow-same-version",
    "git add package.json pnpm-lock.yaml",
]

[changelog]
path = "CHANGELOG.md"
template = "remote"
remote = "github.com"
repository = "ekgf-website"
owner = "EKGF"
```

## Workflow Files

### `.github/workflows/auto-version-bump.yml`

Automatically bumps version when dependency updates are merged to
main.

**Triggers:**

- Push to `main` branch
- Changes to `package.json` or `pnpm-lock.yaml`
- Commit message contains `build(deps)` or `dependencies`

**Actions:**

1. ✅ Detects dependency update commits
2. 🔢 Bumps patch version (e.g., 0.0.1 → 0.0.2)
3. 📝 Generates changelog from commits
4. 🏷️ Creates and pushes Git tag
5. 🎉 Creates GitHub Release

### `.github/workflows/dependabot-auto-merge.yml`

Automatically approves and merges Dependabot PRs.

**Actions:**

- Auto-approves all Dependabot PRs
- Enables auto-merge for patch/minor updates
- Requires manual review for major updates

### `.github/workflows/ci.yml`

Runs CI checks on all PRs and pushes.

**Checks:**

- ESLint
- Build
- Commit message validation (Angular style)

## Manual Version Bump

To manually bump the version:

```bash
# Install cocogitto locally (if not already installed)
brew install cocogitto  # macOS
# or
cargo install cocogitto  # Cross-platform

# Bump patch version (0.0.1 → 0.0.2)
cog bump --patch

# Bump minor version (0.0.1 → 0.1.0)
cog bump --minor

# Bump major version (0.0.1 → 1.0.0)
cog bump --major

# Auto-detect version bump from commits
cog bump --auto
```

The `cog bump` command will:

1. Run `pre_bump_hooks` (update package.json)
2. Create a version bump commit
3. Create a Git tag
4. Push to remote (if using `--push` flag)

## Changelog Generation

Cocogitto automatically generates changelogs based on commit types:

### Included in Changelog

- ✅ **feat**: New features
- ✅ **fix**: Bug fixes
- ✅ **docs**: Documentation changes
- ✅ **refactor**: Code refactoring
- ✅ **perf**: Performance improvements
- ✅ **build**: Build system changes
- ✅ **revert**: Reverted commits

### Excluded from Changelog

- ❌ **style**: Code style changes
- ❌ **test**: Test updates
- ❌ **ci**: CI/CD changes
- ❌ **chore**: Maintenance tasks

## Commit Message Format

This project uses **Angular style** conventional commits:

```
<type>(<scope>): <subject>
```

**Rules:**

- Type and subject are **mandatory**
- Scope is **optional** but recommended
- Subject must be **lowercase**
- No **period** at the end
- Use **imperative** mood: "add" not "added"

**Examples:**

```bash
# Good ✅
feat: add user authentication
feat(auth): implement JWT validation
fix(button): correct hover state
docs: update README
refactor(api): simplify error handling

# Bad ❌
feat: Add user authentication  # Capitalized subject
Feat: add authentication       # Capitalized type
feat: add feature.             # Period at end
added feature                  # No type, past tense
```

## GitHub Actions Permissions

Required permissions are configured in workflow files:

```yaml
permissions:
  contents: write # Push commits and tags
  pull-requests: write # Approve and merge PRs
  id-token: write # OIDC authentication
```

## Repository Settings

### Required Settings

Enable these in `Settings → Actions → General`:

1. ✅ **Workflow permissions**: Read and write permissions
2. ✅ **Allow GitHub Actions to create and approve pull requests**

Enable this in `Settings → General → Pull Requests`:

3. ✅ **Allow auto-merge**

### Recommended Settings

Configure branch protection for `main`:

- ☑ Require status checks to pass before merging
  - Lint
  - Build
  - Validate Commit Messages
- ☑ Require branches to be up to date before merging
- ☑ Require linear history

## Testing the Setup

### Test Commit Message Validation

```bash
# This should pass
echo "feat: test commit" | pnpm exec commitlint

# This should fail
echo "Added feature" | pnpm exec commitlint
```

### Test Cocogitto Locally

```bash
# Install cocogitto
brew install cocogitto  # macOS

# Verify commit messages
cog check

# Dry-run version bump
cog bump --dry-run --patch

# Generate changelog without bumping
cog changelog
```

### Test Workflow Locally

Use [act](https://github.com/nektos/act) to test GitHub Actions
locally:

```bash
# Install act
brew install act  # macOS

# Test CI workflow
act pull_request -W .github/workflows/ci.yml

# Test auto-version-bump (requires secrets)
act push -W .github/workflows/auto-version-bump.yml
```

## Troubleshooting

### Workflow not triggering

**Check:**

1. Are changes in `package.json` or `pnpm-lock.yaml`?
2. Does commit message contain `build(deps)`?
3. Are workflow permissions correctly set?

### Commit message validation failing

**Check:**

1. Is message in lowercase?
2. No period at the end?
3. Using valid type (feat, fix, docs, etc.)?
4. Husky hooks installed? Run: `pnpm install`

### Auto-merge not working

**Check:**

1. Is auto-merge enabled in repository settings?
2. Are all required CI checks passing?
3. Is branch protection configured correctly?

## Useful Commands

```bash
# View recent commits in conventional format
git log --pretty=format:'%s'

# Check if cocogitto is installed
cog --version

# Validate all commits since last tag
cog check

# Generate full changelog
cog changelog > CHANGELOG.md

# List all tags
git tag -l

# View commits since last tag
git log $(git describe --tags --abbrev=0)..HEAD --oneline
```

## Resources

- [Cocogitto Documentation](https://docs.cocogitto.io/)
- [Conventional Commits Specification](https://www.conventionalcommits.org/)
- [Angular Commit Guidelines](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit)
- [Semantic Versioning](https://semver.org/)
