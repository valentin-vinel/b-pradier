import { ProductsResponse } from "./types";

const endpoint = `https://${process.env.SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`;
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

async function fetchFromShopify<T>(query: string, variables: Record<string, any> = {}): Promise<T> {
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token!,
    },
    body: JSON.stringify({ query, variables }),
  });

  const data = await res.json();
  if (data.errors) {
    console.error(data.errors);
    throw new Error("Shopify API error");
  }
  return data.data as T;
}

export async function getProducts(): Promise<ProductsResponse["products"]["edges"]> {
  const query = `
  {
    products(first: 20) {
      edges {
        node {
          id
          title
          handle
          featuredImage { url }
        }
      }
    }
  }`;

  const data = await fetchFromShopify<ProductsResponse>(query);
  return data.products.edges;
}
