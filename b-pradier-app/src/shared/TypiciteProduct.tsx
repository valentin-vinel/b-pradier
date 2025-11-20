import Link from "next/link";

export default function Typicite({ title }: { title: string }) {
  if (title.includes("Grande Réserve")) {
    return (
        <p className="text-center lg:w-[670px] m-auto">
            Longue cuvaison traditionnelle de trois semaines, de Syrah et Grenache lui donne sa couleur soutenue et une palette d'arômes complexes. <span className="hidden lg:inline"><br /></span> Nous avons choisi de ne pas l'élever en fût, pour lui conserver son authenticité et sa fraîcheur... <Link href={'/cuvees#grande-reserve'} className="text-base lg:text-lg italic block md:inline">En savoir plus</Link>
        </p>
    );
  }

  if (title.includes("Cuvée Sylviane")) {
    return (
        <p className="text-center lg:w-[650px] m-auto">
            Alliance de Grenache, Syrah et Mourvèdre, vendangés plus tardivement et vinifiés sans éraflage, comme avant, ni passage en fûts de chêne, pour lui conserver toute son authenticité... <Link href={'/cuvees#cuvee-sylviane'} className="text-base lg:text-lg italic block md:inline">En savoir plus</Link>
        </p>
    );
  }

  if (title.includes("Orée des Collines")) {
    return (
        <p className="text-center lg:w-[730px] m-auto">
            Assemblage identique à La Cuvée Sylviane, mais « élevée en fûts », lui donne une élégance, du à ses tannins arrondies par le bois, où se mêlent fruits noirs confiturés, notes de garrigue, d'épices douces... <Link href={'/cuvees#oree-des-collines'} className="text-base lg:text-lg italic block md:inline">En savoir plus</Link>
        </p>
    );
  }

  return <p className="italic text-gray-500">Informations à venir...</p>
}
