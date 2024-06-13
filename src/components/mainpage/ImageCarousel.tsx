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
      {/* <ul className="flex gap-4 items-center justify-center absolute inset-x-0 bottom-4">
        <li key={1}>
          <input
            type="radio"
            value={0}
            className="border-2 rounded-full !border-slate-200 accent-light radio-color cursor-pointer"
            name="main-image"
            checked={currentIndex === 0}
            onChange={() => {
              setCurrentIndex(0);
            }}
          ></input>
        </li>
        <li key={2}>
          <input
            type="radio"
            value={0}
            className="border-2 rounded-full !border-slate-200 accent-light radio-color cursor-pointer"
            name="main-image"
            checked={currentIndex === 1}
            onChange={() => {
              setCurrentIndex(1);
            }}
          ></input>
        </li>
        <li key={3}>
          <input
            type="radio"
            value={0}
            className="border-2 rounded-full !border-slate-200 accent-light radio-color cursor-pointer"
            name="main-image"
            checked={currentIndex === 2}
            onChange={() => {
              setCurrentIndex(2);
            }}
          ></input>
        </li>
      </ul> */}
    </div>
  );
};
export default ImageCarousel;
