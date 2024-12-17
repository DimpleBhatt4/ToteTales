"use client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../provider/ProductsProvider";
import products from "@/public/products";
import Image from "next/image";
import Button from "../../components/button/Button";
import { TbTruckDelivery } from "react-icons/tb";
import { LuBoxes } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCash } from "react-icons/gi";
import Link from "next/link";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaMinus, FaPlus } from "react-icons/fa";

const page = () => {
  const { wishlistItemsId } = useContext(GlobalContext);

  const filterWishlistItemsId = [];
  products.map((item) => {
    if (wishlistItemsId.includes(item.p_id)) {
      return filterWishlistItemsId.push(item);
    } else {
      return;
    }
  });
  const totalCartValue = filterWishlistItemsId.reduce(
    (accumulator, item) =>
      item.sale_price
        ? accumulator + item.sale_price
        : accumulator + item.actual_price,
    0
  );

  
  return (
    <div className='flex justify-center '>
      <div className='flex flex-col custom_width gap-8'>
          {/* Row-1 */}
          <div className='flex items-around justify-between custom_margin'>
            <div className='flex items-center gap-2'>
              <span className='text-3xl font-bold'>Wishlist</span>
              {wishlistItemsId.length ? (
                <span className='text-sm0'>({wishlistItemsId.length} items)</span>
              ) : (
                ""
              )}
            </div>
            {wishlistItemsId.length ? (
              <Link href={"/"} className='border-b-2'>
                Continue Shopping
              </Link>
            ) : (
              ""
            )}
          </div>
          {/* Row-2 */}
          {wishlistItemsId.length ? (
            <ul className='custom_margin'>
              {filterWishlistItemsId.map((item, index) => {
                return (
                  <li
                    key={index}
                    className='flex items-center gap-4 py-2  border-y-2'>
                    {/* image */}
                    <div className=' w-[10%]'>
                      <Image
                        className='rounded-lg'
                        src={item.img_url}
                        width={100}
                        height={100}
                        alt={`cart image with p_id ${item.p_id}`}
                      />
                    </div>
                    <div className='flex items-center justify-around grow'>
                      {/* item name */}
                      <div className='text-lg'>{item.name}</div>
                      {/* Price */}
                      <div>
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
                      </div>
                      {/* No of items */}
                      <div>
                        <Button value={"Add to Cart"} itemId={item.p_id} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className='custom_margin text-xl'>
              OOPS! you haven't saved anything. Explore our collection!
              <br />
              <Link href={"/"} className='border-b-2'>
              Continue Shopping
            </Link>
            </div>
          )}
      </div>
    </div>
  );
};

export default page;
