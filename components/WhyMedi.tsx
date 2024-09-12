"use client"
import { FC } from "react";
import Carousel from "./carousel";
import WhyMediCard from "./cardmedi";
import Image from "next/image";

const WhyMedi: FC = () => {
  return (
    <section>
    <main className="max-w-5xl mx-auto flex md:flex-row flex-col justify-center gap-10 md:p-0 p-10">
      <div><Carousel /></div>
      <div className="flex flex-col  md:-mt-0 -mt-[60vw] md:mb-0 mb-10">
        <div className="bg-white rounded-3xl px-[45px] py-8 mb-4 border-[#C9D851] border-2">
          <Image src="/3steps.webp" alt="MediBridge Building" className="rounded-md mb-2 w-full h-auto" width={260} height={100} />
          <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">Order now</button>
        </div>
        <Image src="/medibuild.webp" alt="MediBridge Building" className="" width={480} height={100} />
      </div>
    </main>
    <div className="flex items-center justify-center -mt-[15vw] mb-16">
    <Image src="/news1.webp" alt="news" className="" width={1400} height={100}/>
    </div>
    </section>
  );
};

export default WhyMedi;
