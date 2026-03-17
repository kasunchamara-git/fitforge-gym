import { useEffect, useRef } from 'react';

const services = [
  { num: '01', icon: '🏋️', title: 'Strength Training', desc: 'Progressive overload programs designed to maximize muscle growth and functional strength for all levels.' },
  { num: '02', icon: '🔥', title: 'HIIT Classes', desc: 'High-intensity interval training sessions that torch calories and boost cardiovascular endurance fast.' },
  { num: '03', icon: '🧘', title: 'Yoga & Recovery', desc: 'Guided yoga and mobility sessions to improve flexibility, reduce injury risk, and enhance recovery.' },
  { num: '04', icon: '🥊', title: 'Boxing & MMA', desc: 'Combat sports training for fitness and competition — develop speed, power, and mental toughness.' },
  { num: '05', icon: '🏃', title: 'Cardio Zone', desc: 'Dedicated cardio floor with treadmills, rowers, bikes, and stair climbers for endurance training.' },
  { num: '06', icon: '🎯', title: 'Personal Training', desc: 'One-on-one sessions with certified coaches tailored to your personal fitness goals and schedule.' },
];

export default function Services() {
  const headRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    if (headRef.current) observer.observe(headRef.current);
    cardRefs.current.forEach(r => r && observer.observe(r));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" style={{ padding: '6rem 5%', background: 'var(--black)' }}>
      <div ref={headRef} className="fade-in" style={{
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-end', marginBottom: '3.5rem', gap: '2rem', flexWrap: 'wrap'
      }}>
        <div>
          <div className="section-label">What We Offer</div>
          <h2 className="section-title">Our <span className="accent">Services</span></h2>
        </div>
        <p className="section-desc">
          From strength training to group classes, we have a program designed for every fitness goal.
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '1.5px',
        background: 'rgba(200,155,14,0.12)'
      }}>
        {services.map((s, i) => (
          <div
            key={s.num}
            ref={el => cardRefs.current[i] = el}
            className="fade-in"
            style={{
              background: 'var(--black)', padding: '2.5rem 2rem',
              position: 'relative', overflow: 'hidden',
              transition: 'background 0.3s', cursor: 'pointer'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(30,26,12,0.8)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--black)'}
          >
            <span style={{
              position: 'absolute', top: '1.5rem', right: '1.5rem',
              fontFamily: "'Bebas Neue', sans-serif", fontSize: '4rem',
              color: 'rgba(200,155,14,0.06)', lineHeight: 1
            }}>{s.num}</span>

            <span style={{ fontSize: '2.5rem', marginBottom: '1.2rem', display: 'block' }}>{s.icon}</span>

            <div style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: '1.35rem', fontWeight: 700,
              letterSpacing: '1px', textTransform: 'uppercase',
              color: 'var(--off-white)', marginBottom: '0.7rem'
            }}>{s.title}</div>

            <p style={{ fontSize: '0.88rem', color: 'rgba(242,239,228,0.5)', lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}