"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "@/components/ui/carousel"; // Assuming this is your ShadCN carousel
import { wellnessData } from "@/constant";

interface WellnessCardProps {
  title: string;
  originalPrice: number;
  discountedPrice: number;
  discount: string;
  parameters: string;
  reportsTime: string;
  image: string;
}

const WellnessCard: React.FC<WellnessCardProps> = ({
  title,
  originalPrice,
  discountedPrice,
  discount,
  parameters,
  reportsTime,
  image,
}) => {
  return (
    <div className="bg-[#F2F3E7] rounded-2xl flex-shrink-0  ">
      <div className="flex flex-col ">
        {/* Top Section: Title and Price */}
        <div className="bg-[#C7DE57] rounded-t-2xl p-8 flex justify-between items-center">
          <h3 className="text-lg lg:text-2xl font-semibold text-black w-1/2">
            {title}
          </h3>
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <span className="line-through text-sm lg:text-lg text-gray-700">
                ₹{originalPrice}/-
              </span>
              <span className="text-xl lg:text-3xl font-bold text-black">
                ₹{discountedPrice}/-
              </span>
            </div>
            <span className="bg-white text-black text-xs lg:text-sm font-semibold px-4 py-1 rounded-lg inline-block mt-1">
              {discount}
            </span>
          </div>
        </div>

        {/* Middle Section: Parameters and Reports */}
        <div className="bg-[#F2F3E7] px-6 py-4 flex justify-between items-center border-b">
          <div className="space-y-4 w-1/2">
            <div className="flex items-center space-x-2">
              <Image src="/dna.webp" alt="DNA Icon" width={24} height={24} />
              <p className="text-sm lg:text-base text-black">
                <span className="font-bold">{parameters}</span> Parameters
                included
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <Image src="/time.webp" alt="Time Icon" width={24} height={24} />
              <p className="text-sm lg:text-base text-black">
                Reports in <span className="font-bold">{reportsTime}</span>
              </p>
            </div>
          </div>
          {/* Image Section */}
          <div className="relative w-24 h-24">
            <Image src={image} alt={title} width={1500} height={100} />
          </div>
        </div>

        {/* Bottom Section: Book Now Button */}
        <div className="p-4 w- flex justify-center">
          <button className="bg-[#1C3A3F] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#2b565e] w-full mx-10">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

const WellnessCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 300, // Adjust scroll amount as necessary
        behavior: "smooth",
      });
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -300, // Adjust scroll amount as necessary
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

      // Show left arrow if scrolled away from the start
      setShowLeftArrow(scrollLeft > 0);

      // Hide right arrow if scrolled to the end
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="pt-[6vw] md:px-[10vw] lg:px-[7vw] relative [mask-image:linear-gradient(to right, black 0%, black 80%, transparent 100%)]">
      <h2 className="text-[2.4vw] font-semibold mb-6 text-center">Full Body Packages</h2>

      {/* Carousel Wrapper */}
      <div className="relative">
        <Carousel
          ref={carouselRef}
          className="flex space-x-5 overflow-x-auto scrollbar-hide"
        >
          {wellnessData.map((item, index) => (
            <WellnessCard key={index} {...item} />
          ))}
        </Carousel>

        {/* Left Arrow */}
        {showLeftArrow && (
          <button
            onClick={scrollLeft}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {/* Right Arrow */}
        {showRightArrow && (
          <button
            onClick={scrollRight}
            className="absolute top-1/2 transform -translate-y-1/2 right-0 p-2 bg-white rounded-full shadow-md hover:bg-gray-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default WellnessCarousel;
