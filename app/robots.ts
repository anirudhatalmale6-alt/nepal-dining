import type { MetadataRoute } from 'next';

import { SITE_URL } from './lib/site';

// Required by `output: 'export'` — tells Next this route is a build-time file.
export const dynamic = 'force-static';

/**
 * Emitted as a static /robots.txt by `output: 'export'`.
 *
 * The site had no robots.txt at all (404), which is not fatal on its own —
 * Google assumes "crawl everything" — but it meant there was no discoverable
 * pointer to a sitemap either. The `/admin` and `/access` disallows keep the
 * owner-facing panel out of the index; they are not a security control, since
 * robots.txt is public and advisory.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/', disallow: ['/admin/', '/access/'] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
