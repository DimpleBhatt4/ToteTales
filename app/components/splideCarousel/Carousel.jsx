"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
  return (
    <div className='flex justify-center'>
      <div className='custom_width my-16 flex flex-col justify-center items-center w-full px-4 md:px-8'>
        <h2 className='text-2xl font-bold mb-4 w-full text-left'>HOT PICKS</h2>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          autoplay={{ delay: 3000 }}
          spaceBetween={16} // 1rem gap
          navigation
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 16,
            },
          }}
          className='w-full'
        >
          {[
            "bag_img1_down.webp",
            "bag_img1_front.webp",
            "bag_img2_down.webp",
            "bag_img2_front.webp",
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <Link href='/sale' className='block'>
                <Image
                  src={`/${src}`}
                  width={300}
                  height={300}
                  alt={`Bag Image ${index + 1}`}
                  className='rounded-md shadow-lg w-full h-auto object-cover'
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
