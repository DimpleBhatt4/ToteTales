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
  console.log("This is product grid")
  const [products, setProducts] = useState(initialProducts);
  const [layoutType, setLayoutType] = useState("medium");
  const [searchQuery, setSearchQuery] = useState("");
  const [isSortingClicked, setIsSortingClicked] = useState(false);
  useEffect(() => {
    (async () => {
      let filtered = [...initialProducts];
      const query = await searchParams;

      if (searchQuery) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
      }

      if (query) {
        console.log("Enetring query")
        filtered = sortProducts(filtered, query.sortBy);
      }
      setProducts(filtered);
    })();
  }, [searchQuery, initialProducts]);

  const sortProducts = (arr, order) => {
    console.log("sort working")
    return [...arr].sort((a, b) => {
      const priceA = a.sale_price ?? a.actual_price;
      const priceB = b.sale_price ?? b.actual_price;

      switch (order) {
        case "best-selling":
          return b.rating - a.rating;
        case "asc":
          return a.name.localeCompare(b.name);
        case "desc":
          return b.name.localeCompare(a.name);
        case "low-to-high":
          return priceA - priceB;
        case "high-to-low":
          return priceB - priceA;
        default:
          return 0;
      }
    });
  };

  return (
    <div>
      <div className='p-4 border flex justify-center text-2xl'>{title}</div>
      <div className='p-4 border text-sm mb-4 flex justify-center items-center'>
        <div className='flex w-[20%] gap-4'>
          <div>{products.length} Products</div>
          <button
            className='flex justify-center items-center relative'
            onClick={() => setIsSortingClicked(!isSortingClicked)}>
            <span>Sort By</span>
            <IoChevronDown />
            {isSortingClicked && (
              <CategorySortBy categoryName={categoryName} pageName={pageName} />
            )}
          </button>
        </div>
        <div className='grow flex items-center'>
        <SearchProducts
            products={initialProducts}
            setFilteredProducts={setProducts}
            searchByKey={"name"}
          />
        </div>
        <div className='flex w-[20%] gap-2 justify-end'>
          <RiLayoutGridFill
            className={`text-xl ${
              layoutType === "large" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setLayoutType("large")}
          />
          <RiLayoutGrid2Fill
            className={`text-xl ${
              layoutType === "medium" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setLayoutType("medium")}
          />
          <TfiLayoutGrid4Alt
            className={`text-xl ${
              layoutType === "compact" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => setLayoutType("compact")}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <ul
          className={`grid gap-x-8 gap-y-8 ${
            layoutType === "large"
              ? "grid-cols-3"
              : layoutType === "medium"
              ? "grid-cols-4"
              : "grid-cols-6"
          }`}>
          {products.map((item) => (
            <li className='w-auto' key={item.p_id}>
              <Link href={`/category/${item.category}/${item.p_id}`}>
                <div className='relative'>
                  <Image
                    className={`rounded-lg ${
                      layoutType === "large"
                        ? "h-[500px] w-[500px]"
                        : layoutType === "compact"
                        ? "w-3/4"
                        : "h-[250px] w-[250px]"
                    }`}
                    src={item.img_url}
                    height={250}
                    width={250}
                    alt={item.name}
                  />
                </div>
                <p className={`${layoutType === "compact" && "hidden"}`}>
                  {item.name}
                </p>
                <div
                  className={`flex justify-between ${
                    layoutType === "compact" && "hidden"
                  }`}>
                  {item.sale_price == null ? (
                    <p>Rs. {item.actual_price}</p>
                  ) : (
                    <p>
                      <strike className='text-gray-400 pr-2 text-red-400'>
                        Rs. {item.actual_price}
                      </strike>{" "}
                      Rs. {item.sale_price}
                    </p>
                  )}
                  <div className='flex justify-center items-center gap-2'>
                    <IoIosStar className='text-yellow-400' />
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
