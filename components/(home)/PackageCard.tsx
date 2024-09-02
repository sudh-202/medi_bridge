// components/PackagesSection.tsx
import Image from 'next/image';
import { PACKAGES } from '@/constant/index';

const PackagesSection: React.FC = () => {
  return (
    <section className="py-[8vw] px-[7vw]">
      <h2 className="text-center md:text-[2.4vw] text-[8vw] font-semibold  mb-6">All Type Packages</h2>
      <div className="flex flex-wrap justify-between gap-6">
        {PACKAGES.map((pkg, index) => (
          <div
            key={index}
            className={`p-6 rounded-3xl ${pkg.color} flex flex-row gap-10 justify-center items-center w-full sm:w-[calc(20%-12px)] md:w-[calc(33.333%-16px)]`}
          >
            <div className='flex relative flex-col justify-center '>
              <h3 className="text-[1.4vw] font-semibold">{pkg.title}</h3>
              <ul className="mt-2 space-y-1">
                {pkg.items.map((item, idx) => (
                  <li key={idx} className="text-[1.2vw] text-gray-800">
                    &gt; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-4 flex justify-end items-center">
              <Image
                src={pkg.icon}
                alt={pkg.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection;
