import { CollectionWithProducts, CuveesResponse, Product, ProductsResponse } from "@/types/shopify";

const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`;
const token = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN;

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
          collections(first: 5) {
            edges {
              node {
                id
                handle
                title
              }
            }
          }
        }
      }
    }
  }`;

  const data = await fetchFromShopify<ProductsResponse>(query);
  return data.products.edges;
}



export async function getCuvees(): Promise<Record<string, CollectionWithProducts>> {
  const query = `
  {
    grandeReserve: collection(handle: "la-grande-reserve") {
      title
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            featuredImage { url }
            collections(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
          }
        }
      }
    }
    sylviane: collection(handle: "la-cuvee-sylviane") {
      title
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            featuredImage { url }
            collections(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
          }
        }
      }
    }
    loree: collection(handle: "loree-des-collines") {
      title
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            featuredImage { url }
            collections(first: 5) {
              edges {
                node {
                  id
                  title
                  handle
                }
              }
            }
          }
        }
      }
    }
  }`;

  const data = await fetchFromShopify<CuveesResponse>(query);

  // Fonction pour trier les produits par année décroissante
  const sortProductsByYear = (productsEdges: { node: Product }[]) => {
    return productsEdges
      .map(({ node }) => {
        const anneeCollection = node.collections.edges.find(edge =>
          /\d{4}/.test(edge.node.title)
        );
        return {
          ...node,
          annee: anneeCollection ? parseInt(anneeCollection.node.title) : 0,
        };
      })
      .sort((a, b) => b.annee! - a.annee!);
  };

  // Préparer les collections avec produits triés
  return {
    grandeReserve: {
      title: data.grandeReserve.title,
      products: sortProductsByYear(data.grandeReserve.products.edges),
    },
    sylviane: {
      title: data.sylviane.title,
      products: sortProductsByYear(data.sylviane.products.edges),
    },
    loree: {
      title: data.loree.title,
      products: sortProductsByYear(data.loree.products.edges),
    },
  };
}






export async function createCart(): Promise<string> {
  const query = `
    mutation {
      cartCreate {
        cart {
          id
        }
      }
    }
  `;

  const data = await fetchFromShopify<{ cartCreate: { cart: { id: string } } }>(query);
  return data.cartCreate.cart.id;
}

export async function addToCart(cartId: string, variantId: string, quantity: number = 1) {
  const query = `
    mutation addToCart($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          totalQuantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          lines(first: 5) {
            edges {
              node {
                id
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                  }
                }
                quantity
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [
      {
        merchandiseId: variantId,
        quantity,
      },
    ],
  };

  const data = await fetchFromShopify<{ cartLinesAdd: { cart: any } }>(query, variables);
  return data.cartLinesAdd.cart;
}