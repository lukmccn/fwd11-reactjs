import MainLayout from '../components/templates/MainLayout/MainLayout';
import HeroSection from '../components/organisms/HeroSection/HeroSection';
import CategoriesSection from '../components/organisms/CategoriesSection/CategoriesSection';
import FeaturedProduct from '../components/organisms/FeaturedProduct/FeaturedProduct';
import TrendingSection from '../components/organisms/TrendingSection/TrendingSection';

function HomePage() {
  return (
    <MainLayout>
      <HeroSection />
      <CategoriesSection />
      <FeaturedProduct />
      <TrendingSection />
    </MainLayout>
  );
}

export default HomePage;
