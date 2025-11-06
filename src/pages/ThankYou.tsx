import { Link } from 'react-router-dom';

const ThankYou = () => (
  <div className="section-padding" style={{
    minHeight: 'calc(100vh - 160px)',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(135deg, hsl(var(--primary) / 0.05), hsl(var(--secondary) / 0.05))'
  }}>
    <div className="container-custom">
      <div className="glass-card animate-scale-in" style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{
          width: '80px',
          height: '80px',
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 2rem',
          fontSize: '2.5rem',
          boxShadow: 'var(--shadow-glow)'
        }}>
          ✓
        </div>
        <h1 style={{ marginBottom: '1rem' }}>Dziękujemy!</h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'hsl(var(--neutral-600))',
          lineHeight: 1.7,
          marginBottom: '2rem'
        }}>
          Twoje zgłoszenie zostało pomyślnie wysłane. Skontaktujemy się z Tobą w ciągu 24 godzin.
        </p>
        <Link to="/" className="btn-primary">
          <span>Powrót na stronę główną</span>
        </Link>
      </div>
    </div>
  </div>
);
export default ThankYou;
