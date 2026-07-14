import { useCallback } from 'react';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import { featuredProduct } from '../../../data/categories';

function FeaturedProduct() {
  const handleLearnMore = useCallback(() => {
    console.log('Learn more about:', featuredProduct.title);
  }, []);

  return (
    <section id="explore" className="px-4 sm:px-4 py-5 sm:py-4" aria-labelledby="featured-heading">
      <SectionTitle id="featured-heading">Feature Product</SectionTitle>
      <ProductCard
        title={featuredProduct.title}
        description={featuredProduct.description}
        image={featuredProduct.image}
        buttonLabel={featuredProduct.buttonLabel}
        onButtonClick={handleLearnMore}
      />
    </section>
  );
}

export default FeaturedProduct;
