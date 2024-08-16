"use client";

import React from 'react';
import { carouselDatanews } from '@/constant';
import { ChevronLeft, ChevronRight, Phone } from 'lucide-react';
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
        <div className="relative flex items-center justify-between px-20 py-10 bg-[#F5F6E5]">
            {/* Previous Arrow */}
            <button
                className="p-2 text-white bg-[#C9D851] rounded-full"
                onClick={handlePrevClick}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Carousel Content */}
            <div className="flex items-center justify-between w-full max-w-screen-lg mx-auto">
                <div className="flex flex-col items-start justify-center space-y-4 w-2/3 md:w-1/2">
                    <h2 className="text-[2vw] font-semibold leading-[1vw]">{currentItem.title}</h2>
                    <h2 className="text-[3.2vw] font-semibold leading-[2.5vw] text-[#52B2AD]">{currentItem.title2}</h2>
                    <p className="text-[1vw] italic">{currentItem.description}</p>
                    <div className="flex flex-row items-center space-x-4">
                        <button className="px-8 py-2 text-white bg-[#1C3A3F] rounded-full">
                            {currentItem.buttonLabel} →
                        </button>
                        <div className="flex items-center px-8 py-2 text-white bg-[#1C3A3F] rounded-full gap-3">
                            <Image src="/phoneg.webp" alt='phone' width={23} height={23}/>
                            <span>{currentItem.phone}</span>
                        </div>
                    </div>
                </div>
                <Image src={currentItem.image} alt="Investigation" width={300} height={300} className="hidden md:block w-1/3" />
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
