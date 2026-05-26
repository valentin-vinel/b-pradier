"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import bouteilles from "../../../public/millesimes/bouteilles-2.png";
import Footer from "@/shared/Footer";

export default function Horizontale() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>

            <Header />

            <main className="text-justify">
                <h2 className="text-center text-red mt-6 mb-4 text-2xl font-bold">« HORIZONTALE CHÂTEAU D'HUGUES MILLÉSIME 2006 »</h2>
                <p className="m-auto max-w-[1125px]">
                    Vous découvrirez ci-dessous, les appréciations de la dégustation du 18 avril 2026, par l'oenologue Olivier Roustang et sa collaboratrice Lydie Gauthier. Celles-ci ont été confirmé le lendemain par deux couples clients, d'âges différents, servi dans des verres classiques. J'ai poursuivi cette «
                    <em>Horizontale</em> » jusqu'au WE suivant. Ils ont peu évolué après 7 jours ! J'aurais aimé poursuivre cette dégustation « <em>en ligne</em> »... mais il ne restais que des fonds pour les deux repas du lundi !
                </p>

                <section className="py-10 text-center border-b">
                    <h3 className="text-center text-red mb-4 text-secondary text-2xl">Premier verre, LA GRANDE RESERVE 2006</h3>
                    <figure className="m-auto text-center mb-8 ">
                        <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                        <figcaption className="text-base mt-2">Première bouteille à gauche, ci-dessus, de la photo non contractuelle.</figcaption>
                        <p className="text-base">13.5% vol. Bouteille de 750 ml. Contient des sulfites. Product of France</p>
                    </figure>

                    <h4 className="text-red text-secondary text-[22px]">- Aspect visuel -</h4>
                    <p className="mb-4">Excellent état de conservation du bouchon. Excellent état de conservation du bouchon. <br />La robe est d'un rouge intense, couleur chaude, aspect Terracota...</p>

                    <h4 className="text-red text-secondary text-[22px]">- Au nez -</h4>
                    <p className="mb-4">
                        Expressif, volubile, cerises confites à l'eau de vie, légèrement kirché, fève de cacao, café. <br />
                        Complexe, baie de santa, belle longueur.
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- En bouche -</h4>
                    <p className="mb-4">Attaque souple, touches d'épices douces, tout en profondeur, entre sucrosité et fraîcheur, tannins veloutés, arrondis...</p>

                    <h4 className="text-red text-secondary text-[22px]">- En conclusion -</h4>
                    <p className="mb-4">Belle évolution. Un vin frais, long, équilibré et harmonieux 8,5/10. Garde, encore au moins 5 ans.</p>

                    <h4 className="text-red text-secondary text-[22px]">- Accord vin / mets -</h4>
                    <p className="mb-4">Toute indiquée pour épouser magret de canard, côte de bœuf... Et en apéritif avec une terrine de campagne.</p>
                </section>

                <section className="py-10 text-center border-b">
                    <h3 className="text-center text-red mb-4 text-secondary text-2xl">Deuxième verre, LA CUVÉE SYLVIANE 2006</h3>
                    <figure className="m-auto text-center mb-8 ">
                        <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                        <figcaption className="text-base mt-2">Bouteille au centre, ci-dessus, de la photo non contractuelle.</figcaption>
                        <p className="text-base">13.5% vol. Bouteille de 750 ml. Contient des sulfites. Product of France</p>
                    </figure>

                    <h4 className="text-red text-secondary text-[22px]">- Aspect visuel -</h4>
                    <p className="mb-4">Excellent état de conservation du bouchon. Vin à la robe rubis avec des reflets brique... et limpide aussi !</p>

                    <h4 className="text-red text-secondary text-[22px]">- Au nez -</h4>
                    <p className="mb-4">
                        D'emblée très aérien... Expressif, volubile... Beaucoup de fraîcheur, des fruits frais, griotte, figue... <br /> Avec un côté floral de pivoine, rose de Damas, bâton de canelle, huile d'olive...
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- En bouche -</h4>
                    <p className="mb-4">
                        Dense, de la fraîcheur, tannins denses, soyeux et persistants qui prolongent la bouche très robustes, <br />
                        édifice taillé pour la garde, un côté tubéreux du fait de la vendange entière...
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- En conclusion -</h4>
                    <p className="mb-4">Belle évolution. Une bouche ample de fruits aux tannins puissants.. Note 9/10; Garde encore 5 à 8 ans</p>

                    <h4 className="text-red text-secondary text-[22px]">- Accord vin / mets -</h4>
                    <p className="mb-4">
                        Tous les plats traditionnels, comme en cette saison une Daube au vin, marinés même dans une Grande Réserve 2006, <br />
                        pour son fruit, longtemps et cuite... tout doucement!
                    </p>
                </section>

                <section className="py-10 text-center">
                    <h3 className="text-center text-red mb-4 text-secondary text-2xl">Troisième verre, L'ORÉE DES COLLINES 2006</h3>
                    <figure className="m-auto text-center mb-8 ">
                        <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                        <figcaption className="text-base mt-2">Troisième bouteille, ci-dessus, de la photo non contractuelle</figcaption>
                        <p className="text-base">13.5% vol. Bouteille de 750 ml. Contient des sulfites. Product of France</p>
                    </figure>

                    <p className="mb-4">
                        Le guide des vins Gilbert & Gaillard 2009 lui avait attribué 86/100: « <em>... nez épanoui, mêlant fruits rouges confiturés, notes garrigues et d'épices. On apprécie son ampleur, souplesse. Les arômes sont nets et persistent agréablement</em> ».
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- Aspect visuel -</h4>
                    <p className="mb-4">Belle ampleur, belle brillance. Couleur rouge grenat profond...</p>

                    <h4 className="text-red text-secondary text-[22px]">- Au nez -</h4>
                    <p className="mb-4">
                        Très expressif, « <em>qui vient à soi</em> ». Épices poivre noir, noix muscade... Bouton de rose.
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- En bouche -</h4>
                    <p className="mb-4">
                        Équilibré. Encore une belle fraîcheur... de jeunesse! Attaque franche avec un rappel de fruits. Tannins fermes et robustes qui soutiennent un édifice qui a encore du chemin à parcourir...
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- En conclusion -</h4>
                    <p className="mb-4">
                        Belle évolution. Un vin qui a de l'identité, de la dimension et de la profondeur... <br />
                        Équilibré, alliant force et douceur, ce que confirme sa persistance.
                    </p>

                    <h4 className="text-red text-secondary text-[22px]">- Accord vin / mets -</h4>
                    <p className="mb-4">Grillades d'agneau, viandes blanches, volailles et gibiers à plumes rôtis... plateau de fromages.</p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
