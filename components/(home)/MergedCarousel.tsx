"use client"

import React from 'react';
import { carouselDataSec } from '@/constant';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Carousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? carouselDataSec.length - 1 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === carouselDataSec.length - 1 ? 0 : currentIndex + 1);
    };

    return (
        <div className="relative flex items-center justify-center flex-row">
            {/* Previous Arrow */}
            <button
                className="absolute left-0 p-2 text-green-500"
                onClick={handlePrevClick}
            >
                <ChevronLeft size={24} />
            </button>

            {/* Carousel Content */}
            <div className="flex flex-col items-center space-y-4">
                <h2 className="text-xl font-semibold">
                    {carouselDataSec[currentIndex].title}
                </h2>
                <div className="text-center">
                    <img src={carouselDataSec[currentIndex].image} alt={carouselDataSec[currentIndex].title} className="w-[40%] h-auto" />
                    <p className="text-lg">{carouselDataSec[currentIndex].description}</p>
                    <p className="text-2xl font-bold">
                        <span className="line-through text-gray-500">{carouselDataSec[currentIndex].originalPrice}</span>{' '}
                        {carouselDataSec[currentIndex].price}
                    </p>
                    <span className="text-sm text-green-500">{carouselDataSec[currentIndex].discount}</span>
                    <p className="mt-2 text-sm text-gray-600">{carouselDataSec[currentIndex].reportsTime}</p>
                </div>
            </div>

            {/* Next Arrow */}
            <button
                className="absolute right-0 p-2 text-green-500"
                onClick={handleNextClick}
            >
                <ChevronRight size={24} />
            </button>
        </div>
    );
};

export default Carousel;
