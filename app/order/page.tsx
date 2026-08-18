'use client';
import { useState } from 'react';
import { useLang } from '../lib/LanguageContext';

interface OrderMenuItem {
  cat: string;
  name: string;
  nameJa: string;
  price: number;
  desc: string;
  descJa: string;
  img: string;
  spice: number;
  hasNaanRice?: boolean;
  hasLargePortion?: boolean;
}

interface CartItem {
  name: string;
  nameJa: string;
  basePrice: number;
  totalPrice: number;
  qty: number;
  spiceLevel: number;
  isLarge: boolean;
  naanRice: string;
  naanRiceJa: string;
  naanRiceExtra: number;
}

const orderItems: OrderMenuItem[] = [
  // Curry
  { cat: 'Curry', name: 'Butter Chicken Curry', nameJa: 'バターチキンカレー', price: 1380, desc: 'Tender chicken in velvety tomato-cream sauce.', descJa: '柔らかチキンをクリーミーなトマトソースで。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Tikka Masala Curry', nameJa: 'チキンティッカマサラカレー', price: 1380, desc: 'Tikka pieces in rich masala sauce.', descJa: 'ティッカをリッチなマサラソースで。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Rara Curry', nameJa: 'チキンララカレー', price: 1380, desc: 'Minced and tender chicken in spiced gravy.', descJa: 'ミンチと柔らかチキンのグレービー。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mix Seafood Curry', nameJa: 'ミックスシーフードカレー', price: 1480, desc: 'Assorted seafood in aromatic curry.', descJa: 'シーフードの香り豊かなカレー。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-seafood-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Prawn Curry', nameJa: 'エビカレー', price: 1480, desc: 'Juicy prawns in rich curry sauce.', descJa: 'プリプリエビのリッチカレー。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/prawn-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Dal Mutton Curry', nameJa: 'ダルマトンカレー', price: 1480, desc: 'Lentils slow-cooked with tender mutton.', descJa: 'レンズ豆と柔らかマトンの煮込み。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Curry', nameJa: 'チキンカレー', price: 1180, desc: 'Classic chicken curry with aromatic spices.', descJa: '定番のチキンカレー。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mutton Curry', nameJa: 'マトンカレー', price: 1280, desc: 'Slow-cooked mutton in aromatic spices.', descJa: 'ホールスパイスで煮込んだマトン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mutton Sag Curry', nameJa: 'マトンサグカレー', price: 1280, desc: 'Mutton with fresh spinach gravy.', descJa: 'マトンとほうれん草。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-sag-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Sag Curry', nameJa: 'チキンサグカレー', price: 1280, desc: 'Chicken with fresh spinach gravy.', descJa: 'チキンとほうれん草。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-sag-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Keema Egg Curry', nameJa: 'キーマエッグカレー', price: 1280, desc: 'Minced meat with boiled eggs.', descJa: 'キーマとゆで卵。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/keema-egg-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Sag Keema Curry', nameJa: 'サグキーマカレー', price: 1280, desc: 'Spinach with spiced minced meat.', descJa: 'ほうれん草とキーマ。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/sag-keema-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Dal Chicken Curry', nameJa: 'ダルチキンカレー', price: 1280, desc: 'Lentils with tender chicken.', descJa: 'レンズ豆と柔らかチキン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mutton Vegetable Curry', nameJa: 'マトン野菜カレー', price: 1280, desc: 'Mutton with seasonal vegetables.', descJa: 'マトンと季節の野菜。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken Cheese Curry', nameJa: 'チキンチーズカレー', price: 1280, desc: 'Creamy cheese and chicken.', descJa: 'クリーミーチーズとチキン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Eggplant Chicken Curry', nameJa: 'ナスチキンカレー', price: 1280, desc: 'Eggplant with tender chicken.', descJa: 'ナスと柔らかチキン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Eggplant Keema Curry', nameJa: 'ナスキーマカレー', price: 1280, desc: 'Eggplant with minced meat.', descJa: 'ナスとキーマ。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', spice: 2, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Mix Vegetable Curry', nameJa: 'ミックス野菜カレー', price: 1280, desc: 'Assorted vegetables in curry.', descJa: 'ミックス野菜カレー。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Curry', name: 'Chicken & Vegetable Curry', nameJa: 'チキン野菜カレー', price: 1280, desc: 'Chicken with seasonal vegetables.', descJa: 'チキンと季節の野菜。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },

  // Soup Curry
  { cat: 'Soup Curry', name: 'Momo & Vegetable Soup Curry', nameJa: 'モモ野菜スープカレー', price: 1380, desc: 'Hokkaido style with momo and vegetables.', descJa: '北海道スタイル、モモと野菜。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Soup Curry', name: 'Mix Vegetable Soup Curry', nameJa: 'ミックス野菜スープカレー', price: 1380, desc: 'Hokkaido style with assorted vegetables.', descJa: '北海道スタイル、ミックス野菜。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-soup-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },
  { cat: 'Soup Curry', name: 'Chicken & Vegetable Soup Curry', nameJa: 'チキン野菜スープカレー', price: 1380, desc: 'Hokkaido style with chicken and vegetables.', descJa: '北海道スタイル、チキンと野菜。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg', spice: 1, hasNaanRice: true, hasLargePortion: true },

  // Naan & Rice (standalone)
  { cat: 'Naan & Rice', name: 'Rice', nameJa: 'ライス', price: 250, desc: 'Steamed basmati rice.', descJa: 'バスマティライス。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/rice.jpg', spice: 0 },
  { cat: 'Naan & Rice', name: 'Plain Naan', nameJa: 'プレーンナン', price: 350, desc: 'Classic from tandoor.', descJa: 'タンドール窯焼きの定番ナン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/plain-naan.jpg', spice: 0 },
  { cat: 'Naan & Rice', name: 'Garlic Naan', nameJa: 'ガーリックナン', price: 450, desc: 'Fresh baked with garlic butter.', descJa: 'ガーリックバターで焼き上げ。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg', spice: 0 },
  { cat: 'Naan & Rice', name: 'Cheese Naan', nameJa: 'チーズナン', price: 500, desc: 'Stuffed with creamy cheese.', descJa: 'クリーミーチーズ入り。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg', spice: 0 },

  // Tandoori
  { cat: 'Tandoori', name: 'Chicken Tikka (6pc)', nameJa: 'チキンティッカ（6個）', price: 880, desc: 'Char-grilled marinated chicken.', descJa: 'タンドール窯焼きマリネチキン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg', spice: 2, hasLargePortion: true },
  { cat: 'Tandoori', name: 'Tandoori Chicken', nameJa: 'タンドリーチキン', price: 980, desc: 'Half chicken, yogurt & spices.', descJa: 'ヨーグルトとスパイスの半身チキン。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/tandoori-chicken.jpg', spice: 2, hasLargePortion: true },

  // Sides
  { cat: 'Sides', name: 'Momo (6pc)', nameJa: 'モモ（6個）', price: 780, desc: 'Traditional Nepalese dumplings.', descJa: '伝統的なネパール餃子。', img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg', spice: 1 },
];

const categories = ['All', 'Curry', 'Soup Curry', 'Naan & Rice', 'Tandoori', 'Sides'];
const categoriesJa = ['すべて', 'カレー', 'スープカレー', 'ナン＆ライス', 'タンドリー', 'サイド'];

const spiceLevels = [
  { en: 'Mild', ja: 'マイルド', color: '#27AE60', icon: '🌶' },
  { en: 'Medium', ja: '中辛', color: '#F39C12', icon: '🌶🌶' },
  { en: 'Hot', ja: '辛口', color: '#E67E22', icon: '🌶🌶🌶' },
  { en: 'Very Hot', ja: '大辛', color: '#E74C3C', icon: '🌶🌶🌶🌶' },
  { en: 'Extra Hot', ja: '激辛', color: '#8B0000', icon: '🌶🌶🌶🌶🌶' },
];

const naanRiceOptions = [
  { en: 'Plain Naan', ja: 'プレーンナン', extra: 0 },
  { en: 'Garlic Naan', ja: 'ガーリックナン', extra: 100 },
  { en: 'Cheese Naan', ja: 'チーズナン', extra: 150 },
  { en: 'Rice', ja: 'ライス', extra: 0 },
];

export default function OrderPage() {
  const { t, lang } = useLang();
  const [activeCategory, setActiveCategory] = useState('All');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [showModal, setShowModal] = useState<number | null>(null);

  // Per-item customization state
  const [modalSpice, setModalSpice] = useState(1);
  const [modalLarge, setModalLarge] = useState(false);
  const [modalNaanRice, setModalNaanRice] = useState(0);
  const [modalQty, setModalQty] = useState(1);

  const filtered = activeCategory === 'All' ? orderItems : orderItems.filter(i => i.cat === activeCategory);
  const total = cart.reduce((sum, item) => sum + item.totalPrice * item.qty, 0);

  const openModal = (idx: number) => {
    const item = orderItems[idx];
    setModalSpice(item.spice || 1);
    setModalLarge(false);
    setModalNaanRice(0);
    setModalQty(1);
    setShowModal(idx);
  };

  const addToCart = () => {
    if (showModal === null) return;
    const item = orderItems[showModal];
    const naanOpt = item.hasNaanRice ? naanRiceOptions[modalNaanRice] : null;
    const largeCost = modalLarge && item.hasLargePortion ? 200 : 0;
    const naanExtra = naanOpt ? naanOpt.extra : 0;
    const unitPrice = item.price + largeCost + naanExtra;

    const key = `${item.name}-${modalSpice}-${modalLarge}-${modalNaanRice}`;
    const existing = cart.find(c =>
      c.name === item.name &&
      c.spiceLevel === modalSpice &&
      c.isLarge === modalLarge &&
      c.naanRice === (naanOpt ? naanOpt.en : '')
    );

    if (existing) {
      setCart(cart.map(c =>
        c === existing ? { ...c, qty: c.qty + modalQty } : c
      ));
    } else {
      setCart([...cart, {
        name: item.name,
        nameJa: item.nameJa,
        basePrice: item.price,
        totalPrice: unitPrice,
        qty: modalQty,
        spiceLevel: item.spice > 0 ? modalSpice : 0,
        isLarge: modalLarge && !!item.hasLargePortion,
        naanRice: naanOpt ? naanOpt.en : '',
        naanRiceJa: naanOpt ? naanOpt.ja : '',
        naanRiceExtra: naanExtra,
      }]);
    }
    setShowModal(null);
  };

  const removeFromCart = (idx: number) => {
    const item = cart[idx];
    if (item.qty > 1) {
      setCart(cart.map((c, i) => i === idx ? { ...c, qty: c.qty - 1 } : c));
    } else {
      setCart(cart.filter((_, i) => i !== idx));
    }
  };

  const WHATSAPP_NUMBER = '819085931555';
  const VIBER_NUMBER = '%2B819085931555';

  const buildOrderMessage = () => {
    const lines: string[] = [];
    lines.push(lang === 'ja' ? '--- ネパールダイニング 注文 ---' : '--- Nepal Dining Order ---');
    lines.push('');
    cart.forEach(item => {
      const name = lang === 'ja' ? item.nameJa : item.name;
      lines.push(`${name} x${item.qty} — ¥${(item.totalPrice * item.qty).toLocaleString()}`);
      const details: string[] = [];
      if (item.spiceLevel > 0) details.push(lang === 'ja' ? spiceLevels[item.spiceLevel - 1]?.ja : spiceLevels[item.spiceLevel - 1]?.en);
      if (item.isLarge) details.push(lang === 'ja' ? '大盛り' : 'Large');
      if (item.naanRice) details.push(lang === 'ja' ? item.naanRiceJa : item.naanRice);
      if (details.length > 0) lines.push(`  (${details.join(', ')})`);
    });
    lines.push('');
    lines.push(`${lang === 'ja' ? '合計' : 'Total'}: ¥${total.toLocaleString()}`);
    lines.push('');
    lines.push(lang === 'ja' ? 'お持ち帰りでお願いします。' : 'Takeout order please.');
    return lines.join('\n');
  };

  const handleOrder = () => {
    if (cart.length === 0) return;
    setOrderPlaced(true);
  };

  const openWhatsApp = () => {
    const msg = encodeURIComponent(buildOrderMessage());
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  const openViber = () => {
    const msg = encodeURIComponent(buildOrderMessage());
    window.open(`viber://chat?number=${VIBER_NUMBER}&draft=${msg}`, '_blank');
  };

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Header */}
      <section className="order-header" style={{ padding: '60px 24px 40px', background: 'linear-gradient(135deg, #D4821A, #F0A830)', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>
          {lang === 'ja' ? 'テイクアウト' : 'Takeout'}
        </div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 12 }}>{t.order.headline}</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)' }}>
          {lang === 'ja' ? '20〜30分でご用意 | お持ち帰り専用' : 'Ready in 20-30 minutes | Pickup Only'}
        </p>
      </section>

      {/* Category Filter */}
      <div style={{ position: 'sticky', top: 64, zIndex: 10, background: 'rgba(255,253,248,0.95)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(212,130,26,0.1)', padding: '12px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
          {categories.map((cat, ci) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: '8px 18px', borderRadius: 24, fontSize: 13, fontWeight: 600, cursor: 'pointer',
              border: activeCategory === cat ? 'none' : '1.5px solid #E8E0D8',
              background: activeCategory === cat ? 'linear-gradient(135deg, #D4821A, #F0A830)' : 'white',
              color: activeCategory === cat ? 'white' : '#6B5E4E',
              boxShadow: activeCategory === cat ? '0 4px 12px rgba(212,130,26,0.3)' : 'none',
              transition: 'all 0.2s',
            }}>{lang === 'ja' ? categoriesJa[ci] : cat}</button>
          ))}
        </div>
      </div>

      <div className="order-grid" style={{ maxWidth: 1200, margin: '0 auto', padding: '32px 24px 80px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, alignItems: 'start' }}>
        {/* Menu Items */}
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {filtered.map((item, i) => {
              const globalIdx = orderItems.indexOf(item);
              const hasOptions = item.hasNaanRice || item.hasLargePortion || item.spice > 0;
              return (
                <div key={globalIdx} style={{
                  background: 'white', borderRadius: 16, padding: 16,
                  boxShadow: '0 2px 12px rgba(28,26,24,0.07)',
                  border: '1px solid rgba(212,130,26,0.07)',
                  display: 'flex', gap: 14, alignItems: 'center',
                  cursor: 'pointer', transition: 'all 0.2s',
                }}
                onClick={() => hasOptions ? openModal(globalIdx) : openModal(globalIdx)}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(212,130,26,0.15)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(28,26,24,0.07)'; }}
                >
                  <img src={item.img} alt={lang === 'ja' ? item.nameJa : item.name} style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1C1A18', margin: 0 }}>
                        {lang === 'ja' ? item.nameJa : item.name}
                      </h3>
                      <span style={{ fontSize: 16, fontWeight: 800, color: '#D4821A', flexShrink: 0, marginLeft: 8 }}>
                        ¥{item.price.toLocaleString()}
                      </span>
                    </div>
                    <p style={{ fontSize: 12, color: '#6B5E4E', marginTop: 2, marginBottom: 6 }}>
                      {lang === 'ja' ? item.descJa : item.desc}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                      {item.spice > 0 && (
                        <span style={{ fontSize: 10, fontWeight: 600, color: '#E74C3C', background: 'rgba(231,76,60,0.08)', padding: '2px 6px', borderRadius: 6 }}>
                          {lang === 'ja' ? '辛さ選択' : 'Spicy Level'}
                        </span>
                      )}
                      {item.hasLargePortion && (
                        <span style={{ fontSize: 10, fontWeight: 600, color: '#D4821A', background: 'rgba(212,130,26,0.08)', padding: '2px 6px', borderRadius: 6 }}>
                          {lang === 'ja' ? '大盛り可' : 'Large +¥200'}
                        </span>
                      )}
                      {item.hasNaanRice && (
                        <span style={{ fontSize: 10, fontWeight: 600, color: '#769a00', background: 'rgba(118,154,0,0.08)', padding: '2px 6px', borderRadius: 6 }}>
                          {lang === 'ja' ? 'ナン/ライス' : 'Naan/Rice'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%', flexShrink: 0,
                    background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 20, fontWeight: 700, boxShadow: '0 4px 12px rgba(212,130,26,0.3)',
                  }}>+</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Cart Sidebar */}
        <div style={{ position: 'sticky', top: 130 }} className="order-cart">
          {orderPlaced ? (
            <div style={{ background: 'white', borderRadius: 24, padding: '40px 28px', textAlign: 'center', boxShadow: '0 20px 60px rgba(28,26,24,0.1)' }}>
              <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
              <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 8 }}>
                {lang === 'ja' ? 'ご注文内容' : 'Order Summary'}
              </h3>
              <p style={{ fontSize: 14, color: '#6B5E4E', lineHeight: 1.6, marginBottom: 16 }}>
                {lang === 'ja' ? '下のボタンで注文を送信してください' : 'Send your order using one of the options below'}
              </p>

              {/* Order items summary */}
              <div style={{ background: '#FDF8F0', borderRadius: 16, padding: 16, textAlign: 'left', marginBottom: 20 }}>
                {cart.map((item, idx) => (
                  <div key={idx} style={{ marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid rgba(212,130,26,0.08)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, fontWeight: 600, color: '#1C1A18' }}>
                      <span>{lang === 'ja' ? item.nameJa : item.name} x{item.qty}</span>
                      <span style={{ color: '#D4821A' }}>¥{(item.totalPrice * item.qty).toLocaleString()}</span>
                    </div>
                    <div style={{ fontSize: 11, color: '#6B5E4E', marginTop: 2 }}>
                      {item.spiceLevel > 0 && <span>{spiceLevels[item.spiceLevel - 1]?.icon} </span>}
                      {item.isLarge && <span>{lang === 'ja' ? '大盛り' : 'Large'} </span>}
                      {item.naanRice && <span>+ {lang === 'ja' ? item.naanRiceJa : item.naanRice}</span>}
                    </div>
                  </div>
                ))}
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 800, color: '#D4821A', paddingTop: 8 }}>
                  <span>{lang === 'ja' ? '合計' : 'Total'}</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>

              {/* WhatsApp Button */}
              <button onClick={openWhatsApp} style={{
                width: '100%', padding: '14px 20px', borderRadius: 14, border: 'none',
                background: '#25D366', color: 'white', fontSize: 16, fontWeight: 700,
                cursor: 'pointer', marginBottom: 10, display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10, boxShadow: '0 4px 16px rgba(37,211,102,0.3)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                {lang === 'ja' ? 'WhatsAppで注文する' : 'Order via WhatsApp'}
              </button>

              {/* Viber Button */}
              <button onClick={openViber} style={{
                width: '100%', padding: '14px 20px', borderRadius: 14, border: 'none',
                background: '#7360F2', color: 'white', fontSize: 16, fontWeight: 700,
                cursor: 'pointer', marginBottom: 10, display: 'flex', alignItems: 'center',
                justifyContent: 'center', gap: 10, boxShadow: '0 4px 16px rgba(115,96,242,0.3)',
              }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white"><path d="M11.4 0C9.473.028 5.333.344 3.02 2.467 1.302 4.187.58 6.783.502 10.043c-.078 3.26-.178 9.373 5.732 11.004l.006.003v2.544s-.037.97.604 1.17c.775.24 1.23-.5 1.97-1.296.407-.437.967-1.08 1.39-1.572 3.83.323 6.778-.414 7.112-.524.77-.255 5.126-.808 5.837-6.596.733-5.963-.354-9.73-2.342-11.446l-.002-.001c-.57-.55-2.874-2.17-7.839-2.312 0 0-.383-.016-.57-.017zm.058 1.89c.16 0 .473.014.473.014 4.12.12 6.073 1.39 6.555 1.852 1.675 1.45 2.573 4.725 1.942 9.838-.593 4.832-4.15 5.16-4.8 5.374-.277.09-2.824.717-5.983.515 0 0-2.37 2.862-3.11 3.604-.116.117-.268.167-.365.143-.135-.034-.172-.192-.17-.425l.03-3.924C3.07 17.263 2.35 12.153 2.41 9.59c.065-2.716.643-4.856 2.073-6.275 1.94-1.804 5.438-1.55 6.975-1.424zm.059 3.17a.476.476 0 00-.474.49.476.476 0 00.488.464c1.085-.007 2.14.378 2.93 1.096.81.697 1.31 1.69 1.4 2.774a.472.472 0 00.503.447.478.478 0 00.447-.507c-.108-1.3-.718-2.5-1.705-3.35-.96-.862-2.226-1.36-3.502-1.413a.426.426 0 00-.087-.001zm-3.63.654c-.252-.013-.487.073-.683.252l-.005.004c-.476.415-.89.888-1.23 1.407l-.001.001a1.455 1.455 0 00-.193 1.203c.313 1.268.883 2.47 1.67 3.51l.007.01.02.03c.943 1.32 2.098 2.476 3.396 3.418l.037.024.01.007.01.007c1.043.79 2.244 1.36 3.51 1.675l.005.001c.374.098.752.003 1.092-.186l.052-.031c.522-.332 1.002-.74 1.424-1.212.408-.475.27-1.003-.175-1.277l-1.86-1.153a.706.706 0 00-.923.1l-.535.638c-.21.237-.575.27-.575.27s-2.237.475-4.526-1.822c-2.293-2.296-1.818-4.536-1.818-4.536s.033-.365.27-.576l.635-.537a.71.71 0 00.098-.93L5.6 6.14c-.16-.254-.415-.44-.712-.456zm5.815.556a.473.473 0 00-.43.52.478.478 0 00.52.432c.64.046 1.218.312 1.642.756.414.435.65 1.003.67 1.607a.476.476 0 00.487.464l.013-.001a.473.473 0 00.463-.49 3.215 3.215 0 00-.965-2.31 3.247 3.247 0 00-2.38-1.08h-.02zm.15 1.685a.476.476 0 00-.452.502.476.476 0 00.505.448c.57.042.982.503.942 1.044a.478.478 0 00.44.51l.034.002a.472.472 0 00.474-.44 1.895 1.895 0 00-1.92-2.066h-.023z"/></svg>
                {lang === 'ja' ? 'Viberで注文する' : 'Order via Viber'}
              </button>

              {/* Phone Call Button */}
              <a href="tel:0167442444" style={{
                width: '100%', padding: '14px 20px', borderRadius: 14, border: 'none',
                background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                fontSize: 16, fontWeight: 700, textDecoration: 'none', display: 'flex',
                alignItems: 'center', justifyContent: 'center', gap: 10,
                boxShadow: '0 4px 16px rgba(212,130,26,0.3)', boxSizing: 'border-box',
              }}>
                📞 {lang === 'ja' ? '電話で注文 0167-44-2444' : 'Call to Order 0167-44-2444'}
              </a>

              <p style={{ fontSize: 12, color: '#6B5E4E', lineHeight: 1.6, marginTop: 14 }}>
                {lang === 'ja' ? '注文内容が自動でメッセージに入ります。20〜30分でご用意いたします。' : 'Your order details will be pre-filled in the message. Ready in 20-30 minutes.'}
              </p>
              <button onClick={() => { setOrderPlaced(false); setCart([]); }} style={{
                marginTop: 12, padding: '10px 24px', borderRadius: 10,
                border: '1.5px solid #D4821A', background: 'transparent',
                color: '#D4821A', fontSize: 14, fontWeight: 600, cursor: 'pointer',
              }}>{lang === 'ja' ? '新しい注文' : 'New Order'}</button>
            </div>
          ) : (
            <div style={{ background: 'white', borderRadius: 24, padding: 28, boxShadow: '0 20px 60px rgba(28,26,24,0.1)', border: '1px solid rgba(212,130,26,0.08)' }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 4 }}>
                {lang === 'ja' ? 'ご注文' : 'Your Order'}
              </h2>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '6px 12px', borderRadius: 8,
                background: '#FDF8F0', color: '#D4821A',
                fontWeight: 600, fontSize: 12, marginBottom: 16,
              }}>{lang === 'ja' ? 'お持ち帰り専用' : 'Pickup Only'}</div>

              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '32px 0', color: '#C4B5A0' }}>
                  <div style={{ fontSize: 44, marginBottom: 10 }}>🛒</div>
                  <p style={{ fontSize: 14 }}>{lang === 'ja' ? 'カートは空です' : 'Your cart is empty'}</p>
                  <p style={{ fontSize: 12, marginTop: 4 }}>{lang === 'ja' ? 'メニューから追加してください' : 'Tap items to customize & add'}</p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 16 }}>
                    {cart.map((item, idx) => (
                      <div key={idx} style={{ padding: '10px 0', borderBottom: '1px solid rgba(212,130,26,0.08)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div style={{ fontSize: 14, fontWeight: 600, color: '#1C1A18' }}>
                              {lang === 'ja' ? item.nameJa : item.name}
                            </div>
                            <div style={{ fontSize: 11, color: '#6B5E4E', marginTop: 2, display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                              {item.spiceLevel > 0 && (
                                <span style={{ background: 'rgba(231,76,60,0.08)', padding: '1px 5px', borderRadius: 4 }}>
                                  {spiceLevels[item.spiceLevel - 1]?.icon} {lang === 'ja' ? spiceLevels[item.spiceLevel - 1]?.ja : spiceLevels[item.spiceLevel - 1]?.en}
                                </span>
                              )}
                              {item.isLarge && (
                                <span style={{ background: 'rgba(212,130,26,0.08)', padding: '1px 5px', borderRadius: 4 }}>
                                  {lang === 'ja' ? '大盛り' : 'Large'}
                                </span>
                              )}
                              {item.naanRice && (
                                <span style={{ background: 'rgba(118,154,0,0.08)', padding: '1px 5px', borderRadius: 4 }}>
                                  {lang === 'ja' ? item.naanRiceJa : item.naanRice}
                                </span>
                              )}
                            </div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
                            <span style={{ fontSize: 14, fontWeight: 700, color: '#D4821A' }}>
                              ¥{(item.totalPrice * item.qty).toLocaleString()}
                            </span>
                            <span style={{ fontSize: 12, color: '#6B5E4E' }}>x{item.qty}</span>
                            <button onClick={() => removeFromCart(idx)} style={{
                              width: 22, height: 22, borderRadius: '50%', border: '1.5px solid #E8E0D8',
                              background: 'transparent', color: '#C4B5A0', fontSize: 12, cursor: 'pointer',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                            }}>x</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 800, color: '#1C1A18', marginBottom: 20, paddingTop: 4 }}>
                    <span>{lang === 'ja' ? '合計' : 'Total'}</span>
                    <span style={{ color: '#D4821A' }}>¥{total.toLocaleString()}</span>
                  </div>

                  <button onClick={handleOrder} style={{
                    width: '100%', padding: '16px', borderRadius: 14, border: 'none',
                    background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                    fontSize: 16, fontWeight: 700, cursor: 'pointer',
                    boxShadow: '0 8px 24px rgba(212,130,26,0.35)',
                  }}>
                    {lang === 'ja' ? `注文する — ¥${total.toLocaleString()}` : `Place Order — ¥${total.toLocaleString()}`}
                  </button>
                  <p style={{ fontSize: 12, color: '#C4B5A0', textAlign: 'center', marginTop: 8 }}>
                    {lang === 'ja' ? '0167-44-2444に電話して確認' : 'You will call 0167-44-2444 to confirm'}
                  </p>
                </>
              )}

              <p style={{ fontSize: 12, color: '#C4B5A0', textAlign: 'center', marginTop: 12 }}>
                {lang === 'ja' ? 'または直接お電話: ' : 'Or call directly: '}
                <a href="tel:0167442444" style={{ color: '#D4821A', fontWeight: 600, textDecoration: 'none' }}>0167-44-2444</a>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Customization Modal */}
      {showModal !== null && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 1000,
          background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 24,
        }} onClick={() => setShowModal(null)}>
          <div style={{
            background: 'white', borderRadius: 24, maxWidth: 480, width: '100%',
            maxHeight: '85vh', overflow: 'auto',
            boxShadow: '0 24px 80px rgba(0,0,0,0.3)',
          }} onClick={e => e.stopPropagation()}>
            {(() => {
              const item = orderItems[showModal];
              const largeCost = modalLarge && item.hasLargePortion ? 200 : 0;
              const naanExtra = item.hasNaanRice ? naanRiceOptions[modalNaanRice].extra : 0;
              const unitPrice = item.price + largeCost + naanExtra;
              return (
                <>
                  {/* Modal Header with Image */}
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden', borderRadius: '24px 24px 0 0' }}>
                    <img src={item.img} alt={lang === 'ja' ? item.nameJa : item.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '40px 24px 16px' }}>
                      <h3 style={{ fontSize: 22, fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', margin: 0 }}>
                        {lang === 'ja' ? item.nameJa : item.name}
                      </h3>
                      <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.8)', marginTop: 4 }}>
                        {lang === 'ja' ? item.descJa : item.desc}
                      </p>
                    </div>
                    <button onClick={() => setShowModal(null)} style={{
                      position: 'absolute', top: 12, right: 12,
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'rgba(0,0,0,0.5)', color: 'white', border: 'none',
                      fontSize: 18, cursor: 'pointer', display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                    }}>x</button>
                  </div>

                  <div style={{ padding: '20px 24px 24px' }}>
                    {/* Spicy Level */}
                    {item.spice > 0 && (
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                          🌶 {lang === 'ja' ? '辛さレベルを選択' : 'Choose Spicy Level'}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                          {spiceLevels.map((s, si) => (
                            <button key={si} onClick={() => setModalSpice(si + 1)} style={{
                              padding: '10px 16px', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                              border: modalSpice === si + 1 ? `2px solid ${s.color}` : '1.5px solid #E8E0D8',
                              background: modalSpice === si + 1 ? s.color : 'white',
                              color: modalSpice === si + 1 ? 'white' : '#6B5E4E',
                              transition: 'all 0.2s', textAlign: 'left',
                              display: 'flex', alignItems: 'center', gap: 8,
                            }}>
                              <span>{s.icon}</span>
                              <span>{lang === 'ja' ? s.ja : s.en}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Large Portion */}
                    {item.hasLargePortion && (
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18', marginBottom: 10 }}>
                          {lang === 'ja' ? 'ポーションサイズ' : 'Portion Size'}
                        </div>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button onClick={() => setModalLarge(false)} style={{
                            flex: 1, padding: '12px', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                            border: !modalLarge ? '2px solid #769a00' : '1.5px solid #E8E0D8',
                            background: !modalLarge ? '#769a00' : 'white',
                            color: !modalLarge ? 'white' : '#6B5E4E',
                            transition: 'all 0.2s',
                          }}>
                            {lang === 'ja' ? '普通' : 'Regular'}
                          </button>
                          <button onClick={() => setModalLarge(true)} style={{
                            flex: 1, padding: '12px', borderRadius: 12, fontSize: 14, fontWeight: 600, cursor: 'pointer',
                            border: modalLarge ? '2px solid #D4821A' : '1.5px solid #E8E0D8',
                            background: modalLarge ? '#D4821A' : 'white',
                            color: modalLarge ? 'white' : '#6B5E4E',
                            transition: 'all 0.2s',
                          }}>
                            {lang === 'ja' ? '大盛り +¥200' : 'Large +¥200'}
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Naan or Rice */}
                    {item.hasNaanRice && (
                      <div style={{ marginBottom: 20 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18', marginBottom: 10 }}>
                          {lang === 'ja' ? 'ナンまたはライスを選択' : 'Choose Naan or Rice'}
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                          {naanRiceOptions.map((opt, oi) => (
                            <button key={oi} onClick={() => setModalNaanRice(oi)} style={{
                              padding: '12px', borderRadius: 12, fontSize: 13, fontWeight: 600, cursor: 'pointer',
                              border: modalNaanRice === oi ? '2px solid #769a00' : '1.5px solid #E8E0D8',
                              background: modalNaanRice === oi ? '#769a00' : 'white',
                              color: modalNaanRice === oi ? 'white' : '#6B5E4E',
                              transition: 'all 0.2s', textAlign: 'center',
                            }}>
                              <div>{lang === 'ja' ? opt.ja : opt.en}</div>
                              {opt.extra > 0 && <div style={{ fontSize: 11, opacity: 0.8, marginTop: 2 }}>+¥{opt.extra}</div>}
                              {opt.extra === 0 && <div style={{ fontSize: 11, opacity: 0.6, marginTop: 2 }}>{lang === 'ja' ? '追加料金なし' : 'No extra'}</div>}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity */}
                    <div style={{ marginBottom: 20 }}>
                      <div style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18', marginBottom: 10 }}>
                        {lang === 'ja' ? '数量' : 'Quantity'}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 16, justifyContent: 'center' }}>
                        <button onClick={() => setModalQty(Math.max(1, modalQty - 1))} style={{
                          width: 40, height: 40, borderRadius: '50%', border: '2px solid #D4821A',
                          background: 'transparent', color: '#D4821A', fontSize: 20, fontWeight: 700,
                          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        }}>-</button>
                        <span style={{ fontSize: 24, fontWeight: 800, color: '#1C1A18', minWidth: 40, textAlign: 'center' }}>{modalQty}</span>
                        <button onClick={() => setModalQty(modalQty + 1)} style={{
                          width: 40, height: 40, borderRadius: '50%', border: 'none',
                          background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                          fontSize: 20, fontWeight: 700, cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 12px rgba(212,130,26,0.3)',
                        }}>+</button>
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button onClick={addToCart} style={{
                      width: '100%', padding: '16px', borderRadius: 14, border: 'none',
                      background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                      fontSize: 16, fontWeight: 700, cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(212,130,26,0.35)',
                    }}>
                      {lang === 'ja'
                        ? `カートに追加 — ¥${(unitPrice * modalQty).toLocaleString()}`
                        : `Add to Cart — ¥${(unitPrice * modalQty).toLocaleString()}`
                      }
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Floating cart button on mobile */}
      {!orderPlaced && cart.length > 0 && (
        <div className="mobile-cart-btn" onClick={() => {
          const el = document.querySelector('.order-cart');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} style={{
          position: 'fixed', bottom: 20, left: 16, right: 16, zIndex: 50,
          background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
          borderRadius: 16, padding: '14px 20px', display: 'none',
          alignItems: 'center', justifyContent: 'space-between',
          boxShadow: '0 8px 32px rgba(212,130,26,0.4)', cursor: 'pointer',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 22 }}>🛒</span>
            <span style={{ fontWeight: 700, fontSize: 15 }}>
              {cart.reduce((sum, c) => sum + c.qty, 0)} {lang === 'ja' ? '品' : 'items'}
            </span>
          </div>
          <span style={{ fontWeight: 800, fontSize: 17 }}>¥{total.toLocaleString()}</span>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .order-header { padding: 36px 16px 24px !important; }
          .order-header h1 { font-size: 28px !important; }
          .order-header p { font-size: 14px !important; }
          .order-grid { grid-template-columns: 1fr !important; padding: 16px 12px 100px !important; gap: 16px !important; }
          .order-cart { position: static !important; }
          .mobile-cart-btn { display: flex !important; }
        }
      `}</style>
    </div>
  );
}
