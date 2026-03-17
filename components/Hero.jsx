import { useEffect, useRef } from 'react';

export default function Hero() {
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (contentRef.current) contentRef.current.classList.add('visible');
      if (statsRef.current) statsRef.current.classList.add('visible');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '7rem 5% 4rem',
      position: 'relative', overflow: 'hidden'
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: `
          radial-gradient(ellipse at 70% 50%, rgba(200,155,14,0.12) 0%, transparent 60%),
          radial-gradient(ellipse at 10% 80%, rgba(30,26,12,0.9) 0%, transparent 50%),
          var(--black)
        `
      }} />

      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, opacity: 0.04,
        backgroundImage: `
          repeating-linear-gradient(0deg, var(--gold) 0, var(--gold) 1px, transparent 1px, transparent 60px),
          repeating-linear-gradient(90deg, var(--gold) 0, var(--gold) 1px, transparent 1px, transparent 60px)
        `
      }} />

      {/* Content */}
      <div ref={contentRef} className="fade-in" style={{ position: 'relative', zIndex: 2, maxWidth: '700px' }}>
        <div style={{
          display: 'inline-block',
          background: 'rgba(200,155,14,0.15)',
          border: '1px solid rgba(200,155,14,0.4)',
          color: 'var(--gold)',
          fontSize: '0.72rem', letterSpacing: '4px',
          textTransform: 'uppercase',
          padding: '0.4rem 1rem', marginBottom: '1.5rem', fontWeight: 600
        }}>
          Est. 2023 · Sports Center
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(4rem, 10vw, 8rem)',
          lineHeight: 0.9,
          color: 'var(--off-white)',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          marginBottom: '1rem'
        }}>
          Build Your
          <span style={{ color: 'var(--gold)', display: 'block' }}>Strongest</span>
          Self.
        </h1>

        <p style={{
          fontSize: '1.1rem',
          color: 'rgba(242,239,228,0.65)',
          maxWidth: '480px', lineHeight: 1.7,
          marginBottom: '2.5rem', fontWeight: 300
        }}>
          Where champions are forged. Elite training, world-class equipment,
          and certified coaches — all under one roof.
        </p>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#membership" className="btn-primary">Start Free Trial</a>
          <a href="#services" className="btn-outline">Explore Services</a>
        </div>
      </div>

      {/* Stats */}
      <div ref={statsRef} className="fade-in" style={{
        position: 'relative', zIndex: 2,
        display: 'flex', gap: '3rem', marginTop: '4rem',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(200,155,14,0.2)',
        flexWrap: 'wrap'
      }}>
        {[
          { number: '500+', label: 'Active Members' },
          { number: '12', label: 'Expert Trainers' },
          { number: '20+', label: 'Programs' },
          { number: '24/7', label: 'Access' },
        ].map(stat => (
          <div key={stat.label}>
            <div style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '2.8rem', color: 'var(--gold)', lineHeight: 1
            }}>{stat.number}</div>
            <div style={{
              fontSize: '0.75rem', color: 'rgba(242,239,228,0.5)',
              letterSpacing: '2px', textTransform: 'uppercase', marginTop: '0.2rem'
            }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}