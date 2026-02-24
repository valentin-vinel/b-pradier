import Image from "next/image"
import cuveeSylvianeImg from "../../public/cuvees/etq-cuvee-sylviane.png"
import Link from "next/link"

export default function PresseCS() {
  const millesimes = [
    {
        title: "La Cuvée Sylviane 2009",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-2009"
    },
    {
        title: "La Cuvée Sylviane 2006",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-2006"
    },
    {
        title: "La Cuvée Sylviane 2000",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-2000"
    },
    {
        title: "La Cuvée Sylviane 1994",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-1994"
    },
    {
        title: "La Cuvée Sylviane 1993",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-1993"
    },
    {
        title: "La Cuvée Sylviane 1992",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-1992"
    },
    {
        title: "La Cuvée Sylviane 1991",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-1991"
    },
    {
        title: "La Cuvée Sylviane 1990",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-1990"
    },
    {
        title: "La Cuvée Sylviane 1988",
        description: "lorem ipsum",
        slug: "la-cuvee-sylviane-1988"
    },
  ]

  return (
    <div className="flex flex-col max-w-1/3 px-2">
                <Image src={cuveeSylvianeImg} alt="Image de l'étiquette de La Cuvée Sylviane" className="img-shadow m-auto w-80 -rotate-5 my-12 max-w-[300px]"></Image>
                
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
