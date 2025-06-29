"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import { RiLayoutGridFill, RiLayoutGrid2Fill } from "react-icons/ri";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { IoChevronDown } from "react-icons/io5";
import CategorySortBy from "@/app/components/category/CategorySortBy";
import SearchProducts from "@/app/components/category/SearchProducts";

const ProductGrid = ({
  title,
  initialProducts,
  pageName,
  searchParams,
  categoryName,
}) => {
  const [products, setProducts] = useState(initialProducts);
  const [layoutType, setLayoutType] = useState("medium");


  return (
    <div className="w-full ">
      <div className="p-4 border text-center text-2xl font-semibold">{title}</div>

      {/* Filter Bar */}
      <div className="p-4 border text-sm mb-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4 w-full sm:w-auto
">
          {products.length} Products

        </div>

        <div className="w-full sm:w-auto grow">
          <SearchProducts
            products={initialProducts}
            setFilteredProducts={setProducts}
            searchByKey={"name"}
          />
        </div>

        {/* Layout Controls */}
        <div className="flex gap-2 justify-end w-full sm:w-auto">
          <RiLayoutGridFill
            className={`text-xl cursor-pointer ${
              layoutType === "large" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setLayoutType("large")}
          />
          <RiLayoutGrid2Fill
            className={`text-xl cursor-pointer ${
              layoutType === "medium" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setLayoutType("medium")}
          />
        
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex justify-center my-8 px-4">
        <ul
          className={`grid gap-x-4 gap-y-6
            ${layoutType === "large" && "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}
            ${layoutType === "medium" && "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"}
            `}
        >
          {products.map((item) => (
            <li className="w-full" key={item.p_id}>
              <Link href={`/category/${item.category}/${item.p_id}`}>
                <div className="relative flex justify-center">
                  <Image
                    className={`rounded-lg object-cover
                      ${layoutType === "large" && "w-full h-[400px]"}
                      ${layoutType === "medium" && "w-full h-[250px]"}
                      `}
                    src={item.img_url}
                    width={layoutType === "large" ? 500 : 250}
                    height={layoutType === "large" ? 500 : 250}
                    alt={item.name}
                  />
                </div>
                <p
                  className={`mt-2 text-sm font-medium ${
                    layoutType === "compact" && "hidden"
                  }`}
                >
                  {item.name}
                </p>
                <div
                  className={`flex justify-between text-sm items-center mt-1 ${
                    layoutType === "compact" && "hidden"
                  }`}
                >
                  {item.sale_price == null ? (
                    <p>Rs. {item.actual_price}</p>
                  ) : (
                    <p>
                      <strike className="text-gray-400 pr-1 text-red-400">
                        Rs. {item.actual_price}
                      </strike>{" "}
                      Rs. {item.sale_price}
                    </p>
                  )}
                  <div className="flex items-center gap-1">
                    <IoIosStar className="text-yellow-400" />
                    <p>{item.rating} / 5</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductGrid;
