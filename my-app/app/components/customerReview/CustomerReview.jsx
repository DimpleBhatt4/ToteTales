"use client";

import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const reviews = [
  {
    name: "Aditi Sharma",
    image: "/user_profile.jpg",
    feedback:
      "Absolutely love the quality! The customer service was exceptional, and the product exceeded my expectations.",
  },
  {
    name: "Rahul Verma",
    image: "/user_profile.jpg",
    feedback:
      "Fast delivery and excellent craftsmanship. I would definitely recommend this to my friends and family.",
  },
  {
    name: "Neha Kapoor",
    image: "/user_profile.jpg",
    feedback:
      "The design is stunning and exactly what I was looking for! I'm very happy with my purchase.",
  },
  {
    name: "Aman Joshi",
    image: "/user_profile.jpg",
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
      <div className="w-full md:w-3/4 my-12 flex-col justify-center items-center">
        <h2 className="text-center text-2xl font-bold mb-6">Happy Customers</h2>

        <div className="custom_margin">
          <Splide
            options={{
              type: "loop",
              perPage: 1,
              perMove: 1,
              gap: "1rem",
              autoplay: true,
              interval: 3000,
              breakpoints: {
                1024: { perPage: 1 },
                768: { perPage: 1 },
              },
            }}
            onMove={handleMove}
            onMounted={handleMove}
            ref={splideRef}
          >
            {reviews.map((review, index) => (
              <SplideSlide key={index}>
                <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-12 px-6 md:px-16">
                  <Image
                    src={review.image}
                    width={100}
                    height={100}
                    alt={review.name}
                    className="w-[100px] h-[100px] md:w-[140px] md:h-[140px] rounded-full"
                  />
                  <div className="w-full md:w-1/2">
                    <h3 className="text-lg font-semibold">{review.name}</h3>
                    <p className="text-sm md:text-base leading-relaxed">
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
                className={`w-6 h-6 md:w-8 md:h-8 flex items-center justify-center rounded-full border transition-all ${
                  activeIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerReview;
