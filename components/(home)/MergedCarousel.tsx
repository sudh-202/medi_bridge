"use client";

import React from 'react';
import { carouselDataSec } from '@/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? carouselDataSec.length - 1 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === carouselDataSec.length - 1 ? 0 : currentIndex + 1);
    };

    const currentItem = carouselDataSec[currentIndex];

    return (
        <div className="relative flex items-center justify-center flex-row px-4 md:px-[9vw] bg-[url('/back.webp')] bg-cover">
            {/* Previous Arrow */}
            <button
                className="absolute left-0 p-2 md:p-4 text-white bg-[#C9D851] rounded-full transform translate-x-[40%] md:translate-x-[90%]"
                onClick={handlePrevClick}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Carousel Content */}
            <section className="flex flex-col md:flex-row items-center gap-5 md:gap-10 py-10 md:py-[5vw]">
                <div className="flex flex-col items-start justify-center w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-[6vw] md:text-[2.4vw] font-semibold mb-4 md:mb-6">Get your pregnancy routine Test</h2>
                    <p className="text-[3vw] md:text-[1vw] pb-3 md:pb-5">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    </p>
                    <div className="flex flex-row justify-center md:justify-start items-center mx-auto md:mx-0 gap-3 md:gap-5">
                        <Image src="/timer.webp" alt="timer" width={50} height={70} className="px-[3vw] py-[2vw] md:px-[1.6vw] md:py-[1.4vw] bg-[#F5F6E5] rounded-2xl" />
                        <p className="text-[4vw] md:text-[1.5vw] w-full md:w-1/2">Reports in 6 hours</p>
                    </div>
                </div>
                <Image src="/doctor1.webp" alt="doctor" width={800} height={100} className="w-2/3 md:w-1/3" />

                <div className="bg-[#F2F3E7] rounded-2xl flex-shrink-0 w-full md:w-1/3">
                    <div className="flex flex-col">
                        {/* Top Section: Title and Price */}
                        <div className="bg-[#C7DE57] rounded-t-2xl p-4 md:p-8 flex justify-between items-center">
                            <h3 className="text-lg md:text-2xl font-semibold text-black w-1/2">
                                {currentItem.title}
                            </h3>
                            <div className="text-right">
                                <div className="flex items-center space-x-2">
                                    <span className="line-through text-sm md:text-lg text-gray-700">
                                        {currentItem.originalPrice}
                                    </span>
                                    <span className="text-xl md:text-3xl font-bold text-black">
                                        {currentItem.discount}/-
                                    </span>
                                </div>
                                <span className="bg-white text-black text-xs md:text-sm font-semibold px-2 md:px-4 py-1 rounded-lg inline-block mt-1">
                                    {currentItem.discount}
                                </span>
                            </div>
                        </div>

                        {/* Middle Section: Parameters and Reports */}
                        <div className="bg-[#F2F3E7] px-4 md:px-6 py-2 md:py-4 flex justify-between items-center border-b">
                            <div className="space-y-2 md:space-y-4 w-2/3 md:w-1/2">
                                <div className="flex items-center space-x-2">
                                    <Image src="/dna.webp" alt="DNA Icon" width={20} height={20} />
                                    <p className="text-xs md:text-base text-black">
                                        <span className="font-bold">{currentItem.description}</span> Parameters included
                                    </p>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Image src="/time.webp" alt="Time Icon" width={20} height={20} />
                                    <p className="text-xs md:text-base text-black">
                                        Reports in <span className="font-bold">{currentItem.reportsTime}</span>
                                    </p>
                                </div>
                            </div>
                            {/* Image Section */}
                            <div className="relative w-16 h-16 md:w-24 md:h-24">
                                <Image src={currentItem.image} alt={currentItem.title} layout="fill" objectFit="contain" />
                            </div>
                        </div>

                        {/* Bottom Section: Book Now Button */}
                        <div className="p-2 md:p-4 flex justify-center">
                            <button className="bg-[#1C3A3F] text-white font-semibold py-2 px-4 md:py-2 md:px-6 rounded-full hover:bg-[#2b565e] w-full">
                                BOOK NOW
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Next Arrow */}
            <button
                className="absolute right-0 p-2 md:p-4 text-white bg-[#C9D851] rounded-full transform -translate-x-[40%] md:-translate-x-[90%]"
                onClick={handleNextClick}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;
