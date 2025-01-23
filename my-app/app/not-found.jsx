import Image from "next/image";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex justify-center items-center gap-8'>
        <div>
          <Image
            className='rounded-full'
            src='/404_img2.webp'
            height={400}
            width={400}
            alt='404 image'
          />
        </div>
        <div>
          <div>
            <h1 className='text-5xl font-extrabold'>
              404
              <br />
              PAGE NOT FOUND
            </h1>
            <p className='text-2xl my-3'>
              We’re sorry, the page you’re looking for can’t be found. <br />{" "}
              Click here to return to the homepage.
            </p>
          </div>
          <div>
            <Link
              href={"/"}
              className='flex justify-center items-center gap-2 font-bg-brown text-white rounded-md p-3 '>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
