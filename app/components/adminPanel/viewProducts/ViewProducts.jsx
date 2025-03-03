import axios from "axios";
import React from "react";
import handleFetch from "@/app/utilis/server/handleFetch";
import Link from "next/link";
import Image from "next/image";


const ViewProducts = async () => {
  const products = await handleFetch("http://localhost:3000/api/products/viewProd");
  console.log("present products", products);
  return <div>{products.map((product) => {
    return (
      <li className="list-none" key={product.p_id}>
        <Link
          href={``}
          className='text-red-400 hover:text-red-600 text-lg'>
          <div className='w-[140px] h-[140px]  overflow-hidden'>
            <Image
              className='object-cover w-[140px] h-[140px]'
              src={`${product.img_url}`}
              height={140}
              width={140}
              alt={product}
            />
          </div>
        </Link>
      </li>
    );
  })}</div>;
};

export default ViewProducts;
