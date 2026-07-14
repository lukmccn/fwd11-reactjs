import CardImage from '../../atoms/CardImage/CardImage';

function CategoryCard({ title, description, image }) {
  return (
    <div className="flex flex-col gap-3 w-[176px] flex-shrink-0">
      <CardImage
        src={image}
        alt={`Kategori ${title}`}
        className="h-[176px] w-[176px] rounded-card bg-teal-600 object-cover"
      />
      <div className="tracking-normal">
        <h3 className="text-base font-medium leading-6">{title}</h3>
        <p className="text-sm font-normal leading-[21px] text-gray-muted pb-3">
          {description}
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;
