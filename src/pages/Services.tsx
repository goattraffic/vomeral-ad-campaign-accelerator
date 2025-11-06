import { Link } from 'react-router-dom';
import { services } from '@/data/services';

const Services = () => {
  return (
    <div style={{ background: 'hsl(var(--background))' }}>
      {/* Hero Section */}
      <section className="section-padding" style={{
        background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))',
        borderBottom: '1px solid hsl(var(--border))'
      }}>
        <div className="container-custom">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>
            <h1 className="animate-fade-up" style={{ marginBottom: '1.5rem' }}>
              Nasze <span className="gradient-text">Usługi</span>
            </h1>
            <p className="animate-fade-up delay-100" style={{
              fontSize: '1.25rem',
              color: 'hsl(var(--neutral-600))',
              lineHeight: 1.8
            }}>
              Kompleksowe rozwiązania SMM i influencer marketingu dla Twojego biznesu
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {services.map((service, index) => (
              <article 
                key={service.slug}
                className={`glass-card animate-fade-up delay-${(index % 3) * 100}`}
                style={{
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
              >
                <h2 style={{
                  fontSize: '1.5rem',
                  marginBottom: '1rem',
                  color: 'hsl(var(--foreground))'
                }}>
                  {service.title}
                </h2>
                <p style={{
                  fontSize: '1rem',
                  color: 'hsl(var(--neutral-600))',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  flex: 1
                }}>
                  {service.short}
                </p>
                <div style={{
                  marginBottom: '1.5rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid hsl(var(--border))'
                }}>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <li 
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'start',
                          gap: '0.75rem',
                          fontSize: '0.9375rem',
                          color: 'hsl(var(--neutral-600))'
                        }}
                      >
                        <span style={{
                          color: 'hsl(var(--primary))',
                          fontWeight: 600,
                          marginTop: '0.125rem'
                        }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  <div>
                    <span style={{
                      fontSize: '0.875rem',
                      color: 'hsl(var(--neutral-500))',
                      display: 'block',
                      marginBottom: '0.25rem'
                    }}>
                      Cena
                    </span>
                    <span className="gradient-text" style={{
                      fontSize: '1.25rem',
                      fontWeight: 700
                    }}>
                      {service.price}
                    </span>
                  </div>
                  <Link
                    to={`/uslugi/${service.slug}`}
                    className="btn-primary"
                    style={{
                      flex: '1 1 auto',
                      textAlign: 'center',
                      minWidth: '150px'
                    }}
                  >
                    <span>Dowiedz się więcej</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
