import {OurServices } from "@/constant"
import Image from "next/image"

const ourServices = () => {
    return (
        <main className="flex flex-col w-full bg-[#FEFFFE]">

            <div className="flex flex-col justify-center items-center max-w-[1960px] mx-auto">
                <h2 className="md:text-3xl text-2xl font-medium uppercase pb-10">Our services</h2>
                <div className=" ">
                    <div className="relative flex flex-wrap justify-center gap-14 pb-10">
                        {OurServices.map((group, index) => (
                            <div
                                key={group.id}
                                className="relative w-100 rounded-2xl overflow-hidden shadow-lg bg-[#FEFFFE]"
                                style={{ marginLeft: index !== 0 ? '-40px' : '0' }}
                            >
                                <Image
                                    src={group.src}
                                    alt={group.alt}
                                    width={320}
                                    height={200}
                                    className="w-full h-auto object-cover"
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