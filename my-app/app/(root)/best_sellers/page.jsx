"use client";

import React from "react";
import products from "@/public/products";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const BestSellersPage = () => {
  const bestSellingProd = products.filter((item) => item.rating >= 4.5);

  return <ProductGrid title="Best Sellers" initialProducts={bestSellingProd} type='best_sellers' />;
};

export default BestSellersPage;
