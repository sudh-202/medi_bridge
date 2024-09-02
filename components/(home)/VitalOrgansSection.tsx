// components/VitalOrgansSection.tsx
import Image from 'next/image';
import { VITAL_ORGANS } from '@/constant/index';

const VitalOrgansSection: React.FC = () => {
  return (
    <section className="py-[10vw] px-[6vw] flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="lg:w-1/2">
        <h2 className="md:text-[2.4vw] text-[8vw] text-center md:text-left font-semibold mb-6  text-[#103B47] ">For Vital Body Organs</h2>
        <p className="text-[#103B47] mb-6 pr-[8vw] text-center md:text-left">
          Explore our comprehensive range of diagnostic tests tailored for vital body organs. Our specialized diagnostic tests focus on evaluating the well-being of essential body organs, ensuring you receive the care you deserve.
        </p>
      </div>
      <div className="lg:w-1/2 flex flex-wrap gap-4">
        {VITAL_ORGANS.map((organ, index) => (
          <div key={index} className="flex flex-col items-center bg-[#F2F8E4] p-10 rounded-[3vw] w-[45%] sm:w-[30%]">
            <Image src={organ.icon} alt={organ.label} width={100} height={100} className="md:w-[5vw] md:h-[8vh]" />
            <p className="mt-2 text-center text-[1.1vw] font-medium">{organ.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VitalOrgansSection;
