// context/CartContext.tsx
"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { createCart, addToCart, fetchCart, removeFromCart, updateCartLine } from "@/lib/shopify";
import type { CartLine } from "@/types/shopify";

interface CartContextType {
    cartId: string | null;
    items: CartLine[];
    addItem: (variantId: string, quantity?: number) => Promise<void>;
    removeItem: (lineId: string) => Promise<void>;
    updateQuantity: (lineId: string, quantity: number) => Promise<void>;
    totalQuantity: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartId, setCartId] = useState<string | null>(null);
    const [items, setItems] = useState<CartLine[]>([]);

    useEffect(() => {
        const initCart = async () => {
            let currentCartId = localStorage.getItem("cartId");

            if (!currentCartId) {
                // Pas de cartId → créer un nouveau panier
                const newCart = await createCart();
                currentCartId = newCart.id;
                localStorage.setItem("cartId", currentCartId);
                setCartId(currentCartId);
                setItems([]);
                console.log("Nouveau panier créé au chargement du site :", currentCartId);
                return;
            }

            // Vérifier si le panier existe encore côté Shopify
            const existingItems = await fetchCart(currentCartId);
            if (!existingItems || existingItems.length === 0) {
                console.warn("Cart expired, creating a new one on site load");
                const newCart = await createCart();
                currentCartId = newCart.id;
                localStorage.setItem("cartId", currentCartId);
                setCartId(currentCartId);
                setItems([]);
                console.log("🔄 Panier expiré recréé lors de l'ajout :", currentCartId);
                return;
            }

            // Panier existant valide → mettre à jour le state
            setCartId(currentCartId);
            setItems(existingItems);
        };

        initCart();
    }, []);

    const addItem = async (variantId: string, quantity = 1) => {
        if (!cartId) return;
        const updatedCart = await addToCart(cartId, variantId, quantity);
        setItems(updatedCart.lines.edges.map((e) => e.node) || []);
    };

    const removeItem = async (lineId: string) => {
        if (!cartId) return;
        const updatedCart = await removeFromCart(cartId, lineId);
        setItems(updatedCart.lines.edges.map((e) => e.node));
    };

    const updateQuantity = async (lineId: string, quantity: number) => {
        if (!cartId) return;
        const updatedCart = await updateCartLine(cartId, lineId, quantity);
        setItems(updatedCart.lines.edges.map((e) => e.node));
    };

    const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    return <CartContext.Provider value={{ cartId, items, addItem, removeItem, updateQuantity, totalQuantity }}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) throw new Error("useCart must be used within a CartProvider");
    return context;
}
