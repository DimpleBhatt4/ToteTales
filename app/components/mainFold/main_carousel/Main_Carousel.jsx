"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

export default function Main_Carousel() {
  return (
    <div className="w-full px-4 sm:px-8 max-w-7xl mx-auto">
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 8000 }}
        spaceBetween={16}
        centeredSlides={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
        }}
      >
        {["1", "2", "3"].map((id) => (
          <SwiperSlide key={id}>
            <Link href="/sale" className="block">
              <Image
                src={`/main_fold_carousel_${id}.png`}
                alt={`Bag ${id}`}
                width={640}
                height={218}
                className="w-full h-auto object-cover rounded-md shadow-lg"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
