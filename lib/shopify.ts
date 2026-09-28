// -----------------------------------------------------------------------------
// Shipstore — Shopify Storefront API client
// -----------------------------------------------------------------------------
// Ready-to-use headless backend. Once the Logic4 catalogue is imported into the
// Shopify store, flip lib/data.ts to call these functions (and mapShopifyProduct)
// instead of the placeholder arrays. Every getter here returns the same shapes
// (Product / Category) the UI already consumes, so no component changes.
//
// Env (set in .env.local and on Vercel):
//   NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN   e.g. 9k08qb-i0.myshopify.com
//   SHOPIFY_STOREFRONT_ACCESS_TOKEN    Storefront API token (public or shpat_)
// -----------------------------------------------------------------------------

import type { Product, Category } from "./data";

const API_VERSION = "2024-10";

function storeConfig() {
  return {
    domain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN ?? "",
    token: process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
  };
}

export function isShopifyConfigured(): boolean {
  const { domain, token } = storeConfig();
  return Boolean(domain && token);
}

export async function shopifyFetch<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T> {
  const { domain, token } = storeConfig();
  if (!domain || !token) {
    throw new Error("Shopify is not configured (missing domain or token).");
  }

  const url = `https://${domain}/api/${API_VERSION}/graphql.json`;
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  if (token.startsWith("shpat_")) {
    headers["Shopify-Storefront-Private-Token"] = token;
  } else {
    headers["X-Shopify-Storefront-Access-Token"] = token;
  }

  const res = await fetch(url, {
    method: "POST",
    headers,
    body: JSON.stringify({ query, variables }),
    // Cache product reads at the edge; revalidate every 5 minutes.
    next: { revalidate: 300 },
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Shopify API ${res.status} ${res.statusText}: ${text}`);
  }

  const json = await res.json();
  if (json.errors) {
    throw new Error(`Shopify GraphQL error: ${JSON.stringify(json.errors)}`);
  }
  return json.data as T;
}

// ---------- GraphQL fragments & queries --------------------------------------

const PRODUCT_FRAGMENT = `
  fragment ProductFields on Product {
    id
    handle
    title
    vendor
    productType
    description
    tags
    featuredImage { url altText width height }
    images(first: 6) { edges { node { url altText width height } } }
    priceRange { minVariantPrice { amount currencyCode } }
    compareAtPriceRange { minVariantPrice { amount currencyCode } }
    variants(first: 20) {
      edges {
        node {
          id
          title
          availableForSale
          price { amount currencyCode }
          selectedOptions { name value }
        }
      }
    }
  }
`;

const PRODUCTS_QUERY = `
  ${PRODUCT_FRAGMENT}
  query Products($first: Int!, $query: String) {
    products(first: $first, query: $query, sortKey: BEST_SELLING) {
      edges { node { ...ProductFields } }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  ${PRODUCT_FRAGMENT}
  query ProductByHandle($handle: String!) {
    product(handle: $handle) { ...ProductFields }
  }
`;

const COLLECTIONS_QUERY = `
  query Collections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          handle
          title
          description
          image { url altText }
        }
      }
    }
  }
`;

const PRODUCTS_IN_COLLECTION_QUERY = `
  ${PRODUCT_FRAGMENT}
  query CollectionProducts($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      products(first: $first) { edges { node { ...ProductFields } } }
    }
  }
