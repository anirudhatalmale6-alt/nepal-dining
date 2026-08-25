import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

export const metadata: Metadata = pageMeta(
  '/contact/',
  'Contact & Directions | Nepal Dining, Nakafurano Furano',
  'Phone, address, opening hours and directions to Nepal Dining, Akatsukimachi 3-19, Nakafurano, Hokkaido. English spoken — send us a message any time.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
