import React from "react";
import handleFetch from "@/app/utilis/server/handleFetch";
import Link from "next/link";
import Image from "next/image";
import ClientRemoveProduct from "./ClientRemoveProduct";

const RemoveProduct = async () => {
  const products = await handleFetch(
    "http://localhost:3000/api/products/viewProd"
  );
  
  return (
    <div className='flex justify-center items-center'>
      <ClientRemoveProduct products={products} />
    </div>
  );
};

export default RemoveProduct;
