"use client";
import Image from "next/image";
import bouchon from "../../public/accueil/dessin-bouchon.png";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

export default function HomeTest() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-4 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
            <Header />

            <h2 className="text-red text-center text-[24px] mb-2 lg:mt-8 md:text-3xl">
                - LES CHÂTEAU D'HUGUES -
            </h2>
            <p className="text-center text-red font-bold text-[24px]">« Millésimes rares fin du XXème et début du XXIème siècle »</p>

            {/* <figure className="mx-auto mt-4 lg:mt-4">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w- rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-4">Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure> */}

            <main className="text-center md:text-start lg:text-justify whitespace-pre-line m-auto md:mt-2 md:mb-12 max-w-[730px]">
                <p className="my-4">Chers clients, chère Madame, cher Monsieur,</p>
                <p className="lg:[text-align-last:justify]">
                    Vous le savez, le domaine viticole du Château d'Hugues a cessé d'exister...
                </p>
                <p className="lg:[text-align-last:justify]">
                    Il aura connu une fin tragique, mais sera devenu une belle et grande légende !
                </p>
                <p className="lg:[text-align-last:justify]">
                    Mon successeur, avant de déposer le bilan, avait mal entretenu le vignoble pendant des années. J'ai du me résoudre aussi à arracher ses vieux ceps. 
                </p>
                <p className="mb-4">
                    Il reste à présent, en souvenir de lui, ses Millésimes rares de 1988 jusqu'à 2010.
                </p>
                <p className="lg:[text-align-last:justify]">
                    En effet, depuis son origine, nous conservions avec mon épouse chaque année, des bouteilles de vin de nos trois cuvées de très grandes gardes.
                </p>
                <p>
                    Grâce à cela je viens vous proposer, par ce site uniquement de profiter que vous soyez déjà clients ou pas encore des derniers vins du Château d'Hugues !
                </p>
                <p className="mb-4 ">
                    Après un A.V.C. quelques séquelles m'empêchent à ce jour de vous recevoir...
                    Pour ces raisons de santé, je dois d'ici fin 2027 écouler mes 5000 cols.
                </p>
                
                <p className="text-center text-red">
                    <strong>« Millésimes 2010 à 2000, début du XXIème siècle »</strong>
                </p>
                <p >
                    Avec des connaissances, plusieurs fois par an, nous sélectionnons une année pour une dégustation de nos trois cuvées.
                    Cela pour vous dire, l'excellent état de conservation de mes vins et de leurs bouchons... qui ont entre 16 et 26 ans !
                </p>
                <p className="lg:[text-align-last:justify]">
                    Cette année, comme il se doit, c'est le Millésime 2006 qui est à l'honneur. 
                </p>
                <p className="lg:[text-align-last:justify]">Je vous invite à le découvrir avec un coffret, à retrouver sur la <a href="/offre" className="font-bold">page Offre.</a></p>
                {/* <p>Découvrez l'offre découverte de ce Millésime sur la <a href="/offre">page Offre.</a></p> */}
                <p className="mb-4">
                    Une belle année prête à déguster, à la différence, entres autres, avec les Millésimes 2009, 2005 et 2001, à découvrir et à conserver.
                </p>
                <p className="mb-2">
                    Par ce site je viens vous demander de m'y aider, avant de les proposer à des négociants en vin, en vous offrant des remises quantitatives :
                </p>
                <p className="font-bold text-center text-[22px]">
                    Par 36 bouteilles, transport offert, plus 5% de remise.
                </p>
                <p className="font-bold text-center mb-2 text-[22px]">
                    Et pour 60 bouteilles, transport offert, et moins 10%.
                </p>

                <p className="mb-4 lg:[text-align-last:justify]">
                    En carton de six bouteilles d'un même millésime et cuvée.
                    Tarif quantités supérieures, me contacter.
                    Vu les difficultés à me déplacer, aucun envoi d'échantillons même payant, n'est envisageable.
                    Sur demande, les dates de matinées dégustations de septembre à février sont prévues, pour cinq acheteurs uniquement professionnels. 
                    Au programme, une <em>« Horizontale »</em> et une <em>« Verticale »</em> de sept vins, animées par un sommelier, le tarif est de 50 € par personne.
                    Possibilité de réserver une table proche du Château d'Hugues.
                </p>

                <p className="text-center text-red">
                    <strong>« Millésimes 1999 à 1988, fin du XXème siècle »</strong>
                </p>
                <p className="lg:[text-align-last:justify] mb-4">
                    Cela fait longtemps que nous n'en avons pas débouché... Ces Millésimes rares sont des pièces de collection !
                    À offrir ou conserver, en mémoire du Château.
                </p>
                <p className="mb-4">
                    Aussi, chers amis, clients, futurs clients, que vous soyez particuliers ou professionnels, je vous invite à me contacter par mail, pour les conditions de vente de ces Millésimes et vous présente mes sincères et cordiales salutations.
                </p>
                <p className="mb-6">
                    Bernard Pradier, fondateur du Château d'Hugues.
                </p>

                <Image src={bouchon} alt="Dessin d'un bouchon de liège du chateau d'Hugues" className="m-auto max-w-[150px] mt-6 lg:mt-0"></Image>

            </main>

            <Footer />
        </div>
    );
}
