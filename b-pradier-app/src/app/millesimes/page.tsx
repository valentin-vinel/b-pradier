import { getCuvees } from "@/lib/shopify";
import Header from "@/shared/Header";
import bouchon from "../../../public/bouchon.png"
import Link from "next/link";
import ardoise2 from "../../../public/ardoise-8.png"
import Image from "next/image";
import bouteilles from "../../../public/millesimes/bouteilles-Copie.png"
import Footer from "@/shared/Footer";

export default async function Products() {

  // 1️⃣ Récupération des 3 cuvées depuis Shopify
  const cuveesData = await getCuvees();

  // 2️⃣ Transformation de l’objet en tableau pour itérer plus facilement
  const cuvees = Object.values(cuveesData);

//   console.log(cuvees)

  const collectionFonts: Record<string, string> = {
  "La Grande Réserve": "text-cookie",
  "La Cuvée Sylviane": "",           // font de base, on laisse vide
  "L'orée des Collines": "text-warning",
};

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed z-[-1] w-full h-screen bg-total-cave opacity-60 left-0 top-0"></div>
            <Header />

            <main className="mb-6">
                <h2 className="text-center font-bold mb-2 text-3xl title-millesime">Nos trois cuvées</h2>
                <figure className="m-auto text-center mb-8 ">
                    <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[240px] shadow-2xl border-bouteille relative"></Image>
                    <figcaption className="text-base mt-2">Photo non contractuelle.</figcaption>
                </figure>

                <div className="flex gap-6 m-auto text-center w-fit">
                  {cuvees.map(collection => (
                    <div key={collection.title} className="flex flex-col gap-6">
                      <figure className="flex flex-col justify-center items-center relative">
                          <Image src={ardoise2} alt="Image d'un cadre suspendu" className="max-w-[240px]"></Image>
                          <div className="z-[-1] w-[240px] h-[160px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
                          <h3 className={`text-3xl text-white absolute h-fit m-auto translate-y-6 w-[180px] font-bold  uppercase ${collectionFonts[collection.title]}`}>{collection.title}</h3>
                      </figure>
                      
                        {collection.products.map(product => (
                          <article key={product.id} className="flex flex-col gap-4 mb-6 items-center">
                            <figure className="flex flex-col justify-center items-center relative">
                                <Image src={bouchon} alt="Image d'un bouchon de liège" className="max-w-[130px]"></Image>
                                <figcaption className="lgd-bouchon text-3xl absolute h-fit m-auto translate-x-4 top-1.5 w-[140px] font-bold leading-0 hover:cursor-pointer hover:text-[#6b1e1e]">
                                    <Link href={"/millesimes/X"}><span className="text-base">VOIR</span> <br />{product.annee}</Link>
                                </figcaption>
                            </figure>
                            <button className="bg-[#D4BFA6] border-2  text-base hover: hover:cursor-pointer hover:text-[#6b1e1e] relative w-[210px]">
                                <span className="w-[3px] h-[3px] bg-black absolute top-1 left-1 rounded-xl" />
                                <span className="w-[3px] h-[3px] bg-black absolute top-1 right-1 rounded-xl" />
                                <span className="w-[3px] h-[3px] bg-black absolute bottom-1 left-1 rounded-xl" />
                                <span className="w-[3px] h-[3px] bg-black absolute bottom-1 right-1 rounded-xl" />
                                Ajouter à ma commande
                            </button>
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