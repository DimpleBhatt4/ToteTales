import React from "react";
import products from "@/public/products";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import handleFetch from "@/app/utilis/server/handleFetch";

const Sale = async () => {
  const products = await handleFetch("http://localhost:3000/api/products");

  const saleItems = products.filter((item) => item.sale_price);

  return <ProductGrid title='Sale' initialProducts={saleItems} pageName='sale' />;
};

export default Sale;
