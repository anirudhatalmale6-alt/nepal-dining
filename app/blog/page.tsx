'use client';
import { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useLang } from '../lib/LanguageContext';
import { blogPosts as staticPosts, CATEGORIES, CATEGORY_COLORS, type Category, type BlogPost } from '../lib/blogData';

const PER_PAGE = 6;
const STATIC_SLUGS = new Set(staticPosts.map(p => p.slug));

function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr);
  if (lang === 'ja') {
    return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  }
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

function postUrl(slug: string) {
  return STATIC_SLUGS.has(slug) ? `/blog/${slug}/` : `/blog/${slug}/`;
}

function BlogCard({ post, lang, variant = 'default', priority = false }: { post: BlogPost; lang: 'en' | 'ja'; variant?: 'featured' | 'default' | 'horizontal'; priority?: boolean }) {
  const color = CATEGORY_COLORS[post.category];
  const catName = CATEGORIES[post.category]?.[lang] || post.category;
  const dateStr = formatDate(post.date, lang);
  const href = postUrl(post.slug);

  if (variant === 'featured') {
    return (
      <Link href={href} style={{ display: 'block', position: 'relative', borderRadius: 16, overflow: 'hidden', height: 360, textDecoration: 'none' }}>
        <img src={post.image} alt={post.title[lang]} {...(priority ? { fetchPriority: 'high' as const } : { loading: 'lazy' as const })} decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24 }}>
          <span style={{ display: 'inline-block', background: color, color: 'white', fontSize: 11, fontWeight: 700, padding: '3px 10px', borderRadius: 12, marginBottom: 10 }}>{catName}</span>
          <h3 style={{ color: 'white', fontSize: 20, fontWeight: 800, fontFamily: 'Georgia, serif', lineHeight: 1.3, marginBottom: 8 }}>{post.title[lang]}</h3>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, lineHeight: 1.6, marginBottom: 10, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.description[lang]}</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'rgba(255,255,255,0.6)' }}>
            <span>{dateStr}</span>
            <span>·</span>
            <span>{post.readingTime} {lang === 'ja' ? '読了' : 'read'}</span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'horizontal') {
    return (
      <Link href={`/blog/${post.slug}`} style={{ display: 'flex', gap: 16, textDecoration: 'none', padding: 12, background: 'white', borderRadius: 12, border: '1px solid #f0f0f0', transition: 'box-shadow 0.2s' }}>
        <div style={{ width: 110, height: 90, borderRadius: 10, overflow: 'hidden', flexShrink: 0 }}>
          <img src={post.image} alt={post.title[lang]} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0 }}>
          <span style={{ display: 'inline-block', background: `${color}15`, color: color, fontSize: 10, fontWeight: 700, padding: '2px 8px', borderRadius: 8, marginBottom: 6, width: 'fit-content' }}>{catName}</span>
          <h4 style={{ fontSize: 14, fontWeight: 700, color: '#1C1A18', lineHeight: 1.4, marginBottom: 6, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.title[lang]}</h4>
          <div style={{ display: 'flex', gap: 8, fontSize: 11, color: '#999' }}>
            <span>{dateStr}</span>
            <span>·</span>
            <span>{post.readingTime} {lang === 'ja' ? '読了' : 'read'}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <article style={{ background: 'white', borderRadius: 16, overflow: 'hidden', border: '1px solid #f0f0f0', display: 'flex', flexDirection: 'column' }}>
      <Link href={`/blog/${post.slug}`} style={{ display: 'block', height: 180, overflow: 'hidden' }}>
        <img src={post.image} alt={post.title[lang]} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s' }} />
      </Link>
      <div style={{ padding: 20, display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 10 }}>
          <span style={{ background: `${color}15`, color: color, fontSize: 10, fontWeight: 700, padding: '3px 10px', borderRadius: 10, border: `1px solid ${color}30` }}>{catName}</span>
          <span style={{ fontSize: 11, color: '#aaa' }}>{dateStr}</span>
        </div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1C1A18', lineHeight: 1.4, marginBottom: 8, fontFamily: 'Georgia, serif', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          <Link href={`/blog/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>{post.title[lang]}</Link>
        </h3>
        <p style={{ fontSize: 13, color: '#6B5E4E', lineHeight: 1.6, flex: 1, marginBottom: 14, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.description[lang]}</p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 12, borderTop: '1px solid #f5f0eb' }}>
          <span style={{ fontSize: 11, color: '#999' }}>{post.readingTime} {lang === 'ja' ? '読了' : 'read'}</span>
          <Link href={`/blog/${post.slug}`} style={{ fontSize: 12, fontWeight: 700, color: '#C0392B', textDecoration: 'none' }}>
            {lang === 'ja' ? '記事を読む' : 'Read More'} →
          </Link>
        </div>
      </div>
    </article>
  );
}

