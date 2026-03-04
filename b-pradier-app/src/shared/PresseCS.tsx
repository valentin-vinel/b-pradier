import Image from "next/image"
import cuveeSylvianeImg from "../../public/cuvees/etq-cuvee-sylviane.png"
import Link from "next/link"

export default function PresseCS() {
  const millesimes = [
    {
        title: "La Cuvée Sylviane 2009",
        description1: "Guide Bettane & Desseauve 2015 «... Les différentes cuvées produites ont toutes une expression très droite et au toucher fin » Note 14/20.",
        description2: "",
        slug: "la-cuvee-sylviane-2009"
    },
    // {
    //     title: "La Cuvée Sylviane 2006",
    //     description1: "lorem ipsum",
    //     description2: "",
    //     slug: "la-cuvee-sylviane-2006"
    // },
    {
        title: "La Cuvée Sylviane 2000",
        description1: "The WINE ADVOCATE 2001 de Robert Parker: « J’ai goûté les vins de ce producteur, en faible quantité sur le marché, que j’ai tous trouvé plaisant, mais celui là est sortit du lot. La cuvée Sylviane 2000, aux notes de cerises noires et cassis est ample en bouche bien que pas très complexe, avec un gras admirable et une grande pureté. »",
        description2: "",
        slug: "la-cuvee-sylviane-2000"
    },
  ]

  return (
    <div className="flex flex-col max-w-1/3 px-2 gap-6">
                <Image src={cuveeSylvianeImg} alt="Image de l'étiquette de La Cuvée Sylviane" className="img-shadow m-auto w-80 -rotate-5 my-12 max-w-[300px]"></Image>
                
                {millesimes.map((millesime) => (
                    <article className="border p-2 mb-2"  key={millesime.title}>
                        <h3 className="text-secondary text-center mb-2">
                            <Link href={`millesimes/${millesime.slug}`} className="font-bold ">{millesime.title}</Link>
                        </h3>
                        <p className="mb-1">
                             {millesime.description1}
                        </p>
                        <p>
                            {millesime.description2}
                        </p>
                    </article>
                ))}
            </div>
  )
}
