"use client";

import React from "react";
import products from "@/public/products";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const Sale = () => {
  const saleItems = products.filter((item) => item.sale_price);

  return <ProductGrid title="Sale" initialProducts={saleItems} type='sale' />;
};

export default Sale;