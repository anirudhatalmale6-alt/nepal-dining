import type { Metadata } from 'next';
import { OG_IMAGE } from './site';

/**
 * Builds per-route metadata.
 *
 * Every page except the blog post route is a `'use client'` component, and a
 * client component cannot export `metadata` — which is why the whole site was
 * serving the root layout's title on every URL. The fix is a thin server-side
 * `layout.tsx` per route that exports metadata and renders its children
 * untouched; the existing client page is left completely alone.
 *
 * `path` must carry the trailing slash (`trailingSlash: true` in next.config).
 */
export function pageMeta(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: 'Nepal Dining',
      type: 'website',
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: 'summary_large_image', title, description, images: [OG_IMAGE] },
  };
}
