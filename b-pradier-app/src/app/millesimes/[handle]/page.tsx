import { getProductByHandle } from "@/lib/shopify";
import AddToCartButton from "@/shared/AddToCartButton";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import Image from "next/image";
import Link from "next/link";

export default async function MillesimePage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;

  const product = await getProductByHandle(handle);
  const quantity = product?.variants?.edges?.[0]?.node?.quantityAvailable ?? 0;
  
  const rawPrice = product?.variants?.edges?.[0]?.node?.price?.amount;
  const price = rawPrice ? parseFloat(rawPrice).toFixed(2) : null;

  const variantId = product?.variants?.edges?.[0]?.node?.id;

  console.log(product)

  if (!product) return <p>Produit introuvable.</p>;

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />

      <main className="text-center my-auto">

        <h2 className="text-3xl font-bold">{product.title}</h2>

        <div className="text-center text-base my-4 italic">
          <p>Vin rouge – 13,5 % vol – 75 cl</p>
          <p>Produit de France</p>
          <p>Mis en bouteille à la propriété par Bernard Pradier, 84100 Uchaux</p>
          <p>Contient des sulfites</p>
        </div>

        {product.featuredImage?.url && (
        <img
          src={product.featuredImage.url}
          alt={product.title}
          className="max-w-[300px] mb-4 rounded-lg shadow-lg"
        />
        )}

        {product.descriptionHtml ? (
          <div
            className="prose prose-lg text-gray-800 mb-4"
            dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
          />
        ) : (
          <p className="text-gray-600 italic mb-4">Description à venir...</p>
        )}

        <p className="text-lg mb-2">
          Stock disponible : <strong>{quantity}</strong>
        </p>

        <p className="text-lg mb-2">
          Prix : <strong>{price}</strong> €
        </p>

        {variantId ? (
          <AddToCartButton variantId={variantId} />
        ) : (
          <p className="text-red-500 text-sm">Indisponible</p>
        )}

        <Link href={`/millesimes/${product.id}`}></Link>

      </main>

      <Footer />
    </div>
  );
}