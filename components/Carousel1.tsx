"use client";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Importing icons from React Icons

interface CarouselProps {
  images: string[]; // An array of image URLs
}

const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile or desktop
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set breakpoint for mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const nextSlide = () => {
    if (isMobile) {
      setCurrent((prev) => (prev >= images.length - 1 ? 0 : prev + 1)); // Single slide for mobile
    } else {
      setCurrent((prev) => (prev >= images.length - 2 ? 0 : prev + 1)); // Two slides for desktop
    }
  };

  const prevSlide = () => {
    if (isMobile) {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1)); // Single slide for mobile
    } else {
      setCurrent((prev) => (prev === 0 ? images.length - 2 : prev - 1)); // Two slides for desktop
    }
  };

  return (
    <div className="relative w-full z-5 overflow-hidden">
      <div
        className="flex transition-transform ease-out duration-500 p-2"
        style={{
          transform: `translateX(-${current * (isMobile ? 100 : 50)}%)`, // Use 100% for mobile and 50% for desktop
        }}
      >
        {images.map((image, idx) => (
          <div
            key={idx}
            className={`${isMobile ? "w-full" : "w-1/2"} flex-shrink-0 p-2`}
          > {/* Adjust width for mobile and desktop */}
            <img
              src={image}
              alt={`Slide ${idx + 1}`}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-[#C9D851] p-2 rounded-full shadow-md text-white text-2xl"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#C9D851] p-2 rounded-full shadow-md text-white text-2xl"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageCarousel;
