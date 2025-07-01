import Image from "next/image";
import React from "react";
import Link from "next/link";
import handleFetch from "@/app/utilis/server/handleFetch";

const Category = async () => {
  let uniq_category = [];
  let img_id = 0;
  const products = await handleFetch("http://localhost:3000/api/products/viewProd");

  products.map((product) => {
    if (!uniq_category.includes(product.category)) uniq_category.push(product.category);
  });

  return (
    <div className="flex justify-center px-4">
      <div className="flex flex-col items-center custom_margin w-full">
        <div className="my-4 text-2xl font-bold text-center">TOP CATEGORY</div>
        <div className="flex flex-wrap justify-center gap-4">
          {/* Sale Image */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden">
            <Image
              className="object-cover w-full h-full"
              src="/sale_img.webp"
              height={140}
              width={140}
              alt="Sale Logo"
            />
          </div>

          {/* Categories */}
          <ul className="flex flex-wrap justify-center gap-4">
            {uniq_category.map((product) => {
              if (img_id >= uniq_category.length) return null;
              img_id++;
              return (
                <li key={product}>
                  <Link
                    href={`/category/${product}`}
                    className="text-red-400 hover:text-red-600 text-lg"
                  >
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                      <Image
                        className="object-cover w-full h-full"
                        src={`/category_${img_id}.webp`}
                        height={140}
                        width={140}
                        alt={product}
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Category;
