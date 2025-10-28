"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface AddToCartButtonProps {
  variantId: string;
  quantity?: number;
  className?: string;
}

export default function AddToCartButton({
  variantId,
  quantity = 1,
  className = "",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [loading, setLoading] = useState(false);

    const handleClick = async () => {
        console.log("variantId:", variantId);
        if (!variantId) {
            console.error("Aucune variante trouvée pour ce produit !");
            return;
        }

        setLoading(true);
        try {
            await addItem(variantId, quantity);
        } catch (error) {
            console.error("Erreur ajout panier :", error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`bg-[#D4BFA6] border-2  text-base hover:cursor-pointer hover:text-[#6b1e1e] relative w-[210px] ${className}`}
    >
      <span className="w-[4px] h-[4px] bg-black absolute top-1 left-1 rounded" />
      <span className="w-[4px] h-[4px] bg-black absolute top-1 right-1 rounded" />
      <span className="w-[4px] h-[4px] bg-black absolute bottom-1 left-1 rounded" />
      <span className="w-[4px] h-[4px] bg-black absolute bottom-1 right-1 rounded" />
      {loading ? "Ajout..." : "Ajouter au panier"}
    </button>
  );
}