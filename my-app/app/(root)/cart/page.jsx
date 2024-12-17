"use client";
import React, { useContext, useState } from "react";
import { GlobalContext } from "../../../app/provider/ProductsProvider";
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
  const { cartItemsId } = useContext(GlobalContext);
  const [quantity, setQuantity] = useState(1);

  const filterCartItemsId = [];
  products.map((item) => {
    if (cartItemsId.includes(item.p_id)) {
      return filterCartItemsId.push(item);
    } else {
      return;
    }
  });
  const totalCartValue = filterCartItemsId.reduce(
    (accumulator, item) =>
      item.sale_price
        ? accumulator + item.sale_price
        : accumulator + item.actual_price,
    0
  );
  return (
    <div className='flex justify-center '>
      <div className='flex custom_width gap-8'>
        {/* left container */}
        <div className='w-[65%] '>
          {/* Row-1 */}
          <div className='flex items-around justify-between custom_margin'>
            <div className='flex items-center gap-2'>
              <span className='text-3xl font-bold'>Cart</span>
              {cartItemsId.length ? (
                <span className='text-sm0'>({cartItemsId.length} items)</span>
              ) : (
                ""
              )}
            </div>
            {cartItemsId.length ? (
              <Link href={"/"} className='border-b-2'>
                Continue Shopping
              </Link>
            ) : (
              ""
            )}
          </div>
          {/* Row-2 */}
          {cartItemsId.length ? (
            <ul className='custom_margin'>
              {filterCartItemsId.map((item, index) => {
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
                        <Button value={"Remove from Cart"} itemId={item.p_id} />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className='custom_margin text-xl'>
              OOPS! your cart is empty. Add your favorites in Cart 
              <br />
              <Link href={"/"} className='border-b-2'>
              Continue Shopping
            </Link>
            </div>
          )}
        </div>
        {/* Right Container */}
        {filterCartItemsId.length ? (
          <div className='grow custom_margin'>
            {/* row-1 */}
            <div className='flex justify-between mb-4'>
              <span>SUBTOTAL</span>
              <div className='flex items-center text-xl font-bold'>
                <LiaRupeeSignSolid />
                <span>{totalCartValue}</span>
              </div>
            </div>
            {/* row-2 */}
            <div className='flex gap-2 justify-center my-2'>
              <div className='flex flex-col items-center'>
                <TbTruckDelivery />
                <span className='text-xs'>Free Delivery</span>
              </div>
              <div className='flex flex-col items-center'>
                <LuBoxes />
                <span className='text-xs'>Hassle free Returns</span>
              </div>
              <div className='flex flex-col items-center'>
                <RiSecurePaymentLine />
                <span className='text-xs'>Secure payments</span>
              </div>
              <div className='flex flex-col items-center'>
                <GiCash />
                <span className='text-xs'>Cash on delivery</span>
              </div>
            </div>
            {/* row-3 */}
            <Button value={"Checkout"} />
            {/* row-4 */}
            <div className='my-2 text-sm text-center'>
              *Shipping & taxes calculated at checkout
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default page;
