"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface CartItem {
    variantId: string;
    quantity?: number;
}

interface AddAllToCartButtonProps {
    items: CartItem[];
    className?: string;
}

export default function AddAllToCartButton({ items, className = "" }: AddAllToCartButtonProps) {
    const { addItem } = useCart();
    const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        if (!items || items.length === 0) return;

        setLoading(true);
        try {
            for (const item of items) {
                if (item.variantId && item.quantity) {
                    await addItem(item.variantId, item.quantity);
                }
            }
        } catch (error) {
            console.error("Erreur ajout panier :", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button onClick={handleClick} disabled={loading} className={`bg-[#D4BFA6] border-2 text-base hover:cursor-pointer hover:text-[#6b1e1e] relative w-[300px] py-2 ${className}`}>
            <span className="w-[4px] h-[4px] bg-black absolute top-1 left-1 rounded" />
            <span className="w-[4px] h-[4px] bg-black absolute top-1 right-1 rounded" />
            <span className="w-[4px] h-[4px] bg-black absolute bottom-1 left-1 rounded" />
            <span className="w-[4px] h-[4px] bg-black absolute bottom-1 right-1 rounded" />
            {loading ? "Ajout..." : "Ajouter l'offre à ma commande"}
        </button>
    );
}
