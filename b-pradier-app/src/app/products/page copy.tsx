'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bouchon from "../../public/bouchon.png";
import ardoise2 from "../../public/ardoise-8.png";

interface Cuvee {
  title: string;
  products: {
    id: string;
    title: string;
    handle: string;
    annee?: number;
  }[];
}

export default function CuveesCarousel({ cuvees }: { cuvees: Cuvee[] }) {
  const [index, setIndex] = useState(0);

  const collectionFonts: Record<string, string> = {
    "La Grande Réserve": "text-cookie",
    "La Cuvée Sylviane": "",
    "L'orée des Collines": "text-warning",
  };

  const next = () => setIndex((prev) => (prev + 1) % cuvees.length);
  const prev = () => setIndex((prev) => (prev - 1 + cuvees.length) % cuvees.length);

  return (
    <>
      {/* --- Version mobile : slider --- */}
      <div className="flex items-center justify-between w-full max-w-[300px] m-auto lg:hidden relative">
        <button
          onClick={prev}
          className="px-1 bg-[#D4BFA6] border-2 hover:text-[#6b1e1e] transition-all rounded absolute top-25 z-10"
        >
          ←
        </button>

        <div className="overflow-hidden  relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {cuvees.map((collection) => (
              <div key={collection.title} className="flex flex-col gap-6 flex-shrink-0 w-[200px] mx-[45px]">
                <figure className="flex flex-col justify-center items-center relative">
                  <Image src={ardoise2} alt="Image cadre" className="max-w-[200px]" />
                  <div className="z-[-1] w-[200px] h-[130px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
                  <h3
                    className={`text-2xl text-white absolute h-fit m-auto translate-y-4 w-[180px] font-bold uppercase ${collectionFonts[collection.title]}`}
                  >
                    {collection.title}
                  </h3>
                </figure>

                {collection.products.map((product) => (
                  <article key={product.id} className="flex flex-col gap-3 mb-4 items-center">
                    <figure className="flex flex-col justify-center items-center relative">
                      <Image src={bouchon} alt="Image d'un bouchon de liège" className="max-w-[100px]" />
                      <figcaption className="lgd-bouchon text-2xl absolute h-fit m-auto translate-x-2 top-1.5 w-[120px] font-bold leading-0 hover:cursor-pointer hover:text-[#6b1e1e]">
                        <Link href={`/millesimes/${product.handle}`}>
                          <span className="text-sm">VOIR</span>
                          <br />
                          {product.annee}
                        </Link>
                      </figcaption>
                    </figure>
                    <button className="bg-[#D4BFA6] border-2 text-sm hover:cursor-pointer hover:text-[#6b1e1e] relative w-[180px]">
                      Ajouter à ma commande
                    </button>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={next}
          className="px-1 bg-[#D4BFA6] border-2 hover:text-[#6b1e1e] transition-all rounded absolute right-[10px] top-25 z-10"
        >
          →
        </button>
      </div>

      {/* --- Version desktop : affichage complet --- */}
      <div className="hidden lg:flex gap-10 justify-center flex-wrap">
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
      </div>
    </>
  );
}
