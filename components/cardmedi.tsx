// components/WhyMediCard.tsx
import { FC } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"


interface WhyMediCardProps {
  imageSrc: string;
  altText: string;
  buttonText: string;
}

const WhyMediCard: FC<WhyMediCardProps> = ({ imageSrc, altText, buttonText }) => {
  return (
    <div className="bg-white rounded-3xl px-4 md:px-8 py-8 border-[#C9D851] border-2 mb-4">
      <Image
        src={imageSrc}
        alt={altText}
        className="rounded-md mb-4 w-full h-auto"
        width={100}
        height={100}
      />
      <Button className="bg-[#0F3C49] text-white w-full py-3 rounded-xl">{buttonText}</Button>
    </div>
  );
};

export default WhyMediCard;
