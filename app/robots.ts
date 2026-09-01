import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/en/account", "/es/account", "/en/checkout", "/es/checkout"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
