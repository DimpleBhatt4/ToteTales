'use client';

import React from 'react';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Carousel = () => {
  return (
    <div className='flex justify-center'>
      <div className='custom_width my-16 flex flex-col justify-center items-center w-full px-4 md:px-8'>
        <h2 className='text-2xl font-bold mb-4 w-full text-left'>HOT PICKS</h2>
        <Splide
          options={{
            type: 'loop',
            perPage: 3,
            perMove: 1,
            autoplay: true,
            interval: 3000,
            gap: '1rem',
            padding: { left: '1rem', right: '1rem' },
            pagination: false,
            arrows: true,
            breakpoints: {
              1024: { perPage: 2, gap: '0.5rem' },
              768: { perPage: 1, gap: '0.5rem' },
            },
          }}
          aria-label='Bag Collection'
          className='w-full'
        >
          {["bag_img1_down.webp", "bag_img1_front.webp", "bag_img2_down.webp", "bag_img2_front.webp"].map((src, index) => (
            <SplideSlide key={index}>
              <Image
                src={`/${src}`}
                width={300}
                height={300}
                alt={`Bag Image ${index + 1}`}
                className='rounded-md shadow-lg w-full h-auto object-cover'
              />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Carousel;
