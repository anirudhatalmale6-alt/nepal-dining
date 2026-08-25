import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

export const metadata: Metadata = pageMeta(
  '/about/',
  'About Us | Nepal Dining, Nakafurano Hokkaido',
  'The story behind Nepal Dining — a family-run Nepalese and Indian restaurant in Nakafurano, Furano, serving Hokkaido ingredients with Himalayan hospitality.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
