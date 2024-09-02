"use client";

import React from 'react';
import { carouselDatanews } from '@/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Newscarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? carouselDatanews.length - 1 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === carouselDatanews.length - 1 ? 0 : currentIndex + 1);
    };

    const currentItem = carouselDatanews[currentIndex];

    return (
        <div className="relative flex items-center justify-between px-4 md:px-20 py-10 md:py-0 bg-[#F5F6E5]">
            {/* Previous Arrow */}
            <button
                className="p-2 text-white bg-[#C9D851] rounded-full"
                onClick={handlePrevClick}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Carousel Content */}
            <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-lg mx-auto">
                <div className="flex flex-col md:items-start justify-center space-y-4 w-full md:w-1/2">
                    <h2 className="text-[5vw] md:text-[2vw]  font-semibold leading-[6vw] md:leading-[2.5vw]">{currentItem.title}</h2>
                    <h2 className="text-[7vw] md:text-[3.2vw] font-semibold leading-[7vw] md:leading-[4vw] text-[#52B2AD]">{currentItem.title2}</h2>
                    <p className="text-[3.5vw] md:text-[1.5vw] italic">{currentItem.description}</p>
                    <div className="flex flex-row justify-center items-center space-y-1 md:space-y-0 space-x-0 md:space-x-4 gap-4">
                        <button className="px-6 py-2 text-[2.5vw] md:text-[1vw] text-white bg-[#1C3A3F] rounded-full">
                            {currentItem.buttonLabel} →
                        </button>
                        <div className="flex items-center px-6 py-2 text-[2.5vw] md:text-[1vw] text-white bg-[#1C3A3F] rounded-full gap-3">
                            <Image src="/phoneg.webp" alt='phone' width={20} height={20} />
                            <span>{currentItem.phone}</span>
                        </div>
                    </div>
                </div>
                <Image 
                    src={currentItem.image} 
                    alt="Investigation" 
                    width={300} 
                    height={300} 
                    className="w-[50%] h-auto md:w-1/3 mb-4 md:mb-0" 
                />
            </div>

            {/* Next Arrow */}
            <button
                className="p-2 text-white bg-[#C9D851] rounded-full"
                onClick={handleNextClick}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Newscarousel;
