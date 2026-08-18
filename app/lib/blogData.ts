export type Category = 'furano-travel-guide' | 'furano-attractions' | 'food-culture' | 'nepal-dining-news' | 'seasonal-events' | 'hokkaido-travel-tips';

export const CATEGORIES: Record<Category, { en: string; ja: string }> = {
  'furano-travel-guide':  { en: 'Furano Travel Guide',  ja: '富良野旅行ガイド' },
  'furano-attractions':   { en: 'Furano Attractions',   ja: '富良野の観光スポット' },
  'food-culture':         { en: 'Food & Culture',       ja: '食文化' },
  'nepal-dining-news':    { en: 'Nepal Dining News',    ja: 'ネパールダイニング' },
  'seasonal-events':      { en: 'Seasonal Events',      ja: '季節のイベント' },
  'hokkaido-travel-tips': { en: 'Hokkaido Travel Tips', ja: '北海道旅行のヒント' },
};

export const CATEGORY_COLORS: Record<Category, string> = {
  'furano-travel-guide':  '#2563EB',
  'furano-attractions':   '#7C3AED',
  'food-culture':         '#D97706',
  'nepal-dining-news':    '#DC2626',
  'seasonal-events':      '#16A34A',
  'hokkaido-travel-tips': '#0891B2',
};

export interface BlogSection {
  heading: { en: string; ja: string };
  level: 2 | 3;
  paragraphs: { en: string; ja: string }[];
}

export interface FAQ {
  q: { en: string; ja: string };
  a: { en: string; ja: string };
}

