import Image from "next/image"
import grandeReserveImg from "../../public/cuvees/etq-grande-reserve.png"
import Link from "next/link"

export default function PresseGR() {
  const millesimes = [
    {
        title: "La Grande Réserve 2008",
        description1: "« …accents truffés et chocolatés…», comme le soulignait déjà en 2014 le guide Bettane & Desseauve (note : 14,5/20).",
        description2: "",
        slug: "la-grande-reserve-2008"
    },
    {
        title: "La Grande Réserve 2007",
        description1: "Le Guide Bettane & Desseauve 2015, son « Coup de cœur » 15/20, « Couleur profonde, arôme floral noble, note de prune ».",
        description2: " Le Guide Vins Vallée du Rhône: avec *** « Expressif, fruits compotés, attaque souple, épicé, tanins fins ».",
        slug: "la-grande-reserve-2007"
    },
    {
        title: "La Grande Réserve 2006",
        description1: "« … robe soutenue, petits fruits rouges, notes d’épices et garrigue … » Guide Gilbert & Gaillard 2009 ( note 82/100 ).",
        description2: "",
        slug: "la-grande-reserve-2006"
    },
    {
        title: "La Grande Réserve 2001",
        description1: "La Revue du Vin France 2010, l’a classée dans « les 100 bouteilles exceptionnelles millésimes 1971 à 2002 », note 16/20, et pour commentaires « noblesse aromatique digne d’un cru… ».",
        description2: "",
        slug: "la-grande-reserve-2001"
    },
    {
        title: "La Grande Réserve 2000",
        description1: "Dans « The WINE ADVOCATE 2001 » de Robert Parker: « J’ai goûté les vins de ce producteur, en faible quantité sur le marché, que j’ai tous trouvé plaisant, mais celui-là est sorti du lot. Ce vin est sur un beau fruit à baie noire avec une bonne acidité, une sensation de fruit riche et concentré, moyennement tannique et d’une excellente pureté. En raison d’une plus grande maturité, le 1999 est plus sec que le 2000 ».",
        description2: "La Revue du Vin de France 2010, l’a classée dans « les 100 bouteilles exceptionnelles millésimes 1971 à 2002 » (note 15.50 / 20 ) et en commentaire « Le meilleur de la série des Côtes du Rhône 2000, avec un volume de bouche, de la douceur de tanins, un travail de construction dans la sélection et dans l’élevage (pure cuvée béton, grenache 70 % et syrah). Vraiment bon pour ces hivers, du niveau d’un cru ».",
        slug: "la-grande-reserve-2000"
    },
    {
        title: "La Grande Réserve 1999",
        description1: "Le Guide Fleurus des vins 2004: « Robe rubis aux reflets violets, nez ample sur des arômes kirchés, confiturés et torréfiés. Attaque généreuse aux notes épicées de poivre, réglisse. Bouche dotée de tanins fins. Finale dans un registre animal (cuit). Un vin bien charpenté qui demeure agréable et élégant »." ,
        description2: "« The WINE ADVOCATE 2001 » de Robert Parker: « j'ai goûté les vins de ce producteur, en faible quantité sur le marché, que j'ai tous trouvé plaisant, mais ces trois là sont sortis du lot. Cette Grande Réserve 1999 est produite à partir de vignes de 50 ans. Il montre une acidité supérieure à la Cuvée Sylviane 1999, charnu, avec des notes vives de bruyère, baies de cassis et cerises. Avec un peu plus d'acidité on pourrait la confondre avec un Zinfandel de Californie ».",
        slug: "la-grande-reserve-1999"
    },
    {
        title: "La Grande Réserve 1998",
        description1: "Distinguée dans Le Guide Hachette des Vins 2001 : « Les Chorégies d’Orange attirent un public de mélomanes qui sont souvent amateurs de bons vins. On ne peut que leur conseiller de parcourir les 5 km qui les séparent de ce château, dont les fondations remontent au XVIIème siècle, pour découvrir des vins dont l’un reçut un coup de cœur du Guide. Le vigneron est artiste peintre à ses heures. Son art réside aussi dans l’élaboration de ce 98 tout en fruits rouges. La puissance marque le palais de ce vin de caractère, long en bouche. Un civet de lièvre peut lui convenir. »",
        description2: "Guide Bettane & Desseauve 2015: « Des différentes cuvées produites ont toutes une expression très droites, au toucher fin. Des vins en pleine maturité comme ce Millésime 1998. Note 15/20 »",
        slug: "la-grande-reserve-1998"
    },
    // {
    //     title: "Grande Réserve 1996",
    //     description: "lorem ipsum",
    //     slug: "la-grande-reserve-1996"
    // },
    // {
    //     title: "Grande Réserve 1995",
    //     description: "lorem ipsum",
    //     slug: "la-grande-reserve-1995"
    // },
    {
        title: "La Grande Réserve 1994",
        description1: "Guide Hachette des vins 1997* « Un soin très particulier a été apporté à la vendange issue de vieilles vignes: trié une première fois sur la parcelle, le raisin est transporté en caisses puis trié à nouveau à la cave. Ce produit d’une telle méticulosité ne peut que se distinguer par sa puissance ».",
        description2: "",
        slug: "la-grande-reserve-1994"
    },
    // {
    //     title: "La Grande Réserve 1993",
    //     description1: "",
    //     description2: "",
    //     slug: "la-grande-reserve-1993"
    // },
    {
        title: "La Grande Réserve 1992",
        description1: "Distinguée par Le Guide Hachette des Vins 1995*: «... les Pradier passent encore haut la main l’examen Hachette. La robe d’un rouge profond et soutenue laisse présager un vin de bonne constitution. Les arômes sont présents. La bonne charpente permet une bouche longue. Un 92 qui se maintient tout au long de la dégustation ».",
        description2: "Aussi dans le Guide « Le Meilleur de la France » par Hubert de Chanville le choix de la R. V. F. « un vin coloré, avec du fruit, une structure tannique affinée et ronde, une bouche charnue et épicée en finale. On peut attendre cette bouteille ».",
        slug: "la-grande-reserve-1992"
    },
    // {
    //     title: "La Grande Réserve 1991",
    //     description1: "Distinguée dans Le Guide Hachette des Vins 1993*: « Belle couleur aux reflets violés, nez pas expressif encore, mais la bouche offre un bon équilibre, avec des tannins aux grains fins très plaisants. La structure de ce 91 laisse entrevoir de belles promesses. »",
    //     description2: "",
    //     slug: "la-grande-reserve-1991"
    // },
    {
        title: "La Grande Réserve 1990",
        description1: "Dans le Figaro Magazine, 2 Novembre 1991 l’élite des sommeliers la proposaient dans « Leurs caves idéales » c’est-à-dire Jean-Claude Jambon, meilleur sommelier du monde en 1986, Jean-Luc Pouteau, meilleur sommelier du monde en 1983 et Didier Bordas, sommelier conseil aux caves Taillevent à Paris.",
        description2: "Distinguée aussi l'année suivante dans Le Guide Hachette des Vins 1992* « Ce 1990 devrait s’épanouir avec le temps, miel, ail, gras et rond … » puis dans le Guide Bettane & Desseauve 2015 «... Les différentes cuvées produites ont toutes une expression très droite au toucher fin. Des vins à pleine maturité sont disponibles comme ce 1990. » Note 15/20.",
        slug: "la-grande-reserve-1990"
    },
    {
        title: "La Grande Réserve 1988",
        description1: "Notre premier millésime obtient les trois étoiles au Guide Hachette des vins 1991 page 813. Tant de classe et d’élégance ne se rencontrent pas tous les jours. Quant à la persistance, « buvez le à Orange et vous l’aurez encore en bouche à Avignon ».",
        description2: "En 1991 aussi, dans Le Figaro Magazine, l'élite des sommeliers, Jean Claude Jambon, meilleur sommelier du monde en 1986, Jean-Luc Pouteau, meilleur sommelier du monde en 1983 et Didier Bordas, sommelier conseil aux caves Taillevent à Paris, ont conjugué leurs talents pour proposer « Leurs caves idéales ».",
        slug: "la-grande-reserve-1988"
    },
  ]

  return (
    <div className="flex flex-col max-w-1/3 px-2 gap-6">
                <Image src={grandeReserveImg} alt="Image de l'étiquette de La Grande Réserve" className="img-shadow m-auto w-80 -rotate-5 my-12 max-w-[300px]"></Image>
                
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
