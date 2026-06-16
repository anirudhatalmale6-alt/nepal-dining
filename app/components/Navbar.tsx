'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '../lib/LanguageContext';

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '/', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '/about', label: t.nav.about },
    { href: '/blog', label: t.nav.blog },
    { href: '/access', label: t.nav.access },
    { href: '/contact', label: t.nav.contact },
  ];

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(255,253,248,0.97)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212,130,26,0.15)' : 'none',
        boxShadow: scrolled ? '0 2px 20px rgba(28,26,24,0.08)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 80, transition: 'height 0.3s ease' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{
              width: 42, height: 42, borderRadius: '50%',
              background: 'linear-gradient(135deg, #D4821A, #769a00)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 800, color: 'white', flexShrink: 0,
            }}>N</div>
            <div>
              <div style={{
                fontSize: 18, fontWeight: 700, color: scrolled ? '#1C1A18' : 'white',
                lineHeight: 1, fontFamily: 'Georgia, serif',
                textShadow: !scrolled ? '0 1px 4px rgba(0,0,0,0.4)' : 'none',
              }}>Nepal Dining</div>
              <div style={{
                fontSize: 10, color: scrolled ? '#D4821A' : 'rgba(255,255,255,0.85)',
                letterSpacing: '0.1em', textTransform: 'uppercase', lineHeight: 1.4,
              }}>Nakafurano, Hokkaido</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }} className="desktop-nav">
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                padding: '6px 12px', fontSize: 14, fontWeight: 500,
                color: scrolled ? '#6B5E4E' : 'rgba(255,255,255,0.9)',
                textDecoration: 'none', borderRadius: 6,
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLElement).style.color = '#D4821A'; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.color = scrolled ? '#6B5E4E' : 'rgba(255,255,255,0.9)'; }}
              >{l.label}</Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Language Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ja' : 'en')}
              style={{
                padding: '5px 12px', borderRadius: 20, border: '1.5px solid',
                borderColor: scrolled ? '#D4821A' : 'rgba(255,255,255,0.6)',
                background: 'transparent', cursor: 'pointer', fontSize: 12,
                fontWeight: 600, letterSpacing: '0.05em',
                color: scrolled ? '#D4821A' : 'white',
                transition: 'all 0.2s',
              }}
            >{lang === 'en' ? '日本語' : 'English'}</button>

            {/* Reserve Button */}
            <Link href="/reservation" style={{
              padding: '8px 18px', borderRadius: 24,
              background: 'linear-gradient(135deg, #D4821A, #F0A830)',
              color: 'white', textDecoration: 'none', fontSize: 13,
              fontWeight: 600, boxShadow: '0 4px 12px rgba(212,130,26,0.35)',
              transition: 'transform 0.2s',
              display: 'inline-block',
            }}
            className="desktop-nav"
            >{t.nav.reserveBtn}</Link>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="mobile-nav"
              style={{
                width: 40, height: 40, border: 'none', background: 'transparent',
                cursor: 'pointer', display: 'flex', flexDirection: 'column',
                justifyContent: 'center', alignItems: 'center', gap: 5,
              }}
              aria-label="Toggle menu"
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  width: 22, height: 2, borderRadius: 2,
                  background: scrolled ? '#1C1A18' : 'white',
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px, 5px)'
                      : i === 1 ? 'opacity 0'
                      : 'rotate(-45deg) translate(5px, -5px)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          background: 'rgba(255,253,248,0.98)', backdropFilter: 'blur(12px)',
          borderTop: '1px solid rgba(212,130,26,0.1)',
          padding: '16px 24px 24px',
        }}>
          {links.map(l => (
            <Link key={l.href} href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block', padding: '12px 0', fontSize: 16, fontWeight: 500,
                color: '#1C1A18', textDecoration: 'none',
                borderBottom: '1px solid rgba(212,130,26,0.08)',
              }}
            >{l.label}</Link>
          ))}
          <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
            <Link href="/reservation" onClick={() => setMenuOpen(false)} style={{
              flex: 1, textAlign: 'center', padding: '12px', borderRadius: 24,
              background: 'linear-gradient(135deg, #D4821A, #F0A830)',
              color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600,
            }}>{t.nav.reserveBtn}</Link>
            <Link href="/order" onClick={() => setMenuOpen(false)} style={{
              flex: 1, textAlign: 'center', padding: '12px', borderRadius: 24,
              border: '2px solid #769a00', color: '#769a00',
              textDecoration: 'none', fontSize: 14, fontWeight: 600,
            }}>{t.nav.orderBtn}</Link>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav { display: flex !important; }
        .mobile-nav { display: none !important; }
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-nav { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
