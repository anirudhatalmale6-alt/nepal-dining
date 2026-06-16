'use client';

import { useLang } from "../../lib/LanguageContext";
import Link from 'next/link';

const posts: Record<string, {
  en: { title: string; date: string; tag: string; content: string[] };
  ja: { title: string; date: string; tag: string; content: string[] };
  image: string;
}> = {
  'best-curry-hokkaido': {
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg',
    en: {
      title: 'The Best Curry in Hokkaido: Why Furano Visitors Always Come Back',
      date: 'May 2025',
      tag: 'Food',
      content: [
        "Hokkaido is famous for its pristine nature, lavender fields, and world-class dairy — but increasingly, visitors to the Furano region are discovering another reason to return: the extraordinary curry at Nepal Dining in Nakafurano.",
        "Tucked just minutes from the iconic lavender farms, Nepal Dining has built a devoted following among Japanese locals and international tourists alike. The secret? Uncompromising authenticity. Every spice blend is imported directly from Nepal and India, and the kitchen has never taken shortcuts.",
        "The Butter Chicken here is a revelation — silky, richly spiced, and balanced with a natural sweetness from slow-cooked tomatoes and fresh cream. Pair it with a fresh-baked Cheese Naan from the tandoor oven, and you have one of the most satisfying meals in all of Hokkaido.",
        "But what makes Nepal Dining truly special is its warmth. The staff greet every guest — whether Japanese, English-speaking, or anywhere in between — with genuine hospitality.",
        "If you're planning a trip to Furano this summer, do yourself a favor: make a reservation at Nepal Dining. Your palate will thank you.",
      ],
    },
    ja: {
      title: '北海道最高のカレー：富良野を訪れる旅行者がリピートする理由',
      date: '2025年5月',
      tag: 'グルメ',
      content: [
        "北海道は豊かな自然、ラベンダー畑、そして高品質な乳製品で有名ですが、富良野エリアを訪れる旅行者の間でもう一つの楽しみが広まっています。それが、中富良野にあるネパールダイニングの本格カレーです。",
        "アイコニックなラベンダー農園からすぐのところにあるネパールダイニングは、地元の日本人客と国際的な旅行者の両方から熱烈な支持を集めています。",
        "バターチキンは格別で、なめらかでスパイスが豊かに香り、ゆっくり煮込んだトマトと生クリームの自然な甘みが絶妙なバランスをもたらしています。",
        "しかしネパールダイニングを真に特別たらしめているのは、その温かさです。すべてのお客様を心からのおもてなしで迎えてくれます。",
        "今夏、富良野への旅を計画しているなら、ぜひネパールダイニングにご予約を。",
      ],
    },
  },
  'lavender-season-dining': {
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg',
    en: {
      title: 'Lavender Season in Furano: A Complete Dining Guide for 2025',
      date: 'Apr 2025',
      tag: 'Travel',
      content: [
        "Every July, the hills around Furano and Nakafurano explode in purple — thousands of hectares of lavender in full bloom.",
        "But between lavender walks and farm visits, travelers need fuel. And that's where Nepal Dining comes in.",
        "During lavender season, we recommend arriving early for lunch (the kitchen opens at 11:30) to beat the midday rush. The Soup Curry is a must-try — a Hokkaido specialty.",
        "For dinner, the tandoori specialties — chicken tikka, tandoori chicken, and freshly baked naan — make for an unforgettable evening.",
        "Pro tip: Book at least two weeks in advance during July and August.",
      ],
    },
    ja: {
      title: '富良野のラベンダーシーズン：2025年版グルメ完全ガイド',
      date: '2025年4月',
      tag: 'トラベル',
      content: [
        "毎年7月、富良野・中富良野の丘は紫色に染まります。",
        "ラベンダー散策やファーム見学の合間には食事も欠かせません。そこで登場するのがネパールダイニングです。",
        "ラベンダーシーズン中は、ランチの混雑を避けるため早めの来店をおすすめします。スープカレーは必食です。",
        "ディナーはさらに充実。タンドリーチキン、チキンティッカ、そして各種ナンをお楽しみいただけます。",
        "プロのアドバイス：7〜8月は少なくとも2週間前には予約を。",
      ],
    },
  },
  'halal-dining-hokkaido': {
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg',
    en: {
      title: 'Halal Dining in Hokkaido: A Guide for Muslim Travelers',
      date: 'Mar 2025',
      tag: 'Guide',
      content: [
        "Finding halal-friendly restaurants in rural Japan can be challenging. But in the Furano-Nakafurano area, Muslim travelers have a reliable destination: Nepal Dining.",
        "Nepal Dining's kitchen follows halal preparation principles rooted in Nepalese culinary tradition.",
        "The menu offers a wide range of dishes suitable for halal dining, including Butter Chicken, Chicken Tikka, Vegetable Curry, and a selection of naan breads.",
        "For Muslim travelers visiting Hokkaido's iconic lavender country, Nepal Dining provides not just a meal, but genuine South Asian hospitality.",
        "We always recommend calling ahead to confirm your specific dietary requirements.",
      ],
    },
    ja: {
      title: '北海道でのハラールグルメ：ムスリム旅行者向けガイド',
      date: '2025年3月',
      tag: 'ガイド',
      content: [
        "日本の地方でハラールに対応したレストランを見つけるのは容易ではありません。しかし富良野エリアではネパールダイニングがあります。",
        "ネパールダイニングの厨房は、ネパール料理の伝統に根ざしたハラール対応の調理方針を守っています。",
        "ハラールに対応したメニューは豊富で、バターチキン、チキンティッカ、野菜カレー、各種ナンなどをお楽しみいただけます。",
        "北海道のラベンダーの郷を訪れるムスリムの方々にとって、ネパールダイニングは心温まる場所です。",
        "ご来店前にお電話にてご要望をお知らせいただければ、より万全の対応が可能です。",
      ],
    },
  },
};

export default function BlogPostClient({ slug }: { slug: string }) {
  const { lang } = useLang();
  const post = posts[slug] || posts['best-curry-hokkaido'];
  const content = post[lang];

  return (
    <main style={{ paddingTop: 80 }}>
      <section style={{ position: 'relative', height: '60vh', minHeight: 400, overflow: 'hidden' }}>
        <img src={post.image} alt={content.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.3), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px', maxWidth: 800, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', padding: '4px 12px', background: '#D4821A', color: 'white', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', borderRadius: 20, marginBottom: 16 }}>{content.tag}</span>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 48px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.2, marginBottom: 12 }}>{content.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>{content.date}</p>
        </div>
      </section>
      <section style={{ padding: '64px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          {content.content.map((paragraph, i) => (
            <p key={i} style={{ color: '#3D3530', fontSize: 17, lineHeight: 1.8, marginBottom: 24 }}>{paragraph}</p>
          ))}
          <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid #E8D5B7' }}>
            <Link href="/blog" style={{ color: '#D4821A', fontWeight: 600, textDecoration: 'none', fontSize: 15 }}>
              ← {lang === 'en' ? 'Back to Blog' : 'ブログ一覧へ'}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
