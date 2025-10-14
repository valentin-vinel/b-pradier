"use client";
import Image from "next/image";
import Header from "../../app/shared/Header";
import bouteilles from "../../../public/millesimes/bouteilles.png"


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

            <main className="">
                <h2 className="text-center font-bold mb-4 text-2xl">Nos 3 cuvées</h2>
                <figure className="m-auto text-center mb-6">
                    <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[180px] img-shadow rounded-2xl"></Image>
                    <figcaption className="text-base mt-4">Photo non contractuelle.</figcaption>
                </figure>


                <div className="grid grid-cols-3 gap-4 m-auto text-center w-fit">
                    <h3>Grande Réserve</h3>
                    <h3>Cuvée Sylviane</h3>
                    <h3>Orée des Collines</h3>
                    {millesimes.map((element) => (
                        <article className="border w-[240px] h-[200px] m-auto flex flex-col justify-between p-4">
                            <h4 className="text-6xl">{element.annee}</h4>
                            <p className="text-base">Quantité disponible: {element.stock}</p>
                            <button className="bg-gray-500 p-2 text-base text-white rounded-xl hover:font-bold hover:cursor-pointer">Ajouter à ma commande</button>
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
