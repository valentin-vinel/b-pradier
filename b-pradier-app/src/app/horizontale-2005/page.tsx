"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import bouteilles from "../../../public/millesimes/bouteilles-2.png"
import Footer from "@/shared/Footer";

export default function Cuvees() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>

            <Header />

            <main className="text-justify">
                <h2 className="text-center text-red mt-6 mb-4 text-2xl font-bold">« L'HORIZONTALE » CHÂTEAU D'HUGUES MILLÉSIME 2005.</h2>
                <p className="max-w-[1250px] m-auto">
                    Voici les commentaires du 18 octobre 2025, de « <em>L'Horizontale millésime 2005</em> », avec l'oenologue  Olivier Roustang et sa collaboratrice Lydie Gauthier, confirmé le lendemain par deux couples clients, d'âges différents, et avec 3 verres plus classiques. J'ai poursuivi seul cette « <em>Horizontale</em> » jusqu'au WE suivant. Et elles ont peu évolué après 7 jours ! J'aurais aimé poursuivre leur dégustation... mais il ne restais que des fonds pour les deux repas du lundi !
                </p>

                <section className="py-10 text-center border-b">
                    <h3 className="text-center text-red mb-4 text-secondary text-2xl">Premier verre, la GRANDE RESERVE 2005</h3>
                    <figure className="m-auto text-center mb-8 ">
                        <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                        <figcaption className="text-base my-2">Première bouteille à gauche de la photo non contractuelle, ci-dessus.</figcaption>
                        <p className="text-base">13.5% vol | Bouteille de 750 ml | Contient des sulfites | Product of France</p>
                    </figure>

                    <h4 className="text-red text-secondary">- Aspect visuel -</h4>
                    <p className="mb-4">Limpide, la robe est d'un rouge intense, couleur chaude, aspect Terracota.</p>

                    <h4 className="text-red text-secondary">- Au nez -</h4>
                    <p className="mb-4">Expressif volubile de fruits à noyau à l'eau de vie, légèrement kirché, puis fève de cacao, noix muscade, notes d'herbes de provence, de genévrier et autres résineux du Massif d'Uchaux.</p>

                    <h4 className="text-red text-secondary">- En bouche -</h4>
                    <p className="mb-4">Attaque franche et souple, touches d'épices douces, tout en équilibre, entre sucrosité et fraîcheur, tannins veloutés, arrondis...</p>

                    <h4 className="text-red text-secondary">- En conclusion -</h4>
                    <p className="mb-4">Un vin frais, long, équilibré et harmonieux 8,5/10. Garde encore au moins 5 ans.</p>

                    <h4 className="text-red text-secondary">- Accord vin / mets -</h4>
                    <p className="mb-4">Toute indiquée pour épouser un magret de canard, une côte de bœuf ou une recette de ma grand-mère du bœuf à l'anchois !</p>
                </section>

                <section className="py-10 text-center border-b">
                    <h3 className="text-center text-red mb-4 text-secondary">Dans le deuxième verre LA CUVÉE SYLVIANE 2005</h3>
                    <figure className="m-auto text-center mb-8 ">
                        <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                        <figcaption className="text-base my-2">Bouteille au centre de la photo non contractuelle, ci-dessus.</figcaption>
                        <p className="text-base">13.5% vol | Bouteille de 750 ml | Contient des sulfites | Product of France</p>
                    </figure>

                    <h4 className="text-red text-secondary">- Aspect visuel -</h4>
                    <p className="mb-4">À la robe rubis avec des reflets brique... et limpide aussi !</p>

                    <h4 className="text-red text-secondary">- Au nez -</h4>
                    <p className="mb-4">D'emblée très aérien... Expressif, volubile... Beaucoup de fraîcheur, des fruits frais : griotte, figue. Avec un côté floral de pivoine, rose de Damas, bâton de canelle, huile d'olive...</p>

                    <h4 className="text-red text-secondary">- En bouche -</h4>
                    <p className="mb-4">Dense, de la fraîcheur, tannins denses, soyeux et persistants qui prolongent la bouche très robustes, édifice taillé pour la garde, un côté tubéreux du fait de la vendange entière...</p>

                    <h4 className="text-red text-secondary">- En conclusion -</h4>
                    <p className="mb-4">Une bouche ample de fruits aux tannins puissants.. Note 9/10; Garde encore 5 à 8 ans</p>

                    <h4 className="text-red text-secondary">- Accord vin / mets -</h4>
                    <p className="mb-4">Tous les plats traditionnels, comme en cette saison une Daube au vin, marinés même dans une Grande Réserve 2005, pour son fruit, longtemps et cuite... tout doucement!</p>
                </section>

                <section className="py-10 text-center">
                    <h3 className="text-center text-red mb-4 text-secondary">Troisième verre, L'ORÉE DES COLLINES 2005</h3>
                    <figure className="m-auto text-center mb-8 ">
                        <Image src={bouteilles} alt="Photo des bouteilles de nos 3 cuvées, non contractuelle." className="m-auto w-[200px] shadow-2xl border-bouteille relative"></Image>
                        <figcaption className="text-base my-2">Troisième bouteille de la photo non contractuelle, ci-dessus</figcaption>
                        <p className="text-base">13.5% vol | Bouteille de 750 ml | Contient des sulfites | Product of France</p>
                    </figure>

                    <p className="mb-4">Le guide des vins Gilbert & Gaillard 2009 lui avait attribué 86/100: « <em>... nez épanoui, mêlant fruits rouges confiturés, notes garrigues et d'épices. On apprécie son ampleur, souplesse. Les arômes sont nets et persistent agréablement</em> ».</p>

                    <h4 className="text-red text-secondary">- Aspect visuel -</h4>
                    <p className="mb-4">Limpide, couleur rouge grenat profond...</p>

                    <h4 className="text-red text-secondary">- Au nez -</h4>
                    <p className="mb-4">Très expressif, « <em>qui vient à soi</em> », impression de chocolat sucrant, de ésineux rappelant le Benjoin....</p>

                    <h4 className="text-red text-secondary">- En bouche -</h4>
                    <p className="mb-4">Encore une belle fraîcheur... de jeunesse! Attaque franche avec de suite, un rappel de fruits. Tannins fermes et robustes qui soutiennent un édifice qui a encore du chemin à parcourir...</p>

                    <h4 className="text-red text-secondary">- En conclusion -</h4>
                    <p className="mb-4">Un vin qui a de l'identité, de la dimension et de la profondeur... Équilibré, alliant force et douceur, ce que confirme sa persistance.</p>

                    <h4 className="text-red text-secondary">- Accord vin / mets -</h4>
                    <p className="mb-4">Viandes blanches, volailles et gibiers à plumes rôtis... et un plateau de fromages.</p>
                </section>


            </main>

            <Footer />
        </div>
    );
}
