import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

export const metadata: Metadata = pageMeta(
  '/menu/',
  'Menu & Prices | Nepalese, Indian & Halal Food in Nakafurano, Furano',
  'See the full Nepal Dining menu and prices — butter chicken, soup curry, momo, fresh tandoori naan and vegetarian and halal-friendly dishes. Dine in or takeout in Nakafurano, Furano, Hokkaido.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
