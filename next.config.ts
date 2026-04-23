import type { NextConfig } from "next";

/**
 * Multi-zone proxy. Each EKGF sub-site (currently: dprod) lives in
 * its own Next.js app with `basePath: "/<zone>"` and `assetPrefix`
 * pointing at its own Vercel origin. The actual /<zone>/* rewrite
 * to that deployment lives in src/middleware.ts — the URL bar stays
 * on ekgf.org, assets load from the zone's origin (absolute URLs in
 * the generated HTML), and the sub-site is maintained in its own
 * repo.
 *
 * To add the next zone (maturity, method, …) duplicate the pattern
 * in middleware.ts.
 */
const nextConfig: NextConfig = {
  // Align with the dprod zone (site/next.config.ts), which sets
  // trailingSlash: true so its /spec/ URL resolves relative assets
  // correctly. Without matching here, ekgf.org would strip the
  // trailing slash while the zone re-adds it, producing a redirect
  // loop. Use canonical trailing slashes everywhere on ekgf.org.
  //
  // The actual /dprod/* rewrites live in src/middleware.ts because
  // next.config path-pattern rewrites combined with trailingSlash:
  // true mishandle file URLs (treats them as directories and 308s).
  trailingSlash: true,
};

export default nextConfig;
