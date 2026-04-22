"use client";
import Image from "next/image";
import accueilImg from "../../public/accueil/dessin-accueil.png";
import bouchon from "../../public/accueil/dessin-bouchon.png";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Link from "next/link";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-4 lg:px-0">
            {/* <div className="fixed top-0 left-0 w-full h-full bg-[#72605e] z-[-1]"></div> */}
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
            <Header />

            <h2 className="text-red text-center text-[22px] lg:mt-8 md:text-3xl">« LES MILLÉSIMES DE 1988... JUSQU'À 2010 DU CHATEAU D'HUGUES »</h2>

            <figure className="mx-auto mt-4 lg:mt-4">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w- rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-4">Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure>

            <main className="text-center md:text-start lg:text-justify whitespace-pre-line m-auto md:mt-2 md:mb-12 max-w-[990px]">
                <h3 className="mt-4 inline-block text-secondary">Le domaine viticole du Château d'Hugues a cessé d'exister... Il est entré dans la légende !</h3>
                <p className="lg:[text-align-last:justify]">
                    Bien heureusement, depuis sa création, nous conservions chaque année, des bouteilles de vin de nos trois cuvées de grandes gardes, des <em>Millésimes rares de 1988 jusqu'à 2010</em>, constituant ainsi un « <em>petit trésor</em> » ...
                </p>
                <p>Aussi grâce à cela je peux vous proposer encore des Château d'Hugues, mais uniquement par ce site !</p>
                <p className="">
                    La raison est qu'il y aura en mai trois ans, j'ai fait un A V C... J'en ai réchappé, mais avec quelques séquelles, qui m'empêchent à ce jour, de vous recevoir... mais pas de vous lire ! Aussi, je vous invite à profiter encore, pour vos repas de fêtes, pour offrir, ou mettre dans votre cave. Et tout
                    particulièrement cette année :
                </p>
                <Link href={"/offre"} className="lg:text-nowrap font-bold block text-center my-2">
                    Les trois cuvées du Millésime 2006, en promotion du fait de leur... 20ème anniversaire !
                </Link>
                <p className="">De plus nous maintenons les vins du Millésime 2005 au même tarif que l'année dernière, car notre site a été ouvert en décembre dernier.</p>
                <p>
                    Comme l'année dernière, avec un ami œnologue, nous allons procéder ce mois de mars, à <em className="lg:text-nowrap">« L'Horizontale de nos cuvées 2006 »</em>. Vous trouverez prochainement, dans la page <Link href={"/millesimes"}>Millésimes</Link>, en détail cette dégustation. En ce qui concerne les
                    Millésimes 2000 à 2010, avec des amis, chaque fin de semaine, nous sélectionnons une année parmis lesquels nous choisissons une cuvée, pour la... « <em>contrôler</em> » !
                </p>
                <p>
                    Et les bouteilles 1999 à 1988, Millésimes de la fin du XX<span className="text-base">ème</span> siècle, ce sont des pièces de collections.
                </p>
                <p className="my-2">
                    Chers clients amis des premières années, croyez à mes très bons souvenirs ; et à vous aussi, <br />
                    Madame, Monsieur, qui allez découvrir nos vins sans les connaître... À très bientôt de vous lire !
                </p>
                <p>Bernard Pradier</p>

                <Image src={bouchon} alt="Dessin d'un bouchon de liège du chateau d'Hugues" className="m-auto max-w-[150px] mt-6 lg:mt-0"></Image>
            </main>

            <Footer />
        </div>
    );
}
