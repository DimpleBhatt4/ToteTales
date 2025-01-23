"use client";

import React, { useState, useEffect } from "react";
import products from "@/public/products";
import Image from "next/image";
import Link from "next/link";
import { IoIosStar } from "react-icons/io";
import DiscRibbon from "../../../components/disc_ribbon/DiscRibbon";
import { RiLayoutGridFill, RiLayoutGrid2Fill } from "react-icons/ri";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { IoChevronDown } from "react-icons/io5";
import CategorySortBy from "@/app/components/category/CategorySortBy";
import SearchProducts from "@/app/components/category/SearchProducts";

const Page = ({ params, searchParams }) => {
  const [categoryName, setCategoryName] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // For Layout change (large, medium, compact)
  const [layoutType, setLayoutType] = useState("medium");

  // For sorting
  const [isSortingClicked, setIsSortingClicked] = useState(false);

  useEffect(() => {
    (async () => {
      const resolvedParams = await params;
      const query = await searchParams;

      // Filtering
      let filtered = products.filter(
        (product) => product.category === resolvedParams.category_name
      );
      if (query) {
        filtered = sortProducts(filtered,query.sortBy);
      }
      setCategoryName(resolvedParams.category_name);
      setFilteredProducts(filtered);
    })();
  }, [params]);
  function handleLayoutChange(value) {
    setLayoutType(value);
  }
  function sortProducts(arr, order) {
    return [...arr].sort((a, b) => {
      switch (order) {
        case "best-selling":
          return b.rating - a.rating;

        case "asc":
          return a.name.localeCompare(b.name);

        case "desc":
          return b.name.localeCompare(a.name);

        case "low-to-high":
          const priceA = a.sale_price ?? a.actual_price;
          const priceB = b.sale_price ?? b.actual_price;
          return priceA - priceB;

        case "high-to-low":
          const priceAHigh = a.sale_price ?? a.actual_price;
          const priceBHigh = b.sale_price ?? b.actual_price;
          return priceBHigh - priceAHigh;

        default:
          return 0;
      }
    });
  }
  return (
    <div className=''>
      <div className='p-4 border flex justify-center text-2xl'>
        {categoryName.split("_").join(" ")}
      </div>
      <div className='p-4 border text-sm mb-4 flex justify-center items-center'>
        <div className='flex w-[20%] gap-4'>
          <div>{filteredProducts.length} Products</div>
          <button
            className='flex justify-center items-center relative'
            onClick={() => setIsSortingClicked(!isSortingClicked)}>
            <span>Sort By</span>
            <IoChevronDown />
            {isSortingClicked && <CategorySortBy categoryName={categoryName} />}
          </button>
        </div>

        <div className='grow'>
          <SearchProducts
            products={products}
            setFilteredProducts={setFilteredProducts}
            searchByKey={"name"}
          />
        </div>
        <div className='flex w-[20%] gap-2 justify-end'>
          <RiLayoutGridFill
            className={`text-xl  ${
              layoutType == "large" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => handleLayoutChange("large")}
          />
          <RiLayoutGrid2Fill
            className={`text-xl ${
              layoutType == "medium" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => handleLayoutChange("medium")}
          />
          <TfiLayoutGrid4Alt
            className={`text-xl ${
              layoutType == "compact" ? "text-black" : "text-gray-400"
            }`}
            onClick={() => handleLayoutChange("compact")}
          />
        </div>
      </div>
      <div className='flex justify-center'>
        <ul
          className={`grid gap-x-8 gap-y-8 ${
            layoutType == "large"
              ? "grid-cols-3"
              : layoutType == "medium"
              ? "grid-cols-4"
              : "grid-cols-6"
          }
 custom_margin custom_width`}>
          {filteredProducts.map((item) => (
            <li className='w-auto' key={item.p_id}>
              <Link href={`/category/${categoryName}/${item.p_id}`}>
                <div className='relative'>
                  <Image
                    className={`rounded-lg ${
                      layoutType == "large"
                        ? "h-[500] w-[500px]"
                        : layoutType == "compact" && "w-3/4"
                    }`}
                    src={item.img_url}
                    height={250}
                    width={250}
                    alt={item.name}
                  />
                  <DiscRibbon selectedId={item.p_id} layoutType={layoutType} />
                </div>

                <p className={`${layoutType == "compact" && "hidden"}`}>
                  {item.name}
                </p>
                <p
                  className={`text-gray-400 text-sm ${
                    layoutType == "compact" && "hidden"
                  }`}>
                  {item.description}
                </p>
                <div
                  className={`flex justify-between ${
                    layoutType == "compact" && "hidden"
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

export default Page;
