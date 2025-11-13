import { getProductByHandle } from "@/lib/shopify";
import AddToCartButton from "@/shared/AddToCartButton";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import Origine from "@/shared/OrigineProduct"
import Typicite from "@/shared/TypiciteProduct";
import Image from "next/image";
import Link from "next/link";

export default async function MillesimePage({ params }: { params: Promise<{ handle: string }> }) {
  const { handle } = await params;

  const product = await getProductByHandle(handle);
  console.log("produit: ", product)
  const quantity = product?.variants?.edges?.[0]?.node?.quantityAvailable ?? 0;
  
  const rawPrice = product?.variants?.edges?.[0]?.node?.price?.amount;
  const price = rawPrice ? parseFloat(rawPrice).toFixed(2) : null;

  const variantId = product?.variants?.edges?.[0]?.node?.id;

  console.log(product)

  if (!product) return <p>Produit introuvable.</p>;

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />

      <main className="flex flex-col text-center my-auto lg:flex-row gap-4 m-auto">
        <figure className="bg-white w-[280px] md:w-[300px] lg:h-[680px] flex flex-col border-2 m-auto">
          {product.featuredImage?.url && (
            <img
            src={product.featuredImage.url}
            alt={product.title}
            className="h-[200px] p-2 lg:h-[600px] m-auto"
            />
          )}
          <figcaption className="text-sm">
            Photo non contractuelle. <br /> Vin rouge. 13,5 % vol. 75 cl. <br />Product of France. Contient des sulfites.
          </figcaption>
        </figure>
        
        <div className="py-2 lg:py-0 max-w-[1000px] lg:h-[680px] flex justify-center items-center border-2 bg-white m-auto">
          <div className="max-w-[850px] flex flex-col gap-6 m-auto">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">- {product.title} -</h2>

            <article className="text-col-bleu">
              <h3 className="font-bold text-secondary">ORIGINE</h3>
              <Origine title={product.title} />
            </article>

            <article className="text-col-bleu">
              <h3 className="font-bold text-secondary">TYPICITÉ</h3>
              <Typicite title={product.title} />
            </article>

            <article className="text-col-bleu">
              <h3 className="font-bold text-secondary">CITATION GUIDE & ACCORDS VINS-METS</h3>
              {product.descriptionHtml ? (
                <div
                  className="prose prose-lg mb-4 text-bleu lg:w-[780px] m-auto text-center"
                  dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
                />
              ) : (
                <p className="text-gray-600 italic mb-4">Description à venir...</p>
              )}
            </article>

            
            <article>
              <p className="text-lg ">
                Stock disponible : <strong>{quantity}</strong>
              </p>

              <p className="text-lg">
                Prix : <strong>{price}</strong> €
              </p>
            </article>

            {variantId ? (
              <AddToCartButton variantId={variantId} className="m-auto" />
            ) : (
              <p className="text-red-500 text-sm">Indisponible</p>
            )}

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}