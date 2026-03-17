export default function Footer() {
  return (
    <footer style={{
      background: 'var(--black)',
      borderTop: '1px solid rgba(200,155,14,0.12)',
      padding: '3rem 5%',
      display: 'flex', justifyContent: 'space-between',
      alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem'
    }}>
      <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.6rem', color: 'var(--gold)', letterSpacing: '3px' }}>
        FIT<span style={{ color: 'var(--off-white)' }}>FORGE</span>
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
        {['about', 'services', 'membership', 'contact'].map(link => (
          <a key={link} href={`#${link}`} style={{
            fontSize: '0.78rem', color: 'rgba(242,239,228,0.4)',
            textDecoration: 'none', letterSpacing: '1px',
            textTransform: 'uppercase', transition: 'color 0.2s'
          }}
            onMouseEnter={e => e.target.style.color = 'var(--gold)'}
            onMouseLeave={e => e.target.style.color = 'rgba(242,239,228,0.4)'}
          >
            {link}
          </a>
        ))}
      </div>

      <div style={{ fontSize: '0.8rem', color: 'rgba(242,239,228,0.3)', letterSpacing: '1px' }}>
        © 2023 FitForge Sports Center. All rights reserved.
      </div>
    </footer>
  );
}