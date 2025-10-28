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

            <main className="flex flex-col mt-auto text-justify">
                <article className="flex flex-col gap-10 items-center mb-10 lg:flex-row">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center">
                        <Image src={histoire1} alt="Photo de l'entré de la cave" className="min-w-[260px] "></Image>
                        <figcaption className="text-xs text-center mt-2 -rotate-3">Si vous êtes venu, l'entrée dans le temps... <br />le caveau de dégustation.</figcaption>
                    </figure>
                    <div>
                        <h2 className="text-red text-center my-2">- HISTORIQUE -</h2>
                        <p className="[text-align-last:justify]">
                            Un soir, où nous recevions des amateurs de vin, j’ai ouvert une bouteille de 20 ans d’âge de mon père. Il « faisait son vin », pour la consommation  familiale et « se faire plaisir ». Tout était artisanal : pas de contrôle œnologique, bouteilles et bouchons achetés à la droguerie... <br /> 
                            Le résultat était au « petit bonheur la chance », mais la magie du terroir avait déjà lieu... <br />
                            Ils me dire en dégustant: « Qu’est ce que vous attendez pour faire votre vin ! » L’idée germa. <br />
                            Peu de temps après Sylviane, mon épouse me dit: « Si nous créions notre cave ! ». C’est ainsi que nous avons pris la suite des parents. Au printemps commencèrent les travaux.. 
                            <br />En septembre, nous vendangions, puis vinifions notre premier Millésime... le 1988 !
                        </p>
                    </div>
                </article>

                <article className="flex flex-col-reverse gap-10 items-center lg:flex-row mb-10">
                    <div>
                        <h2 className="text-red text-center my-2">- TERROIR -</h2>
                        <p className="">
                            Exposées au flanc sud des collines du Massif d’Uchaux, arborées de pins, chênes et genévriers, nos vignes bénéficiaient d’un terroir silico-calcaire, en Côtes du Rhône. Les vieux ceps, à petit rendement, étaient « taillés en gobelet » pour un meilleur ensoleillement. Les grappes, cueillies à la main, transportées en caisses, puis retriées sur table à la cave. S’en suivaient diverses cuvaisons pour donner
                        </p>
                    </div>
                    
                    <figure className="w-[200px] h-[200px] flex flex-col justify-center mb-6 lg:mb-0">
                        <Image src={histoire2} alt="Tableau de vignes taillées en gobelet" className="min-w-[200px] border-6 border-white m-auto"></Image>
                        <figcaption className="text-xs text-center mt-1"><span className="text-nowrap">« Ceps de vignes taillés en gobelets ».</span> Tableau de B P</figcaption>
                    </figure>
                </article>

                <article className="flex flex-col-reverse gap-14 items-center lg:flex-row mb-10">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center">
                        <Image src={histoire3} alt="Photo de l'entré de la cave" className="min-w-[200px] border-6 border-white"></Image>
                        <figcaption className="text-xs text-center mt-1">« Vendange à la main ». <br /> Tableau de B P</figcaption>
                    </figure>
                    <div>
                        <h2 className="text-red text-center my-2">- NOS 3 CUVÉES DE GARDE -</h2>
                        <p className="[text-align-last:justify]">
                            Ce sont La Grande Réserve, La cuvée Sylviane et L’Orée des Collines... dans ces 23 années que nous vous proposons, qui sont semblables car issues d’un même terroir, telles les membres d’une famille, <br />et tout à la fois uniques car chaque Millésime de 1988 à 2010 sont comme leurs enfants ! </p>
                            <p>
                                Donc différents dans leurs diversités aromatiques, dans leurs structures tanniques...
                                Mon épouse disait : « Ils sont vrais ! » Cette expression leur convient à souhait, en effet c’est la personnalité qui importe avant tout dans un vin... comme chez une personne !
                            </p>
                        
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
