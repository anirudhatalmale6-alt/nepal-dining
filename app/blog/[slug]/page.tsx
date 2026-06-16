import BlogPostClient from './BlogPostClient';

export function generateStaticParams() {
  return [
    { slug: 'best-curry-hokkaido' },
    { slug: 'lavender-season-dining' },
    { slug: 'halal-dining-hokkaido' },
  ];
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  return <BlogPostClient slug={params.slug} />;
}
