import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
const redirectMap: Record<string, string> = {
  // "/old-page": "/new-page",

  // blogs
  "/2024/11/09/how-culture-and-society-influence-attitudes-toward-ivf":
    "/blog/how-culture-and-society-influence-attitudes-toward-ivf",
  "/services/infertility-diag": "/services/infertility-diagnosis",
  "/2024/11/09/improving-sperm-quality-lifestyle-changes-for-men-preparing-for-ivf":
    "blog/improving-sperm-quality:-lifestyle-changes-for-men-preparing-for-ivf",
  "/2024/11/09/ivf-for-women-over-30-what-are-the-success-rates-and-risks":
    "/blog/ivf-for-women-over-30:-what-are-the-success-rates-and-risks",
  "/2024/11/09/endometriosis-and-ivf-special-considerations-for-treatment":
    "/blog/endometriosis-and-ivf:-special-considerations-for-treatment",
  "/2024/11/09/ivf-in-nepal-navigating-challenges-celebrating-success-and-embracing-future-trends":
    "/blog/ivf-in-nepal:-navigating-challenges-celebrating-success-and-embracing-future-trends",

  // blog pages
  "/blog/page/2": "/blog?page=2",
  "/blog/page/3": "/blog?page=3",
  "/blog/page/4": "/blog?page=4",

  //
};
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname in redirectMap) {
    const url = new URL(request.nextUrl.origin + redirectMap[pathname]);
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}