function Sidebar({ lang, activeCategory, onCategoryChange, onSearch, allPosts, popularPosts }: {
  lang: 'en' | 'ja';
  activeCategory: Category | null;
  onCategoryChange: (cat: Category | null) => void;
  onSearch: (q: string) => void;
  allPosts: BlogPost[];
  popularPosts: BlogPost[];
}) {
  const [sideQuery, setSideQuery] = useState('');
  const popular = popularPosts;
  const cats = Object.keys(CATEGORIES) as Category[];
  const postCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const cat of cats) {
      counts[cat] = allPosts.filter(p => p.category === cat).length;
    }
    return counts;
  }, [allPosts]);

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Search */}
      <div style={{ background: 'white', borderRadius: 16, padding: 20, border: '1px solid #f0f0f0' }}>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1C1A18', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16 }}>🔍</span> {lang === 'ja' ? '検索' : 'Search'}
        </h3>
        <form onSubmit={e => { e.preventDefault(); onSearch(sideQuery); }} style={{ display: 'flex', gap: 8 }}>
          <input
            type="text" value={sideQuery} onChange={e => setSideQuery(e.target.value)}
            placeholder={lang === 'ja' ? '記事を検索...' : 'Search articles...'}
            style={{ flex: 1, padding: '10px 12px', fontSize: 13, border: '1px solid #e0d8cf', borderRadius: 10, outline: 'none' }}
          />
          <button type="submit" style={{ padding: '10px 16px', background: '#C0392B', color: 'white', border: 'none', borderRadius: 10, fontSize: 13, fontWeight: 700, cursor: 'pointer' }}>
            {lang === 'ja' ? '検索' : 'Go'}
          </button>
        </form>
      </div>

      {/* Categories */}
      <div style={{ background: 'white', borderRadius: 16, padding: 20, border: '1px solid #f0f0f0' }}>
        <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1C1A18', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 16 }}>📂</span> {lang === 'ja' ? 'カテゴリ' : 'Categories'}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {cats.map(cat => (
            <li key={cat}>
              <button
                onClick={() => onCategoryChange(activeCategory === cat ? null : cat)}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
                  padding: '8px 12px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 13,
                  background: activeCategory === cat ? `${CATEGORY_COLORS[cat]}12` : 'transparent',
                  color: activeCategory === cat ? CATEGORY_COLORS[cat] : '#555',
                  fontWeight: activeCategory === cat ? 700 : 400,
                  transition: 'all 0.2s',
                }}
              >
                <span>{CATEGORIES[cat][lang]}</span>
                <span style={{ fontSize: 12, color: '#bbb', fontWeight: 400 }}>({postCounts[cat]})</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Posts */}
      {popular.length > 0 && (
        <div style={{ background: 'white', borderRadius: 16, padding: 20, border: '1px solid #f0f0f0' }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1C1A18', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16 }}>🔥</span> {lang === 'ja' ? '人気の記事' : 'Popular Posts'}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {popular.map((post, i) => (
              <li key={post.slug} style={{ padding: '10px 0', borderBottom: i < popular.length - 1 ? '1px solid #f5f0eb' : 'none' }}>
                <Link href={`/blog/${post.slug}`} style={{ display: 'flex', gap: 10, textDecoration: 'none', alignItems: 'start' }}>
                  <span style={{ width: 26, height: 26, borderRadius: '50%', background: '#FFF5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, color: '#C0392B', flexShrink: 0 }}>
                    {i + 1}
                  </span>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', lineHeight: 1.4, marginBottom: 3, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{post.title[lang]}</p>
                    <p style={{ fontSize: 11, color: '#aaa' }}>{formatDate(post.date, lang)}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reservation CTA */}
      <div style={{ borderRadius: 16, background: '#C0392B', color: 'white', padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 12 }}>🍽️</div>
        <h3 style={{ fontSize: 18, fontWeight: 800, marginBottom: 8, fontFamily: 'Georgia, serif' }}>
          {lang === 'ja' ? 'テーブル予約' : 'Reserve Your Table'}
        </h3>
        <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 16 }}>
          {lang === 'ja' ? '本格ネパール・インド料理を富良野で' : 'Authentic Nepalese & Indian cuisine in Furano'}
        </p>
        <Link href="/reservation" style={{ display: 'block', background: 'white', color: '#C0392B', padding: '12px', borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: 'none', marginBottom: 8 }}>
          {lang === 'ja' ? '今すぐ予約 →' : 'RESERVE NOW →'}
        </Link>
        <Link href="/menu" style={{ display: 'block', background: 'rgba(255,255,255,0.15)', color: 'white', padding: '10px', borderRadius: 10, fontSize: 13, fontWeight: 600, textDecoration: 'none' }}>
          {lang === 'ja' ? 'メニューを見る' : 'View Menu'}
        </Link>
      </div>

      {/* Special Offers */}
      <div style={{ borderRadius: 16, background: 'linear-gradient(135deg, #FFF8E7, #FFF3D1)', border: '1px solid #F0D68C', padding: 20 }}>
        <h3 style={{ fontSize: 14, fontWeight: 800, color: '#1C1A18', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
          ⭐ {lang === 'ja' ? '特別オファー' : 'Special Offers'}
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: 13, color: '#555' }}>
          <li style={{ padding: '4px 0', display: 'flex', gap: 6 }}><span style={{ color: '#D97706' }}>✓</span> {lang === 'ja' ? '団体割引（5名以上）' : 'Group Discount (5+ people)'}</li>
          <li style={{ padding: '4px 0', display: 'flex', gap: 6 }}><span style={{ color: '#D97706' }}>✓</span> {lang === 'ja' ? '季節限定ラベンダーセット' : 'Seasonal Lavender Set Menu'}</li>
          <li style={{ padding: '4px 0', display: 'flex', gap: 6 }}><span style={{ color: '#D97706' }}>✓</span> {lang === 'ja' ? '予約でマサラティー無料' : 'Free Masala Tea with Reservation'}</li>
        </ul>
      </div>
    </aside>
  );
}

