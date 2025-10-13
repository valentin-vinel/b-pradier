"use client";
import Image from "next/image";
import Header from "../../app/shared/Header";
import entreeCave from "../../../public/histoire/entree-cave.png"
import dessinVendange from "../../../public/histoire/dessin-vendange.png"
import tableauVigne from "../../../public/histoire/tableau-vignes.png"

export default function Histoire() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col gap-6 mt-auto">
                <article className="flex gap-8">
                    <Image src={entreeCave} alt="Photo de l'entré de la cave" className="w-[300px] h-[200px]"></Image>
                    <p className="self-center">
                        Cette idée a germé dans l'esprit de mon épouse Sylviane. Quelques temps plus tard, un soir, elle me dit : "Et si on faisait notre vin !". C'est ainsi que l'année 1988, nous avons pris la succession de mes parents et créé notre cave. Au printemps commencèrent les travaux, avec de petits moyens, l'aide de la famille et de nos amis. Et en septembre, nous étions prêts à vendanger... puis à vinifier notre premier Millésimé... Le Millésime 1988 !
                    </p>
                </article>

                <article className="flex gap-8">
                    <p className="self-center">
                        Situé en Côtes du Rhône sur nos 7 hectares d'une sélection de vielles vignes, et donc à petit rendement, essentiellement en "gobelet" pour un meilleur ensoleillement, exposées sur le versant sud des collines du Massif d'Uchaux où se mêlent pins, chênes et genévriers, nous privilégions les petits rendements. Les raisins, cueillis à la main, triés, transportés en caisses étaient retriés sur table à la cave. S'en suivait une cuvaison de deux semaines pour [...]
                    </p>
                    <Image src={dessinVendange} alt="Photo de l'entré de la cave" className="w-[500px] h-[200px]"></Image>
                </article>

                <article className="flex gap-8">
                    <Image src={tableauVigne} alt="Photo de l'entré de la cave" className="w-[300px] h-[200px]"></Image>
                    <p className="self-center">
                        Nos 23 millésimes, à la fois semblables, car issu d'un même terroir et tout à la fois unique, tel les enfants d'une même famille. L'alchimie de notre sol silico-calcaire, nos cépages et notre façon de travailler, nous ont donné des Millésimes de 1988 à 2010, des vins de grande garde. Mais avec, chaque fois, une richesse aromatiques, une finesse en bouche et une puissante structure, différente. Mon épouse disait : "Ils sont vrais !". Cette expression leur convient, c'est la personnalité qui importe avant tout dans un vin, comme chez une personne.
                    </p>
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
