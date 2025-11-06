import { Link } from 'react-router-dom';
import { services } from '@/data/services';
import ContactForm from '@/components/ContactForm';
import heroAbstract from '@/assets/hero-abstract.jpg';

const Index = () => {
  const testimonials = [
    { name: 'Anna Kowalska', position: 'CEO, TechStart', rating: 5, text: 'Vomeral zrewolucjonizował naszą obecność w social media. W 6 miesięcy zwiększyliśmy engagement o 350% i pozyskaliśmy ponad 500 nowych leadów.' },
    { name: 'Piotr Nowak', position: 'Marketing Manager, FashionBrand', rating: 5, text: 'Profesjonalizm na najwyższym poziomie. Content kreowany przez Vomeral jest nie tylko piękny, ale przede wszystkim skuteczny - sprzedaż wzrosła o 45%.' },
    { name: 'Maria Wiśniewska', position: 'Founder, BeautyLab', rating: 5, text: 'Kampanie influencer marketingowe przekroczyły nasze oczekiwania. ROI 8:1 przy first campaign. Zdecydowanie polecam współpracę!' }
  ];

  const stats = [
    { number: '2500+', label: 'Zadowolonych klientów' },
    { number: '95%', label: 'Wskaźnik sukcesu' },
    { number: '24/7', label: 'Wsparcie' },
    { number: '150+', label: 'Projektów' }
  ];

  const caseStudies = [
    { title: 'E-commerce Fashion', metric: '+285% sprzedaży', description: 'Kompleksowa strategia SMM z influencer campaigns' },
    { title: 'Tech Startup', metric: '15K nowych followerów', description: 'Organic growth strategy i viral content' },
    { title: 'Beauty Brand', metric: 'ROI 12:1', description: 'Multi-platform influencer marketing campaign' }
  ];

  return (
    <div style={{ background: 'hsl(var(--background))' }}>
      {/* Hero */}
      <section className="section-padding" style={{
        background: `linear-gradient(135deg, hsl(var(--primary) / 0.9), hsl(var(--secondary) / 0.85)), url(${heroAbstract})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container-custom">
          <div style={{ maxWidth: '700px', color: 'white' }}>
            <h1 className="animate-fade-up" style={{ marginBottom: '1.5rem', color: 'white' }}>
              Strategie, które przynoszą <span style={{ color: 'hsl(var(--accent-light))' }}>rezultaty</span>
            </h1>
            <p className="animate-fade-up delay-100" style={{ fontSize: '1.25rem', marginBottom: '2rem', color: 'rgba(255,255,255,0.95)', lineHeight: 1.7 }}>
              Marketing i analityka social media dla rozwoju Twojego brandu
            </p>
            <div className="animate-fade-up delay-200" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#orderFormAnchor" className="btn-primary" style={{ background: 'white', color: 'hsl(var(--primary))' }}>
                <span>Zapytaj o audyt</span>
              </a>
              <Link to="/uslugi" className="btn-glass" style={{ background: 'rgba(255,255,255,0.15)', color: 'white', borderColor: 'rgba(255,255,255,0.3)' }}>
                Zobacz usługi
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding" style={{ background: 'hsl(var(--neutral-50))' }}>
        <div className="container-custom">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            {stats.map((stat, i) => (
              <div key={i} className="animate-fade-up" style={{ textAlign: 'center' }}>
                <div className="gradient-text" style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '0.5rem' }}>{stat.number}</div>
                <div style={{ color: 'hsl(var(--neutral-600))', fontSize: '1.125rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Nasze <span className="gradient-text">Usługi</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {services.slice(0, 6).map((service, i) => (
              <article key={service.slug} className={`glass-card animate-fade-up delay-${(i % 3) * 100}`} style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>{service.title}</h3>
                <p style={{ color: 'hsl(var(--neutral-600))', marginBottom: '1.5rem', fontSize: '0.9375rem' }}>{service.short}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
                  <span className="gradient-text" style={{ fontWeight: 700 }}>{service.price}</span>
                  <Link to={`/uslugi/${service.slug}`} className="btn-glass" style={{ fontSize: '0.9375rem', padding: '0.75rem 1.5rem' }}>Więcej</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding" style={{ background: 'hsl(var(--neutral-50))' }}>
        <div className="container-custom">
          <h2 className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Case <span className="gradient-text">Studies</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {caseStudies.map((cs, i) => (
              <div key={i} className={`glass-card animate-fade-up delay-${i * 100}`} style={{ padding: '2rem', borderLeft: '3px solid hsl(var(--primary))' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{cs.title}</h3>
                <div className="gradient-text" style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>{cs.metric}</div>
                <p style={{ color: 'hsl(var(--neutral-600))', margin: 0 }}>{cs.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="animate-fade-up" style={{ textAlign: 'center', marginBottom: '3rem' }}>Co mówią <span className="gradient-text">klienci</span></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, i) => (
              <div key={i} className={`glass-card animate-fade-up delay-${i * 100}`} style={{ padding: '2rem' }}>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, j) => <span key={j} style={{ color: 'hsl(var(--primary))' }}>★</span>)}
                </div>
                <p style={{ fontSize: '1rem', lineHeight: 1.7, color: 'hsl(var(--neutral-600))', marginBottom: '1.5rem' }}>"{t.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)))', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 700, fontSize: '1.25rem' }}>{t.name[0]}</div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'hsl(var(--foreground))' }}>{t.name}</div>
                    <div style={{ fontSize: '0.875rem', color: 'hsl(var(--neutral-500))' }}>{t.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
    </div>
  );
};

export default Index;
