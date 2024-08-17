import { safetyMeasures } from '@/constant';
import { FC } from 'react';

interface SafetyMeasureProps {
  img: string;
  title: string;
}

const SafetyMeasure: FC<SafetyMeasureProps> = ({ img, title }) => {
  return (
    <div className="flex flex-row gap-5 items-center p-4 border border-gray-200 rounded-lg bg-[#F5F6E5] dark:bg-gray-800">
      <img src={img} alt={title} className="w-16 h-16 object-contain mb-2" />
      <span className="font-medium text-gray-800 dark:text-gray-200 w-[60%] text-left">{title}</span>
    </div>
  );
};

const SafetyMeasuresSection: FC = () => {
  return (
    <section className="py-10 bg-[#f8f8f890] dark:bg-gray-900 my-[4vw]">
      <div className="">
        <h2 className="text-center text-gray-800 dark:text-gray-200 text-lg font-medium mb-8 italic">
          We assure and provide utmost care and safety
        </h2>
        <div className="flex flex-wrap justify-center gap-4 ">
          {safetyMeasures.map((measure) => (
            <SafetyMeasure key={measure.id} img={measure.img} title={measure.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SafetyMeasuresSection;
