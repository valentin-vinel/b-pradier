import { getProductByHandle } from "@/lib/shopify";
import Footer from "@/shared/Footer";
import Header from "@/shared/Header";
import Origine from "@/shared/OrigineProduct";
import QuantitySelector from "@/shared/QuantitySelector";
import Typicite from "@/shared/TypiciteProduct";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ handle: string }> }): Promise<Metadata> {
    const { handle } = await params;

    const product = await getProductByHandle(handle);

    if (!product) {
        return {
            title: "Millésime introuvable",
            description: "Ce millésime n'est plus disponible.",
        };
    }

    const title = product.title ?? "Millésime B. Pradier";
    const description = product.description?.slice(0, 160) ?? "Découvrez la typicité, les citations et les accords vins-mets de ce millésime signé Bernard Pradier.";

    const image = product.featuredImage?.url ?? product.images?.edges?.[0]?.node?.url ?? "/default.jpg";

    return {
        title: `${title} — B. Pradier`,
        description,
        openGraph: {
            title: `${title} — B. Pradier`,
            description,
            images: [{ url: image }],
        },
    };
}

export default async function MillesimePage({ params }: { params: Promise<{ handle: string }> }) {
    const { handle } = await params;

    const product = await getProductByHandle(handle);
    const quantity = product?.variants?.edges?.[0]?.node?.quantityAvailable ?? 0;

    const rawPrice = product?.variants?.edges?.[0]?.node?.price?.amount;
    const price = rawPrice ? parseFloat(rawPrice).toFixed(2) : null;

    const variantId = product?.variants?.edges?.[0]?.node?.id;

    if (!product) return <p>Produit introuvable.</p>;

    return (
        <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <Header />

            <main className="flex flex-col text-center lg:flex-row gap-4 m-auto my-6">
                <figure className="bg-white w-[280px] md:w-[300px] lg:h-[680px] flex flex-col border-2 m-auto lg:m-0">
                    {product.featuredImage?.url && <img src={product.featuredImage.url} alt={product.title} className="h-[200px] p-2 lg:h-[600px] m-auto" />}
                    <figcaption className="text-sm">
                        Photo non contractuelle. <br /> Vin rouge. {product.appellation.value}. {product.vol.value}% vol. 75 cl. <br />
                        Product of France. Contient des sulfites.
                    </figcaption>
                </figure>

                <div className="py-2 max-w-[1000px] lg:min-h-[680px] flex justify-center items-center border-2 bg-white m-auto">
                    <div className="max-w-[850px] flex flex-col gap-6 m-auto">
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">- {product.title} -</h2>

                        <article className="text-col-bleu">
                            <h3 className="font-bold text-secondary">ORIGINE</h3>
                            <Origine title={product.title} />
                        </article>

                        <article className="text-col-bleu">
                            <h3 className="font-bold text-secondary">TYPICITÉ</h3>
                            <Typicite title={product.title} />
                        </article>

                        <article className="text-col-bleu px-1">
                            <h3 className="font-bold text-secondary">CITATION GUIDE & ACCORDS VINS-METS</h3>
                            {product.descriptionHtml ? <div className="product-description" dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} /> : <p className="text-gray-600 italic mb-4">Description à venir...</p>}
                        </article>

                        <article>
                            <p className="text-lg ">
                                Stock disponible : <strong>{quantity}</strong>
                            </p>

                            <p className="text-lg">
                                Prix : <strong>{price}</strong> €
                            </p>
                        </article>

                        {quantity > 0 ? (
                            <div>
                                <QuantitySelector variantId={variantId} max={quantity} />
                            </div>
                        ) : (
                            <p className="text-red-500 text-sm">Indisponible</p>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
