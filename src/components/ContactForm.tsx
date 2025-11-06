import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Honeypot check
    if (formData.get('__hp')) {
      navigate('/dziekujemy');
      return;
    }

    // Get UTM parameters from sessionStorage
    const utmParams = {
      utm_source: sessionStorage.getItem('utm_source') || '',
      utm_medium: sessionStorage.getItem('utm_medium') || '',
      utm_campaign: sessionStorage.getItem('utm_campaign') || '',
      utm_term: sessionStorage.getItem('utm_term') || '',
      utm_content: sessionStorage.getItem('utm_content') || '',
      gclid: sessionStorage.getItem('gclid') || '',
      fbclid: sessionStorage.getItem('fbclid') || ''
    };

    // Add technical fields
    formData.append('__ts', Date.now().toString());
    formData.append('referrer', document.referrer);
    formData.append('path', location.pathname + location.hash);
    Object.entries(utmParams).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    try {
      const response = await fetch('/api/lead.php', {
        method: 'POST',
        headers: {
          'X-Requested-With': 'fetch'
        },
        body: formData
      });

      const result = await response.json();

      if (result.ok) {
        navigate('/dziekujemy');
      } else {
        setError(result.error || 'Wystąpił błąd podczas wysyłania formularza. Spróbuj ponownie.');
      }
    } catch (err) {
      setError('Wystąpił problem z połączeniem. Sprawdź swoje połączenie internetowe i spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section 
      id="orderFormAnchor"
      className="section-padding"
      style={{
        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))'
      }}
    >
      <div className="container-custom">
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 className="animate-fade-up" style={{ marginBottom: '1rem' }}>
            Gotowy na <span className="gradient-text">rozwój</span>?
          </h2>
          <p className="animate-fade-up delay-100" style={{
            fontSize: '1.125rem',
            color: 'hsl(var(--neutral-600))',
            marginBottom: '3rem'
          }}>
            Skontaktuj się z nami i omówmy, jak możemy pomóc Twojej marce rosnąć w social media
          </p>

          <form 
            id="leadForm"
            onSubmit={handleSubmit}
            className="glass-card animate-fade-up delay-200"
            style={{
              padding: '2.5rem',
              textAlign: 'left'
            }}
          >
            <input type="text" name="__hp" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <div>
                <label 
                  htmlFor="first_name"
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    color: 'hsl(var(--foreground))'
                  }}
                >
                  Imię *
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'var(--transition-smooth)',
                    background: 'hsl(var(--background))'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                    e.currentTarget.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--border))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>

              <div>
                <label 
                  htmlFor="last_name"
                  style={{
                    display: 'block',
                    fontWeight: 500,
                    marginBottom: '0.5rem',
                    color: 'hsl(var(--foreground))'
                  }}
                >
                  Nazwisko *
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  required
                  style={{
                    width: '100%',
                    padding: '0.875rem 1rem',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    transition: 'var(--transition-smooth)',
                    background: 'hsl(var(--background))'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                    e.currentTarget.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'hsl(var(--border))';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="email"
                style={{
                  display: 'block',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  color: 'hsl(var(--foreground))'
                }}
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  transition: 'var(--transition-smooth)',
                  background: 'hsl(var(--background))'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--border))';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label 
                htmlFor="phone"
                style={{
                  display: 'block',
                  fontWeight: 500,
                  marginBottom: '0.5rem',
                  color: 'hsl(var(--foreground))'
                }}
              >
                Telefon *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                style={{
                  width: '100%',
                  padding: '0.875rem 1rem',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '1rem',
                  transition: 'var(--transition-smooth)',
                  background: 'hsl(var(--background))'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--primary))';
                  e.currentTarget.style.boxShadow = '0 0 0 3px hsl(var(--primary) / 0.1)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'hsl(var(--border))';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>

            <div style={{ marginBottom: '2rem' }}>
              <label style={{
                display: 'flex',
                alignItems: 'start',
                gap: '0.75rem',
                cursor: 'pointer',
                fontSize: '0.9375rem',
                lineHeight: 1.5
              }}>
                <input
                  type="checkbox"
                  name="consent"
                  required
                  style={{
                    marginTop: '0.25rem',
                    width: '1.125rem',
                    height: '1.125rem',
                    accentColor: 'hsl(var(--primary))'
                  }}
                />
                <span style={{ color: 'hsl(var(--neutral-600))' }}>
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{' '}
                  <a href="/#/polityka-prywatnosci" style={{ color: 'hsl(var(--primary))', textDecoration: 'underline' }}>
                    Polityką Prywatności
                  </a>
                  {' '}*
                </span>
              </label>
            </div>

            {error && (
              <div 
                role="alert"
                aria-live="polite"
                style={{
                  padding: '1rem',
                  background: 'hsl(var(--error) / 0.1)',
                  border: '1px solid hsl(var(--error))',
                  borderRadius: 'var(--radius-md)',
                  color: 'hsl(var(--error))',
                  marginBottom: '1.5rem',
                  fontSize: '0.9375rem'
                }}
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary"
              style={{
                width: '100%',
                fontSize: '1.125rem',
                opacity: isSubmitting ? 0.7 : 1,
                cursor: isSubmitting ? 'not-allowed' : 'pointer'
              }}
            >
              <span>{isSubmitting ? 'Wysyłanie...' : 'Wyślij zgłoszenie'}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
