"use client";

import ImageWrapper from "@/atoms/ImageWrapper";
import { IMerchandiseItem } from "@/interfaces";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface ItemProps {
  item: IMerchandiseItem;
}

const MerchandiseItem = ({ item }: ItemProps) => {
  const imageSrces = [item.thumbnail, ...item.images];
  const images = imageSrces.map((image: string) => (
    <ImageWrapper
      src={image}
      alt={"product image"}
      imageSize={"w-full aspect-square border"}
      sizes="(max-width:640px) 100vw,(max-width:768px)50vw,35vw"
      key={image}
    ></ImageWrapper>
  ));
  const [startSlide, setStartSlide] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef: React.MutableRefObject<NodeJS.Timeout | undefined> = useRef();
  useEffect(() => {
    if (startSlide) {
      timerRef.current = setInterval(
        () =>
          setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1,
          ),
        1000,
      );
    }
    return () => clearInterval(timerRef.current);
  }, [startSlide, images.length]);

  const handleMouseEnter = () => {
    setStartSlide(true);
  };

  const handleMouseLeave = () => {
    clearInterval(timerRef.current);
    setCurrentIndex(0), setStartSlide((prev) => !prev);
  };

  return (
    <li
      className="flex flex-col"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/item/${item._id}`}>
        {images[currentIndex]}
        <p className="font-semibold font-cantarell">{item.brand.name}</p>
        <p>{item.name}</p>
        <p>
          From <span className="font-medium">${item.base_price}</span>
        </p>
      </Link>
    </li>
  );
};

export default MerchandiseItem;
