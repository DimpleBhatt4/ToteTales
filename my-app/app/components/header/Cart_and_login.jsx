'use client';

import React, { useContext } from "react";
import Link from "next/link";
import { LuUser } from "react-icons/lu";
import { RiLuggageCartLine } from "react-icons/ri";
import { TiHeartOutline } from "react-icons/ti";
import { GlobalContext } from "@/app/provider/ProductsProvider";

const Cart_and_login = () => {
  const { cartItemsId, wishlistItemsId } = useContext(GlobalContext);

  return (
    <div className='flex items-right space-x-4'>
      {/* User Icon */}
      <Link href='/profile'>
        <LuUser className='icon-user text-2xl text-gray-700 hover:text-black' />
      </Link>

      {/* Cart Icon */}
      <Link href='/cart' className='relative'>
        <RiLuggageCartLine className='icon-cart text-2xl text-gray-700 hover:text-black' />
        <span className='absolute text-green-600 bottom-[50%] left-[73%] pointer-events-none'>
          {cartItemsId.length}
        </span>
      </Link>

      {/* Wishlist Icon */}
      <Link href='/wishlist' className='relative'>
        <TiHeartOutline className='icon-wishlist text-2xl text-gray-700 hover:text-black' />
        <span className='absolute text-green-600 bottom-[50%] left-[73%] pointer-events-none'>
          {wishlistItemsId.length}
        </span>
      </Link>
    </div>
  );
};

export default Cart_and_login;
