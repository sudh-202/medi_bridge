import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  { src: "/img1.webp", alt: "Image 1" },
  { src: "/img2.webp", alt: "Image 2" },
  { src: "/img3.webp", alt: "Image 3" },
  { src: "/img4.webp", alt: "Image 4" },
  { src: "/img5.webp", alt: "Image 5" },
];

export function ImageCarousel() {
  return (
    <Carousel className="  flex items-center justify-center  relative  bg-[#0F3C49] rounded-2xl">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="mx-auto flex justify-end">
              <Image
                src={image.src}
                alt={image.alt}
                width={100}
                height={100}
                className=" rounded-2xl w-[20vw]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 top-[55%] transform -translate-y-1/2 z-10 bg-transparent border-none text-white " />
      <CarouselNext className="absolute right-0 top-[55%] transform -translate-y-1/2 z-10 bg-transparent border-none text-white" />
    </Carousel>
  );
}
