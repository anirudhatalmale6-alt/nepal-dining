/**
 * Pull the live team list back into the build.
 *
 * Companion to sync-menu.mjs — same reason: FALLBACK_TEAM in app/lib/teamData.ts
 * is only what ships in the static HTML, while the owner's edits live in
 * /team-data/team.json. Rebuilding without this puts former staff back on the
 * About page until the runtime fetch lands.
 *
 *   node scripts/sync-team.mjs && node scripts/sync-menu.mjs   # then npm run build
 */
import fs from 'node:fs';
import path from 'node:path';

const URL_ = process.env.TEAM_URL || 'https://nepaldining.online/team-data/team.json';
const FILE = path.join(process.cwd(), 'app/lib/teamData.ts');

const res = await fetch(URL_, { cache: 'no-store' });
if (!res.ok) throw new Error(`${URL_} → HTTP ${res.status}`);
const live = await res.json();

if (!Array.isArray(live) || live.length === 0) {
  throw new Error('live team.json is empty — refusing to overwrite the fallback');
}

const src = fs.readFileSync(FILE, 'utf8');
const start = src.indexOf('export const FALLBACK_TEAM: TeamMember[] = [');
const end = src.indexOf('\n];', start);
if (start === -1 || end === -1) throw new Error('FALLBACK_TEAM block not found in teamData.ts');

const rows = live.map(m => '  ' + JSON.stringify({
  id: m.id, name: m.name,
  role: m.role || '', roleJa: m.roleJa || '',
  desc: m.desc || '', descJa: m.descJa || '',
  emoji: m.emoji || '👤', photo: m.photo || '',
  available: m.available !== false,
}) + ',').join('\n');

const block = `export const FALLBACK_TEAM: TeamMember[] = [\n${rows}\n];`;
fs.writeFileSync(FILE, src.slice(0, start) + block + src.slice(end + 2));
console.log(`synced ${live.length} team members from ${URL_}`);
