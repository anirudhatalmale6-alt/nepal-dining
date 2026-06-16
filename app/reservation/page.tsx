'use client';
import { useState } from 'react';
import { useLang } from '../lib/LanguageContext';

export default function ReservationPage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', email: '', date: '', time: '12:00', guests: '2', notes: '', occasion: '' });
  const [submitted, setSubmitted] = useState(false);

  const times = ['11:30','12:00','12:30','13:00','13:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'];
  const occasions = ['', 'Birthday', 'Anniversary', 'Business Dinner', 'Family Gathering', 'Date Night', 'Tourist Visit', 'Other'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
                { icon: '🕐', title: 'Business Hours', desc: 'Tue–Sun: 11:30–15:00 / 17:00–21:30\nMonday: Closed' },
                { icon: '📍', title: 'Location', desc: 'Miyamachi 3-32, Nakafurano\nHokkaido 071-0714' },
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
              <a href="tel:0167-44-2200" style={{ fontSize: 22, fontWeight: 800, color: 'white', textDecoration: 'none' }}>0167-44-2200</a>
            </div>
          </div>

          {/* Reservation Form */}
          <div style={{ background: 'white', borderRadius: 24, padding: '40px', boxShadow: '0 20px 60px rgba(28,26,24,0.1)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '48px 24px' }}>
                <div style={{ fontSize: 72, marginBottom: 20 }}>🎉</div>
                <h3 style={{ fontSize: 24, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 12 }}>Reservation Received!</h3>
                <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.7, marginBottom: 24 }}>
                  Thank you, <strong>{form.name}</strong>! We'll confirm your reservation for <strong>{form.guests} guests</strong> on <strong>{form.date} at {form.time}</strong> within a few hours.
                </p>
                <p style={{ fontSize: 14, color: '#6B5E4E' }}>We'll contact you at <strong>{form.phone}</strong></p>
                <div style={{ marginTop: 32, display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => setSubmitted(false)} style={{ padding: '12px 24px', borderRadius: 24, border: '2px solid #D4821A', background: 'transparent', color: '#D4821A', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>Make Another Reservation</button>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ padding: '12px 24px', borderRadius: 24, background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600 }}>Get Directions</a>
                </div>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 28 }}>Book Your Table</h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.name} *</label>
                      <input type="text" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.phone} *</label>
                      <input type="tel" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.email}</label>
                      <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.date} *</label>
                      <input type="date" required value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.time} *</label>
                      <select value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, background: 'white' }}>
                        {times.map(ti => <option key={ti}>{ti}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.guests} *</label>
                      <select value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, background: 'white' }}>
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n}>{n}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>Occasion</label>
                      <select value={form.occasion} onChange={e => setForm(p => ({ ...p, occasion: e.target.value }))}
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, background: 'white' }}>
                        {occasions.map(o => <option key={o} value={o}>{o || 'Select occasion...'}</option>)}
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.notes}</label>
                      <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3}
                        placeholder="Dietary requirements, high chair, seating preference..."
                        style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, resize: 'vertical', fontFamily: 'inherit' }} />
                    </div>
                  </div>
                  <button type="submit" style={{ width: '100%', padding: '16px', borderRadius: 14, background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white', border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer', marginTop: 20, boxShadow: '0 8px 24px rgba(212,130,26,0.35)' }}>
                    🍽 {t.reservation.submit}
                  </button>
                  <p style={{ fontSize: 12, color: '#C4B5A0', textAlign: 'center', marginTop: 12 }}>We'll confirm within 24 hours. No credit card required.</p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
