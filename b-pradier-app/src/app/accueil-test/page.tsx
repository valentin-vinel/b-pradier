"use client";
import Image from "next/image";
import accueilImg from "../../../public/accueil/dessin-accueil.png";
import parution_vigneron from "../../../public/accueil/article-vigneron-bp.webp";
import bouchon from "../../../public/accueil/dessin-bouchon.png";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

export default function HomeTest() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-4 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
            <Header />

            <h2 className="text-red text-center text-[22px] mb-2 lg:mt-8 md:text-3xl">
                LES CHÂTEAU D'HUGUES 
            </h2>
            <p className="text-center text-red text-[22px]">« Millésimes rares fin du XXème et début du XXIème siècle »</p>

            <figure className="mx-auto mt-4 lg:mt-4">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w- rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-4">Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure>

            <main className="text-center md:text-start lg:text-justify whitespace-pre-line m-auto md:mt-2 md:mb-12 max-w-[780px]">
                {/* <h3 className="mt-4 inline-block text-secondary">Le domaine viticole du Château d'Hugues a cessé d'exister de vivre, définitivement...</h3> */}
                <p className="my-4">Chers clients, chères Mesdames, chers Messieurs,</p>
                {/* <p className="lg:[text-align-last:justify]"> */}
                <p>
                    Vous le savez, le domaine viticole du Château d'Hugues a cessé d'exister...
                </p>
                <p className="">
                    Il est devenu une tragique mais belle et grande légende !
                </p>
                <p className="mb-4">
                    Mon successeur, avant de déposer le bilan, avait mal entretenu le vignoble pendant des années, j'ai du me résoudre aussi à arracher ses vieux ceps. Il reste en souvenir de lui, ses Millésimes rares à présent, de 1988 jusqu'à 2010.
                </p>
                <p className="mb-4">
                    En effet, depuis son origine, nous conservions avec mon épouse, chaque année, des bouteilles de vin de nos trois cuvées de très grandes gardes.
                    Grâce à cela, je viens vous proposer, par ce site uniquement, de profiter que vous soyez déjà clients ou pas encore, des derniers vins du Château d'Hugues !
                    Après un A.V.C., quelques séquelles m'empêchent à ce jour, de vous recevoir...
                    Pour ces raisons de santé, je dois d'ici fin 2027, écouler mes environ 5000 cols.
                </p>

                <p>
                    « Millésimes 2010 à 2000, début du XXIème siècle » : Avec des amis, plusieurs fois par an, nous sélectionnons une année pour une dégustation de nos trois cuvées; Dont certains ont déjà fêté leurs 20ème anniversaire...
                </p>
                <p>
                    Cette année, comme il se doit, c'est le Millésime 2006 qui est à l'honneur. Une belle année prête à déguster, à la différence entres autres avec le 2005, à peine ouvert.
                </p>
                <p>
                    Par ce site je viens vous demander de m'y aider, avant de les proposer à des négociants en vin, en vous offrant des remises quantitatives :
                </p>

                {/* INSERTION DU TABLEAU DE REMISES */}
                <div className="my-4 flex justify-center lg:justify-start lg:ml-10">
                    <table className="border-collapse text-center lg:w-160">
                        <tbody>
                            <tr className="border-b border-[#6b1e1e]/30">
                                <td className="py-2 px-6 font-medium">36 bouteilles</td>
                                <td className="py-2 px-6 text-red font-semibold">-5%</td>
                            </tr>
                            <tr className="border-b border-[#6b1e1e]/30">
                                <td className="py-2 px-6 font-medium">60 bouteilles</td>
                                <td className="py-2 px-6 text-red font-semibold">-10%</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-6 font-medium">120 bouteilles</td>
                                <td className="py-2 px-6 text-red font-semibold">-15%</td>
                            </tr>
                            {/* <tr className="border-b border-[#6b1e1e]/30">
                                <td className="py-2 px-6 font-medium">180 bouteilles</td>
                                <td className="py-2 px-6 text-red font-semibold">-30%</td>
                            </tr>
                            <tr>
                                <td className="py-2 px-6 font-medium">300 bouteilles</td>
                                <td className="py-2 px-6 text-red font-semibold">-40%</td>
                            </tr> */}
                        </tbody>
                    </table>
                </div>

                {/* <p className="mb-6 border-l-2 border-[#6b1e1e]/40 pl-6 my-4 text-lg">
                    Commande et tarif quantités supérieures, me contacter. <br />
                    Aucun envoie d'échantillons, même payant, n'est possible. <br />
                    À la demande, les dates de dégustations étalées de septembre à février sont d'ores et déjà prévues pour cinq dégustateurs inscrits. <br />
                    Sept vins, tarif 50€ par personne, le matin de 10 heures à 12 heures. <br />
                    Possibilité de vous réserver un restaurant tout proche ainsi que d'un hôtel.
                </p> */}

                <p className="mb-4">
                    En carton de six bouteilles d'un même millésime et cuvée.
                    Tarif quantités supérieures, me contacter.
                    Vu les difficultés à me déplacer, aucun envoie d'échantillons même payant, n'est envisageable.
                    Sur demande, les dates de matinées dégustations de septembre à février sont prévues, pour cinq acheteurs uniquement professionnels.
                    Une <em>« Horizontale »</em> et une <em>« Verticale »</em> de sept vins, animées par un sommelier, le tarif est de 50€ oar personne.
                    Possibilité de vous réserver une bonne table et proche du Château d'Hugues.
                </p>

                <p>
                    Et pour les bouteilles « Millésimes 1999 à 1988, fun du XXème siècle », cela fait longtemps que nous en avons débouché... Ce sont des pièces de collection !
                </p>
                <p className="mb-4">
                    Ainsi, chers amis, clients, futurs clients, particuliers ou professionnels, je reste à votre « écoute » par mail, et vous présente mes sincères et cordiales salutations.
                </p>
                <p className="mb-6">
                    Bernard Pradier, fondateur et liquidateur du Château d'Hugues.
                </p>

                <Image src={bouchon} alt="Dessin d'un bouchon de liège du chateau d'Hugues" className="m-auto max-w-[150px] mt-6 lg:mt-0"></Image>

                {/* <div className="border-t m-14 md:m-20 border-[#6b1e1e]/50"></div>

                <section className="mb-12">
                    <h2 className="text-red text-center text-[22px] lg:mt-8 md:text-3xl  mb-6 md:mb-12">ACTUALITÉS</h2>
                    <h3 className="text-secondary mb-6 text-center">Parution dans le Magazine du Vigneron des côtes du Rhône et de la vallée du Rhône, juin 2026.</h3>
                    <Image src={parution_vigneron} alt="Extrait du magazine Le Vigneron" className="m-auto shadow-lg"></Image>
                </section> */}

            </main>

            <Footer />
        </div>
    );
}
