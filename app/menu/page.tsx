'use client';
import { useState } from 'react';
import { useLang } from '../lib/LanguageContext';
import { useMenuData, SPICE_LEVELS as spiceLevels, TAG_COLORS as tagColors } from '../lib/menuData';

export default function MenuPage() {
  const { t, lang } = useLang();
  // Live list from /menu-data/menu.json (written by admin/menu.php), falling
  // back to the copy baked into the build. See app/lib/menuData.ts.
  const menu = useMenuData();
  const menuItems = menu.items;
  const naanRiceOptions = menu.options.naanRice;
  const categories = ['All', ...menu.categories.map(c => c.key)];
  const categoriesJa = ['すべて', ...menu.categories.map(c => c.ja)];

  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedItem, setExpandedItem] = useState<number | null>(null);
  const [selectedSpice, setSelectedSpice] = useState<Record<number, number>>({});
  const [selectedLarge, setSelectedLarge] = useState<Record<number, boolean>>({});
  const [selectedNaanRice, setSelectedNaanRice] = useState<Record<number, number>>({});

  const filtered = activeCategory === 'All' || !categories.includes(activeCategory)
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
            const basePrice = item.price + (isLarge && item.hasLargePortion ? menu.options.largeExtra : 0) + (item.hasNaanRice ? naanRiceOptions[naanRice].extra : 0);

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
                        {lang === 'ja' ? `大盛り +¥${menu.options.largeExtra}` : `Large Portion +¥${menu.options.largeExtra}`}
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
                            {lang === 'ja' ? `大盛り +¥${menu.options.largeExtra}` : `Large +¥${menu.options.largeExtra}`}
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
