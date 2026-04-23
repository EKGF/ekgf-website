import { NextResponse, type NextRequest } from "next/server";

/**
 * Proxy /dprod/* to the dprod zone verbatim.
 *
 * Why middleware rather than a plain next.config rewrite: Next.js's
 * trailingSlash: true combined with path-pattern rewrites rewrites file
 * URLs (*.jpg, *.ttl, …) as if they were directories, which makes the
 * downstream zone 308 the slash off again — producing a redirect loop
 * on every asset. Middleware forwards the path unchanged, so directory
 * URLs keep their trailing slash (/dprod/spec/) while file URLs stay
 * slashless (/dprod/spec/assets/dprod.jpg), which is what both zones
 * canonicalise to.
 */
const DPROD_ORIGIN =
  process.env.DPROD_ZONE_ORIGIN ?? "https://dprod.ekgf.vercel.app";

export const config = {
  matcher: ["/dprod", "/dprod/:path*"],
};

export function middleware(req: NextRequest) {
  const { pathname, search } = req.nextUrl;
  return NextResponse.rewrite(`${DPROD_ORIGIN}${pathname}${search}`);
}
