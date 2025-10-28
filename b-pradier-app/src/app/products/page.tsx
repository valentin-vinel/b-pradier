import { getCuvees } from "@/lib/shopify";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Image from "next/image";
import Link from "next/link";
import bouteilles from "../../../public/millesimes/bouteilles-2.png";
import CuveesCarousel from "@/shared/CuveesCaroussel";

export default async function ProductsPage() {
  const cuveesData = await getCuvees();
  const cuvees = Object.values(cuveesData);

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <div className="fixed z-[-1] w-full h-screen bg-total-cave opacity-60 left-0 top-0"></div>
      <Header />

      <main className="mb-6 text-center">
        <h2 className="text-center font-bold mb-2 text-3xl title-millesime">Nos trois cuvées</h2>
        <figure className="m-auto text-center mb-8">
          <Image
            src={bouteilles}
            alt="Photo des bouteilles de nos 3 cuvées, non contractuelle."
            className="m-auto max-w-[200px] shadow-2xl border-bouteille relative"
          />
          <figcaption className="text-base mt-2">Photo non contractuelle.</figcaption>
          <div className="my-4 underline">
            <Link href={'/horizontale-2005'}>
              Découvrez l'offre des 20 ans... L'horizontale 2005.
            </Link>
          </div>
        </figure>

        {/* 👉 Composant client avec slider */}
        <CuveesCarousel cuvees={cuvees} />
      </main>

      <Footer />
    </div>
  );
}
