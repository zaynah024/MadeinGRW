import Header from './home/components/header'
import Hero from './home/components/hero'
import AboutGujranwala from './home/components/aboutguj';
import IndustrialSectors from './home/components/industries';
import OurIndustries from './home/components/ourindustries';
import ProductsSection from './home/components/products';
import BusinessCommunitySection from './home/components/businesscom';
 import NewsSection from './home/components/news';
 import Footer from './home/components/footer';
export default function Home() {
  return (
   <>
  
   <Header />
   <Hero />
   <AboutGujranwala />
   <IndustrialSectors />
   <OurIndustries />
   <ProductsSection />
   <BusinessCommunitySection /> 
    <NewsSection />
    <Footer />
   </>
  );
}
