# Automation Summary

This document provides an overview of all automated processes
configured for the ekgf-website project.

## Overview

The project uses a combination of tools to maintain code quality and
automate releases:

- **Husky** - Git hooks for local commit validation
- **Commitlint** - Enforces Angular-style conventional commits
- **Cocogitto** - Version bumping and changelog generation
- **Dependabot** - Automated dependency updates
- **GitHub Actions** - CI/CD pipelines

## Automation Workflows

### 1. Local Development (Husky Hooks)

**Trigger:** Every `git commit`

**Process:**

1. **Pre-commit hook** runs ESLint
2. **Commit-msg hook** validates commit message format
3. If either fails, commit is rejected

**Files:**

- `.husky/pre-commit`
- `.husky/commit-msg`
- `commitlint.config.js`

**Manual Override:**

```bash
# Skip hooks (not recommended)
git commit --no-verify -m "message"
```

### 2. Continuous Integration (CI Workflow)

**Trigger:**

- Push to `main` branch
- Pull requests to `main`

**Process:**

1. **Lint Job** - Runs ESLint on all code
2. **Build Job** - Builds the Next.js project
3. **Commitlint Job** - Validates all commit messages in PR

**File:** `.github/workflows/ci.yml`

**Status:** Required checks must pass before merge

### 3. Dependency Management (Dependabot)

**Trigger:** Weekly (Monday 2 AM UTC)

**Process:**

1. Dependabot scans for dependency updates
2. Groups patch/minor updates into single PR
3. Creates PR with `build(deps):` prefix
4. PR is labeled with `dependencies` and `automated`

**File:** `.github/dependabot.yml`

**Configuration:**

- **Frequency:** Weekly
- **Grouping:** All patch/minor updates together
- **Commit prefix:** `build(deps)`

### 4. Auto-Merge (Dependabot PRs)

**Trigger:** Dependabot PR opened/updated

**Process:**

1. PR is automatically approved
2. For patch/minor updates: Auto-merge enabled
3. For major updates: Comment added, manual review required
4. When CI passes: PR auto-merges

**File:** `.github/workflows/dependabot-auto-merge.yml`

**Conditions:**

- ✅ Auto-merge: patch and minor updates
- ⚠️ Manual review: major updates

### 5. Version Bump & Release

**Trigger:**

- Push to `main` branch
- Changes to `package.json` or `pnpm-lock.yaml`
- Commit message contains `build(deps)` or `dependencies`

**Process:**

1. Detect dependency update commit
2. Bump patch version (e.g., 0.0.1 → 0.0.2)
3. Update `package.json` and `pnpm-lock.yaml`
4. Generate changelog from conventional commits
5. Create and push Git tag (e.g., v0.0.2)
6. Create GitHub Release with changelog

**File:** `.github/workflows/auto-version-bump.yml`

**Tools:**

- Cocogitto (`cog`) for version bumping
- Configuration in `cog.toml`

## Automation Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│ Developer                                                    │
└────┬────────────────────────────────────────────────────────┘
     │
     │ git commit
     ▼
┌─────────────────────────────────────────────────────────────┐
│ Husky Pre-commit Hook                                        │
│ • Runs ESLint                                               │
│ • Fails → Reject commit                                     │
│ • Passes → Continue                                         │
└────┬────────────────────────────────────────────────────────┘
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ Husky Commit-msg Hook                                        │
│ • Validates conventional commit format                       │
│ • Fails → Reject commit                                     │
│ • Passes → Commit created                                   │
└────┬────────────────────────────────────────────────────────┘
     │
     │ git push
     ▼
┌─────────────────────────────────────────────────────────────┐
│ GitHub Actions CI                                            │
│ • Lint                                                      │
│ • Build                                                     │
│ • Validate commits                                          │
└────┬────────────────────────────────────────────────────────┘
     │
     │ Weekly (Monday 2 AM UTC)
     ▼
┌─────────────────────────────────────────────────────────────┐
│ Dependabot                                                   │
│ • Scans dependencies                                        │
│ • Creates PR with build(deps): prefix                       │
│ • Groups patch/minor updates                                │
└────┬────────────────────────────────────────────────────────┘
     │
     │ PR opened
     ▼
