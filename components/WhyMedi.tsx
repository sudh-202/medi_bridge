import Image from "next/image";
import { ImageCarousel } from "./(home)/ImageCarousel";

const WhyMedi = () => {
    return (
        <>
            <div className="">
                <main className="flex flex-row items-center justify-center gap-10 ">
                    <div className="w-1/2">
                        <ImageCarousel />
                    </div>
                    <div className="w-1/2 flex flex-col">
                        <div className="bg-white rounded-3xl px-10 py-5  mb-4 border-[#C9D851] border-2 w-1/2">
                            <Image
                                src="/3steps.webp"
                                alt="MediBridge Building"
                                className="rounded-md mb-2 w-full h-auto"
                                width={500}
                                height={100}
                            />
                            <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">
                                Order now
                            </button>
                        </div>
                        <div className="w-1/2">
                            <Image
                                src="/medibuild.webp"
                                alt="MediBridge Building"
                                className=""
                                width={500}
                                height={100}
                            />
                        </div>
                    </div>
                </main>
                <Image
                    src="/news1.webp"
                    alt="news1"
                    width={1200}
                    height={100}
                    className=" mx-auto my-20"
                />
                
            </div>
        </>
    );
};

export default WhyMedi;
