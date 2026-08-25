import type { MetadataRoute } from 'next';

import { SITE_URL } from './lib/site';
import { blogPosts } from './lib/blogData';

// Required by `output: 'export'` — tells Next this route is a build-time file.
export const dynamic = 'force-static';

/**
 * Emitted as a static /sitemap.xml by `output: 'export'`.
 *
 * Trailing slashes are deliberate: `next.config.ts` sets `trailingSlash: true`,
 * so /menu/ is the URL that actually serves a page. Listing /menu here would
 * point Google at a redirect and waste crawl budget on every entry.
 *
 * `/access` and `/admin` are left out — see robots.ts.
 */
const STATIC_PAGES = ['', 'menu', 'order', 'reservation', 'about', 'blog', 'contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = STATIC_PAGES.map((path) => ({
    url: path ? `${SITE_URL}/${path}/` : `${SITE_URL}/`,
    changeFrequency: path === '' || path === 'menu' ? 'weekly' : 'monthly',
    priority: path === '' ? 1 : path === 'menu' ? 0.9 : 0.7,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}/`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
