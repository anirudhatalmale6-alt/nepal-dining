'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useLang } from '../lib/LanguageContext';
import emailjs from '@emailjs/browser';

export default function AccessPage() {
  const { t, lang } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "12:00", guests: "2", notes: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init('aC1Maewluzfg6lM3L');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    const templateParams = {
      name: form.name,
      phone: form.phone,
      email: form.email || 'Not provided',
      date: form.date,
      time: form.time,
      guests: form.guests,
      notes: form.notes || 'None',
    };
    Promise.all([
      emailjs.send('service_n95apsv', 'template_recg9pp', templateParams),
      form.email ? emailjs.send('service_n95apsv', 'template_15ng35d', templateParams) : Promise.resolve(),
    ]).then(() => {
      setSubmitted(true);
      setSending(false);
      setForm({ name: "", phone: "", email: "", date: "", time: "12:00", guests: "2", notes: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }).catch(() => {
      setSending(false);
      alert('Reservation request failed. Please call 0167-44-2444 directly.');
    });
  };

  const times = ["11:00","11:30","12:00","12:30","13:00","13:30","14:00","14:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30"];

  const directions = [
    {
      icon: '🚗',
      title: lang === 'ja' ? '車でお越しの場合' : 'By Car',
      desc: lang === 'ja'
        ? '富良野市内から約7分。国道237号線または町道ベースラインで中富良野方面へ。店舗に無料駐車場あり。'
        : '7 min from Furano City. Follow Route 237 or Town Road Base Line toward Nakafurano. Free parking on-site.',
    },
    {
      icon: '🚃',
      title: lang === 'ja' ? '電車でお越しの場合' : 'By Train',
      desc: lang === 'ja'
        ? 'JR富良野線・中富良野駅から徒歩約15分。駅前からタクシーもご利用いただけます（19時まで）。'
        : '15-minute walk from Nakafurano Station on the JR Furano Line. Taxi available outside the station before 7 PM.',
    },
    {
      icon: '🚌',
      title: lang === 'ja' ? '送迎サービス' : 'Pick-up & Drop-off Available',
      desc: lang === 'ja'
        ? '状況に応じて、送迎サービスをご利用いただける場合がございます。お気軽にお問い合わせください。'
        : 'Pick-up and drop-off services may be available upon request, depending on circumstances and availability.',
    },
  ];

  return (
    <div style={{ paddingTop: 72, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 24px 60px', background: 'linear-gradient(135deg, #1C1A18 0%, #2D2820 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#D4821A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
            {lang === 'ja' ? 'アクセス方法' : 'Getting Here'}
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.15, marginBottom: 20 }}>
            {lang === 'ja' ? 'アクセス・営業時間' : 'Access & Hours'}
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 650, margin: '0 auto' }}>
            {lang === 'ja'
              ? '中富良野の中心部、北海道の美しいラベンダーの郷にあります。'
              : 'Find us in the heart of Nakafurano, surrounded by Hokkaido\'s stunning lavender countryside.'}
          </p>
        </div>
      </section>

      {/* Map + Info */}
      <section style={{ padding: '60px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 40, alignItems: 'start' }}>
          {/* Google Map */}
          <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', minHeight: 450 }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.38966754500626!2d142.41261125952713!3d43.395476788068905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0cb3a23bd01435%3A0x3c63e5656ac8a0c4!2sNepal%20Dining!5e0!3m2!1sen!2sjp!4v1781850016320!5m2!1sen!2sjp"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nepal Dining Location"
            />
          </div>

          {/* Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Address Card */}
            <div style={{ background: 'white', borderRadius: 20, padding: '28px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.1)' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(212,130,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>📍</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1C1A18', marginBottom: 8 }}>
                    {lang === 'ja' ? '住所' : 'Address'}
                  </h3>
                  <p style={{ fontSize: 14, color: '#6B5E4E', marginBottom: 2 }}>〒071-0770</p>
                  <p style={{ fontSize: 15, color: '#1C1A18', lineHeight: 1.6, fontWeight: 500 }}>
                    {lang === 'ja'
                      ? '北海道空知郡中富良野町曙町3-19'
                      : 'Hokkaido, Sorachi Gun, Nakafurano Cho, Akatsukimachi 3-19'}
                  </p>
                  <a
                    href="https://maps.google.com/?q=Nepal+Dining+Nakafurano"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 12, fontSize: 14, color: '#D4821A', fontWeight: 600, textDecoration: 'none' }}
                  >
                    {lang === 'ja' ? 'Googleマップで開く' : 'Open in Google Maps'} ↗
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div style={{ background: 'white', borderRadius: 20, padding: '28px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.1)' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(212,130,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>🕐</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1C1A18', marginBottom: 12 }}>
                    {lang === 'ja' ? '営業時間' : 'Business Hours'}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f0ebe4' }}>
                      <span style={{ fontSize: 14, color: '#6B5E4E' }}>{lang === 'ja' ? '火〜日（ランチ）' : 'Tue – Sun (Lunch)'}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18' }}>11:00 – 15:00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid #f0ebe4' }}>
                      <span style={{ fontSize: 14, color: '#6B5E4E' }}>{lang === 'ja' ? '火〜日（ディナー）' : 'Tue – Sun (Dinner)'}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18' }}>17:00 – 21:00</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0' }}>
                      <span style={{ fontSize: 14, color: '#6B5E4E' }}>{lang === 'ja' ? '第2・第4水曜日' : '2nd & 4th Wednesday'}</span>
                      <span style={{ fontSize: 14, fontWeight: 700, color: '#C0392B' }}>{lang === 'ja' ? '定休日' : 'Closed'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div style={{ background: 'white', borderRadius: 20, padding: '28px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.1)' }}>
              <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(212,130,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>📞</div>
                <div>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1C1A18', marginBottom: 8 }}>
                    {lang === 'ja' ? '電話番号' : 'Phone'}
                  </h3>
                  <a href="tel:0167442444" style={{ fontSize: 24, fontWeight: 800, color: '#D4821A', textDecoration: 'none' }}>
                    0167-44-2444
                  </a>
                  <p style={{ fontSize: 13, color: '#6B5E4E', marginTop: 6 }}>
                    {lang === 'ja' ? 'ご予約・お問い合わせ' : 'Reservations & Enquiries'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section style={{ padding: '60px 24px', background: '#FFFDF8' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 40, textAlign: 'center' }}>
            {lang === 'ja' ? 'アクセス方法' : 'Directions'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {directions.map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px 24px', borderRadius: 20, background: '#FDF8F0', border: '1px solid rgba(212,130,26,0.1)' }}>
                <div style={{ fontSize: 44, marginBottom: 16 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1A18', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6B5E4E', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Book Your Table - same form as homepage */}
      <section id="reservation" style={{ padding: '80px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #D4821A, transparent)' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4821A' }}>{t.reservation.eyebrow}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 20 }}>{t.reservation.headline}</h2>
              <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.7, marginBottom: 32 }}>{t.reservation.subheadline}</p>
              <div style={{ padding: '24px', background: 'white', borderRadius: 16, border: '1px solid rgba(212,130,26,0.1)', marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#D4821A', letterSpacing: '0.05em', marginBottom: 12, textTransform: 'uppercase' }}>{lang === 'ja' ? '営業時間' : 'Business Hours'}</div>
                <div style={{ fontSize: 15, color: '#1C1A18', lineHeight: 2, whiteSpace: 'pre-line' }}>
                  {lang === 'ja' ? '火〜日: 11:00〜15:00 / 17:00〜21:00\n定休日: 第2・第4水曜日' : 'Tue–Sun: 11:00–15:00 / 17:00–21:00\n2nd & 4th Wednesday: Closed'}
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#6B5E4E' }}>{t.reservation.alt} <a href="tel:0167-44-2444" style={{ color: '#D4821A', fontWeight: 700, textDecoration: 'none' }}>0167-44-2444</a></p>
            </div>
            <div style={{ background: 'white', borderRadius: 24, padding: '40px', boxShadow: '0 20px 60px rgba(28,26,24,0.1)', border: '1px solid rgba(212,130,26,0.08)' }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: '#1C1A18' }}>{t.reservation.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.name} *</label>
                      <input type="text" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.phone} *</label>
                      <input type="tel" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.email}</label>
                      <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.date} *</label>
                      <input type="date" required value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.time} *</label>
                      <select value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, background: 'white' }}>
                        {times.map(ti => <option key={ti} value={ti}>{ti}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.guests} *</label>
                      <select value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, background: 'white' }}>
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div style={{ gridColumn: '1 / -1' }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6 }}>{t.reservation.notes}</label>
                      <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3} style={{ width: '100%', padding: '12px 16px', borderRadius: 10, border: '1.5px solid #E8E0D8', fontSize: 15, resize: 'vertical', fontFamily: 'inherit' }} />
                    </div>
                  </div>
                  <button type="submit" disabled={sending} style={{ width: '100%', padding: '16px', borderRadius: 14, background: sending ? '#ccc' : 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white', border: 'none', fontSize: 16, fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', boxShadow: '0 8px 24px rgba(212,130,26,0.35)' }}>
                    {sending ? (lang === 'ja' ? '送信中...' : 'Sending...') : `🍽 ${t.reservation.submit}`}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
