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

function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(parseFloat(amount));
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
      <div className="error-message">
        <p>Failed to load product. Check your environment variables.</p>
        <Link href={`/${params.store}`} style={{ color: "#a78bfa" }}>
          Back to {STORE_LABELS[params.store]}
        </Link>
      </div>
    );
  }

  if (!product) {
    notFound();
  }

  const price = product.priceRange.minVariantPrice;
  const mainImage = product.images.edges[0]?.node;
  const additionalImages = product.images.edges.slice(1);

  return (
    <>
      <div className="page-header">
        <div className="page-header-breadcrumb">
          <Link href="/">Home</Link> &nbsp;/&nbsp;{" "}
          <Link href={`/${params.store}`}>{STORE_LABELS[params.store]}</Link>{" "}
          &nbsp;/&nbsp; {product.title}
        </div>
      </div>

      <div className="product-detail">
        <div className="product-images">
          {mainImage && (
            <div className="product-main-image">
              <Image
                src={mainImage.url}
                alt={mainImage.altText ?? product.title}
                width={mainImage.width}
                height={mainImage.height}
                priority
              />
            </div>
          )}
          {additionalImages.length > 0 && (
            <div className="product-thumbnails">
              {additionalImages.map(({ node: image }, index) => (
                <div key={index} className="product-thumbnail">
                  <Image
                    src={image.url}
                    alt={image.altText ?? `${product.title} ${index + 2}`}
                    width={image.width}
                    height={image.height}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="product-info">
          <h1>{product.title}</h1>
          <div className="product-price">
            {formatPrice(price.amount, price.currencyCode)}
          </div>

          {product.description && (
            <p className="product-description">{product.description}</p>
          )}

          {product.variants && product.variants.edges.length > 1 && (
            <>
              <div className="product-variants-label">Options</div>
              <div className="product-variants">
                {product.variants.edges.map(({ node: variant }) => (
                  <span
                    key={variant.id}
                    className={`variant-chip${
                      !variant.availableForSale ? " variant-chip--soldout" : ""
                    }`}
                  >
                    {variant.title}
                  </span>
                ))}
              </div>
            </>
          )}

          <button className="add-to-cart-btn">Add to Cart</button>
        </div>
      </div>
    </>
  );
}
