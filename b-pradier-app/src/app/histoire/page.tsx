
import Image from "next/image";
import Header from "../../shared/Header";
import histoire1 from "../../../public/histoire/histoire1.png"
import histoire2 from "../../../public/histoire/histoire2.png"
import histoire3 from "../../../public/histoire/histoire3.png"
import Footer from "@/shared/Footer";

export const metadata = {
  title: "Histoire",
  description:
    "Explorez l'histoire de Bernard Pradier, du domaine et de son terroir remarquable. Découvrez l'origine des trois cuvées emblématiques, fruits d'une vision et d'un savoir-faire transmis depuis 1988.",
};

export default function Histoire() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>

            <Header />

            <main className="flex flex-col mt-auto lg:text-justify gap-8">
                <article className="flex flex-col gap-6 lg:gap-10 lg:flex-row">
                    <figure className="w-[280px] h-[210px] flex flex-col justify-center lg:translate-y-8 m-auto">
                        <Image src={histoire1} alt="Photo de l'entré de la cave" className="min-w-[280px]"></Image>
                        <figcaption className="text-xs text-center mt-2 -rotate-3 italic">Si vous êtes venu, l'entrée dans le temps... <br />le caveau de dégustation. B. P.</figcaption>
                    </figure>
                    <div>
                        <h2 className="text-red text-center my-2 text-2xl font-bold">- HISTORIQUE -</h2>
                        <p className="text-center lg:text-start lg:[text-align-last:justify]">
                            Un soir, où nous recevions des amateurs de vin, j'ai ouvert une bouteille de mon père, de 20 ans d'âge. Il « <em>faisait son vin</em> », pour la consommation  familiale et « <em>se faire plaisir !</em> ». Tout était artisanal : pas de contrôle œnologique, bouteilles et bouchons achetés à la droguerie... <br /> 
                            Le résultat était au « <em>petit bonheur la chance</em> », mais la magie du terroir avait déjà lieu ! <span className="hidden lg:inline"><br /></span>
                            Ils me dirent en dégustant: « <em>Qu'est ce que vous attendez pour faire votre vin !</em> ». L'idée germa. <span className="hidden lg:inline"><br /></span>
                            Peu de temps après Sylviane, mon épouse, me dit: « <em>Si nous créions notre cave !</em> ». C'est ainsi que nous avons pris la suite de nos parents. Au printemps commencèrent les travaux... 
                            <br /> Et, en septembre, nous vendangions, puis vinifions notre premier Millésime... le 1988 !
                        </p>
                    </div>
                </article>

                <article className="flex flex-col-reverse gap-6 lg:gap-10 items-center lg:flex-row mb-10 mx-auto">
                    <div>
                        <h2 className="text-red text-center my-2 text-2xl font-bold">- TERROIR -</h2>
                        <p className="text-center lg:text-start">
                            Exposées au flanc sud des collines du Massif d'Uchaux, arborées de pins, chênes, genévriers... Nos vignes bénéficiaient d'un terroir silico-calcaire, en Côtes du Rhône. Les vieux ceps, à petit rendement, étaient « taillés en gobelet » pour un meilleur ensoleillement. Les grappes, cueillies à la main, transportées en caisses, puis retriées sur table à la cave. S'en suivaient diverses cuvaisons pour donner des typicités « différentes et complémentaires », à chacune de nos trois cuvées de garde...
                        </p>
                    </div>
                    <figure className="w-[200px] h-[200px] flex flex-col justify-center lg:mb-0 lg:translate-y-10">
                        <Image src={histoire2} alt="Tableau de vignes taillées en gobelet" className="min-w-[220px] border-8 border-white m-auto"></Image>
                        <figcaption className="text-xs text-center mt-1"><span className="text-nowrap">- Ceps de vignes taillés en gobelets -</span> Tableau de B. P.</figcaption>
                    </figure>
                </article>

                <article className="flex flex-col gap-6 lg:gap-14 items-center lg:flex-row mb-10 mx-auto">
                    <figure className="h-[210px] flex flex-col justify-center w-fit lg:translate-y-10">
                        <Image src={histoire3} alt="Tableau Vendange à la main" className="min-w-[220px] border-8 border-white"></Image>
                        <figcaption className="text-xs text-center mt-1">- Vendange à la main - <br /> Tableau de B. P.</figcaption>
                    </figure>
                    <div className="max-w-[770px]">
                        <h2 className="text-red text-center my-2 text-2xl font-bold">- NOS TROIS CUVÉES DE GARDE -</h2>
                        <p className="text-center lg:text-start lg:[text-align-last:justify]">
                            ... <em>La Grande Réserve, La Cuvée Sylviane et L'Orée des Collines</em> dans les 23 années <span className="hidden lg:inline"><br /></span> que nous vous proposons, sont semblables car issues d'un même terroir, telles les membres d'une famille, et tout à la fois chaque Millésime de 1988 à 2010 est unique comme le sont leurs enfants !
                            Et donc différents dans leurs diversités aromatiques, dans leurs structures tanniques... leur harmonie d'ensemble. Mon épouse disait : <span className="hidden lg:inline"><br /></span>« <em>Ils sont vrais !</em> ». Cette expression leur convient à souhait, en effet c'est la personnalité qui importe avant tout dans un vin... tout comme chez une personne !
                        </p>
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