export default function BlogPage() {
  const { lang } = useLang();
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(staticPosts);

  useEffect(() => {
    fetch('/blog-data/posts.json')
      .then(r => r.json())
      .then((dynamicPosts: BlogPost[]) => {
        if (Array.isArray(dynamicPosts) && dynamicPosts.length > 0) {
          const merged = [...dynamicPosts];
          for (const sp of staticPosts) {
            if (!merged.some(p => p.slug === sp.slug)) merged.push(sp);
          }
          merged.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
          setBlogPosts(merged);
        }
      })
      .catch(() => {});
  }, []);

  const featured = useMemo(() => blogPosts.filter(p => p.featured).slice(0, 3), [blogPosts]);
  const popular = useMemo(() => blogPosts.filter(p => p.popular).slice(0, 5), [blogPosts]);
  const showFeatured = !searchQuery && !activeCategory && page === 1;

  const filteredPosts = useMemo(() => {
    if (searchQuery) {
      return blogPosts.filter(p => {
        const q = searchQuery.toLowerCase();
        return p.title[lang].toLowerCase().includes(q) || p.description[lang].toLowerCase().includes(q) || p.tags.some(t => t.toLowerCase().includes(q));
      });
    }
    if (activeCategory) return blogPosts.filter(p => p.category === activeCategory);
    return blogPosts;
  }, [searchQuery, activeCategory, lang, blogPosts]);

  const totalPages = Math.ceil(filteredPosts.length / PER_PAGE);
  const paginated = filteredPosts.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategoryChange = (cat: Category | null) => {
    setActiveCategory(cat);
    setSearchQuery('');
    setPage(1);
  };

  const handleSearch = (q: string) => {
    setSearchQuery(q);
    setActiveCategory(null);
    setPage(1);
  };

  const cats = Object.keys(CATEGORIES) as Category[];

  return (
    <div style={{ paddingTop: 72, minHeight: '100vh', background: '#FAFAF8' }}>
      {/* Hero Header */}
      <div style={{ background: 'linear-gradient(135deg, #1C1A18, #2D2820, #3a1515)', color: 'white', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', maxWidth: 1100, margin: '0 auto', padding: '60px 24px 44px', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', background: 'rgba(212,130,26,0.2)', color: '#D4821A', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 14px', borderRadius: 20, marginBottom: 16 }}>
            {lang === 'ja' ? '旅行ブログ' : 'Travel Blog'}
          </span>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 800, fontFamily: 'Georgia, serif', marginBottom: 12, lineHeight: 1.2 }}>
            {lang === 'ja' ? 'ネパールダイニング ブログ' : 'Nepal Dining Blog'}
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.65)', maxWidth: 600, margin: '0 auto 28px' }}>
            {lang === 'ja'
              ? '富良野・北海道の旅行ガイド、グルメ情報、ネパール料理のストーリー'
              : 'Your Ultimate Guide to Furano, Hokkaido Travel, Food & Culture'}
          </p>

          {/* Search */}
          <form onSubmit={e => { e.preventDefault(); const fd = new FormData(e.currentTarget); handleSearch(fd.get('q') as string || ''); }}
            style={{ maxWidth: 560, margin: '0 auto 24px', display: 'flex', gap: 8 }}>
            <div style={{ position: 'relative', flex: 1 }}>
              <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16 }}>🔍</span>
              <input
                type="text" name="q" defaultValue={searchQuery}
                placeholder={lang === 'ja' ? '記事を検索...' : 'Search articles...'}
                style={{ width: '100%', padding: '14px 14px 14px 42px', borderRadius: 12, border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 14, outline: 'none', boxSizing: 'border-box' }}
              />
            </div>
            <button type="submit" style={{ padding: '14px 24px', background: '#D4821A', color: '#1C1A18', border: 'none', borderRadius: 12, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              {lang === 'ja' ? '検索' : 'Search'}
            </button>
          </form>

          {/* Category pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            <button
              onClick={() => handleCategoryChange(null)}
              style={{
                padding: '8px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1px solid',
                background: !activeCategory ? '#D4821A' : 'rgba(255,255,255,0.1)',
                color: !activeCategory ? '#1C1A18' : 'rgba(255,255,255,0.8)',
                borderColor: !activeCategory ? '#D4821A' : 'rgba(255,255,255,0.2)',
                transition: 'all 0.2s',
              }}
            >
              {lang === 'ja' ? 'すべて' : 'All Categories'}
            </button>
            {cats.map(cat => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(activeCategory === cat ? null : cat)}
                style={{
                  padding: '8px 16px', borderRadius: 20, fontSize: 13, fontWeight: 600, cursor: 'pointer', border: '1px solid',
                  background: activeCategory === cat ? '#D4821A' : 'rgba(255,255,255,0.1)',
                  color: activeCategory === cat ? '#1C1A18' : 'rgba(255,255,255,0.8)',
                  borderColor: activeCategory === cat ? '#D4821A' : 'rgba(255,255,255,0.2)',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                }}
              >
                {CATEGORIES[cat][lang]}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 24px 80px' }}>
        {/* Featured */}
        {showFeatured && featured.length > 0 && (
          <section style={{ marginBottom: 48 }}>
            <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1C1A18', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 4, height: 22, background: '#C0392B', borderRadius: 4, display: 'inline-block' }} />
              {lang === 'ja' ? '特集記事' : 'Featured Articles'}
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
              {featured.map((post, i) => (
                <BlogCard key={post.slug} post={post} lang={lang} variant="featured" priority={i === 0} />
              ))}
            </div>
          </section>
        )}

        {/* Filter label */}
        {(searchQuery || activeCategory) && (
          <div style={{ marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 14, color: '#777' }}>
              {searchQuery
                ? `${lang === 'ja' ? '検索結果' : 'Search results for'} "${searchQuery}"`
                : `${lang === 'ja' ? 'カテゴリ' : 'Category'}: ${CATEGORIES[activeCategory!][lang]}`}
              {' — '}{filteredPosts.length} {lang === 'ja' ? '件' : `article${filteredPosts.length !== 1 ? 's' : ''}`}
            </span>
            <button onClick={() => { setSearchQuery(''); setActiveCategory(null); setPage(1); }}
              style={{ fontSize: 12, color: '#C0392B', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>
              {lang === 'ja' ? 'フィルターを解除 ×' : 'Clear filter ×'}
            </button>
          </div>
        )}

        {/* Main content + sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40 }} className="blog-layout">
          <div>
            {paginated.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '60px 0', color: '#aaa' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                <p style={{ fontSize: 18, fontWeight: 700, color: '#555', marginBottom: 8 }}>{lang === 'ja' ? '記事が見つかりません' : 'No articles found'}</p>
                <p style={{ fontSize: 13, marginBottom: 16 }}>{lang === 'ja' ? '別の検索語を試すか、すべてのカテゴリを閲覧してください。' : 'Try a different search term or browse all categories.'}</p>
                <button onClick={() => { setSearchQuery(''); setActiveCategory(null); }} style={{ color: '#C0392B', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', fontSize: 14 }}>
                  {lang === 'ja' ? 'すべての記事を見る →' : 'Browse all articles →'}
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: 18, fontWeight: 800, color: '#1C1A18', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 4, height: 22, background: '#C0392B', borderRadius: 4, display: 'inline-block' }} />
                  {activeCategory ? CATEGORIES[activeCategory][lang] : searchQuery ? (lang === 'ja' ? '検索結果' : 'Search Results') : (lang === 'ja' ? '最新の記事' : 'Latest Articles')}
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 20 }}>
                  {paginated.map(post => (
                    <BlogCard key={post.slug} post={post} lang={lang} variant="default" />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <nav style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 40 }}>
                    <button
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page <= 1}
                      style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #ddd', background: 'white', fontSize: 13, fontWeight: 600, cursor: page <= 1 ? 'default' : 'pointer', opacity: page <= 1 ? 0.4 : 1, color: '#555' }}
                    >
                      ← {lang === 'ja' ? '前へ' : 'Previous'}
                    </button>
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        style={{
                          width: 36, height: 36, borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600,
                          background: p === page ? '#C0392B' : 'white',
                          color: p === page ? 'white' : '#555',
                          boxShadow: p === page ? '0 2px 8px rgba(192,57,43,0.3)' : 'none',
                        }}
                      >
                        {p}
                      </button>
                    ))}
                    <button
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page >= totalPages}
                      style={{ padding: '8px 14px', borderRadius: 8, border: '1px solid #ddd', background: 'white', fontSize: 13, fontWeight: 600, cursor: page >= totalPages ? 'default' : 'pointer', opacity: page >= totalPages ? 0.4 : 1, color: '#555' }}
                    >
                      {lang === 'ja' ? '次へ' : 'Next'} →
                    </button>
                  </nav>
                )}
              </>
            )}
          </div>

          <Sidebar lang={lang} activeCategory={activeCategory} onCategoryChange={handleCategoryChange} onSearch={handleSearch} allPosts={blogPosts} popularPosts={popular} />
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .blog-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
