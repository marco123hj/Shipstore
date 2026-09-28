import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/nl/account", "/en/account", "/nl/checkout", "/en/checkout"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
