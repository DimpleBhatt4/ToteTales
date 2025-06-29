"use client";
import React from "react";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const NavMobileSidebar = ({ isOpen, toggleSidebar }) => {
  const navLinks = [
    { href: "/sale", label: "SALE!", highlight: true },
    { href: "/category", label: "Shop by Category" },
    { href: "/new_arrivals", label: "What's New" },
    { href: "/best_sellers", label: "BestSellers" },
    { href: "/gift", label: "Gift Store" },
  ];

  const favorites = [
    {
      src: "/bag_img1_front.webp",
      alt: "Explorer Backpack",
      name: "Explorer Backpack - Palm Springs",
      price: "Rs. 3995",
    },
    {
      src: "/bag_img2_front.webp",
      alt: "Quilted Season",
      name: "Quilted Season - Cosy Winters",
      price: "Rs. 1985",
    },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 w-[70vw] min-h-screen bg-gray-100 p-4 overflow-y-auto z-40 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Close & Login */}
      <div className="flex justify-between mb-4">
        <IoMdClose className="text-2xl cursor-pointer" onClick={toggleSidebar} />
        <button className="text-sm text-blue-600">Login/Register</button>
      </div>

      {/* Nav Links */}
      <ul className="text-sm divide-y divide-gray-300">
        {navLinks.map(({ href, label, highlight }) => (
          <li
            key={label}
            className="py-4 flex justify-between items-center"
            onClick={toggleSidebar}
          >
            <Link
              href={href}
              className={`${
                highlight ? "text-red-400 text-2xl" : "text-gray-700 hover:text-black"
              }`}
            >
              {label}
            </Link>
            <FaAngleRight />
          </li>
        ))}
      </ul>

      {/* Favourites */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Pick Your Fav!!</h2>
        <div className="flex gap-2 overflow-x-auto">
          {favorites.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 flex flex-col items-center w-[160px] h-[260px]"
            >
              <Image
                src={item.src}
                width={160}
                height={240}
                alt={item.alt}
                className="object-cover rounded"
              />
              <p className="text-center mt-2 text-sm">
                {item.name}
                <br />
                <span className="text-gray-600">{item.price}</span>
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Extra */}
      <ul className="mt-6 text-sm text-gray-700">
        <li className="py-2">
          <Link href="/profile">Profile</Link>
        </li>
        <li className="py-2">
          <Link href="#">Help</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMobileSidebar;
