import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import handleFetch from "@/app/utilis/server/handleFetch";

const BestSellersPage = async ({ searchParams }) => {
  const products = await handleFetch(
    "http://localhost:3000/api/products/viewProd"
  );
  const bestSellingProd = products.filter((item) => item.rating >= 4.5);

  return (
    <ProductGrid
      title='Best Sellers'
      initialProducts={bestSellingProd}
      pageName='best_sellers'
      searchParams={searchParams}
    />
  );
};

export default BestSellersPage;
