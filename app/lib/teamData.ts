'use client';
import { useEffect, useState } from 'react';

/**
 * "Meet the Team" on the About page.
 *
 * Staff join and leave often enough that the owner asked to manage this
 * himself, so it follows the same shape as menuData.ts: the list below is only
 * the fallback baked into the static export, and /team-data/team.json (written
 * by admin/team.php) is the live one.
 *
 * ⚠️ Run scripts/sync-team.mjs before rebuilding, or the build puts former
 * staff back on the page.
 */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  roleJa: string;
  desc: string;
  descJa: string;
  /** Shown when there is no photo. */
  emoji: string;
  /** URL of an uploaded photo. Empty = fall back to the emoji circle. */
  photo: string;
  /** false = hidden from the page without deleting the record. */
  available: boolean;
};

export const TEAM_JSON_URL = '/team-data/team.json';

export const FALLBACK_TEAM: TeamMember[] = [
  {"id":"shreesh-bharat-kumar","name":"KHATRI KRISHNA","role":"Owner & Manager","roleJa":"経営者兼店長","desc":"As the Owner & Store Manager of Nepal Dining, I oversee the restaurant’s daily operations.\r\nI value authentic Nepalese & Indian cuisine and warm hospitality.\r\nUsing fresh Hokkaido ingredients, I continuously improve our menu and services.\r\nMy goal is to create a restaurant loved by locals and visitors alike.","descJa":"ネパールダイニングの経営者兼店長として、店舗運営を担当しています。\r\n本格的なネパール・インド料理と心温まるサービスを大切にしています。\r\n北海道の食材を活かし、常にメニューとサービスの向上に努めています。\r\n地域のお客様と観光客に愛されるお店を目指しています。","emoji":"👤","photo":"","available":true},
  {"id":"khatri-narayan","name":"KHATRI NARAYAN","role":"Head Chef","roleJa":"ヘッドシェフ","desc":"Born in a small village in Nepal, Narayan brings over 13 years of culinary experience and tradition to every dish. His passion for authentic Nepalese and Indian cuisine, combined with treasured family recipes passed down through generations, forms the heart of Nepal Dining's menu.","descJa":"ネパールの小さな村で生まれたナラヤンは、13年以上の料理経験と伝統をすべての料理に注ぎ込んでいます。本格的なネパール・インド料理への情熱と、代々受け継がれてきた家族のレシピが、ネパールダイニングのメニューの核心を形作っています。","emoji":"👨‍🍳","photo":"","available":true},
  {"id":"tamang-anupraj","name":"TAMANG ANUPRAJ","role":"Cook","roleJa":"クック","desc":"Anupraj joined Nepal Dining in late 2025 and specializes in authentic Nepali cuisine and our signature handmade momos. His attention to traditional cooking methods and quality ingredients helps bring the genuine flavors of Nepal to every meal he prepares.","descJa":"アヌプラジは2025年末にネパールダイニングに加わり、本格的なネパール料理と当店の看板メニューである手作りモモを専門としています。伝統的な調理法と質の高い食材へのこだわりが、すべての料理に本物のネパールの味わいを届けます。","emoji":"👨‍🍳","photo":"","available":true},
  {"id":"khatri-asmita","name":"KHATRI ASMITA","role":"Hall Staff","roleJa":"ホールスタッフ","desc":"Asmita supports the daily hall operations at Nepal Dining and helps ensure a smooth and welcoming dining experience for our guests. Although not a full-time staff member, she plays an important role in managing hall service, assisting customers, and maintaining our hospitality standards. Her dedication and friendly approach help create a comfortable atmosphere for both local residents and visitors.","descJa":"アスミタはネパールダイニングの日常のホール業務をサポートし、お客様にスムーズで温かいお食事体験を提供しています。フルタイムスタッフではありませんが、ホールサービスの管理、お客様のサポート、おもてなしの基準の維持に重要な役割を果たしています。","emoji":"👩","photo":"","available":true},
];;;;;;;;;;;;

function sanitise(raw: unknown): TeamMember[] | null {
  if (!Array.isArray(raw)) return null;
  const list = raw
    .filter((m): m is Partial<TeamMember> => !!m && typeof m === 'object' && typeof m.name === 'string' && m.name.trim() !== '')
    .map((m, n): TeamMember => ({
      id: m.id || `member-${n}`,
      name: m.name!,
      role: m.role || '',
      roleJa: m.roleJa || m.role || '',
      desc: m.desc || '',
      descJa: m.descJa || m.desc || '',
      emoji: m.emoji || '👤',
      photo: m.photo || '',
      available: m.available !== false,
    }))
    .filter(m => m.available);
  // An empty team file leaves the section headed but blank, which looks broken.
  // Better to keep showing the last known good list.
  return list.length ? list : null;
}

export function useTeam(): TeamMember[] {
  const [team, setTeam] = useState<TeamMember[]>(FALLBACK_TEAM.filter(m => m.available));

  useEffect(() => {
    let live = true;
    fetch(TEAM_JSON_URL, { cache: 'no-store' })
      .then(r => (r.ok ? r.json() : null))
      .then(json => {
        const clean = sanitise(json);
        if (live && clean) setTeam(clean);
      })
      .catch(() => { /* not deployed yet — fallback is fine */ });
    return () => { live = false; };
  }, []);

  return team;
}
