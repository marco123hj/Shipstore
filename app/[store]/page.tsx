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

function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(parseFloat(amount));
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
    <>
      <div className="page-header">
        <div className="page-header-breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp; {STORE_LABELS[params.store]}
        </div>
        <h1>{STORE_LABELS[params.store]}</h1>
        <p>
          {products.length > 0
            ? `${products.length} product${products.length === 1 ? "" : "s"}`
            : "Browse our collection"}
        </p>
      </div>

      {error && (
        <p className="error-message">
          Could not load products. Make sure your environment variables are
          configured.
        </p>
      )}

      {!error && products.length === 0 && (
        <p className="empty-message">No products found yet.</p>
      )}

      <div className="product-grid">
        {products.map((product) => {
          const image = product.images.edges[0]?.node;
          const price = product.priceRange.minVariantPrice;

          return (
            <Link
              key={product.id}
              href={`/${params.store}/products/${product.handle}`}
              className="product-card"
            >
              <div className="product-card-image">
                {image && (
                  <Image
                    src={image.url}
                    alt={image.altText ?? product.title}
                    width={image.width}
                    height={image.height}
                  />
                )}
              </div>
              <div className="product-card-info">
                <div className="product-card-title">{product.title}</div>
                <div className="product-card-price">
                  {formatPrice(price.amount, price.currencyCode)}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
