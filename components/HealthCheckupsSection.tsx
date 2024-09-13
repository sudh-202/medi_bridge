import Link from 'next/link';
import { IoIosArrowForward } from "react-icons/io";

const HealthCheckupsSection = () => {
    return (
        <section className="flex flex-col md:flex-row justify-between p-10 bg-[#F9FAFB] max-w-screen-xl mx-auto">
            {/* Left Container */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-light text-gray-700 leading-tight font-montserrat">
                    Popular Health
                    Checkups
                    Booked in
                    Hyderabad
                </h2>
                <p className="text-base md:text-lg font-semibold mt-4 font-manrope w-full md:w-[60%]">
                    India’s fastest AI-powered & temperature-controlled supply chain to collect and test your blood in the freshest state.
                </p>
            </div>

            {/* Right Container */}
            <div className="w-full md:w-2/3 flex flex-wrap">
                {/* Full Body Checkup */}
                <div className="w-full md:w-1/2 p-2">
                    <Link href="/full-body-test-packages-bangalore" className="flex justify-around items-center bg-[#F5F6E5] rounded-3xl shadow-lg hover:scale-105 transition-transform h-[25vh] md:h-[30vh]">
                        <div className="p-4 flex flex-row gap-4 md:gap-28">
                            <div className="flex flex-col gap-2 md:gap-6">
                                <h3 className="text-lg md:text-2xl font-bold mt-4 font-manrope text-left">
                                    Full body <br />checkup
                                </h3>
                                <img
                                    src="/group.webp"
                                    alt="Full Body Checkup"
                                    className="w-10 md:w-auto mx-auto"
                                />
                            </div>
                            <IoIosArrowForward className="rounded-full bg-[#C9D851] text-white text-3xl md:text-5xl p-2" />
                        </div>
                    </Link>
                </div>

                {/* Allergy Checkup */}
                <div className="w-full md:w-1/2 p-2">
                    <Link href="/allergy-test-packages-bangalore" className="block bg-[#C9D851] rounded-3xl shadow-lg hover:scale-105 transition-transform h-[12vh] md:h-[15vh]">
                        <div className="p-4 flex justify-center items-center gap-4 md:gap-28">
                            <h3 className="text-lg md:text-2xl font-bold text-left text-white">
                                Women<br />
                                Health
                            </h3>
                            <IoIosArrowForward className="rounded-full bg-white text-[#C9D851] text-3xl md:text-5xl p-2" />
                        </div>
                    </Link>
                </div>

                {/* Sexual Health Checkup */}
                <div className="w-full md:w-1/2 p-2">
                    <Link href="/std-test-packages-bangalore" className="block bg-[#C9D851] rounded-3xl shadow-lg hover:scale-105 transition-transform h-[12vh] md:h-[15vh]">
                        <div className="p-4 flex justify-center items-center gap-4 md:gap-28">
                            <h3 className="text-lg md:text-2xl font-bold text-left text-white">
                                Allergy<br />
                                Checkup
                            </h3>
                            <IoIosArrowForward className="rounded-full bg-white text-[#C9D851] text-3xl md:text-5xl p-2" />
                        </div>
                    </Link>
                </div>

                {/* Fever Checkup */}
                <div className="w-full md:w-1/2 p-2 mt-2 md:-mt-[7.5vw]">
                    <Link href="/full-body-test-packages-bangalore" className="flex flex-row-reverse justify-around items-center bg-[#F5F6E5] rounded-3xl shadow-lg hover:scale-105 transition-transform h-[25vh] md:h-[30vh]">
                        <IoIosArrowForward className="rounded-full bg-[#C9D851] text-white text-3xl md:text-5xl p-2 mt-4 md:mt-[8vw]" />
                        <div className="p-4 flex flex-row gap-4 md:gap-28">
                            <div className="flex flex-col gap-2 md:gap-6">
                                <img
                                    src="/health.webp"
                                    alt="Full Body Checkup"
                                    className="w-10 md:w-[5vw] mx-auto"
                                />
                                <h3 className="text-lg md:text-2xl font-bold mt-4 font-manrope text-left">
                                    Full body <br />checkup
                                </h3>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HealthCheckupsSection;
