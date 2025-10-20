"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import histoire1 from "../../../public/histoire/histoire1.png"
import histoire2 from "../../../public/histoire/histoire2.png"
import histoire3 from "../../../public/histoire/histoire3.png"

export default function Histoire() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col gap-6 mt-auto">
                <article className="flex gap-6 items-center">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center">
                        <Image src={histoire1} alt="Photo de l'entré de la cave" className="min-w-[250px] "></Image>
                        <figcaption className="text-sm text-center mt-1">L'entrée dans le temps, <br /> de notre caveau de dégustation.</figcaption>
                    </figure>
                    <p className="self-center hyphens-auto">
                        {/* Cette idée a germé dans l'esprit de mon épouse Sylviane. Quelques temps plus tard, un soir, elle me dit : "Et si on faisait notre vin !". C'est ainsi que l'année 1988, nous avons pris la succession de mes parents et créé notre cave. Au printemps commencèrent les travaux, avec de petits moyens, l'aide de la famille et de nos amis. Et en septembre, nous étions prêts à vendanger... puis à vinifier notre premier Millésimé... Le Millésime 1988 ! */}
                        Un soir, où nous recevions des amis amateur de vin, j’ai ouvert une bouteille de 20 ans d’âge de mon père. Il faisait son vin, pour la consommation familiale, « se faire plaisir »… Tout était artisanale: pas de contrôle œnologique, les bouteilles et bouchons achetés à la droguerie. Le résultat était au « petit bonheur la chance », mais la magie du terroir s’opérait déjà à chaque fois. Ils me dire en dégustant: « Qu’est ce que vous attendez pour faire votre vin ! » Cette idée a germé dans notre esprit. Quelques temps après Sylviane, mon épouse, me dit: « Et si nous créions notre cave ! ». Cest ainsi que nous avons pris la suite de mes parents…  Au printemps commencèrent les travaux, avec de petits moyens et l’aide de notre famille. En septembre, nous étions prêt à vendanger, puis à vinifier notre premier Millésime, le 1988 !
                    </p>
                </article>

                <article className="flex gap-8 items-center">
                    <p className="self-center hyphens-auto">
                        {/* Situé en Côtes du Rhône sur nos 7 hectares d'une sélection de vielles vignes, et donc à petit rendement, essentiellement en "gobelet" pour un meilleur ensoleillement, exposées sur le versant sud des collines du Massif d'Uchaux où se mêlent pins, chênes et genévriers, nous privilégions les petits rendements. Les raisins, cueillis à la main, triés, transportés en caisses étaient retriés sur table à la cave. S'en suivait une cuvaison de deux semaines pour [...] */}
                        Exposées au flanc sud des collines du Massif d’Uchaux, arboré de pins, chênes et genévriers, nos vignes bénéficiaient d’un terroir silico-calcaire, en Côtes du Rhône. Les vieux ceps, à petit rendement, étaient « taillées en gobelet » pour un meilleur ensoleillement. Les grappes, cueillies à la main, transportées en caisses, puis retriés sur table à la cave. S’en suivait diverses cuvaisons pour nous donner des typicités complémentaires, à chacune de nos 3 cuvées de grande garde…
                    </p>
                    <figure className="w-[280px] h-[200px] flex flex-col justify-center">
                        <Image src={histoire2} alt="Tableau de vignes taillées en gobelet" className="min-w-[190px] border-6 border-white"></Image>
                        <figcaption className="text-sm text-center mt-1">Vignes taillées en gobelet sur sol silico-calcaire.</figcaption>
                    </figure>
                </article>

                <article className="flex gap-8 items-center">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center ">
                        <Image src={histoire3} alt="Photo de l'entré de la cave" className="min-w-[190px] border-6 border-white"></Image>
                        <figcaption className="text-sm text-center mt-1">Vendange en caisse.</figcaption>
                    </figure>
                    <p className="self-center hyphens-auto">
                        {/* Nos 23 millésimes, à la fois semblables, car issu d'un même terroir et tout à la fois unique, tel les enfants d'une même famille. L'alchimie de notre sol silico-calcaire, nos cépages et notre façon de travailler, nous ont donné des Millésimes de 1988 à 2010, des vins de grande garde. Mais avec, chaque fois, une richesse aromatiques, une finesse en bouche et une puissante structure, différente. Mon épouse disait : "Ils sont vrais !". Cette expression leur convient, c'est la personnalité qui importe avant tout dans un vin, comme chez une personne. */}
                        … Grande Reserve, Cuvée Sylviane et L’Orée des Collines.. dans les 23 années que nous vous proposons, sont à la fois semblables, car issu d’un même terroir telle une famille, et unique à chaque Millésime de 1988 à 2010 comme les enfants ! Mais différents de part leurs richesse aromatique, finesse et puissance de leur structure en bouche. Mon épouse disait : « Ils sont vrais ! » Cette expression leur convient parfaitement car, c’est la personnalité qui importe avant tout dans un vin…  comme chez une personne.!
                    </p>
                </article>
            </main>

            <footer className="mt-8 py-2 text-center border-t border-[#C5A572] text-sm text-gray-700 bg-[#f9f6f11c] md:mt-auto">
                <div className="space-x-6 mb-2">
                    <a href="#" className="">
                        Facebook
                    </a>
                    <a href="#" className="">
                        Mentions légales
                    </a>
                    <a href="#" className="">
                        CGV
                    </a>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                    &copy; 2025 B. Pradier — Tous droits réservés.
                </p>
            </footer>
        </div>
    );
}
