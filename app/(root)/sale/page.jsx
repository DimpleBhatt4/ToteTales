import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import handleFetch from "@/app/utilis/server/handleFetch";

const Sale = async ({searchParams}) => {
  const products = await handleFetch(
    "http://localhost:3000/api/products/viewProd"
  );

  const saleItems = products.filter((item) => item.sale_price !== null);
  console.log("sale items", saleItems);

  return (
    <ProductGrid title='Sale' initialProducts={saleItems} pageName='sale'
    searchParams={searchParams} />
  );
};

export default Sale;
