import { useState } from 'react';

const About = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'Jakie platformy social media obsługujecie?',
      answer: 'Specjalizujemy się we wszystkich głównych platformach: Instagram, Facebook, TikTok, LinkedIn, YouTube, Twitter/X i Pinterest. Dobieramy platformy strategicznie, w zależności od Twojej grupy docelowej i celów biznesowych.'
    },
    {
      question: 'Jak długo trwa realizacja kampanii influencer marketingowej?',
      answer: 'Typowa kampania trwa od 2 tygodni do 3 miesięcy, w zależności od skali i celów. Proces selekcji influencerów i negocjacji zazwyczaj zajmuje 1-2 tygodnie, sama realizacja kampanii 2-8 tygodni, a potem dodatkowy czas na raportowanie wyników.'
    },
    {
      question: 'Czy tworzycie content również dla małych firm?',
      answer: 'Absolutnie! Oferujemy elastyczne pakiety dostosowane do różnych budżetów. Dla małych firm mamy pakiety startowe, które obejmują podstawową produkcję contentu i zarządzanie social media. Wszystkie nasze usługi są skalowalne.'
    },
    {
      question: 'Jak mierzecie efektywność działań w social media?',
      answer: 'Stosujemy zaawansowaną analitykę na wielu poziomach: reach, impressions, engagement rate, click-through rate, conversion rate, ROI. Używamy narzędzi takich jak Meta Business Suite, Google Analytics i dedykowanych platform SMM. Miesięczne raporty zawierają konkretne KPI aligned z Twoimi celami biznesowymi.'
    },
    {
      question: 'Czy mogę być zaangażowany w proces twórczy?',
      answer: 'Oczywiście! Współpraca z klientem jest kluczowa. Zaczynamy od szczegółowego briefu, regularnie prezentujemy koncepcje do akceptacji, zbieramy feedback i iterujemy. Ty decydujesz, jak bardzo chcesz być zaangażowany - od pełnej autonomii po close collaboration.'
    },
    {
      question: 'Jakie są wasze modele współpracy i rozliczenia?',
      answer: 'Oferujemy różne modele: miesięczny retainer (stała opłata za zakres usług), projekty jednorazowe (fixed price za konkretne deliverables) lub rozliczenie godzinowe dla konsultacji. Rozliczamy się transparentnie, z miesięcznymi fakturami i szczegółowym raportowaniem wykonanych prac.'
    }
  ];

  const stats = [
    { number: '2500+', label: 'Zadowolonych klientów' },
    { number: '95%', label: 'Wskaźnik sukcesu kampanii' },
    { number: '24/7', label: 'Dostępność wsparcia' },
    { number: '150+', label: 'Zrealizowanych projektów' }
  ];

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
              O <span className="gradient-text">Vomeral</span>
            </h1>
            <p className="animate-fade-up delay-100" style={{
              fontSize: '1.25rem',
              color: 'hsl(var(--neutral-600))',
              lineHeight: 1.8
            }}>
              Jesteśmy agencją SMM i influencer marketingu, która łączy kreatywność z data-driven approach. 
              Pomagamy markom budować silną obecność w social media i osiągać mierzalne wyniki biznesowe.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 className="animate-fade-up" style={{ marginBottom: '1.5rem' }}>
                Nasza misja
              </h2>
              <p className="animate-fade-up delay-100" style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'hsl(var(--neutral-600))',
                marginBottom: '1.5rem'
              }}>
                W świecie przesycenia informacyjnego i skracających się attention spans, wierzymy, 
                że autentyczna komunikacja i wysokiej jakości content to klucz do sukcesu w social media. 
                Nasza misja to pomagać markom wyróżnić się, budować genuine connections z ich audience 
                i przekształcać engagement w realne wyniki biznesowe.
              </p>
              <p className="animate-fade-up delay-200" style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'hsl(var(--neutral-600))'
              }}>
                Łączymy kreatywność z analityką, storytelling z strategią, passion z professionalism. 
                Jesteśmy partnerem, który rozumie Twoje cele biznesowe i przekłada je na skuteczne 
                działania w social media.
              </p>
            </div>
            <div className="animate-fade-up delay-300" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1.5rem'
            }}>
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="glass-card"
                  style={{
                    padding: '2rem 1.5rem',
                    textAlign: 'center'
                  }}
                >
                  <div className="gradient-text" style={{
                    fontSize: '2.5rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem'
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontSize: '0.9375rem',
                    color: 'hsl(var(--neutral-600))',
                    fontWeight: 500
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding" style={{
        background: 'hsl(var(--neutral-50))'
      }}>
        <div className="container-custom">
          <h2 className="animate-fade-up" style={{
            textAlign: 'center',
            marginBottom: '3rem'
          }}>
            Nasze wartości
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: 'Autentyczność',
                description: 'Wierzymy w genuine komunikację. Tworzymy content, który jest prawdziwy, resonuje z audience i buduje trust, nie manipuluje ani nie wprowadza w błąd.'
              },
              {
                title: 'Data-driven',
                description: 'Każda decyzja oparta na danych. Mierzymy wszystko, analizujemy wyniki i optymalizujemy działania, aby zapewnić maksymalny ROI z inwestycji w social media.'
              },
              {
                title: 'Kreatywność',
                description: 'Wyróżniający się content wymaga kreatywności. Nie kopiujemy - tworzymy unikalne, oryginalne treści, które przyciągają uwagę i zapadają w pamięć.'
              },
              {
                title: 'Transparentność',
                description: 'Otwarta komunikacja na każdym etapie. Regularne reportowanie, jasne metryki sukcesu, honest feedback i no hidden costs - zawsze wiesz, co dzieje się z Twoim projektem.'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className={`glass-card animate-fade-up delay-${(index + 1) * 100}`}
                style={{
                  padding: '2rem',
                  borderLeft: '3px solid hsl(var(--primary))'
                }}
              >
                <h3 style={{
                  fontSize: '1.25rem',
                  marginBottom: '1rem',
                  color: 'hsl(var(--foreground))'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'hsl(var(--neutral-600))',
                  margin: 0
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <h2 className="animate-fade-up" style={{
              textAlign: 'center',
              marginBottom: '3rem'
            }}>
              Często zadawane pytania
            </h2>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className={`glass-card animate-fade-up delay-${(index + 1) * 100}`}
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    cursor: 'pointer'
                  }}
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <div style={{
                    padding: '1.5rem 2rem',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '1rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.125rem',
                      margin: 0,
                      color: 'hsl(var(--foreground))',
                      fontWeight: 600
                    }}>
                      {item.question}
                    </h3>
                    <span style={{
                      fontSize: '1.5rem',
                      color: 'hsl(var(--primary))',
                      transition: 'var(--transition-smooth)',
                      transform: openFAQ === index ? 'rotate(45deg)' : 'rotate(0deg)'
                    }}>
                      +
                    </span>
                  </div>
                  {openFAQ === index && (
                    <div style={{
                      padding: '0 2rem 1.5rem',
                      borderTop: '1px solid hsl(var(--border))',
                      paddingTop: '1.5rem'
                    }}>
                      <p style={{
                        fontSize: '1rem',
                        lineHeight: 1.7,
                        color: 'hsl(var(--neutral-600))',
                        margin: 0
                      }}>
                        {item.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
