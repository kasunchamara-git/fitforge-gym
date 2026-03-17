import { useEffect, useRef } from 'react';

const plans = [
  {
    name: 'Starter', price: '29000', featured: false,
    features: [
      { text: 'Gym Floor Access', active: true },
      { text: 'Locker Room', active: true },
      { text: '2 Group Classes/mo', active: true },
      { text: 'Personal Trainer', active: false },
      { text: 'Nutrition Plan', active: false },
      { text: '24/7 Access', active: false },
    ]
  },
  {
    name: 'Pro', price: '59000', featured: true,
    features: [
      { text: 'Unlimited Gym Access', active: true },
      { text: 'All Group Classes', active: true },
      { text: '2 PT Sessions/mo', active: true },
      { text: 'Nutrition Guidance', active: true },
      { text: '24/7 Access', active: true },
      { text: 'VIP Lounge', active: false },
    ]
  },
  {
    name: 'Elite', price: '99000', featured: false,
    features: [
      { text: 'Everything in Pro', active: true },
      { text: 'Unlimited PT Sessions', active: true },
      { text: 'Custom Meal Plan', active: true },
      { text: 'Body Composition Analysis', active: true },
      { text: 'VIP Lounge Access', active: true },
      { text: 'Priority Booking', active: true },
    ]
  },
];

export default function Membership() {
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
    <section id="membership" style={{ padding: '6rem 5%', background: 'var(--dark-brown)' }}>
      <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
        <div className="section-label">Pricing Plans</div>
        <h2 className="section-title">Choose Your <span className="accent">Plan</span></h2>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
        gap: '1.5rem', marginTop: '3rem'
      }}>
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            ref={el => refs.current[i] = el}
            className="fade-in"
            style={{
              border: `1px solid ${plan.featured ? 'var(--gold)' : 'rgba(200,155,14,0.15)'}`,
              padding: '2.5rem 2rem', position: 'relative',
              background: plan.featured ? 'rgba(200,155,14,0.05)' : 'transparent',
              transition: 'transform 0.3s, border-color 0.3s'
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.borderColor = 'var(--gold)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.borderColor = plan.featured ? 'var(--gold)' : 'rgba(200,155,14,0.15)'; }}
          >
            {plan.featured && (
              <div style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                background: 'var(--gold)', color: 'var(--black)',
                fontSize: '0.65rem', letterSpacing: '2px', textTransform: 'uppercase',
                fontWeight: 700, padding: '0.3rem 1rem', whiteSpace: 'nowrap',
                clipPath: 'polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)'
              }}>Most Popular</div>
            )}

            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', letterSpacing: '2px', color: 'var(--gold)', marginBottom: '1rem' }}>
              {plan.name}
            </div>

            <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '3.5rem', lineHeight: 1, color: 'var(--off-white)' }}>
              <sup style={{ fontSize: '1.5rem', verticalAlign: 'top', marginTop: '0.5rem' }}>LKR</sup>
              {plan.price}
            </div>
            <div style={{ fontSize: '0.8rem', color: 'rgba(242,239,228,0.4)', letterSpacing: '1px', margin: '0.3rem 0 1.5rem' }}>/ month</div>

            <ul style={{ listStyle: 'none', marginBottom: '2rem' }}>
              {plan.features.map(f => (
                <li key={f.text} style={{
                  padding: '0.5rem 0',
                  fontSize: '0.88rem',
                  color: f.active ? 'rgba(242,239,228,0.7)' : 'rgba(242,239,228,0.3)',
                  borderBottom: '1px solid rgba(200,155,14,0.08)',
                  display: 'flex', alignItems: 'center', gap: '0.7rem'
                }}>
                  <span style={{
                    width: '6px', height: '6px', flexShrink: 0,
                    background: f.active ? 'var(--gold)' : 'rgba(242,239,228,0.15)',
                    clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
                  }} />
                  {f.text}
                </li>
              ))}
            </ul>

            <a href="#contact" className={plan.featured ? 'btn-primary' : 'btn-outline'}
              style={{ width: '100%', textAlign: 'center', display: 'block' }}>
              Get Started
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}