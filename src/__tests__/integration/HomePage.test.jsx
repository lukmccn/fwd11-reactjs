import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HomePage from '../../pages/HomePage';

describe('HomePage Integration', () => {
  it('merender semua section utama', () => {
    render(<HomePage />);

    expect(screen.getByText(/Discover the Future/i)).toBeInTheDocument();
    expect(screen.getByText('Categories')).toBeInTheDocument();
    expect(screen.getByText('Productivity')).toBeInTheDocument();
    expect(screen.getByText('Feature Product')).toBeInTheDocument();
    expect(screen.getByText('Top Rated AI Tool')).toBeInTheDocument();
    expect(screen.getByText('Trending')).toBeInTheDocument();
    expect(screen.getByText('AI Writing Assistant')).toBeInTheDocument();
  });

  it('memiliki footer dengan copyright', () => {
    render(<HomePage />);
    expect(screen.getByText(/DebiTech\. All rights reserved/i)).toBeInTheDocument();
  });
});
