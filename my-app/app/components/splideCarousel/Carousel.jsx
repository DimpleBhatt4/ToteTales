'use client';

import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import default Splide CSS

const Carousel = () => {
  return (
    <div className='flex justify-center'>
        <div className="custom_width my-16 flex-col justify-center items-center">
        <div className='pl-[2rem] my-4 text-2xl font-bold'>HOT PICKS</div>
      <div className='custom_width'>
      <Splide
        options={{
          type: 'loop',       // Carousel type
          perPage: 3,         // Number of slides visible at once
          perMove: 1,         // Number of slides to move on navigation
          autoplay: true,     // Enable autoplay
          interval: 3000,     // Time between slides in ms
          gap: '1rem',        // Gap between slides
          padding: { left: '2rem', right: '2rem' }, // Add padding to the carousel
          pagination: false,  // Disable pagination dots
          arrows: true,       // Enable navigation arrows
          breakpoints: {
            1024: { perPage: 2 }, // Show 2 slides on tablets
            768: { perPage: 1 },  // Show 1 slide on smaller devices
          },
        }}
        aria-label="My Bag Collection"
      >
        {/* Slides */}
        <SplideSlide>
          <Image
            src="/bag_img1_down.webp"
            width={300}
            height={300}
            alt="Bag Image 1 Down"
            className="rounded-md shadow-lg"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/bag_img1_front.webp"
            width={300}
            height={300}
            alt="Bag Image 1 Front"
            className="rounded-md shadow-lg"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/bag_img2_down.webp"
            width={300}
            height={300}
            alt="Bag Image 2 Down"
            className="rounded-md shadow-lg"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/bag_img2_front.webp"
            width={300}
            height={300}
            alt="Bag Image 2 Front"
            className="rounded-md shadow-lg"
          />
        </SplideSlide>
      </Splide>
      </div>
    </div>
    </div>
  );
};

export default Carousel;
