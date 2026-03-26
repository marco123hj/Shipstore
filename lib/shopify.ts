type StoreName = "zepory" | "nautictalk";

interface ShopifyStoreConfig {
  storeDomain: string;
  storefrontAccessToken: string;
}

function getStoreConfig(store: StoreName): ShopifyStoreConfig {
  if (store === "zepory") {
    return {
      storeDomain:
        process.env.NEXT_PUBLIC_ZEPORY_SHOPIFY_STORE_DOMAIN ??
        "zepory.myshopify.com",
      storefrontAccessToken:
        process.env.ZEPORY_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
    };
  }

  return {
    storeDomain:
      process.env.NEXT_PUBLIC_NAUTICTALK_SHOPIFY_STORE_DOMAIN ??
      "nautictalk.myshopify.com",
    storefrontAccessToken:
      process.env.NAUTICTALK_SHOPIFY_STOREFRONT_ACCESS_TOKEN ?? "",
  };
}

async function shopifyFetch<T>(
  store: StoreName,
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  const config = getStoreConfig(store);
  const url = `https://${config.storeDomain}/api/2024-01/graphql.json`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": config.storefrontAccessToken,
    },
    body: JSON.stringify({ query, variables }),
  });

  if (!response.ok) {
    throw new Error(
      `Shopify API error for ${store}: ${response.status} ${response.statusText}`
    );
  }

  const json = await response.json();

  if (json.errors) {
    throw new Error(
      `Shopify GraphQL error: ${JSON.stringify(json.errors)}`
    );
  }

  return json.data as T;
}

// ---------- GraphQL queries ----------

const PRODUCTS_QUERY = `
  query GetProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 1) {
            edges {
              node {
                url
                altText
                width
                height
              }
            }
          }
        }
      }
    }
  }
`;

const PRODUCT_BY_HANDLE_QUERY = `
  query GetProductByHandle($handle: String!) {
    productByHandle(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 5) {
        edges {
          node {
            url
            altText
            width
            height
          }
        }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            price {
              amount
              currencyCode
            }
          }
        }
      }
    }
  }
`;

// ---------- Types ----------

export interface ShopifyImage {
  url: string;
  altText: string | null;
  width: number;
  height: number;
}

export interface ShopifyPrice {
  amount: string;
  currencyCode: string;
}

export interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  descriptionHtml?: string;
  priceRange: {
    minVariantPrice: ShopifyPrice;
  };
  images: {
    edges: { node: ShopifyImage }[];
  };
  variants?: {
    edges: {
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        price: ShopifyPrice;
      };
    }[];
  };
}

interface ProductsResponse {
  products: {
    edges: { node: ShopifyProduct }[];
  };
}

interface ProductByHandleResponse {
  productByHandle: ShopifyProduct | null;
}

// ---------- Public helpers ----------

export async function getProducts(
  store: StoreName,
  first: number = 20
): Promise<ShopifyProduct[]> {
  const data = await shopifyFetch<ProductsResponse>(store, PRODUCTS_QUERY, {
    first,
  });
  return data.products.edges.map((edge) => edge.node);
}

export async function getProductByHandle(
  store: StoreName,
  handle: string
): Promise<ShopifyProduct | null> {
  const data = await shopifyFetch<ProductByHandleResponse>(
    store,
    PRODUCT_BY_HANDLE_QUERY,
    { handle }
  );
  return data.productByHandle;
}
