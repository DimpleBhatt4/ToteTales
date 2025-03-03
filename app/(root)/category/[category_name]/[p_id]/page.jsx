// app/products/[p_id]/page.js (Server Component)

import ProductPage from "./ProductPage"; // Client Component
import handleFetch from "@/app/utilis/server/handleFetch";
async function Page({ params }) {
  const { p_id } = await params;
  const products = await handleFetch("http://localhost:3000/api/products/viewProd");
  // Filter the product data for the specific product ID
  const product = products.find((prod) => prod.p_id == p_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return <ProductPage product={product} />;
}
export default Page
