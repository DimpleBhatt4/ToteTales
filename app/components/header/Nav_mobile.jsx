"use client";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Image from "next/image";
import Link from "next/link";
import CartAndLogin from "./CartAndLogin";
import NavMobileSidebar from "./NavMobileSidebar";

const NavMobile = () => {
  const [isHamClicked, setIsHamClicked] = useState(false);

  const toggleSidebar = () => setIsHamClicked((prev) => !prev);

  return (
    <nav className="flex justify-between items-center p-4 md:hidden bg-white shadow z-50 relative">
      <RxHamburgerMenu
        className="text-2xl cursor-pointer"
        onClick={toggleSidebar}
      />

      <Link href="/">
        <Image
          src="/ToteTales_logo.png"
          height={40}
          width={120}
          alt="Logo"
          className="object-contain"
        />
      </Link>

      <CartAndLogin />

      <NavMobileSidebar isOpen={isHamClicked} toggleSidebar={toggleSidebar} />
    </nav>
  );
};

export default NavMobile;
