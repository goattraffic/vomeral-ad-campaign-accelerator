import { useParams, Link } from 'react-router-dom';
import { services } from '@/data/services';
import { useEffect } from 'react';

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="section-padding">
        <div className="container-custom" style={{ textAlign: 'center' }}>
          <h1>Usługa nie znaleziona</h1>
          <p style={{ marginBottom: '2rem', color: 'hsl(var(--neutral-600))' }}>
            Przepraszamy, nie możemy znaleźć tej usługi.
          </p>
          <Link to="/uslugi" className="btn-primary">
            <span>Powrót do usług</span>
          </Link>
        </div>
      </div>
    );
  }

  const scrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formElement = document.getElementById('orderFormAnchor');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ background: 'hsl(var(--background))' }}>
      {/* Breadcrumbs */}
      <section style={{
        padding: '2rem 0',
        background: 'hsl(var(--neutral-50))',
        borderBottom: '1px solid hsl(var(--border))'
      }}>
        <div className="container-custom">
          <nav style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '0.9375rem',
            color: 'hsl(var(--neutral-600))'
          }}>
            <Link to="/" style={{ color: 'hsl(var(--neutral-600))' }}>Główna</Link>
            <span>/</span>
            <Link to="/uslugi" style={{ color: 'hsl(var(--neutral-600))' }}>Usługi</Link>
            <span>/</span>
            <span style={{ color: 'hsl(var(--foreground))', fontWeight: 500 }}>{service.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))'
      }}>
        <div className="container-custom">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h1 className="animate-fade-up" style={{ marginBottom: '1.5rem' }}>
              {service.title}
            </h1>
            <p className="animate-fade-up delay-100" style={{
              fontSize: '1.25rem',
              color: 'hsl(var(--neutral-600))',
              lineHeight: 1.8,
              marginBottom: '2rem'
            }}>
              {service.short}
            </p>
            <div className="animate-fade-up delay-200" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <span style={{
                  fontSize: '0.9375rem',
                  color: 'hsl(var(--neutral-500))',
                  display: 'block',
                  marginBottom: '0.5rem'
                }}>
                  Cena usługi
                </span>
                <span className="gradient-text" style={{
                  fontSize: '2rem',
                  fontWeight: 700
                }}>
                  {service.price}
                </span>
              </div>
              <a
                href="#orderFormAnchor"
                onClick={scrollToForm}
                className="btn-primary"
              >
                <span>Zamów usługę</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="animate-fade-up" style={{ marginBottom: '2rem' }}>
              Co obejmuje usługa?
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.5rem'
            }}>
              {service.features.map((feature, index) => (
                <div 
                  key={index}
                  className={`glass-card animate-fade-up delay-${(index % 3) * 100}`}
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'start',
                    gap: '1rem'
                  }}
                >
                  <span style={{
                    fontSize: '1.5rem',
                    color: 'hsl(var(--primary))',
                    fontWeight: 700,
                    minWidth: '2rem'
                  }}>
                    ✓
                  </span>
                  <p style={{
                    margin: 0,
                    fontSize: '1rem',
                    color: 'hsl(var(--foreground))',
                    lineHeight: 1.6
                  }}>
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding" style={{
        background: 'hsl(var(--neutral-50))'
      }}>
        <div className="container-custom">
          <article 
            style={{ 
              maxWidth: '900px', 
              margin: '0 auto'
            }}
            dangerouslySetInnerHTML={{ __html: service.contentHtml }}
            className="service-content"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="glass-card" style={{
            padding: '3rem 2rem',
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            <h2 style={{ marginBottom: '1rem' }}>
              Zainteresowany tą usługą?
            </h2>
            <p style={{
              fontSize: '1.125rem',
              color: 'hsl(var(--neutral-600))',
              marginBottom: '2rem'
            }}>
              Skontaktuj się z nami i omówmy szczegóły współpracy
            </p>
            <div style={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a
                href="#orderFormAnchor"
                onClick={scrollToForm}
                className="btn-primary"
              >
                <span>Zamów teraz</span>
              </a>
              <Link to="/uslugi" className="btn-glass">
                Wróć do listy usług
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .service-content h2 {
          font-size: 1.75rem;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          color: hsl(var(--foreground));
        }
        .service-content h3 {
          font-size: 1.375rem;
          margin-top: 2rem;
          margin-bottom: 0.875rem;
          color: hsl(var(--foreground));
        }
        .service-content p {
          font-size: 1.0625rem;
          line-height: 1.8;
          color: hsl(var(--neutral-600));
          margin-bottom: 1.25rem;
        }
        .service-content h2:first-child {
          margin-top: 0;
        }
      `}</style>
    </div>
  );
};

export default ServiceDetail;
