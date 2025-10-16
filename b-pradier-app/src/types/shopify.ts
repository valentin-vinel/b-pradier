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


export interface ShopifyProduct {
  id: string;
  title: string;
  variants: {
    edges: {
      node: {
        id: string;
        title: string;
        price: {
          amount: string;
          currencyCode: string;
        };
      };
    }[];
  };
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
