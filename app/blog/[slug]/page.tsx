import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return [
    { slug: 'best-restaurants-in-furano' },
    { slug: 'furano-lavender-guide' },
    { slug: 'halal-food-in-furano' },
    { slug: 'nepalese-food-guide' },
    { slug: 'hokkaido-food-guide' },
    { slug: 'biei-blue-pond-guide' },
    { slug: 'furano-winter-travel-guide' },
    { slug: 'furano-family-travel-guide' },
  ];
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
