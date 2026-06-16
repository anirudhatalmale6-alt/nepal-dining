'use client';
import Link from 'next/link';
import { useLang } from '../lib/LanguageContext';

const blogPosts = [
  {
    slug: 'best-curry-hokkaido',
    title: { en: 'The Best Curry in Hokkaido: Why Furano Visitors Always Come Back', ja: '北海道で最高のカレー：富良野を訪れる人がリピートする理由' },
    date: { en: 'May 2025', ja: '2025年5月' },
    tag: { en: 'Food', ja: 'グルメ' },
    excerpt: { en: 'Furano has become one of Japan\'s most beloved tourist destinations, known for its spectacular lavender fields and crisp mountain air. But for those in the know, there\'s another reason to make the journey north: the curry.', ja: '富良野は日本で最も人気のある観光地の一つとなり、美しいラベンダー畑と爽やかな山の空気で知られています。しかし、知る人ぞ知る理由がもう一つあります：カレーです。' },
    img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=75',
    readTime: '5 min read',
  },
  {
    slug: 'lavender-season-guide',
    title: { en: 'Lavender Season in Furano: A Complete Dining Guide for 2025', ja: '2025年富良野ラベンダーシーズン完全ダイニングガイド' },
    date: { en: 'Apr 2025', ja: '2025年4月' },
    tag: { en: 'Travel', ja: '旅行' },
    excerpt: { en: 'Every July, the hills of Furano and Nakafurano transform into an ocean of purple. If you\'re planning your lavender pilgrimage, here\'s everything you need to know about dining in the area — including our top recommendations.', ja: '毎年7月になると、富良野と中富良野の丘が紫色の海に変わります。ラベンダー巡礼を計画しているなら、このエリアでの食事について知っておくべきことを全て紹介します。' },
    img: 'https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=75',
    readTime: '7 min read',
  },
  {
    slug: 'halal-hokkaido-guide',
    title: { en: 'Halal Dining in Hokkaido: A Guide for Muslim Travelers', ja: '北海道のハラルダイニング：ムスリム旅行者ガイド' },
    date: { en: 'Mar 2025', ja: '2025年3月' },
    tag: { en: 'Guide', ja: 'ガイド' },
    excerpt: { en: 'Hokkaido is increasingly popular with travelers from Malaysia, Indonesia, and the Middle East. Here\'s our honest guide to finding halal-friendly dining in the island prefecture — and how Nepal Dining fits into your itinerary.', ja: '北海道はマレーシア、インドネシア、中東からの旅行者に人気が高まっています。島の県でハラルフレンドリーな食事を見つけるための正直なガイドをお届けします。' },
    img: 'https://images.unsplash.com/photo-1564758866811-4780aa13ab84?w=800&q=75',
    readTime: '6 min read',
  },
  {
    slug: 'nepalese-momo-recipe',
    title: { en: 'What Makes Nepalese Momo Different from Japanese Gyoza?', ja: 'ネパールのモモと日本の餃子の違いとは？' },
    date: { en: 'Feb 2025', ja: '2025年2月' },
    tag: { en: 'Food', ja: 'グルメ' },
    excerpt: { en: 'They look similar at first glance — small dumplings, thin dough, filled with meat. But bite into a Nepalese momo and you\'ll immediately understand why our guests say it\'s unlike anything they\'ve ever tasted.', ja: '一見似ています——小さな餃子、薄い生地、肉が詰まっています。しかしネパールのモモを食べると、なぜゲストが「今まで食べたことのない味」と言うかすぐにわかるでしょう。' },
    img: 'https://images.unsplash.com/photo-1625398407796-82650a8c135f?w=800&q=75',
    readTime: '4 min read',
  },
  {
    slug: 'furano-winter-visit',
    title: { en: 'Furano in Winter: Skiing, Snow, and Soul-Warming Curry', ja: '冬の富良野：スキー、雪、そして体を温めるカレー' },
    date: { en: 'Jan 2025', ja: '2025年1月' },
    tag: { en: 'Travel', ja: '旅行' },
    excerpt: { en: 'Most tourists come to Furano for the summer lavender. Fewer discover that winter Furano — with its ski slopes, pristine snow, and stark beauty — might be even better. And after a day on the mountain, nothing warms you like a bowl of our Soup Curry.', ja: 'ほとんどの観光客は夏のラベンダーを目当てに富良野を訪れます。しかし冬の富良野——スキー場、純白の雪、凛とした美しさ——がさらに素晴らしいことを知る人は少ないです。' },
    img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=800&q=75',
    readTime: '5 min read',
  },
  {
    slug: 'butter-chicken-story',
    title: { en: 'The Story Behind Our Butter Chicken — Japan\'s Most Ordered Dish', ja: '私たちのバターチキンカレーの物語——日本で最も注文される料理' },
    date: { en: 'Dec 2024', ja: '2024年12月' },
    tag: { en: 'Food', ja: 'グルメ' },
    excerpt: { en: 'Butter chicken is one of the world\'s great culinary accidents. Born in Delhi in the 1950s, it has since conquered kitchens across the globe. Here in Furano, it has been our most-ordered dish for 15 consecutive years.', ja: 'バターチキンは世界の偉大な料理上の偶然の産物の一つです。1950年代にデリーで生まれ、その後世界中のキッチンを征服しました。ここ富良野では15年連続で最も注文される料理です。' },
    img: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=800&q=75',
    readTime: '6 min read',
  },
];

