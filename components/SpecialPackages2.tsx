import React from 'react';

interface SpecialPackageProps {
  title: string;
  description: string;
  image: string;
  offerText: string;
  labInfo: { icon: string; text: string }[];
}

const SpecialPackages: React.FC<SpecialPackageProps> = ({
  title,
  description,
  image,
  offerText,
  labInfo,
}) => {
  return (
    <section className="px-6 sm:px-10 md:px-20 lg:px-28 py-10">
      <div className="flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#EAE9E9] to-white rounded-[30px] gap-8 pt-8 sm:pt-10 md:pt-16 px-6 sm:px-10 md:px-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-black">{title}</h2>
          <p className="mt-4 sm:mt-6 text-black text-base sm:text-lg md:text-xl w-full md:w-[75%]">
            {description}
          </p>
        </div>

        {/* Right Section with Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="check.webp"
            alt="Special Package"
            className="w-full sm:w-[75%] object-contain rounded-[30px]"
          />
        </div>
      </div>

      {/* Search Input and Offer Text */}
      <div className="relative z-20  -mt-[2vw] ml-10 flex flex-col items-center md:items-start">
        <input
          type="text"
          placeholder="Search for test and package"
          className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] p-4 sm:p-5 rounded-2xl border border-blue-300 focus:ring-2 focus:ring-teal-500"
        />
        <p className="text-gray-500 mt-4">
          <strong>Get 15% OFF*</strong> on first order above ₹500 | Use: <strong>MediBridge</strong>
        </p>
      </div>

      {/* Lab Info */}
      <div className="flex flex-wrap justify-center gap-6 mt-12 sm:mt-16 md:mt-24">
        {labInfo.map((item, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-center gap-2 text-center w-full sm:w-auto">
            <img
              src={item.icon}
              alt="icon"
              className="w-16 sm:w-20 md:w-24 mx-auto"
            />
            <p className="text-sm sm:text-base md:text-lg text-gray-600 md:text-left text-center w-[70%] sm:w-auto">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialPackages;
