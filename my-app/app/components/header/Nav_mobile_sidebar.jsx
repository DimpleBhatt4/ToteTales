import React from 'react'
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const Nav_mobile_sidebar = ({isHamClicked, setIsHamClicked}) => {
  return (
        <div className={`w-[50vw] min-h-[100vh] bg-gray-100 p-4 fixed inset-y-0 left-0 p-4 overflow-y-auto ${isHamClicked ?'translate-x-0' :'translate-x-[-100%]'} transition duration-900 ease-out`}>
          {/* side-bar top row */}
          <div className='sidebar__top-row flex justify-between'>
            <div className='sidebar__close-btn'>
              <IoMdClose
                className='text-2xl'
                onClick={() => setIsHamClicked(!isHamClicked)}
              />
            </div>
            <div className='log-in-out__btn'>
              <button className=''>Login/Register</button>
            </div>
          </div>
          {/* Links */}
          <ul className='my-4 text-sm'>
            <li className='border-b-2 border-gray-500 my-4 p-2 flex justify-between items-center'>
              <Link
                href=''
                className='text-red-400 hover:text-red-600 text-2xl'>
                SALE!
              </Link>
              <FaAngleRight />
            </li>
            <li className='border-b-2 border-gray-500 my-4 p-2 flex justify-between items-center'>
              <Link href='' className='flex text-gray-700 hover:text-black'>
                Shop by Category
              </Link>
              <FaAngleRight />
            </li>
            <li className='border-b-2 border-gray-500 my-4 p-2 flex justify-between items-center'>
              <Link href='' className='flex text-gray-700 hover:text-black'>
                What's New
              </Link>
              <FaAngleRight />
            </li>
            <li className='border-b-2 border-gray-500 my-4 p-2 flex justify-between items-center'>
              <Link href='' className='flex text-gray-700 hover:text-black'>
                BestSellers
              </Link>
              <FaAngleRight />
            </li>
            <li className='border-b-2 border-gray-500 my-4 p-2 flex justify-between items-center'>
              <Link href='' className='flex text-gray-700 hover:text-black'>
                Gift Store
              </Link>
              <FaAngleRight />
            </li>
          </ul>
          {/* Pick your Fav */}
          <div>
            <div className="text-xl">Pick Your Fav!!</div>
            {/* Items grid */}
            <div className='flex gap-2 text-sm'>
              {/* Item-1 */}
              <div className='flex flex-col items-center justify-center w-[200px] h-[300px]'>
                <Image
                  src='/bag_img1_front.webp'
                  layout='intrinsic'
                  width={200}
                  height={300}
                  alt='Image of a bag'
                  className='object-cover'
                />
                <div className="mt-2"> 
                  Explorer Backpack - Palm Springs
                  <br />
                  <span>Rs. 3995</span>
                </div>
              </div>
              {/* Item-2 */}
              <div className='flex flex-col items-center justify-center w-[200px] h-[300px]'>
                <Image
                  src='/bag_img2_front.webp'
                  layout='intrinsic'
                  width={200}
                  height={300}
                  alt='Image of a bag'
                  className='object-cover'
                />
                <div className='mt-2'>
                  Quilted Season - Cosy Winters <br />
                  <span>Rs. 1985</span>
                </div>
              </div>
            </div>
          </div>

          {/* Help */}
            <ul className="bg-gray-200">
                <li className="my-4">
                    <Link href=''>Profile</Link>
                </li>
                <li>
                    <Link href=''>Help</Link>
                </li>
            </ul>
        </div>
  )
}

export default Nav_mobile_sidebar