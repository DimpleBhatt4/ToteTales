'use Client11'
import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart_and_login from "./Cart_and_login";

const Nav_desktop = () => {

  return (
    <nav className="flex justify-center">
      <div className=' px-8  w-[1280px] md:flex justify-center hidden items-center'>
        {/* Logo */}
        <div className='flex items-center w-[15%]'>
          {/* <Image src='/bag_logo.png' height={150} width={150} alt='Bag Image' /> */}
          <Image
            src='/ToteTales_logo.png'
            height={150}
            width={150}
            alt='Logo Image'
          />
        </div>

        {/* Links */}
        <div className='flex justify-center space-x-6 text-sm w-[70%] gap-8'>
          <Link href='' className='text-red-400 hover:text-red-600 text-lg'>
            SALE!
          </Link>
          <Link
            href=''
            className='flex justify-center items-center text-gray-700 hover:text-black'>
            Shop by Category
          </Link>
          <Link
            href=''
            className='flex justify-center items-center text-gray-700 hover:text-black'>
            What's New
          </Link>
          <Link
            href=''
            className='flex justify-center items-center text-gray-700 hover:text-black'>
            BestSellers
          </Link>
          <Link
            href=''
            className='flex justify-center items-center text-gray-700 hover:text-black'>
            Gift Store
          </Link>
        </div>

        {/* Cart and Login */}
        <Cart_and_login />
      </div>
    </nav>
  );
};

export default Nav_desktop;
