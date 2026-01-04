# MDX Implementation Analysis

Analysis of MDX implementations in business-composer and agnos-website
repositories to determine the best approach for ekgf-website.

## Key Findings

### 1. Contentlayer is Deprecated

**Status:** Contentlayer is abandoned/deprecated and should be avoided
for new projects.

- business-composer still uses `contentlayer2` (fork) but this is not
  recommended
- agnos-website has moved away from Contentlayer

### 2. Modern MDX Approaches

Two viable approaches identified:

#### Approach A: @next/mdx (Simple, File-based)

**Used by:** agnos-website  
**Best for:** Static MDX pages, simple content

**Configuration:**

```typescript
// next.config.ts
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

const nextConfig = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true, // Rust-based MDX compiler (faster)
  },
};

export default withMDX(nextConfig);
```

**Dependencies:**

```json
{
  "@mdx-js/loader": "^3.1.0",
  "@mdx-js/react": "^3.1.0",
  "@next/mdx": "^15.3.5",
  "remark-gfm": "^4.0.1"
}
```

**Pros:**

- ✅ Simple setup, no additional dependencies
- ✅ Works directly with Next.js App Router
- ✅ File-based routing (`/app/blog/post.mdx` → `/blog/post`)
- ✅ Fast Rust-based MDX compiler (`mdxRs: true`)
- ✅ Well-maintained by Vercel
- ✅ Native Next.js integration

**Cons:**

- ❌ No built-in frontmatter handling
- ❌ No automatic metadata extraction
- ❌ Manual routing for dynamic content

#### Approach B: next-mdx-remote (Dynamic, CMS-like)

**Used by:** agnos-website (for dynamic content)  
**Best for:** CMS-style content, remote MDX, dynamic loading

**Configuration:**

```typescript
// In your page component
import { MDXRemote } from "next-mdx-remote/rsc";
import { compileMDX } from "next-mdx-remote/rsc";

// Load MDX from anywhere (filesystem, API, CMS)
const { content, frontmatter } = await compileMDX({
  source: mdxContent,
  options: {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  },
});
```

**Dependencies:**

```json
{
  "next-mdx-remote": "^5.0.0",
  "gray-matter": "^4.0.3",
  "remark-gfm": "^4.0.1"
}
```

**Pros:**

- ✅ Dynamic content loading (filesystem, API, CMS)
- ✅ Built-in frontmatter parsing
- ✅ More flexible content sources
- ✅ RSC (React Server Components) support
- ✅ Can load from external sources
- ✅ Better for blog/docs with metadata

**Cons:**

- ❌ More complex setup
- ❌ Requires manual routing logic
- ❌ Additional dependency

## Comparison: business-composer vs agnos-website

### business-composer (Legacy Approach - DO NOT USE)

**Stack:**

- ❌ contentlayer2 (deprecated fork)
- ❌ next-contentlayer2
- Complex setup with custom loaders
- Heavy configuration

**Why Not:**

- Contentlayer is abandoned
- No active maintenance
- Better alternatives exist

### agnos-website (Modern Approach - RECOMMENDED)

**Stack:**

- ✅ @next/mdx for static pages
- ✅ next-mdx-remote for dynamic content
- ✅ Clean, simple configuration
- ✅ Next.js 15 compatible

**Why Yes:**

- Modern, maintained packages
- Native Next.js integration
- Flexible approach
- RSC support

## Recommendations for ekgf-website

### Phase 1: No MDX Yet (Current)

**Current Status:** ✅ No MDX dependencies needed now

**Reason:** Website doesn't require MDX content yet

### Phase 2: When MDX is Needed (Future)

**Recommended Approach:** Hybrid Strategy

#### For Simple Pages (About, Privacy, Terms)

Use **@next/mdx**:

```typescript
// app/about/page.mdx
export const metadata = {
  title: "About EKGF",
};

# About EKGF

Content here...
```

#### For Blog/Docs with Metadata

Use **next-mdx-remote**:

```typescript
// app/blog/[slug]/page.tsx
import { compileMDX } from "next-mdx-remote/rsc";
import fs from "fs";

export default async function BlogPost({ params }) {
  const source = fs.readFileSync(`content/${params.slug}.mdx`);

  const { content, frontmatter } = await compileMDX({
    source,
    options: { parseFrontmatter: true },
  });

  return <article>{content}</article>;
}
```

## Implementation Plan for Future

### Step 1: Add Dependencies (When Needed)

