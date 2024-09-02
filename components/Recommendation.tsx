
import {ageGroupsM, ageGroupsF } from "@/constant"
import Image from "next/image"

const aboutMedia = () => {
    return (
        <main className="flex flex-col bg-[#FEFFFE] py-[2vw]">

            <div className="flex flex-col justify-center items-center ">
                <h2 className="md:text-[2.4vw] text-[7vw] font-semibold  text-center px-10 md:px-0">Recommended Checkups for Men</h2>
                <p className="text-lg lg:p-2.5 text-center w-full lg:w-[60%] ">Curated by Doctors for you
                </p>
                <div className="container mx-auto py-10 px-4 border-gray-300 border-b-[1px]">
                    <div className="relative flex flex-wrap justify-center gap-16 pb-10">
                        {ageGroupsM.map((group, index) => (
                            <div
                                key={group.id}
                                className="relative w-80 rounded-3xl overflow-hidden shadow-lg bg-[#FEFFFE]"
                                style={{ marginLeft: index !== 0 ? '-40px' : '0' }}
                            >
                                <Image
                                    src={group.src}
                                    alt={group.alt}
                                    width={1220}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <p className="text-2xl font-bold text-teal-500  bg-opacity-70 p-2 rounded">
                                        {group.title}<br></br> <span className="text-black">{group.highlight}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center items-center max-w-7xl mx-auto pt-14">
                <h2 className="md:text-[2.4vw] text-[7vw] font-semibold  text-center px-10 md:px-0">Recommended Checkups for Women</h2>
                <p className="text-lg lg:p-2.5 text-center w-full lg:w-[60%] ">Curated by Doctors for you
                </p>
                <div className="container mx-auto py-10 px-4 border-black ">
                    <div className="relative flex flex-wrap justify-center gap-16 ">
                        {ageGroupsF.map((group, index) => (
                            <div
                                key={group.id}
                                className="relative w-80 rounded-3xl overflow-hidden shadow-lg bg-[#FEFFFE]"
                                style={{ marginLeft: index !== 0 ? '-40px' : '0' }}
                            >
                                <Image
                                    src={group.src}
                                    alt={group.alt}
                                    width={1220}
                                    height={200}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <p className="text-2xl font-bold text-teal-500  bg-opacity-70 p-2 rounded">
                                        {group.title}<br></br> <span className="text-black">{group.highlight}</span>
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

export default aboutMedia