"use client";
import mainimage1 from "@public/images/1.jpg";
import mainimage2 from "@public/images/2.jpg";
import mainimage3 from "@public/images/3.jpg";
import MainImageItem from "./MainImageItem";
import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const images = [mainimage1, mainimage2, mainimage3];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev === 2 ? 0 : prev + 1));
    }, 1000 * 5);
    return () => clearInterval(changeInterval);
  }, []);

  return (
    <div className="h-screen w-full -z-50 absolute bg-dark">
      {
        <MainImageItem
          src={images[currentIndex]}
          key={currentIndex}
        ></MainImageItem>
      }
    </div>
  );
};
export default ImageCarousel;