export default function BlogPage() {
  const { lang, t } = useLang();
  const tagColors: Record<string, string> = { 'Food': '#D4821A', 'Travel': '#769a00', 'Guide': '#8B7BA8', 'グルメ': '#D4821A', '旅行': '#769a00', 'ガイド': '#8B7BA8' };

  return (
    <div style={{ paddingTop: 80, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Header */}
      <section style={{ padding: '60px 24px 40px', background: 'linear-gradient(135deg, #1C1A18, #2D2820)', textAlign: 'center' }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: '#D4821A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{t.blog.eyebrow}</div>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 12 }}>{t.blog.headline}</h1>
        <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.65)', maxWidth: 500, margin: '0 auto' }}>Food stories, travel guides, and Furano tips from the Nepal Dining kitchen.</p>
      </section>

      {/* Featured Post */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 24px 0' }}>
        <div className="card-hover" style={{ background: 'white', borderRadius: 24, overflow: 'hidden', boxShadow: '0 8px 40px rgba(28,26,24,0.1)', marginBottom: 48 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
            <div style={{ height: 360, overflow: 'hidden' }}>
              <img src={blogPosts[0].img} alt={blogPosts[0].title[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 16 }}>
                <span style={{ background: tagColors[blogPosts[0].tag[lang]] || '#D4821A', color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 12px', borderRadius: 12 }}>{blogPosts[0].tag[lang]}</span>
                <span style={{ fontSize: 12, color: '#C4B5A0' }}>{blogPosts[0].date[lang]}</span>
                <span style={{ fontSize: 12, color: '#C4B5A0' }}>• {blogPosts[0].readTime}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 28px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', lineHeight: 1.3, marginBottom: 16 }}>{blogPosts[0].title[lang]}</h2>
              <p style={{ fontSize: 15, color: '#6B5E4E', lineHeight: 1.8, marginBottom: 24 }}>{blogPosts[0].excerpt[lang]}</p>
              <Link href={`/blog/${blogPosts[0].slug}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 14, fontWeight: 700, color: '#D4821A', textDecoration: 'none' }}>
                {t.blog.readMore} <span>→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Grid of posts */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 28, paddingBottom: 80 }}>
          {blogPosts.slice(1).map((post, i) => (
            <article key={i} className="card-hover" style={{ background: 'white', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 20px rgba(28,26,24,0.08)' }}>
              <div style={{ height: 200, overflow: 'hidden' }}>
                <img src={post.img} alt={post.title[lang]} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                  <span style={{ background: tagColors[post.tag[lang]] || '#D4821A', color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 12 }}>{post.tag[lang]}</span>
                  <span style={{ fontSize: 12, color: '#C4B5A0' }}>{post.date[lang]}</span>
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1C1A18', lineHeight: 1.5, marginBottom: 12, fontFamily: 'Georgia, serif' }}>{post.title[lang]}</h3>
                <p style={{ fontSize: 13, color: '#6B5E4E', lineHeight: 1.7, marginBottom: 16 }}>{post.excerpt[lang].slice(0, 120)}...</p>
                <Link href={`/blog/${post.slug}`} style={{ fontSize: 13, fontWeight: 700, color: '#D4821A', textDecoration: 'none' }}>{t.blog.readMore} →</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
