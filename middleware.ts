import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n";

// Redirect any path without a locale prefix to the default locale.
// /shop -> /en/shop, / -> /en. Files and _next are excluded by the matcher.
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // API routes are locale-agnostic — never redirect them.
  if (pathname.startsWith("/api/")) return;

  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return;

  const url = req.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
