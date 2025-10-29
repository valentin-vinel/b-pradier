'use client';

import { useCart } from "@/context/CartContext";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Image from "next/image";

export default function PanierPage() {
  const { items, removeItem, updateQuantity, totalQuantity } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
        <Header />
        <main className="text-center my-10">
          <h2 className="text-2xl font-bold mb-4">Votre panier est vide</h2>
        </main>
        <Footer />
      </div>
    );
  }

  // Calcul du total du panier
  const totalPrice = items.reduce((acc, item) => {
    const price = parseFloat(item.merchandise.priceV2.amount); // prix unitaire
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />
      <main className="my-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-red">Mon panier</h2>

        <ul className="flex flex-col gap-4">
          {items.map((item) => {
            const unitPrice = parseFloat(item.merchandise.priceV2.amount);
            const linePrice = unitPrice * item.quantity;

            return (
              <li key={item.id} className="flex justify-between items-center border p-4 rounded">
                {/* Image et nom du produit */}
                <div className="flex items-center gap-4">
                  {item.merchandise.product.featuredImage?.url && (
                    <Image
                      src={item.merchandise.product.featuredImage.url}
                      alt={item.merchandise.product.title}
                      width={80}
                      height={80}
                      className="rounded"
                    />
                  )}
                  <div>
                    <p className="font-bold">{item.merchandise.product.title}</p>
                    <p className="text-sm text-gray-600">Prix unitaire : {unitPrice.toFixed(2)} €</p>
                  </div>
                </div>

                {/* Contrôle de quantité */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                    className="px-2 py-1 border rounded hover:bg-white transition cursor-pointer"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded hover:bg-white transition cursor-pointer"
                  >
                    +
                  </button>
                </div>

                {/* Prix ligne */}
                <div className="font-bold">{linePrice.toFixed(2)} €</div>

                {/* Supprimer */}
                <button
                  onClick={() => removeItem(item.id)}
                  className="bg-red-600 text-white px-3 py-1 rounded text-lg hover:bg-red-800 transition cursor-pointer"
                >
                  Supprimer
                </button>
              </li>
            );
          })}
        </ul>

        <div className="mt-6 text-right font-bold text-2xl">
          Total ({totalQuantity} articles) : {totalPrice.toFixed(2)} €
        </div>
      </main>
      <Footer />
    </div>
  );
}
