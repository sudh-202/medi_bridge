import React from "react";
import Image from "next/image";
import { stepsData } from "@/constant";

const StepsSection: React.FC = () => {
    return (

        <main className="flex justify-center items-center gap-5  py-10 max-w-7xl mx-auto ">
            {stepsData.map((step, index) => (
                     <div key={index} className="flex justify-center items-center gap-5">
                         <Image src={step.image} alt={`Step ${index + 1}`} width={70} height={70} />
                         <p className="w-1/3 ">{step.text}</p>
                     </div>
              ))}
        </main>

    );
};

export default StepsSection;
