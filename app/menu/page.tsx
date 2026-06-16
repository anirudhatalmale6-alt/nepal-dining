'use client';
import { useState } from 'react';
import { useLang } from '../lib/LanguageContext';

const menuData = {
  en: {
    categories: ['All', 'Curry', 'Soup Curry', 'Naan & Rice', 'Tandoori', 'Sides'],
    items: [
      // Curry (18 items)
      { cat: 'Curry', name: 'Butter Chicken Curry', price: '¥1,380', desc: 'Tender chicken in velvety tomato-cream sauce.', tag: 'Popular', img: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Chicken Tikka Masala Curry', price: '¥1,380', desc: 'Tikka pieces in rich masala sauce.', tag: 'Best Seller', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg', spice: 2 },
      { cat: 'Curry', name: 'Chicken Rara Curry', price: '¥1,380', desc: 'Minced and tender chicken in spiced gravy.', tag: 'Nepalese', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Mix Seafood Curry', price: '¥1,480', desc: 'Assorted seafood in aromatic curry.', tag: 'Premium', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-seafood-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Prawn Curry', price: '¥1,480', desc: 'Juicy prawns in rich curry sauce.', tag: 'Premium', img: 'https://nepaldining.online/wp-content/uploads/2026/06/prawn-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Dal Mutton Curry', price: '¥1,480', desc: 'Lentils slow-cooked with tender mutton.', tag: 'Hearty', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Chicken Curry', price: '¥1,180', desc: 'Classic chicken curry with aromatic spices.', tag: 'Classic', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Mutton Curry', price: '¥1,280', desc: 'Slow-cooked mutton in aromatic spices.', tag: 'House Special', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Mutton Sag Curry', price: '¥1,280', desc: 'Mutton with fresh spinach gravy.', tag: 'Signature', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-sag-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Chicken Sag Curry', price: '¥1,280', desc: 'Chicken with fresh spinach gravy.', tag: 'Healthy', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-sag-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Keema Egg Curry', price: '¥1,280', desc: 'Minced meat with boiled eggs in spiced sauce.', tag: 'Unique', img: 'https://nepaldining.online/wp-content/uploads/2026/06/keema-egg-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Sag Keema Curry', price: '¥1,280', desc: 'Spinach with spiced minced meat.', tag: 'Healthy', img: 'https://nepaldining.online/wp-content/uploads/2026/06/sag-keema-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Dal Chicken Curry', price: '¥1,280', desc: 'Lentils with tender chicken pieces.', tag: 'Hearty', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Mutton Vegetable Curry', price: '¥1,280', desc: 'Mutton with seasonal vegetables.', tag: 'Seasonal', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Chicken Cheese Curry', price: '¥1,280', desc: 'Creamy cheese and chicken curry.', tag: 'Creamy', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Eggplant Chicken Curry', price: '¥1,280', desc: 'Eggplant with tender chicken.', tag: 'Classic', img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Eggplant Keema Curry', price: '¥1,280', desc: 'Eggplant with spiced minced meat.', tag: 'Unique', img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', spice: 2 },
      { cat: 'Curry', name: 'Mix Vegetable Curry', price: '¥1,280', desc: 'Assorted vegetables in curry sauce.', tag: 'Vegetarian', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg', spice: 1 },
      { cat: 'Curry', name: 'Chicken & Vegetable Curry', price: '¥1,280', desc: 'Chicken with seasonal vegetables.', tag: 'Seasonal', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-curry.jpg', spice: 1 },

      // Soup Curry (3 items)
      { cat: 'Soup Curry', name: 'Momo & Vegetable Soup Curry', price: '¥1,380', desc: 'Hokkaido style with momo and vegetables.', tag: 'Hokkaido Special', img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg', spice: 1 },
      { cat: 'Soup Curry', name: 'Mix Vegetable Soup Curry', price: '¥1,380', desc: 'Hokkaido style with assorted vegetables.', tag: 'Hokkaido Special', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-soup-curry.jpg', spice: 1 },
      { cat: 'Soup Curry', name: 'Chicken & Vegetable Soup Curry', price: '¥1,380', desc: 'Hokkaido style with chicken and vegetables.', tag: 'Hokkaido Special', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg', spice: 1 },

      // Naan & Rice (4 items)
      { cat: 'Naan & Rice', name: 'Rice', price: '¥250', desc: 'Steamed basmati rice.', tag: 'Essential', img: 'https://nepaldining.online/wp-content/uploads/2026/06/rice.jpg', spice: 0 },
      { cat: 'Naan & Rice', name: 'Plain Naan', price: '¥350', desc: 'Classic leavened bread from tandoor.', tag: 'Classic', img: 'https://nepaldining.online/wp-content/uploads/2026/06/plain-naan.jpg', spice: 0 },
      { cat: 'Naan & Rice', name: 'Garlic Naan', price: '¥450', desc: 'Fresh baked with garlic butter.', tag: 'Popular', img: 'https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg', spice: 0 },
      { cat: 'Naan & Rice', name: 'Cheese Naan', price: '¥500', desc: 'Stuffed with creamy cheese, baked golden.', tag: 'Fan Favorite', img: 'https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg', spice: 0 },

      // Tandoori (2 items)
      { cat: 'Tandoori', name: 'Chicken Tikka (6pc)', price: '¥880', desc: 'Marinated chicken, char-grilled in tandoor.', tag: 'Tandoor Fresh', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg', spice: 2 },
      { cat: 'Tandoori', name: 'Tandoori Chicken', price: '¥980', desc: 'Half chicken marinated in yogurt and spices.', tag: 'Signature', img: 'https://nepaldining.online/wp-content/uploads/2026/06/tandoori-chicken.jpg', spice: 2 },

      // Sides (1 item)
      { cat: 'Sides', name: 'Momo (6pc)', price: '¥780', desc: 'Traditional Nepalese dumplings with spiced filling.', tag: 'Nepalese', img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg', spice: 1 },
    ],
    tagColors: { 'Popular': '#769a00', 'Best Seller': '#D4821A', 'Nepalese': '#8B7BA8', 'Premium': '#C0392B', 'Hearty': '#E67E22', 'Classic': '#6B5E4E', 'House Special': '#C0392B', 'Signature': '#769a00', 'Healthy': '#27AE60', 'Unique': '#8B7BA8', 'Seasonal': '#4A90E2', 'Creamy': '#D4821A', 'Vegetarian': '#27AE60', 'Hokkaido Special': '#4A90E2', 'Essential': '#6B5E4E', 'Fan Favorite': '#D4821A', 'Tandoor Fresh': '#E67E22' },
  },
};

export default function MenuPage() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const data = menuData.en;

  const filtered = activeCategory === 'All' ? data.items : data.items.filter(i => i.cat === activeCategory);

  const spiceIcons = (level: number) => '🌶'.repeat(level) || '—';

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Header */}
      <section style={{ padding: '60px 24px 40px', background: 'linear-gradient(135deg, #1C1A18, #2D2820)', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#D4821A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{t.menu.eyebrow}</div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 16 }}>{t.menu.headline}</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.7)', maxWidth: 500, margin: '0 auto' }}>{t.menu.subheadline}</p>
      </section>

      {/* Category Filter */}
      <div style={{ position: 'sticky', top: 64, zIndex: 10, background: 'rgba(255,253,248,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(212,130,26,0.1)', padding: '16px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
          {data.categories.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '8px 20px', borderRadius: 24, border: '2px solid',
              borderColor: activeCategory === cat ? '#D4821A' : 'rgba(212,130,26,0.2)',
              background: activeCategory === cat ? '#D4821A' : 'transparent',
              color: activeCategory === cat ? 'white' : '#6B5E4E',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>{cat}</button>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28 }}>
          {filtered.map((item, i) => (
            <div key={i} className="card-hover" style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(28,26,24,0.08)', border: '1px solid rgba(212,130,26,0.06)' }}>
              <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                <img src={item.img} alt={item.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 12, left: 12, background: (data.tagColors as Record<string, string>)[item.tag] || '#D4821A', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 12 }}>{item.tag}</div>
                {item.spice > 0 && (
                  <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(28,26,24,0.7)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: 8, fontSize: 12 }}>{spiceIcons(item.spice)}</div>
                )}
              </div>
              <div style={{ padding: '20px 22px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif' }}>{item.name}</h3>
                  <span style={{ fontSize: 17, fontWeight: 800, color: '#D4821A' }}>{item.price}</span>
                </div>
                <span style={{ fontSize: 11, fontWeight: 600, color: '#769a00', background: 'rgba(118,154,0,0.08)', padding: '2px 8px', borderRadius: 8, display: 'inline-block', marginBottom: 8 }}>{item.cat}</span>
                <p style={{ fontSize: 14, color: '#6B5E4E', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
