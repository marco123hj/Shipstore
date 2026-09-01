import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { locales } from "@/lib/i18n";
import { getCategories, getProducts, getBrands } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/shop",
    "/nautic-talk",
    "/about",
    "/contact",
    "/faq",
    "/shipping",
    "/terms",
    "/privacy",
    "/cookies",
    "/wishlist",
  ];
  const catPaths = getCategories().map((c) => `/category/${c.slug}`);
  const productPaths = getProducts().map((p) => `/product/${p.slug}`);
  const brandPaths = getBrands().map((b) => `/brand/${b.slug}`);
  const all = [...staticPaths, ...catPaths, ...productPaths, ...brandPaths];

  const entries: MetadataRoute.Sitemap = [];
  for (const locale of locales) {
    for (const path of all) {
      entries.push({
        url: `${SITE_URL}/${locale}${path}`,
        changeFrequency: "weekly",
        priority: path === "" ? 1 : path.startsWith("/product") ? 0.8 : 0.6,
      });
    }
  }
  return entries;
}
