"use client";
import React, { useContext } from "react";
import { GlobalContext } from "../../../app/provider/ProductsProvider";

const Button = ({ value, itemId }) => {
  const {
    setCartItemsId,
    setWishlistItemsId,
    wishlistItemsId,
    cartItemsId,
  } = useContext(GlobalContext);

  return (
    <button
      className={`border text-lg p-3 w-[100%] text-center bg-gray-200 hover:bg-green-200 ${
        value === "Add to Cart"
          ? "rounded-l-lg border-r-slate-400"
          : value === "Remove"
          ? "bg-white border-transparent hover:border-gray-400 border-b-2"
          : "rounded-r-lg"
      }`}
      onClick={() => {
        if (value === "Add to Cart") {
          console.log("clicked");
          setCartItemsId((prevCartItemsId) => [...prevCartItemsId, itemId]);
        } else if (value === "Wishlist") {
          setWishlistItemsId((prevWishlistItemsId) => [
            ...prevWishlistItemsId,
            itemId,
          ]);
        } else if (value === "Remove from Cart" ) {
          const updatedCartItemsID = cartItemsId.filter((id) => id !== itemId);
          setCartItemsId(updatedCartItemsID);
          console.log("updated items", cartItemsId);
        } else if (value == "Remove from Wishlist") {
          const updatedWishlistItemsID = wishlistItemsId.filter(
            (id) => id !== itemId
          );
          setWishlistItemsId(updatedWishlistItemsID);
        }
      }}>
      {value}
    </button>
  );
};

export default Button;
