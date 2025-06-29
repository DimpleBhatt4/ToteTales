import React from "react";
import handleFetch from "@/app/utilis/server/handleFetch";
import ProductGrid from "../../components/ProductGrid/ProductGrid";

const NewArrivalsPage = async ({searchParams}) => {
  console.log('searchParams', await searchParams)
  const products = await handleFetch("http://localhost:3000/api/products/viewProd");

  const today = new Date();
  console.log(today);
  const currDate = today.getDate();
  const newArrivals = products.filter((item) => {
    const launchDate = new Date(item.launchDate).getDate();

    const diffInDays = currDate - launchDate;
    return diffInDays <= 30;
  });
  return (
    <ProductGrid
      title='New Arrivals'
      initialProducts={newArrivals}
      pageName={"new_arrivals"}
      searchParams={searchParams}
    />
  );
};

export default NewArrivalsPage;
