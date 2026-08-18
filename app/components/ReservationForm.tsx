'use client';
import { useState, useEffect, useMemo } from 'react';
import emailjs from '@emailjs/browser';
import { useLang } from '../lib/LanguageContext';
import { RESERVATION } from '../lib/emailjs';

const EMAILJS_PUBLIC_KEY = RESERVATION.publicKey;
const EMAILJS_SERVICE = RESERVATION.service;
const EMAILJS_TPL_ADMIN = RESERVATION.tplAdmin;
const EMAILJS_TPL_CUSTOMER = RESERVATION.tplGuest;
const WHATSAPP_NUMBER = '819085931555';
const PHONE = '0167-44-2444';

const LUNCH = ['11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'];
const DINNER = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'];
const TIMES = [...LUNCH, ...DINNER];
const MAX_PARTY = 50;

const DIETARY = ['None', 'Vegetarian', 'Vegan', 'Jain', 'Halal'];
const ALLERGIES = ['None', 'Gluten Free', 'Nuts Free'];

const inputStyle: React.CSSProperties = {
  width: '100%', boxSizing: 'border-box', padding: '12px 16px', borderRadius: 10,
  border: '1.5px solid #E8E0D8', fontSize: 15,
};
const selectStyle: React.CSSProperties = { ...inputStyle, background: 'white' };
const labelStyle: React.CSSProperties = {
  fontSize: 13, fontWeight: 600, color: '#1C1A18', display: 'block', marginBottom: 6,
};

const empty = {
  name: '', phone: '', email: '', date: '', time: '',
  guest: '', adult: '', child: '0', dietary: 'None', allergies: 'None', note: '',
};

