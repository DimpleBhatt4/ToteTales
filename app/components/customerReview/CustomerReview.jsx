"use client";

import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const reviews = [
  {
    name: "Aditi Sharma",
    image: "/aditi_sharma_pp.jpg",
    feedback:
      "Love the quality! The customer service was exceptional and the product exceeded my expectations.",
  },
  {
    name: "Rahul Verma",
    image: "/rahul_verma_pp.jpg",
    feedback:
      "Fast delivery and excellent craftsmanship. I would definitely recommend this to my friends and family.",
  },
  {
    name: "Neha Kapoor",
    image: "/neha_kapoor_pp.jpg",
    feedback:
      "The design is stunning and exactly what I was looking for! I'm very happy with my purchase.",
  },
  {
    name: "Aman Joshi",
    image: "/aman_joshi_pp.jpg",
    feedback:
      "Great value for money! The attention to detail and durability are remarkable. 10/10 would buy again.",
  },
];

const CustomerReview = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const splideRef = useRef(null);

  const handleMove = (splide) => {
    setActiveIndex(splide.index);
  };

  const handlePaginationClick = (index) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index);
    }
  };

  return (
    <div className="flex justify-center px-4">
      <div className="w-full md:w-2/3 lg:w-1/2 my-12 flex flex-col justify-center items-center text-center bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Happy Customers</h2>

        <Splide
          options={{
            type: "loop",
            perPage: 1,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            arrows: false,
            pagination: false,
          }}
          onMove={handleMove}
          ref={splideRef}
        >
          {reviews.map((review, index) => (
            <SplideSlide key={index}>
              <div className="flex flex-col items-center gap-6 p-4 text-center">
                <Image
                  src={review.image}
                  width={100}
                  height={100}
                  alt={review.name}
                  className="w-[100px] h-[100px] rounded-full border-2 border-gray-300"
                />
                <div className="w-[30%] sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[40%]">

                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <p className=" text-sm md:text-base text-gray-600 leading-relaxed">
                    {review.feedback}
                  </p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Custom Pagination */}
        <div className="flex justify-center gap-2 mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => handlePaginationClick(index)}
              className={`w-4 h-4 rounded-full transition-all ${
                activeIndex === index
                  ? "bg-blue-600"
                  : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
