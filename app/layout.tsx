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
  "telephone": "+81-167-44-2444",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Akatsukimachi 3-19",
    "addressLocality": "Nakafurano",
    "addressRegion": "Hokkaido",
    "postalCode": "071-0714",
    "addressCountry": "JP"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 43.5167, "longitude": 142.4167 },
  // Wednesday stays listed: the restaurant is open on the 1st, 3rd and 5th
  // Wednesday of each month. Schema.org has no way to express "2nd and 4th
  // Wednesday closed", so those two dates are handled on the pages themselves.
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "11:00", "closes": "15:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"], "opens": "17:00", "closes": "21:00" }
  ],
  "servesCuisine": ["Nepalese","Indian"],
  "priceRange": "¥¥",
  // No aggregateRating here on purpose. Since 2019 Google ignores review
  // markup a business publishes about itself ("self-serving") on LocalBusiness
  // types, so this only ever risked going stale — it was claiming 975 reviews
  // when the real count had passed 1,000. Google shows the live rating from the
  // Business Profile instead, which stays correct without anyone editing it.
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
