import type { NextApiRequest, NextApiResponse } from "next";
import { getProducts } from "@/lib/shopify";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const products = await getProducts();
        res.status(200).json(products);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Shopify fetch failed" });
    }
}
