import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import CategoryCard from '../../components/molecules/CategoryCard/CategoryCard';

describe('CategoryCard Molecule', () => {
  const props = {
    title: 'AI Tools',
    description: 'Berbagai tools AI',
    image: '/assets/img/image4.png',
  };

  it('menampilkan judul dan deskripsi', () => {
    render(<CategoryCard {...props} />);
    expect(screen.getByText('AI Tools')).toBeInTheDocument();
    expect(screen.getByText('Berbagai tools AI')).toBeInTheDocument();
  });

  it('menampilkan gambar dengan alt text yang benar', () => {
    render(<CategoryCard {...props} />);
    const img = screen.getByAltText('Kategori AI Tools');
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', props.image);
  });

  it('menampilkan fallback saat gambar error', () => {
    render(<CategoryCard {...props} />);
    const img = screen.getByAltText('Kategori AI Tools');
    fireEvent.error(img);
    expect(screen.getByText('Gambar tidak tersedia')).toBeInTheDocument();
  });
});
