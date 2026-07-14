import { useContext, useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../atoms/Logo/Logo';
import Button from '../../atoms/Button/Button';
import NavLink from '../../molecules/NavLink/NavLink';
import { navLinks } from '../../../data/navigation';
import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { BREAKPOINTS } from '../../../constants/theme';
import { ScrollContext } from '../../../context/ScrollContext';
import { useAuth } from '../../../hooks/useAuth';

function Header() {
  const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.mobile}px)`);
  const { isScrolled } = useContext(ScrollContext);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogin = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const handleLogout = useCallback(() => {
    logout();
    navigate('/');
  }, [logout, navigate]);

  return (
    <header
      className={`flex items-center justify-between px-4 sm:px-10 py-3 border-b border-gray-600 sticky top-0 z-50 transition-colors ${
        isScrolled ? 'bg-dark/95 backdrop-blur-sm' : 'bg-dark'
      }`}
    >
      <Link to="/" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
        <Logo />
      </Link>

      {!isMobile && (
        <nav aria-label="Navigasi utama" className="mx-8">
          <ul className="flex gap-9 list-none">
            {navLinks.map((link) => (
              <NavLink key={link.label} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      )}

      <div className="flex items-center gap-4">
        {user ? (
          <>
            <span className="text-sm text-gray-muted hidden sm:inline">
              {user.email}
            </span>
            <Button onClick={handleLogout} variant="secondary" size="sm">
              Logout
            </Button>
          </>
        ) : (
          <Button onClick={handleLogin} size="sm">
            Login
          </Button>
        )}
      </div>
    </header>
  );
}

export default Header;
