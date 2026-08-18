'use client';
import { useState } from 'react';
import { useLang } from '../lib/LanguageContext';

interface MenuItem {
  cat: string;
  name: string;
  nameJa: string;
  price: number;
  desc: string;
  descJa: string;
  tag: string;
  tagJa: string;
  img: string;
  spice: number;
  hasNaanRice?: boolean;
  hasLargePortion?: boolean;
}

const menuItems: MenuItem[] = [
  // Curry
  { cat: 'Curry', name: 'Butter Chicken Curry', nameJa: 'バターチキンカレー', price: 1380, desc: 'Tender chicken in velvety tomato-cream sauce.', descJa: '柔らかチキンをクリーミーなトマトソースで煮込んだ当店の一番人気。', tag: 'Popular', tagJa: '人気', img: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Tikka Masala Curry', nameJa: 'チキンティッカマサラカレー', price: 1380, desc: 'Tikka pieces in rich masala sauce.', descJa: 'ティッカをリッチなマサラソースで。', tag: 'Best Seller', tagJa: 'ベストセラー', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Rara Curry', nameJa: 'チキンララカレー', price: 1380, desc: 'Minced and tender chicken in spiced gravy.', descJa: 'ミンチと柔らかチキンのスパイシーグレービー。', tag: 'Nepalese', tagJa: 'ネパール料理', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mix Seafood Curry', nameJa: 'ミックスシーフードカレー', price: 1480, desc: 'Assorted seafood in aromatic curry.', descJa: 'シーフードの香り豊かなカレー。', tag: 'Premium', tagJa: 'プレミアム', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-seafood-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Prawn Curry', nameJa: 'エビカレー', price: 1480, desc: 'Juicy prawns in rich curry sauce.', descJa: 'プリプリエビのリッチカレー。', tag: 'Premium', tagJa: 'プレミアム', img: 'https://nepaldining.online/wp-content/uploads/2026/06/prawn-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Dal Mutton Curry', nameJa: 'ダルマトンカレー', price: 1480, desc: 'Lentils slow-cooked with tender mutton.', descJa: 'レンズ豆と柔らかマトンの煮込み。', tag: 'Hearty', tagJa: 'ボリューム満点', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Curry', nameJa: 'チキンカレー', price: 1180, desc: 'Classic chicken curry with aromatic spices.', descJa: '定番のチキンカレー、香り豊かなスパイスと。', tag: 'Classic', tagJa: '定番', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mutton Curry', nameJa: 'マトンカレー', price: 1280, desc: 'Slow-cooked mutton in aromatic spices.', descJa: 'ホールスパイスで煮込んだ柔らかマトン。', tag: 'House Special', tagJa: 'ハウスペシャル', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mutton Sag Curry', nameJa: 'マトンサグカレー', price: 1280, desc: 'Mutton with fresh spinach gravy.', descJa: 'マトンとほうれん草のグレービー。', tag: 'Signature', tagJa: 'シグネチャー', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-sag-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Sag Curry', nameJa: 'チキンサグカレー', price: 1280, desc: 'Chicken with fresh spinach gravy.', descJa: 'チキンとほうれん草のグレービー。', tag: 'Healthy', tagJa: 'ヘルシー', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-sag-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Keema Egg Curry', nameJa: 'キーマエッグカレー', price: 1280, desc: 'Minced meat with boiled eggs in spiced sauce.', descJa: 'キーマとゆで卵のスパイシーソース。', tag: 'Unique', tagJa: 'ユニーク', img: 'https://nepaldining.online/wp-content/uploads/2026/06/keema-egg-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Sag Keema Curry', nameJa: 'サグキーマカレー', price: 1280, desc: 'Spinach with spiced minced meat.', descJa: 'ほうれん草とスパイシーキーマ。', tag: 'Healthy', tagJa: 'ヘルシー', img: 'https://nepaldining.online/wp-content/uploads/2026/06/sag-keema-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Dal Chicken Curry', nameJa: 'ダルチキンカレー', price: 1280, desc: 'Lentils with tender chicken pieces.', descJa: 'レンズ豆と柔らかチキン。', tag: 'Hearty', tagJa: 'ボリューム満点', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mutton Vegetable Curry', nameJa: 'マトン野菜カレー', price: 1280, desc: 'Mutton with seasonal vegetables.', descJa: 'マトンと季節の野菜。', tag: 'Seasonal', tagJa: '季節限定', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Cheese Curry', nameJa: 'チキンチーズカレー', price: 1280, desc: 'Creamy cheese and chicken curry.', descJa: 'クリーミーチーズとチキンのカレー。', tag: 'Creamy', tagJa: 'クリーミー', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Eggplant Chicken Curry', nameJa: 'ナスチキンカレー', price: 1280, desc: 'Eggplant with tender chicken.', descJa: 'ナスと柔らかチキン。', tag: 'Classic', tagJa: '定番', img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Eggplant Keema Curry', nameJa: 'ナスキーマカレー', price: 1280, desc: 'Eggplant with spiced minced meat.', descJa: 'ナスとスパイシーキーマ。', tag: 'Unique', tagJa: 'ユニーク', img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mix Vegetable Curry', nameJa: 'ミックス野菜カレー', price: 1280, desc: 'Assorted vegetables in curry sauce.', descJa: 'ミックス野菜のカレー。', tag: 'Vegetarian', tagJa: 'ベジタリアン', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken & Vegetable Curry', nameJa: 'チキン野菜カレー', price: 1280, desc: 'Chicken with seasonal vegetables.', descJa: 'チキンと季節の野菜。', tag: 'Seasonal', tagJa: '季節限定', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },

  // Soup Curry
  { cat: 'Soup Curry', name: 'Momo & Vegetable Soup Curry', nameJa: 'モモ野菜スープカレー', price: 1380, desc: 'Hokkaido style with momo and vegetables.', descJa: '北海道スタイル、モモと野菜。', tag: 'Hokkaido Special', tagJa: '北海道スペシャル', img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Soup Curry', name: 'Mix Vegetable Soup Curry', nameJa: 'ミックス野菜スープカレー', price: 1380, desc: 'Hokkaido style with assorted vegetables.', descJa: '北海道スタイル、ミックス野菜。', tag: 'Hokkaido Special', tagJa: '北海道スペシャル', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-soup-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Soup Curry', name: 'Chicken & Vegetable Soup Curry', nameJa: 'チキン野菜スープカレー', price: 1380, desc: 'Hokkaido style with chicken and vegetables.', descJa: '北海道スタイル、チキンと野菜。', tag: 'Hokkaido Special', tagJa: '北海道スペシャル', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },

  // Naan & Rice
  { cat: 'Naan & Rice', name: 'Rice', nameJa: 'ライス', price: 250, desc: 'Steamed basmati rice.', descJa: 'バスマティライス。', tag: 'Essential', tagJa: '必需品', img: 'https://nepaldining.online/wp-content/uploads/2026/06/rice.jpg', spice: 0 },
  { cat: 'Naan & Rice', name: 'Plain Naan', nameJa: 'プレーンナン', price: 350, desc: 'Classic leavened bread from tandoor.', descJa: 'タンドール窯焼きの定番ナン。', tag: 'Classic', tagJa: '定番', img: 'https://nepaldining.online/wp-content/uploads/2026/06/plain-naan.jpg', spice: 0 },
  { cat: 'Naan & Rice', name: 'Garlic Naan', nameJa: 'ガーリックナン', price: 450, desc: 'Fresh baked with garlic butter.', descJa: 'ガーリックバターで焼き上げ。', tag: 'Popular', tagJa: '人気', img: 'https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg', spice: 0 },
  { cat: 'Naan & Rice', name: 'Cheese Naan', nameJa: 'チーズナン', price: 500, desc: 'Stuffed with creamy cheese, baked golden.', descJa: 'クリーミーチーズ入り、黄金色に焼き上げ。', tag: 'Fan Favorite', tagJa: '人気No.1', img: 'https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg', spice: 0 },

  // Tandoori
  { cat: 'Tandoori', name: 'Chicken Tikka (6pc)', nameJa: 'チキンティッカ（6個）', price: 880, desc: 'Marinated chicken, char-grilled in tandoor.', descJa: 'タンドール窯で焼き上げたマリネチキン。', tag: 'Tandoor Fresh', tagJa: 'タンドール焼き', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg', spice: 2, hasLargePortion: true },
  { cat: 'Tandoori', name: 'Tandoori Chicken', nameJa: 'タンドリーチキン', price: 980, desc: 'Half chicken marinated in yogurt and spices.', descJa: 'ヨーグルトとスパイスでマリネした半身チキン。', tag: 'Signature', tagJa: 'シグネチャー', img: 'https://nepaldining.online/wp-content/uploads/2026/06/tandoori-chicken.jpg', spice: 2, hasLargePortion: true },

  // Sides
  { cat: 'Sides', name: 'Momo (6pc)', nameJa: 'モモ（6個）', price: 780, desc: 'Traditional Nepalese dumplings with spiced filling.', descJa: '伝統的なネパール餃子、スパイス入り。', tag: 'Nepalese', tagJa: 'ネパール料理', img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg', spice: 1 },
];

const categories = ['All', 'Curry', 'Soup Curry', 'Naan & Rice', 'Tandoori', 'Sides'];
const categoriesJa = ['すべて', 'カレー', 'スープカレー', 'ナン＆ライス', 'タンドリー', 'サイド'];

const spiceLevels = [
  { en: 'Mild', ja: 'マイルド', color: '#27AE60' },
  { en: 'Medium', ja: '中辛', color: '#F39C12' },
  { en: 'Hot', ja: '辛口', color: '#E67E22' },
  { en: 'Very Hot', ja: '大辛', color: '#E74C3C' },
  { en: 'Extra Hot', ja: '激辛', color: '#8B0000' },
];

const naanRiceOptions = [
  { en: 'Plain Naan', ja: 'プレーンナン', extra: 0 },
  { en: 'Garlic Naan', ja: 'ガーリックナン', extra: 100 },
  { en: 'Cheese Naan', ja: 'チーズナン', extra: 150 },
  { en: 'Rice', ja: 'ライス', extra: 0 },
];

const tagColors: Record<string, string> = {
  'Popular': '#769a00', 'Best Seller': '#D4821A', 'Nepalese': '#8B7BA8', 'Premium': '#C0392B',
  'Hearty': '#E67E22', 'Classic': '#6B5E4E', 'House Special': '#C0392B', 'Signature': '#769a00',
  'Healthy': '#27AE60', 'Unique': '#8B7BA8', 'Seasonal': '#4A90E2', 'Creamy': '#D4821A',
  'Vegetarian': '#27AE60', 'Hokkaido Special': '#4A90E2', 'Essential': '#6B5E4E',
  'Fan Favorite': '#D4821A', 'Tandoor Fresh': '#E67E22',
};

export default function MenuPage() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [selectedSpice, setSelectedSpice] = useState<Record<number, number>>({});
  const [selectedLarge, setSelectedLarge] = useState<Record<number, boolean>>({});
  const [selectedNaanRice, setSelectedNaanRice] = useState<Record<number, number>>({});

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter(i => i.cat === activeCategory);

  const catIndex = categories.indexOf(activeCategory);

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
          {categories.map((cat, ci) => (
            <button key={cat} onClick={() => { setActiveCategory(cat); setExpandedItem(null); }} style={{
              padding: '8px 20px', borderRadius: 24, border: '2px solid',
              borderColor: activeCategory === cat ? '#D4821A' : 'rgba(212,130,26,0.2)',
              background: activeCategory === cat ? '#D4821A' : 'transparent',
              color: activeCategory === cat ? 'white' : '#6B5E4E',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              transition: 'all 0.2s',
            }}>{lang === 'ja' ? categoriesJa[ci] : cat}</button>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 24px 0' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'center', fontSize: 13, color: '#6B5E4E' }}>
          <span style={{ fontWeight: 600 }}>{lang === 'ja' ? '辛さレベル:' : 'Spicy Level:'}</span>
          {spiceLevels.map((s, i) => (
            <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <span style={{ color: s.color, fontSize: 14 }}>{'🌶'.repeat(i + 1)}</span>
              <span>{lang === 'ja' ? s.ja : s.en}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Menu Grid */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 24px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 24 }}>
          {filtered.map((item, i) => {
            const globalIdx = menuItems.indexOf(item);
            const isExpanded = expandedItem === globalIdx;
            const spice = selectedSpice[globalIdx] ?? item.spice;
            const isLarge = selectedLarge[globalIdx] ?? false;
            const naanRice = selectedNaanRice[globalIdx] ?? 0;
            const basePrice = item.price + (isLarge && item.hasLargePortion ? 200 : 0) + (item.hasNaanRice ? naanRiceOptions[naanRice].extra : 0);

            return (
              <div key={globalIdx} style={{
                background: 'white', borderRadius: 20, overflow: 'hidden',
                boxShadow: isExpanded ? '0 8px 40px rgba(212,130,26,0.18)' : '0 4px 20px rgba(28,26,24,0.08)',
                border: isExpanded ? '2px solid #D4821A' : '1px solid rgba(212,130,26,0.06)',
                transition: 'all 0.3s',
              }}>
                {/* Image */}
                <div style={{ position: 'relative', height: 200, overflow: 'hidden', cursor: 'pointer' }}
                  onClick={() => setExpandedItem(isExpanded ? null : globalIdx)}>
                  <img src={item.img} alt={lang === 'ja' ? item.nameJa : item.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
                  <div style={{ position: 'absolute', top: 12, left: 12, background: tagColors[item.tag] || '#D4821A', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 12 }}>
                    {lang === 'ja' ? item.tagJa : item.tag}
                  </div>
                  {item.spice > 0 && (
                    <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(28,26,24,0.75)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: 8, fontSize: 12 }}>
                      {'🌶'.repeat(item.spice)}
                    </div>
                  )}
                  {(item.hasNaanRice || item.hasLargePortion) && (
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.6))', padding: '20px 16px 10px', textAlign: 'center' }}>
                      <span style={{ color: 'white', fontSize: 12, fontWeight: 600, opacity: 0.9 }}>
                        {lang === 'ja' ? 'タップしてオプションを選択' : 'Tap to customize'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div style={{ padding: '16px 20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', flex: 1, marginRight: 8 }}>
                      {lang === 'ja' ? item.nameJa : item.name}
                    </h3>
                    <span style={{ fontSize: 17, fontWeight: 800, color: '#D4821A', whiteSpace: 'nowrap' }}>
                      ¥{basePrice.toLocaleString()}
                    </span>
                  </div>
                  <p style={{ fontSize: 13, color: '#6B5E4E', lineHeight: 1.6, marginBottom: 8 }}>
                    {lang === 'ja' ? item.descJa : item.desc}
                  </p>

                  {/* Quick option badges */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                    {item.hasNaanRice && (
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#769a00', background: 'rgba(118,154,0,0.08)', padding: '3px 8px', borderRadius: 8 }}>
                        {lang === 'ja' ? 'ナン/ライス選択' : 'Naan/Rice Choice'}
                      </span>
                    )}
                    {item.hasLargePortion && (
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#D4821A', background: 'rgba(212,130,26,0.08)', padding: '3px 8px', borderRadius: 8 }}>
                        {lang === 'ja' ? '大盛り +¥200' : 'Large Portion +¥200'}
                      </span>
                    )}
                    {item.spice > 0 && (
                      <span style={{ fontSize: 11, fontWeight: 600, color: '#E74C3C', background: 'rgba(231,76,60,0.08)', padding: '3px 8px', borderRadius: 8 }}>
                        {lang === 'ja' ? '辛さ選択可' : 'Spice Level'}
                      </span>
                    )}
                  </div>
                </div>

                {/* Expanded Options Panel */}
                {isExpanded && (item.hasNaanRice || item.hasLargePortion || item.spice > 0) && (
                  <div style={{ borderTop: '1px solid rgba(212,130,26,0.1)', padding: '16px 20px 20px', background: '#FDFAF5' }}>
                    {/* Spicy Level */}
                    {item.spice > 0 && (
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#1C1A18', marginBottom: 8 }}>
                          {lang === 'ja' ? '辛さレベルを選択' : 'Choose Spicy Level'}
                        </div>
                        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                          {spiceLevels.map((s, si) => (
                            <button key={si} onClick={() => setSelectedSpice({ ...selectedSpice, [globalIdx]: si + 1 })} style={{
                              padding: '6px 14px', borderRadius: 20, fontSize: 12, fontWeight: 600, cursor: 'pointer',
                              border: spice === si + 1 ? `2px solid ${s.color}` : '1.5px solid #E8E0D8',
                              background: spice === si + 1 ? s.color : 'white',
                              color: spice === si + 1 ? 'white' : '#6B5E4E',
                              transition: 'all 0.2s',
                            }}>
                              {'🌶'.repeat(si + 1)} {lang === 'ja' ? s.ja : s.en}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Large Portion */}
                    {item.hasLargePortion && (
                      <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#1C1A18', marginBottom: 8 }}>
                          {lang === 'ja' ? 'ポーションサイズ' : 'Portion Size'}
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button onClick={() => setSelectedLarge({ ...selectedLarge, [globalIdx]: false })} style={{
                            padding: '8px 18px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                            border: !isLarge ? '2px solid #769a00' : '1.5px solid #E8E0D8',
                            background: !isLarge ? '#769a00' : 'white',
                            color: !isLarge ? 'white' : '#6B5E4E',
                            transition: 'all 0.2s', flex: 1,
                          }}>
                            {lang === 'ja' ? '普通' : 'Regular'}
                          </button>
                          <button onClick={() => setSelectedLarge({ ...selectedLarge, [globalIdx]: true })} style={{
                            padding: '8px 18px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                            border: isLarge ? '2px solid #D4821A' : '1.5px solid #E8E0D8',
                            background: isLarge ? '#D4821A' : 'white',
                            color: isLarge ? 'white' : '#6B5E4E',
                            transition: 'all 0.2s', flex: 1,
                          }}>
                            {lang === 'ja' ? '大盛り +¥200' : 'Large +¥200'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Naan or Rice */}
                    {item.hasNaanRice && (
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: '#1C1A18', marginBottom: 8 }}>
                          {lang === 'ja' ? 'ナンまたはライスを選択' : 'Choose Naan or Rice'}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                          {naanRiceOptions.map((opt, oi) => (
                            <button key={oi} onClick={() => setSelectedNaanRice({ ...selectedNaanRice, [globalIdx]: oi })} style={{
                              padding: '10px 14px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                              border: naanRice === oi ? '2px solid #769a00' : '1.5px solid #E8E0D8',
                              background: naanRice === oi ? '#769a00' : 'white',
                              color: naanRice === oi ? 'white' : '#6B5E4E',
                              transition: 'all 0.2s', textAlign: 'center',
                            }}>
                              {lang === 'ja' ? opt.ja : opt.en}
                              {opt.extra > 0 && <span style={{ display: 'block', fontSize: 11, opacity: 0.8, marginTop: 2 }}>+¥{opt.extra}</span>}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Updated Price */}
                    <div style={{ marginTop: 16, padding: '12px 16px', background: 'rgba(212,130,26,0.08)', borderRadius: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, fontWeight: 600, color: '#6B5E4E' }}>
                        {lang === 'ja' ? '合計' : 'Total'}
                      </span>
                      <span style={{ fontSize: 20, fontWeight: 800, color: '#D4821A' }}>
                        ¥{basePrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          div[style*="gridTemplateColumns: 'repeat(auto-fill, minmax(340px"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
