import axios from "axios";
import React from "react";
import handleFetch from "@/app/utilis/server/handleFetch";

const ViewProducts = async () => {
  const products = await handleFetch("http://localhost:3000/api/products/viewProd");
  console.log("present products", products);
  return <div>{products.map((product) => {
    return (<div>
        <li>{product.p_id}</li>
    </div>)
  })}</div>;
};

export default ViewProducts;
