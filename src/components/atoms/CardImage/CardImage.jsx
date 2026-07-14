import { useState } from 'react';

function CardImage({ src, alt, className = '' }) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`bg-primary/20 flex items-center justify-center text-gray-muted text-sm ${className}`}>
        Gambar tidak tersedia
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      loading="lazy"
    />
  );
}

export default CardImage;
