import type { Metadata } from 'next';
import { pageMeta } from '../lib/pageMeta';

// This route was missed when per-route metadata was added, so /access/ kept
// serving the homepage title and description.
export const metadata: Metadata = pageMeta(
  '/access/',
  'Access & Directions | Nepal Dining, Nakafurano Furano',
  'How to reach Nepal Dining in Nakafurano — 15 minutes from Nakafurano Station on the JR Furano Line, free on-site parking, with directions from Furano, Kamifurano and Biei.',
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
