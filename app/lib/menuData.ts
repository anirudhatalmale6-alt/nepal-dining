'use client';
import { useEffect, useState } from 'react';

/**
 * Single source of truth for the food menu.
 *
 * WHY THIS FILE EXISTS
 * The 29 items used to be typed out twice — once in app/menu/page.tsx and again
 * in app/order/page.tsx — so changing one price meant editing two files and the
 * two pages had already drifted apart. Both pages now read from here.
 *
 * HOW THE OWNER EDITS IT
 * The list below is only the FALLBACK, baked into the static export so the page
 * renders (and Google indexes) something on first paint. The live list is
 * /menu-data/menu.json on the server, which admin/menu.php writes. useMenuData()
 * fetches it on mount and replaces the fallback.
 *
 * ⚠️ After the owner edits prices, this fallback is stale until the site is
 * rebuilt — run scripts/sync-menu.mjs first, which pulls the live JSON back into
 * this file. Otherwise a rebuild ships old prices in the static HTML (they still
 * self-correct a moment later when the fetch lands, but it flashes).
 */

export type MenuItem = {
  id: string;
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
  hasNaanRice: boolean;
  hasLargePortion: boolean;
  /** false = temporarily off the menu (sold out). Hidden from both pages. */
  available: boolean;
};

export type MenuCategory = { key: string; ja: string };
export type NaanRiceOption = { en: string; ja: string; extra: number };

export type MenuData = {
  categories: MenuCategory[];
  items: MenuItem[];
  options: { largeExtra: number; naanRice: NaanRiceOption[] };
};

export const MENU_JSON_URL = '/menu-data/menu.json';

