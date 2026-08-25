import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

export const metadata: Metadata = pageMeta(
  '/order/',
  'Order Takeout Online | Nepal Dining, Nakafurano Furano',
  'Order Nepalese and Indian takeout from Nepal Dining in Nakafurano. Curry, naan and momo ready to collect — no commission, order direct from the restaurant.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
