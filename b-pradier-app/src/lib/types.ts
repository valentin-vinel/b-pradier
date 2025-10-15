export interface Product {
  id: string;
  title: string;
  handle: string;
  featuredImage?: {
    url: string;
  };
}

export interface ProductsResponse {
  products: {
    edges: {
      node: Product;
    }[];
  };
}
