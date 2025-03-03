'use client';

import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'; // Import default Splide CSS
import Link from 'next/link';

const Main_Carousel = () => {
  return (
    <div className='flex justify-center z-[-1]'>
        <div className="custom_width flex-col justify-center items-center">
      <div className='custom_width'>
      <Splide
        options={{
          type: 'loop',       // Carousel type
          perPage: 2,         // Number of slides visible at once
          perMove: 1,         // Number of slides to move on navigation
          autoplay: true,     // Enable autoplay
          interval: 5000,     // Time between slides in ms
          gap: '1rem',        // Gap between slides
          padding: { left: '2rem', right: '2rem' }, // Add padding to the carousel
          pagination: false,  // Disable pagination dots
          arrows: false,       // Enable navigation arrows
          breakpoints: {
            1024: { perPage: 2 }, // Show 2 slides on tablets
            768: { perPage: 1 },  // Show 1 slide on smaller devices
          },
        }}
        aria-label="My Bag Collection"
      >
        {/* Slides */}
        
        <SplideSlide>
          <Link href='/sale'>
          <Image
            src="/main_fold_carousel_1.png"
            width={640}
            height={218}
            alt="Bag Image 1 Down"
            className="rounded-md shadow-lg"
          />
          </Link>
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/main_fold_carousel_2.png"
            width={640}
            height={218}
            alt="Bag Image 1 Front"
            className="rounded-md shadow-lg"
          />
        </SplideSlide>
        <SplideSlide>
          <Image
            src="/main_fold_carousel_3.png"
            width={640}
            height={218}
            alt="Bag Image 1 Front"
            className="rounded-md shadow-lg"
          />
        </SplideSlide>
      </Splide>
      </div>
    </div>
    </div>
  );
};

export default Main_Carousel;
