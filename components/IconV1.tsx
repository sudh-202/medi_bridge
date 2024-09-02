import React from "react";
import Image from "next/image";
import { stepsData } from "@/constant";

const StepsSection: React.FC = () => {
    return (
        <main className="flex flex-col md:flex-row justify-center items-center gap-5 py-[6vw] px-[3vw]">
            {stepsData.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-center items-center gap-3 md:gap-5 w-full md:w-auto">
                    <Image src={step.image} alt={`Step ${index + 1}`} width={50} height={50} className="w-[12vw] h-[12vw] md:w-[70px] md:h-[70px]" />
                    <p className="text-center md:text-left text-[4vw] md:text-base w-full md:w-auto">{step.text}</p>
                </div>
            ))}
        </main>
    );
};

export default StepsSection;
