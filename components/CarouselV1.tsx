import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

// Example icons (You can replace these with your actual icons)
const icons = [
    { src: "/path-to-icon1.png", alt: "Icon 1" },
    { src: "/path-to-icon2.png", alt: "Icon 2" },
    { src: "/path-to-icon3.png", alt: "Icon 3" },
];

const CarouselV1 = () => {
    return (

        <Carousel className="max-w-7xl h-[60vh] rounded-xl border border-gray-200 bg-[#0F3C49]">
            <CarouselContent className="relative">
                {icons.map((icon, index) => (
                    <CarouselItem key={index}>
                        <div className="p-4 text-center">
                            <h2 className="text-4xl font-medium text-[#C9D851]">
                                Why Medi Bridge?
                            </h2>
                            <p className="text-sm text-white">Fast, Safe and Accurate</p>
                            <div className="mt-4 flex justify-center">
                                <Image src={icon.src} alt={icon.alt} width={50} height={50} />
                            </div>
                            <p className="mt-2 text-base font-semibold text-white">
                                100% on time
                            </p>
                            <p className="text-xs text-white">sample collection</p>
                            <div className="mt-6">
                                <Image
                                    src="/path-to-delivery-scooter.png"
                                    alt="Delivery"
                                    width={80}
                                    height={80}
                                />
                            </div>
                            <p className="mt-4 text-sm text-white">
                                Samples are sent straight to our labs at the right temperature
                                for you to get the most accurate results.
                            </p>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2">
                &lt;
            </CarouselPrevious>
            <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2">
                &gt;
            </CarouselNext>
        </Carousel>

    );
}

export default CarouselV1;
