import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Główna' },
    { path: '/o-nas', label: 'O nas' },
    { path: '/uslugi', label: 'Usługi' },
    { path: '/kontakt', label: 'Kontakt' }
  ];

  return (
    <header 
      className={`main-header ${isScrolled ? 'scrolled' : ''}`}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'var(--transition-smooth)',
        background: isScrolled ? 'hsl(var(--glass-bg))' : 'transparent',
        backdropFilter: isScrolled ? 'blur(20px)' : 'none',
        borderBottom: isScrolled ? '1px solid hsl(var(--border))' : 'none',
        boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none'
      }}
    >
      <div className="container-custom" style={{ padding: '1rem 2rem' }}>
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <Link 
            to="/" 
            className="logo-link"
            style={{
              fontSize: '1.75rem',
              fontWeight: 700,
              fontFamily: "'Poppins', sans-serif",
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <span className="gradient-text">Vomeral</span>
          </Link>

          {/* Desktop Navigation */}
          <ul 
            className="desktop-nav"
            style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2rem',
              margin: 0,
              padding: 0
            }}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: 'hsl(var(--foreground))',
                    fontWeight: 500,
                    fontSize: '1rem',
                    position: 'relative',
                    transition: 'var(--transition-smooth)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--primary))';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'hsl(var(--foreground))';
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link 
            to="/kontakt"
            className="btn-primary"
            style={{
              display: 'none'
            }}
          >
            <span>Skontaktuj się</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              color: 'hsl(var(--foreground))',
              cursor: 'pointer'
            }}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <ul 
            className="mobile-nav"
            style={{
              display: 'none',
              flexDirection: 'column',
              listStyle: 'none',
              gap: '1.5rem',
              margin: '2rem 0 0 0',
              padding: '2rem',
              background: 'hsl(var(--card-bg))',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-lg)'
            }}
          >
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  style={{
                    textDecoration: 'none',
                    color: 'hsl(var(--foreground))',
                    fontWeight: 500,
                    fontSize: '1.125rem',
                    display: 'block'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link 
                to="/kontakt"
                className="btn-primary"
                style={{
                  display: 'inline-block',
                  width: '100%',
                  textAlign: 'center'
                }}
              >
                <span>Skontaktuj się</span>
              </Link>
            </li>
          </ul>
        )}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-nav {
            display: flex !important;
          }
          .main-header .btn-primary {
            display: none !important;
          }
        }
        @media (min-width: 769px) {
          .main-header .btn-primary {
            display: inline-block !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
