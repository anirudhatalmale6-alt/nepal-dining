"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useLang } from "./lib/LanguageContext";
import emailjs from '@emailjs/browser';

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
      <div className="spice-divider" />
      <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4821A" }}>
        {children}
      </span>
    </div>
  );
}

export default function HomePage() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", phone: "", email: "", date: "", time: "12:00", guests: "2", notes: "" });
  const [submitted, setSubmitted] = useState(false);

  const menuImages = [
    "https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg",
  ];
  const tagColors = ["#D4821A", "#769a00", "#4A90E2", "#E67E22", "#8B7BA8", "#C0392B"];
  const times = ["11:30","12:00","12:30","13:00","13:30","17:00","17:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"];
  const icons = ["🕌", "🌏", "💬", "🫓", "🍛", "👨‍👩‍👧", "🥜", "📶"];
  const flags: Record<string, string> = { "UK": "🇬🇧", "Japan": "🇯🇵", "Malaysia": "🇲🇾", "USA": "🇺🇸", "イギリス": "🇬🇧", "日本": "🇯🇵", "マレーシア": "🇲🇾", "アメリカ": "🇺🇸" };
  const blogImages = [
    "https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/prawn-curry.jpg",
    "https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-soup-curry.jpg",
  ];
  const infoItems = [
    { icon: "📍", label: t.access.addressLabel, value: t.access.address },
    { icon: "📞", label: t.access.phoneLabel, value: t.access.phone, link: "tel:0167442444" },
    { icon: "🕐", label: t.access.hours, value: t.access.hoursDetail },
    { icon: "🚗", label: t.access.parking, value: t.access.parkingDetail },
    { icon: "🚃", label: t.access.transport, value: t.access.transportDetail },
  ];

  const [sending, setSending] = useState(false);

  useEffect(() => {
    emailjs.init('aC1Maewluzfg6lM3L');
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    emailjs.send('service_nepaldining', 'template_reservation', {
      name: form.name,
      phone: form.phone,
      email: form.email || 'Not provided',
      date: form.date,
      time: form.time,
      guests: form.guests,
      notes: form.notes || 'None',
    }).then(() => {
      setSubmitted(true);
      setSending(false);
      setForm({ name: "", phone: "", email: "", date: "", time: "12:00", guests: "2", notes: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }).catch(() => {
      setSending(false);
      alert('Reservation request failed. Please call 0167-44-2444 directly.');
    });
  };

  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", minHeight: 600, overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg)", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(28,26,24,0.75) 0%, rgba(212,130,26,0.2) 50%, rgba(28,26,24,0.65) 100%)" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(90deg, #D4821A, #F0A830, #769a00)" }} />
        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,130,26,0.15)", backdropFilter: "blur(8px)", border: "1px solid rgba(212,130,26,0.4)", borderRadius: 24, padding: "6px 18px", marginBottom: 28, marginTop: 40 }}>
            <span style={{ fontSize: 14, color: "#F0A830" }}>★</span>
            <span style={{ fontSize: 13, color: "rgba(255,255,255,0.9)", letterSpacing: "0.04em" }}>{t.hero.badge}</span>
          </div>
          <h1 style={{ fontSize: "clamp(28px, 5vw, 64px)", fontWeight: 800, color: "white", lineHeight: 1.15, fontFamily: "Georgia, serif", textShadow: "0 2px 20px rgba(0,0,0,0.4)", maxWidth: 800, marginBottom: 20 }}>{t.hero.headline}</h1>
          <p style={{ fontSize: "clamp(16px, 2.5vw, 22px)", color: "rgba(255,255,255,0.88)", maxWidth: 500, marginBottom: 40, lineHeight: 1.6 }}>{t.hero.subheadline}</p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/reservation" style={{ padding: "16px 36px", borderRadius: 32, background: "linear-gradient(135deg, #D4821A, #F0A830)", color: "white", textDecoration: "none", fontSize: 16, fontWeight: 700, boxShadow: "0 8px 24px rgba(212,130,26,0.5)" }}>🍽 {t.hero.reserve}</Link>
            <Link href="/order" style={{ padding: "16px 36px", borderRadius: 32, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", border: "2px solid rgba(255,255,255,0.5)", color: "white", textDecoration: "none", fontSize: 16, fontWeight: 700 }}>📦 {t.hero.order}</Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: "100px 24px", background: "#FFFDF8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
            <div style={{ position: "relative" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, borderRadius: 20, overflow: "hidden" }}>
                {["https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg","https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg","https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg","https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg"].map((src, i) => (
                  <div key={i} style={{ aspectRatio: "1", overflow: "hidden", borderRadius: 12, boxShadow: "0 8px 24px rgba(28,26,24,0.12)" }}>
                    <img src={src} alt="Nepal Dining" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                ))}
              </div>
              <div style={{ position: "absolute", bottom: -20, right: -20, background: "linear-gradient(135deg, #D4821A, #F0A830)", borderRadius: 16, padding: "16px 20px", textAlign: "center", boxShadow: "0 12px 32px rgba(212,130,26,0.4)", color: "white" }}>
                <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1, fontFamily: "Georgia, serif" }}>4.9</div>
                <div style={{ fontSize: 14 }}>★★★★★</div>
                <div style={{ fontSize: 10, opacity: 0.85 }}>Google Reviews</div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <div className="spice-divider" />
                <span style={{ fontSize: 16, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#D4821A" }}>{t.about.eyebrow}</span>
              </div>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#1C1A18", fontFamily: "Georgia, serif", lineHeight: 1.2, marginBottom: 20 }}>{t.about.headline}</h2>
              <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p1}</p>
              <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p2}</p>
              <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p3}</p>
              {t.about.p4 && <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p4}</p>}
              {t.about.p5 && <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.8, marginBottom: 16 }}>{t.about.p5}</p>}
              {t.about.p6 && <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.8, marginBottom: 40 }}>{t.about.p6}</p>}
              <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                {[{ val: t.about.stat1, label: t.about.stat1label }, { val: t.about.stat2, label: t.about.stat2label }, { val: t.about.stat3, label: t.about.stat3label }].map((s, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 32, fontWeight: 800, fontFamily: "Georgia, serif", background: "linear-gradient(135deg, #D4821A, #769a00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{s.val}</div>
                    <div style={{ fontSize: 13, color: "#6B5E4E", fontWeight: 500 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(135deg, #FDF8F0 0%, #F9F3E8 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <SectionEyebrow>{t.features.eyebrow}</SectionEyebrow>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#1C1A18", fontFamily: "Georgia, serif" }}>{t.features.headline}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {t.features.items.map((item, i) => (
              <div key={i} className="card-hover" style={{ background: "white", borderRadius: 20, padding: "32px 28px", border: "1px solid rgba(212,130,26,0.08)", boxShadow: "0 4px 20px rgba(28,26,24,0.06)" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "linear-gradient(135deg, rgba(212,130,26,0.1), rgba(118,154,0,0.1))", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, marginBottom: 16 }}>{icons[i]}</div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1C1A18", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "#6B5E4E", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section style={{ padding: "100px 24px", background: "#FFFDF8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <SectionEyebrow>{t.menu.eyebrow}</SectionEyebrow>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#1C1A18", fontFamily: "Georgia, serif", marginBottom: 8 }}>{t.menu.headline}</h2>
              <p style={{ fontSize: 16, color: "#6B5E4E" }}>{t.menu.subheadline}</p>
            </div>
            <Link href="/menu" style={{ padding: "12px 28px", borderRadius: 24, border: "2px solid #D4821A", color: "#D4821A", textDecoration: "none", fontSize: 15, fontWeight: 600 }}>{t.menu.viewAll} →</Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
            {t.menu.items.map((item, i) => (
              <Link key={i} href="/order" className="card-hover" style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(28,26,24,0.08)", textDecoration: "none", display: "block", cursor: "pointer" }}>
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img src={menuImages[i]} alt={item.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", top: 12, left: 12, background: tagColors[i], color: "white", fontSize: 11, fontWeight: 700, padding: "4px 10px", borderRadius: 12 }}>{item.tag}</div>
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#1C1A18", fontFamily: "Georgia, serif" }}>{item.name}</h3>
                    <span style={{ fontSize: 17, fontWeight: 800, color: "#D4821A", flexShrink: 0, marginLeft: 8 }}>{item.price}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#6B5E4E", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section style={{ padding: "100px 24px", background: "linear-gradient(135deg, #1C1A18 0%, #2D2820 100%)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #D4821A)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4821A" }}>{t.reviews.eyebrow}</span>
              <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #D4821A, transparent)" }} />
            </div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "white", fontFamily: "Georgia, serif", marginBottom: 20 }}>{t.reviews.headline}</h2>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 16, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 20, padding: "12px 28px" }}>
              <div style={{ fontSize: 36, fontWeight: 800, color: "#F0A830", fontFamily: "Georgia, serif" }}>4.9</div>
              <div>
                <div style={{ color: "#F0A830", fontSize: 18 }}>★★★★★</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)" }}>{t.reviews.ratingCount}</div>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
            {t.reviews.items.map((rev, i) => (
              <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 20, padding: "28px" }}>
                <div style={{ color: "#F0A830", fontSize: 16, marginBottom: 16 }}>★★★★★</div>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.8)", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>&ldquo;{rev.text}&rdquo;</p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg, #D4821A, #769a00)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 700, color: "white" }}>{rev.name.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: "white" }}>{rev.name}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>{flags[rev.country] || ""} {rev.country}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORDER */}
      <section style={{ padding: "80px 24px", background: "linear-gradient(135deg, #D4821A 0%, #F0A830 50%, #D4821A 100%)" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: 12 }}>{t.order.eyebrow}</div>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 48px)", fontWeight: 800, color: "white", fontFamily: "Georgia, serif", marginBottom: 16 }}>{t.order.headline}</h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 8 }}>{t.order.subheadline}</p>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.65)", marginBottom: 40 }}>⏱ {t.order.note}</p>
          <Link href="/order" style={{ display: "inline-block", padding: "18px 44px", borderRadius: 32, background: "white", color: "#D4821A", textDecoration: "none", fontSize: 17, fontWeight: 800, boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>📦 {t.order.cta}</Link>
        </div>
      </section>

      {/* RESERVATION */}
      <section id="reservation" style={{ padding: "100px 24px", background: "#FDF8F0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <SectionEyebrow>{t.reservation.eyebrow}</SectionEyebrow>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#1C1A18", fontFamily: "Georgia, serif", marginBottom: 20 }}>{t.reservation.headline}</h2>
              <p style={{ fontSize: 16, color: "#6B5E4E", lineHeight: 1.7, marginBottom: 32 }}>{t.reservation.subheadline}</p>
              <div style={{ padding: "24px", background: "white", borderRadius: 16, border: "1px solid rgba(212,130,26,0.1)", marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: "#D4821A", letterSpacing: "0.05em", marginBottom: 12, textTransform: "uppercase" }}>{t.access.hours}</div>
                <div style={{ fontSize: 15, color: "#1C1A18", lineHeight: 2, whiteSpace: "pre-line" }}>{t.access.hoursDetail}</div>
              </div>
              <p style={{ fontSize: 14, color: "#6B5E4E" }}>{t.reservation.alt} <a href="tel:0167-44-2444" style={{ color: "#D4821A", fontWeight: 700, textDecoration: "none" }}>0167-44-2444</a></p>
            </div>
            <div style={{ background: "white", borderRadius: 24, padding: "40px", boxShadow: "0 20px 60px rgba(28,26,24,0.1)", border: "1px solid rgba(212,130,26,0.08)" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, color: "#1C1A18" }}>{t.reservation.success}</h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.name} *</label>
                      <input type="text" required value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.phone} *</label>
                      <input type="tel" required value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.email}</label>
                      <input type="email" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.date} *</label>
                      <input type="date" required value={form.date} onChange={e => setForm(p => ({ ...p, date: e.target.value }))} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15 }} />
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.time} *</label>
                      <select value={form.time} onChange={e => setForm(p => ({ ...p, time: e.target.value }))} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15, background: "white" }}>
                        {times.map(ti => <option key={ti} value={ti}>{ti}</option>)}
                      </select>
                    </div>
                    <div>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.guests} *</label>
                      <select value={form.guests} onChange={e => setForm(p => ({ ...p, guests: e.target.value }))} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15, background: "white" }}>
                        {[1,2,3,4,5,6,7,8].map(n => <option key={n} value={n}>{n}</option>)}
                      </select>
                    </div>
                    <div style={{ gridColumn: "1 / -1" }}>
                      <label style={{ fontSize: 13, fontWeight: 600, color: "#1C1A18", display: "block", marginBottom: 6 }}>{t.reservation.notes}</label>
                      <textarea value={form.notes} onChange={e => setForm(p => ({ ...p, notes: e.target.value }))} rows={3} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #E8E0D8", fontSize: 15, resize: "vertical", fontFamily: "inherit" }} />
                    </div>
                  </div>
                  <button type="submit" style={{ width: "100%", padding: "16px", borderRadius: 14, background: "linear-gradient(135deg, #D4821A, #F0A830)", color: "white", border: "none", fontSize: 16, fontWeight: 700, cursor: "pointer", boxShadow: "0 8px 24px rgba(212,130,26,0.35)" }}>🍽 {t.reservation.submit}</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ACCESS */}
      <section style={{ padding: "100px 24px", background: "#1C1A18" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 12 }}>
              <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, transparent, #D4821A)" }} />
              <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#D4821A" }}>{t.access.eyebrow}</span>
              <div style={{ width: 40, height: 2, background: "linear-gradient(90deg, #D4821A, transparent)" }} />
            </div>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "white", fontFamily: "Georgia, serif" }}>{t.access.headline}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 40 }}>
            <div style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.3)", minHeight: 300 }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11641.947!2d142.3916!3d43.5067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0b357b2d2a1d0b%3A0x4a4b2a1b2c3d4e5f!2sNakafurano%2C+Hokkaido!5e0!3m2!1sen!2sjp!4v1234567890" width="100%" height="100%" style={{ border: 0, minHeight: 300 }} allowFullScreen loading="lazy" title="Nepal Dining Location" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {infoItems.map((item, i) => (
                <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 16, padding: "20px 24px", display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: "#D4821A", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 4 }}>{item.label}</div>
                    {item.link ? (
                      <a href={item.link} style={{ fontSize: 15, color: "white", textDecoration: "none", fontWeight: 600 }}>{item.value}</a>
                    ) : (
                      <div style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.6, whiteSpace: "pre-line" }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}
              <a href="https://maps.google.com/?q=Nakafurano+Hokkaido" target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "14px", borderRadius: 14, background: "linear-gradient(135deg, #D4821A, #F0A830)", color: "white", textDecoration: "none", fontSize: 15, fontWeight: 700 }}>📍 Open in Google Maps</a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section style={{ padding: "100px 24px", background: "#FFFDF8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <SectionEyebrow>{t.blog.eyebrow}</SectionEyebrow>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 44px)", fontWeight: 800, color: "#1C1A18", fontFamily: "Georgia, serif" }}>{t.blog.headline}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 28 }}>
            {t.blog.posts.map((post, i) => (
              <article key={i} className="card-hover" style={{ background: "white", borderRadius: 20, overflow: "hidden", boxShadow: "0 4px 20px rgba(28,26,24,0.08)" }}>
                <div style={{ height: 200, overflow: "hidden" }}>
                  <img src={blogImages[i]} alt={post.title} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div style={{ padding: "24px" }}>
                  <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
                    <span style={{ background: "rgba(118,154,0,0.1)", color: "#527000", fontSize: 11, fontWeight: 700, padding: "3px 10px", borderRadius: 12, textTransform: "uppercase" }}>{post.tag}</span>
                    <span style={{ fontSize: 12, color: "#C4B5A0" }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#1C1A18", lineHeight: 1.5, marginBottom: 16, fontFamily: "Georgia, serif" }}>{post.title}</h3>
                  <Link href="/blog" style={{ fontSize: 13, fontWeight: 600, color: "#D4821A", textDecoration: "none" }}>{t.blog.readMore} →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
