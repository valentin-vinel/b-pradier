"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import tableau from "../../../public/degustation/tableau-degustation.png"
import Footer from "@/shared/Footer";

export default function Cuvees() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col gap-4 mt-4 text-center lg:text-justify ">
                <h2 className="text-center text-red">LES DÉGUSTATIONS « EN LIGNES... GÉOMÉTRQUES »</h2>
                <Image src={tableau} alt="Tableau représentant une dégustations autour d'une table." className="border-6 border-white max-w-[350px] m-auto" />
                <p className="max-w-[850px] m-auto mb-4">
                    Rassurez-vous on n'a pas, bien heureusement, inventé la dégustation du vin par Internet... Je viens vous proposer des méthodes pour « qu'en vrai et en direct », si je peux ainsi m'exprimer, vous compreniez nos différentes cuvées aux quatre points en commun. Ce sont, issus d'un seul domaine, d'un terroir identique, vinifié par le même vigneron et des vins qui ne soient pas de l'année. Comme le disait mon père lorsqu'il ouvrait un vin dans le temps, les jours de fêtes quand j'avais 20 ans : « Il doit avoir au moins 7 années de vie en bouteille... car c'est l'âge de raison ! » Elles n'ont pas non plus pour but de se substituer à un cours d'œnologie, ni aux commentaires de sommelier, mais sont complémentaires, pour saisir l'esprit des vins et peut-être aussi entre percevoir... l'âme du vin !
                </p>

                <div className="flex flex-col gap-12 my-10">
                    <section className="max-w-[800px] m-auto border p-4">
                        <h3 className="text-secondary text-red text-center mb-2">1 / 3 : LES HORIZONTALES</h3>
                        <p>
                            Avec mes trois cuvées, cette « Forme » de dégustation sur un même millésime, mais de cépages, de vinifications et d'élevages différents, vous cernerez les profils qui en résultent et l'incidence sur leurs typicités qu'on leurs « modes » d'élaboration, et les plus « justes formules » d'accords avec les mets.
                        </p>
                    </section>

                    <section className="max-w-[800px] m-auto border p-4">
                        <h3 className="text-secondary text-red text-center mb-2">2 / 3 : LES VERTICALES</h3>
                        <p>
                            Deuxième figure de dégustation d'une cuvée, sur au moins trois millésimes successifs, pour vous permettre de suivre son évolution au fil des années et remonter le temps, « pour revivre la genèse d'un vin... comme si l'on feuillettait un album photos de famille ! »
                        </p>
                    </section>

                    <section className="max-w-[800px] m-auto border p-4">
                        <h3 className="text-secondary text-red text-center mb-2">3 / 3 : LES DIAGONALES</h3>
                        <p>
                            Troisième « angle » de dégustation de nos vins, que nous aborderons plus tard de différents millésimes et cuvées, mais avec un même dénominateur, par exemple leur puissance tannique, leur finesse, afin de permettre « des mariages d'amour, et non des mariages de... raisons ! ».
                        </p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
}
