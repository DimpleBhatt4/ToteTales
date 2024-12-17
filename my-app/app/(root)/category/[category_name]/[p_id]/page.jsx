// app/products/[p_id]/page.js (Server Component)

import ProductPage from "./ProductPage"; // Client Component
import products from "@/public/products";

async function Page({ params }) {
  const { p_id } = await params;

  // Filter the product data for the specific product ID
  const product = products.find((prod) => prod.p_id == p_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
export default Page
