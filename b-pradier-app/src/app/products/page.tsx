import { getProducts } from "@/lib/shopify";
import Header from "@/shared/Header";

export default async function Products() {
  const products = await getProducts();
  console.log(products)

  return (
    <div className="min-h-screen flex flex-col max-w-[1200px] m-auto px-3 lg:px-0">
            <div className="fixed z-[-1] w-full h-screen opacity-60 left-0 top-0"></div>
            <Header />

            <main className="mb-6 mt-auto">
              <ul className="flex flex-col gap-12">
                {products.map(({ node }) => (
                  <li key={node.id} className="flex justify-between w-[800px] m-auto">
                    <h2>{node.title}</h2>
                    {/* {node.featuredImage && <img src={node.featuredImage.url} alt={node.title} width={100} />} */}
                    <button className="bg-white border px-2 hover:text-white hover:bg-red-950 hover:cursor-pointer">Ajouter au panier</button>
                  </li>
                ))}
              </ul>   
            </main>

            <footer className="mt-8 py-2 text-center border-t border-[#C5A572] text-sm text-gray-700 bg-[#f9f6f11c] md:mt-auto">
                <div className="space-x-6 mb-2">
                    <a href="#" className="">
                        Facebook
                    </a>
                    <a href="#" className="">
                        Mentions légales
                    </a>
                    <a href="#" className="">
                        CGV
                    </a>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                    &copy; 2025 B. Pradier — Tous droits réservés.
                </p>
            </footer>
        </div>
  );
}