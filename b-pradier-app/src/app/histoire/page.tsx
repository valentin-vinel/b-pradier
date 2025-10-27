"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import histoire1 from "../../../public/histoire/histoire1.png"
import histoire2 from "../../../public/histoire/histoire2.png"
import histoire3 from "../../../public/histoire/histoire3.png"
import Footer from "@/shared/Footer";

export default function Histoire() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col gap-12 mt-auto">
                <article className="flex gap-6 items-center">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center">
                        <Image src={histoire1} alt="Photo de l'entré de la cave" className="min-w-[250px] "></Image>
                        <figcaption className="text-sm text-center mt-1">Si vous êtes venu, l'entrée dans le temps... le caveau de dégustation.</figcaption>
                    </figure>
                    <p className="self-center hyphens-auto">
                        Un soir, où nous recevions des amateurs de vin, j’ai ouvert une bouteille de 20 ans d’âge de mon père. Il « faisait son vin », pour la consommation familiale et « se faire plaisir »… Tout était artisanal : pas de contrôle œnologique, bouteilles et bouchons achetés à la droguerie... Le résultat était au « petit bonheur la chance », mais la magie du terroir avait déjà lieu ! Ils me dirent en dégustant: « Qu’est-ce que vous attendez pour faire votre vin ! » L'idée germa. Peu de temps après Sylviane, mon épouse, me dit : « Et si nous créions notre cave ! ». C'est ainsi que nous avons pris la suite de mes parents. Au printemps commencèrent les travaux, avec de petits moyens. En septembre, nous vendangions, puis vinifions notre premier Millésime... le 1988 !
                    </p>
                </article>

                <article className="flex gap-8 items-center">
                    <p className="self-center hyphens-auto">
                        Exposées au flanc sud des collines du Massif d’Uchaux, arboré de pins, chênes et genévriers, nos vignes bénéficiaient d’un terroir silico-calcaire, en Côtes du Rhône. Les vieux ceps, à petit rendement, étaient « taillées en gobelet » pour un meilleur ensoleillement. Les grappes, cueillies à la main, transportées en caisses, puis retriés sur table à la cave. S’en suivait diverses cuvaisons pour nous donner des typicités complémentaires, à chacune de nos 3 cuvées de grande garde…
                    </p>
                    <figure className="w-[280px] h-[200px] flex flex-col justify-center">
                        <Image src={histoire2} alt="Tableau de vignes taillées en gobelet" className="min-w-[260px] border-6 border-white"></Image>
                        <figcaption className="text-sm text-center mt-1">« Ceps de vignes taillées en gobelets sur sol silico-calcaire ». Tableau de B P</figcaption>
                    </figure>
                </article>

                <article className="flex gap-8 items-center mb-10">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center">
                        <Image src={histoire3} alt="Photo de l'entré de la cave" className="min-w-[260px] border-6 border-white"></Image>
                        <figcaption className="text-sm text-center mt-1">Vendange à la main. Tableau de B P</figcaption>
                    </figure>
                    <p className="self-center hyphens-auto">
                        La Grande Réserve, La cuvée Sylviane et L’Orée des Collines... dans les 23 années que nous vous proposons, sont à la fois semblables, car issues d’un même terroir telle une famille, et uniques. Car chaque Millésime de 1988 à 2010 sont comme des enfants ! Mais différents de part leur richesse aromatique, finesse et puissance de leur structure en bouche. Mon épouse disait : « Ils sont vrais ! » Cette expression leur convient parfaitement car, c’est la personnalité qui importe avant tout dans un vin… comme chez une personne !
                    </p>
                </article>
            </main>

            <Footer />
        </div>
    );
}
