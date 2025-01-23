// app/products/[p_id]/ProductPage.js (Client Component)

"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../../../../provider/ProductsProvider";
import Image from "next/image";
import Button from "../../../../components/button/Button";
import DiscRibbon from "../../../../components/disc_ribbon/DiscRibbon";
import { IoIosStar } from "react-icons/io";

const ProductPage = ({ product }) => {
  const { cartItemsId, wishlistItemsId } = useContext(GlobalContext);

  return (
    <div className='custom_margin mx-6 flex gap-8'>
      <div className='relative'>
        <Image
          className='rounded-lg'
          src={product.img_url}
          height={400}
          width={400}
          alt={product.name}
        />
        <DiscRibbon selectedId={product.p_id} />
      </div>
      <div className='lg:w-[30%]'>
        <p className='font-bold text-3xl'>{product.name}</p>
        <p className='text-xl my-2 text-gray-600'>{product.description}</p>
        <div className='flex justify-between'>
          {product.sale_price == null ? (
            <p>Rs. {product.actual_price}</p>
          ) : (
            <p>
              <strike className='text-gray-400 pr-2 text-red-400'>
                Rs. {product.actual_price}
              </strike>{" "}
              Rs. {product.sale_price}
            </p>
          )}
          <div className='flex justify-center items-center gap-2'>
            <IoIosStar className='text-yellow-400' />
            <p>{product.rating} / 5</p>
          </div>
        </div>
        <ul className='custom_margin list-disc'>
          <li className='font-bold my-2 list-none'>Available Benefits</li>
          <li>
            Get 20% off on Minimum Purchase Value of Rs. 2500 & Above, Maximum
            off Rs. 600 on Times Card - HDFC Credit and Debit Card. TnC applied.
          </li>
          <li>
            Get FLAT 15% off on payment via Mastercards, min. purchase INR 2500,
            TnC applied
          </li>
          <li>Scan QR Code on Purchase & Get Extended E-warranty.</li>
        </ul>
        <div className='flex'>
          <Button
            value={`${
              cartItemsId.includes(product.p_id)
                ? "Remove from Cart"
                : "Add to Cart"
            }`}
            itemId={product.p_id}
          />
          <Button
            value={`${
              wishlistItemsId.includes(product.p_id)
                ? "Remove from Wishlist"
                : "Wishlist"
            }`}
            itemId={product.p_id}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