export const FALLBACK_MENU: MenuData = {
  categories: [
    { key: "Curry", ja: "カレー" },
    { key: "Soup Curry", ja: "スープカレー" },
    { key: "Naan & Rice", ja: "ナン＆ライス" },
    { key: "Tandoori", ja: "タンドリー" },
    { key: "Sides", ja: "サイド" },
  ],
  options: {
    largeExtra: 200,
    naanRice: [
      { en: "Plain Naan", ja: "プレーンナン", extra: 0 },
      { en: "Garlic Naan", ja: "ガーリックナン", extra: 100 },
      { en: "Cheese Naan", ja: "チーズナン", extra: 150 },
      { en: "Rice", ja: "ライス", extra: 0 },
    ],
  },
  items: [
    {"id":"butter-chicken-curry","cat":"Curry","name":"Butter Chicken Curry","nameJa":"バターチキンカレー","price":1380,"desc":"Tender chicken in velvety tomato-cream sauce.","descJa":"柔らかチキンをクリーミーなトマトソースで煮込んだ当店の一番人気。","tag":"Popular","tagJa":"人気","img":"https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-tikka-masala-curry","cat":"Curry","name":"Chicken Tikka Masala Curry","nameJa":"チキンティッカマサラカレー","price":1380,"desc":"Tikka pieces in rich masala sauce.","descJa":"ティッカをリッチなマサラソースで。","tag":"Best Seller","tagJa":"ベストセラー","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-rara-curry","cat":"Curry","name":"Chicken Rara Curry","nameJa":"チキンララカレー","price":1380,"desc":"Minced and tender chicken in spiced gravy.","descJa":"ミンチと柔らかチキンのスパイシーグレービー。","tag":"Nepalese","tagJa":"ネパール料理","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"mix-seafood-curry","cat":"Curry","name":"Mix Seafood Curry","nameJa":"ミックスシーフードカレー","price":1480,"desc":"Assorted seafood in aromatic curry.","descJa":"シーフードの香り豊かなカレー。","tag":"Premium","tagJa":"プレミアム","img":"https://nepaldining.online/wp-content/uploads/2026/06/mix-seafood-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"prawn-curry","cat":"Curry","name":"Prawn Curry","nameJa":"エビカレー","price":1480,"desc":"Juicy prawns in rich curry sauce.","descJa":"プリプリエビのリッチカレー。","tag":"Premium","tagJa":"プレミアム","img":"https://nepaldining.online/wp-content/uploads/2026/06/prawn-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"dal-mutton-curry","cat":"Curry","name":"Dal Mutton Curry","nameJa":"ダルマトンカレー","price":1480,"desc":"Lentils slow-cooked with tender mutton.","descJa":"レンズ豆と柔らかマトンの煮込み。","tag":"Hearty","tagJa":"ボリューム満点","img":"https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-curry","cat":"Curry","name":"Chicken Curry","nameJa":"チキンカレー","price":1180,"desc":"Classic chicken curry with aromatic spices.","descJa":"定番のチキンカレー、香り豊かなスパイスと。","tag":"Classic","tagJa":"定番","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"mutton-curry","cat":"Curry","name":"Mutton Curry","nameJa":"マトンカレー","price":1280,"desc":"Slow-cooked mutton in aromatic spices.","descJa":"ホールスパイスで煮込んだ柔らかマトン。","tag":"House Special","tagJa":"ハウスペシャル","img":"https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"mutton-sag-curry","cat":"Curry","name":"Mutton Sag Curry","nameJa":"マトンサグカレー","price":1280,"desc":"Mutton with fresh spinach gravy.","descJa":"マトンとほうれん草のグレービー。","tag":"Signature","tagJa":"シグネチャー","img":"https://nepaldining.online/wp-content/uploads/2026/06/mutton-sag-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-sag-curry","cat":"Curry","name":"Chicken Sag Curry","nameJa":"チキンサグカレー","price":1280,"desc":"Chicken with fresh spinach gravy.","descJa":"チキンとほうれん草のグレービー。","tag":"Healthy","tagJa":"ヘルシー","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-sag-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"keema-egg-curry","cat":"Curry","name":"Keema Egg Curry","nameJa":"キーマエッグカレー","price":1280,"desc":"Minced meat with boiled eggs in spiced sauce.","descJa":"キーマとゆで卵のスパイシーソース。","tag":"Unique","tagJa":"ユニーク","img":"https://nepaldining.online/wp-content/uploads/2026/06/keema-egg-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"sag-keema-curry","cat":"Curry","name":"Sag Keema Curry","nameJa":"サグキーマカレー","price":1280,"desc":"Spinach with spiced minced meat.","descJa":"ほうれん草とスパイシーキーマ。","tag":"Healthy","tagJa":"ヘルシー","img":"https://nepaldining.online/wp-content/uploads/2026/06/sag-keema-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"dal-chicken-curry","cat":"Curry","name":"Dal Chicken Curry","nameJa":"ダルチキンカレー","price":1280,"desc":"Lentils with tender chicken pieces.","descJa":"レンズ豆と柔らかチキン。","tag":"Hearty","tagJa":"ボリューム満点","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"mutton-vegetable-curry","cat":"Curry","name":"Mutton Vegetable Curry","nameJa":"マトン野菜カレー","price":1280,"desc":"Mutton with seasonal vegetables.","descJa":"マトンと季節の野菜。","tag":"Seasonal","tagJa":"季節限定","img":"https://nepaldining.online/wp-content/uploads/2026/06/mutton-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-cheese-curry","cat":"Curry","name":"Chicken Cheese Curry","nameJa":"チキンチーズカレー","price":1280,"desc":"Creamy cheese and chicken curry.","descJa":"クリーミーチーズとチキンのカレー。","tag":"Creamy","tagJa":"クリーミー","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"eggplant-chicken-curry","cat":"Curry","name":"Eggplant Chicken Curry","nameJa":"ナスチキンカレー","price":1280,"desc":"Eggplant with tender chicken.","descJa":"ナスと柔らかチキン。","tag":"Classic","tagJa":"定番","img":"https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"eggplant-keema-curry","cat":"Curry","name":"Eggplant Keema Curry","nameJa":"ナスキーマカレー","price":1280,"desc":"Eggplant with spiced minced meat.","descJa":"ナスとスパイシーキーマ。","tag":"Unique","tagJa":"ユニーク","img":"https://nepaldining.online/wp-content/uploads/2026/06/eggplant-keema-curry.jpg","spice":2,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"mix-vegetable-curry","cat":"Curry","name":"Mix Vegetable Curry","nameJa":"ミックス野菜カレー","price":1280,"desc":"Assorted vegetables in curry sauce.","descJa":"ミックス野菜のカレー。","tag":"Vegetarian","tagJa":"ベジタリアン","img":"https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-vegetable-curry","cat":"Curry","name":"Chicken & Vegetable Curry","nameJa":"チキン野菜カレー","price":1280,"desc":"Chicken with seasonal vegetables.","descJa":"チキンと季節の野菜。","tag":"Seasonal","tagJa":"季節限定","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"momo-vegetable-soup-curry","cat":"Soup Curry","name":"Momo & Vegetable Soup Curry","nameJa":"モモ野菜スープカレー","price":1380,"desc":"Hokkaido style with momo and vegetables.","descJa":"北海道スタイル、モモと野菜。","tag":"Hokkaido Special","tagJa":"北海道スペシャル","img":"https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"mix-vegetable-soup-curry","cat":"Soup Curry","name":"Mix Vegetable Soup Curry","nameJa":"ミックス野菜スープカレー","price":1380,"desc":"Hokkaido style with assorted vegetables.","descJa":"北海道スタイル、ミックス野菜。","tag":"Hokkaido Special","tagJa":"北海道スペシャル","img":"https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-soup-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"chicken-vegetable-soup-curry","cat":"Soup Curry","name":"Chicken & Vegetable Soup Curry","nameJa":"チキン野菜スープカレー","price":1380,"desc":"Hokkaido style with chicken and vegetables.","descJa":"北海道スタイル、チキンと野菜。","tag":"Hokkaido Special","tagJa":"北海道スペシャル","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg","spice":1,"hasNaanRice":true,"hasLargePortion":true,"available":true},
    {"id":"rice","cat":"Naan & Rice","name":"Rice","nameJa":"ライス","price":250,"desc":"Steamed basmati rice.","descJa":"バスマティライス。","tag":"Essential","tagJa":"必需品","img":"https://nepaldining.online/wp-content/uploads/2026/06/rice.jpg","spice":0,"hasNaanRice":false,"hasLargePortion":false,"available":true},
    {"id":"plain-naan","cat":"Naan & Rice","name":"Plain Naan","nameJa":"プレーンナン","price":350,"desc":"Classic leavened bread from tandoor.","descJa":"タンドール窯焼きの定番ナン。","tag":"Classic","tagJa":"定番","img":"https://nepaldining.online/wp-content/uploads/2026/06/plain-naan.jpg","spice":0,"hasNaanRice":false,"hasLargePortion":false,"available":true},
    {"id":"garlic-naan","cat":"Naan & Rice","name":"Garlic Naan","nameJa":"ガーリックナン","price":450,"desc":"Fresh baked with garlic butter.","descJa":"ガーリックバターで焼き上げ。","tag":"Popular","tagJa":"人気","img":"https://nepaldining.online/wp-content/uploads/2026/06/garlic-naan.jpg","spice":0,"hasNaanRice":false,"hasLargePortion":false,"available":true},
    {"id":"cheese-naan","cat":"Naan & Rice","name":"Cheese Naan","nameJa":"チーズナン","price":500,"desc":"Stuffed with creamy cheese, baked golden.","descJa":"クリーミーチーズ入り、黄金色に焼き上げ。","tag":"Fan Favorite","tagJa":"人気No.1","img":"https://nepaldining.online/wp-content/uploads/2026/06/cheese-naan.jpg","spice":0,"hasNaanRice":false,"hasLargePortion":false,"available":true},
    {"id":"chicken-tikka-6pc","cat":"Tandoori","name":"Chicken Tikka (6pc)","nameJa":"チキンティッカ（6個）","price":880,"desc":"Marinated chicken, char-grilled in tandoor.","descJa":"タンドール窯で焼き上げたマリネチキン。","tag":"Tandoor Fresh","tagJa":"タンドール焼き","img":"https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg","spice":2,"hasNaanRice":false,"hasLargePortion":true,"available":true},
    {"id":"tandoori-chicken","cat":"Tandoori","name":"Tandoori Chicken","nameJa":"タンドリーチキン","price":980,"desc":"Half chicken marinated in yogurt and spices.","descJa":"ヨーグルトとスパイスでマリネした半身チキン。","tag":"Signature","tagJa":"シグネチャー","img":"https://nepaldining.online/wp-content/uploads/2026/06/tandoori-chicken.jpg","spice":2,"hasNaanRice":false,"hasLargePortion":true,"available":true},
    {"id":"momo-6pc","cat":"Sides","name":"Momo (6pc)","nameJa":"モモ（6個）","price":780,"desc":"Traditional Nepalese dumplings with spiced filling.","descJa":"伝統的なネパール餃子、スパイス入り。","tag":"Nepalese","tagJa":"ネパール料理","img":"https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg","spice":1,"hasNaanRice":false,"hasLargePortion":false,"available":true},
  ],
};;

export const SPICE_LEVELS = [
  { en: 'Mild', ja: 'マイルド', color: '#27AE60', icon: '🌶' },
  { en: 'Medium', ja: '中辛', color: '#F39C12', icon: '🌶🌶' },
  { en: 'Hot', ja: '辛口', color: '#E67E22', icon: '🌶🌶🌶' },
  { en: 'Very Hot', ja: '大辛', color: '#E74C3C', icon: '🌶🌶🌶🌶' },
  { en: 'Extra Hot', ja: '激辛', color: '#8B0000', icon: '🌶🌶🌶🌶🌶' },
];

export const TAG_COLORS: Record<string, string> = {
  'Popular': '#769a00', 'Best Seller': '#D4821A', 'Nepalese': '#8B7BA8', 'Premium': '#C0392B',
  'Hearty': '#E67E22', 'Classic': '#6B5E4E', 'House Special': '#C0392B', 'Signature': '#769a00',
  'Healthy': '#27AE60', 'Unique': '#8B7BA8', 'Seasonal': '#4A90E2', 'Creamy': '#D4821A',
  'Vegetarian': '#27AE60', 'Hokkaido Special': '#4A90E2', 'Essential': '#6B5E4E',
  'Fan Favorite': '#D4821A', 'Tandoor Fresh': '#E67E22',
};

/** Defends against a hand-edited or half-written menu.json taking the pages down. */
function sanitise(raw: unknown): MenuData | null {
  if (!raw || typeof raw !== 'object') return null;
  const d = raw as Partial<MenuData>;
  if (!Array.isArray(d.items) || d.items.length === 0) return null;

  const items = d.items
    .filter(i => i && typeof i.name === 'string' && i.name.trim() !== '')
    .map((i, n): MenuItem => ({
      id: typeof i.id === 'string' && i.id ? i.id : `item-${n}`,
      cat: i.cat || 'Curry',
      name: i.name,
      nameJa: i.nameJa || i.name,
      price: Number(i.price) || 0,
      desc: i.desc || '',
      descJa: i.descJa || i.desc || '',
      tag: i.tag || '',
      tagJa: i.tagJa || i.tag || '',
      img: i.img || '',
      spice: Math.max(0, Math.min(5, Number(i.spice) || 0)),
      hasNaanRice: !!i.hasNaanRice,
      hasLargePortion: !!i.hasLargePortion,
      // Only an explicit false hides an item, so an older JSON without the
      // field doesn't blank the whole menu.
      available: i.available !== false,
    }))
    .filter(i => i.available);

  if (items.length === 0) return null;

  // Categories come from the file when present, but any category an item uses
  // is appended regardless — otherwise a new category's items become
  // unreachable behind the filter bar.
  const cats: MenuCategory[] = Array.isArray(d.categories)
    ? d.categories.filter(c => c && typeof c.key === 'string').map(c => ({ key: c.key, ja: c.ja || c.key }))
    : [];
  for (const i of items) {
    if (!cats.some(c => c.key === i.cat)) cats.push({ key: i.cat, ja: i.cat });
  }

  const naan = Array.isArray(d.options?.naanRice) && d.options.naanRice.length
    ? d.options.naanRice.map(o => ({ en: o.en, ja: o.ja || o.en, extra: Number(o.extra) || 0 }))
    : FALLBACK_MENU.options.naanRice;

  return {
    categories: cats,
    items,
    options: {
      largeExtra: Number(d.options?.largeExtra) || FALLBACK_MENU.options.largeExtra,
      naanRice: naan,
    },
  };
}

const AVAILABLE_FALLBACK: MenuData = {
  ...FALLBACK_MENU,
  items: FALLBACK_MENU.items.filter(i => i.available),
};

/**
 * Live menu, falling back to the baked-in list.
 *
 * The first render deliberately returns the fallback so the client render
 * matches the pre-rendered HTML — swapping data in before hydration would throw
 * React #418, which this site has been bitten by before.
 */
export function useMenuData(): MenuData {
  const [data, setData] = useState<MenuData>(AVAILABLE_FALLBACK);

  useEffect(() => {
    let live = true;
    fetch(MENU_JSON_URL, { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(json => {
        const clean = sanitise(json);
        if (live && clean) setData(clean);
      })
      .catch(() => { /* offline or not deployed yet — the fallback is fine */ });
    return () => { live = false; };
  }, []);

  return data;
}
