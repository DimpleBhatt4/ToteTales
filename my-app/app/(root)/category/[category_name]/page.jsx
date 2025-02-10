import React from "react";
import handleFetch from "@/app/utilis/server/handleFetch";
import ProductGrid from "@/app/components/ProductGrid/ProductGrid";

const Page = async ({ params, searchParams }) => {
  const resolvedParams = await params;
  const categoryName = resolvedParams.category_name;
  const products = await handleFetch("http://localhost:3000/api/products/viewProd");

  const filtered = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <ProductGrid
      title={categoryName}
      initialProducts={filtered}
      pageName={null}
      searchParams={searchParams}
      categoryName={categoryName}
    />
  );
};

export default Page;
