import Link from "next/link";

export default function Origine({ title }: { title: string }) {
  if (title.includes("Grande Réserve")) {
    return (
      <p className="text-center px-1 lg:px-0">
        Comme son nom l'indique, <em>La Grande Réserve</em> est un vin de garde. <span className="hidden lg:inline"><br /></span> Issue d'une sélection nos vieilles vignes de plus de 40 ans d'âge et à petit rendement, établies en « <em>gobelets</em> » afin d'un meilleur ensoleillement de la souche... <Link href={'/histoire'} className="text-base lg:text-lg italic block md:inline">En savoir plus</Link>
      </p>
    );
  }

  if (title.includes("Cuvée Sylviane")) {
    return (
      <p className="text-center lg:max-w-[650px] m-auto  px-1 lg:px-0">
        En 1998, nous avons commencé à élaborer une cuvée plus tanique car issue de « <em>vendanges entières</em> ». Elle est un hommage à mon épouse Sylviane, représentée sur le visuel de l'étiquette... <Link href={'/histoire'} className="text-base lg:text-lg italic block md:inline">En savoir plus</Link>
      </p>
    );
  }

  if (title.includes("Orée des Collines")) {
    return (
      <p className="text-center lg:w-[750px] m-auto px-1 lg:px-0">
        Son nom est dû à l'exposition d'une partie de ses vignes sur le flanc sud de nos Collines, au terroir composé de grès siliceux et de grès calcaires. <span className="hidden lg:inline"><br /></span> Elle a obtenu en 2004 l'appellation « <em>Villages Massif d'Uchaux</em> »... <Link href={'/histoire'} className="text-base lg:text-lg italic block md:inline">En savoir plus</Link>
      </p>
    );
  }

  return <p className="italic text-gray-500">Informations à venir...</p>
}
