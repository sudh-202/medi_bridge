"use client"

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react"; // Assuming you are using lucide-react for icons
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
        <div className="relative flex flex-row items-center px-24 py-14 ">
            <div className="flex flex-col ">
                <h2 className="text-[2.2vw] font-bold mb-4">What Our Customers Say</h2>
                <p className="text-gray-600  italic w-[60%] mb-20">
                    Thank you for trusting MediBridge Diagnostics - because we care for your health as much as you do.
                </p>
                <a href="#" className="text-black underline italic">
                    Write a review {`>`}
                </a>
            </div>

            <div className="flex items-center justify-center ">


                <div className="flex flex-col">

                    <div className="mx-4 w-full max-w-lg bg-[#F5F6E5] p-6 rounded-lg shadow-md">
                        <p className="text-gray-700 mb-4">{currentTestimonial.review}</p>
                        <div className="flex items-center space-x-4">
                        </div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div className="flex flex-col ml-4 py-5">
                            <p className="text-lg font-semibold">{currentTestimonial.name}</p>
                            <div className="flex space-x-1">
                                {Array.from({ length: currentTestimonial.rating }).map((_, index) => (
                                    <Star key={index} className="text-[#C9D851]" size={16} />
                                ))}
                            </div>
                        </div>
                        <div className="py-5 flex gap-5 mr-5">
                            <button onClick={handlePrevClick} className="p-2 text-white hover:bg-gray-200 rounded-2xl bg-[#ebe7e7]">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={handleNextClick} className="p-2 text-white hover:bg-gray-200  rounded-2xl bg-[#ebe7e7]">
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
