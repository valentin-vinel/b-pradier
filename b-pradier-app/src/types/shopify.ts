export interface Product {
  id: string;
  title: string;
  handle: string;
  featuredImage?: {
    url: string;
  };
  collections: {
    edges: {
      node: {
        id: string;
        handle: string;
        title: string;
      };
    }[];
  };
  annee?: number;
}

export interface ProductsResponse {
  products: {
    edges: {
      node: Product;
    }[];
  };
}

export interface CollectionWithProducts {
  title: string;
  products: Product[];
}

export interface CuveesResponse {
  grandeReserve: { title: string; products: { edges: { node: Product }[] } };
  sylviane: { title: string; products: { edges: { node: Product }[] } };
  loree: { title: string; products: { edges: { node: Product }[] } };
}

export interface ShopifyCart {
  id: string;
  totalQuantity: number;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
}
