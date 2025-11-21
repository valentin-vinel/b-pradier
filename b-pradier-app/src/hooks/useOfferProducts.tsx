import { useEffect, useState } from "react";
import { getProductsFrom2005 } from "@/lib/shopify";

export function useOfferProducts() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const res = await getProductsFrom2005();
      setProducts(res);
      setLoading(false);
    }
    load();
  }, []);

  return { products, loading };
}
