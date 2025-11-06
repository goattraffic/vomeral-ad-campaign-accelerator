import ContactForm from '@/components/ContactForm';

const Contact = () => {
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
              Skontaktuj się z <span className="gradient-text">nami</span>
            </h1>
            <p className="animate-fade-up delay-100" style={{
              fontSize: '1.25rem',
              color: 'hsl(var(--neutral-600))',
              lineHeight: 1.8
            }}>
              Masz pytania? Chcesz omówić projekt? Jesteśmy tutaj, aby pomóc
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Info Section */}
      <section className="section-padding" style={{
        background: 'hsl(var(--neutral-50))'
      }}>
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
                color: 'white'
              }}>
                ⏰
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                Godziny pracy
              </h3>
              <p style={{
                color: 'hsl(var(--neutral-600))',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                Poniedziałek - Piątek<br />
                9:00 - 18:00<br />
                <br />
                Sobota - Niedziela<br />
                Zamknięte
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, hsl(var(--secondary)), hsl(var(--accent)))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
                color: 'white'
              }}>
                💬
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                Odpowiedź
              </h3>
              <p style={{
                color: 'hsl(var(--neutral-600))',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                Odpowiadamy na wszystkie<br />
                zapytania w ciągu<br />
                <strong style={{ color: 'hsl(var(--foreground))' }}>24 godzin</strong><br />
                w dni robocze
              </p>
            </div>

            <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'linear-gradient(135deg, hsl(var(--accent)), hsl(var(--primary)))',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.5rem',
                color: 'white'
              }}>
                🚀
              </div>
              <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>
                Szybki start
              </h3>
              <p style={{
                color: 'hsl(var(--neutral-600))',
                fontSize: '1rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                Po wstępnej rozmowie<br />
                możemy rozpocząć<br />
                <strong style={{ color: 'hsl(var(--foreground))' }}>w 48 godzin</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
