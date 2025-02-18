"use client";
import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";
import Button from "../../../../components/button/Button";
import DiscRibbon from "../../../../components/disc_ribbon/DiscRibbon";
import { IoIosStar } from "react-icons/io";
import handleFetch from "@/app/utilis/server/handleFetch";
import { GlobalContext } from "@/app/provider/ProductsProvider";

const ProductPage = ({ product }) => {
  const { cartItemsId, wishlistProducts, setWishlistProducts } = useContext(GlobalContext);
  console.log(product, "product");
  const [cartProducts, setCartProducts] = useState([]);
  // const [wishlistProducts, setWishlistProducts] = useState([]);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {

    const fetchCart = async () => {
      try {
        const response = await handleFetch(
          "http://localhost:3000/api/cart/viewCartItems"
        );
        setCartProducts(response.userCart.items || []);
        console.log(cartProducts,"cartProducts")
      } catch (error) {
        console.error("Error fetching Cart:", error);
      }
    };
    fetchCart();
  }, []);

  // To update isWishlisted toggle
  useEffect(() => {
    setIsWishlisted(wishlistProducts.some((item) => item._id === product._id));
  }, [wishlistProducts, product]);

  // To update isInCart toggle
  useEffect(() => {
    setIsInCart(cartProducts.some((item) => item._id === product._id));
  }, [cartProducts, product]);

  const handleWishlist = async (productId, product) => {
    let response;
    console.log("product ID", productId);
    console.log("isWishlist", isWishlisted);
  
    if (!isWishlisted) {
      response = await handleFetch(
        "http://localhost:3000/api/wishlist/addWishlistItems",
        "POST",
        {
          wishlistId: productId,
        }
      );
  
      if (response.success) {
        // adding new item to wishlist
        setWishlistProducts((prevWishlist) => [...prevWishlist, product]);
      }
    } else {
      response = await handleFetch(
        "http://localhost:3000/api/wishlist/removeWishlistItems",
        "DELETE",
        {
          wishlistId: productId,
        }
      );
  
      if (response.success) {
        // ✅ Update the GlobalContext state immediately after removing
        setWishlistProducts((prevWishlist) =>
          prevWishlist.filter((item) => item._id !== productId)
        );
      }
    }
  
    // ✅ Ensure UI updates instantly
    setIsWishlisted(!isWishlisted);
  };
  

  const handleCart = async (productId, product) => {
    let response;
    console.log("clicked cart");
  
    if (!isInCart) {
      response = await handleFetch(
        "http://localhost:3000/api/cart/addCartItems",
        "POST",
        {
          cartId: productId,
        }
      );
  
      if (response.success) {
        setCartProducts((prevCart) => [
          ...prevCart,
          { product, quantity: 1, _id: response.newItemId }, // Assuming API returns new item ID
        ]);
      }
    } else {
      response = await handleFetch(
        "http://localhost:3000/api/cart/removeCartItems",
        "DELETE",
        {
          cartId: productId,
        }
      );
  
      if (response.success) {
        // ✅ Correctly remove item from cart state
        setCartProducts((prevCart) =>
          prevCart.filter((item) => item.product._id !== productId)
        );
      }
    }
  };
  
  
  return (
    <div className='custom_margin mx-6 flex gap-8'>
      <div className='relative'>
        <Image
          className='rounded-lg'
          src={product.img_url}
          height={400}
          width={400}
          alt={product.name}
        />
        <DiscRibbon selectedId={product.p_id} />
      </div>
      <div className='lg:w-[30%]'>
        <p className='font-bold text-3xl'>{product.name}</p>
        <p className='text-xl my-2 text-gray-600'>{product.description}</p>
        <div className='flex justify-between'>
          {product.sale_price == null ? (
            <p>Rs. {product.actual_price}</p>
          ) : (
            <p>
              <strike className='text-gray-400 pr-2 text-red-400'>
                Rs. {product.actual_price}
              </strike>{" "}
              Rs. {product.sale_price}
            </p>
          )}
          <div className='flex justify-center items-center gap-2'>
            <IoIosStar className='text-yellow-400' />
            <p>{product.rating} / 5</p>
          </div>
        </div>
        <ul className='custom_margin list-disc'>
          <li className='font-bold my-2 list-none'>Available Benefits</li>
          <li>
            Get 20% off on Minimum Purchase Value of Rs. 2500 & Above, Maximum
            off Rs. 600 on Times Card - HDFC Credit and Debit Card. TnC applied.
          </li>
          <li>
            Get FLAT 15% off on payment via Mastercards, min. purchase INR 2500,
            TnC applied
          </li>
          <li>Scan QR Code on Purchase & Get Extended E-warranty.</li>
        </ul>
        <div className='flex gap-2'>
          <button
            className={`border text-lg p-3 w-[100%] text-center bg-gray-200 hover:bg-green-200 ${
              !isInCart
                ? "rounded-l-lg border-r-slate-400"
                : isInCart
                ? "bg-white border-transparent hover:border-gray-400 border-b-2"
                : "rounded-r-lg"
            }`}
            onClick={() => handleCart(product.p_id)}>
            {isInCart ? "Remove from Cart" : "Add to Cart"}
          </button>
          <button className={`border text-lg p-3 w-[100%] text-center bg-gray-200 hover:bg-green-200 ${
              !isWishlisted
                ? "rounded-l-lg border-r-slate-400"
                : isWishlisted
                ? "bg-white border-transparent hover:border-gray-400 border-b-2"
                : "rounded-r-lg"
            }`} onClick={() => handleWishlist(product._id)}>
            {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
