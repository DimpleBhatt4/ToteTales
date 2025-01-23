import Image from "next/image";
import React from "react";
import Link from "next/link";

const HimHerCollage = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex-col justify-center items-center custom_margin'>
        <div className=' my-4 text-2xl font-bold'>Shop for HIM/HER</div>
        <div className='custom_width grid grid-rows-6 grid-cols-4 gap-4'>
          <div className='border row-span-6 col-span-2'>
            01
            {/* <Image
              src='/menBag.webp'
              width={346.05}
              height={346.05}
              alt='Shop for HIM'
            /> */}
          </div>
          <div className='border row-span-4 col-span-1 '>02</div>
          <div className='border row-span-5 col-span-1 '>03</div>
          <div className='border row-span-6 col-span-1 '>04</div>
          <div className='border row-span-2 col-span-1 '>05</div>
          <div className='border row-span-1 col-span-1 '>06</div>
        </div>
      </div>
    </div>
  );
};

export default HimHerCollage;
