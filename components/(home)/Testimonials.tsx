"use client"

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react"; 
import Image from "next/image";
import { testimonials1 } from "@/constant";

const TestimonialCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentIndex(currentIndex === 0 ? testimonials1.length - 1 : currentIndex - 1);
    };

    const handleNextClick = () => {
        setCurrentIndex(currentIndex === testimonials1.length - 1 ? 0 : currentIndex + 1);
    };

    const currentTestimonial = testimonials1[currentIndex];

    return (
        <div className="relative flex flex-col md:flex-row items-center md:px-24 md:py-14 px-4 py-8">
            <div className="flex flex-col md:mb-0 mb-8">
                <h2 className="text-[6vw] md:text-[2.4vw] text-center md:text-left font-bold mb-4">What Our Customers Say</h2>
                <p className="text-gray-600 italic w-full md:w-[60%] mb-8 md:mb-20 text-center md:text-left">
                    Thank you for trusting MediBridge Diagnostics - because we care for your health as much as you do.
                </p>
                <a href="#" className="text-black underline italic text-center md:text-left">
                    Write a review {`>`}
                </a>
            </div>

            <div className="flex items-center justify-center w-full md:w-auto p-5 md:p-0">
                <div className="flex flex-col w-full md:w-auto">
                    <div className="mx-0 md:mx-4 w-full max-w-lg bg-[#F5F6E5] p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">{currentTestimonial.review}</p>
                        <div className="flex items-center space-x-4"></div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center mt-4 md:mt-0">
                        <div className="flex flex-col py-4 md:py-5">
                            <p className="text-lg font-semibold text-center md:text-left">{currentTestimonial.name}</p>
                            <div className="flex justify-center md:justify-start space-x-1">
                                {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
                                    <Star key={index} className="text-[#C9D851]" size={16} />
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-5 mt-4 md:mt-0">
                            <button onClick={handlePrevClick} className="p-2 text-black hover:bg-gray-200 rounded-2xl bg-[#ebe7e7]">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={handleNextClick} className="p-2 text-black hover:bg-gray-200 rounded-2xl bg-[#ebe7e7]">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCarousel;
