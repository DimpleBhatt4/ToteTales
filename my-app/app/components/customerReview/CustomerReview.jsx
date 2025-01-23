"use client";

import React, { useState, useEffect, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const CustomerReview = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Active slide index
  const splideRef = useRef(null); // Ref to access Splide instance

  const handleMove = (splide) => {
    setActiveIndex(splide.index); // Update active index on slide move
  };

  const handlePaginationClick = (index) => {
    if (splideRef.current) {
      splideRef.current.splide.go(index); // Move to the clicked slide
    }
  };

  return (
    <div className='flex justify-center'>
      <div className='w-3/4 my-16 flex-col justify-center items-center'>
        <h2 className='pl-[2rem] my-4 text-2xl font-bold'>Happy Customers</h2>
        <div className='custom_margin'>
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
            onMove={(splide) => handleMove(splide)}
            onMounted={(splide) => handleMove(splide)} // Initialize active index
            ref={splideRef}>
            <SplideSlide>
              <div className='flex justify-center  items-center gap-16 px-16'>
                <Image
                  src='/user_profile.jpg'
                  width={100}
                  height={100}
                  alt='user profile'
                  className='w-[140px] h-[140px] rounded-full overflow-hidden'
                />
                <p className='w-1/2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  voluptatum perferendis mollitia similique? Temporibus eveniet
                  aliquam tempora.
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, tenetur pariatur. Animi unde nemo nam inventore. Ullam ut eum quis.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex justify-center items-center gap-16 px-16'>
                <Image
                  src='/user_profile.jpg'
                  width={100}
                  height={100}
                  alt='user profile'
                 className='w-[140px] h-[140px] rounded-full overflow-hidden'
                />
                <p className='w-1/2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, sapiente!
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid est nostrum reiciendis quisquam veniam dolor illum aut optio, rem dolore!
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex justify-center items-center gap-16 px-16'>
                <Image
                  src='/user_profile.jpg'
                  width={100}
                  height={100}
                  alt='user profile'
                  className='w-[140px] h-[140px] rounded-full overflow-hidden'
                />
                <p className='w-1/2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eveniet aliquam tempora.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur debitis minus quo aliquid. Explicabo soluta, deleniti totam tenetur est eveniet.
                </p>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className='flex justify-center items-center gap-16 px-16'>
                <Image
                  src='/user_profile.jpg'
                  width={100}
                  height={100}
                  alt='user profile'
                  className='w-[140px] h-[140px] rounded-full overflow-hidden'
                />
                <p className='w-1/2'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                  mollitia similique!
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid sed consectetur ad, eius illo maxime quasi odio quas laudantium. Consectetur!
                </p>
              </div>
            </SplideSlide>
          </Splide>

          {/* Custom Pagination */}
          <div className='flex justify-center gap-2 mt-4'>
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePaginationClick(index)}
                className={`w-8 h-8 flex items-center justify-center rounded-full border ${
                  activeIndex === index
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                }`}>
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
