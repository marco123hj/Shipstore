import { Product } from "@/lib/data";

// Production domain. TODO: confirm the real domain and update this one line.
export const SITE_URL = "https://lacapitana.es";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "La Capitana",
    description: "Marine and yacht supplies at the Valencia Mar marina.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Valencia Mar marina, El Saler",
      addressLocality: "València",
      postalCode: "46012",
      addressCountry: "ES",
    },
  };
}

export function productSchema(p: Product, locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    brand: { "@type": "Brand", name: p.brand },
    description: p.blurb,
    offers: {
      "@type": "Offer",
      price: p.price.toFixed(2),
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/${locale}/product/${p.slug}`,
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}
