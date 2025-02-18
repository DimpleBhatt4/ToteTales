"use client";
import React, { useState, createContext, useEffect } from "react";
import handleFetch from "../utilis/server/handleFetch";

export const GlobalContext = createContext(null);

export const ProductsProvider = ({ children }) => {
  const [cartItemsId, setCartItemsId] = useState([]);
  const [wishlistItemsId, setWishlistItemsId] = useState([]);
  const [wishlistProducts, setWishlistProducts] = useState([]);
 useEffect(()=>{
    const fetchWishlistProducts = async () => {
        try {
          const response = await handleFetch('http://localhost:3000/api/wishlist/viewWishlistItems');
          setWishlistProducts(response.wishlistProducts);
        } catch (error) {
          console.log('Error fetching wishlist products:', error);
        }
      };
      fetchWishlistProducts()
 },[])
  return (
    <GlobalContext.Provider
      value={{
        cartItemsId,
        setCartItemsId,
        wishlistItemsId,
        setWishlistItemsId,
        wishlistProducts,
        setWishlistProducts,
      }}>
      {children}
    </GlobalContext.Provider>
  );
};
