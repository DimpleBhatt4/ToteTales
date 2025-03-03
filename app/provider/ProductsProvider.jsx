"use client";
import React, { useState, createContext, useEffect } from "react";
import handleFetch from "../utilis/server/handleFetch";

export const GlobalContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [cartItemsId, setCartItemsId] = useState([]);
  const [wishlistItemsId, setWishlistItemsId] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([])

  useEffect(() => {
    const fetchWishlistProducts = async () => {
      try {
        const response = await handleFetch("http://localhost:3000/api/wishlist/viewWishlistItems");
        setWishlistProducts(response.wishlistProducts || []);
      } catch (error) {
        console.log("Error fetching wishlist products:", error);
      }
    };
  
    const fetchCartProducts = async () => {
      try {
        const response = await handleFetch("http://localhost:3000/api/cart/viewCartItems");
        setCartProducts(response.userCart?.items || []);
        console.log("cart productss", response)
      } catch (error) {
        console.log("Error fetching cart products:", error);
      }
    };
  
    fetchWishlistProducts();
    fetchCartProducts();
  }, []);

  useEffect(() => {
    console.log("Updated cartProducts:", cartProducts);
  }, [cartProducts]);
  
  useEffect(() => {
    console.log("Updated wishlistProducts:", wishlistProducts);
  }, [wishlistProducts]);
  
  return (
    <GlobalContext.Provider
      value={{
        cartItemsId,
        setCartItemsId,
        wishlistItemsId,
        setWishlistItemsId,
        wishlistProducts,
        setWishlistProducts,
        cartProducts,
        setCartProducts
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
