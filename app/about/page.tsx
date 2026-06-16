'use client';
import Link from 'next/link';
import { useLang } from '../lib/LanguageContext';

export default function AboutPage() {
  const { t } = useLang();

  const teamMembers = [
    { name: 'Ramesh Thapa', role: 'Head Chef & Founder', desc: 'Born in Kathmandu, Ramesh brings 25+ years of culinary tradition to every dish. His family recipes form the heart of Nepal Dining.', emoji: '👨‍🍳' },
    { name: 'Sita Gurung', role: 'Co-Founder & Manager', desc: 'Sita leads front-of-house with warmth and precision, ensuring every guest feels like family from the moment they walk in.', emoji: '👩' },
    { name: 'Bikram Rai', role: 'Sous Chef', desc: 'Specializing in tandoor and grilled dishes, Bikram trained in Delhi before bringing his expertise to Furano.', emoji: '👨‍🍳' },
  ];

  const timeline = [
    { year: '2010', event: 'Nepal Dining opens in Nakafurano, welcoming its first guests with a 10-item menu and a single tandoor oven.' },
    { year: '2013', event: 'Introduced the Hokkaido Soup Curry, blending Nepalese spice traditions with local produce.' },
    { year: '2016', event: 'Recognized as one of Hokkaido\'s top 10 most-loved ethnic restaurants by a regional tourism magazine.' },
    { year: '2019', event: 'Expanded the dining room to accommodate the growing number of lavender-season visitors.' },
    { year: '2022', event: 'Launched online ordering and English-language reservations to serve international tourists.' },
    { year: '2025', event: 'Celebrating 15 years — still family-owned, still baking naan daily, still the same original recipes.' },
  ];

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 24px', background: 'linear-gradient(135deg, #1C1A18 0%, #2D2820 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#D4821A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{t.about.eyebrow}</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.15, marginBottom: 20 }}>{t.about.headline}</h1>
          <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7 }}>{t.about.p1}</p>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '80px 24px', background: '#FFFDF8' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 20 }}>From Kathmandu to Hokkaido</h2>
            <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.8, marginBottom: 16 }}>{t.about.p2}</p>
            <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.8 }}>{t.about.p3}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {['https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg','https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg','https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg','https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg'].map((src, i) => (
              <div key={i} style={{ borderRadius: 12, overflow: 'hidden', aspectRatio: '1' }}>
                <img src={src} alt="Nepal Dining" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 24px', background: 'linear-gradient(135deg, #D4821A, #F0A830)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { val: '15+', label: t.about.stat1label },
            { val: '4.8★', label: t.about.stat2label },
            { val: '50+', label: t.about.stat3label },
            { val: '10,000+', label: 'Happy Guests' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 40, fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 8 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '80px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 48, textAlign: 'center' }}>Our Journey</h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 60, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #D4821A, #769a00)', borderRadius: 2 }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, marginBottom: 40, position: 'relative' }}>
                <div style={{ width: 60, flexShrink: 0, textAlign: 'right', paddingRight: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: '#D4821A', fontFamily: 'Georgia, serif' }}>{item.year}</span>
                </div>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #D4821A, #F0A830)', flexShrink: 0, marginTop: 4, position: 'relative', zIndex: 1, boxShadow: '0 0 0 4px #FDF8F0' }} />
                <div style={{ flex: 1, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 2px 12px rgba(28,26,24,0.07)', border: '1px solid rgba(212,130,26,0.08)' }}>
                  <p style={{ fontSize: 15, color: '#1C1A18', lineHeight: 1.7 }}>{item.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '80px 24px', background: '#1C1A18' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 48, textAlign: 'center' }}>Meet the Team</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 28 }}>
            {teamMembers.map((member, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 20, padding: '32px 28px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #D4821A, #769a00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 36, margin: '0 auto 20px' }}>{member.emoji}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: 'white', marginBottom: 4 }}>{member.name}</h3>
                <div style={{ fontSize: 13, color: '#D4821A', fontWeight: 600, marginBottom: 12 }}>{member.role}</div>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 24px', textAlign: 'center', background: '#FFFDF8' }}>
        <h2 style={{ fontSize: 32, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 16 }}>Come Experience It for Yourself</h2>
        <p style={{ fontSize: 17, color: '#6B5E4E', marginBottom: 32 }}>Every dish tells a story. We'd love to share it with you.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/reservation" style={{ padding: '16px 36px', borderRadius: 32, background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white', textDecoration: 'none', fontSize: 16, fontWeight: 700, boxShadow: '0 8px 24px rgba(212,130,26,0.35)' }}>Reserve a Table</Link>
          <Link href="/menu" style={{ padding: '16px 36px', borderRadius: 32, border: '2px solid #1C1A18', color: '#1C1A18', textDecoration: 'none', fontSize: 16, fontWeight: 700 }}>View Our Menu</Link>
        </div>
      </section>
    </div>
  );
}
