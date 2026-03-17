import { useEffect, useRef } from 'react';

const trainers = [
  { initials: 'MK', name: 'Marcus King', role: 'Strength & Power', exp: '8 Years Experience' },
  { initials: 'SL', name: 'Sofia Lee', role: 'HIIT & Cardio', exp: '6 Years Experience' },
  { initials: 'JR', name: 'James Reed', role: 'Boxing & MMA', exp: '10 Years Experience' },
  { initials: 'AP', name: 'Aisha Patel', role: 'Yoga & Recovery', exp: '5 Years Experience' },
];

export default function Trainers() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    refs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="trainers" style={{ padding: '6rem 5%', background: 'var(--black)' }}>
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <div className="section-label">Meet The Team</div>
        <h2 className="section-title">Our <span className="accent">Trainers</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '2rem', marginTop: '3rem'
      }}>
        {trainers.map((t, i) => (
          <div
            key={t.name}
            ref={el => refs.current[i] = el}
            className="fade-in"
            style={{ textAlign: 'center' }}
          >
            <div style={{
              width: '120px', height: '120px', borderRadius: '50%',
              background: 'var(--charcoal)',
              border: '2px solid rgba(200,155,14,0.3)',
              margin: '0 auto 1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2.5rem', color: 'var(--gold)',
              transition: 'border-color 0.3s'
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--gold)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(200,155,14,0.3)'}
            >
              {t.initials}
            </div>
            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1.2rem', fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '1px',
              color: 'var(--off-white)'
            }}>{t.name}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--gold)', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.3rem' }}>{t.role}</div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(242,239,228,0.4)', marginTop: '0.5rem' }}>{t.exp}</div>
          </div>
        ))}
      </div>
    </section>
  );
}