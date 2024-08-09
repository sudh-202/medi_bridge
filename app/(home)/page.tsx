import ImageSlider from "@/components/(home)/ImageSlider";
import GoogleMapSection from "@/components/GoogleMapSection";
import IconV1 from "@/components/IconV1";
import Services from "@/components/(home)/Services";
import Recommendation from "@/components/Recommendation";
import { images } from "@/constant";


export default function Home() {
  return (
    <>
    <ImageSlider images={images}/>
    <Recommendation/>
    <IconV1/>
    <Services/>
    <GoogleMapSection/>
    </>
  )
}