import { getProducts } from "@/lib/shopify";

export default async function Products() {
  const products = await getProducts();

  console.log(products)

  return (
    <main>
      <h1>Produits Shopify</h1>
      <ul>
        {products.map(({ node }) => (
          <li key={node.id}>
            <h2>{node.title}</h2>
            {node.featuredImage && <img src={node.featuredImage.url} alt={node.title} width={100} />}
          </li>
        ))}
      </ul>
    </main>
  );
}