┌─────────────────────────────────────────────────────────────┐
│ Auto-Merge Workflow                                          │
│ • Auto-approve PR                                           │
│ • Enable auto-merge (patch/minor)                           │
│ • Wait for CI to pass                                       │
└────┬────────────────────────────────────────────────────────┘
     │
     │ CI passes → PR merges
     ▼
┌─────────────────────────────────────────────────────────────┐
│ Auto Version Bump Workflow                                   │
│ • Detect dependency update                                  │
│ • Bump patch version with Cocogitto                         │
│ • Update package.json                                       │
│ • Generate changelog                                        │
│ • Create Git tag                                            │
│ • Create GitHub Release                                     │
└─────────────────────────────────────────────────────────────┘
```

## Weekly Automation Cycle

**Monday 2:00 AM UTC:**

1. ⏰ Dependabot wakes up
2. 🔍 Scans for dependency updates
3. 📝 Creates grouped PR with conventional commit message

**When CI Passes (~5 minutes):** 4. ✅ PR is auto-approved 5. 🔀
Auto-merge is enabled 6. ⚡ PR merges automatically

**Immediately After Merge:** 7. 🔢 Version is bumped (patch) 8. 📋
Changelog is generated 9. 🏷️ Git tag is created 10. 🎉 GitHub Release
is published

**Total Time:** ~10-15 minutes from dependency scan to release

## Configuration Files

| File                                          | Purpose                          |
| --------------------------------------------- | -------------------------------- |
| `.husky/pre-commit`                           | Runs ESLint before commit        |
| `.husky/commit-msg`                           | Validates commit message         |
| `commitlint.config.js`                        | Commit message rules             |
| `cog.toml`                                    | Cocogitto version bumping config |
| `.github/dependabot.yml`                      | Dependency update schedule       |
| `.github/workflows/ci.yml`                    | CI checks                        |
| `.github/workflows/dependabot-auto-merge.yml` | Auto-merge logic                 |
| `.github/workflows/auto-version-bump.yml`     | Version bump & release           |

## Reusable Actions

Located in `.github/actions/`:

| Action               | Purpose                              |
| -------------------- | ------------------------------------ |
| `setup-cocogitto`    | Installs and caches cocogitto binary |
| `generate-changelog` | Generates changelog from commits     |

See [.github/actions/README.md](.github/actions/README.md) for
details.

## Manual Overrides

### Skip Dependabot PR

```bash
# Close the PR (Dependabot will recreate next week)
gh pr close <PR-NUMBER>
```

### Manually Bump Version

```bash
# Install cocogitto
brew install cocogitto  # macOS

# Bump version
cog bump --patch   # 0.0.1 → 0.0.2
cog bump --minor   # 0.0.1 → 0.1.0
cog bump --major   # 0.0.1 → 1.0.0
```

### Disable Auto-Merge for Specific PR

```bash
# Disable auto-merge
gh pr merge --disable-auto <PR-NUMBER>
```

## Monitoring

### Check Workflow Status

```bash
# List recent workflow runs
gh run list --limit 10

# Watch specific workflow
gh run watch <RUN-ID>

# View logs
gh run view <RUN-ID> --log
```

### Check Dependabot PRs

```bash
# List open Dependabot PRs
gh pr list --author "dependabot[bot]"

# Check PR status
gh pr checks <PR-NUMBER>
```

## Success Metrics

After setup, you should observe:

- ✅ **Weekly Dependabot PRs** - Every Monday
- ✅ **Auto-approved PRs** - Within seconds of creation
- ✅ **Auto-merged PRs** - After CI passes (~5 min)
- ✅ **Patch version bumps** - Automatically after merge
- ✅ **GitHub Releases** - With generated changelogs
- ✅ **Up-to-date dependencies** - Always current

## Troubleshooting

See [VERSIONING.md](VERSIONING.md#troubleshooting) for common issues
and solutions.

## Related Documentation

- [VERSIONING.md](VERSIONING.md) - Version bumping and releases
- [CONTRIBUTING.md](../CONTRIBUTING.md) - Commit message guidelines
- [COMMIT_CONVENTION.md](COMMIT_CONVENTION.md) - Quick reference
- [actions/README.md](actions/README.md) - Reusable actions

## Credits

This automation setup was inspired by similar configurations in:

- [dotenvage](https://github.com/agnos-ai/dotenvage)
- [cargo-version-info](https://github.com/agnos-ai/cargo-version-info)

Both projects use Cocogitto with Rust/Cargo, adapted here for
TypeScript/pnpm.
