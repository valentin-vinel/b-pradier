'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bouchon from "../../public/bouchon.png";
import ardoise2 from "../../public/ardoise-8.png";
import AddToCartButton from "./AddToCartButton";

interface Cuvee {
  title: string;
  products: {
    id: string;
    title: string;
    handle: string;
    annee?: number;
    stock: number;
    variantId?: string | null;
  }[];
}

export default function MillesimesMobile({ cuvees }: { cuvees: Cuvee[] }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const collectionFonts: Record<string, string> = {
    "La Grande Réserve": "text-cookie",
    "La Cuvée Sylviane": "text-secondary",
    "L'orée des Collines": "text-warning",
  };

  const selectedCuvee = cuvees[selectedIndex];

  return (
    <>
      {/* --- Version mobile : Select --- */}
      <div className="flex flex-col items-center w-full max-w-[300px] m-auto lg:hidden text-center">
        <select
          value={selectedIndex}
          onChange={(e) => setSelectedIndex(Number(e.target.value))}
          className="mb-6 border border-[#a59582] rounded-md p-2 text-center bg-[#fcf7f1]"
        >
          {cuvees.map((cuvee, i) => (
            <option key={cuvee.title} value={i}>
              {cuvee.title}
            </option>
          ))}
        </select>

        <div className="flex flex-col gap-6 items-center">
          <figure className="flex flex-col justify-center items-center relative">
            <Image src={ardoise2} alt="Image cadre" className="max-w-[200px]" />
            <div className="z-[-1] w-[200px] h-[130px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
            <h3
              className={`text-2xl text-white absolute h-fit m-auto translate-y-4 w-[180px] font-bold uppercase ${collectionFonts[selectedCuvee.title]}`}
            >
              {selectedCuvee.title}
            </h3>
          </figure>

          {selectedCuvee.products.map((product) => (
            <article key={product.id} className="flex flex-col gap-3 mb-4 items-center">
              <figure className="flex flex-col justify-center items-center relative">
                <Image src={bouchon} alt="Image d'un bouchon de liège" className="max-w-[100px]" />
                <figcaption className={`lgd-bouchon text-3xl absolute h-fit m-auto translate-x-4 top-1 w-[140px] font-bold leading-3 ${product.stock === 0 ? "pointer-events-none text-gray-700" : "hover:cursor-pointer hover:text-[#6b1e1e]"}`}>
                  <Link href={`/millesimes/${product.handle}`}>
                    <span className="text-sm">VOIR</span>
                    <br />
                    {product.annee}
                  </Link>
                </figcaption>
              </figure>

              
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
            </article>
          ))}
        </div>
      </div>

      {/* --- Version desktop : affichage complet --- */}
      {/* <div className="hidden lg:flex gap-10 justify-center flex-wrap">
        {cuvees.map((collection) => (
          <div key={collection.title} className="flex flex-col gap-6 items-center">
            <figure className="flex flex-col justify-center items-center relative">
              <Image src={ardoise2} alt="Image d'un cadre suspendu" className="max-w-[240px]" />
              <div className="z-[-1] w-[240px] h-[160px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
              <h3
                className={`text-3xl text-white absolute h-fit m-auto translate-y-6 w-[180px] font-bold uppercase ${collectionFonts[collection.title]}`}
              >
                {collection.title}
              </h3>
            </figure>

            {collection.products.map((product) => (
              <article key={product.id} className="flex flex-col gap-4 mb-6 items-center">
                <figure className="flex flex-col justify-center items-center relative">
                  <Image src={bouchon} alt="Image d'un bouchon de liège" className="max-w-[130px]" />
                  <figcaption className="lgd-bouchon text-3xl absolute h-fit m-auto translate-x-4 top-1.5 w-[140px] font-bold leading-0 hover:cursor-pointer hover:text-[#6b1e1e]">
                    <Link href={`/millesimes/${product.handle}`}>
                      <span className="text-base">VOIR</span>
                      <br />
                      {product.annee}
                    </Link>
                  </figcaption>
                </figure>
                <button className="bg-[#D4BFA6] border-2 text-base hover:cursor-pointer hover:text-[#6b1e1e] relative w-[210px]">
                  Ajouter à ma commande
                </button>
              </article>
            ))}
          </div>
        ))}
      </div> */}
    </>
  );
}
