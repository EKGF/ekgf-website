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
  async rewrites() {
    return [
      // /dprod → /dprod (bare, goes to the zone's landing page)
      {
        source: "/dprod",
        destination: `${DPROD_ORIGIN}/dprod`,
      },
      // /dprod/anything → same path on the zone
      {
        source: "/dprod/:path*",
        destination: `${DPROD_ORIGIN}/dprod/:path*`,
      },
    ];
  },
};

export default nextConfig;
