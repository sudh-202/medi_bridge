import {OurServices } from "@/constant"
import Image from "next/image"

const ourServices = () => {
    return (
        <main className="flex flex-col w-full bg-[#FEFFFE] p-4">

            <div className="flex flex-col justify-center items-center ">
                <h2 className="text-[6vw] md:text-[2.4vw] font-semibold mb-6 uppercase">Our services</h2>
                <div className=" ">
                    <div className="relative flex  justify-center gap-16 ">
                        {OurServices.map((group, index) => (
                            <div
                                key={group.id}
                                className="relative w-100 rounded-2xl overflow-hidden shadow-lg bg-[#FEFFFE]"
                                style={{ marginLeft: index !== 0 ? '-40px' : '0' }}
                            >
                                <Image
                                    src={group.src}
                                    alt={group.alt}
                                    width={100}
                                    height={100}
                                    className="w-[28vw] h-auto object-cover "
                                />
                                <div className="absolute top-4 left-4">
                                    <p className="lg:text-3xl font-bold text-white  bg-opacity-70 p-2 rounded">
                                        {group.title}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>


        </main>


    )
}

export default ourServices