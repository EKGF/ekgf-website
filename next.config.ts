import type { NextConfig } from "next";

/**
 * Multi-zone rewrites. Each EKGF sub-site (currently: dprod) lives in its
 * own Next.js app with `basePath: "/<zone>"` and `assetPrefix` pointing at
 * its own Vercel origin. We rewrite `/<zone>/*` here to proxy into that
 * deployment at the edge — the URL bar stays on ekgf.org, assets load
 * from the zone's origin (absolute URLs in the generated HTML), and the
 * sub-site is maintained in its own repo.
 *
 * To add the next zone (maturity, method, etc.) duplicate the pattern:
 *   - set basePath + assetPrefix in that site
 *   - add two rewrite entries here (bare path + :path*)
 */
const DPROD_ORIGIN =
  process.env.DPROD_ZONE_ORIGIN ?? "https://dprod.ekgf.vercel.app";

const nextConfig: NextConfig = {
  // Align with the dprod zone (site/next.config.ts), which sets
  // trailingSlash: true so its /spec/ URL resolves relative assets
  // correctly. Without matching here, ekgf.org strips the trailing
  // slash (default Next.js behavior) while the zone re-adds it, which
  // produces a /dprod ↔ /dprod/ redirect loop. Use canonical trailing
  // slashes everywhere on ekgf.org.
  trailingSlash: true,
  async rewrites() {
    return [
      // Both the bare form and the slashed form of /dprod must route to
      // the slashed form on the zone — the dprod zone also has
      // trailingSlash: true, so sending the bare form would make it 308
      // to /dprod/, which would then bubble back here as a redirect loop.
      // Keeping the destination canonical (with trailing slash) avoids
      // that round-trip.
      {
        source: "/dprod",
        destination: `${DPROD_ORIGIN}/dprod/`,
      },
      {
        source: "/dprod/",
        destination: `${DPROD_ORIGIN}/dprod/`,
      },
      // Directory URLs canonicalise with a trailing slash under
      // trailingSlash: true — match that form explicitly and pass it
      // through with the slash preserved. Without this, the dprod zone
      // would 308 the bare form back to us and loop.
      {
        source: "/dprod/:path+/",
        destination: `${DPROD_ORIGIN}/dprod/:path+/`,
      },
      // File URLs (e.g. assets/*.jpg, *.ttl) stay slashless — forcing a
      // trailing slash on these would make the dprod zone 308 back.
      {
        source: "/dprod/:path+",
        destination: `${DPROD_ORIGIN}/dprod/:path+`,
      },
    ];
  },
};

export default nextConfig;
