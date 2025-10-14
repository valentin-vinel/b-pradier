"use client";
import Image from "next/image";
import Header from "../../app/shared/Header";
import histoire1 from "../../../public/histoire/histoire1.png"
import histoire2 from "../../../public/histoire/histoire2.png"
import histoire3 from "../../../public/histoire/histoire3.png"

export default function Histoire() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col gap-6 mt-auto">
                <article className="flex gap-6">
                    <Image src={histoire1} alt="Photo de l'entré de la cave" className="w-[280px] h-[180px]"></Image>
                    <p className="self-center">
                        {/* Cette idée a germé dans l'esprit de mon épouse Sylviane. Quelques temps plus tard, un soir, elle me dit : "Et si on faisait notre vin !". C'est ainsi que l'année 1988, nous avons pris la succession de mes parents et créé notre cave. Au printemps commencèrent les travaux, avec de petits moyens, l'aide de la famille et de nos amis. Et en septembre, nous étions prêts à vendanger... puis à vinifier notre premier Millésimé... Le Millésime 1988 ! */}
                        Un soir, où nous recevions des amis amateurs de vin, j’ai ouvert une bouteille de 20 ans d’âge de mon père. Ils me dirent en dégustant: « Qu’est-ce que vous attendez pour faire votre vin ! » Cette idée a germé dans notre esprit. Quelques temps après, Sylviane, mon épouse, me dit : « Et si nous créons notre cave ! ». C'est ainsi que nous avons pris la suite de mes parents… Au printemps commencèrent les travaux, avec de petits moyens et l’aide de notre famille. En septembre, nous étions prêts à vendanger, puis à vinifier notre premier millésime, le 1988 !
                    </p>
                </article>

                <article className="flex gap-8">
                    <p className="self-center">
                        {/* Situé en Côtes du Rhône sur nos 7 hectares d'une sélection de vielles vignes, et donc à petit rendement, essentiellement en "gobelet" pour un meilleur ensoleillement, exposées sur le versant sud des collines du Massif d'Uchaux où se mêlent pins, chênes et genévriers, nous privilégions les petits rendements. Les raisins, cueillis à la main, triés, transportés en caisses étaient retriés sur table à la cave. S'en suivait une cuvaison de deux semaines pour [...] */}
                        Situé en Côtes du Rhône, notre terroir silico-calcaire et nos vieilles vignes à petit rendement « formées en gobelet » pour bénéficier d’un total ensoleillement. Exposées sur le versant sud des collines du Massif d’Uchaux où se mêlent pins, chênes et genévriers, leurs grappes de raisins sont cueillis à la main. Transportés en caisses puis triés sur table à la cave. S’en suivait une longue cuvaison pour donner 3 cuvées de vin rouge de grande garde.
                    </p>
                    <Image src={histoire2} alt="Photo de l'entré de la cave" className="h-[180px]"></Image>
                </article>

                <article className="flex gap-8">
                    <Image src={histoire3} alt="Photo de l'entré de la cave" className="h-[180px]"></Image>
                    <p className="self-center">
                        {/* Nos 23 millésimes, à la fois semblables, car issu d'un même terroir et tout à la fois unique, tel les enfants d'une même famille. L'alchimie de notre sol silico-calcaire, nos cépages et notre façon de travailler, nous ont donné des Millésimes de 1988 à 2010, des vins de grande garde. Mais avec, chaque fois, une richesse aromatiques, une finesse en bouche et une puissante structure, différente. Mon épouse disait : "Ils sont vrais !". Cette expression leur convient, c'est la personnalité qui importe avant tout dans un vin, comme chez une personne. */}
                        La Grande Réserve, la Cuvée Sylviane et L’Orée des Collines.. dans les 23 années que nous vous proposons, sont à la fois semblables, car issus d’un même terroir telle une famille, et chaque Millésime 1988 à 2010 est unique, tel leurs enfants ! Mais différents dans  leur richesse aromatique, leur finesse et leur puissante structure en bouche. Mon épouse disait : « Ils sont vrais ! ». Cette expression leur convient parfaitement car, c’est la personnalité qui importe avant tout dans un vin… comme chez une personne !
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