export default function ReservationForm() {
  const { t } = useLang();
  const [form, setForm] = useState(empty);
  const [sending, setSending] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // The key is passed per-send instead of via emailjs.init(). Reservation and
  // contact are on different EmailJS accounts, and init() sets one global key —
  // under client-side navigation whichever page mounted last would win.
  const EMAILJS_OPTS = { publicKey: EMAILJS_PUBLIC_KEY };

  // Block past dates — computed on the client so the static HTML stays stable.
  const [minDate, setMinDate] = useState('');
  useEffect(() => {
    const d = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    setMinDate(`${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`);
  }, []);

  const guestNum = Number(form.guest || 0);

  // Adults and children are two views of the same party, so each dropdown
  // offers its full range and picking one re-derives the other. Capping
  // children at "party minus adults" instead would leave it stuck on 0,
  // because adults defaults to the whole party.
  const adultOptions = useMemo(
    () => Array.from({ length: guestNum || MAX_PARTY }, (_, i) => i + 1),
    [guestNum]
  );
  // One adult always stays on the booking, so children stop one short.
  const childOptions = useMemo(
    () => Array.from({ length: guestNum || MAX_PARTY }, (_, i) => i),
    [guestNum]
  );

  const set = (k: keyof typeof empty, v: string) => setForm(p => ({ ...p, [k]: v }));

  const onGuestChange = (v: string) => {
    // Keep any children already chosen instead of resetting them to none, so
    // the three dropdowns can be filled in any order. Adults takes the
    // remainder. The old site cleared children here, which is what made them
    // look unselectable.
    const g = Number(v || 0);
    setForm(p => {
      const child = Math.min(Number(p.child || 0), Math.max(g - 1, 0));
      return { ...p, guest: v, child: String(child), adult: String(Math.max(g - child, 0)) };
    });
  };

  const onAdultChange = (v: string) => {
    const rest = Math.max(guestNum - Number(v || 0), 0);
    setForm(p => ({ ...p, adult: v, child: guestNum ? String(rest) : p.child }));
  };

  const onChildChange = (v: string) => {
    const rest = Math.max(guestNum - Number(v || 0), 0);
    setForm(p => ({ ...p, child: v, adult: guestNum ? String(rest) : p.adult }));
  };

  const validate = () => {
    const g = Number(form.guest || 0), a = Number(form.adult || 0), c = Number(form.child || 0);
    if (!g || !a) { alert(t.reservation.errGuests); return false; }
    if (a + c !== g) { alert(t.reservation.errSum); return false; }
    if (!TIMES.includes(form.time)) { alert(t.reservation.errTime); return false; }
    if (form.date && form.time && new Date(`${form.date}T${form.time}:00`) < new Date()) {
      alert(t.reservation.errPast); return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSending(true);

    const params = {
      name: form.name, email: form.email || 'Not provided', phone: form.phone,
      date: form.date, time: form.time,
      guest: form.guest, guests: form.guest,
      adult: form.adult, child: form.child,
      dietary: form.dietary, allergies: form.allergies,
      note: form.note || 'None', notes: form.note || 'None',
    };

    emailjs.send(EMAILJS_SERVICE, EMAILJS_TPL_ADMIN, params, EMAILJS_OPTS)
      .then(() => (form.email && EMAILJS_TPL_CUSTOMER
        ? emailjs.send(EMAILJS_SERVICE, EMAILJS_TPL_CUSTOMER, params, EMAILJS_OPTS)
        : undefined))
      .then(() => {
        setSubmitted(true);
        setForm(empty);
      })
      .catch(() => alert(t.reservation.errSend))
      .finally(() => setSending(false));
  };

  const openWhatsApp = () => {
    if (!form.name || !form.date || !form.time || !form.guest) {
      alert(t.reservation.errWhatsApp); return;
    }
    const msg = [
      'Hello, I would like to make a reservation.', '',
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Date: ${form.date}`,
      `Time: ${form.time}`,
      `Guests: ${form.guest}`,
      `Adults: ${form.adult}`,
      `Children: ${form.child}`,
      `Dietary: ${form.dietary}`,
      `Allergies: ${form.allergies}`,
      `Special Request: ${form.note || 'None'}`,
    ].join('\n');
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  if (submitted) {
    return (
      <div style={{ textAlign: 'center', padding: '48px 24px' }}>
        <div style={{ fontSize: 64, marginBottom: 20 }}>🎉</div>
        <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 12 }}>
          {t.reservation.success}
        </h3>
        <button onClick={() => setSubmitted(false)}
          style={{ marginTop: 20, padding: '12px 24px', borderRadius: 24, border: '2px solid #D4821A', background: 'transparent', color: '#D4821A', fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
          {t.reservation.headline}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 16 }}>
        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>{t.reservation.name} *</label>
          <input type="text" required value={form.name} onChange={e => set('name', e.target.value)}
            placeholder="e.g. John Doe / 山田 太郎" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.phone} *</label>
          <input type="tel" required value={form.phone} onChange={e => set('phone', e.target.value)}
            placeholder="090-1234-5678" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.email}</label>
          <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
            placeholder="example@email.com" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.date} *</label>
          <input type="date" required min={minDate} value={form.date}
            onChange={e => set('date', e.target.value)} style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.time} *</label>
          <select required value={form.time} onChange={e => set('time', e.target.value)} style={selectStyle}>
            <option value="">{t.reservation.selectTime}</option>
            {TIMES.map(ti => <option key={ti} value={ti}>{ti}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.guests} *</label>
          <select required value={form.guest} onChange={e => onGuestChange(e.target.value)} style={selectStyle}>
            <option value="">{t.reservation.selectGuests}</option>
            {Array.from({ length: MAX_PARTY }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.adults} *</label>
          <select required value={form.adult} onChange={e => onAdultChange(e.target.value)} style={selectStyle}>
            <option value="">{t.reservation.selectAdults}</option>
            {adultOptions.map(n => <option key={n} value={n}>{n}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.children}</label>
          <select value={form.child} onChange={e => onChildChange(e.target.value)} style={selectStyle}>
            {childOptions.map(n => <option key={n} value={n}>{n === 0 ? t.reservation.none : n}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.dietary}</label>
          <select value={form.dietary} onChange={e => set('dietary', e.target.value)} style={selectStyle}>
            {DIETARY.map(d => <option key={d} value={d}>{d === 'None' ? t.reservation.none : d}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>{t.reservation.allergies}</label>
          <select value={form.allergies} onChange={e => set('allergies', e.target.value)} style={selectStyle}>
            {ALLERGIES.map(a => <option key={a} value={a}>{a === 'None' ? t.reservation.none : a}</option>)}
          </select>
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <label style={labelStyle}>{t.reservation.notes}</label>
          <textarea rows={4} value={form.note} onChange={e => set('note', e.target.value)}
            placeholder={t.reservation.notesPlaceholder}
            style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }} />
        </div>
      </div>

      <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
        <button type="button" onClick={openWhatsApp}
          style={{ flex: 1, minWidth: 150, padding: 15, borderRadius: 12, background: '#25D366', color: 'white', border: 'none', fontSize: 15, fontWeight: 700, cursor: 'pointer' }}>
          {t.reservation.whatsapp}
        </button>
        <button type="submit" disabled={sending}
          style={{ flex: 1, minWidth: 180, padding: 15, borderRadius: 12, background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white', border: 'none', fontSize: 16, fontWeight: 700, cursor: sending ? 'wait' : 'pointer', opacity: sending ? 0.7 : 1, boxShadow: '0 8px 24px rgba(212,130,26,0.35)' }}>
          {sending ? t.reservation.sending : `🍽 ${t.reservation.submit}`}
        </button>
      </div>

      <p style={{ margin: '14px 0 0', textAlign: 'center', fontSize: 12, color: '#8B7A68' }}>
        {t.reservation.groupNote}
      </p>
    </form>
  );
}
