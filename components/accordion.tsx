import React, { useState } from 'react';
import { faqData } from '@/constant'

interface AccordionItemProps {
  title: string;
  description: string;
  content: string[];
  index: number;
  activeIndex: number | null;
  handleToggle: (index: number) => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  description,
  content,
  index,
  activeIndex,
  handleToggle,
}) => {
  const isActive = activeIndex === index;

  return (
    <div className="border-b border-gray-300">
      <div
        className="cursor-pointer p-4 flex justify-between items-center"
        onClick={() => handleToggle(index)}
      >
        <div>
          <h3 className="text-lg font-medium">{title}</h3>
          <p className="text-sm text-gray-500">{description}</p>
        </div>
        <span className={`transform transition-transform ${isActive ? 'rotate-180' : ''}`}>
          &#9660; {/* Arrow icon */}
        </span>
      </div>
      {isActive && (
        <div className="p-4">
          <ul className="list-disc pl-5">
            {content.map((contentItem, idx) => (
              <li key={idx} className="py-1 text-sm text-gray-700">
                {contentItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const AccordionComponent: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      {faqData.map((item, index) => (
        <AccordionItem
          key={index}
          index={index}
          title={item.title}
          description={item.description}
          content={item.content}
          activeIndex={activeIndex}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
};

export default AccordionComponent;
