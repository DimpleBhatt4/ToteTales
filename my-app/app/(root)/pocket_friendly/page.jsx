import React from "react";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import handleFetch from "@/app/utilis/server/handleFetch";

const PocketFriendly = async () => {
  const products = await handleFetch("http://localhost:3000/api/products");
  const lessPriceItems = products.filter(
    (item) =>
      (
        ((item.actual_price - item.sale_price) / item.actual_price) *
        100
      ).toFixed(0) >= 50
  );

  return (
    <ProductGrid
      title='Pocket Friendly'
      initialProducts={lessPriceItems}
      pageName='pocket_friendly'
    />
  );
};

export default PocketFriendly;
