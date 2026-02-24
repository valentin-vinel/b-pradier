import Image from "next/image"
import oreeImg from "../../public/cuvees/etq-oree.png"
import Link from "next/link"

export default function PresseOC() {
  const millesimes = [
    {
        title: "L'Orée des Collines 2009",
        description: "lorem ipsum",
        slug: "loree-des-collines-2009"
    },
    {
        title: "L'Orée des Collines 2008",
        description: "lorem ipsum",
        slug: "loree-des-collines-2008"
    },
    {
        title: "L'Orée des Collines 2005",
        description: "lorem ipsum",
        slug: "loree-des-collines-2005"
    },
    {
        title: "L'Orée des Collines 2004",
        description: "lorem ipsum",
        slug: "loree-des-collines-2004"
    },
    {
        title: "L'Orée des Collines 2003",
        description: "lorem ipsum",
        slug: "loree-des-collines-2003"
    },
    {
        title: "L'Orée des Collines 2000",
        description: "lorem ipsum",
        slug: "loree-des-collines-2000"
    },
    {
        title: "Château d'Hugues Village 1998",
        description: "lorem ipsum",
        slug: "loree-des-collines-1998"
    },
    {
        title: "Château d'Hugues Village 1996",
        description: "lorem ipsum",
        slug: "loree-des-collines-1996"
    },
    {
        title: "Château d'Hugues Village 1995",
        description: "lorem ipsum",
        slug: "loree-des-collines-1995"
    },
    {
        title: "Château d'Hugues Village 1993",
        description: "lorem ipsum",
        slug: "loree-des-collines-1993"
    },
  ]

  return (
    <div className="flex flex-col max-w-1/3 px-2">
        <Image src={oreeImg} alt="Image de l'étiquette de L'Orée des Collines" className="img-shadow m-auto w-80 -rotate-5 my-12 max-w-[300px]"></Image>                
                {millesimes.map((millesime) => (
                    <article>
                        <p>
                            <Link href={`millesimes/${millesime.slug}`} className="font-bold">{millesime.title}
                            </Link>: {millesime.description}
                        </p>
                    </article>
                ))}
            </div>
  )
}
