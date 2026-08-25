import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

export const metadata: Metadata = pageMeta(
  '/reservation/',
  'Book a Table | Nepal Dining, Nakafurano Furano, Hokkaido',
  'Reserve a table at Nepal Dining in Nakafurano, Furano. Families and large groups welcome, halal-friendly and vegetarian options. Book ahead in lavender and ski season.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
