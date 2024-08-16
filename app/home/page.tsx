import ImageSlider from "@/components/(home)/ImageSlider";
import GoogleMapSection from "@/components/GoogleMapSection";
import IconV1 from "@/components/IconV1";
import Services from "@/components/(home)/Services";
import Recommendation from "@/components/Recommendation";
import { images } from "@/constant";
import WhyMedi from "@/components/WhyMedi";
import PackageCard from "@/components/(home)/PackageCard";
import VitalOrgansSection from "@/components/(home)/VitalOrgansSection";
import WellnessCard from "@/components/(home)/WellnessCard";
import MergedCarousel from "@/components/(home)/MergedCarousel";


export default function Home() {
  return (
    <>
    <ImageSlider images={images}/>
    <WellnessCard />
    <PackageCard/>
    <VitalOrgansSection/> 
    <MergedCarousel/>
    <Recommendation/>
    <IconV1/>
    <Services/>
    <WhyMedi/>
    <GoogleMapSection/>
    </>
  )
}