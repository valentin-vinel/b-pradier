"use client";
import Image from "next/image";
import Header from "../../app/shared/Header";
import bouteilles from "../../../public/millesimes/bouteilles.png"
import bouteillesCopie from "../../../public/millesimes/bouteilles-Copie.png"


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
            <Header />

            <main className="mb-6">
                <h2 className="text-center font-bold mb-4 text-2xl">Nos 3 cuvées</h2>
                <figure className="m-auto text-center mb-6">
                    <Image src={bouteillesCopie} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[280px] img-shadow rounded-xl"></Image>
                    <figcaption className="text-base mt-4">Photo non contractuelle.</figcaption>
                </figure>


                <div className="grid grid-cols-3 gap-2 m-auto text-center w-fit">
                    <h3 className="text-2xl">Grande Réserve</h3>
                    <h3 className="text-2xl">Cuvée Sylviane</h3>
                    <h3 className="text-2xl">Orée des Collines</h3>
                    {/* {millesimes.map((element, i) => (
                        <article key={i} className="w-[250px] h-[250px] bg-cave flex justify-center">
                            <div className="w-[210px] h-[200px] bg-[#E7DFC9]/95 border-article rounded-xl m-auto flex flex-col justify-around p-2">
                                <h4 className="text-4xl font-bold">{element.annee}</h4>
                                <p className="text-base">Quantité disponible: {element.stock}</p>
                                <button className="bg-gray-500 p-2 text-base text-white rounded-xl hover:font-bold hover:cursor-pointer">Ajouter à ma commande</button>
                            </div>
                        </article>
                    ))} */}

                    {millesimes.map((element, i) => (
                        <article key={i} className="w-[250px] h-[250px] bg-cave-b flex justify-center">
                            <div className="m-auto flex flex-col justify-around gap-4">
                                <h4 className="text-4xl font-bold">{element.annee}</h4>
                                <p className="text-base">Quantité disponible: {element.stock}</p>
                                <button className="bg-[#aaa28f] border-article py-1 px-4 text-base text-white rounded-xl hover:font-bold hover:cursor-pointer hover:text-[#6b1e1e]">Ajouter à ma commande</button>
                            </div>
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
