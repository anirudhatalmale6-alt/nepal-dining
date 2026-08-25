import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./lib/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { SITE_URL, OG_IMAGE } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Nepal Dining | Authentic Nepalese & Indian Restaurant in Furano, Hokkaido",
  description: "Nepal Dining – Furano's highest-rated Nepalese and Indian restaurant in Nakafurano, Hokkaido. Fresh baked naan, butter chicken, soup curry, momo. Halal-friendly. English spoken. Dine in or takeout.",
  keywords: "Nepal Dining, Furano restaurant, Nakafurano curry, Hokkaido Indian food, halal Furano, naan Hokkaido, Nepalese restaurant Japan, 富良野カレー, ネパール料理, 中富良野レストラン",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Nepal Dining | Authentic Nepalese & Indian Restaurant in Furano",
    description: "Fresh baked naan, authentic curry, and warm Himalayan hospitality in the heart of Hokkaido's lavender country.",
    url: SITE_URL,
    siteName: "Nepal Dining",
    locale: "ja_JP",
    alternateLocale: ["en_US"],
    type: "website",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "Nepal Dining, Nakafurano" }],
  },
  twitter: { card: "summary_large_image", images: [OG_IMAGE] },
  robots: {
    index: true,
    follow: true,
    // Google Discover only ever surfaces a page as a large image card if the
    // page grants a large image preview. The default ("index, follow" alone)
    // caps previews at a thumbnail, which makes a page Discover-ineligible in
    // practice however good its content is. max-snippet/max-video-preview are
    // the same opt-in for text and video.
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "Nepal Dining",
  "alternateName": "ネパールダイニング",
  "description": "Authentic Nepalese and Indian restaurant in Nakafurano, Hokkaido. Fresh baked naan, butter chicken, soup curry, momo. Halal-friendly.",
  "url": "https://nepaldining.online",
  // Google wants an image on a LocalBusiness before it will consider it for
  // rich presentation. Points at a real uploaded photo, not a logo.
  "image": OG_IMAGE,
  "telephone": "+81-167-44-2444",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Akatsukimachi 3-19",
    "addressLocality": "Nakafurano",
    "addressRegion": "Hokkaido",
    // 071-0770 per the owner's own Google Business Profile and the Access
    // page. The site previously carried 071-0714 here and on the reservation
    // page — a NAP mismatch, and Google treats address disagreement between a
    // site and its Business Profile as a reason to trust the listing less.
    "postalCode": "071-0770",
    "addressCountry": "JP"
  },
  // Taken from the owner's own Google Business Profile pin, 2026-08-25. The
  // previous pair (43.5167, 142.4167) was the Nakafurano town centroid and sat
  // 13.5 km north of the restaurant — telling Google the wrong location for a
  // business whose whole ranking case is "near me".
  "geo": { "@type": "GeoCoordinates", "latitude": 43.3954305, "longitude": 142.4125147 },
  "hasMap": "https://www.google.com/maps?cid=4351573888716021956",
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
  "acceptsReservations": true,
  // sameAs is how Google confirms this website and the off-site listings are
  // one business rather than several — a direct local-ranking signal. Owner
  // supplied both URLs 2026-08-25; add Instagram/Facebook here if he sends them.
  // The Maps entry is the stable ?cid= form, not a share link or a text search.
  "sameAs": [
    "https://www.google.com/maps?cid=4351573888716021956",
    "https://www.tripadvisor.com/Restaurant_Review-g1120352-d21322199-Reviews-Nepal_Dining_Nakafurano-Nakafurano_cho_Sorachi_gun_Hokkaido.html"
  ]
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
