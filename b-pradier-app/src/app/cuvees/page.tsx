"use client";
import Image from "next/image";
import Header from "../../app/shared/Header";
import testImg2 from "../../../public/500x200.webp"

export default function Cuvees() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col gap-10 mt-10">
                <h2 className="text-2xl text-center">LES 3 TYPES DE CUVÉE DU CHÂTEAU D'HUGUES</h2>

                <article className="flex gap-10">
                    <Image src={testImg2} alt="Photo de l'entré de la cave" className="-rotate-5 shadow-2xl w-[400px]"></Image>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="text-xl">La Grande Réserve</h3>
                        <p className="self-center">
                            Son nom l'indique, c'est un vin de garde, fruit d'une longue cuvaison de trois semaines. Le mariage de la Syrah avec le Grenache, nous donne une couleur soutenue avec une palette d'arômes complexes. Nous avons choisi de ne pas l'élever en fût, c'est pour lui conserver toute sa fraîcheur. Avec une bouche riche de fruits confiturés et d'épices, elle accompagnera les viandes rouges, tel un magret de canard, ainsi que de belles pièces de boeuf.
                        </p>
                    </div>
                </article>

                <article className="flex gap-8">
                    <Image src={testImg2} alt="Photo de l'entré de la cave" className="-rotate-5 shadow-2xl w-[400px]"></Image>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="text-xl">La Cuvée Sylviane</h3>
                        <p className="self-center">
                           En 1988, nous avons vinifié une cuvée en hommage à mon épouse Sylviane, représentée sur le visuel de l'étiquette. Alliance Grenache, Syrah et Mourvèdre, vendangés tardivement, vinifié sans éraflage, ni élevée en fût de chêne, pour exprimer toute son authenticité. Cela nous donne un vin riche, puissant et structuré. Sa robe parée d'arômes de gingembre, de réglisse, et de touche poivrée. Servir sur les plats régionaux traditionnels, les viandes et gibiers, sauces au vin rouge.
                        </p>
                    </div>
                </article>

                <article className="flex gap-8">
                    <Image src={testImg2} alt="Photo de l'entré de la cave" className="-rotate-5 shadow-2xl w-[400px]"></Image>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <h3 className="text-xl">L'orée des Collines</h3>
                        <p className="self-center">
                            Son nom est dû à l'exposition de ses vignes sur le flan sud de nos Collines. Cette entité géologique collinaire du Crétacé Supérieur, composée de grès silicieux et de grés calcaires, lui a permis d'obtenir l'appellation "Villages Massif d'Uchaux". Ce même assemblage que la Cuvée Sylviane, mais élevé une année en vieux fûts de chêne, lui donne élégance et finesse. Sous sa robe, se mêlent des fruits confiturés, des notes de garrigue, d'épices douces. Avec volailles, agneau, lapin aux herbes... et fromages !
                        </p>
                    </div>
                </article>
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
