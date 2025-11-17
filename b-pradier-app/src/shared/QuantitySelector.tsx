"use client";

import { useState } from "react";
import AddToCartButton from "./AddToCartButton";

interface QuantitySelectorProps {
  variantId: string;
  max: number;
}

export default function QuantitySelector({ variantId, max }: QuantitySelectorProps) {
  const [quantity, setQuantity] = useState(1);

  const increase = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };

  const decrease = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!value) return setQuantity(1);
    setQuantity(Math.max(1, Math.min(max, value)));
  };

  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-4 justify-center">
      <div className="flex items-center gap-2">
        <button
          onClick={decrease}
          disabled={quantity <= 1}
          className="px-3 bg-gray-300 rounded cursor-pointer"
        >
          -
        </button>

        <input
          type="number"
          value={quantity}
          onChange={handleInput}
          min={1}
          max={max}
          className="text-base w-16 text-center rounded px-2 border"
        />

        <button
          onClick={increase}
          disabled={quantity >= max}
          className="px-3 bg-gray-300 rounded cursor-pointer"
        >
          +
        </button>
      </div>

      {/* 👉 ICI tu envoies la quantité au bouton */}
      <AddToCartButton variantId={variantId} quantity={quantity} />
    </div>
  );
}
