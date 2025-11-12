import Link from "next/link";

export default function Origine({ title }: { title: string }) {
  if (title.includes("Grande Réserve")) {
    return (
      <p className="text-center">
        Comme son nom l'indique, <em>La Grande Réserve</em> est un vin de garde. <br /> Issue d'une sélection nos vieilles vignes de plus de 40 ans d'âge et à petit rendement, établies en « <em>gobelets</em> » afin d'un meilleur ensoleillement de la souche... <Link href={'/histoire'} className="text-lg italic">En savoir plus</Link>
      </p>
    );
  }

  if (title.includes("Cuvée Sylviane")) {
    return (
      <p className="text-center lg:max-w-[600px] m-auto">
        En 1988, nous avons élaborer une cuvée plus tanique car issue de « <em>vendanges entières</em> ». Elle est un hommage à mon épouse Sylviane, représentée sur le visuel de l'étiquette... <Link href={'/histoire'} className="text-lg italic">En savoir plus</Link>
      </p>
    );
  }

  if (title.includes("orée des Collines")) {
    return (
      <p className="text-center lg:w-[750px] m-auto">
        En 1996, l'association locale de vignerons, consciente de la spécificité du terroir, a déposé une demande d'Appellation Villages. Ainsi, le 23 Août 2005, par décret ministériel, est née notre appellation... « <em>Massif d'Uchaux</em> ». <Link href={'/histoire'} className="text-lg italic">En savoir plus</Link>
      </p>
    );
  }

  return <p className="italic text-gray-500">Informations à venir...</p>
}
