// 'use client'

import { getCuvees } from "@/lib/shopify";
import Header from "@/shared/Header";
import bouchon from "../../../public/bouchon.png"
import Link from "next/link";
import ardoise2 from "../../../public/ardoise-8.png"
import Image from "next/image";
import bouteilles from "../../../public/millesimes/bouteilles-2.png"
import Footer from "@/shared/Footer";
import AddToCartButton from "@/shared/AddToCartButton";
import MillesimesMobile from "@/shared/MillesimesMobile";

export const metadata = {
  title: "Millésimes",
  description:
    "Parcourez l'ensemble des millésimes de Bernard Pradier, de 1988 à 2010 : une collection rare, préservée avec exigence et disponible à la vente.",
};

export default async function Products() {

  // 1️⃣ Récupération des 3 cuvées depuis Shopify
  const cuveesData = await getCuvees();

  // 2️⃣ Transformation de l’objet en tableau pour itérer plus facilement
  const cuvees = Object.values(cuveesData);

  const collectionFonts: Record<string, string> = {
    "La Grande Réserve": "text-cookie",
    "La Cuvée Sylviane": "text-secondary",
    "L'orée des Collines": "text-warning",
  };

  const collectionsWithVariants = cuvees.map(collection => ({
    ...collection,
    products: collection.products.map(product => ({
      ...product,
      variantId: product.variants?.edges?.[0]?.node?.id ?? null,
      stock: product.variants?.edges?.[0]?.node?.quantityAvailable ?? 0,
    })),
  }));

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed z-[-1] w-full h-screen bg-total-cave opacity-60 left-0 top-0"></div>
            <Header />


            <main className="mb-6">
                <h2 className="text-center font-bold mb-2 text-3xl title-millesime">MILLESIMES DE NOS TROIS CUVEES</h2>
                <figure className="m-auto text-center mb-4 ">
                    <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                    <figcaption className="text-base mt-2">Photo non contractuelle.</figcaption>
                </figure>

                <div className="text-center my-8 bg-white max-w-[600px] h-[100px] m-auto rounded-full flex justify-center items-center border-3 font-bold lg:text-[26px]">
                  <Link href={'/offre'}>« <em>L'horizontale Millésimes 2005</em> »<br /> « Offre en 2025... <span className="text-nowrap">20ème anniversaire</span> »</Link>
                </div>

                <MillesimesMobile cuvees={collectionsWithVariants} />

                <div className="hidden lg:flex gap-10 m-auto text-center w-fit">
                  {collectionsWithVariants.map(collection => (
                    <div key={collection.title} className="flex flex-col gap-6">
                      <figure className="flex flex-col justify-center items-center relative">
                        <Image src={ardoise2} alt="Image d'un cadre suspendu" className="max-w-[240px]" />
                        <div className="z-[-1] w-[240px] h-[160px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
                        <h3 className={`text-3xl text-white absolute h-fit m-auto translate-y-6 w-[190px] font-bold uppercase ${collectionFonts[collection.title]}`}>
                          {collection.title}
                        </h3>
                      </figure>

                      {collection.products.map(product => (
                        <article key={product.id} className="flex flex-col gap-4 mb-6 items-center">
                          <figure className="flex flex-col justify-center items-center relative">
                            <Image src={bouchon} alt="Image d'un bouchon de liège" className={`max-w-[130px] transition-opacity ${product.stock === 0 ? "opacity-40 grayscale" : ""}`} />
                            <figcaption className={`lgd-bouchon text-3xl absolute h-fit m-auto translate-x-4 top-1 w-[140px] font-bold leading-3 ${product.stock === 0 ? "pointer-events-none text-gray-700" : "hover:cursor-pointer hover:text-[#6b1e1e]"}`}>
                              <Link href={`/millesimes/${product.handle}`}>
                                <span className="text-base">VOIR</span>
                                <br />
                                {product.annee}
                              </Link>
                            </figcaption>
                          </figure>

                          <div className="flex flex-col gap-0">
                          <p className={`text-base ${product.stock > 0 && product.stock < 6 ? "text-red-900" : ""}`}>Disponible : <span className="font-bold">{product.stock}</span></p>

                          {product.variantId && product.stock > 0 ? (
                              <AddToCartButton variantId={product.variantId} />
                            ) : (
                              <button
                              disabled
                              className=" border-2 text-base cursor-not-allowed relative w-[210px]"
                              >
                              Ajouter à ma commande
                            </button>
                          )}
                          </div>
                        </article>
                      ))}
                    </div>
                  ))}
                </div>
            </main>

            <Footer />
        </div>
  );
}