`;

// ---------- Raw Shopify shapes -----------------------------------------------

type SFImage = { url: string; altText: string | null; width: number; height: number };
type SFMoney = { amount: string; currencyCode: string };

export type ShopifyProduct = {
  id: string;
  handle: string;
  title: string;
  vendor: string;
  productType: string;
  description: string;
  tags: string[];
  featuredImage: SFImage | null;
  images: { edges: { node: SFImage }[] };
  priceRange: { minVariantPrice: SFMoney };
  compareAtPriceRange: { minVariantPrice: SFMoney };
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: SFMoney;
        selectedOptions: { name: string; value: string }[];
      };
    }[];
  };
};

// ---------- Mappers ----------------------------------------------------------

// Turn a Shopify product into the UI's Product shape. Category comes from the
// product's productType (map to a category slug), image from the CDN URL.
export function mapShopifyProduct(p: ShopifyProduct): Product & { image?: string } {
  const price = parseFloat(p.priceRange.minVariantPrice.amount);
  const compare = parseFloat(p.compareAtPriceRange?.minVariantPrice?.amount ?? "0");
  const specs: Record<string, string> = {};
  // Collect single-value options as light specs.
  const first = p.variants.edges[0]?.node;
  if (first) {
    for (const opt of first.selectedOptions) {
      if (opt.value && opt.value.toLowerCase() !== "default title") {
        specs[opt.name] = opt.value;
      }
    }
  }
  return {
    slug: p.handle,
    name: p.title,
    brand: p.vendor || "Shipstore",
    category: slugifyType(p.productType),
    price,
    oldPrice: compare > price ? compare : undefined,
    blurb: p.description,
    featured: p.tags?.includes("featured"),
    specs: Object.keys(specs).length ? specs : undefined,
    image: p.featuredImage?.url ?? p.images.edges[0]?.node.url,
  };
}

function slugifyType(t: string): string {
  return (t || "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
}

// ---------- Public async API (mirrors lib/data.ts signatures) ----------------

export async function getShopifyProducts(first = 100): Promise<(Product & { image?: string })[]> {
  const data = await shopifyFetch<{ products: { edges: { node: ShopifyProduct }[] } }>(
    PRODUCTS_QUERY,
    { first }
  );
  return data.products.edges.map((e) => mapShopifyProduct(e.node));
}

export async function getShopifyProduct(
  handle: string
): Promise<(Product & { image?: string }) | null> {
  const data = await shopifyFetch<{ product: ShopifyProduct | null }>(
    PRODUCT_BY_HANDLE_QUERY,
    { handle }
  );
  return data.product ? mapShopifyProduct(data.product) : null;
}

export async function getShopifyProductsByCollection(
  handle: string,
  first = 100
): Promise<(Product & { image?: string })[]> {
  const data = await shopifyFetch<{
    collection: { products: { edges: { node: ShopifyProduct }[] } } | null;
  }>(PRODUCTS_IN_COLLECTION_QUERY, { handle, first });
  if (!data.collection) return [];
  return data.collection.products.edges.map((e) => mapShopifyProduct(e.node));
}

export async function getShopifyCollections(first = 50): Promise<Category[]> {
  const data = await shopifyFetch<{
    collections: {
      edges: {
        node: {
          handle: string;
          title: string;
          description: string;
          image: { url: string } | null;
        };
      }[];
    };
  }>(COLLECTIONS_QUERY, { first });
  return data.collections.edges.map((e) => ({
    slug: e.node.handle,
    name: e.node.title,
    tagline: "",
    icon: "anchor",
    tone: "sea" as const,
    blurb: e.node.description,
    image: e.node.image?.url,
  }));
}

// ---------- Cart (Storefront cart API) ---------------------------------------
// The UI cart (context/CartContext) can call these once checkout is moved to
// Shopify's hosted checkout. cartCreate returns a checkoutUrl to redirect to.

const CART_CREATE = `
  mutation CartCreate($lines: [CartLineInput!]) {
    cartCreate(input: { lines: $lines }) {
      cart { id checkoutUrl totalQuantity }
      userErrors { field message }
    }
  }
`;

const CART_LINES_ADD = `
  mutation CartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { id checkoutUrl totalQuantity }
      userErrors { field message }
    }
  }
`;

export type CartResult = { id: string; checkoutUrl: string; totalQuantity: number };

export async function createCart(
  lines: { merchandiseId: string; quantity: number }[]
): Promise<CartResult> {
  const data = await shopifyFetch<{
    cartCreate: { cart: CartResult; userErrors: { message: string }[] };
  }>(CART_CREATE, { lines });
  if (data.cartCreate.userErrors?.length) {
    throw new Error(data.cartCreate.userErrors.map((e) => e.message).join(", "));
  }
  return data.cartCreate.cart;
}

export async function addCartLines(
  cartId: string,
  lines: { merchandiseId: string; quantity: number }[]
): Promise<CartResult> {
  const data = await shopifyFetch<{
    cartLinesAdd: { cart: CartResult; userErrors: { message: string }[] };
  }>(CART_LINES_ADD, { cartId, lines });
  if (data.cartLinesAdd.userErrors?.length) {
    throw new Error(data.cartLinesAdd.userErrors.map((e) => e.message).join(", "));
  }
  return data.cartLinesAdd.cart;
}
