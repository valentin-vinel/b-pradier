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
                <h2 className="text-2xl text-center text-red">NOS TROIS DIFFERENTES CUVEES DE GRANDE GARDE... ET « COMPLEMENTAIRES »</h2>
                <p className="mb-8 max-w-[800px] mx-auto">Pourquoi complémentaires ? Parce qu'elles sont telles des « Poupées Russes », mais imbriquées à l'inverse des étiquettes présentées ci-dessous. C'est-à-dire que la Grande Réserve est dans la cuvée Sylviane et celles-ci sont dans L'Orée des Collines !</p>

                <div className="flex flex-col gap-16 my-10 ">
                    <article className="flex flex-col gap-8 justify-between mb-10">
                        <h3 className="text-xl font-bold text-red text-center">LA GRANDE RÉSERVE</h3>
                        <Image src={grandeReserveImg} alt="Photo de l'entré de la cave" className="img-shadow m-auto w-80 md:w-[350px] md:h-[150px] -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p className="max-w-[800px]">
                                Son nom l’indique c’est un vin de garde, issu d’une longue cuvaison de trois semaines. Le mariage Syrah et Grenache, nous donne une couleur soutenue avec une palette d’arômes de petits fruits noirs et rouges. Nous avons choisi de ne pas l’élever en fut, pour lui conserver toute sa fraîcheur. Sa bouche riche en fruits confiturés et épices, accompagnera un magret de canard, des pièces de bœuf...
                            </p>
                        </div>
                    </article>

                    <article className="flex flex-col gap-8 justify-between mb-10">
                        <h3 className="text-xl font-bold text-red text-center">LA CUVÉE SYLVIANE</h3>
                        <Image src={cuveeSylvianeImg} alt="Photo de l'entré de la cave" className="img-shadow m-auto w-80 md:w-[350px] md:h-[150px] -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p className="max-w-[800px]">
                                En 1998, nous avons vinifié une cuvée en hommage à mon épouse Sylviane. Alliance de Grenache, Syrah et Mourvèdre, vendangés plus tardivement et vinifiés sans éraflage, ni passage en fûts de chêne, pour lui conserver son authenticité. Un vin puissant, structuré et riche aux arômes de réglisse, et d’une touche poivrée. Sur les plats régionaux comme un pôt-au-feu, les daubes et gibiers à poil sauce au vin rouge.
                            </p>
                        </div>
                    </article>

                    <article className="flex flex-col gap-8 justify-between mb-10">
                        <h3 className="text-xl font-bold text-red text-center">L'ORÉE DES COLLINES</h3>
                        <Image src={oreeImg} alt="Photo de l'entré de la cave" className="img-shadow m-auto w-80 md:w-[350px] md:h-[150px] -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <p className="max-w-[800px]">
                                Son nom est dû à l’exposition d’une partie des vignes sur le flanc sud de nos Collines. Composée de grès siliceux et grès calcaires a obtenu en 2004 l’appellation Village Massif d’Uchaux. Assemblage identique à La Cuvée Sylviane, mais élevée en fûts, lui donne une élégance, où se mêlent fruits noirs confiturés, notes de garrigue, d’épices douces... Sur viandes blanches, agneau, volailles, gibiers à plumes... et fromages!
                            </p>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
