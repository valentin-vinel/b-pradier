"use client"

import { useOfferProducts } from "@/hooks/useOfferProducts";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import Image from "next/image";
import AddAllToCartButton from "@/shared/AddAllToCartButton";
import Link from "next/link";

export default function Offre() {
  const { products, loading } = useOfferProducts();

  if (loading) return <p>Chargement...</p>;

  // --- Logique avant le return ---
  const bottlesPerProduct = 2; // chaque produit contribue à 2 bouteilles

  const productsWithTotal = products.map(product => {
    const variant = product.variants.edges[0].node;
    const price = Number(variant.priceV2.amount);
    const compareAt = variant.compareAtPriceV2 ? Number(variant.compareAtPriceV2.amount) : null;

    const quantity = bottlesPerProduct;
    const total = price * quantity;
    const totalCompare = compareAt ? compareAt * quantity : null;

    return {
      ...product,
      quantity,
      total,
      totalCompare,
      variantId: variant.id,
    };
  });

    // // Calcul TOTAL du pack
    // const totalPrice = productsWithTotal.reduce((sum, p) => sum + p.total, 0);
    // const totalCompare = productsWithTotal.reduce(
    //     (sum, p) => sum + (p.totalCompare ?? 0),
    //     0
    // );

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
      <Header />

      <main>
        <h2 className="text-center text-red font-bold text-2xl my-6">
          Horizontale Château d'Hugues Millésime 2005
        </h2>

        <div className="text-center mb-10">
            <Link href={"horizontale-2005"}>Découvrez les détails de la dégustation de cette Horizontale</Link>
        </div>

        <div className="flex gap-6">
          {productsWithTotal.map(product => (
            <div
              key={product.id}
              className="flex justify-between items-center p-4 border rounded shadow-sm m-auto"
            >
              <div className="w-[90px] h-[90px] p-1 rounded bg-white">
                <Image
                  src={product.featuredImage.url}
                  alt={product.title}
                  width={30}
                  height={30}
                  className="object-contain object-center max-h-full m-auto"
                />
              </div>

              <div className="flex-1 ml-4">
                <h3 className="text-secondary">
                    <Link href={`millesimes/${product.handle}`}>{product.title}</Link>
                </h3>
                <p>Quantité : {product.quantity}</p>
                <div className="mt-1">
                  {product.totalCompare && (
                    <span className="line-through text-red-500 mr-2">
                      {product.totalCompare.toFixed(2)} €
                    </span>
                  )}
                  <span className="font-bold text-lg">{product.total.toFixed(2)} €</span>
                </div>
              </div>
            </div>
          ))}

        </div>

          {/* --- Ligne TOTAL ---
          <div className="mt-4 p-4 border-t flex items-center text-lg">
            <span></span>
            {totalCompare > 0 && (
              <span className="line-through text-red-500">{totalCompare.toFixed(2)} €</span>
            )}
            <span className="font-bold text-xl">{totalPrice.toFixed(2)} €</span>
          </div> */}

          {/* --- Bouton unique pour ajouter les 6 bouteilles --- */}
          {productsWithTotal.length > 0 && (
            <div className="mt-6 flex justify-center">
              <AddAllToCartButton
                items={productsWithTotal.map(p => ({
                  variantId: p.variantId,
                  quantity: p.quantity, // 2 bouteilles par produit
                }))}
              />
            </div>
          )}
      </main>

      <Footer />
    </div>
  );
}
