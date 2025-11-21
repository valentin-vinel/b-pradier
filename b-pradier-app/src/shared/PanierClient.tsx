'use client';

import { useCart } from "@/context/CartContext";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Image from "next/image";
import { getCheckoutUrl } from "@/lib/shopify";

export default function PanierClient() {
  const { items, removeItem, updateQuantity, totalQuantity, cartId } = useCart();

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

  const handleCheckout = async () => {
    if (!cartId) return;
    const checkoutUrl = await getCheckoutUrl(cartId);
    window.location.href = checkoutUrl; // redirection vers Shopify Checkout
  };

  
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
              <li key={item.id} className="flex flex-col gap-4 justify-between items-center border p-4 rounded md:flex-row">
                {/* Image et nom du produit */}
                <div className="flex items-center gap-4">
                  {item.merchandise.product.featuredImage?.url && (
                    <div className="relative w-[80px] h-[80px] p-1 rounded bg-white">
                      <Image
                        src={item.merchandise.product.featuredImage.url}
                        alt={item.merchandise.product.title}
                        width={80}
                        height={80}
                        className="object-contain object-center max-h-full"
                      />
                    </div>
                  )}
                  <div>
                    <p className="font-bold">{item.merchandise.product.title}</p>
                    <p className="text-sm text-gray-600">Prix unitaire : {unitPrice.toFixed(2)} €</p>
                  </div>
                </div>

                <div className="flex items-center gap-8">
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

                </div>
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
          <li className="text-base text-end"><em>Prix de la livraison non-inclus. Défini lors de la validation de la commande.</em></li>
        </ul>

        <div className="mt-6 text-right font-bold text-2xl">
          Total ({totalQuantity} articles) : {totalPrice.toFixed(2)} €
        </div>

        <div className="mt-4 text-right">
          <button
            onClick={handleCheckout}
            className="px-6 py-3 bg-[#D4BFA6] text-[#6b1e1e] font-bold rounded hover:bg-[#C5A572] hover:cursor-pointer transition"
          >
            Valider
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
