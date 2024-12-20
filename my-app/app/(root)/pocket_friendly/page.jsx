"use client";

import React from "react";
import products from "@/public/products";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const PocketFriendly = () => {
  const lessPriceItems = products.filter((item) => (((item.actual_price - item.sale_price)/item.actual_price)*100).toFixed(0) >= 50 );

  return <ProductGrid title='Pocket Friendly' initialProducts={lessPriceItems} type='pocket_friendly' />;
};

export default PocketFriendly;
