import { getProductByHandle } from "@/lib/shopify";
import Header from "@/shared/Header";
import Image from "next/image";

export default async function MillesimePage({ params }: { params: { handle: string } }) {
  const product = await getProductByHandle(params.handle);

  if (!product) return <p>Produit introuvable.</p>;

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
      <Header />

      <h2 className="text-3xl font-bold mb-4">{product.title}</h2>
      {product.featuredImage && (
        <Image
          src={product.featuredImage.url}
          alt={product.title}
          width={500}
          height={500}
          className="rounded-xl shadow-lg"
        />
      )}
      <p className="mt-4 text-lg text-gray-700">Description du millésime à venir...</p>
    </div>
  );
}