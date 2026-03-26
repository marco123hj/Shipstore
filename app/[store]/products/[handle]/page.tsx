import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductByHandle } from "@/lib/shopify";

const VALID_STORES = ["zepory", "nautictalk"] as const;
type Store = (typeof VALID_STORES)[number];

const STORE_LABELS: Record<Store, string> = {
  zepory: "Zepory",
  nautictalk: "Nautic Talk",
};

function isValidStore(value: string): value is Store {
  return VALID_STORES.includes(value as Store);
}

export async function generateMetadata({
  params,
}: {
  params: { store: string; handle: string };
}) {
  if (!isValidStore(params.store)) return {};
  const product = await getProductByHandle(params.store, params.handle);
  if (!product) return {};
  return {
    title: `${product.title} | ${STORE_LABELS[params.store]} | Shipstore`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { store: string; handle: string };
}) {
  if (!isValidStore(params.store)) {
    notFound();
  }

  let product;
  try {
    product = await getProductByHandle(params.store, params.handle);
  } catch {
    return (
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        <p style={{ color: "#dc2626" }}>
          Failed to load product. Make sure your environment variables are
          configured.
        </p>
        <Link href={`/${params.store}`}>Back to {STORE_LABELS[params.store]}</Link>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const price = product.priceRange.minVariantPrice;

  return (
    <div style={{ maxWidth: "960px", margin: "0 auto" }}>
      <Link
        href={`/${params.store}`}
        style={{ color: "#4f46e5", textDecoration: "none" }}
      >
        &larr; Back to {STORE_LABELS[params.store]}
      </Link>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          marginTop: "1.5rem",
        }}
      >
        <div>
          {product.images.edges.map(({ node: image }, index) => (
            <Image
              key={index}
              src={image.url}
              alt={image.altText ?? product.title}
              width={image.width}
              height={image.height}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "0.5rem",
                marginBottom: "1rem",
              }}
            />
          ))}
        </div>

        <div>
          <h1 style={{ marginTop: 0 }}>{product.title}</h1>
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#111",
            }}
          >
            {price.amount} {price.currencyCode}
          </p>

          {product.description && (
            <p style={{ color: "#374151", lineHeight: 1.6 }}>
              {product.description}
            </p>
          )}

          {product.variants && product.variants.edges.length > 1 && (
            <div style={{ marginTop: "1.5rem" }}>
              <h3>Variants</h3>
              <ul style={{ paddingLeft: "1.25rem" }}>
                {product.variants.edges.map(({ node: variant }) => (
                  <li key={variant.id} style={{ marginBottom: "0.5rem" }}>
                    {variant.title} &mdash; {variant.price.amount}{" "}
                    {variant.price.currencyCode}
                    {!variant.availableForSale && (
                      <span style={{ color: "#dc2626", marginLeft: "0.5rem" }}>
                        (Sold out)
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
