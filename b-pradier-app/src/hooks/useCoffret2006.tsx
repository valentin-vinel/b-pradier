import { useEffect, useState } from "react";
import { CoffretProduct } from "@/types/shopify";
import { getCoffret2006 } from "@/lib/shopify";

export function useCoffret2006() {
    const [product, setProduct] = useState<CoffretProduct | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        async function fetchCoffret() {
            setLoading(true);
            setError(null);
            try {
                const data = await getCoffret2006();
                setProduct(data);
            } catch (err) {
                setError(err as Error);
            } finally {
                setLoading(false);
            }
        }

        fetchCoffret();
    }, []);

    return { product, loading, error };
}
