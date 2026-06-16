'use client';
import Link from 'next/link';
import { useLang } from '../lib/LanguageContext';

export default function Footer() {
  const { t, lang } = useLang();

  const navLinks = [
    { href: '/', label: t.nav.home },
    { href: '/menu', label: t.nav.menu },
    { href: '/order', label: t.nav.order },
    { href: '/reservation', label: t.nav.reservation },
    { href: '/about', label: t.nav.about },
    { href: '/blog', label: t.nav.blog },
    { href: '/access', label: t.nav.access },
    { href: '/contact', label: t.nav.contact },
  ];

  const socials = [
    { name: 'Facebook', href: 'https://facebook.com/nepaldiningfurano', icon: 'f' },
    { name: 'Instagram', href: 'https://instagram.com/nepaldiningfurano', icon: '📷' },
    { name: 'YouTube', href: 'https://youtube.com/@nepaldiningfurano', icon: '▶' },
    { name: 'Tripadvisor', href: 'https://tripadvisor.com', icon: '🦉' },
    { name: 'Google Maps', href: 'https://maps.google.com/?q=Nepal+Dining+Nakafurano', icon: '📍' },
  ];

  return (
    <footer style={{ background: '#769a00', color: 'white' }}>
      {/* Main Footer */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 24px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48 }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 20, fontWeight: 800, fontFamily: 'Georgia, serif',
              }}>N</div>
              <div>
                <div style={{ fontSize: 20, fontWeight: 700, fontFamily: 'Georgia, serif' }}>Nepal Dining</div>
                <div style={{ fontSize: 11, opacity: 0.7, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Nakafurano, Hokkaido</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, opacity: 0.85, marginBottom: 20 }}>{t.footer.tagline}</p>
            {/* Social Links */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {socials.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 14, textDecoration: 'none',
                    transition: 'background 0.2s',
                  }}
                  aria-label={s.name}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.3)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.15)'; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 16 }}>{t.footer.links}</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {navLinks.map(l => (
                <li key={l.href} style={{ marginBottom: 8 }}>
                  <Link href={l.href} style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 14, transition: 'color 0.2s' }}
                    onMouseEnter={e => { (e.target as HTMLElement).style.color = 'white'; }}
                    onMouseLeave={e => { (e.target as HTMLElement).style.color = 'rgba(255,255,255,0.85)'; }}
                  >{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 16 }}>{lang === 'ja' ? 'お問い合わせ' : 'Contact'}</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 16, marginTop: 1 }}>📍</span>
                <span style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>{t.footer.address}</span>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                <span style={{ fontSize: 16 }}>📞</span>
                <a href="tel:0167-44-2200" style={{ fontSize: 14, color: 'white', textDecoration: 'none', fontWeight: 600 }}>0167-44-2200</a>
              </div>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                <span style={{ fontSize: 16, marginTop: 1 }}>🕐</span>
                <div style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.85 }}>
                  Tue–Sun: 11:30–15:00<br />17:00–21:30<br /><span style={{ opacity: 0.7 }}>Monday: Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.6, marginBottom: 16 }}>{lang === 'ja' ? '予約' : 'Reserve'}</h4>
            <p style={{ fontSize: 14, opacity: 0.85, marginBottom: 20, lineHeight: 1.6 }}>{lang === 'ja' ? '富良野で最高のヒマラヤ料理をお楽しみください。テーブルをご予約ください。' : 'Book your table for the ultimate Himalayan dining experience in Furano.'}</p>
            <Link href="/reservation" style={{
              display: 'inline-block', padding: '12px 24px', borderRadius: 24,
              background: 'white', color: '#769a00',
              textDecoration: 'none', fontSize: 14, fontWeight: 700,
              transition: 'transform 0.2s',
            }}>{t.nav.reserveBtn}</Link>
          </div>
        </div>
      </div>

      {/* Bottom bar - red like WordPress */}
      <div style={{ background: '#C0392B', padding: '16px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: 'white', margin: 0 }}>{t.footer.legal}</p>
      </div>
    </footer>
  );
}
