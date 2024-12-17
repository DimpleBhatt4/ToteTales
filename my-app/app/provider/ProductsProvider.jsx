'use client'
import React, { useState, createContext } from "react";

export const GlobalContext = createContext(null);

export const ProductsProvider = ({ children }) => {

    const [cartItemsId, setCartItemsId] = useState([]);
    const [wishlistItemsId, setWishlistItemsId] = useState([]);

    // Use State for Add to cart, wishlist text toggle functionality
    // const [isAddedToCart, setIsAddedToCart] = useState(false)
    // const [isWishlisted, setIsWishlisted] = useState(false)

    return (
        <GlobalContext.Provider value={{ cartItemsId, setCartItemsId, wishlistItemsId, setWishlistItemsId}}>
            {children}
        </GlobalContext.Provider>
    );
};
