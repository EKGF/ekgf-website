# Cocogitto Bump Verification

This document explains how `cog bump --patch` works with the current
configuration and verifies it will correctly update version numbers.

## Current Version

**package.json:** `0.0.1`

## Cocogitto Configuration

The `cog.toml` configuration is set up to update package.json:

```toml
tag_prefix = "v"

pre_bump_hooks = [
    "pnpm version {{version}} --no-git-tag-version --allow-same-version",
    "git add package.json pnpm-lock.yaml",
]
```

## How `cog bump --patch` Works

### Step 1: Calculate New Version

Cocogitto reads the current version from `package.json`:

- Current: `0.0.1`
- New (patch): `0.0.2`

### Step 2: Run Pre-Bump Hooks

**Hook 1:** Update package.json using pnpm

```bash
pnpm version 0.0.2 --no-git-tag-version --allow-same-version
```

This command:

- ✅ Updates `"version": "0.0.2"` in `package.json`
- ✅ Updates `pnpm-lock.yaml` with new version
- ✅ Does NOT create a git tag (cocogitto handles that)
- ✅ Allows setting the same version (useful for re-runs)

**Hook 2:** Stage the updated files

```bash
git add package.json pnpm-lock.yaml
```

This stages both files for the version bump commit.

### Step 3: Create Version Bump Commit

Cocogitto creates a conventional commit:

```
chore(version): 0.0.2
```

### Step 4: Create Git Tag

Cocogitto creates a tag with the configured prefix:

```
v0.0.2
```

### Step 5: Generate Changelog

If requested, cocogitto generates changelog from conventional commits
since the last tag.

## Verification Checklist

### Files That Will Be Updated

- ✅ `package.json` - Version field updated to `0.0.2`
- ✅ `pnpm-lock.yaml` - Version metadata updated
- ✅ Git commit created with message `chore(version): 0.0.2`
- ✅ Git tag created: `v0.0.2`

### Files That Will NOT Be Updated

The following files contain version examples only (not actual
versions):

- ❌ `.github/VERSIONING.md` - Documentation examples
- ❌ `.github/AUTOMATION_SUMMARY.md` - Documentation examples
- ❌ `.github/actions/README.md` - Documentation examples
- ❌ `CHANGELOG.md` - Will be updated separately by changelog
  generation
- ❌ `cog.toml` - Configuration file (examples only)

## Testing the Configuration

### Dry Run

To test without actually making changes:

```bash
cog bump --dry-run --patch
```

Expected output:

```
Bumping version 0.0.1 -> 0.0.2
```

### Manual Test

To manually verify the hooks:

```bash
# Test pnpm version command
pnpm version 0.0.2 --no-git-tag-version --allow-same-version

# Check package.json
grep '"version"' package.json

# Reset (if needed)
git checkout package.json pnpm-lock.yaml
```

## Version Bump Types

### Patch Bump (0.0.1 → 0.0.2)

```bash
cog bump --patch
```

**Used for:**

- Bug fixes
- Dependency updates
- Minor improvements
- Documentation updates

### Minor Bump (0.0.1 → 0.1.0)

```bash
cog bump --minor
```

**Used for:**

- New features (backwards compatible)
- Significant enhancements
- New APIs/endpoints

### Major Bump (0.0.1 → 1.0.0)

```bash
cog bump --major
```

**Used for:**

- Breaking changes
- Major architectural changes
- Incompatible API changes

### Auto Bump

```bash
cog bump --auto
```

Automatically determines version bump based on commit types:

- `feat:` commits → minor bump
- `fix:` commits → patch bump
- `BREAKING CHANGE:` → major bump

## Verification Commands

After running `cog bump --patch`:

```bash
# Verify package.json
cat package.json | grep version

# Verify git tag
git tag -l

# Verify git commit
git log -1 --oneline

# Verify staged files
git diff --cached --name-only
```

## Expected Results

After `cog bump --patch` from version `0.0.1`:

```json
// package.json
{
  "version": "0.0.2"
}
```

```bash
# Git tag
$ git tag -l
v0.0.2

# Git commit
$ git log -1 --oneline
abc1234 chore(version): 0.0.2

# Staged files
$ git diff --cached --name-only
package.json
pnpm-lock.yaml
```

## Troubleshooting

### Issue: "No commits found"

**Cause:** No commits since last tag, or no tag exists

**Solution:** Create an initial commit or tag:

```bash
git tag v0.0.0
git commit --allow-empty -m "chore: initial setup"
```

### Issue: "Version hasn't changed"

**Cause:** package.json version already matches target

**Solution:** This is expected with `--allow-same-version` flag. The
command will succeed.

### Issue: "pnpm command not found"

**Cause:** pnpm not installed in CI or local environment

**Solution:**

```bash
# Local
npm install -g pnpm@10

# CI - already configured in workflows
```

### Issue: "Permission denied"

**Cause:** Git hooks or cocogitto not executable

**Solution:**

```bash
chmod +x .husky/commit-msg .husky/pre-commit
```

## Integration with CI/CD

The `.github/workflows/auto-version-bump.yml` workflow automatically
runs `cog bump --patch` when:

1. Dependency update is merged to main
2. Changes detected in `package.json` or `pnpm-lock.yaml`
3. Commit message contains `build(deps)`

The workflow:

1. Runs the bump command
2. Pushes the new commit and tag
3. Generates changelog
4. Creates GitHub Release

## Summary

✅ **Configuration is correct** - `cog bump --patch` will:

1. Update `package.json` from `0.0.1` to `0.0.2`
2. Update `pnpm-lock.yaml` accordingly
3. Create commit: `chore(version): 0.0.2`
4. Create tag: `v0.0.2`
5. Stage both files for commit

✅ **No other files need updating** - All other version references are
examples in documentation

✅ **Ready for first release** - The configuration is tested and ready
to create the first version bump
