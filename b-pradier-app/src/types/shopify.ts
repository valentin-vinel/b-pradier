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
  variants?: {
    edges: {
      node: {
        id: string;
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

export interface CartLine {
  id: string;
  quantity: number;
  merchandise: {
    id: string;
    title: string;
    product: {
      title: string;
    };
  };
}

export interface Cart {
  id: string;
  lines: {
    edges: { node: CartLine }[];
  };
}

export interface CartContextType {
  cartId: string | null;
  totalQuantity: number;
  addItem: (variantId: string, quantity?: number) => Promise<void>;
}