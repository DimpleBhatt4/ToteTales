import Image from "next/image";
import React from "react";
import Link from "next/link";
import products from "@/public/products";

const Category = () => {
  let uniq_category = [];
  let img_id = 0;
  products.map((product) => {
    if (uniq_category.includes(product.category)) return;
    else uniq_category.push(product.category);
  });
  return (
    <div className='flex justify-center custom_margin'>
      <div className='custom_width flex gap-4'>
        <div className='w-[140px] h-[140px] rounded-full overflow-hidden'>
          <Image
            className='object-cover w-full h-full'
            src='/sale_img.webp'
            height={140}
            width={140}
            alt='Sale Logo'
          />
        </div>
        <ul className='flex gap-4'>
          {uniq_category.map((product) => {
            if (img_id > uniq_category.length) return null;
            img_id++;
            return (
              <li key={product}>
                <Link
                  href={`/category/${product}`}
                  className='text-red-400 hover:text-red-600 text-lg'>
                  <div className='w-[140px] h-[140px] rounded-full overflow-hidden'>
                    <Image
                      className='object-cover w-[140px] h-[140px]'
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
  );
};

export default Category;
