import { useRef, useEffect, useCallback } from 'react';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';
import { categories } from '../../../data/categories';

function CategoriesSection() {
  const scrollRef = useRef(null);

  const handleWheel = useCallback((e) => {
    if (scrollRef.current) {
      e.preventDefault();
      scrollRef.current.scrollLeft += e.deltaY;
    }
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('wheel', handleWheel, { passive: false });
      return () => el.removeEventListener('wheel', handleWheel);
    }
  }, [handleWheel]);

  return (
    <section id="categories" className="px-4 sm:px-4 py-5 sm:py-4" aria-labelledby="categories-heading">
      <SectionTitle id="categories-heading">Categories</SectionTitle>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 pt-4 scrollbar-hide"
        role="list"
      >
        {categories.map((cat) => (
          <CategoryCard
            key={cat.id}
            title={cat.title}
            description={cat.description}
            image={cat.image}
          />
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;
