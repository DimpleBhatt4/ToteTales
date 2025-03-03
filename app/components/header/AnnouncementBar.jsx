"use client";
import React from "react";
import useCarousel from "../carousel/useCarousel";

const AnnouncementBar = () => {
  const announcements = [
    "Festive Sale : Extra 10% OFF on a minimum order of Rs. 2995. Use Code: FESTIVE10",
    "Free shipping on order above Rs. 999 on prepaid payment",
    "Last few Hours of Grand Vegan SALEbration - Sling BOGO only at ₹1399 only",
    "Additional 5% Off & Free Shipping On All Prepaid Orders.",
  ];

  const change_time = 3000;
  const { currentItem: currentAnnouncement, isFading } = useCarousel(announcements, change_time);

  return (
    <div className="announcement-bar flex justify-center items-center p-2 font-bg-blue text-white sm:text-xs h-12 md:text-lg">

      <p
        className={`flex justify-center text-sm transition-opacity duration-500 ${
          isFading ? "opacity-0" : "opacity-100"
        }`}
      >
        {announcements[currentAnnouncement]}
      </p>
    </div>
  );
};

export default AnnouncementBar;
