"use client";
import Image from "next/image";
import accueilImg from "../../public/dessin-neutre.png";
import Header from "./shared/Header";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <figure className="mx-auto mt-6">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w-lg rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-6">Dessin du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure>

            <main>
                <h2 className="mt-4 text-xl inline-block md:text-xl mb-2">
                    Il n'y aura pas de millésimé 2025... Le domaine viticole du Château d'Hugues a cessé... <br /> Il est définitivement rentré dans la légende.
                </h2>
                <p>
                    Depuis 1988, nous conservions des bouteilles de chaque millésime des cuvées de garde. Mon successeur n'avais pu racheter mes millésimes rares de 1988 ininterrompu à 2010, ce qui me permet de vous les proposer. Si je les vends, uniquement par ce site, c'est que j'ai fais l'année dernière, un AVC...
                </p>
                <p className="">J'en ai réchappé, mais avec des séquelles qui m'empêchent de recevoir pour déguster.</p>
                <p className="">
                    <strong>Mon concept, cette année, est la mise à l'honneur des 3 cuvées du millésimé 2005... C'est "son 20ème anniversaire" !</strong>
                </p>
                <p>
                    Je peux vous garantir de sa bonification, avec le temps et de l'excellent état de conservation des bouchons. Tout comme pour les millésimes 2006 à 2010, car avec mes amis,
                    chaque semaine nous... "les contrôlons !"
                </p>
                <p className="mt-2 mb-2 leading-relaxed">
                    Chers amis-clients des quelques 20 premières années, Madame, Monsieur... Avec toute mon amitié et je l'espère, à bientôt de vous lire !
                </p>
                <p className="italic">Bernard Pradier</p>
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
