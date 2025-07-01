"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { TbTruckDelivery } from "react-icons/tb";
import { LuBoxes } from "react-icons/lu";
import { RiSecurePaymentLine } from "react-icons/ri";
import { GiCash } from "react-icons/gi";
import { LiaRupeeSignSolid } from "react-icons/lia";
import handleFetch from "@/app/utilis/server/handleFetch";
import Button from "../../components/button/Button";
import { GlobalContext } from "@/app/provider/ProductsProvider";

const CartPage = () => {
  const { cartProducts, setCartProducts } = useContext(GlobalContext);


  // Update quantity
  const updateQuantity = async (productId, quantity) => {
    if (quantity < 1) return;

    try {
      const response = await handleFetch(
        "http://localhost:3000/api/cart/updateQty",
        "PUT",
        { productId, quantity }
      );

      const updatedCart = await handleFetch(
        "http://localhost:3000/api/cart/viewCartItems",
        "GET"
      );
      setCartProducts(updatedCart.userCart?.items || []);
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Remove item from cart
  const removeFromCart = async (productId) => {
    try {
      if (!productId) {
        console.error("productId is undefined");
        return;
      }
      const response = await fetch(
        "http://localhost:3000/api/cart/removeCartItems",
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cartId: String(productId) }),
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to remove product: ${response.statusText}`);
      }

      const data = await response.json();

      setCartProducts((prev) =>
        prev.filter((item) => item.product._id !== productId)
      );
    } catch (error) {
      console.error("Error removing product:", error);
    }
  };

  // Total Price Calculation
  const totalCartValue = cartProducts.reduce((acc, item) => {
    const price =
      Number(item.product.sale_price) || Number(item.product.actual_price) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className='flex flex-col lg:flex-row items-center lg:items-start justify-center p-4 lg:p-8 w-full'>
      {/* Cart Items */}
      <div className='w-full lg:w-2/3'>
        <div className='flex flex-col sm:flex-row justify-between items-center mb-4'>
          <h2 className='text-2xl font-bold'>
            Cart ({cartProducts.length} items)
          </h2>
          {cartProducts.length > 0 && (
            <Link href='/' className='text-blue-600 hover:underline'>
              Continue Shopping
            </Link>
          )}
        </div>

        {cartProducts.length > 0 ? (
          <ul className='space-y-4'>
            {cartProducts.map((item) => (
              <li
                key={item.product._id}
                className='flex flex-col sm:flex-row items-center gap-4 p-4 border rounded-lg'>
                <Image
                  className='rounded-lg'
                  src={item.product.img_url}
                  width={80}
                  height={80}
                  alt={item.product.name}
                />
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                  <p className='text-lg font-medium'>{item.product.name}</p>
                  <div className='flex items-center space-x-2'>
                    <button
                      onClick={() =>
                        updateQuantity(item.product._id, item.quantity - 1)
                      }
                      className='px-2 py-1 border rounded'>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(item.product._id, item.quantity + 1)
                      }
                      className='px-2 py-1 border rounded'>
                      +
                    </button>
                  </div>
                  <p className='text-sm text-gray-600 font-bold'>
                    Rs.{" "}
                    {item.product.sale_price
                      ? item.product.sale_price * item.quantity
                      : item.product.actual_price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className='text-red-600 hover:underline'>
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className='text-center text-xl mt-8'>
            OOPS! Your cart is empty. Add your favorites to Cart.
            <br />
            <Link href='/' className='text-blue-600 hover:underline'>
              Continue Shopping
            </Link>
          </div>
        )}
      </div>

      {/* Cart Summary */}
      {cartProducts.length > 0 && (
        <div className='w-full lg:w-1/3 bg-gray-100 p-4 rounded-lg mt-6 lg:mt-0 lg:ml-8'>
          <div className='flex justify-between mb-4 text-lg font-semibold'>
            <span>Subtotal</span>
            <div className='flex items-center'>
              <LiaRupeeSignSolid /> <span>{totalCartValue}</span>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 text-center text-sm'>
            <div className='flex flex-col items-center'>
              <TbTruckDelivery /> Free Delivery
            </div>
            <div className='flex flex-col items-center'>
              <LuBoxes /> Hassle-free Returns
            </div>
            <div className='flex flex-col items-center'>
              <RiSecurePaymentLine /> Secure Payments
            </div>
            <div className='flex flex-col items-center'>
              <GiCash /> Cash on Delivery
            </div>
          </div>
          <Button value='Checkout' className='mt-4 w-full' />
          <p className='text-center text-sm text-gray-600 mt-2'>
            *Shipping & taxes calculated at checkout
          </p>
        </div>
      )}
    </div>
  );
};

export default CartPage;
