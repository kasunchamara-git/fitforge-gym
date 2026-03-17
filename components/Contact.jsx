import { useState, useRef, useEffect } from 'react';

const contactDetails = [
  { icon: '📍', label: 'Location', value: '123 Iron Street, Fitness District, Colombo' },
  { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
  { icon: '✉️', label: 'Email', value: 'info@fitforge.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri: 5AM–11PM · Sat–Sun: 6AM–9PM' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const refs = [useRef(null), useRef(null)];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    refs.forEach(r => r.current && observer.observe(r.current));
    return () => observer.disconnect();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Please enter your name.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Please enter a valid email.';
    if (!form.message.trim()) newErrors.message = 'Please enter your message.';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSuccess(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const inputStyle = (field) => ({
    background: 'rgba(6,6,6,0.6)',
    border: `1px solid ${errors[field] ? '#e74c3c' : 'rgba(200,155,14,0.15)'}`,
    color: 'var(--off-white)',
    padding: '0.85rem 1rem',
    fontFamily: "'Barlow', sans-serif",
    fontSize: '0.9rem',
    outline: 'none',
    width: '100%',
    transition: 'border-color 0.2s'
  });

  const labelStyle = {
    fontSize: '0.72rem', letterSpacing: '2px',
    textTransform: 'uppercase', color: 'rgba(242,239,228,0.5)',
    fontWeight: 600, marginBottom: '0.4rem', display: 'block'
  };

  return (
    <section id="contact" style={{ padding: '6rem 5%', background: 'var(--dark-brown)' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '5rem', alignItems: 'start'
      }}>

        {/* Info */}
        <div ref={refs[0]} className="fade-in">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title">Send Us A <span className="accent">Message</span></h2>
          <p className="section-desc">
            Ready to start your journey? Reach out and our team will get back to you within 24 hours.
          </p>

          {contactDetails.map(d => (
            <div key={d.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', marginTop: '2rem' }}>
              <div style={{
                width: '44px', height: '44px', flexShrink: 0,
                background: 'rgba(200,155,14,0.1)',
                border: '1px solid rgba(200,155,14,0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem'
              }}>{d.icon}</div>
              <div>
                <h4 style={{ fontSize: '0.78rem', letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.3rem' }}>{d.label}</h4>
                <p style={{ fontSize: '0.9rem', color: 'rgba(242,239,228,0.6)' }}>{d.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div ref={refs[1]} className="fade-in">
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} noValidate>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={labelStyle} htmlFor="name">Full Name *</label>
                <input id="name" type="text" placeholder="John Doe"
                  value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                  style={inputStyle('name')}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = errors.name ? '#e74c3c' : 'rgba(200,155,14,0.15)'}
                />
                {errors.name && <span style={{ fontSize: '0.75rem', color: '#e74c3c' }}>{errors.name}</span>}
              </div>
              <div>
                <label style={labelStyle} htmlFor="email">Email Address *</label>
                <input id="email" type="email" placeholder="john@example.com"
                  value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                  style={inputStyle('email')}
                  onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                  onBlur={e => e.target.style.borderColor = errors.email ? '#e74c3c' : 'rgba(200,155,14,0.15)'}
                />
                {errors.email && <span style={{ fontSize: '0.75rem', color: '#e74c3c' }}>{errors.email}</span>}
              </div>
            </div>

            <div>
              <label style={labelStyle} htmlFor="subject">Subject</label>
              <input id="subject" type="text" placeholder="Membership Inquiry"
                value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}
                style={inputStyle('subject')}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = 'rgba(200,155,14,0.15)'}
              />
            </div>

            <div>
              <label style={labelStyle} htmlFor="message">Message *</label>
              <textarea id="message" rows={5} placeholder="Tell us your goals and how we can help…"
                value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
                style={{ ...inputStyle('message'), resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--gold)'}
                onBlur={e => e.target.style.borderColor = errors.message ? '#e74c3c' : 'rgba(200,155,14,0.15)'}
              />
              {errors.message && <span style={{ fontSize: '0.75rem', color: '#e74c3c' }}>{errors.message}</span>}
            </div>

            <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start' }}>
              Send Message →
            </button>

            {success && (
              <div style={{
                background: 'rgba(200,155,14,0.12)', border: '1px solid var(--gold)',
                color: 'var(--gold)', padding: '1rem 1.5rem',
                fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.8rem', marginTop: '1rem'
              }}>
                ✅ <strong>Message sent!</strong> We'll get back to you within 24 hours.
              </div>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}