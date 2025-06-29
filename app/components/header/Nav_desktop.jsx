import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CartAndLogin from "./CartAndLogin";

const Nav_desktop = () => {
  return (
    <nav className='flex justify-center'>
      <div className=' px-8  w-[1280px] md:flex justify-center hidden items-center'>
        {/* Logo */}
        <div className='flex items-center w-[15%]'>
          <Link href='/'>
            {" "}
            <Image
              src='/ToteTales_logo.png'
              height={150}
              width={150}
              alt='Logo Image'
            />
          </Link>
        </div>

        {/* Links */}
        <div className='flex justify-center space-x-6 text-sm w-[70%] gap-8'>
          <Link
            href='/sale'
            className='text-red-600 hover:text-red-600 text-lg'>
            SALE!
          </Link>
          <Link
            href='/category'
            className={`flex justify-center items-center font-text-blue hover:text-black`}>
            CATEGORY
          </Link>
          <Link
            href='/best_sellers'
            className='flex justify-center items-center font-text-blue hover:text-black'>
            BEST SELLERS
          </Link>
          <Link
            href='/new_arrivals'
            className='flex justify-center items-center font-text-blue hover:text-black'>
            NEW ARRIVALS
          </Link>
          <Link
            href='/pocket_friendly'
            className='flex justify-center items-center font-text-blue hover:text-black'>
            POCKET FRIENDLY
          </Link>
        </div>

        {/* Cart and Login */}
        <CartAndLogin />
      </div>
    </nav>
  );
};

export default Nav_desktop;
