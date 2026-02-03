import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/sections/HeroSection';
import ServicesSection from '@/components/sections/ServicesSection';
import TransformationsSection from '@/components/sections/TransformationsSection';
import ArtificialGrassProofSection from '@/components/sections/ArtificialGrassProofSection';
import ReviewsCarousel from '@/components/sections/ReviewsCarousel';
import CTASection from '@/components/sections/CTASection';

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <TransformationsSection />
      <ServicesSection />
      <ArtificialGrassProofSection />
      <ReviewsCarousel />
      <CTASection />
    </Layout>
  );
};

export default HomePage;
