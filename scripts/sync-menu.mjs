/**
 * Pull the live menu back into the build.
 *
 * The owner edits /menu-data/menu.json through admin/menu.php. The copy inside
 * app/lib/menuData.ts is only the fallback that ships in the static HTML, so
 * rebuilding without running this first would put his old prices back into the
 * pre-rendered pages (they self-correct once the fetch lands, but Google reads
 * the HTML, and visitors see a flash of the wrong price).
 *
 *   node scripts/sync-menu.mjs     # then npm run build
 */
import fs from 'node:fs';
import path from 'node:path';

const URL_ = process.env.MENU_URL || 'https://nepaldining.online/menu-data/menu.json';
const FILE = path.join(process.cwd(), 'app/lib/menuData.ts');

const res = await fetch(URL_, { cache: 'no-store' });
if (!res.ok) throw new Error(`${URL_} → HTTP ${res.status}`);
const live = await res.json();

if (!Array.isArray(live.items) || live.items.length === 0) {
  throw new Error('live menu.json has no items — refusing to overwrite the fallback');
}

const src = fs.readFileSync(FILE, 'utf8');
const start = src.indexOf('export const FALLBACK_MENU: MenuData = {');
const end = src.indexOf('\n};', start);
if (start === -1 || end === -1) throw new Error('FALLBACK_MENU block not found in menuData.ts');

const cats = live.categories.map(c => `    { key: ${JSON.stringify(c.key)}, ja: ${JSON.stringify(c.ja)} },`).join('\n');
const naan = live.options.naanRice
  .map(o => `      { en: ${JSON.stringify(o.en)}, ja: ${JSON.stringify(o.ja)}, extra: ${Number(o.extra) || 0} },`)
  .join('\n');
const items = live.items.map(i => '    ' + JSON.stringify({
  id: i.id, cat: i.cat, name: i.name, nameJa: i.nameJa, price: Number(i.price) || 0,
  desc: i.desc || '', descJa: i.descJa || '', tag: i.tag || '', tagJa: i.tagJa || '',
  img: i.img || '', spice: Number(i.spice) || 0,
  hasNaanRice: !!i.hasNaanRice, hasLargePortion: !!i.hasLargePortion,
  available: i.available !== false,
}) + ',').join('\n');

const block = `export const FALLBACK_MENU: MenuData = {
  categories: [
${cats}
  ],
  options: {
    largeExtra: ${Number(live.options.largeExtra) || 200},
    naanRice: [
${naan}
    ],
  },
  items: [
${items}
  ],
};`;

fs.writeFileSync(FILE, src.slice(0, start) + block + src.slice(end + 2));
console.log(`synced ${live.items.length} items from ${URL_} (updated ${live.updated || 'unknown'})`);
