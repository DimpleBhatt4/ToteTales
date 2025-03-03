"use client";
import React from "react";

const Button = ({ value, onClick }) => {
  return (
    <button
      className={`border text-lg p-3 w-[100%] text-center bg-gray-200 hover:bg-green-200 ${
        value === "Add to Cart"
          ? "rounded-l-lg border-r-slate-400"
          : value === "Remove from Cart"
          ? "bg-white border-transparent hover:border-gray-400 border-b-2"
          : "rounded-r-lg"
      }`}
      onClick={onClick} // ✅ Fix: Use the passed onClick function
    >
      {value}
    </button>
  );
};

export default Button;