export interface BlogPost {
  slug: string;
  title: { en: string; ja: string };
  description: { en: string; ja: string };
  date: string;
  author: string;
  authorRole: { en: string; ja: string };
  category: Category;
  tags: string[];
  image: string;
  featured: boolean;
  popular: boolean;
  readingTime: string;
  sections: BlogSection[];
  faq: FAQ[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'best-restaurants-in-furano',
    title: {
      en: 'Best Restaurants in Furano 2025: Your Complete Dining Guide',
      ja: '2025年富良野ベストレストランガイド：完全版',
    },
    description: {
      en: 'Discover the best restaurants in Furano, Hokkaido — from fresh seafood and ramen to authentic Nepalese and Indian cuisine. Includes halal-friendly options.',
      ja: '北海道富良野のベストレストランを発見 — 新鮮なシーフードやラーメンから本格ネパール・インド料理まで。ハラル対応オプションも。',
    },
    date: '2025-05-10',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Food & Travel Writer', ja: 'グルメ＆旅行ライター' },
    category: 'furano-travel-guide',
    tags: ['furano restaurants', 'best food furano', 'halal furano', 'hokkaido dining'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg',
    featured: true,
    popular: true,
    readingTime: '6 min',
    sections: [
      {
        heading: { en: 'Why Furano is a Food Lover\'s Paradise', ja: 'なぜ富良野はグルメの楽園なのか' },
        level: 2,
        paragraphs: [
          {
            en: 'Nestled in the heart of Hokkaido, Furano is best known for its breathtaking lavender fields and powder skiing — but it is also an underrated food destination. The region\'s fertile farmland produces some of Japan\'s finest corn, potatoes, melons, and dairy products, which inspire creative menus across the town.',
            ja: '北海道の中心に位置する富良野は、美しいラベンダー畑とパウダースノーで最もよく知られていますが、知る人ぞ知るグルメの目的地でもあります。この地域の肥沃な農地は日本最高品質のトウモロコシ、ジャガイモ、メロン、乳製品を生産し、町中のレストランに創造的なメニューのインスピレーションを与えています。',
          },
          {
            en: 'Whether you are here for the summer flowers or winter slopes, you will find yourself spoiled for culinary choice.',
            ja: '夏の花畑でも冬のゲレンデでも、グルメの選択肢には事欠きません。',
          },
        ],
      },
      {
        heading: { en: 'Nepal Dining: Best for International Tourists', ja: 'ネパールダイニング：海外旅行者に最適' },
        level: 2,
        paragraphs: [
          {
            en: 'For international visitors, Nepal Dining in Nakafurano stands out as the most tourist-friendly restaurant in the area. Offering halal certified cuisine, English-speaking staff, 60 seats with walk-ins welcome, multilingual menus in English, Japanese, Korean, and Chinese, and Hokkaido fusion dishes using local ingredients.',
            ja: '海外からの旅行者にとって、中富良野のネパールダイニングはこのエリアで最も旅行者にやさしいレストランです。ハラル認証料理、英語対応スタッフ、60席（ウォークイン歓迎）、英語・日本語・韓国語・中国語のメニュー、そして地元食材を使った北海道フュージョン料理を提供しています。',
          },
          {
            en: 'The Dal Bhat (traditional Nepalese meal with lentil soup, rice, and curries) is exceptional here, and the butter chicken uses Furano\'s famous local dairy.',
            ja: 'ダルバート（レンズ豆のスープ、ご飯、カレーの伝統的なネパール料理）は格別で、バターチキンには富良野の有名な地元乳製品を使用しています。',
          },
        ],
      },
      {
        heading: { en: 'Top Furano Restaurants by Category', ja: 'カテゴリー別富良野トップレストラン' },
        level: 2,
        paragraphs: [
          {
            en: 'Furano has excellent ramen shops, particularly those serving miso ramen made with locally-sourced pork. Being in Hokkaido, restaurants receive fresh seafood deliveries regularly — enjoy crab, scallops, and salmon at local izakayas. The farming community has also attracted European-trained chefs who run intimate bistros featuring locally-grown produce paired with natural wines.',
            ja: '富良野には優れたラーメン店があり、特に地元産の豚肉を使った味噌ラーメンが人気です。北海道にあるため、レストランには定期的に新鮮なシーフードが届き、地元の居酒屋でカニ、ホタテ、サーモンを楽しめます。また、農業コミュニティがヨーロッパで修行したシェフを惹きつけ、地元産の食材とナチュラルワインを組み合わせた親密なビストロを営んでいます。',
          },
        ],
      },
      {
        heading: { en: 'Dining Tips for Furano Visitors', ja: '富良野レストランのヒント' },
        level: 2,
        paragraphs: [
          {
            en: 'During the lavender season (July–August) and ski season (January–February), restaurants fill up quickly. Always book ahead, especially for dinner. While fewer restaurants have English menus compared to Sapporo, Nepal Dining and tourist-area spots are well-equipped for international visitors. Most restaurants accept credit cards, but carrying some cash (JPY) is always recommended.',
            ja: 'ラベンダーシーズン（7〜8月）とスキーシーズン（1〜2月）はレストランがすぐに満席になります。特にディナーは事前予約をお勧めします。札幌に比べて英語メニューのあるレストランは少ないですが、ネパールダイニングや観光エリアの店舗は国際的な旅行者に十分対応しています。ほとんどのレストランはクレジットカードを受け付けますが、現金も持っておくことをお勧めします。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'What are the best restaurants in Furano for tourists?', ja: '富良野で観光客におすすめのレストランは？' },
        a: { en: 'Nepal Dining is top-rated for international tourists due to English-speaking staff and halal-friendly menu. There are also excellent ramen shops, seafood restaurants, and French cuisine options.', ja: 'ネパールダイニングは英語対応スタッフとハラル対応メニューにより、海外旅行者に最も高い評価を得ています。優れたラーメン店、海鮮レストラン、フレンチレストランもあります。' },
      },
      {
        q: { en: 'Is there halal food available in Furano?', ja: '富良野にハラール料理はありますか？' },
        a: { en: 'Yes! Nepal Dining in Nakafurano is the leading halal-friendly restaurant in the Furano area.', ja: 'はい！中富良野のネパールダイニングが富良野エリアで最もハラール対応に力を入れているレストランです。' },
      },
    ],
  },
  {
    slug: 'furano-lavender-guide',
    title: {
      en: 'Furano Lavender Fields: The Ultimate 2025 Visitor\'s Guide',
      ja: '富良野ラベンダー畑：2025年完全ガイド',
    },
    description: {
      en: 'Everything you need to know about visiting Furano\'s world-famous lavender fields — best time to visit, top farms, photo spots, and where to eat nearby.',
      ja: '富良野の世界的に有名なラベンダー畑訪問に必要な情報 — ベストシーズン、人気農園、フォトスポット、近くのグルメ情報。',
    },
    date: '2025-04-22',
    author: 'Yuki Tanaka',
    authorRole: { en: 'Travel Writer', ja: '旅行ライター' },
    category: 'furano-attractions',
    tags: ['furano lavender', 'hokkaido travel', 'furano summer', 'lavender season'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg',
    featured: true,
    popular: true,
    readingTime: '7 min',
    sections: [
      {
        heading: { en: 'Furano: Japan\'s Lavender Capital', ja: '富良野：日本のラベンダーの首都' },
        level: 2,
        paragraphs: [
          {
            en: 'Every year, millions of visitors descend on the small town of Furano in central Hokkaido to witness one of Japan\'s most spectacular natural phenomena — vast fields of purple lavender rolling across the gentle hills beneath the Tokachi mountain range.',
            ja: '毎年、数百万人の観光客が北海道中央部の小さな町・富良野を訪れ、日本で最も壮大な自然現象の一つを目にします — 十勝山脈のなだらかな丘に広がる紫色のラベンダー畑です。',
          },
          {
            en: 'Peak lavender season is from mid-July to early August, with the absolute peak usually around the third week of July. Early bloomers can be seen from late June.',
            ja: 'ラベンダーの見頃は7月中旬から8月上旬で、最盛期は通常7月の第3週頃です。早咲きの品種は6月下旬から見ることができます。',
          },
        ],
      },
      {
        heading: { en: 'Best Lavender Farms to Visit', ja: 'おすすめラベンダー農園' },
        level: 2,
        paragraphs: [
          {
            en: 'Farm Tomita is the most famous lavender farm in Furano, offering free admission and multiple flower fields to explore. Nakafurano Lavender Park offers panoramic views from a hilltop location. Choei Lavender Farm is great for a quieter experience away from the crowds.',
            ja: 'ファーム富田は富良野で最も有名なラベンダー農園で、入場無料で複数の花畑を探索できます。中富良野ラベンダー園は丘の上からのパノラマビューが楽しめます。町営ラベンダー園は混雑を避けた静かな体験に最適です。',
          },
        ],
      },
      {
        heading: { en: 'Where to Eat During Lavender Season', ja: 'ラベンダーシーズンのグルメ' },
        level: 2,
        paragraphs: [
          {
            en: 'During lavender season, we recommend arriving early for lunch at Nepal Dining (the kitchen opens at 11:00) to beat the midday rush. The Soup Curry is a must-try — a Hokkaido specialty that combines warm, spiced broth with fresh seasonal vegetables.',
            ja: 'ラベンダーシーズン中は、ネパールダイニングのランチに早めに到着することをお勧めします（キッチンは11:00オープン）。スープカレーは必食です — 温かいスパイスブロスに新鮮な旬の野菜を組み合わせた北海道の名物です。',
          },
          {
            en: 'For dinner, the tandoori specialties — chicken tikka, tandoori chicken, and freshly baked naan — make for an unforgettable evening. Pro tip: Book at least two weeks in advance during July and August.',
            ja: 'ディナーにはタンドリー料理 — チキンティッカ、タンドリーチキン、焼きたてナン — が忘れられない夜を演出します。プロのアドバイス：7〜8月は少なくとも2週間前には予約しましょう。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'When is the best time to see lavender in Furano?', ja: '富良野でラベンダーを見るのに最適な時期は？' },
        a: { en: 'Peak season is mid-July to early August, with the absolute peak around the third week of July.', ja: '見頃は7月中旬から8月上旬で、最盛期は7月の第3週頃です。' },
      },
      {
        q: { en: 'How do I get to Furano from Sapporo?', ja: '札幌から富良野へのアクセスは？' },
        a: { en: 'Take the JR Furano Line from Sapporo (about 2 hours), or drive via the Doto Expressway (about 2.5 hours).', ja: 'JR富良野線で約2時間、または道東自動車道経由で約2.5時間です。' },
      },
    ],
  },
  {
    slug: 'halal-food-in-furano',
    title: {
      en: 'Halal Food in Furano: A Guide for Muslim Visitors',
      ja: '富良野のハラール料理：ムスリム旅行者ガイド',
    },
    description: {
      en: 'Everything Muslim travellers need to know about finding halal food in Furano, Hokkaido. Discover halal-friendly restaurants, prayer facilities, and travel tips.',
      ja: '北海道富良野でのハラール料理情報。ハラール対応レストラン、礼拝施設、旅行のヒントをご紹介。',
    },
    date: '2025-03-15',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Guest Relations', ja: 'ゲストリレーション' },
    category: 'food-culture',
    tags: ['halal furano', 'muslim travel japan', 'halal hokkaido'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg',
    featured: false,
    popular: true,
    readingTime: '6 min',
    sections: [
      {
        heading: { en: 'Muslim-Friendly Travel in Furano', ja: '富良野でのムスリムフレンドリーな旅' },
        level: 2,
        paragraphs: [
          {
            en: 'Japan has seen a significant increase in Muslim visitors over the past decade, and Furano — with its spectacular lavender fields and world-class skiing — is increasingly popular among travellers from Malaysia, Indonesia, the Middle East, and beyond.',
            ja: '日本では過去10年間でムスリムの訪問者が大幅に増加し、壮大なラベンダー畑と世界クラスのスキーを誇る富良野は、マレーシア、インドネシア、中東などからの旅行者に人気が高まっています。',
          },
          {
            en: 'Finding halal-friendly restaurants in rural Japan can be challenging. But in the Furano-Nakafurano area, Muslim travelers have a reliable destination: Nepal Dining.',
            ja: '日本の地方でハラール対応のレストランを見つけるのは難しいことがありますが、富良野・中富良野エリアでは、ムスリム旅行者にはネパールダイニングという確かな選択肢があります。',
          },
        ],
      },
      {
        heading: { en: 'Nepal Dining\'s Halal-Friendly Menu', ja: 'ネパールダイニングのハラール対応メニュー' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepal Dining\'s kitchen follows halal preparation principles rooted in Nepalese culinary tradition. The menu offers a wide range of halal-friendly dishes including Butter Chicken, Chicken Tikka, Vegetable Curry, Dal Bhat, and a selection of freshly baked naan breads. The entire menu is alcohol-free in all cooking processes.',
            ja: 'ネパールダイニングの厨房は、ネパール料理の伝統に根ざしたハラール調理原則に従っています。バターチキン、チキンティッカ、野菜カレー、ダルバート、各種焼きたてナンなど、幅広いハラール対応料理を提供しています。すべての調理過程でアルコールは使用していません。',
          },
        ],
      },
      {
        heading: { en: 'Prayer Facilities & Practical Tips', ja: '礼拝施設と実用的なヒント' },
        level: 2,
        paragraphs: [
          {
            en: 'The nearest mosque is in Sapporo, but many Furano hotels are becoming more accommodating to Muslim guests. Nepal Dining has a quiet space available for prayer upon request. We always recommend calling ahead to confirm your specific dietary requirements.',
            ja: '最寄りのモスクは札幌にありますが、多くの富良野のホテルがムスリムのお客様への対応を改善しています。ネパールダイニングではリクエストに応じて礼拝用の静かなスペースをご利用いただけます。ご来店前にお電話で食事制限についてご確認されることをお勧めします。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Is there halal food available in Furano?', ja: '富良野にハラール料理はありますか？' },
        a: { en: 'Yes! Nepal Dining in Nakafurano serves certified halal Nepalese and Indian cuisine with English-speaking staff.', ja: 'はい！中富良野のネパールダイニングが認証ハラールのネパール・インド料理を英語対応スタッフとともに提供しています。' },
      },
      {
        q: { en: 'Do Japanese restaurants in Furano use alcohol in cooking?', ja: '富良野の日本料理店は調理にアルコールを使いますか？' },
        a: { en: 'Many traditional Japanese dishes use mirin or sake in cooking. Nepal Dining\'s menu is alcohol-free in all cooking processes.', ja: '多くの伝統的な日本料理はみりんや日本酒を使用します。ネパールダイニングのメニューはすべての調理過程でアルコール不使用です。' },
      },
    ],
  },
  {
    slug: 'nepalese-food-guide',
    title: {
      en: 'A Complete Guide to Nepalese Cuisine: Dal Bhat, Momos & More',
      ja: 'ネパール料理完全ガイド：ダルバート、モモなど',
    },
    description: {
      en: 'Discover the rich flavours of Nepalese cuisine — from the iconic dal bhat to crispy momos and fragrant curries. Learn what makes Himalayan food special.',
      ja: 'ネパール料理の豊かな味わいを発見 — 象徴的なダルバートからモモ、香り高いカレーまで。ヒマラヤの食の魅力を学びましょう。',
    },
    date: '2025-02-28',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Head Chef', ja: 'ヘッドシェフ' },
    category: 'food-culture',
    tags: ['nepalese food', 'dal bhat', 'momos', 'himalayan cuisine'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg',
    featured: true,
    popular: false,
    readingTime: '5 min',
    sections: [
      {
        heading: { en: 'The Soul of Himalayan Cooking', ja: 'ヒマラヤ料理の魂' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepalese cuisine is a fascinating blend of Himalayan, Tibetan, and Indian influences, shaped by centuries of geography, trade routes, and cultural exchange. Unlike the bold, intense spicing of Indian cuisine, Nepalese cooking tends toward balance — aromatic without overwhelming, warming without burning.',
            ja: 'ネパール料理はヒマラヤ、チベット、インドの影響が融合した魅力的な料理で、何世紀にもわたる地理、交易路、文化交流によって形作られてきました。インド料理の大胆で強いスパイスとは異なり、ネパール料理はバランスを重視します — 圧倒することなく香り高く、燃えるように辛くなく温かい。',
          },
        ],
      },
      {
        heading: { en: 'Dal Bhat: The National Dish', ja: 'ダルバート：国民食' },
        level: 2,
        paragraphs: [
          {
            en: 'Dal Bhat is the cornerstone of Nepalese cuisine — a complete meal of steamed rice (bhat) served with lentil soup (dal), vegetable curry (tarkari), and pickles (achar). It is eaten twice daily in Nepal and is deeply nutritious. At Nepal Dining, our Dal Bhat is prepared using traditional family recipes.',
            ja: 'ダルバートはネパール料理の基本 — 蒸しご飯（バート）にレンズ豆のスープ（ダル）、野菜カレー（タルカリ）、漬物（アチャール）を添えた完全な食事です。ネパールでは1日2回食べられる栄養たっぷりの料理です。ネパールダイニングでは、伝統的な家庭のレシピで調理しています。',
          },
        ],
      },
      {
        heading: { en: 'Momos: Nepal\'s Beloved Dumplings', ja: 'モモ：ネパールの人気餃子' },
        level: 2,
        paragraphs: [
          {
            en: 'Momos are Tibetan-Nepalese steamed dumplings similar in concept to Chinese dumplings or Japanese gyoza, but with distinct spicing using ginger, garlic, and Himalayan spices. They are typically served with a spicy tomato-sesame dipping sauce. At Nepal Dining, our momos are handmade fresh daily.',
            ja: 'モモはチベット・ネパール風の蒸し餃子で、中国の餃子や日本の餃子に似ていますが、ショウガ、ニンニク、ヒマラヤのスパイスを使った独特の味付けが特徴です。通常、スパイシーなトマトごまのディップソースと一緒に提供されます。ネパールダイニングのモモは毎日手作りです。',
          },
        ],
      },
      {
        heading: { en: 'Nepalese Curry Traditions', ja: 'ネパールのカレー伝統' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepalese curries differ from their Indian counterparts in subtle but important ways. They tend to be less oily, less creamy, and more focused on the natural flavour of the main ingredient. At Nepal Dining, we can adjust the spice level to suit your preference — from mild to traditional heat.',
            ja: 'ネパールのカレーはインドのカレーと微妙ですが重要な違いがあります。油分やクリームが少なく、主食材の自然な風味をより重視しています。ネパールダイニングでは、マイルドから伝統的な辛さまで、お好みに合わせてスパイスレベルを調整できます。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'What is dal bhat?', ja: 'ダルバートとは？' },
        a: { en: 'Dal bhat is the national dish of Nepal — steamed rice with lentil soup, vegetable curry, and pickles. It is eaten twice daily and is deeply nutritious.', ja: 'ダルバートはネパールの国民食 — 蒸しご飯にレンズ豆のスープ、野菜カレー、漬物を添えたものです。1日2回食べられ、栄養たっぷりです。' },
      },
      {
        q: { en: 'Is Nepalese food spicy?', ja: 'ネパール料理は辛いですか？' },
        a: { en: 'It can be, but typically more moderate than Indian food. At Nepal Dining, we adjust the spice level to your preference.', ja: '辛くすることもできますが、通常はインド料理よりマイルドです。ネパールダイニングではお好みに合わせて辛さを調整できます。' },
      },
    ],
  },
  {
    slug: 'hokkaido-food-guide',
    title: {
      en: 'Hokkaido Food Guide: Must-Try Dishes in Japan\'s Food Paradise',
      ja: '北海道グルメガイド：日本の食の楽園で食べるべき料理',
    },
    description: {
      en: 'Hokkaido is Japan\'s culinary crown jewel. This guide covers essential dishes from fresh seafood and miso ramen to lavender ice cream and Nepalese curry in Furano.',
      ja: '北海道は日本の食の王冠。新鮮なシーフード、味噌ラーメンからラベンダーアイスクリーム、富良野のネパールカレーまで。',
    },
    date: '2025-01-05',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Food & Travel', ja: 'グルメ＆旅行' },
    category: 'hokkaido-travel-tips',
    tags: ['hokkaido food', 'hokkaido cuisine', 'japan food guide'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg',
    featured: false,
    popular: true,
    readingTime: '8 min',
    sections: [
      {
        heading: { en: 'Why Hokkaido is Japan\'s Food Capital', ja: 'なぜ北海道は日本のグルメの首都なのか' },
        level: 2,
        paragraphs: [
          {
            en: 'Ask any Japanese person where the best food in Japan comes from, and more often than not, they will say Hokkaido. Japan\'s northernmost main island produces a disproportionate amount of the country\'s finest ingredients — from crab and sea urchin to butter, cheese, and melons.',
            ja: '「日本で一番おいしい食べ物はどこの?」と日本人に聞くと、多くの人が北海道と答えるでしょう。日本最北の主要島は、カニやウニからバター、チーズ、メロンまで、日本最高品質の食材を豊富に生産しています。',
          },
        ],
      },
      {
        heading: { en: 'Seafood: Hokkaido\'s Greatest Treasure', ja: 'シーフード：北海道最大の宝' },
        level: 2,
        paragraphs: [
          {
            en: 'Hokkaido\'s cold waters produce extraordinary seafood. Tarabagani (king crab) is the king of Hokkaido seafood — succulent, sweet, and available at most seafood markets. Uni (sea urchin), Hotate (scallops), and fresh salmon are equally spectacular. The best seafood markets include Sapporo\'s Nijo Market and Hakodate Morning Market.',
            ja: '北海道の冷たい海は素晴らしいシーフードを生み出します。タラバガニは北海道シーフードの王様 — 甘くてジューシー。ウニ、ホタテ、新鮮なサーモンも同様に素晴らしいです。おすすめの海鮮市場は札幌の二条市場と函館朝市です。',
          },
        ],
      },
      {
        heading: { en: 'Ramen & Soup Curry', ja: 'ラーメンとスープカレー' },
        level: 2,
        paragraphs: [
          {
            en: 'Sapporo miso ramen is world-famous — rich, buttery broth with thick noodles. But don\'t miss Hokkaido\'s unique contribution to curry culture: soup curry. Born in Sapporo in the 1970s, soup curry combines Indian-inspired spiced broth with Japanese vegetables and ingredients. Nepal Dining\'s soup curry blends this Hokkaido tradition with authentic Himalayan flavours.',
            ja: '札幌味噌ラーメンは世界的に有名 — 濃厚でバターの香る味噌スープと太麺。そして北海道独自のカレー文化：スープカレーも見逃せません。1970年代に札幌で生まれたスープカレーは、インド風のスパイスブロスに日本の野菜を組み合わせたもの。ネパールダイニングのスープカレーはこの北海道の伝統とヒマラヤの本格的な味わいを融合しています。',
          },
        ],
      },
      {
        heading: { en: 'Furano\'s Unique Food Scene', ja: '富良野独自のグルメシーン' },
        level: 2,
        paragraphs: [
          {
            en: 'Furano is famous for its corn, lavender soft serve ice cream, Furano melons, and local cheese. Nepal Dining adds an international dimension to this food scene, offering halal-friendly options and authentic South Asian cuisine using Furano\'s excellent local produce.',
            ja: '富良野はトウモロコシ、ラベンダーソフトクリーム、富良野メロン、地元チーズで有名です。ネパールダイニングはこのグルメシーンに国際的な次元を加え、富良野の優れた地元食材を使ったハラール対応の本格南アジア料理を提供しています。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'What food is Hokkaido most famous for?', ja: '北海道で最も有名な食べ物は？' },
        a: { en: 'Hokkaido is famous for fresh seafood (crab, sea urchin, scallops), Sapporo miso ramen, dairy products, corn, potatoes, and lamb.', ja: '北海道は新鮮なシーフード（カニ、ウニ、ホタテ）、札幌味噌ラーメン、乳製品、トウモロコシ、ジャガイモ、ラム肉で有名です。' },
      },
      {
        q: { en: 'Can vegetarians eat well in Hokkaido?', ja: 'ベジタリアンは北海道で楽しめますか？' },
        a: { en: 'Yes! Nepal Dining in Furano offers a wide range of vegetarian curries, dal, and vegetable momos.', ja: 'はい！富良野のネパールダイニングでは、ベジタリアンカレー、ダル、野菜モモなど幅広いベジタリアンメニューがあります。' },
      },
    ],
  },
  {
    slug: 'biei-blue-pond-guide',
    title: {
      en: 'Biei Blue Pond: Complete Visitor\'s Guide from Furano',
      ja: '美瑛青い池：富良野からの完全ガイド',
    },
    description: {
      en: 'Discover the ethereal Biei Blue Pond — one of Japan\'s most photographed natural wonders. How to get there from Furano, best times to visit, and photography tips.',
      ja: '幻想的な美瑛青い池を発見 — 日本で最も撮影される自然の驚異の一つ。富良野からのアクセス、ベストシーズン、撮影のヒント。',
    },
    date: '2025-01-20',
    author: 'Yuki Tanaka',
    authorRole: { en: 'Travel Writer', ja: '旅行ライター' },
    category: 'hokkaido-travel-tips',
    tags: ['biei blue pond', 'biei hokkaido', 'hokkaido travel'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg',
    featured: false,
    popular: false,
    readingTime: '5 min',
    sections: [
      {
        heading: { en: 'A Natural Wonder', ja: '自然の驚異' },
        level: 2,
        paragraphs: [
          {
            en: 'There are few sights in Japan as otherworldly as Biei\'s Blue Pond. An accidental wonder — the pond formed when sediment dams were built to protect Biei from volcanic activity — it now draws visitors from across the globe to marvel at its impossible shade of turquoise.',
            ja: '美瑛の青い池ほど幻想的な光景は日本にもほとんどありません。偶然の産物 — 火山活動から美瑛を守るための砂防ダムで形成された池 — 今では世界中から訪れる人々がその信じられないようなターコイズブルーに魅了されています。',
          },
          {
            en: 'The vivid turquoise colour comes from naturally occurring aluminium hydroxide particles that scatter light in a distinctive way.',
            ja: '鮮やかなターコイズの色は、天然の水酸化アルミニウム粒子が光を独特の方法で散乱させることによるものです。',
          },
        ],
      },
      {
        heading: { en: 'Getting There from Furano', ja: '富良野からのアクセス' },
        level: 2,
        paragraphs: [
          {
            en: 'Biei Blue Pond is approximately 30 km from central Furano, about a 35-40 minute drive. The most popular route combines Furano, Biei\'s flower fields, Blue Pond, and Asahikawa in a single day trip. Public transport is limited, so renting a car is recommended.',
            ja: '美瑛青い池は富良野中心部から約30km、車で約35〜40分です。最も人気のあるルートは、富良野、美瑛の花畑、青い池、旭川を1日で巡るコースです。公共交通機関は限られているため、レンタカーがおすすめです。',
          },
        ],
      },
      {
        heading: { en: 'Best Times to Visit', ja: 'おすすめの時期' },
        level: 2,
        paragraphs: [
          {
            en: 'The pond is beautiful year-round. In summer, the turquoise is most vivid against green foliage. In winter (December through March), the pond is illuminated at night, creating a magical blue glow amid the snowy landscape. Early morning visits offer the calmest water and best reflections.',
            ja: '池は一年中美しいです。夏は緑の木々を背景にターコイズが最も鮮やかです。冬（12月〜3月）は夜間ライトアップがあり、雪景色の中で幻想的な青い輝きを創り出します。早朝は水面が最も穏やかで、最高のリフレクションが撮れます。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Why is Biei Blue Pond so blue?', ja: 'なぜ美瑛の青い池はあんなに青いの？' },
        a: { en: 'The vivid turquoise colour comes from naturally occurring aluminium hydroxide particles that scatter light distinctively.', ja: '鮮やかなターコイズの色は、天然の水酸化アルミニウム粒子が光を独特に散乱させることで生まれます。' },
      },
      {
        q: { en: 'How far is Biei Blue Pond from Furano?', ja: '美瑛青い池は富良野からどのくらい？' },
        a: { en: 'About 30 km, approximately 35-40 minutes by car.', ja: '約30km、車で約35〜40分です。' },
      },
    ],
  },
  {
    slug: 'furano-winter-travel-guide',
    title: {
      en: 'Furano Winter Travel Guide: Skiing, Snow & Hot Curries',
      ja: '富良野冬の旅行ガイド：スキー、雪、ホットカレー',
    },
    description: {
      en: 'Your complete guide to visiting Furano in winter — from world-class skiing to warming up with authentic Nepalese curry.',
      ja: '冬の富良野旅行完全ガイド — ワールドクラスのスキーから本格ネパールカレーで暖まるまで。',
    },
    date: '2024-12-01',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Winter Sports Writer', ja: 'ウィンタースポーツライター' },
    category: 'seasonal-events',
    tags: ['furano winter', 'furano ski resort', 'hokkaido skiing'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg',
    featured: false,
    popular: true,
    readingTime: '7 min',
    sections: [
      {
        heading: { en: 'Why Furano for Winter?', ja: 'なぜ冬の富良野？' },
        level: 2,
        paragraphs: [
          {
            en: 'When skiers dream of Japan\'s legendary powder snow, they often think of Niseko — but insiders know that Furano offers an equally compelling winter experience with one major advantage: authenticity. Less international, less crowded, and more affordable, Furano is the real Japan experience.',
            ja: '日本の伝説的なパウダースノーといえばニセコを思い浮かべるスキーヤーが多いですが、通な人は知っています。富良野は同じくらい魅力的な冬の体験を、大きなアドバンテージとともに提供しています：本物の日本体験。より国際色が薄く、混雑が少なく、お手頃です。',
          },
        ],
      },
      {
        heading: { en: 'Furano Ski Resort', ja: '富良野スキー場' },
        level: 2,
        paragraphs: [
          {
            en: 'Furano Ski Resort typically opens in late November and runs through early May. Peak powder season is January and February, when Furano receives ultra-light "Japow" — Japanese powder snow that is among the driest and lightest in the world.',
            ja: '富良野スキー場は通常11月下旬にオープンし、5月初旬まで営業します。パウダーのピークシーズンは1月と2月で、世界でも最も乾燥して軽い「ジャパウ」（ジャパニーズパウダースノー）が降ります。',
          },
        ],
      },
      {
        heading: { en: 'After Skiing: Warm Up with Curry', ja: 'スキー後：カレーで暖まろう' },
        level: 2,
        paragraphs: [
          {
            en: 'After a day on the slopes, nothing warms you up like a hot bowl of Nepal Dining\'s soup curry or a tandoori platter. Our butter chicken and garlic naan are especially popular with skiers — hearty, warming, and deeply satisfying after burning thousands of calories on the mountain.',
            ja: 'ゲレンデの後は、ネパールダイニングの熱々のスープカレーやタンドリープレートほど体を温めてくれるものはありません。バターチキンとガーリックナンはスキーヤーに特に人気 — 山で何千カロリーも消費した後に、ボリューム満点で温かく、深い満足感を味わえます。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'When is the best time for skiing in Furano?', ja: '富良野のスキーのベストシーズンは？' },
        a: { en: 'Peak powder season is January and February. The resort opens late November through early May.', ja: 'パウダーのピークは1〜2月。スキー場は11月下旬〜5月初旬まで営業します。' },
      },
      {
        q: { en: 'Is Furano better than Niseko?', ja: '富良野はニセコより良いですか？' },
        a: { en: 'Furano is less crowded, more affordable, and offers a more authentic Japanese experience. Snow quality is comparable.', ja: '富良野は混雑が少なく、お手頃で、より本物の日本体験ができます。雪質は同等です。' },
      },
    ],
  },
  {
    slug: 'furano-family-travel-guide',
    title: {
      en: 'Furano with Kids: The Complete Family Travel Guide',
      ja: '子連れ富良野：家族旅行完全ガイド',
    },
    description: {
      en: 'Planning a family trip to Furano? This guide covers family-friendly activities, where to eat with children, seasonal events, and practical tips.',
      ja: '富良野への家族旅行を計画中？ファミリー向けアクティビティ、子連れグルメ、季節のイベント、実用的なヒントをご紹介。',
    },
    date: '2024-11-15',
    author: 'Yuki Tanaka',
    authorRole: { en: 'Family Travel Writer', ja: 'ファミリー旅行ライター' },
    category: 'furano-travel-guide',
    tags: ['furano family travel', 'furano kids', 'hokkaido family trip'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg',
    featured: false,
    popular: false,
    readingTime: '6 min',
    sections: [
      {
        heading: { en: 'Why Furano is Perfect for Families', ja: 'なぜ富良野は家族に最適か' },
        level: 2,
        paragraphs: [
          {
            en: 'Travelling with children requires a special kind of destination — somewhere with enough variety to keep kids engaged, natural beauty to inspire wonder, and a relaxed atmosphere. Furano delivers all of this with lavender farms, animal parks, nature activities, and uncrowded streets.',
            ja: '子連れ旅行には特別な目的地が必要です — 子どもを飽きさせない多様性、驚きを与える自然の美しさ、リラックスした雰囲気。富良野はラベンダー農園、動物公園、自然アクティビティ、混雑のない通りでこれらすべてを提供します。',
          },
        ],
      },
      {
        heading: { en: 'Family-Friendly Activities', ja: 'ファミリー向けアクティビティ' },
        level: 2,
        paragraphs: [
          {
            en: 'In summer, enjoy lavender field walks, cheese-making workshops, and melon picking. In winter, Furano Ski Resort has gentle beginner slopes and a snow park suitable for all ages. Year-round, Furano Marche offers local crafts and food souvenirs.',
            ja: '夏はラベンダー畑散策、チーズ作り体験、メロン狩りが楽しめます。冬は富良野スキー場の初心者向けコースとキッズスノーパークがあります。通年で富良野マルシェでは地元のクラフトやグルメのお土産が見つかります。',
          },
        ],
      },
      {
        heading: { en: 'Dining with Children in Furano', ja: '富良野での子連れグルメ' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepal Dining is particularly welcoming to families, with a children\'s curry option, high chairs available, and staff experienced in accommodating families with young children. The mild butter chicken and plain naan are always a hit with kids.',
            ja: 'ネパールダイニングは特にファミリーに優しく、お子様カレーメニュー、ハイチェア完備、子連れ対応に慣れたスタッフがいます。マイルドなバターチキンとプレーンナンはいつもお子様に大人気です。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Is Furano good for families with young children?', ja: '富良野は小さい子ども連れに向いていますか？' },
        a: { en: 'Absolutely! The lavender farms, animal farms, nature activities, and uncrowded streets make it ideal for families.', ja: 'もちろんです！ラベンダー農園、動物農場、自然アクティビティ、混雑のない通りは家族に最適です。' },
      },
      {
        q: { en: 'Are restaurants in Furano family-friendly?', ja: '富良野のレストランは子連れに優しいですか？' },
        a: { en: 'Many are! Nepal Dining has children\'s curry, high chairs, and family-experienced staff.', ja: '多くのレストランが対応しています！ネパールダイニングにはお子様カレー、ハイチェア、子連れ対応スタッフがいます。' },
      },
    ],
  },
];

export function getPostsByCategory(cat: Category): BlogPost[] {
  return blogPosts.filter(p => p.category === cat);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter(p => p.featured).slice(0, 3);
}

export function getPopularPosts(): BlogPost[] {
  return blogPosts.filter(p => p.popular).slice(0, 5);
}

export function getRelatedPosts(slug: string, n = 3): BlogPost[] {
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return [];
  return blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, n);
}

export function searchPosts(query: string, lang: 'en' | 'ja'): BlogPost[] {
  const q = query.toLowerCase();
  return blogPosts.filter(p =>
    p.title[lang].toLowerCase().includes(q) ||
    p.description[lang].toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
}
