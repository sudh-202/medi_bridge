import React, { useState } from 'react';
import { carouselData } from '@/constant';
import { FC } from "react";
import Image from "next/image";

interface CarouselProps {}

const Carousel: FC<CarouselProps> = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };
  return (
    <div className="bg-gray-200 rounded-lg h-[300px] md:h-[400px] w-full">

      <Image src="" width={500} height={100} alt='' className=" "/>
      <p className="text-center text-xl text-gray-500">Carousel Placeholder</p>
    
    </div>
  );
};

export default Carousel;
