"use client";
import React, { useEffect, useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../../components/button/Button";
import { RxCross2 } from "react-icons/rx";
import { GlobalContext } from "@/app/provider/ProductsProvider";


const WishlistPage = () => {
  const {wishlistProducts, setWishlistProducts } = useContext(GlobalContext);


  const handleRemoveItem = async (wishlistId) => {
    try {
      if (!wishlistId) {
        console.error("wishlistId is undefined");
        return;
      }

      const response = await fetch(
        "http://localhost:3000/api/wishlist/removeWishlistItems",
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ wishlistId: String(wishlistId) }),
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to remove product: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Product removed successfully:", data);

      setWishlistProducts((prevWishlist) =>
        prevWishlist.filter((item) => item._id !== wishlistId)
      );
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };



  return (
    <div className='flex justify-center px-4 md:px-8'>
      <div className='w-full max-w-5xl'>
        {/* Heading */}
        <div className='flex items-center justify-between my-6'>
          <h1 className='text-2xl md:text-3xl font-bold'>Wishlist</h1>
          {wishlistProducts.length > 0 && (
            <Link href='/' className='text-blue-600 border-b-2 border-blue-600'>
              Continue Shopping
            </Link>
          )}
        </div>

        {/* Wishlist Items */}
        {wishlistProducts.length > 0 ? (
          <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {wishlistProducts.map((item) => (
              <li
                key={item._id}
                className='border rounded-lg p-4 shadow-md flex flex-col items-center relative'>
                <RxCross2
                  className='absolute top-[0%] right-[0%] text-xl cursor-pointer'
                  onClick={() => handleRemoveItem(item._id)}
                />

                <Image
                  className='rounded-lg'
                  src={item.img_url}
                  width={150}
                  height={150}
                  alt={item.name}
                />
                <h2 className='text-lg font-semibold mt-2 text-center'>
                  {item.name}
                </h2>
                <p className='text-gray-600 text-sm'>
                  {item.sale_price ? (
                    <>
                      <span className='text-red-500 line-through mr-2'>
                        Rs. {item.actual_price}
                      </span>
                      <span className='font-bold'>Rs. {item.sale_price}</span>
                    </>
                  ) : (
                    <span className='font-bold'>Rs. {item.actual_price}</span>
                  )}
                </p>
                <Button
                  value='Add to Cart'
                  itemId={item._id}
                  className='mt-3'
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className='text-center text-xl my-10'>
            <p>OOPS! You haven’t saved anything yet. Explore our collection!</p>
            <Link
              href='/'
              className='text-blue-600 border-b-2 border-blue-600 inline-block mt-2'>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
