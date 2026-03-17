import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '1rem 5%',
      background: scrolled ? 'rgba(6,6,6,0.97)' : 'rgba(6,6,6,0.92)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(200,155,14,0.2)',
      transition: 'all 0.3s'
    }}>
      <a href="#hero" style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '1.8rem', color: 'var(--gold)',
        letterSpacing: '3px', textDecoration: 'none'
      }}>
        FIT<span style={{ color: 'var(--off-white)' }}>FORGE</span>
      </a>

      {/* Desktop Links */}
      <ul style={{
        display: menuOpen ? 'none' : 'flex',
        gap: '2rem', listStyle: 'none'
      }} className="desktop-nav">
        {['about', 'services', 'membership', 'trainers'].map(link => (
          <li key={link}>
            <a href={`#${link}`} style={{
              color: 'var(--off-white)', textDecoration: 'none',
              fontSize: '0.85rem', letterSpacing: '2px',
              textTransform: 'uppercase', fontWeight: 600,
              transition: 'color 0.2s'
            }}
              onMouseEnter={e => e.target.style.color = 'var(--gold)'}
              onMouseLeave={e => e.target.style.color = 'var(--off-white)'}
            >
              {link}
            </a>
          </li>
        ))}
        <li>
          <a href="#contact" style={{
            background: 'var(--gold)', color: 'var(--black)',
            padding: '0.5rem 1.2rem', fontWeight: 700,
            fontSize: '0.85rem', letterSpacing: '2px',
            textTransform: 'uppercase', textDecoration: 'none',
            clipPath: 'polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)'
          }}>
            Join Now
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          display: 'none', flexDirection: 'column', gap: '5px',
          cursor: 'pointer', background: 'none', border: 'none'
        }}
        className="hamburger-btn"
        aria-label="Menu"
      >
        <span style={{ width: '24px', height: '2px', background: 'var(--off-white)', display: 'block' }} />
        <span style={{ width: '24px', height: '2px', background: 'var(--off-white)', display: 'block' }} />
        <span style={{ width: '24px', height: '2px', background: 'var(--off-white)', display: 'block' }} />
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--black)', padding: '1rem 5%',
          borderBottom: '1px solid rgba(200,155,14,0.2)',
          listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem'
        }}>
          {['about', 'services', 'membership', 'trainers', 'contact'].map(link => (
            <li key={link}>
              <a href={`#${link}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'var(--off-white)', textDecoration: 'none',
                  fontSize: '0.85rem', letterSpacing: '2px',
                  textTransform: 'uppercase', fontWeight: 600
                }}>
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}