import Image from "next/image"
import grandeReserveImg from "../../public/cuvees/etq-grande-reserve.png"
import Link from "next/link"

export default function PresseGR() {
  const millesimes = [
    {
        title: "Grande Réserve 2008",
        description: "lorem ipsum",
        slug: "la-grande-reserve-2008"
    },
    {
        title: "Grande Réserve 2007",
        description: "lorem ipsum",
        slug: "la-grande-reserve-2007"
    },
    {
        title: "Grande Réserve 2006",
        description: "lorem ipsum",
        slug: "la-grande-reserve-2006"
    },
    {
        title: "Grande Réserve 2001",
        description: "lorem ipsum",
        slug: "la-grande-reserve-2001"
    },
    {
        title: "Grande Réserve 2000",
        description: "lorem ipsum",
        slug: "la-grande-reserve-2000"
    },
    {
        title: "Grande Réserve 1999",
        description: "lorem ipsum",
        slug: "la-grande-reserve-1999"
    },
    {
        title: "Grande Réserve 1998",
        description: "lorem ipsum",
        slug: "la-grande-reserve-1998"
    },
    {
        title: "Grande Réserve 1996",
        description: "lorem ipsum",
        slug: "la-grande-reserve-1996"
    },
    {
        title: "Grande Réserve 1995",
        description: "lorem ipsum",
        slug: "la-grande-reserve-1995"
    }
  ]

  return (
    <div className="flex flex-col max-w-1/3 px-2">
                <Image src={grandeReserveImg} alt="Image de l'étiquette de La Grande Réserve" className="img-shadow m-auto w-80 -rotate-5 my-12 max-w-[300px]"></Image>
                
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
