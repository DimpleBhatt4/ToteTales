"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import Cart_and_login from './Cart_and_login'

import Nav_mobile_sidebar from './Nav_mobile_sidebar'
const Nav_mobile = () => {
  const [isHamClicked, setIsHamClicked] = useState(false);
  return (
    <nav className='flex justify-around items-center md:hidden z-50'>
      <div>
        <RxHamburgerMenu
          // className={`text-xl ${!isHamClicked && "translate-x-[-100%]"}`}
          onClick={() => setIsHamClicked(!isHamClicked)}
        />
      </div>
      {/* Logo */}
      <div>
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
      {/* Cart-profile */}
      <Cart_and_login />
      {/* side-bar */}
      <Nav_mobile_sidebar isHamClicked={isHamClicked} setIsHamClicked={setIsHamClicked} />
      
    </nav>
  );
};

export default Nav_mobile;
