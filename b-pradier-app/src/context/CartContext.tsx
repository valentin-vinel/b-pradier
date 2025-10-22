// context/CartContext.tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createCart, addToCart, fetchCart } from "@/lib/shopify";
import type { CartLine } from "@/types/shopify";

interface CartContextType {
  cartId: string | null;
  items: CartLine[];
  addItem: (variantId: string, quantity?: number) => Promise<void>;
  totalQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [items, setItems] = useState<CartLine[]>([]);

  useEffect(() => {
    const init = async () => {
        let id = localStorage.getItem("cartId");
        if (!id) {
        const cart = await createCart();
        id = cart.id;
        localStorage.setItem("cartId", id);
        }
        setCartId(id);

        // ⚡️ Récupérer les items existants du panier
        if (id) {
        const existingItems = await fetchCart(id);
        setItems(existingItems);
        }
    };
    init();
    }, []);

  const addItem = async (variantId: string, quantity = 1) => {
    if (!cartId) return;
    const updatedCart = await addToCart(cartId, variantId, quantity);
    setItems(updatedCart.lines.edges.map(e => e.node));
  };

  const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartId, items, addItem, totalQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
