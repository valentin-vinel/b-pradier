import Image from "next/image"
import oreeImg from "../../public/cuvees/etq-oree.png"
import Link from "next/link"

export default function PresseOC() {
  const millesimes = [
    {
        title: "L'Orée des Collines 2009",
        description1: "Guide Bettane & Desseauve 2015 «... Les différentes cuvées produites ont toutes une expression très droite et au toucher fin. Puissant, épicé, bouche généreuse… » 14/20. Spécial vin Le Point, 15/20: « Fruits noirs compotés, bigarreau très mûrs, poivre, ample, dense charnu; fleurs sèches,, long, savoureux ».",
        description2: "Cuisine et Vins de France, sélection de 150 dans les 500 meilleures bouteilles: «... mûre à souhait, tout en volume, patinée de fruits noirs et de zen, au nez elle ajoute des notes de poivre. Affinée 1 an en fût, encore légèrement boisée en finale, elle exige… »",
        slug: "loree-des-collines-2009"
    },
    {
        title: "L'Orée des Collines 2007",
        description1: "Le Guide Bettane & Desseauve 2015, l’a sélectionné : « Les différentes cuvées produites ont toutes une expression très droite et au toucher fin. Des arômes floraux, des tannins raffinés, des notes de prune noire… » avec 14/20.",
        description2: "",
        slug: "loree-des-collines-2007"
    },
    {
        title: "L'Orée des Collines 2005",
        description1: "« Robe d’un rouge soutenu, mêlant fruits rouges confiturés, garrigues et épices… Les arômes persistent », Guide Gilbert & Gaillard 2009, note de 86/100.",
        description2: "",
        slug: "loree-des-collines-2005"
    },
    {
        title: "L'Orée des Collines 2004",
        description1: "« Notes discrètes de fruits rouges, attaque fraîche, structure souple, fine et élégante… » comme la qualifiait en 2006 , Vinum, le Guide des vins Suisse, en lui attribuant la note de 15/20.",
        description2: "",
        slug: "loree-des-collines-2004"
    },
    {
        title: "L'Orée des Collines 2003",
        description1: "Cuisine et Vins de France, dans son « Spécial hors série Foire aux vins », d’octobre 2011, conseille ce premier Millésime de L’Orée des Collines parmi les 150 bouteilles à acheter en disant: « Mûre à souhait, tout en volume, patinée de fruits noirs, au nez elle ajoute notes de poire affinée un an en fûts, encore légèrement boisée en finale, elle exige un à deux ans en cave pour parfaire son élevage ».",
        description2: "",
        slug: "loree-des-collines-2003"
    },
    {
        title: "L'Orée des Collines 2000",
        description1: "Guide Hachette des vins 2004: « La première impression est bonne et se confirme tout au long de la dégustation. Puissance, chaleur, maturité, équilibre, longueur pour ce vin très agréable, avec un nez qui s’ouvre sur des fruits mûrs… »",
        description2: "",
        slug: "loree-des-collines-2000"
    },
    {
        title: "Château d'Hugues Village 1998",
        description1: "Guide des vins Saveurs par Christian Flacelière: « … très joli nez de fruits rouges qui rééquilibre le côté cuir du grenache. Il a beaucoup de gras et d’acidité… »",
        description2: "",
        slug: "loree-des-collines-1998"
    },
    {
        title: "Château d'Hugues Village 1996",
        description1: "Distinguée dans Le Guide Hachette des Vins 1999* « Souvenez-vous: leur premier millésime reçu le coup de cœur dans le Guide Hachette 1991. Depuis, leur passion pour la vigne est régulièrement saluée. Ce 96 est vraiment bien fait. Il évolue sur le fruit sans que le bois domine. Les tannins sont fins, élégants et les arômes phénoliques s’ouvrent sur le grillé du fût puis affirment les épices… »",
        description2: "",
        slug: "loree-des-collines-1996"
    },
    // {
    //     title: "Château d'Hugues Village 1995",
    //     description1: "lorem ipsum",
    //     description2: "",
    //     slug: "loree-des-collines-1995"
    // },
    {
        title: "Château d'Hugues Village 1993",
        description1: "Distingué dans Le Guide Hachette des Vins 1997* « Coup de cœur en 1991, le Château d’Hugues n’est pas un inconnu ! Ici, il est présenté un 1993, millésime difficile, à la matière assez légère, mais bien vinifiée. Un vieillissement en fût de chêne bien maîtrisé lui donne un nez assez complexe où les notes boisées ne dominent pas, une bouche ronde ne domine pas, une bouche ronde et vanillée, de l’équilibre et une belle harmonie ! ».",
        description2: "",
        slug: "loree-des-collines-1993"
    },
  ]

  return (
    <div className="flex flex-col max-w-1/3 px-2 gap-6">
        <Image src={oreeImg} alt="Image de l'étiquette de L'Orée des Collines" className="img-shadow m-auto w-80 -rotate-5 my-12 max-w-[300px]"></Image>                
                {millesimes.map((millesime) => (
                    <article className="border p-2 mb-2" key={millesime.title}>
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
