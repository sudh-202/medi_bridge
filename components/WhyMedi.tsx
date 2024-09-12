"use client"
import { FC } from "react";
import Carousel from "./carousel";
import WhyMediCard from "./cardmedi";
import Image from "next/image";

const WhyMedi: FC = () => {
  return (
    <main className="max-w-5xl mx-auto flex justify-center gap-10">
      <div><Carousel /></div>
      <div className="flex flex-col  ">
        <div className="bg-white rounded-3xl px-[45px] py-8 mb-4 border-[#C9D851] border-2">
          <Image src="/3steps.webp" alt="MediBridge Building" className="rounded-md mb-2 w-full h-auto" width={260} height={100} />
          <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">Order now</button>
        </div>
        <Image src="/medibuild.webp" alt="MediBridge Building" className="" width={480} height={100} />
      </div>
    </main>
  );
};

export default WhyMedi;
