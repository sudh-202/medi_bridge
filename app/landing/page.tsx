
import Image from 'next/image'
import { cards } from '@/constant';
import LogoSlider from '@/components/LogoSlider';
import SpecialPackages2   from '@/components/SpecialPackages2';
import { specialPackageData } from '@/constant';
import FullBodyCarousel from '@/components/FullBodyCarousel';
import HealthCheckupsSection from '@/components/HealthCheckupsSection';
import MedicalCheckups from '@/components/MedicalCheckups';
import WhyMedi from '@/components/WhyMedi';
import ImageGallery from '@/components/(home)/ImageGallery';
import Blogs from '@/components/(home)/Blogs';
import GoogleMapSection from '@/components/GoogleMapSection';
import FullBodyCheckupSection from '@/components/FullBodyCheckupSection';

const liver = () => {
  const itemsToShow = 6; // Show n-1 items
        const totalItems = cards.length * 2;
  return (
    < main className='bg-white'>
    <SpecialPackages2
        title={specialPackageData.title}
        description={specialPackageData.description}
        image={specialPackageData.image}
        offerText={specialPackageData.offerText}
        labInfo={specialPackageData.labInfo}
      />
      <FullBodyCarousel />
      <main className="min-h-screen bg-gray-50">
      <HealthCheckupsSection />
    </main>
    <MedicalCheckups />
    <WhyMedi />
    <FullBodyCheckupSection/>
    {/* <ImageGallery /> */}
    <Blogs/>
    <GoogleMapSection/>
      </main>

  )
}

export default liver