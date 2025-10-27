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
            <Header />

            <main className="flex flex-col gap-2 mt-4">
                <h2 className="text-2xl text-center font-bold">LES 3 TYPES DE CUVÉE DU CHÂTEAU D'HUGUES</h2>
                <p className="mb-8">Pourquoi complémentaires ? Parce qu'elles sont comme des « Poupées Russes », mais imbriquées à l'inverse des étiquettes présentées ci-dessous, c'est à dire que la Grande Réserve est dans la cuvée Sylviane et celles-ci sont dans L'Orée des Collines !</p>

                <div className="flex flex-col gap-8">
                    <article className="flex gap-8 justify-between">
                        <Image src={grandeReserveImg} alt="Photo de l'entré de la cave" className="img-shadow w-[350px] h-[150px]  -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h3 className="text-xl font-bold">La Grande Réserve</h3>
                            <p className="self-center">
                                Son nom l'indique, c'est un vin de garde, issu d'une longue cuvaison de trois semaines. Le mariage Syrah et Grenache, nous donne une couleur soutenue avec une palette d'arômes complexes. Nous avons choisi de ne pas l'élever en fut, pour lui conserver toute sa fraîcheur. Sa bouche riche de fruits confiturés et d'épices, accompagnera un magret de canard, ainsi que des pièces de bœuf.
                            </p>
                        </div>
                    </article>

                    <article className="flex gap-8">
                        <Image src={cuveeSylvianeImg} alt="Photo de l'entré de la cave" className="img-shadow w-[350px] h-[150px]  -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h3 className="text-xl font-bold">La Cuvée Sylviane</h3>
                            <p className="self-center">
                                En 1998, nous avons vinifié une cuvée en hommage à mon épouse Sylviane. Alliance de Grenache, Syrah et Mourvedre, vendangés tardivement et vinifiée sans éraflage, ni passage en fûts de chêne, pour lui conserver son authenticité. Un vin puissant, structuré et riche aux arômes de réglisse, et d'une touche poivrée. Sur les plats régionaux, les viandes et gibiers, sauces au vin rouge.
                            </p>
                        </div>
                    </article>

                    <article className="flex gap-8 mb-8">
                        <Image src={oreeImg} alt="Photo de l'entré de la cave" className="img-shadow w-[350px] h-[150px]  -rotate-5"></Image>
                        <div className="flex flex-col justify-center items-center gap-2">
                            <h3 className="text-xl font-bold">L'orée des Collines</h3>
                            <p className="self-center">
                                Son nom est dû à l’exposition de ses vignes sur le flanc sud de nos "Collines". Composée de grès siliceux et de grés calcaires a obtenu l’appellation Villages Massif d’Uchaux. Même assemblage que la Cuvée Sylviane, mais élevée  en fûts, lui donne une élégance et finesse, où se mêlent fruits confiturés, notes de garrigue, d’épices douces… Sur viandes blanches, agneau, et fromages.
                            </p>
                        </div>
                    </article>
                </div>
            </main>

            <Footer />
        </div>
    );
}
