"use client";
import Image from "next/image";
import accueilImg from "../../public/accueil/dessin-accueil.png";
import bouchon from "../../public/accueil/dessin-bouchon.png"
import Header from "../shared/Header";
import Footer from "@/shared/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-4 lg:px-0">
            {/* <div className="fixed top-0 left-0 w-full h-full bg-[#72605e] z-[-1]"></div> */}
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
            <Header />

            <h2 className="text-red text-center lg:mt-8  text-3xl">- LE CHÂTEAU D'HUGUES -</h2>

            <figure className="mx-auto mt-4 lg:mt-4">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w- rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-6 lg:mt-4">Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure>

            <main className="md:text-justify whitespace-pre-line m-auto md:mt-2 md:mb-12 w-[970px]">
                <h3 className="mt-4 inline-block text-secondary">
                    Le domaine viticole du Château d'Hugues a cessé d'exister... Il est entré dans la légende !
                </h3>
                <p className="[text-align-last:justify]">
                    Heureusement, depuis sa création, nous conservions chaque année, des bouteilles de nos trois cuvées de grandes gardes, « <em>Millésimes rares de 1988 jusqu'à 2010</em> »... Nous constituant ainsi un « <em>petit trésor</em> » !
                </p>
                <p>
                    Grâce à cela je peux vous proposer encore des Château d'Hugues, mais uniquement par ce site ! 
                </p> 
                <p className="[text-align-last:justify]">
                    La raison en est qu'il y aura en mai deux ans, j'ai fait un A V C... J'en ai réchappé, si ce n'est avec quelques séquelles, qui m'empêchent à ce jour, de vous recevoir. Aussi je vous invite à profiter, pour vos repas de fêtes de Nöel, du nouvel an... et pour offrir, ou mettre dans votre cave, en particulier en 2025, 
                </p>
                <Link href={'/horizontale-2005'} className="text-nowrap font-bold block text-center mb-2">
                    « les trois cuvées de notre Millésime 2005, en l'honneur... de leur 20ème anniversaire ! »
                </Link>
                <p  className="">
                    Ce samedi 18 octobre 2025, avec un œnologue, nous avons procéder à « <em>L'Horizontale de nos 2005</em> ». <br />Il en est ressorti une excellente évolution des vins et de l'état de conservation des bouchons en liège. Vous trouverez dans la « Page millésimes », les détails de cette dégustation. <br />Il en va de même pour les bouteilles des « <em>Millésimes 2006 à 2010</em> ». Car avec mes amis, chaque fin de semaine, nous sélectionnons une année et choisissons une cuvée, pour la... « <em>controler</em> » !
                </p>
                <p className="my-2">
                    Chers clients amis des quelques 20 premières années, croyez à mes très bons souvenirs ; et à vous aussi, <br />
                    Madame, Monsieur, qui allait découvrir nos vins sans les connaître... À très bientôt de vous lire !
                </p>
                <p>Bernard Pradier</p>

                <Image src={bouchon} alt="Dessin d'un bouchon de liège du chateau d'Hugues" className="m-auto w-[150px]"></Image>
            </main>

            <Footer />
        </div>
    );
}
