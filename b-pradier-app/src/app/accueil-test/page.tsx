"use client";
import Image from "next/image";
import accueilImg from "../../../public/accueil/dessin-accueil.png";
import parution_vigneron from "../../../public/accueil/article-vigneron-bp.webp";
import bouchon from "../../../public/accueil/dessin-bouchon.png";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";
import Link from "next/link";

export default function HomeTest() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-4 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>
            <Header />

            <h2 className="text-red text-center text-[22px] lg:mt-8 md:text-3xl">« LES MILLÉSIMES DE 1988... JUSQU'À 2010 DU CHATEAU D'HUGUES »</h2>

            <figure className="mx-auto mt-4 lg:mt-4">
                <Image src={accueilImg} alt="Peinture du Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux" className="w- rounded-lg img-shadow m-auto" />
                <figcaption className="text-sm text-center mt-4">Château d'Hugues et son vignoble au flanc des collines du Massif d'Uchaux</figcaption>
            </figure>

            <main className="text-center md:text-start lg:text-justify whitespace-pre-line m-auto md:mt-2 md:mb-12 max-w-[980px]">
                <h3 className="mt-4 inline-block text-secondary">Le domaine viticole du Château d'Hugues a cessé d'exister de vivre, définitivement...</h3>
                <p className="lg:[text-align-last:justify] mb-2">
                    Ses vignes, ainsi que ses vins, sont entrés dans la légende ! 
                    Mon successeur ayant déposé le bilan et mal entretenu les vignes, j'ai du me résoudre, la mort dans l'âme, à faire arracher leurs ceps.
                </p>
                <p className="mb-2">
                    Il me reste en souvenir des Millésimes rares à présent, en rouges, de 1988 jusqu'à 2010. En effet, depuis sa création, nous conservions avec mon épouse, chaque année, des bouteilles de vin de nos trois cuvées de grandes gardes.
                    Grâce à cela, je viens vous proposer par ce site de profiter encore si vous êtes déjà clients, les bouteilles des trois cuvées de grande garde du Château d'Hugues !
                </p>
                <p className="mb-2">
                    Après un A.V.C., quelques séquelles m'empêchent à ce jour, de vous recevoir... mais pas de vous lire ! Magrés tout, pour des raisons de santé, je dois d'ici fin 2027, je ne dirais pas liquider mais écouler mon stock d'environ 5000 cols.
                </p>

                {/* INSERTION DU TABLEAU DE REMISES */}
                <div className="mt-6 mb-4 flex justify-center lg:justify-start lg:ml-10">
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

                <p className="mb-6 border-l-2 border-[#6b1e1e]/40 pl-6 my-4 text-lg">
                    Commande et tarif quantités supérieures, me contacter. <br />
                    Aucun envoie d'échantillons, même payant, n'est possible. <br />
                    À la demande, les dates de dégustations étalées de septembre à février sont d'ores et déjà prévues pour cinq dégustateurs inscrits. <br />
                    Sept vins, tarif 50€ par personne, le matin de 10 heures à 12 heures. <br />
                    Possibilité de vous réserver un restaurant tout proche ainsi que d'un hôtel.
                </p>

                <p>
                    La plus part ont récemment, si je peux m'exprimer ainsi, fêter leur 20ème anniversaire !
                </p>
                <p className="mb-2">
                    Cette année, c'est le Millésime 2006 qui est en fête ! C'est un millésime prêt à déguster à la différence du 2005, qui est à peine ouvert et l'ayant célébré l'an passé.
                </p>
                <p>
                    Les « Millésimes 2000 à 2010 », avec des connaissances, plusieurs fois par an, nous sélectionnons une année pour faire une dégustation « Horizontale de nos 3 cuvées ».
                </p>
                <p>
                    Concernant les bouteilles de 1999 à 1988, Millésimes de la fin du XXème siècle, cela fait bien longtemps que nous n'en avons débouchées... Ce sont des pièces de collection ! Je reste à votre disposition pour vous conseiller par mail.
                </p>
                <p className="my-2">
                    Chers clients, amis, futurs clients, particuliers ou professionnels, je vous présente mes plus sincères salutations.
                </p>
                <p>Bernard Pradier</p>

                <Image src={bouchon} alt="Dessin d'un bouchon de liège du chateau d'Hugues" className="m-auto max-w-[150px] mt-6 lg:mt-0"></Image>

                <div className="border-t m-14 md:m-20 border-[#6b1e1e]/50"></div>

                <section className="mb-12">
                    <h2 className="text-red text-center text-[22px] lg:mt-8 md:text-3xl  mb-6 md:mb-12">ACTUALITÉS</h2>
                    <h3 className="text-secondary mb-6 text-center">Parution dans le Magazine du Vigneron des côtes du Rhône et de la vallée du Rhône, juin 2026.</h3>
                    <Image src={parution_vigneron} alt="Extrait du magazine Le Vigneron" className="m-auto shadow-lg"></Image>
                </section>

            </main>

            <Footer />
        </div>
    );
}
