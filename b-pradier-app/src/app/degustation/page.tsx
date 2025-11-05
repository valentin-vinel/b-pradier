"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import tableau from "../../../public/degustation/tableau-degustation.png"
import Footer from "@/shared/Footer";

export default function Cuvees() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>

            <Header />

            <main className="flex flex-col gap-4 mt-4 text-center lg:text-justify">
                <h2 className="text-center text-red text-2xl font-bold">LES DÉGUSTATIONS « EN LIGNES... GÉOMÉTRIQUES »</h2>
                <Image src={tableau} alt="Tableau représentant une dégustations autour d'une table." className="border-6 border-white max-w-[350px] m-auto mb-2" />
                <p className="max-w-[840px] m-auto mb-4">
                    Rassurez-vous on n'a pas, bien heureusement, inventé la dégustation du vin par Internet... Je vous propose 3 méthodes pour « <em>qu'en vrai et en direct</em> », si je peux ainsi m'exprimer, vous compreniez nos différentes cuvées aux quatre points communs. Qui sont, issus d'un seul domaine, d'un terroir identique, vinifié par le même vigneron et des vins qui ne soient pas de l'année. Comme le disait mon père lorsqu'il ouvrait un vin, dans le temps les jours de fêtes, quand j'avais 20 ans : « <em>Il doit avoir au moins 7 années de vie en bouteille... car c'est l'âge de raison !</em> ». Elles n'ont pas pour but de se substituer à un cours d'œnologie, ni aux commentaires de sommeliers, mais sont complémentaires, pour saisir l'esprit des vins et peut-être aussi entre percevoir... l'âme du vin !
                </p>

                <div className="flex flex-col gap-12 my-10">
                    <section className="max-w-[800px] m-auto border p-4">
                        <h3 className="text-secondary text-red text-center mb-2">1 / 3 : LES HORIZONTALES</h3>
                        <p>
                            Avec mes trois cuvées, cette « <em>forme</em> » de dégustation d'un même millésime, mais de cépages, de vinifications et d'élevages différents, vous cernerez ainsi les profils qui en résultent. Ainsi que l'incidence sur leurs typicités qu'on leurs « <em>modes</em> » d'élaboration... et les plus « <em>justes formules</em> » d'accords avec les mets.
                        </p>
                    </section>

                    <section className="max-w-[800px] m-auto border p-4">
                        <h3 className="text-secondary text-red text-center mb-2">2 / 3 : LES VERTICALES</h3>
                        <p>
                            Deuxième figure de dégustation d'une cuvée, par exemple La Grande Réserve ou L'Orée des Collines sur au moins trois millésimes successifs. Dans ce cas, les millésimes impairs, soit 2009, 2007 et 2005 ! Cela vous permettra de suivre son évolution au fil des années et ainsi remonter le temps, « <em>pour revivre la genèse d'un vin... comme si l'on feuillettait un album photos de famille !</em> »
                        </p>
                    </section>

                    <section className="max-w-[800px] m-auto border p-4">
                        <h3 className="text-secondary text-red text-center mb-2">3 / 3 : LES DIAGONALES</h3>
                        <p>
                            Troisième « <em>angle</em> » de dégustation de nos vins, que nous aborderons plus tard, de différents millésimes et cuvées, mais avec un même dénominateur. Par exemple leur puissance tannique, leur finesse, afin de permettre « <em>des mariages d'amour... et non des mariages de raisons !</em> ».
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
