import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CMPBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const consentData = {
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
      tcString: generateTCString(true, true)
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const consentData = {
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
      tcString: generateTCString(false, false)
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
  };

  const handleSavePreferences = (analytics: boolean, marketing: boolean) => {
    const consentData = {
      necessary: true,
      analytics,
      marketing,
      timestamp: new Date().toISOString(),
      tcString: generateTCString(analytics, marketing)
    };
    localStorage.setItem('cookieConsent', JSON.stringify(consentData));
    setIsVisible(false);
    setShowPreferences(false);
  };

  const generateTCString = (analytics: boolean, marketing: boolean) => {
    const purposes = {
      1: true,
      2: analytics,
      3: marketing
    };
    return `TC${Object.values(purposes).map(v => v ? '1' : '0').join('')}`;
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      background: 'hsl(var(--card-bg))',
      boxShadow: '0 -4px 24px hsl(var(--neutral-900) / 0.1)',
      borderTop: '1px solid hsl(var(--border))'
    }}>
      {!showPreferences ? (
        <div className="container-custom" style={{
          padding: '2rem',
          maxWidth: '1200px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: 600,
                marginBottom: '0.75rem',
                color: 'hsl(var(--foreground))'
              }}>
                Używamy plików cookies
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                color: 'hsl(var(--neutral-600))',
                lineHeight: 1.6,
                margin: 0
              }}>
                Ta strona wykorzystuje pliki cookies w celu zapewnienia najlepszej jakości usług. Kontynuując przeglądanie strony, wyrażasz zgodę na ich użycie zgodnie z naszą{' '}
                <Link to="/polityka-cookies" style={{ color: 'hsl(var(--primary))', textDecoration: 'underline' }}>
                  Polityką Cookies
                </Link>
                {' '}i{' '}
                <Link to="/polityka-prywatnosci" style={{ color: 'hsl(var(--primary))', textDecoration: 'underline' }}>
                  Polityką Prywatności
                </Link>.
              </p>
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <button
                onClick={handleAcceptAll}
                className="btn-primary"
                style={{
                  flex: '1 1 auto',
                  minWidth: '150px'
                }}
              >
                <span>Akceptuj wszystkie</span>
              </button>
              <button
                onClick={handleRejectAll}
                className="btn-glass"
                style={{
                  flex: '1 1 auto',
                  minWidth: '150px'
                }}
              >
                Odrzuć wszystkie
              </button>
              <button
                onClick={() => setShowPreferences(true)}
                className="btn-glass"
                style={{
                  flex: '1 1 auto',
                  minWidth: '150px'
                }}
              >
                Ustawienia
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-custom" style={{
          padding: '2rem',
          maxWidth: '800px'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            <h3 style={{
              fontSize: '1.25rem',
              fontWeight: 600,
              color: 'hsl(var(--foreground))'
            }}>
              Ustawienia prywatności
            </h3>
            
            <PreferenceItem
              title="Niezbędne pliki cookies"
              description="Te pliki cookies są wymagane do podstawowego działania strony i nie mogą być wyłączone."
              required={true}
            />
            
            <PreferenceItem
              title="Analityczne pliki cookies"
              description="Pomagają nam zrozumieć, jak odwiedzający korzystają ze strony, abyśmy mogli ją ulepszać."
              id="analytics"
            />
            
            <PreferenceItem
              title="Marketingowe pliki cookies"
              description="Używane do wyświetlania trafnych reklam i mierzenia skuteczności kampanii."
              id="marketing"
            />
            
            <div style={{
              display: 'flex',
              gap: '1rem',
              paddingTop: '1rem'
            }}>
              <button
                onClick={() => {
                  const analytics = (document.getElementById('analytics') as HTMLInputElement)?.checked || false;
                  const marketing = (document.getElementById('marketing') as HTMLInputElement)?.checked || false;
                  handleSavePreferences(analytics, marketing);
                }}
                className="btn-primary"
                style={{ flex: 1 }}
              >
                <span>Zapisz ustawienia</span>
              </button>
              <button
                onClick={() => setShowPreferences(false)}
                className="btn-glass"
                style={{ flex: 1 }}
              >
                Anuluj
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface PreferenceItemProps {
  title: string;
  description: string;
  required?: boolean;
  id?: string;
}

const PreferenceItem = ({ title, description, required, id }: PreferenceItemProps) => (
  <div style={{
    padding: '1.25rem',
    background: 'hsl(var(--neutral-50))',
    borderRadius: 'var(--radius-md)',
    display: 'flex',
    alignItems: 'start',
    gap: '1rem'
  }}>
    <input
      type="checkbox"
      id={id}
      disabled={required}
      defaultChecked={required}
      style={{
        marginTop: '0.25rem',
        width: '1.25rem',
        height: '1.25rem',
        accentColor: 'hsl(var(--primary))',
        cursor: required ? 'not-allowed' : 'pointer'
      }}
    />
    <div style={{ flex: 1 }}>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontWeight: 600,
          marginBottom: '0.5rem',
          cursor: required ? 'not-allowed' : 'pointer',
          color: 'hsl(var(--foreground))'
        }}
      >
        {title}
        {required && <span style={{ marginLeft: '0.5rem', color: 'hsl(var(--neutral-500))', fontSize: '0.875rem' }}>(wymagane)</span>}
      </label>
      <p style={{
        margin: 0,
        fontSize: '0.875rem',
        color: 'hsl(var(--neutral-600))',
        lineHeight: 1.5
      }}>
        {description}
      </p>
    </div>
  </div>
);

export default CMPBanner;
