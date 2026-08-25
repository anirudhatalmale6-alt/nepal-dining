import type { Metadata } from 'next';
import { blogPosts } from '../../lib/blogData';
import { SITE_URL, OG_IMAGE } from '../../lib/site';
import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

/**
 * Every blog post used to inherit the root layout's metadata, so all eight
 * articles shipped with the homepage's title and description. To a search
 * engine that is eight near-duplicate pages competing with each other and with
 * the homepage, which is why none of them ranked for the terms they were
 * written to target. The per-post title/description already existed in
 * blogData.ts — it just never reached the <head>.
 *
 * English is used deliberately: the JA copy lives on the same URL behind a
 * client-side toggle, so there is only ever one indexable version of a post.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}/`;
  const image = post.image || OG_IMAGE;

  return {
    title: `${post.title.en} | Nepal Dining`,
    description: post.description.en,
    keywords: post.tags.join(', '),
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      title: post.title.en,
      description: post.description.en,
      url,
      siteName: 'Nepal Dining',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: image, width: 1200, height: 630, alt: post.title.en }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title.en,
      description: post.description.en,
      images: [image],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  // BlogPosting tells Google this is an article rather than another page of the
  // restaurant site — that distinction is what makes a page a Discover
  // candidate at all. Emitted server-side so it is in the exported HTML.
  const articleSchema = post && {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title.en,
    description: post.description.en,
    image: post.image || OG_IMAGE,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: 'Nepal Dining',
      logo: { '@type': 'ImageObject', url: OG_IMAGE },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${post.slug}/` },
    keywords: post.tags.join(', '),
  };

  // The FAQs were already written into blogData.ts and rendered on the page;
  // marking them up is what makes them eligible to appear as expandable
  // questions under the search result.
  const faqSchema = post &&
    post.faq.length > 0 && {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faq.map((f) => ({
        '@type': 'Question',
        name: f.q.en,
        acceptedAnswer: { '@type': 'Answer', text: f.a.en },
      })),
    };

  return (
    <>
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <BlogPostClient slug={slug} />
    </>
  );
}
