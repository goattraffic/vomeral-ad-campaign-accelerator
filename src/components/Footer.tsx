import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    usługi: [
      { label: 'Zarządzanie Social Media', path: '/uslugi/zarzadzanie-social-media' },
      { label: 'Kreacja Treści', path: '/uslugi/kreacja-treści' },
      { label: 'Kampanie Influencer', path: '/uslugi/kampanie-influencer' },
      { label: 'Strategie SMM', path: '/uslugi/strategie-smm' }
    ],
    firma: [
      { label: 'O nas', path: '/o-nas' },
      { label: 'Kontakt', path: '/kontakt' }
    ],
    prawne: [
      { label: 'Polityka Cookies', path: '/polityka-cookies' },
      { label: 'Polityka Prywatności', path: '/polityka-prywatnosci' },
      { label: 'Regulamin', path: '/regulamin' },
      { label: 'Polityka Zwrotów', path: '/polityka-zwrotow' }
    ]
  };

  return (
    <footer style={{
      background: 'hsl(var(--neutral-900))',
      color: 'hsl(var(--neutral-100))',
      padding: '4rem 0 2rem'
    }}>
      <div className="container-custom">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 700,
              marginBottom: '1rem'
            }} className="gradient-text">
              Vomeral
            </h3>
            <p style={{
              color: 'hsl(var(--neutral-300))',
              marginBottom: '1.5rem',
              lineHeight: 1.6
            }}>
              Agencja SMM & Marketing Influencerów. Łączymy Twój brand z targetowaną publicznością.
            </p>
            <div style={{
              padding: '1rem',
              background: 'hsl(var(--neutral-800))',
              borderRadius: 'var(--radius-md)',
              borderLeft: '3px solid hsl(var(--primary))'
            }}>
              <p style={{
                fontSize: '0.875rem',
                color: 'hsl(var(--neutral-300))',
                margin: 0
              }}>
                <strong style={{ color: 'hsl(var(--neutral-100))' }}>Godziny pracy:</strong><br />
                Poniedziałek - Piątek: 9:00 - 18:00<br />
                Sobota - Niedziela: Zamknięte
              </p>
            </div>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'hsl(var(--neutral-100))'
            }}>
              Usługi
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.usługi.map((link) => (
                <li key={link.path} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: 'none',
                      color: 'hsl(var(--neutral-400))',
                      transition: 'var(--transition-smooth)',
                      fontSize: '0.9375rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--primary))';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--neutral-400))';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'hsl(var(--neutral-100))'
            }}>
              Firma
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.firma.map((link) => (
                <li key={link.path} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: 'none',
                      color: 'hsl(var(--neutral-400))',
                      transition: 'var(--transition-smooth)',
                      fontSize: '0.9375rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--primary))';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--neutral-400))';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{
              fontSize: '1.125rem',
              fontWeight: 600,
              marginBottom: '1rem',
              color: 'hsl(var(--neutral-100))'
            }}>
              Prawne
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {footerLinks.prawne.map((link) => (
                <li key={link.path} style={{ marginBottom: '0.75rem' }}>
                  <Link
                    to={link.path}
                    style={{
                      textDecoration: 'none',
                      color: 'hsl(var(--neutral-400))',
                      transition: 'var(--transition-smooth)',
                      fontSize: '0.9375rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--primary))';
                      e.currentTarget.style.paddingLeft = '0.5rem';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'hsl(var(--neutral-400))';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid hsl(var(--neutral-800))',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: 'hsl(var(--neutral-500))',
            fontSize: '0.875rem',
            margin: 0
          }}>
            © {currentYear} Vomeral. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
