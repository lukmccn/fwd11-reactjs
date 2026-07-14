import SectionTitle from '../../atoms/SectionTitle/SectionTitle';
import CardImage from '../../atoms/CardImage/CardImage';
import { trending } from '../../../data/categories';

function TrendingSection() {
  return (
    <section className="px-4 sm:px-4 py-5 sm:py-4" aria-labelledby="trending-heading">
      <SectionTitle id="trending-heading">Trending</SectionTitle>
      <div className="flex flex-col gap-4">
        <CardImage
          src={trending.image}
          alt={trending.title}
          className="w-full max-w-md h-48 object-cover rounded-card bg-gray-muted/20"
        />
        <h3 className="text-lg font-bold leading-[23px]">{trending.title}</h3>
        <p className="text-base font-normal leading-6 text-gray-muted max-w-lg">
          {trending.description}
        </p>
      </div>
    </section>
  );
}

export default TrendingSection;
