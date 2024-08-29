// components/ImageGallery.tsx
'use client';
import { useState } from 'react';
import { galleryimages } from '@/constant';
import Image from 'next/image';

const ImageGallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const images = galleryimages;

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) => prevVisibleImages + 3);
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold text-left px-20 py-6 bg-[#E3EBA8]">Health Camps</h2>
      <div className="flex flex-wrap">
        {/* First 3 images */}
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden h-full">
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover transition duration-300 ease-in-out hover:filter hover:grayscale-[50%]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-wrap">
            {images.slice(1, 3).map((image, index) => (
              <div key={index} className="w-1/2">
                <div className="overflow-hidden h-full">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition duration-300 ease-in-out hover:filter hover:grayscale-[50%]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next 3 items (2 images + 1 button) */}
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/4">
            <div className="overflow-hidden h-full">
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="w-full h-full object-cover transition duration-300 ease-in-out hover:filter hover:grayscale-[50%]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="overflow-hidden h-full">
              <img
                src={images[4].src}
                alt={images[4].alt}
                className="w-full h-full object-cover  hover:filter hover:grayscale-[50%]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/4 flex items-center justify-center bg-[#0F3C49]">
            <button
              onClick={loadMoreImages}
              className="text-3xl text-white"
            >
              More {'>'}
            </button>
          </div>
        </div>
      </div>
      <Image
                    src="/letter.webp"
                    alt="news1"
                    width={1000}
                    height={100}
                    className=" mx-auto my-20"
                />
    </div>
  );
};

export default ImageGallery;
