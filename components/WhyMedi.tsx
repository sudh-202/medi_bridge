import Image from "next/image";
import { ImageCarousel } from "./(home)/ImageCarousel";

const WhyMedi = () => {
    return (
        <>
            <div className="px-4 md:px-0">
                <main className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-20">
                    {/* Carousel Section */}
                    <div className="w-full md:w-1/2">
                        <ImageCarousel />
                    </div>

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
                        {/* Order Now Section */}
                        <div className="bg-white rounded-3xl px-5 py-4 md:px-10 md:py-5 mb-4 border-[#C9D851] border-2 w-full md:w-1/2">
                            <Image
                                src="/3steps.webp"
                                alt="MediBridge Building"
                                className="rounded-md mb-2 w-full h-auto"
                                width={500}
                                height={100}
                            />
                            <button className="bg-[#0F3C49] text-white px-4 py-3 rounded-xl w-full mt-[-20px] md:mt-[-25px]">
                                Order now
                            </button>
                        </div>

                        {/* MediBridge Building Section */}
                        <div className="w-full md:w-1/2">
                            <Image
                                src="/medibuild.webp"
                                alt="MediBridge Building"
                                className="rounded-md"
                                width={500}
                                height={100}
                            />
                        </div>
                    </div>
                </main>

                {/* News Image */}
                <Image
                    src="/news1.webp"
                    alt="news1"
                    width={1200}
                    height={100}
                    className="w-full h-auto mx-auto my-10 md:my-20"
                />
            </div>
        </>
    );
};

export default WhyMedi;
