import Image from 'next/image'
import Carousel from "@/components/CarouselV1"

const WhyMedi = () => {
    return (
        /*
                <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-7  px-24">
                    <div className='w-[40%] mt-[-680px]'>
                        <Carousel />
                    </div>
                    <div className="md:w-1/2 w-full pr-28 flex flex-col justify-between">
                        <div className="bg-white rounded-3xl px-[65px] py-8 mb-4 border-[#C9D851] border-2">
                            <Image src="/3steps.webp" alt="MediBridge Building" className="rounded-md mb-2 w-full h-auto" width={500} height={100} />
                            <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">Order now</button>
                        </div>
                        <div className="">
                            <Image src="/medibuild.webp" alt="MediBridge Building" className="" width={500} height={100} />
                            {/* <button className="bg-blue-600 text-white px-4 py-3 rounded">Watch Video</button> }
                        </div>
                    </div>
                </div>
        */

        <main className='flex flex-row items-center justify-center gap-10 translate-x-[10%]'>
            <div className='w-1/2'>
                <Carousel />
            </div>
            <div className='w-1/2 flex flex-col'>
                <div className="bg-white rounded-3xl px-10 py-5  mb-4 border-[#C9D851] border-2 w-1/2">
                    <Image src="/3steps.webp" alt="MediBridge Building" className="rounded-md mb-2 w-full h-auto" width={500} height={100} />
                    <button className="bg-[#0F3C49] text-white px-4 py-3  rounded-xl w-full mt-[-25px]">Order now</button>
                </div>
                <div className='w-1/2'>
                <Image src="/medibuild.webp" alt="MediBridge Building" className="" width={500} height={100} />
                </div>
            </div>


        </main>
    );
}

export default WhyMedi;