```bash
pnpm add @next/mdx @mdx-js/loader @mdx-js/react next-mdx-remote
pnpm add -D gray-matter remark-gfm rehype-highlight
```

### Step 2: Update next.config.ts

```typescript
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeHighlight],
  },
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    mdxRs: true, // Fast Rust-based compiler
  },
};

export default withMDX(nextConfig);
```

### Step 3: Add MDX Components (Optional)

```typescript
// mdx-components.tsx
import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents) {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-3">{children}</h2>
    ),
    // Custom components
    ...components,
  };
}
```

### Step 4: Content Structure

```
content/
├── blog/
│   ├── post-1.mdx
│   └── post-2.mdx
└── docs/
    ├── getting-started.mdx
    └── api-reference.mdx

app/
├── blog/
│   └── [slug]/
│       └── page.tsx  # Dynamic blog post
├── docs/
│   └── [slug]/
│       └── page.tsx  # Dynamic docs
└── about/
    └── page.mdx      # Static MDX page
```

## Plugins Ecosystem

### Essential Plugins

```json
{
  "remark-gfm": "^4.0.1", // GitHub Flavored Markdown
  "rehype-highlight": "^7.0.2", // Code syntax highlighting
  "remark-frontmatter": "^5.0.0", // Frontmatter support
  "rehype-slug": "^6.0.0", // Auto-generate heading IDs
  "rehype-autolink-headings": "^7.1.0" // Auto-link headings
}
```

### Advanced Plugins (If Needed)

```json
{
  "rehype-mermaid": "^3.0.0", // Mermaid diagrams
  "remark-math": "^6.0.0", // Math equations
  "rehype-katex": "^7.0.0", // KaTeX rendering
  "rehype-prism-plus": "^2.0.0" // Advanced code highlighting
}
```

## Migration Path from Contentlayer

If we ever need to migrate content from a Contentlayer-based project:

1. **Extract MDX files** from content directory
2. **Convert** contentlayer.config.ts schema to TypeScript types
3. **Use** next-mdx-remote for dynamic loading
4. **Keep** frontmatter structure (compatible)

## Performance Considerations

### @next/mdx

- ✅ Compile-time processing
- ✅ No runtime overhead
- ✅ Rust-based MDX compiler (`mdxRs: true`)
- ✅ Best for static content

### next-mdx-remote

- ✅ RSC (React Server Components) support
- ✅ Server-side compilation
- ✅ No client bundle bloat
- ✅ Dynamic content loading

## Security Considerations

Both approaches are secure when used properly:

- ✅ Server-side compilation (no eval)
- ✅ No untrusted user content
- ✅ Sanitized by default
- ⚠️ Be careful with dynamic components

## Testing Strategy

```typescript
// __tests__/mdx.test.tsx
import { compileMDX } from "next-mdx-remote/rsc";

test("parses MDX frontmatter", async () => {
  const { frontmatter } = await compileMDX({
    source: `---
title: Test
---
# Content`,
    options: { parseFrontmatter: true },
  });

  expect(frontmatter.title).toBe("Test");
});
```

## Summary

### DO NOT USE

- ❌ contentlayer / contentlayer2
- ❌ Any abandoned/deprecated libraries

### DO USE (When Needed)

- ✅ @next/mdx for simple static pages
- ✅ next-mdx-remote for dynamic content with metadata
- ✅ remark-gfm for GitHub Flavored Markdown
- ✅ rehype plugins for enhancements

### Current Status for ekgf-website

**No changes needed now.** When MDX is required:

1. Install @next/mdx and next-mdx-remote
2. Update next.config.ts with MDX support
3. Create content structure
4. Implement dynamic routing for blog/docs

### References

- [Next.js MDX Documentation](https://nextjs.org/docs/app/building-your-application/configuring/mdx)
- [next-mdx-remote GitHub](https://github.com/hashicorp/next-mdx-remote)
- [MDX Documentation](https://mdxjs.com/docs/getting-started/)
- [Remark Plugins](https://github.com/remarkjs/remark/blob/main/doc/plugins.md)
- [Rehype Plugins](https://github.com/rehypejs/rehype/blob/main/doc/plugins.md)

## Decision

**For ekgf-website:**

- ⏸️ **Wait** - Don't add MDX dependencies until needed
- 📝 **Document** - Keep this analysis for future reference
- 🎯 **Plan** - Use @next/mdx + next-mdx-remote when time comes
- ❌ **Avoid** - Never use Contentlayer

This analysis will serve as a guide when MDX support is required in
the future.
