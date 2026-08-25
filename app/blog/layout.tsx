import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

export const metadata: Metadata = pageMeta(
  '/blog/',
  'Furano Travel & Food Guide | Nepal Dining Blog',
  'Local guides to Furano and Biei from a restaurant that lives here — where to eat, lavender and ski season tips, halal food, and Nepalese and Indian food explained.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
