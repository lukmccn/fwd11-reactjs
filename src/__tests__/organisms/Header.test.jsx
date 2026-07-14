import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Header from '../../components/organisms/Header/Header';
import { ScrollProvider } from '../../context/ScrollContext';

vi.mock('../../hooks/useMediaQuery', () => ({
  useMediaQuery: vi.fn(() => false),
}));

describe('Header Organism', () => {
  const renderHeader = () =>
    render(
      <ScrollProvider>
        <Header />
      </ScrollProvider>
    );

  it('menampilkan logo dan tombol Login', () => {
    renderHeader();
    expect(screen.getByText('DebiTech')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('menampilkan navigasi di desktop', () => {
    renderHeader();
    expect(screen.getByText('Explore')).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Cart')).toBeInTheDocument();
  });

  it('menyembunyikan navigasi di mobile', () => {
    const { useMediaQuery } = require('../../hooks/useMediaQuery');
    useMediaQuery.mockReturnValue(true);
    renderHeader();
    expect(screen.queryByText('Explore')).not.toBeInTheDocument();
  });
});
