# Reusable GitHub Actions

This directory contains reusable composite actions for the
ekgf-website project.

## Available Actions

### setup-cocogitto

Installs and caches Cocogitto (conventional commits tooling) for
version management and changelog generation.

**Usage:**

```yaml
- name: Setup Cocogitto
  uses: ./.github/actions/setup-cocogitto
```

**Features:**

- Downloads and caches cocogitto binary
- Supports Linux, macOS, and Windows
- Handles different architectures (x86_64, ARM64)
- Verifies installation

**Cache Key:** `cocogitto-6.1.0-${{ runner.os }}-${{ runner.arch }}`

### generate-changelog

Generates a changelog from conventional commits using Cocogitto.

**Usage:**

```yaml
- name: Generate changelog
  uses: ./.github/actions/generate-changelog
  with:
    release-tag: v0.0.1
    output-file: CHANGELOG_RELEASE.md
```

**Inputs:**

- `release-tag` (required): Release tag (e.g., v0.0.1)
- `output-file` (optional): Output file path (default: CHANGELOG.md)

**Features:**

- Handles existing and non-existing tags
- Generates changelog from previous tag to HEAD
- Filters commits by conventional commit type
- Uses cog.toml configuration

## Local Testing

You can test these actions locally using the scripts directly:

```bash
# Test changelog generation
.github/scripts/generate-changelog.sh CHANGELOG.md v0.0.1
```

## Implementation Details

### Why Composite Actions?

Composite actions are used instead of reusable workflows because:

1. **Faster execution** - No separate job overhead
2. **Easier caching** - Can cache binaries between steps
3. **Simpler maintenance** - Single file per action
4. **Better reusability** - Can be called multiple times in same job

### Binary Caching Strategy

Both actions use GitHub's `actions/cache@v4` to cache binaries:

- **cocogitto**: `~/.local/bin/cog`
- **Cache lifetime**: Until cache eviction (7 days of inactivity or
  10GB limit)
- **Cache key includes**: OS, architecture, and version

This reduces installation time from ~30s to ~2s on cache hits.

### Cross-Platform Support

The actions support:

- **Linux**: x86_64-unknown-linux-musl
- **macOS**: x86_64-apple-darwin, aarch64-apple-darwin (Apple Silicon)
- **Windows**: x86_64-pc-windows-msvc

Platform detection is automatic based on `runner.os` and
`runner.arch`.

## Maintenance

### Updating Cocogitto Version

To update the cocogitto version:

1. Update the `VERSION` variable in `setup-cocogitto/action.yml`
2. Update the cache key to invalidate old caches
3. Test on all platforms
4. Update this README with the new version

### Adding New Actions

When adding new actions:

1. Create a new directory: `.github/actions/action-name/`
2. Add `action.yml` with metadata and steps
3. Document in this README
4. Add to workflows as needed
5. Test locally if possible

## Related Files

- `cog.toml` - Cocogitto configuration
- `.github/scripts/generate-changelog.sh` - Standalone changelog
  script
- `.github/workflows/auto-version-bump.yml` - Uses both actions
- `.github/VERSIONING.md` - Versioning documentation

## Resources

- [GitHub Actions Composite Actions](https://docs.github.com/en/actions/creating-actions/creating-a-composite-action)
- [Cocogitto Documentation](https://docs.cocogitto.io/)
- [actions/cache Documentation](https://github.com/actions/cache)
