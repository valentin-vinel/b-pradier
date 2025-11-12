import Link from "next/link";

export default function Typicite({ title }: { title: string }) {
  if (title.includes("Grande Réserve")) {
    return (
        <p className="text-center lg:w-[670px] m-auto">
            Longue cuvaison traditionnelle de trois semaines, de Syrah et Grenache lui donne sa couleur soutenue et une palette d'arômes complexes. <br /> Nous avons choisi de ne pas l'élever en fût, pour lui conserver son authenticité et sa fraîcheur... <Link href={'/cuvees#grande-reserve'} className="italic text-lg">En savoir plus</Link>
        </p>
    );
  }

  if (title.includes("Cuvée Sylviane")) {
    return (
        <p className="text-center lg:w-[620px] m-auto">
            Alliande de Grenache, Syrah et Mourvèdre, vendangés plus tardivement et vinifiés « sans éraflage, ni passage en fûts de chêne », pour lui conserver toute son authenticité... <Link href={'/cuvees#cuvee-sylviane'} className="italic text-lg">En savoir plus</Link>
        </p>
    );
  }

  if (title.includes("orée des Collines")) {
    return (
        <p className="text-center lg:w-[730px] m-auto">
            Son nom est dû à l'exposition d'une partie des vignes sur le flanc sud de nos Collines, au terroir composé de grès siliceux et de grès calcaires. Il a obtenu en 2004 l'appellation « <em>Village Massif d'Uchaux</em> »... <Link href={'/cuvees#oree-des-collines'} className="italic text-lg">En savoir plus</Link>
        </p>
    );
  }

  return <p className="italic text-gray-500">Informations à venir...</p>
}
