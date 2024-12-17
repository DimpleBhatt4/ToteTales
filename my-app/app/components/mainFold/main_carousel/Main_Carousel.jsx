"use client";
import React from "react";
import Image from "next/image";
import useCarousel from "../../carousel/useCarousel";

const Main_Carousel = () => {
  const carouselImages = [
    "/dummy_image1.avif",
    "/dummy_image2.avif",
  ];
  const change_time = 5000;

  const { currentItem, isFading } = useCarousel(carouselImages, change_time);

  return (
    <div className="custom_width flex justify-center">
      <div className={`flex justify-center text-sm transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}>
        <Image
          src={carouselImages[currentItem]}
          height={485}
          width={1280}
          alt={`Carousel Image ${currentItem + 1}`}
        />
      </div>
    </div>
  );
};

export default Main_Carousel;
