"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import bouteilles from "../../../public/millesimes/bouteilles-Copie.png"
// import heroImg from "../../../public/cadre-hero.png"
// import cadre from "../../../public/cadre.png"
// import ardoise from "../../../public/millesimes/ardoise.png"
import ardoise2 from "../../../public/ardoise-8.png"
import ardoise3 from "../../../public/test-ardoise.png"
import bouchon from "../../../public/bouchon.png"


export default function Histoire() {
    const cuvees = ["La Grande Réserve", "La cuvée Sylviane", "L'orée des Collines"]
    const millesimes = [
        {
            annee: 2005,
            cuvee: cuvees[0],
            stock: 100
        },
        {
            annee: 2005,
            cuvee: cuvees[1],
            stock: 100
        },
        {
            annee: 2005,
            cuvee: cuvees[2],
            stock: 100
        },
        {
            annee: 2004,
            cuvee: cuvees[0],
            stock: 100
        },
        {
            annee: 2004,
            cuvee: cuvees[1],
            stock: 100
        },
        {
            annee: 2004,
            cuvee: cuvees[2],
            stock: 100
        }
    ]

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


                <div className="grid grid-cols-3 gap-6 m-auto text-center w-fit">
                    <figure className="flex flex-col justify-center items-center relative">
                        <Image src={ardoise2} alt="Image d'un cadre suspendu" className="max-w-[240px]"></Image>
                        <div className="z-[-1] w-[240px] h-[160px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
                        <p className="text-3xl text-white absolute h-fit m-auto translate-y-6 w-[180px] font-bold">GRANDE RÉSERVE</p>

                        {/* <Image src={ardoise3} alt="Image d'un cadre suspendu" className="max-w-[220px]"></Image>
                        <div className=" z-[-1] w-[220px] h-[145px] absolute translate-y-9 ardoise-shadow"></div>
                        <p className="text-3xl text-white absolute h-fit m-auto translate-y-1/2 w-[200px] font-bold">GRANDE RÉSERVE</p> */}
                    </figure>
                    <figure className="flex flex-col justify-center items-center relative">
                        <Image src={ardoise2} alt="Image d'un cadre suspendu" className="max-w-[240px]"></Image>
                        <div className="z-[-1] w-[240px] h-[160px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
                        <h3 className="text-3xl text-white absolute h-fit m-auto translate-y-6 w-[180px] font-bold">CUVÉE SYLVIANE</h3>

                        {/* <Image src={ardoise3} alt="Image d'un cadre suspendu" className="max-w-[220px]"></Image>
                        <div className=" z-[-1] w-[220px] h-[145px] absolute translate-y-9 ardoise-shadow"></div>
                        <h3 className="text-3xl text-white absolute h-fit m-auto translate-y-1/2 w-[200px] font-bold">CUVÉE SYLVIANE</h3> */}
                    </figure>
                    <figure className="flex flex-col justify-center items-center relative">
                        <Image src={ardoise2} alt="Image d'un cadre suspendu" className="max-w-[240px]"></Image>
                        <div className="z-[-1] w-[240px] h-[160px] absolute translate-y-5 ardoise-shadow rounded-xl"></div>
                        <h3 className="text-3xl text-white absolute h-fit m-auto translate-y-6 w-[180px] font-bold text-warning">L'ORÉE DES COLLINES</h3>

                        {/* <Image src={ardoise3} alt="Image d'un cadre suspendu" className="max-w-[220px]"></Image>
                        <div className=" z-[-1] w-[220px] h-[145px] absolute translate-y-9 ardoise-shadow"></div>
                        <h3 className="text-3xl text-white absolute h-fit m-auto translate-y-1/2 w-[200px] font-bold text-warning">L'ORÉE DES COLLINES</h3> */}
                    </figure>

                    {/* {millesimes.map((element, i) => (
                        <article key={i} className="w-[250px] h-[250px] bg-cave-b flex justify-center">
                            <div className="m-auto flex flex-col justify-around gap-4">
                                <h4 className="text-4xl font-bold">{element.annee}</h4>
                                <p className="text-base">Quantité disponible: {element.stock}</p>
                                <button className="bg-[#aaa28f] border-article py-1 px-4 text-base text-white rounded-xl hover:font-bold hover:cursor-pointer hover:text-[#6b1e1e]">Ajouter à ma commande</button>
                            </div>
                        </article>
                    ))} */}

                    {millesimes.map((element, i) => (
                        <article key={i} className="flex flex-col gap-4 mb-6 items-center">
                            <figure className="flex flex-col justify-center items-center relative">
                                <Image src={bouchon} alt="Image d'un bouchon de liège" className="max-w-[130px]"></Image>
                                <figcaption className="lgd-bouchon text-3xl absolute h-fit m-auto translate-x-4 w-[140px] font-bold">{element.annee}</figcaption>
                            </figure>
                            <button className="bg-[#D4BFA6] border-2  text-base hover: hover:cursor-pointer hover:text-[#6b1e1e] relative w-[210px]">
                                <span className="w-[3px] h-[3px] bg-black absolute top-1 left-1 rounded-xl" />
                                <span className="w-[3px] h-[3px] bg-black absolute top-1 right-1 rounded-xl" />
                                <span className="w-[3px] h-[3px] bg-black absolute bottom-1 left-1 rounded-xl" />
                                <span className="w-[3px] h-[3px] bg-black absolute bottom-1 right-1 rounded-xl" />
                                Ajouter à ma commande
                            </button>
                            {/* <div className="m-auto flex flex-col justify-around gap-4">
                                <h4 className="text-4xl font-bold">{element.annee}</h4>
                                <p className="text-base">Quantité disponible: {element.stock}</p>
                            </div> */}
                        </article>
                    ))}

                    
                        
                    
                </div>
            </main>

            <footer className="mt-8 py-2 text-center border-t border-[#C5A572] text-sm text-gray-700 bg-[#f9f6f11c] md:mt-auto">
                <div className="space-x-6 mb-2">
                    <a href="#" className="">
                        Facebook
                    </a>
                    <a href="#" className="">
                        Mentions légales
                    </a>
                    <a href="#" className="">
                        CGV
                    </a>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                    &copy; 2025 B. Pradier — Tous droits réservés.
                </p>
            </footer>
        </div>
    );
}
