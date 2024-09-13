// components/MedicalCheckups.tsx
import Image from 'next/image';

const medicalCheckupsData = [
  { id: 1, title: 'Diabetes Checkup', icon: '/bloodtest.webp' },
  { id: 2, title: 'Senior Citizen', icon: '/senior.webp' },
  { id: 3, title: 'Fever Checkup', icon: '/fever1.webp' },
  { id: 4, title: 'Full Body Checkups', icon: '/group2.webp' },
  { id: 5, title: 'Lifestyle Checkup', icon: '/cig.webp' },
  { id: 6, title: 'Cancer Checkup', icon: '/rib.webp' },
];

const MedicalCheckups = () => {
  return (
    <section className="pb-12 px-24 bg-white flex justify-around items-center md:flex-row flex-col ">
      <h2 className="md:text-7xl text-6xl font-light text-gray-800 mb-8 md:w-[30%]">
        Curated Medical Checkups For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {medicalCheckupsData.map((checkup) => (
          <div
            key={checkup.id}
            className="flex flex-col items-center justify-center  p-6 rounded-3xl  transition-transform transform hover:scale-105">
            <Image
              src={checkup.icon}
              alt={checkup.title}
              width={100}
              height={100}
              className="mb-4 rounded-3xl"
            />
            <h3 className="text-lg font-medium text-gray-700 text-center">
              {checkup.title}
            </h3>
          </div>
          
        ))}
      </div>
    </section>
  );
};

export default MedicalCheckups;
