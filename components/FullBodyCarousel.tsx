import Carousel from "@/components/Carousel1";
import { imageDatafull } from "@/constant";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-normal mb-6 ml-6">4 Diabetes Checkups</h1>
      <Carousel images={imageDatafull} />
    </div>
  );
};

export default HomePage;
