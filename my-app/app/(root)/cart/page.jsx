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

const CartPage = () => {
  const { cartItemsId } = useContext(GlobalContext);
  const filterCartItems = products.filter((item) => cartItemsId.includes(item.p_id));

  const totalCartValue = filterCartItems.reduce(
    (acc, item) => acc + (item.sale_price || item.actual_price),
    0
  );

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center p-4 lg:p-8">
      <div className="w-full lg:w-2/3">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Cart ({cartItemsId.length} items)</h2>
          {cartItemsId.length > 0 && (
            <Link href="/" className="text-blue-600 hover:underline">Continue Shopping</Link>
          )}
        </div>
        
        {/* Cart Items */}
        {cartItemsId.length > 0 ? (
          <ul className="space-y-4">
            {filterCartItems.map((item) => (
              <li key={item.p_id} className="flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg">
                <Image
                  className="rounded-lg"
                  src={item.img_url}
                  width={80}
                  height={80}
                  alt={item.name}
                />
                <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                  <p className="text-lg font-medium">{item.name}</p>
                  <p className="text-sm text-gray-600">
                    {item.sale_price ? (
                      <>
                        <span className="line-through text-red-500 mr-2">Rs. {item.actual_price}</span>
                        Rs. {item.sale_price}
                      </>
                    ) : (
                      <>Rs. {item.actual_price}</>
                    )}
                  </p>
                  <Button value="Remove from Cart" itemId={item.p_id} />
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-xl mt-8">
            OOPS! Your cart is empty. Add your favorites to Cart.
            <br />
            <Link href="/" className="text-blue-600 hover:underline">Continue Shopping</Link>
          </div>
        )}
      </div>
      
      {/* Summary Section */}
      {filterCartItems.length > 0 && (
        <div className="w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg mt-6 lg:mt-0 lg:ml-8">
          <div className="flex justify-between mb-4 text-lg font-semibold">
            <span>Subtotal</span>
            <div className="flex items-center">
              <LiaRupeeSignSolid /> <span>{totalCartValue}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center text-sm">
            <div className="flex flex-col items-center"><TbTruckDelivery /> Free Delivery</div>
            <div className="flex flex-col items-center"><LuBoxes /> Hassle-free Returns</div>
            <div className="flex flex-col items-center"><RiSecurePaymentLine /> Secure Payments</div>
            <div className="flex flex-col items-center"><GiCash /> Cash on Delivery</div>
          </div>
          <Button value="Checkout" className="mt-4 w-full" />
          <p className="text-center text-sm text-gray-600 mt-2">*Shipping & taxes calculated at checkout</p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
