import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Button from '../../components/atoms/Button/Button';

describe('Button Atom', () => {
  it('merender children dengan benar', () => {
    render(<Button>Login</Button>);
    expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();
  });

  it('memanggil onClick saat diklik', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Klik</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('menerapkan kelas variant primary secara default', () => {
    render(<Button>Test</Button>);
    const button = screen.getByRole('button');
    expect(button.className).toContain('bg-primary');
  });

  it('tidak memanggil onClick saat disabled', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick} disabled>Disabled</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
