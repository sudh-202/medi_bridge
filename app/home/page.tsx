import ImageSlider from "@/components/(home)/ImageSlider";
import GoogleMapSection from "@/components/GoogleMapSection";
import IconV1 from "@/components/IconV1";
import Services from "@/components/(home)/Services";
import Recommendation from "@/components/Recommendation";
import { images } from "@/constant";
import WhyMedi from "@/components/WhyMedi";
import PackageCard from "@/components/(home)/PackageCard";


export default function Home() {
  return (
    <>
    <ImageSlider images={images}/>
    <PackageCard/>
    <Recommendation/>
    <IconV1/>
    <Services/>
    <WhyMedi/>
    <GoogleMapSection/>
    </>
  )
}