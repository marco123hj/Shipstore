import { Product } from "@/lib/data";

// Production domain.
export const SITE_URL = "https://shipstore.nl";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Shipstore",
    description: "Watersport- en scheepvaartbenodigdheden. VHF, veiligheid, onderhoud en Nautic Talk headsets.",
    url: SITE_URL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Kadijk 2B",
      addressLocality: "Lemmer",
      postalCode: "8531 XD",
      addressCountry: "NL",
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
