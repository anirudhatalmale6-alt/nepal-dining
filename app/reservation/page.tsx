'use client';
import { useLang } from '../lib/LanguageContext';
import ReservationForm from '../components/ReservationForm';

export default function ReservationPage() {
  const { t } = useLang();

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#FDF8F0' }}>
      {/* Hero */}
      <section style={{ padding: '60px 24px 40px', background: 'linear-gradient(135deg, #2D2820, #1C1A18)', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#D4821A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{t.reservation.eyebrow}</div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 12 }}>{t.reservation.headline}</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>{t.reservation.subheadline}</p>
      </section>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48, alignItems: 'start' }}>
          {/* Sidebar Info */}
          <div>
            <div style={{ background: 'white', borderRadius: 24, padding: '32px', boxShadow: '0 8px 32px rgba(28,26,24,0.08)', marginBottom: 24 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 20 }}>Before You Visit</h3>
              {[
                { icon: '🕐', title: 'Business Hours', desc: 'Tue–Sun: 11:00–15:00 / 17:00–21:00\n2nd & 4th Wednesday: Closed' },
                { icon: '📍', title: 'Location', desc: 'Akatsukimachi 3-19, Nakafurano\nHokkaido 071-0714' },
                { icon: '🌸', title: 'Lavender Season', desc: 'June–August is peak season. Reserve at least 2 weeks in advance.' },
                { icon: '🕌', title: 'Halal Friendly', desc: 'Please mention dietary requirements in the special requests field.' },
                { icon: '👨‍👩‍👧', title: 'Families Welcome', desc: 'High chairs and kids\' portions available. Just ask!' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 20 }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18', marginBottom: 2 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#6B5E4E', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: 'linear-gradient(135deg, #D4821A, #F0A830)', borderRadius: 20, padding: '24px', textAlign: 'center', color: 'white' }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>📞</div>
              <p style={{ fontSize: 14, opacity: 0.9, marginBottom: 8 }}>Prefer to call? We speak Japanese & English.</p>
              <a href="tel:0167-44-2444" style={{ fontSize: 22, fontWeight: 800, color: 'white', textDecoration: 'none' }}>0167-44-2444</a>
            </div>
          </div>

          {/* Reservation Form */}
          <div style={{ background: 'white', borderRadius: 24, padding: '40px', boxShadow: '0 20px 60px rgba(28,26,24,0.1)' }}>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 28 }}>{t.reservation.eyebrow}</h2>
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
}
