"use client";

import React from "react";
import products from "@/public/products";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const NewArrivalsPage = () => {
  const today = new Date();
  console.log(today);
  const currDate = today.getDate()
  const newArrivals = products.filter((item) => {
    const launchDate = new Date(item.launchDate).getDate();

    const diffInDays = currDate-launchDate;
    return diffInDays <= 30;
  });
  console.log('new arrivals',newArrivals)
  return <ProductGrid title="New Arrivals" initialProducts={newArrivals} type={'new_arrivals'} />;
};

export default NewArrivalsPage;
