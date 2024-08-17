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
import Blogs from "@/components/(home)/Blogs";
import Newscarousel from "@/components/(home)/Newscarousel";
import Testimonials from "@/components/(home)/Testimonials";
import SafetyMeasuresSection from "@/components/(home)/SafetyMeasure";


export default function Home() {
  return (
    <>
    <ImageSlider images={images}/>
    <WellnessCard />
    <PackageCard/>
    <MergedCarousel/>
    <VitalOrgansSection/> 
    <Recommendation/>
    <IconV1/>
    <Services/>
    <SafetyMeasuresSection/>
    <WhyMedi/>
    <Newscarousel/>
    <Testimonials />
    <Blogs/>
    <GoogleMapSection/>
    </>
  )
}