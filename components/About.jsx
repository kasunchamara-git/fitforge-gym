import { useEffect, useRef } from 'react';

export default function About() {
  const refs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    refs.forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const features = [
    { title: '⚡ Elite Equipment', desc: 'State-of-the-art machines & free weights' },
    { title: '🏆 Certified Coaches', desc: 'Professional trainers at every level' },
    { title: '📊 Progress Tracking', desc: 'Personalized goal-setting & analytics' },
    { title: '🥗 Nutrition Plans', desc: 'Custom meal & supplement guidance' },
  ];

  return (
    <section id="about" style={{ padding: '6rem 5%', background: 'var(--dark-brown)', position: 'relative' }}>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '5rem', alignItems: 'center'
      }}>

        {/* Logo Image */}
        <div ref={refs[0]} className="fade-in" style={{ position: 'relative', textAlign: 'center' }}>
          <div style={{
            position: 'absolute', left: '-2rem', top: 0, bottom: 0, width: '3px',
            background: 'linear-gradient(to bottom, transparent, var(--gold), transparent)'
          }} />
          <img
            src="/images/logo.jpg"
            alt="FitForge Gym Logo"
            onError={(e) => {
              const attempts = [
                '/images/logo.JPG',
                '/images/logo.jpeg',
                '/images/logo.png',
                '/images/bodybuilding-emblem-and-gym-logo-design-template-free-vector.jpg',
              ];
              const currentFile = e.target.src.split('/images/')[1];
              const idx = attempts.findIndex(a => a.includes(currentFile));
              const next = attempts[idx + 1];
              if (next) { e.target.src = next; }
              else { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }
            }}
            style={{
              width: '100%', maxWidth: '420px', height: 'auto',
              objectFit: 'contain',
              filter: 'drop-shadow(0 0 40px rgba(200,155,14,0.25))',
              display: 'block', margin: '0 auto'
            }}
          />
          <div style={{
            display: 'none', width: '280px', height: '280px', margin: '0 auto',
            background: 'rgba(200,155,14,0.08)', border: '2px dashed rgba(200,155,14,0.3)',
            borderRadius: '50%', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: '0.5rem'
          }}>
            <span style={{ fontSize: '4rem' }}>🏋️</span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1rem', color: 'var(--gold)', letterSpacing: '2px' }}>FITFORGE GYM</span>
          </div>
        </div>

        {/* Text */}
        <div ref={refs[1]} className="fade-in">
          <div className="section-label">About FitForge</div>
          <h2 className="section-title">
            More Than A <span className="accent">Gym.</span>
          </h2>
          <p className="section-desc" style={{ marginBottom: '2rem' }}>
            FitForge Sports Center was founded to give athletes of all levels access to
            professional-grade training. Our facility is built on a philosophy of
            discipline, dedication, and measurable results.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {features.map(f => (
              <div key={f.title} style={{
                background: 'rgba(200,155,14,0.06)',
                border: '1px solid rgba(200,155,14,0.12)',
                padding: '1rem'
              }}>
                <div style={{
                  fontWeight: 700, fontSize: '0.85rem', letterSpacing: '1px',
                  color: 'var(--gold)', marginBottom: '0.3rem', textTransform: 'uppercase'
                }}>{f.title}</div>
                <div style={{ fontSize: '0.82rem', color: 'rgba(242,239,228,0.5)', lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}