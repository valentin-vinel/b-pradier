"use client";
import Image from "next/image";
import accueilImg from "../../public/accueil/dessin-accueil.png";
import Header from "../shared/Header";
import Footer from "@/shared/Footer";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-4 lg:px-0">
            {/* <div className="fixed top-0 left-0 w-full h-full bg-[#72605e] z-[-1]"></div> */}
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
            <Header />

            <h2 className="text-red text-center lg:mt-2">- LE CHÂTEAU D'HUGUES -</h2>

            <figure className="mx-auto mt-4 lg:mt-4">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w- rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-4 lg:mt-4">Le Château d’Hugues et son vignoble au flanc des collines du Massif d’Uchaux</figcaption>
            </figure>

            <main className="md:text-justify whitespace-pre-line m-auto md:mt-2 md:mb-12 w-[970px]">
                <h3 className="mt-4 inline-block text-secondary">
                    Le domaine viticole Château d’Hugues a cessé d’exister... Il est rentré dans la légende !
                </h3>
                <p className="[text-align-last:justify]">
                    Mais heureusement depuis sa création nous conservions, chaque année, des bouteilles de nos trois cuvées de grandes gardes, des Millésimes de 1988 jusqu’à 2010, constituant notre « petit trésor ».
                </p>
                <p  className="">
                    Grâce à cela je peux vous proposer encore des Château d’Hugues, mais uniquement par ce site ! La raison en est qu’il y aura en mai deux ans, j’ai fait un A V C... J’en ai réchappé, si ce n’est avec quelques séquelles, qui m’empêchent de vous recevoir. Aussi je vous invite à profiter, pour vos repas de fêtes de Nöel, du nouvel an... et pour offrir, ou mettre dans votre cave, en 2025, en particulier : <strong className="font-normal underline text-nowrap">des vins des trois cuvées de notre Millésime 2005, mises à l’honneur car c’est leur 20ème anniversaire !</strong>
                </p>
                <p  className="[text-align-last:justify]">
                    Ce samedi 18 octobre, avec un œnologue, nous avons fait une « Horizontale de nos 2005 » de mes trois cuvées de garde de ce millésime. Il en est ressorti une excellente évolution des vins et de l’état de conservation des bouchons en liège. Vous trouverez plus loin en détail cette dégustation. Il en va de même pour les millésimes 2006 à 2010, parmi lesquels, chaque fin de semaine, nous sélectionnons une année et choisissons une cuvée, parmi les trois, puis avec mes amis, nous les... « contrôlons » !
                </p>
                <p className="mt-2 mb-2">
                    Chers clients amis des quelques 20 premières années, croyez à mes très bons souvenirs ; et à vous aussi, <br />
                    Madame, Monsieur, qui allait découvrir nos vins sans les connaître... À très bientôt de vous lire !
                </p>
                <p className="italic">Bernard Pradier</p>
            </main>

            <Footer />
        </div>
    );
}
