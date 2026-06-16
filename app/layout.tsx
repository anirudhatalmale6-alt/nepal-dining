import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Nepal Dining | Authentic Nepalese & Indian Restaurant in Furano, Hokkaido",
  description: "Nepal Dining – Furano's highest-rated Nepalese and Indian restaurant in Nakafurano, Hokkaido. Fresh baked naan, butter chicken, soup curry, momo. Halal-friendly. English spoken. Dine in or takeout.",
  keywords: "Nepal Dining, Furano restaurant, Nakafurano curry, Hokkaido Indian food, halal Furano, naan Hokkaido, Nepalese restaurant Japan, 富良野カレー, ネパール料理, 中富良野レストラン",
  openGraph: {
    title: "Nepal Dining | Authentic Nepalese & Indian Restaurant in Furano",
    description: "Fresh baked naan, authentic curry, and warm Himalayan hospitality in the heart of Hokkaido's lavender country.",
    url: "https://nepaldining.online",
    siteName: "Nepal Dining",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    type: "website",
  },
  robots: { index: true, follow: true },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Nepal Dining",
  "alternateName": "ネパールダイニング",
  "description": "Authentic Nepalese and Indian restaurant in Nakafurano, Hokkaido. Fresh baked naan, butter chicken, soup curry, momo. Halal-friendly.",
  "url": "https://nepaldining.online",
  "telephone": "+81-167-44-2200",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Miyamachi 3-32",
    "addressLocality": "Nakafurano",
    "addressRegion": "Hokkaido",
    "postalCode": "071-0714",
    "addressCountry": "JP"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 43.5167, "longitude": 142.4167 },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:30", "closes": "15:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "17:00", "closes": "21:30" }
  ],
  "servesCuisine": ["Nepalese","Indian"],
  "priceRange": "¥¥",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "ratingCount": "200", "bestRating": "5" },
  "menu": "https://nepaldining.online/menu",
  "acceptsReservations": true
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <meta name="theme-color" content="#D4821A" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="antialiased">
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
