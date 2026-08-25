/**
 * Site-wide constants used by metadata, sitemap, robots and JSON-LD.
 *
 * These live here rather than in layout.tsx so that robots.ts and sitemap.ts
 * can import them without pulling the root layout (and with it globals.css and
 * the client providers) into a route module.
 */

/** Canonical origin. Must match the host visitors actually land on. */
export const SITE_URL = 'https://www.nepaldining.online';

/** Default share/Discover card image. Absolute — crawlers don't resolve relatives. */
export const OG_IMAGE =
  'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg';
