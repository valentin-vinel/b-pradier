import { Cart, CollectionWithProducts, CuveesResponse, Product, ProductsResponse, CartAttributesUpdateResponse, CoffretProduct } from "@/types/shopify";

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
          variants(first: 1) {
            edges {
              node {
                id
                title
              }
            }
          }
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
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                }
              }
            }
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
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                }
              }
            }
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
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  quantityAvailable
                }
              }
            }
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

// Création d'un panier
export async function createCart(): Promise<{ id: string }> {
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
  return data.cartCreate.cart;
}

// Ajout un produit au panier
export async function addToCart(cartId: string, variantId: string, quantity = 1): Promise<Cart> {
  const existingCartRaw = await fetchCart(cartId);
  const existingCart = existingCartRaw || [];

  const query = `
    mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
      cartLinesAdd(cartId: $cartId, lines: $lines) {
        cart {
          id
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 { 
                      amount 
                      currencyCode 
                    }
                    compareAtPriceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      title
                      featuredImage { url }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    cartId,
    lines: [{ merchandiseId: variantId, quantity }],
  };

  const data = await fetchFromShopify<{ cartLinesAdd: { cart: Cart } }>(query, variables);
  const addedCart = data.cartLinesAdd.cart;

  const mergedLinesMap: Record<string, any> = {};

  existingCart.forEach((line: any) => {
    mergedLinesMap[line.merchandise.id] = { ...line };
  });

  addedCart.lines.edges.forEach((edge: any) => {
    const merchId = edge.node.merchandise.id;
    if (mergedLinesMap[merchId]) {
      // Si déjà présent, incrémente la quantité
      mergedLinesMap[merchId].quantity = edge.node.quantity;
    } else {
      mergedLinesMap[merchId] = { ...edge.node };
    }
  });

  return {
    id: addedCart.id,
    lines: {
      edges: Object.values(mergedLinesMap).map(node => ({ node })),
    },
  };
}

// Modification d'un produit du panier (quantité)
export async function updateCartLine(cartId: string, lineId: string, quantity: number) {
  const query = `
    mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
        cart {
          id
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      title
                      featuredImage { url }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const variables = {
    cartId,
    lines: [{ id: lineId, quantity }],
  };
  const data = await fetchFromShopify<{ cartLinesUpdate: { cart: Cart } }>(query, variables);
  return data.cartLinesUpdate.cart;
}

// Suppression d'un produit du panier
export async function removeFromCart(cartId: string, lineId: string): Promise<Cart> {
  const query = `
    mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
        cart {
          id
          lines(first: 50) {
            edges {
              node {
                id
                quantity
                merchandise {
                  ... on ProductVariant {
                    id
                    title
                    priceV2 {
                      amount
                      currencyCode
                    }
                    product {
                      title
                      featuredImage { url }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    cartId,
    lineIds: [lineId],
  };

  const data = await fetchFromShopify<{ cartLinesRemove: { cart: Cart } }>(query, variables);
  return data.cartLinesRemove.cart;
}

export async function fetchCart(cartId: string) {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        id
        lines(first: 50) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  priceV2 {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  const variables = { cartId };
  const data = await fetchFromShopify<{ cart: { id: string; lines: { edges: any[] } } | null }>(query, variables);

  if (!data.cart) {
    console.warn("Cart not found or expired", cartId);
    return [];
  }

  return data.cart.lines.edges.map(e => e.node);
}

export async function setAgeVerified(cartId: string) {
  const mutation = `
    mutation cartAttributesUpdate($cartId: ID!, $attributes: [AttributeInput!]!) {
      cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
        cart {
          id
          attributes {
            key
            value
          }
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    cartId,
    attributes: [{ key: "age_verified", value: "true" }],
  };

  const data = await fetchFromShopify<CartAttributesUpdateResponse>(mutation, variables);
  if (data.cartAttributesUpdate.userErrors.length > 0) {
    console.error("Erreur mise à jour age_verified :", data.cartAttributesUpdate.userErrors);
  }
  return data.cartAttributesUpdate.cart.attributes;
}

export async function getProductByHandle(handle: string) {
  const query = `
    query getProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        descriptionHtml
        featuredImage {
          url
          altText
        }
        vol: metafield(namespace: "custom", key: "vol") {
          value
          type
        }
        appellation: metafield(namespace: "custom", key: "appellation") {
          value
          type
        }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price {
                amount
                currencyCode
              }
              availableForSale
              quantityAvailable
              selectedOptions {
                name
                value
              }
            }
          }
        }
        collections(first: 5) {
          edges {
            node {
              id
              title
              handle
              description
              image {
                url
                altText
              }
              products(first: 5) {
                edges {
                  node {
                    id
                    title
                    handle
                    featuredImage {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchFromShopify<{ product: any }>(query, { handle });
  return data.product;
}

export async function getCheckoutUrl(cartId: string): Promise<string> {
  const query = `
    query getCart($cartId: ID!) {
      cart(id: $cartId) {
        checkoutUrl
      }
    }
  `;
  const variables = { cartId };
  const data = await fetchFromShopify<{ cart: { checkoutUrl: string } }>(query, variables);
  return data.cart.checkoutUrl;
}

export async function getProductsFrom2005() {
  const query = `
    query {
      collection(handle: "2005") {
        products(first: 3) {
          edges {
            node {
              id
              title
              handle
              featuredImage {
                url
              }
              variants(first: 1) {
                edges {
                  node {
                    id
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await fetchFromShopify<{
    collection: {
      products: {
        edges: {
          node: {
            id: string;
            title: string;
            handle: string;
            featuredImage: { url: string } | null;
            variants: { edges: { node: any }[] };
          };
        }[];
      };
    };
  }>(query);

  return data.collection.products.edges.map(e => e.node);
}

export async function getCoffret2005(): Promise<CoffretProduct | null> {
  const query = `
    query {
      productByHandle(handle: "horizontale-2005-coffret-6-bouteilles") {
        id
        title
        description
        descriptionHtml
        handle
        featuredImage { url }
        variants(first: 10) {
          edges {
            node {
              id
              title
              priceV2 { amount currencyCode }
              compareAtPriceV2 { amount currencyCode }
              availableForSale
            }
          }
        }
      }
    }
  `;

  const data = await fetchFromShopify<{ productByHandle: CoffretProduct }>(query);

  // retourne le produit ou null si pas trouvé
  return data.productByHandle || null;
}
