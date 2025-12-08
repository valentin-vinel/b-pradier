"use client"

import { useCoffret2005 } from "@/hooks/useCoffret2005";
import { useOfferProducts } from "@/hooks/useOfferProducts";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";


export default function OffreComponent() {
      const { products, loading } = useOfferProducts();
      const { product, loading: loadingCoffret, error } = useCoffret2005();
    
      if (loading || loadingCoffret) return <p>Chargement...</p>;
      if (error) return <p>Erreur : {error.message}</p>;
      if (!product) return <p>Produit non trouvé</p>;
    
      // --- Logique avant le return ---
      const bottlesPerProduct = 2;
    
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

    return (
        <main className="mt-6 lg:mt-10">
        <h2 className="text-center text-red font-bold text-2xl my-6">
          Horizontale Château d'Hugues Millésime 2005
        </h2>

        <div className="text-center mb-10">
            <Link href={"horizontale-2005"}>Découvrez les détails de la dégustation de cette Horizontale</Link>
        </div>

        <p className="text-center mb-4">L'offre de l'Horizontale 2005 présente un carton de 6 bouteilles :</p>

        <div className="flex gap-6 flex-col-reverse lg:flex-row-reverse ">
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

          {/*  --- Ligne TOTAL --- */}
          <p className="text-center my-4">Vin rouge. 13,5% vol. 75 cl. Produit de France. Contient des sulfites.</p>
          <p className="text-center my-4">Prix : <span className="line-through text-red">{product.variants?.edges[0].node.compareAtPriceV2?.amount} €</span> <span className="text-2xl font-bold">{product.variants?.edges[0].node.priceV2.amount} €</span></p>
          <p className="text-center">Profitez de 10% de remise sur cette offre</p>

          {/* --- Bouton unique pour ajouter les 6 bouteilles --- */}
          {product.variants?.edges?.length! > 0 && (
            <div className="mt-6 flex justify-center">
              <AddToCartButton variantId={product.variants?.edges[0]?.node.id}  />
            </div>
          )}
      </main>
    );
}
