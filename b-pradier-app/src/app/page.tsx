"use client";
import Image from "next/image";
import { useState } from "react";
import accueilImg from "../../public/dessin-neutre.png";
import menu from "../../public/menu.png";
import Header from "./shared/Header";

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <div className="min-h-screen flex flex-col bg-cover bg-center bg-no-repeat text-gray-800 max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <figure className="mx-auto mt-6">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w-2xl rounded-lg shadow-2xl/30" />
                <figcaption className="text-sm text-center md:text-base">Dessin du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure>

            <main>
                <h2 className="font-bold py-4 font-['Playfair_Display'] text-xl text-[#6B1E1E] mt-6 border-b border-[#C5A572] inline-block pb-1 mb-2 md:text-2xl">Cher amis et clients des premières années...</h2>
                <p className="mb-2 leading-relaxed">
                    Il n'y aura pas de millésimé 2025... Le domaine viticole du Château d'Hugues a cessé... <br /> Il est définitivement rentré dans la légende.
                </p>
                <p>
                    Depuis 1988, nous conservions des bouteilles de chaque millésime des cuvées de garde. Mon successeur n'avais pu racheter mes millésimes rares de 1988 ininterrompu à 2010, ce qui me permet de vous les proposer. Si je les vends, uniquement par ce site, c'est que j'ai fais l'année dernière, un AVC...
                </p>
                <p className="mb-2">J'en ai réchappé, mais avec des séquelles qui m'empêchent de recevoir pour déguster.</p>
                <p className="mb-2">
                    Mon concept est la mise à l'honneur, cette année, des 3 cuvées du MILLESIME 2005. C'est parce que c'est "son 20ème anniversaire" ! Et je vous garantis de sa bonification, avec le temps et de l'excellent état de conservation des bouchons. Tout comme pour les millésimes 2006 à 2010, car avec mes amis,
                    chaque semaine nous... "les contrôlons !"
                </p>
                <p className="italic">Bernard Pradier, avec mes bons souvenirs... et à bientôt de vous lire !</p>
            </main>

            <footer className="mt-8 py-2 text-center border-t border-[#C5A572] text-sm text-gray-700 bg-[#f9f6f11c]">
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
