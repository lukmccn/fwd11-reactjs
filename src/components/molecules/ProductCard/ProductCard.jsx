import Button from '../../atoms/Button/Button';
import CardImage from '../../atoms/CardImage/CardImage';

function ProductCard({ title, description, image, buttonLabel, onButtonClick }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="sm:max-w-[410px] sm:w-[42.718vw]">
        <CardImage
          src={image}
          alt={title}
          className="max-h-[251px] w-full max-w-[410px] object-cover rounded-card"
        />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold leading-[23px]">{title}</h3>
        <p className="text-base font-normal leading-6 text-gray-muted">
          {description}
        </p>
        <Button size="sm" onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
