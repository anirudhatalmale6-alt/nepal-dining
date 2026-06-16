'use client';
import { useState } from 'react';
import { useLang } from '../lib/LanguageContext';

interface CartItem {
  name: string;
  price: number;
  qty: number;
}

type Category = 'All' | 'Curry' | 'Soup Curry' | 'Naan & Rice' | 'Tandoori' | 'Sides';

const orderItems = [
  { name: 'Momo (6pc)', price: 780, img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg', desc: 'Traditional Nepalese dumplings', cat: 'Sides' as Category },
  { name: 'Chicken Tikka (6pc)', price: 880, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg', desc: 'Char-grilled marinated chicken', cat: 'Tandoori' as Category },
  { name: 'Tandoori Chicken', price: 980, img: 'https://nepaldining.online/wp-content/uploads/2026/06/tandoori-chicken.jpg', desc: 'Half chicken, yogurt & spices', cat: 'Tandoori' as Category },
  { name: 'Rice', price: 250, img: 'https://nepaldining.online/wp-content/uploads/2026/06/rice.jpg', desc: 'Steamed basmati rice', cat: 'Naan & Rice' as Category },
  { name: 'Garlic Naan', price: 450, img: 'https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg', desc: 'Fresh baked with garlic butter', cat: 'Naan & Rice' as Category },
  { name: 'Cheese Naan', price: 500, img: 'https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg', desc: 'Stuffed with creamy cheese', cat: 'Naan & Rice' as Category },
  { name: 'Plain Naan', price: 350, img: 'https://nepaldining.online/wp-content/uploads/2026/06/plain-naan.jpg', desc: 'Classic from tandoor', cat: 'Naan & Rice' as Category },
  { name: 'Chicken Tikka Masala Curry', price: 1380, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg', desc: 'Tikka in rich masala sauce', cat: 'Curry' as Category },
  { name: 'Mix Seafood Curry', price: 1480, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-seafood-curry.jpg', desc: 'Assorted seafood curry', cat: 'Curry' as Category },
  { name: 'Chicken Rara Curry', price: 1380, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg', desc: 'Minced & tender chicken', cat: 'Curry' as Category },
  { name: 'Prawn Curry', price: 1480, img: 'https://nepaldining.online/wp-content/uploads/2026/06/prawn-curry.jpg', desc: 'Juicy prawns in curry', cat: 'Curry' as Category },
  { name: 'Butter Chicken Curry', price: 1380, img: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg', desc: 'Velvety tomato-cream sauce', cat: 'Curry' as Category },
  { name: 'Mutton Sag Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-sag-curry.jpg', desc: 'Mutton with spinach', cat: 'Curry' as Category },
  { name: 'Keema Egg Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/keema-egg-curry.jpg', desc: 'Minced meat with eggs', cat: 'Curry' as Category },
  { name: 'Sag Keema Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/sag-keema-curry.jpg', desc: 'Spinach with minced meat', cat: 'Curry' as Category },
  { name: 'Chicken Sag Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-sag-curry.jpg', desc: 'Chicken with spinach', cat: 'Curry' as Category },
  { name: 'Dal Mutton Curry', price: 1480, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', desc: 'Lentils with mutton', cat: 'Curry' as Category },
  { name: 'Dal Chicken Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', desc: 'Lentils with chicken', cat: 'Curry' as Category },
  { name: 'Mutton Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', desc: 'Slow-cooked aromatic mutton', cat: 'Curry' as Category },
  { name: 'Mutton Vegetable Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg', desc: 'Mutton with vegetables', cat: 'Curry' as Category },
  { name: 'Chicken Cheese Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', desc: 'Creamy cheese chicken', cat: 'Curry' as Category },
  { name: 'Eggplant Chicken Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', desc: 'Eggplant with chicken', cat: 'Curry' as Category },
  { name: 'Eggplant Keema Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg', desc: 'Eggplant with minced meat', cat: 'Curry' as Category },
  { name: 'Mix Vegetable Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg', desc: 'Assorted vegetables curry', cat: 'Curry' as Category },
  { name: 'Chicken Curry', price: 1180, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg', desc: 'Classic chicken curry', cat: 'Curry' as Category },
  { name: 'Chicken & Vegetable Curry', price: 1280, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-curry.jpg', desc: 'Chicken with vegetables', cat: 'Curry' as Category },
  { name: 'Momo & Vegetable Soup Curry', price: 1380, img: 'https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg', desc: 'Hokkaido soup curry with momo', cat: 'Soup Curry' as Category },
  { name: 'Mix Vegetable Soup Curry', price: 1380, img: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-soup-curry.jpg', desc: 'Hokkaido style vegetable soup', cat: 'Soup Curry' as Category },
  { name: 'Chicken & Vegetable Soup Curry', price: 1380, img: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg', desc: 'Hokkaido chicken soup curry', cat: 'Soup Curry' as Category },
];

const categories: Category[] = ['All', 'Curry', 'Soup Curry', 'Naan & Rice', 'Tandoori', 'Sides'];

export default function OrderPage() {
  const { t } = useLang();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const addToCart = (item: typeof orderItems[0]) => {
    setCart(prev => {
      const existing = prev.find(c => c.name === item.name);
      if (existing) return prev.map(c => c.name === item.name ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { name: item.name, price: item.price, qty: 1 }];
    });
  };

  const removeFromCart = (name: string) => {
    setCart(prev => {
      const existing = prev.find(c => c.name === name);
      if (existing && existing.qty > 1) return prev.map(c => c.name === name ? { ...c, qty: c.qty - 1 } : c);
      return prev.filter(c => c.name !== name);
    });
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const getQty = (name: string) => cart.find(c => c.name === name)?.qty || 0;

  const filteredItems = activeCategory === 'All'
    ? orderItems
    : orderItems.filter(item => item.cat === activeCategory);

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setOrderPlaced(true);
    window.location.href = 'tel:0167442200';
  };

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Header */}
      <section style={{ padding: '60px 24px 40px', background: 'linear-gradient(135deg, #D4821A, #F0A830)', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>Takeout</div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 12 }}>{t.order.headline}</h1>
        <p style={{ fontSize: 18, color: 'rgba(255,255,255,0.85)' }}>Ready in 20-30 minutes | Pickup Only</p>
      </section>

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '48px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, alignItems: 'start' }}>
        {/* Menu Items */}
        <div>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 20 }}>Choose Your Order</h2>

          {/* Category Filter */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 24,
                  border: activeCategory === cat ? 'none' : '1.5px solid #E8E0D8',
                  background: activeCategory === cat ? 'linear-gradient(135deg, #D4821A, #F0A830)' : 'white',
                  color: activeCategory === cat ? 'white' : '#6B5E4E',
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  boxShadow: activeCategory === cat ? '0 4px 12px rgba(212,130,26,0.3)' : 'none',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {filteredItems.map((item, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 16, padding: '16px',
                boxShadow: '0 2px 12px rgba(28,26,24,0.07)',
                border: '1px solid rgba(212,130,26,0.07)',
                display: 'flex', gap: 16, alignItems: 'center',
              }}>
                <img src={item.img} alt={item.name} style={{ width: 80, height: 80, borderRadius: 12, objectFit: 'cover', flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1C1A18' }}>{item.name}</h3>
                    <span style={{ fontSize: 16, fontWeight: 800, color: '#D4821A', flexShrink: 0, marginLeft: 8 }}>¥{item.price.toLocaleString()}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#6B5E4E', marginTop: 2 }}>{item.desc}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                  {getQty(item.name) > 0 && (
                    <>
                      <button onClick={() => removeFromCart(item.name)} style={{ width: 32, height: 32, borderRadius: '50%', border: '2px solid #D4821A', background: 'transparent', color: '#D4821A', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>−</button>
                      <span style={{ fontSize: 16, fontWeight: 700, color: '#1C1A18', minWidth: 20, textAlign: 'center' }}>{getQty(item.name)}</span>
                    </>
                  )}
                  <button onClick={() => addToCart(item)} style={{ width: 32, height: 32, borderRadius: '50%', border: 'none', background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white', fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, boxShadow: '0 4px 12px rgba(212,130,26,0.3)' }}>+</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cart / Order Summary */}
        <div style={{ position: 'sticky', top: 80 }}>
          {orderPlaced ? (
            <div style={{ background: 'white', borderRadius: 24, padding: '48px 32px', textAlign: 'center', boxShadow: '0 20px 60px rgba(28,26,24,0.1)' }}>
              <div style={{ fontSize: 64, marginBottom: 20 }}>📞</div>
              <h3 style={{ fontSize: 24, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 12 }}>Order Summary</h3>
              <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.6, marginBottom: 20 }}>
                Please call to confirm your order:
              </p>
              <a href="tel:0167442200" style={{
                display: 'inline-block', padding: '14px 32px', borderRadius: 14,
                background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                fontSize: 20, fontWeight: 800, textDecoration: 'none', letterSpacing: '0.02em',
                boxShadow: '0 8px 24px rgba(212,130,26,0.35)', marginBottom: 24,
              }}>
                0167-44-2200
              </a>
              <div style={{ background: '#FDF8F0', borderRadius: 16, padding: '20px', marginBottom: 24, textAlign: 'left' }}>
                {cart.map(item => (
                  <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, fontSize: 14, color: '#1C1A18' }}>
                    <span>{item.name} x{item.qty}</span>
                    <span style={{ fontWeight: 600 }}>¥{(item.price * item.qty).toLocaleString()}</span>
                  </div>
                ))}
                <div style={{ borderTop: '2px solid rgba(212,130,26,0.2)', marginTop: 12, paddingTop: 12, display: 'flex', justifyContent: 'space-between', fontSize: 16, fontWeight: 800, color: '#D4821A' }}>
                  <span>Total</span>
                  <span>¥{total.toLocaleString()}</span>
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#6B5E4E', lineHeight: 1.6 }}>
                Tell the staff your items when you call.<br />
                Ready for pickup in 20-30 minutes.
              </p>
              <button
                onClick={() => { setOrderPlaced(false); setCart([]); }}
                style={{
                  marginTop: 20, padding: '12px 28px', borderRadius: 10,
                  border: '1.5px solid #D4821A', background: 'transparent',
                  color: '#D4821A', fontSize: 14, fontWeight: 600, cursor: 'pointer',
                }}
              >
                New Order
              </button>
            </div>
          ) : (
            <div style={{ background: 'white', borderRadius: 24, padding: '32px', boxShadow: '0 20px 60px rgba(28,26,24,0.1)', border: '1px solid rgba(212,130,26,0.08)' }}>
              <h2 style={{ fontSize: 22, fontWeight: 700, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 24 }}>Your Order</h2>

              {/* Pickup Only Badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '8px 16px', borderRadius: 8,
                background: '#FDF8F0', color: '#D4821A',
                fontWeight: 600, fontSize: 14, marginBottom: 24,
              }}>
                Pickup Only
              </div>

              {cart.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '40px 0', color: '#C4B5A0' }}>
                  <div style={{ fontSize: 48, marginBottom: 12 }}>🛒</div>
                  <p style={{ fontSize: 15 }}>Your cart is empty</p>
                  <p style={{ fontSize: 13, marginTop: 4 }}>Add items from the menu</p>
                </div>
              ) : (
                <>
                  <div style={{ marginBottom: 20 }}>
                    {cart.map(item => (
                      <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(212,130,26,0.08)' }}>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{ fontSize: 14, fontWeight: 600, color: '#1C1A18' }}>{item.name}</div>
                          <div style={{ fontSize: 13, color: '#C4B5A0' }}>x{item.qty}</div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                          <span style={{ fontSize: 15, fontWeight: 700, color: '#D4821A' }}>¥{(item.price * item.qty).toLocaleString()}</span>
                          <button onClick={() => removeFromCart(item.name)} style={{
                            width: 24, height: 24, borderRadius: '50%', border: '1.5px solid #E8E0D8',
                            background: 'transparent', color: '#C4B5A0', fontSize: 14, cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                          }}>x</button>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 18, fontWeight: 800, color: '#1C1A18', marginBottom: 24, paddingTop: 4 }}>
                    <span>Total</span>
                    <span style={{ color: '#D4821A' }}>¥{total.toLocaleString()}</span>
                  </div>

                  <form onSubmit={handleOrder}>
                    <button type="submit" style={{
                      width: '100%', padding: '16px', borderRadius: 14,
                      background: 'linear-gradient(135deg, #D4821A, #F0A830)', color: 'white',
                      border: 'none', fontSize: 16, fontWeight: 700, cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(212,130,26,0.35)',
                    }}>
                      Place Order — ¥{total.toLocaleString()}
                    </button>
                    <p style={{ fontSize: 12, color: '#C4B5A0', textAlign: 'center', marginTop: 10 }}>
                      You will be prompted to call 0167-44-2200 to confirm
                    </p>
                  </form>
                </>
              )}

              <p style={{ fontSize: 13, color: '#C4B5A0', textAlign: 'center', marginTop: 16 }}>
                Or call us directly: <a href="tel:0167442200" style={{ color: '#D4821A', fontWeight: 600, textDecoration: 'none' }}>0167-44-2200</a>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
