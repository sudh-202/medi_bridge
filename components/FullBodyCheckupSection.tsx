// components/FullBodyCheckupSection.tsx
import React from 'react';
import { fullBodyCheckupData } from '@/constant/index';

const FullBodyCheckupSection = () => {
  const { title, description, purpose, benefits, keyComponents, stepsToBook } = fullBodyCheckupData;

  return (
    <section className="py-8 px-6 lg:px-24 bg-white flex flex-col justify-center items-center text-left">
      {/* Title and Description */}
      <div className="mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600">{description}</p>
      </div>

      {/* Purpose Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{purpose.title}</h3>
        <p className="text-lg text-gray-600">{purpose.content}</p>
      </div>

      {/* Benefits Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{benefits.title}</h3>
        <p className="text-lg text-gray-600">{benefits.content}</p>
      </div>

      {/* Key Components Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{keyComponents.title}</h3>
        <p className="text-lg text-gray-600">{keyComponents.content}</p>
      </div>

      {/* Steps to Book Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{stepsToBook.title}</h3>
        <ul className="list-disc ml-8 text-lg text-gray-600">
          {stepsToBook.steps.map((step, index) => (
            <li key={index} className="mb-2">
              {step}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FullBodyCheckupSection;
