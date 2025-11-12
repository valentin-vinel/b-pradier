"use client";
import Image from "next/image";
import Header from "../../shared/Header";
import grandeReserveImg from "../../../public/cuvees/etq-grande-reserve.png"
import cuveeSylvianeImg from "../../../public/cuvees/etq-cuvee-sylviane.png"
import oreeImg from "../../../public/cuvees/etq-oree.png"
import Footer from "@/shared/Footer";

export default function Cuvees() {
    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed top-0 left-0 w-full h-full bg-[#FFFBEB]/40 z-[-1]"></div>

            <Header />

            <main className="flex flex-col gap-4 mt-6 text-center lg:text-justify">
                <h2 className="text-2xl text-center text-red font-bold">NOS TROIS CUVÉES DE GARDE « DIFFÉRENTES... ET COMPLÉMENTAIRES »</h2>
                <p className="mb-4 max-w-[825px] mx-auto [text-align-last:justify]">
                    Pourquoi complémentaires ? Parce qu'elles sont telles des « <em>Poupées Russes</em> », mais imbriquées à l'inverse des étiquettes présentées ci-dessous. C'est-à-dire que <br /> <em>La Grande Réserve est dans La Cuvée Sylviane et celles-ci sont dans L'Orée des Collines !</em>
                </p>

                <div className="flex flex-col gap-14 my-10 ">
                    <article className="flex flex-col gap-8 justify-between mb-10">
                        <h3 className="text-2xl font-bold text-center" id="grande-reserve">LA GRANDE RÉSERVE</h3>
                        <Image src={grandeReserveImg} alt="Photo de l'entré de la cave" className="img-shadow m-auto w-80 md:w-[350px] md:h-[150px] -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <p className="max-w-[820px]">
                                Son nom l'indique c'est un vin de garde, issu d'une longue cuvaison de trois semaines. Le mariage Syrah et Grenache, nous donne une couleur soutenue avec une palette d'arômes de petits fruits noirs et rouges. Nous avons choisi de ne pas l'élever en fut, pour lui conserver toute sa fraîcheur. Sa bouche riche en fruits confiturés et d'épices, accompagnera un magret de canard, des pièces de bœuf... même un poisson bleu !
                            </p>
                        </div>
                    </article>

                    <article className="flex flex-col gap-8 justify-between mb-10">
                        <h3 className="text-2xl font-bold text-center" id="cuvee-sylviane">LA CUVÉE SYLVIANE</h3>
                        <Image src={cuveeSylvianeImg} alt="Photo de l'entré de la cave" className="img-shadow m-auto w-80 md:w-[350px] md:h-[150px] -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <p className="max-w-[820px] ">
                                En 1998, nous avons vinifié une cuvée en hommage à mon épouse Sylviane. Alliance de Grenache, Syrah et Mourvèdre, vendangés plus tardivement et vinifiés « <em>sans éraflage, ni passage en fûts de chêne</em> », pour lui conserver toute son authenticité. Un vin puissant, structuré et riche aux arômes de réglisse, d'une touche poivrée... Sur les plats régionaux traditionnels, comme pôt-au-feu, daubes et gibiers à poil en sauce au vin...
                            </p>
                        </div>
                    </article>

                    <article className="flex flex-col gap-8 justify-between mb-10">
                        <h3 className="text-2xl font-bold text-center"  id="oree-des-collines">L'ORÉE DES COLLINES</h3>
                        <Image src={oreeImg} alt="Photo de l'entré de la cave" className="img-shadow m-auto w-80 md:w-[350px] md:h-[150px] -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center mt-4">
                            <p className="max-w-[820px] [text-align-last:justify]">
                                Son nom est dû à l'exposition d'une partie des vignes sur le flanc sud de nos Collines, <br />au terroir composé de grès siliceux et de grès calcaires. Il a obtenu en 2004 l'appellation <span className="text-nowrap">« <em>Village Massif d'Uchaux</em> »</span>. Assemblage identique à La Cuvée Sylviane, mais <span className="">« <em>élevée en fûts</em> »</span>, lui donne une élégance, où se mêlent fruits noirs confiturés, notes de garrigue, d'épices douces... Sur viandes blanches, agneau, volailles, gibiers à plumes... et fromages!
                            </p>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
