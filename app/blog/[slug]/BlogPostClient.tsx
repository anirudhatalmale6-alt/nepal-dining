'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLang } from '../../lib/LanguageContext';
import { blogPosts, CATEGORIES, CATEGORY_COLORS, getRelatedPosts, getPopularPosts, type BlogPost } from '../../lib/blogData';

function formatDate(dateStr: string, lang: string) {
  const d = new Date(dateStr);
  if (lang === 'ja') return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-').replace(/^-+|-+$/g, '');
}

function TableOfContents({ post, lang }: { post: BlogPost; lang: 'en' | 'ja' }) {
  const [activeId, setActiveId] = useState('');
  const items = post.sections.map(s => ({ id: slugify(s.heading[lang]), text: s.heading[lang], level: s.level }));

  useEffect(() => {
    if (!items.length) return;
    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-80px 0px -60% 0px' }
    );
    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  if (!items.length) return null;

  return (
    <div style={{ background: '#FDF8F0', border: '1px solid #E8D5B7', borderRadius: 12, padding: 20, marginBottom: 32 }}>
      <h3 style={{ fontSize: 14, fontWeight: 800, color: '#1C1A18', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 15 }}>📋</span> {lang === 'ja' ? '目次' : 'Table of Contents'}
      </h3>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {items.map(item => (
          <li key={item.id} style={{ paddingLeft: item.level === 3 ? 16 : 0 }}>
            <a
              href={`#${item.id}`}
              style={{
                display: 'block', padding: '5px 10px', borderRadius: 6, fontSize: 13, textDecoration: 'none',
                color: activeId === item.id ? '#C0392B' : '#555',
                fontWeight: activeId === item.id ? 700 : 400,
                background: activeId === item.id ? 'white' : 'transparent',
                transition: 'all 0.2s',
              }}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ShareButtons({ title, lang }: { title: string; lang: string }) {
  const [copied, setCopied] = useState(false);
  const [url, setUrl] = useState('');

  useEffect(() => { setUrl(window.location.href); }, []);

  const share = (platform: 'twitter' | 'facebook') => {
    const encoded = encodeURIComponent(url);
    const urls = {
      twitter: `https://twitter.com/intent/tweet?url=${encoded}&text=${encodeURIComponent(title)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
    };
    window.open(urls[platform], '_blank', 'width=600,height=400');
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
      <span style={{ fontSize: 13, fontWeight: 600, color: '#777' }}>{lang === 'ja' ? 'シェア' : 'Share'}:</span>
      <button onClick={() => share('twitter')} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: '#000', color: 'white', fontSize: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6 }}>
        𝕏 Post
      </button>
      <button onClick={() => share('facebook')} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: '#1877F2', color: 'white', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
        Facebook
      </button>
      <button onClick={copyLink} style={{ padding: '8px 14px', borderRadius: 8, border: 'none', background: '#f0f0f0', color: '#555', fontSize: 12, fontWeight: 700, cursor: 'pointer' }}>
        {copied ? '✓ Copied!' : '🔗 Copy Link'}
      </button>
    </div>
  );
}

function ArticleSidebar({ post, lang }: { post: BlogPost; lang: 'en' | 'ja' }) {
  const popular = getPopularPosts();
  const related = getRelatedPosts(post.slug);

  return (
    <aside style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Popular */}
      {popular.length > 0 && (
        <div style={{ background: 'white', borderRadius: 16, padding: 20, border: '1px solid #f0f0f0' }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1C1A18', marginBottom: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
            🔥 {lang === 'ja' ? '人気の記事' : 'Popular Posts'}
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {popular.map((p, i) => (
              <li key={p.slug} style={{ padding: '10px 0', borderBottom: i < popular.length - 1 ? '1px solid #f5f0eb' : 'none' }}>
                <Link href={`/blog/${p.slug}`} style={{ display: 'flex', gap: 10, textDecoration: 'none', alignItems: 'start' }}>
                  <div style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                    <img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: 12, fontWeight: 600, color: '#1C1A18', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.title[lang]}</p>
                    <p style={{ fontSize: 10, color: '#aaa', marginTop: 2 }}>{p.readingTime} {lang === 'ja' ? '読了' : 'read'}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Reservation CTA */}
      <div style={{ borderRadius: 16, background: '#C0392B', color: 'white', padding: 24, textAlign: 'center' }}>
        <div style={{ fontSize: 40, marginBottom: 10 }}>🍽️</div>
        <h3 style={{ fontSize: 17, fontWeight: 800, marginBottom: 8, fontFamily: 'Georgia, serif' }}>
          {lang === 'ja' ? 'テーブル予約' : 'Reserve Your Table'}
        </h3>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', marginBottom: 14 }}>
          {lang === 'ja' ? '本格ネパール・インド料理を富良野で' : 'Authentic cuisine in Furano'}
        </p>
        <Link href="/reservation" style={{ display: 'block', background: 'white', color: '#C0392B', padding: '10px', borderRadius: 10, fontSize: 13, fontWeight: 700, textDecoration: 'none', marginBottom: 8 }}>
          {lang === 'ja' ? '今すぐ予約 →' : 'RESERVE NOW →'}
        </Link>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div style={{ background: 'white', borderRadius: 16, padding: 20, border: '1px solid #f0f0f0' }}>
          <h3 style={{ fontSize: 15, fontWeight: 800, color: '#1C1A18', marginBottom: 12 }}>
            {lang === 'ja' ? '関連記事' : 'Related Articles'}
          </h3>
          {related.map((p, i) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} style={{ display: 'flex', gap: 10, textDecoration: 'none', padding: '10px 0', borderBottom: i < related.length - 1 ? '1px solid #f5f0eb' : 'none' }}>
              <div style={{ width: 50, height: 50, borderRadius: 8, overflow: 'hidden', flexShrink: 0 }}>
                <img src={p.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#1C1A18', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.title[lang]}</p>
                <p style={{ fontSize: 10, color: CATEGORY_COLORS[p.category] }}>{CATEGORIES[p.category][lang]}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </aside>
  );
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const { lang } = useLang();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div style={{ paddingTop: 120, textAlign: 'center', minHeight: '60vh' }}>
        <h1 style={{ fontSize: 32, fontWeight: 800, color: '#1C1A18' }}>{lang === 'ja' ? '記事が見つかりません' : 'Article Not Found'}</h1>
        <Link href="/blog" style={{ color: '#C0392B', fontWeight: 600, marginTop: 16, display: 'inline-block' }}>
          ← {lang === 'ja' ? 'ブログ一覧へ' : 'Back to Blog'}
        </Link>
      </div>
    );
  }

  const color = CATEGORY_COLORS[post.category];
  const catName = CATEGORIES[post.category][lang];
  const dateStr = formatDate(post.date, lang);
  const allPosts = blogPosts;
  const idx = allPosts.findIndex(p => p.slug === slug);
  const prevPost = idx < allPosts.length - 1 ? allPosts[idx + 1] : null;
  const nextPost = idx > 0 ? allPosts[idx - 1] : null;

  return (
    <div style={{ paddingTop: 72, minHeight: '100vh', background: '#FAFAF8' }}>
      {/* Hero Image */}
      <div style={{ position: 'relative', height: '55vh', minHeight: 350, maxHeight: 500, overflow: 'hidden' }}>
        <img src={post.image} alt={post.title[lang]} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,26,24,0.85) 0%, rgba(28,26,24,0.3) 50%, transparent 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px', maxWidth: 900, margin: '0 auto' }}>
          <span style={{ display: 'inline-block', background: color, color: 'white', fontSize: 11, fontWeight: 700, padding: '4px 14px', borderRadius: 14, marginBottom: 14, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{catName}</span>
          <h1 style={{ fontSize: 'clamp(24px, 4vw, 44px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.2, marginBottom: 12 }}>{post.title[lang]}</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, fontSize: 13, color: 'rgba(255,255,255,0.6)' }}>
            <span>✍️ {post.author}</span>
            <span>📅 {dateStr}</span>
            <span>⏱️ {post.readingTime} {lang === 'ja' ? '読了' : 'read'}</span>
          </div>
        </div>
      </div>

      <main style={{ maxWidth: 1100, margin: '0 auto', padding: '32px 24px 80px' }}>
        {/* Breadcrumb */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#999', marginBottom: 24, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#999', textDecoration: 'none' }}>{lang === 'ja' ? 'ホーム' : 'Home'}</Link>
          <span>/</span>
          <Link href="/blog" style={{ color: '#999', textDecoration: 'none' }}>{lang === 'ja' ? 'ブログ' : 'Blog'}</Link>
          <span>/</span>
          <span style={{ color: '#C0392B', fontWeight: 600 }}>{catName}</span>
        </nav>

        {/* Content + Sidebar */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 40 }} className="article-layout">
          {/* Article */}
          <article>
            {/* Description */}
            <p style={{ fontSize: 17, color: '#555', lineHeight: 1.7, marginBottom: 28, paddingLeft: 20, borderLeft: '4px solid #D4821A', fontStyle: 'italic' }}>
              {post.description[lang]}
            </p>

            {/* TOC */}
            <TableOfContents post={post} lang={lang} />

            {/* Sections */}
            {post.sections.map((section, i) => {
              const id = slugify(section.heading[lang]);
              return (
                <section key={i}>
                  {section.level === 2 ? (
                    <h2 id={id} style={{ fontSize: 24, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginTop: i > 0 ? 40 : 16, marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid #FDF8F0', scrollMarginTop: 90 }}>
                      {section.heading[lang]}
                    </h2>
                  ) : (
                    <h3 id={id} style={{ fontSize: 20, fontWeight: 700, color: '#1C1A18', marginTop: 24, marginBottom: 12, scrollMarginTop: 90 }}>
                      {section.heading[lang]}
                    </h3>
                  )}
                  {section.paragraphs.map((p, j) => (
                    <p key={j} style={{ fontSize: 16, color: '#3D3530', lineHeight: 1.8, marginBottom: 18 }}>
                      {p[lang]}
                    </p>
                  ))}
                </section>
              );
            })}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, marginTop: 40, paddingTop: 20, borderTop: '1px solid #f0f0f0' }}>
                <span style={{ fontSize: 13, color: '#999' }}>🏷️</span>
                {post.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 12px', background: '#f5f0eb', color: '#777', fontSize: 12, borderRadius: 14 }}>
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share */}
            <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid #f0f0f0' }}>
              <ShareButtons title={post.title[lang]} lang={lang} />
            </div>

            {/* Author Card */}
            <div style={{ marginTop: 28, padding: 24, background: '#FDF8F0', borderRadius: 16, border: '1px solid #E8D5B7', display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#C0392B', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, fontSize: 20, fontFamily: 'Georgia, serif', flexShrink: 0 }}>
                {post.author[0]}
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#1C1A18', fontSize: 15 }}>{post.author}</div>
                <div style={{ fontSize: 12, color: '#C0392B', marginBottom: 6 }}>{post.authorRole[lang]} · Nepal Dining</div>
                <p style={{ fontSize: 13, color: '#777', lineHeight: 1.6 }}>
                  {lang === 'ja'
                    ? '富良野旅行、北海道グルメ、ネパールダイニングの物語を共有しています。ヒマラヤの味が日本のおもてなしと出会う場所。'
                    : 'Sharing the best of Furano travel, Hokkaido food culture, and the story of Nepal Dining — where Himalayan flavours meet Japanese hospitality.'}
                </p>
              </div>
            </div>

            {/* Reservation CTA */}
            <div style={{ marginTop: 32, borderRadius: 16, overflow: 'hidden' }}>
              <div style={{ background: 'linear-gradient(135deg, #C0392B, #a82e23)', padding: 32, textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: 44, marginBottom: 12 }}>🍽️</div>
                <h3 style={{ fontSize: 22, fontWeight: 800, fontFamily: 'Georgia, serif', marginBottom: 8 }}>
                  {lang === 'ja' ? 'ネパールダイニングでお食事を' : 'Reserve Your Table at Nepal Dining'}
                </h3>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', marginBottom: 20, maxWidth: 420, margin: '0 auto 20px' }}>
                  {lang === 'ja'
                    ? '富良野の本格ネパール・インド料理 · ハラール対応 · 英語対応 · 60席'
                    : 'Authentic Nepalese & Indian cuisine in Furano · Halal-friendly · English speaking · 60 seats'}
                </p>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Link href="/reservation" style={{ background: 'white', color: '#C0392B', padding: '12px 24px', borderRadius: 10, fontSize: 14, fontWeight: 700, textDecoration: 'none' }}>
                    {lang === 'ja' ? 'テーブルを予約 →' : 'Book a Table →'}
                  </Link>
                  <Link href="/menu" style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '12px 24px', borderRadius: 10, fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                    {lang === 'ja' ? 'メニューを見る' : 'View Menu'}
                  </Link>
                </div>
              </div>
              <div style={{ background: '#1C1A18', padding: '12px 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, fontSize: 11, color: 'rgba(255,255,255,0.6)' }}>
                <span>📍 Nakafurano, Hokkaido</span>
                <span>🕐 11:00–15:00 / 17:00–21:00</span>
                <span>✅ Halal Friendly</span>
                <span>🗣️ English Staff</span>
              </div>
            </div>

            {/* FAQ */}
            {post.faq.length > 0 && (
              <section style={{ marginTop: 40 }}>
                <h2 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 20 }}>
                  {lang === 'ja' ? 'よくある質問' : 'Frequently Asked Questions'}
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {post.faq.map((item, i) => (
                    <details key={i} style={{ background: 'white', border: '1px solid #f0f0f0', borderRadius: 12, overflow: 'hidden' }}>
                      <summary style={{ padding: '16px 20px', cursor: 'pointer', fontWeight: 700, fontSize: 15, color: '#1C1A18', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        {item.q[lang]}
                        <span style={{ color: '#C0392B', fontSize: 20, flexShrink: 0, marginLeft: 12 }}>+</span>
                      </summary>
                      <div style={{ padding: '0 20px 16px', fontSize: 14, color: '#666', lineHeight: 1.7, borderTop: '1px solid #f5f0eb' }}>
                        <p style={{ marginTop: 12 }}>{item.a[lang]}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Prev / Next */}
            <nav style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 40, paddingTop: 28, borderTop: '1px solid #f0f0f0' }}>
              {prevPost ? (
                <Link href={`/blog/${prevPost.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 16, background: 'white', border: '1px solid #f0f0f0', borderRadius: 12, textDecoration: 'none', transition: 'border-color 0.2s' }}>
                  <span style={{ fontSize: 11, color: '#aaa' }}>← {lang === 'ja' ? '前の記事' : 'Previous'}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{prevPost.title[lang]}</span>
                </Link>
              ) : <div />}
              {nextPost ? (
                <Link href={`/blog/${nextPost.slug}`} style={{ display: 'flex', flexDirection: 'column', gap: 4, padding: 16, background: 'white', border: '1px solid #f0f0f0', borderRadius: 12, textDecoration: 'none', textAlign: 'right', transition: 'border-color 0.2s' }}>
                  <span style={{ fontSize: 11, color: '#aaa' }}>{lang === 'ja' ? '次の記事' : 'Next'} →</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#1C1A18', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{nextPost.title[lang]}</span>
                </Link>
              ) : <div />}
            </nav>
          </article>

          {/* Sidebar */}
          <ArticleSidebar post={post} lang={lang} />
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .article-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
