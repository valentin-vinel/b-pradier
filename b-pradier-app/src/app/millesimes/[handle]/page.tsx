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

      <main className="text-center my-auto flex gap-4">
        <figure className="bg-white w-[300px] h-[680px] flex flex-col border-2">
          {product.featuredImage?.url && (
            <img
            src={product.featuredImage.url}
            alt={product.title}
            className="h-[650px] m-auto"
            />
          )}
          <figcaption className="text-sm">Photo non contractuelle.</figcaption>
        </figure>
        
        <div className="w-[900px] flex justify-center items-center border-2">
          <div className="w-[760px] flex flex-col gap-4 m-auto">
            <h2 className="text-3xl font-bold">- {product.title} -</h2>

            <article>
              <h3 className="font-bold text-secondary">- ORIGINE -</h3>
              <p className="text-start">
                Comme son nom l'indique, cette <em>Grande Réserve</em> est un vin de garde. Issue d'une sélection de nos vieilles vignes de plus de 40 ans, établies en « <em>gobelets</em> » afin d'un meilleur ensoleillement de la souche, et à petit rendement.
              </p>
              <Link href={'/cuvees'} className="text-lg italic">En savoir plus</Link>
            </article>

            <article>
              <h3 className="font-bold text-secondary">- TYPICITÉ -</h3>
              <p className="text-start">
                Une longue cuvaison traditionnelle de trois semaines de Syrah et Grenache contribue à lui donner sa couleur soutenue et une palette d'arômes complexes. <br /> Si nous avons choisi de ne pas l'élever en fut, c'est pour lui conserver son authenticité et sa fraîcheur.
              </p>
            </article>

            <article>
              <h3 className="font-bold text-secondary">- PRESSE & ACCORDS VINS-METS -</h3>
              {product.descriptionHtml ? (
                <div
                  className="prose prose-lg text-gray-800 mb-4 text-start"
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

            {/* <Link href={`/millesimes/${product.id}`}></Link> */}
              <div className="text-center text-base mb-2 italic">
                <p>Vin rouge. 13,5 % vol. 75 cl. Product of France. Contient des sulfites.</p>
              </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}