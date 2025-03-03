
import { useState, useEffect } from "react";

const useCarousel = (items, change_time) => {
  const [currentItem, setCurrentItem] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
       //fade-out
      setIsFading(true);
      setTimeout(() => {
        setCurrentItem((prev) => (prev + 1) % items.length);
         // fade-in
        setIsFading(false);
      }, 500);
    }, change_time);

    return () => clearInterval(interval);
  }, [change_time, items.length]);

  return { currentItem, isFading };
};

export default useCarousel;
