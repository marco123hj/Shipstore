import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProducts, type ShopifyProduct } from "@/lib/shopify";

const VALID_STORES = ["zepory", "nautictalk"] as const;
type Store = (typeof VALID_STORES)[number];

const STORE_LABELS: Record<Store, string> = {
  zepory: "Zepory",
  nautictalk: "Nautic Talk",
};

function isValidStore(value: string): value is Store {
  return VALID_STORES.includes(value as Store);
}

export function generateStaticParams() {
  return VALID_STORES.map((store) => ({ store }));
}

export async function generateMetadata({
  params,
}: {
  params: { store: string };
}) {
  if (!isValidStore(params.store)) return {};
  return { title: `${STORE_LABELS[params.store]} | Shipstore` };
}

export default async function StorePage({
  params,
}: {
  params: { store: string };
}) {
  if (!isValidStore(params.store)) {
    notFound();
  }

  let products: ShopifyProduct[] = [];
  let error: string | null = null;

  try {
    products = await getProducts(params.store);
  } catch (err) {
    error =
      err instanceof Error ? err.message : "Failed to load products";
  }

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <h1>{STORE_LABELS[params.store]} Products</h1>

      {error && (
        <p style={{ color: "#dc2626" }}>
          Could not load products: {error}. Make sure your environment
          variables are configured.
        </p>
      )}

      {!error && products.length === 0 && (
        <p style={{ color: "#6b7280" }}>No products found.</p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {products.map((product) => {
          const image = product.images.edges[0]?.node;
          const price = product.priceRange.minVariantPrice;

          return (
            <Link
              key={product.id}
              href={`/${params.store}/products/${product.handle}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                border: "1px solid #e5e7eb",
                borderRadius: "0.5rem",
                overflow: "hidden",
              }}
            >
              {image && (
                <Image
                  src={image.url}
                  alt={image.altText ?? product.title}
                  width={image.width}
                  height={image.height}
                  style={{ width: "100%", height: "auto" }}
                />
              )}
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.25rem" }}>{product.title}</h3>
                <p style={{ margin: 0, color: "#6b7280" }}>
                  {price.amount} {price.currencyCode}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
