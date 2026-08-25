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
    slug: 'where-to-eat-after-skiing-furano',
    title: {
      en: 'Best Restaurants Near Furano Ski Resort: Where to Eat After Skiing',
      ja: '富良野スキー場周辺のおすすめレストラン：スキー後の食事ガイド',
    },
    description: {
      en: 'Where to eat after a day on the slopes at Furano Ski Resort — warming soup curry, fresh naan, halal-friendly and vegetarian options, about 15 minutes away with free parking.',
      ja: '富良野スキー場で滑った後の食事ガイド — 体を温めるスープカレー、焼きたてナン、ハラール対応・ベジタリアン対応。車で約15分、無料駐車場あり。',
    },
    date: '2026-08-25',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Winter Sports Writer', ja: 'ウィンタースポーツライター' },
    category: 'seasonal-events',
    tags: ['furano ski resort restaurant', 'where to eat after skiing furano', 'curry after skiing furano', 'halal food near furano ski resort', 'vegetarian food furano', 'dinner near furano ski resort'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg',
    featured: true,
    popular: true,
    readingTime: '6 min',
    sections: [
      {
        heading: { en: 'How Far Is It From the Slopes?', ja: 'ゲレンデからどのくらい？' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepal Dining sits about 6 kilometres from Furano Ski Resort, in Nakafurano — roughly 15 minutes by car on a normal winter day, and an easy stop on the way back to Kamifurano, Biei or your accommodation. There is free parking on site, which matters more than it sounds when you are still in ski boots and the car is full of gear.',
            ja: 'ネパールダイニングは富良野スキー場から約6キロ、中富良野町にあります。通常の冬の日なら車で約15分。上富良野や美瑛、宿へ戻る道すがら気軽に立ち寄れる場所です。敷地内に無料駐車場があります — スキーブーツのまま、荷物を積んだ車で向かうときには、これが想像以上にありがたいはずです。',
          },
          {
            en: 'We are not inside Furano city itself. We are in Nakafurano, the next town along the valley, which is why the drive is short but the prices and the atmosphere are noticeably more relaxed than the resort strip.',
            ja: '当店は富良野市内ではなく、谷筋をひとつ進んだ中富良野町にあります。だからこそ移動は短時間で済み、それでいて価格も雰囲気もリゾート中心部よりずっと落ち着いています。',
          },
        ],
      },
      {
        heading: { en: 'Why Curry After a Day on the Mountain', ja: 'スキーの後にカレーがいい理由' },
        level: 2,
        paragraphs: [
          {
            en: 'A full day at Furano burns through a lot of energy, and the cold does as much of that as the skiing. What you want afterwards is something hot, salty and substantial that arrives quickly. Soup curry does exactly that — it is a Hokkaido speciality for good reason, and it is close to the ideal recovery meal after a day in the snow.',
            ja: '富良野で一日滑ると、想像以上に体力を消耗します。しかもその多くは滑走そのものよりむしろ寒さによるもの。だから後に欲しくなるのは、熱くて、しっかり塩気があって、すぐに出てくる食事です。スープカレーはまさにそれ — 北海道の名物になったのには理由があり、雪の中で過ごした一日の後の回復食としてほぼ理想的です。',
          },
        ],
      },
      {
        heading: { en: 'What to Order After Skiing', ja: 'スキー後におすすめのメニュー' },
        level: 2,
        paragraphs: [
          {
            en: 'Soup curry is the obvious first choice — a thin, spiced broth with vegetables and your choice of chicken or vegetables, and you set the spice level yourself. Butter chicken is the other favourite with skiers: rich, mild and warming, and it goes well with a family sharing several dishes.',
            ja: 'まず選んでいただきたいのはスープカレー。スパイスの効いたさらりとしたスープに野菜、そしてチキンか野菜をお選びいただけます。辛さはお好みで調整可能です。もうひとつスキーヤーに人気なのがバターチキン — コクがあり、マイルドで、体が温まります。数皿を家族でシェアするスタイルにもよく合います。',
          },
          {
            en: 'Order the naan fresh from the tandoor — we bake it to order, and cheese naan in particular tends to disappear fast at a table of hungry skiers. Momo, Nepalese steamed dumplings, make a good starter while the curries are being prepared.',
            ja: 'ナンはタンドールで焼きたてをどうぞ — ご注文をいただいてから焼き上げます。とくにチーズナンは、お腹を空かせたスキーヤーのテーブルではあっという間になくなります。カレーをお待ちいただく間の前菜には、ネパールの蒸し餃子モモがおすすめです。',
          },
        ],
      },
      {
        heading: { en: 'Halal-Friendly and Vegetarian Options', ja: 'ハラール対応・ベジタリアン対応について' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepal Dining is halal-friendly. To be clear about what that means: we are not a halal-certified restaurant, and we will not tell you otherwise. What we can do is prepare a great many of our dishes without pork or alcohol, and our staff will tell you honestly what is in anything you ask about. Please mention your requirements when you order.',
            ja: '当店はハラールフレンドリーです。ただし、その意味は正確にお伝えします。当店はハラール認証店ではなく、そう名乗ることもいたしません。できるのは、多くのメニューを豚肉・アルコールを使わずにご用意することと、お尋ねいただいた料理の内容をスタッフが正直にお伝えすることです。ご注文の際にご要望をお知らせください。',
          },
          {
            en: 'Vegetarian visitors are well covered. Vegetable curries, dal, mixed vegetable dishes and vegetarian momo are all on the regular menu rather than hidden away as substitutions, and the same applies — ask us and we will tell you exactly what is in a dish.',
            ja: 'ベジタリアンの方にも十分な選択肢があります。野菜カレー、ダル、ミックスベジタブル、ベジモモなどは代替メニューではなく通常メニューとしてご用意しています。こちらも同様に、お尋ねいただければ料理の内容を正確にお答えします。',
          },
        ],
      },
      {
        heading: { en: 'Hours, Winter Driving and Booking Ahead', ja: '営業時間・冬の道路・ご予約について' },
        level: 2,
        paragraphs: [
          {
            en: 'We are open 11:00–15:00 for lunch and 17:00–21:00 for dinner, Tuesday to Sunday. We close on the 2nd and 4th Wednesday of each month, so it is worth checking before you set out. Last orders are before 21:00, which is earlier than many visitors expect after a late afternoon on the slopes.',
            ja: '営業時間はランチ11:00〜15:00、ディナー17:00〜21:00、火曜〜日曜です。毎月第2・第4水曜日は定休日ですので、お出かけ前にご確認ください。ラストオーダーは21:00前 — 夕方遅くまで滑った後だと、思ったより早いと感じられるかもしれません。',
          },
          {
            en: 'Roads in the valley are cleared regularly but they are snow-covered for most of the season, so allow more time than the map suggests and use winter tyres. In peak ski season, and especially for groups, please call ahead on 0167-44-2444 or book a table online — a full restaurant and a hungry group after dark is not a happy combination.',
            ja: '谷沿いの道路は定期的に除雪されますが、シーズン中の大半は雪道です。地図の所要時間より余裕をもって、冬タイヤでお越しください。スキーシーズンのピーク時、とくにグループでのご来店は、事前に 0167-44-2444 までお電話いただくか、オンラインでのご予約をおすすめします。暗くなってから満席でお待たせするのは、私たちも本意ではありません。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'How far is Nepal Dining from Furano Ski Resort?', ja: '富良野スキー場からどのくらいの距離ですか？' },
        a: { en: 'About 6 kilometres, roughly 15 minutes by car in normal winter conditions. We are in Nakafurano, the next town along from Furano, and there is free parking on site.', ja: '約6キロ、通常の冬の路面状況で車で約15分です。富良野の隣、中富良野町にあり、無料駐車場をご用意しています。' },
      },
      {
        q: { en: 'What time do you close in ski season?', ja: 'スキーシーズンの閉店時間は？' },
        a: { en: 'Dinner service runs 17:00–21:00, Tuesday to Sunday, with last orders before 21:00. We are closed on the 2nd and 4th Wednesday of each month.', ja: 'ディナーは火曜〜日曜の17:00〜21:00、ラストオーダーは21:00前です。毎月第2・第4水曜日は定休日です。' },
      },
      {
        q: { en: 'Is there halal food near Furano Ski Resort?', ja: '富良野スキー場の近くでハラール対応の食事はできますか？' },
        a: { en: 'Nepal Dining is halal-friendly, about 15 minutes from the resort. We are not halal-certified, but many dishes are prepared without pork or alcohol and our staff will tell you exactly what is in any dish. Please mention your requirements when ordering.', ja: 'ネパールダイニングはハラールフレンドリーで、スキー場から約15分です。ハラール認証店ではありませんが、多くの料理を豚肉・アルコールなしでご用意でき、スタッフが料理の内容を正確にお伝えします。ご注文時にご要望をお知らせください。' },
      },
      {
        q: { en: 'Do you have vegetarian food?', ja: 'ベジタリアン向けの料理はありますか？' },
        a: { en: 'Yes. Vegetable curries, dal, mixed vegetable dishes and vegetarian momo are all on the regular menu, not special-order substitutions.', ja: 'はい。野菜カレー、ダル、ミックスベジタブル、ベジモモなどを通常メニューとしてご用意しています。特別対応の代替メニューではありません。' },
      },
      {
        q: { en: 'Do I need to book in ski season?', ja: 'スキーシーズンは予約が必要ですか？' },
        a: { en: 'It is strongly recommended for groups and on busy evenings. Call 0167-44-2444 or book a table through the website.', ja: 'グループでのご来店や混雑する夜は、ご予約を強くおすすめします。0167-44-2444 までお電話いただくか、ウェブサイトからご予約ください。' },
      },
    ],
  },
  {
    slug: 'vegetarian-food-in-furano',
    title: {
      en: 'Vegetarian and Vegan-Friendly Food in Furano: What to Order',
      ja: '富良野のベジタリアン・ヴィーガン対応料理：何を頼めばいいか',
    },
    description: {
      en: 'Vegetarian food in the Furano area of Hokkaido. The plant-based dishes on our menu, vegan and nut-free cooking on request, and how to order so the kitchen gets it right.',
      ja: '北海道富良野エリアのベジタリアン料理。当店の植物性メニュー、ご要望に応じたヴィーガン・ナッツ不使用の調理、そして厨房に正しく伝わるご注文の仕方をご案内します。',
    },
    date: '2026-08-25',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Guest Relations', ja: 'ゲストリレーション' },
    category: 'food-culture',
    tags: ['vegetarian restaurant furano', 'vegan food furano', 'vegetarian indian food furano', 'vegetarian food near furano ski resort', '富良野 ベジタリアン'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg',
    featured: false,
    popular: true,
    readingTime: '6 min',
    sections: [
      {
        heading: { en: 'Vegetarian Eating in the Furano Area', ja: '富良野エリアでのベジタリアンの食事' },
        level: 2,
        paragraphs: [
          {
            en: 'Vegetarian travellers in rural Hokkaido run into the same wall repeatedly, which is that a dish can look entirely plant-based and still be built on dashi made from bonito. Vegetable tempura, miso soup, a bowl of noodles in clear broth: all of them commonly carry fish stock, and nobody thinks to mention it because in Japan it is not considered a meat ingredient at all.',
            ja: '北海道の地方を旅するベジタリアンの方は、同じ壁に何度もぶつかります。見た目は完全に植物性の料理でも、鰹だしが使われていることがあるのです。野菜天ぷら、味噌汁、澄んだスープの麺類。いずれも魚のだしを含むことが多く、日本ではだしを肉の材料とは考えないため、わざわざ説明されないことも珍しくありません。',
          },
          {
            en: 'Indian and Nepalese kitchens are a different proposition. Vegetarian cooking is not an accommodation there, it is half the tradition, and the stock is vegetable or nothing at all. Nepal Dining is in Nakafurano, about six kilometres from Furano Ski Resort and around fifteen minutes by car, and vegetarian dishes are on the standard menu rather than hidden behind a special request.',
            ja: 'インド・ネパール料理の厨房は事情が異なります。ベジタリアン料理は「特別対応」ではなく伝統の半分を占めるもので、だしは野菜か、あるいは使いません。ネパールダイニングは中富良野町にあり、富良野スキー場から約6キロ、車でおよそ15分。ベジタリアン料理は特別注文ではなく通常メニューに載っています。',
          },
        ],
      },
      {
        heading: { en: 'The Vegetarian Dishes on Our Menu', ja: '当店のベジタリアンメニュー' },
        level: 2,
        paragraphs: [
          {
            en: 'Mix Vegetable Curry is the everyday choice, mild enough for children and made with seasonal vegetables. Mix Vegetable Soup Curry is the Hokkaido style, a thinner spiced broth rather than a thick sauce, and it is the one to order after a cold day outside. Both come with rice or naan.',
            ja: 'ミックス野菜カレーは日常的な一皿で、辛さは控えめ、お子様にも向いており、季節の野菜を使っています。ミックス野菜スープカレーは北海道スタイル。とろみのあるソースではなく、スパイスの効いたさらりとしたスープで、寒い一日の後にはこちらがおすすめです。どちらもライスかナンをお選びいただけます。',
          },
          {
            en: 'Momo, the Nepalese steamed dumpling, comes with either a chicken or a vegetable filling — ask for the vegetable one when you order. That also applies to the Momo and Vegetable Soup Curry, which is the dish most likely to be new to you and the one people come back for.',
            ja: 'ネパールの蒸し餃子モモは、チキンと野菜の2種類の餡からお選びいただけます。ご注文の際に「野菜」とお伝えください。モモ野菜スープカレーも同様です。初めての方が最も多く、そしてリピーターの多い一品です。',
          },
          {
            en: 'On the bread side, Plain Naan, Garlic Naan and Cheese Naan are all baked to order in the tandoor. Rice is available on its own. Between a vegetable curry, a naan, some momo and a soup curry to share, a vegetarian table eats as well here as anyone else does, which is not something we can say about every restaurant in the valley.',
            ja: 'パンはプレーンナン、ガーリックナン、チーズナンをタンドールでその都度焼き上げます。ライス単品もございます。野菜カレーとナン、モモ、それにスープカレーを取り分ければ、ベジタリアンの方も他のお客様と変わらない食卓になります。この谷のすべてのレストランについて同じことが言えるわけではありません。',
          },
        ],
      },
      {
        heading: { en: 'Vegan, Allergies and Nut-Free: Please Just Ask', ja: 'ヴィーガン・アレルギー・ナッツ不使用：お気軽にお尋ねください' },
        level: 2,
        paragraphs: [
          {
            en: 'Vegetarian and vegan are not the same request, so here is the honest detail. Our standard naan dough is made with dairy and egg, and several curries are finished with cream or yoghurt — that is what gives Butter Chicken and Tikka Masala their texture. So the default versions of those are not vegan.',
            ja: 'ベジタリアンとヴィーガンは別のご要望ですので、正確にお伝えします。当店の通常のナン生地には乳製品と卵を使用しており、いくつかのカレーは仕上げに生クリームやヨーグルトを使います。バターチキンやティッカマサラの口当たりはそこから生まれています。つまり、これらの通常版はヴィーガン対応ではありません。',
          },
          {
            en: 'What we can do is make them vegan on request. Tell us when you order and the kitchen will prepare your dishes — naan included — without dairy or egg. The same goes for allergies and for nut-free cooking: ask our staff, tell them exactly what you need to avoid, and they will work with the kitchen. We would far rather have that conversation before the food is cooked than after it reaches the table.',
            ja: 'ご要望をいただければ、ヴィーガン対応でお作りします。ご注文時にお申し付けください。ナンを含め、乳製品・卵を使わずにご用意いたします。アレルギーやナッツ不使用のご要望も同様です。避けたいものを具体的にスタッフにお伝えいただければ、厨房と調整いたします。お料理がテーブルに届いてからより、つくる前にお話しいただけるほうがずっと確実です。',
          },
        ],
      },
      {
        heading: { en: 'Spice Levels and Ordering Tips', ja: '辛さの調整とご注文のコツ' },
        level: 2,
        paragraphs: [
          {
            en: 'Spice is adjustable and the default is milder than most visitors expect, because the majority of our regulars are local families. If you want it hot, say so, and if you are ordering for a mixed table with children, order the vegetable curry mild and let the adults add heat.',
            ja: '辛さは調整できます。常連のお客様の多くが地元のご家族のため、標準の辛さは多くの旅行者が想像するより控えめです。辛めがお好みならその旨をお伝えください。お子様を含むテーブルでは、野菜カレーを控えめにしてお召し上がりいただき、大人の方が辛さを足すのがおすすめです。',
          },
        ],
      },
      {
        heading: { en: 'Where We Are and When We Are Open', ja: 'アクセスと営業時間' },
        level: 2,
        paragraphs: [
          {
            en: 'We are in Nakafurano, the town immediately north of Furano, with free parking on site. Lunch runs 11:00 to 15:00 and dinner 17:00 to 21:00. We are closed on the second and fourth Wednesday of each month. For a group, a call ahead on 0167-44-2444 is worth the thirty seconds.',
            ja: '富良野のすぐ北隣、中富良野町にあり、敷地内に無料駐車場がございます。ランチは11:00〜15:00、ディナーは17:00〜21:00。毎月第2・第4水曜は定休日です。グループでお越しの際は、0167-44-2444 まで30秒のお電話をいただけると確実です。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Is there vegetarian food in Furano?', ja: '富良野にベジタリアン料理はありますか？' },
        a: { en: 'Yes. Nepal Dining in Nakafurano, about fifteen minutes from Furano, keeps vegetarian curries and soup curries on the standard menu rather than as a special order.', ja: 'はい。富良野から車で約15分の中富良野町にあるネパールダイニングでは、ベジタリアンのカレーとスープカレーを特別注文ではなく通常メニューでご用意しています。' },
      },
      {
        q: { en: 'Do you have vegan options?', ja: 'ヴィーガン対応はありますか？' },
        a: { en: 'Yes, on request. Our standard naan dough contains dairy and egg and several curries are finished with cream or yoghurt, so the default versions are not vegan — but tell us when you order and the kitchen will prepare your dishes, naan included, without dairy or egg.', ja: 'はい、ご要望に応じて対応いたします。当店の通常のナン生地には乳製品と卵を使用し、いくつかのカレーは生クリームやヨーグルトで仕上げるため、通常版はヴィーガン対応ではありません。ご注文時にお申し付けいただければ、ナンを含め乳製品・卵を使わずにお作りします。' },
      },
      {
        q: { en: 'Does your vegetable curry contain fish stock?', ja: '野菜カレーに魚のだしは入っていますか？' },
        a: { en: 'No. Our kitchen is Nepalese and Indian, so bonito dashi is not part of how we cook — which is exactly the ingredient that catches vegetarians out elsewhere in Japan.', ja: 'いいえ。当店の厨房はネパール・インド料理ですので、鰹だしは使いません。日本の他のお店でベジタリアンの方が見落としがちなのが、まさにこの材料です。' },
      },
      {
        q: { en: 'Can you make the vegetarian dishes less spicy for children?', ja: '子ども向けに辛さを抑えられますか？' },
        a: { en: 'Yes, spice is adjustable and our default is already mild, because most of our regulars are local families.', ja: 'はい、辛さは調整できます。常連のお客様の多くが地元のご家族のため、標準の辛さはもともと控えめです。' },
      },
      {
        q: { en: 'Is the momo vegetarian?', ja: 'モモはベジタリアンですか？' },
        a: { en: 'It comes both ways — chicken or vegetable. Ask for the vegetable filling when you order, and the same applies to the Momo and Vegetable Soup Curry.', ja: 'チキンと野菜の2種類からお選びいただけます。ご注文の際に「野菜」とお伝えください。モモ野菜スープカレーも同様です。' },
      },
      {
        q: { en: 'Can you cook nut-free, or around an allergy?', ja: 'ナッツ不使用やアレルギー対応はできますか？' },
        a: { en: 'Please ask our staff and tell them exactly what needs to be avoided — they will work it out with the kitchen. Do it when you order rather than after the food arrives.', ja: 'スタッフに、避けたいものを具体的にお伝えください。厨房と調整いたします。お料理が届いてからではなく、ご注文時にお願いいたします。' },
      },
      {
        q: { en: 'Is there vegetarian food near Furano Ski Resort?', ja: '富良野スキー場の近くにベジタリアン料理はありますか？' },
        a: { en: 'We are about six kilometres from the resort, roughly fifteen minutes by car, with free parking. A vegetable soup curry after a day on the mountain is the order we would recommend.', ja: 'スキー場から約6キロ、車でおよそ15分、無料駐車場もございます。山で過ごした一日の後には、野菜スープカレーをおすすめします。' },
      },
    ],
  },
  {
    slug: 'best-curry-in-furano',
    title: {
      en: 'The Best Curry in Furano: Nepalese, Indian and Hokkaido Soup Curry',
      ja: '富良野で食べる本格カレー：ネパール・インドカレーと北海道スープカレー',
    },
    description: {
      en: 'Three different kinds of curry in the Furano area — Nepalese, North Indian and Hokkaido soup curry — what makes each one different, and which to order first.',
      ja: '富良野エリアで味わえる3種類のカレー。ネパール、北インド、そして北海道スープカレー。それぞれの違いと、最初に頼むべき一皿をご紹介します。',
    },
    date: '2026-08-25',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Kitchen', ja: 'キッチン' },
    category: 'food-culture',
    tags: ['best curry furano', 'curry restaurant furano', 'soup curry furano', 'indian curry furano', '富良野 カレー', '富良野 スープカレー'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg',
    featured: false,
    popular: true,
    readingTime: '7 min',
    sections: [
      {
        heading: { en: 'Three Kinds of Curry Under One Roof', ja: '一つの店で味わう3種類のカレー' },
        level: 2,
        paragraphs: [
          {
            en: 'Ask for curry in Furano and you could be handed three quite different things. There is Japanese curry rice, thick and sweet and closer to a stew. There is Hokkaido soup curry, which is a local invention from Sapporo and is exactly what the name says. And there is the Indian and Nepalese kind, cooked from whole spices with the sauce built around the meat rather than poured over it.',
            ja: '富良野で「カレー」と頼むと、まったく異なる3つの料理が出てくる可能性があります。とろみと甘みがあり、シチューに近い日本のカレーライス。札幌発祥の北海道スープカレー。そして、ホールスパイスから調理し、ソースを上からかけるのではなく肉とともに仕立てるインド・ネパールのカレーです。',
          },
          {
            en: 'Nepal Dining, in Nakafurano about fifteen minutes north of Furano, does the second and third of those. Our kitchen is Nepalese, our menu is largely North Indian, and the soup curries are our answer to the Hokkaido dish we now live among. Below is how to tell them apart and what to order first.',
            ja: 'ネパールダイニングは富良野から北へ車で約15分の中富良野町にあり、この2番目と3番目をお出ししています。厨房はネパール、メニューは主に北インド、そしてスープカレーは、いま暮らすこの北海道の料理に対する私たちの答えです。以下、その違いと最初の一皿をご案内します。',
          },
        ],
      },
      {
        heading: { en: 'Nepalese Curry: Rara, Sag and Dal', ja: 'ネパールのカレー：ララ、サグ、ダル' },
        level: 2,
        paragraphs: [
          {
            en: 'Chicken Rara Curry is the one to order if you want to taste what a Nepalese kitchen actually cooks. Rara is a home style, spiced but not heavy, with the sauce reduced rather than thickened, and you will not find it in the chain curry houses along the highway.',
            ja: '本場のネパール家庭の味を知りたい方には、チキンララカレーをおすすめします。ララは家庭料理のスタイルで、スパイスは効いていながら重たくなく、とろみをつけるのではなくソースを煮詰めて仕上げます。国道沿いのチェーン店では出会えない一皿です。',
          },
          {
            en: 'Sag means greens. Mutton Sag Curry and Chicken Sag Curry are both built on spinach, which makes them the lighter end of the meat menu. Dal Chicken and Dal Mutton bring lentils into the same pot, and lentils are the thing that makes a Nepalese meal filling in a way that has nothing to do with richness. Keema Egg Curry and Sag Keema Curry are the minced-meat side of the same tradition.',
            ja: 'サグとは青菜のこと。マトンサグカレーとチキンサグカレーはほうれん草を土台にしており、肉料理の中では軽めの部類です。ダルチキンとダルマトンは同じ鍋に豆を加えたもの。豆こそが、こってりさせることなくネパールの食事に満足感を与える存在です。キーマエッグカレーとサグキーマカレーは、同じ伝統の挽き肉料理です。',
          },
        ],
      },
      {
        heading: { en: 'Indian Curry: Butter Chicken, Tikka Masala and the Tandoor', ja: 'インドのカレー：バターチキン、ティッカマサラ、そしてタンドール' },
        level: 2,
        paragraphs: [
          {
            en: 'Chicken Tikka Masala is our best seller and the safest first order for anyone who has not eaten this food before. Butter Chicken is milder still and is what most children in the dining room are eating. Both are finished with dairy, which is where the roundness comes from.',
            ja: 'チキンティッカマサラカレーは当店の一番人気で、この料理を初めて召し上がる方にも安心の一皿です。バターチキンカレーはさらにマイルドで、店内のお子様の多くが召し上がっています。どちらも乳製品で仕上げており、そのまろやかな口当たりが生まれています。',
          },
          {
            en: 'If you would rather have something without a sauce at all, Tandoori Chicken and Chicken Tikka come straight off the tandoor. So does the naan, which is baked to order rather than warmed — Garlic Naan and Cheese Naan are the two that regulars keep coming back for, and a cheese naan shared across a table of four is a reliable way to end an argument about what to order.',
            ja: 'ソースのない料理をお望みなら、タンドリーチキンとチキンティッカをタンドールから直接お出しします。ナンも同様に、温め直しではなくご注文ごとに焼き上げます。常連のお客様がくり返し注文されるのはガーリックナンとチーズナン。4人でチーズナンを分け合えば、何を頼むかの議論はたいてい決着します。',
          },
        ],
      },
      {
        heading: { en: 'Hokkaido Soup Curry, Made by a Nepalese Kitchen', ja: '北海道スープカレーを、ネパールの厨房で' },
        level: 2,
        paragraphs: [
          {
            en: 'Soup curry is Hokkaido\'s own dish. It is thin rather than thick, closer to a spiced broth, and the vegetables are cooked to keep their shape rather than dissolve. We make three: Chicken and Vegetable, Mix Vegetable, and Momo and Vegetable, which puts Nepalese dumplings in a Sapporo-style bowl and is the most Nepalese thing on the Hokkaido half of the menu.',
            ja: 'スープカレーは北海道が生んだ料理です。とろみではなくさらりとしたスパイススープに近く、野菜は溶かさず形を残して仕上げます。当店では3種類をご用意しています。チキン野菜、ミックス野菜、そしてモモ野菜スープカレー。札幌スタイルの器にネパールの餃子を入れた、メニューの北海道側で最もネパールらしい一皿です。',
          },
          {
            en: 'In winter the soup curries outsell everything else, and the reason is not complicated. After a day outside in Hokkaido you want the heat to arrive as liquid.',
            ja: '冬はスープカレーが何よりもよく出ます。理由は単純です。北海道で一日外にいた後は、温かさが液体でやってくるほうがありがたいのです。',
          },
        ],
      },
      {
        heading: { en: 'Naan, Rice and How to Order', ja: 'ナン、ライス、注文の仕方' },
        level: 2,
        paragraphs: [
          {
            en: 'Most curries come with a choice of rice or naan and many can be ordered as a large portion. Spice is adjustable in both directions; the default is milder than visitors expect because most of our regulars are local families. If you are undecided, order one Nepalese curry, one soup curry and a garlic naan for the table, and share.',
            ja: 'ほとんどのカレーはライスかナンをお選びいただけ、多くは大盛りにも対応しています。辛さは強くも弱くも調整可能。常連のお客様の多くが地元のご家族のため、標準の辛さは旅行者の想像より控えめです。迷われたら、ネパールのカレーを1つ、スープカレーを1つ、それにガーリックナンをテーブルに頼んで分け合ってみてください。',
          },
          {
            en: 'We are open 11:00 to 15:00 and 17:00 to 21:00, closed the second and fourth Wednesday of each month, with free parking. Takeout is available if you would rather eat back at the accommodation.',
            ja: '営業は11:00〜15:00と17:00〜21:00、毎月第2・第4水曜は定休日、無料駐車場をご用意しています。宿でお召し上がりになりたい場合は、テイクアウトも承ります。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Where can I find the best curry in Furano?', ja: '富良野でおいしいカレーはどこで食べられますか？' },
        a: { en: 'Nepal Dining is in Nakafurano, about fifteen minutes north of Furano, and serves Nepalese and North Indian curries alongside Hokkaido-style soup curry. Chicken Tikka Masala is the best seller; Chicken Rara Curry is the one to try if you want something you will not find elsewhere in the valley.', ja: 'ネパールダイニングは富良野から北へ約15分の中富良野町にあり、ネパール・北インドのカレーと北海道スタイルのスープカレーをお出ししています。一番人気はチキンティッカマサラカレー。この谷の他では味わえないものをお探しなら、チキンララカレーをどうぞ。' },
      },
      {
        q: { en: 'What is the difference between soup curry and normal curry?', ja: 'スープカレーと普通のカレーの違いは何ですか？' },
        a: { en: 'Soup curry is a Hokkaido dish: a thin spiced broth with vegetables kept whole, eaten with rice on the side. A regular curry has a reduced, thicker sauce cooked together with the meat.', ja: 'スープカレーは北海道の料理で、スパイスの効いたさらりとしたスープに野菜を形を残して入れ、ライスを添えていただきます。通常のカレーは、肉と一緒に煮詰めたとろみのあるソースです。' },
      },
      {
        q: { en: 'Is the curry very spicy?', ja: 'カレーはとても辛いですか？' },
        a: { en: 'Not by default. Spice is adjustable, and the standard level is set for local families. Ask for it hotter and we will oblige.', ja: '標準では辛くありません。辛さは調整でき、標準は地元のご家族に合わせています。辛めをご希望であればお申し付けください。' },
      },
      {
        q: { en: 'Do you have vegetarian curry?', ja: 'ベジタリアンのカレーはありますか？' },
        a: { en: 'Yes — Mix Vegetable Curry and Mix Vegetable Soup Curry are both on the standard menu.', ja: 'はい。ミックス野菜カレーとミックス野菜スープカレーを通常メニューでご用意しています。' },
      },
      {
        q: { en: 'Is the naan baked fresh?', ja: 'ナンは焼きたてですか？' },
        a: { en: 'Yes, in the tandoor, to order. Plain, garlic and cheese.', ja: 'はい、タンドールでご注文ごとに焼き上げます。プレーン、ガーリック、チーズをご用意しています。' },
      },
    ],
  },
  {
    slug: 'where-to-eat-in-nakafurano',
    title: {
      en: 'Where to Eat in Nakafurano: A Guide to the Town Next Door to Furano',
      ja: '中富良野で食事するなら：富良野の隣町ガイド',
    },
    description: {
      en: 'Nakafurano is a small town between Furano and Kamifurano, and it is where Nepal Dining has cooked since 2019. Lunch, dinner, parking, access from Farm Tomita and the station.',
      ja: '中富良野は富良野と上富良野の間にある小さな町。ネパールダイニングが料理を出し続けてきた場所です。ランチ、ディナー、駐車場、ファーム富田や中富良野駅からのアクセスをご案内します。',
    },
    date: '2026-08-25',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Guest Relations', ja: 'ゲストリレーション' },
    category: 'furano-travel-guide',
    tags: ['restaurant nakafurano', 'best restaurant nakafurano', 'indian restaurant nakafurano', 'lunch nakafurano', '中富良野 レストラン', '中富良野 カレー'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/momo.jpg',
    featured: false,
    popular: false,
    readingTime: '6 min',
    sections: [
      {
        heading: { en: 'A Small Town With a Full Kitchen', ja: '小さな町の、ちゃんとした厨房' },
        level: 2,
        paragraphs: [
          {
            en: 'Most people meet Nakafurano by accident. They come for Farm Tomita in July, or they drive through in February on the way between Furano Ski Resort and Kamifurano, and the town registers as a few minutes of road between two better-known names. It is smaller than Furano and quieter than Kamifurano, and that is most of its appeal.',
            ja: '多くの方は偶然に中富良野と出会います。7月にファーム富田を訪れたり、2月に富良野スキー場と上富良野の間を車で通り抜けたり。二つの有名な地名にはさまれた数分間の道として記憶されがちです。富良野より小さく、上富良野より静か。その静けさこそが、この町のよさです。',
          },
          {
            en: 'It also means that when you decide you are hungry here, the options are finite. Nepal Dining has been cooking in Nakafurano since 2019, and this page is the practical version of what visitors usually want to know: what we serve, when we are open, and how to find us.',
            ja: 'ただ、それはお腹がすいたときの選択肢が限られるということでもあります。ネパールダイニングは2019年から中富良野で料理をお出ししてきました。このページは、旅行者の方がよく知りたいことを実用的にまとめたものです。何を出しているか、いつ開いているか、どうやって行くか。',
          },
        ],
      },
      {
        heading: { en: 'What We Serve', ja: 'お出ししているもの' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepalese and North Indian food, cooked from whole spices, plus Hokkaido-style soup curry. Chicken Tikka Masala and Butter Chicken are the two most-ordered curries. Momo, the Nepalese steamed dumpling, is the dish people come back for and the one most likely to be new to you. Naan is baked to order in the tandoor rather than reheated.',
            ja: 'ホールスパイスから調理するネパール・北インド料理と、北海道スタイルのスープカレーです。よく注文されるカレーはチキンティッカマサラとバターチキン。ネパールの蒸し餃子モモは、リピーターの多い一品であり、初めての方が最も多い料理でもあります。ナンは温め直しではなく、タンドールでご注文ごとに焼き上げます。',
          },
          {
            en: 'The dining room seats around sixty, walk-ins are welcome, and the staff speak English. Vegetarian dishes are on the standard menu, and we are halal-friendly — not halal-certified, and we say so plainly, because the distinction matters to the people who ask.',
            ja: '客席は約60席、ご予約なしのご来店も歓迎で、スタッフは英語に対応します。ベジタリアン料理は通常メニューにあり、当店はハラールフレンドリーです。ハラール認証店ではなく、その点ははっきりお伝えします。お尋ねになる方にとって、この違いは重要だからです。',
          },
        ],
      },
      {
        heading: { en: 'Lunch or Dinner in Nakafurano', ja: '中富良野のランチとディナー' },
        level: 2,
        paragraphs: [
          {
            en: 'Lunch runs 11:00 to 15:00 and is the quieter service, which makes it the better one if you are travelling with small children or want to talk to the staff about ingredients without a queue behind you. Dinner runs 17:00 to 21:00 and in ski season the first hour after the lifts close is the busiest stretch of the day.',
            ja: 'ランチは11:00〜15:00で、比較的落ち着いた時間帯です。小さなお子様連れの方や、後ろに列を気にせず材料についてスタッフに相談したい方には、こちらがおすすめです。ディナーは17:00〜21:00。スキーシーズンはリフト終了直後の1時間が一日で最も混み合います。',
          },
          {
            en: 'We are closed on the second and fourth Wednesday of each month, and open on the first, third and fifth — worth checking against the calendar before you drive, because it is the kind of detail that catches people out.',
            ja: '毎月第2・第4水曜は定休日、第1・第3・第5水曜は営業しています。見落としやすい点ですので、お車でお越しになる前にカレンダーでご確認ください。',
          },
        ],
      },
      {
        heading: { en: 'Finding Us: Station, Farm Tomita and the Road to Furano', ja: 'アクセス：駅、ファーム富田、富良野への道' },
        level: 2,
        paragraphs: [
          {
            en: 'We are at Akatsukimachi 3-19 in Nakafurano. Nakafurano Station is about 1.4 kilometres away, a short taxi ride or a walk when the pavements are clear. Farm Tomita is a few minutes by car in summer. Furano town and Furano Ski Resort are both about six kilometres south, near enough fifteen minutes on a normal winter road, and Kamifurano is a similar distance north.',
            ja: '所在地は中富良野町暁町3-19です。中富良野駅から約1.4キロ、タクシーならすぐ、歩道の雪がない時期なら徒歩でも。夏はファーム富田から車で数分です。富良野市街と富良野スキー場はいずれも南へ約6キロ、通常の冬道でおよそ15分。上富良野は北へ同程度の距離です。',
          },
          {
            en: 'There is free parking on site. In winter that matters more than it sounds, because the alternative in a small Hokkaido town is usually a snow-narrowed street.',
            ja: '敷地内に無料駐車場がございます。冬場はこれが思っている以上に重要です。北海道の小さな町では、代わりになるのはたいてい雪で狭くなった道路だからです。',
          },
        ],
      },
      {
        heading: { en: 'Booking, Groups and Takeout', ja: 'ご予約・グループ・テイクアウト' },
        level: 2,
        paragraphs: [
          {
            en: 'Walk-ins are fine most of the time. For groups of more than four, or any evening in ski season, call ahead on 0167-44-2444 or use the reservation form on this site. Takeout is available if you would rather eat back at the accommodation, which in deep winter is a perfectly reasonable preference.',
            ja: 'ほとんどの場合、ご予約なしでも大丈夫です。5名以上のグループ、またはスキーシーズンの夜は、0167-44-2444 までお電話いただくか、当サイトのご予約フォームをご利用ください。宿でお召し上がりになりたい場合はテイクアウトも承ります。真冬にはまったく理にかなったご選択です。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Are there restaurants in Nakafurano?', ja: '中富良野にレストランはありますか？' },
        a: { en: 'Yes, though it is a small town so the choice is limited. Nepal Dining has served Nepalese and Indian food in Nakafurano since 2019, with around sixty seats, English-speaking staff and free parking.', ja: 'はい。ただし小さな町ですので選択肢は限られます。ネパールダイニングは2019年から中富良野でネパール・インド料理をお出ししており、約60席、英語対応スタッフ、無料駐車場をご用意しています。' },
      },
      {
        q: { en: 'How far is Nakafurano from Furano?', ja: '中富良野から富良野までどのくらいですか？' },
        a: { en: 'About six kilometres, roughly fifteen minutes by car in normal winter conditions. Nakafurano is the next town north.', ja: '約6キロ、通常の冬の路面状況で車でおよそ15分です。中富良野は富良野の北隣の町です。' },
      },
      {
        q: { en: 'Can I walk from Nakafurano Station?', ja: '中富良野駅から歩けますか？' },
        a: { en: 'It is about 1.4 kilometres. Easy enough outside winter; in deep snow most guests take a taxi or drive.', ja: '約1.4キロです。冬以外なら十分歩ける距離ですが、雪深い時期は多くのお客様がタクシーかお車でお越しになります。' },
      },
      {
        q: { en: 'Are you open on Wednesdays?', ja: '水曜日は営業していますか？' },
        a: { en: 'On the first, third and fifth Wednesday of the month, yes. We are closed on the second and fourth.', ja: '第1・第3・第5水曜は営業しています。第2・第4水曜は定休日です。' },
      },
      {
        q: { en: 'Do you take reservations?', ja: '予約はできますか？' },
        a: { en: 'Yes, by phone on 0167-44-2444 or through the form on this site. Walk-ins are welcome too, but a group of five or more in ski season is worth booking.', ja: 'はい。0167-44-2444 までお電話いただくか、当サイトのフォームからご予約いただけます。ご予約なしのご来店も歓迎ですが、スキーシーズンに5名以上でお越しの場合はご予約をおすすめします。' },
      },
    ],
  },
  {
    slug: 'where-to-eat-furano-nakafurano-kamifurano-biei',
    title: {
      en: 'Where to Eat in Furano, Nakafurano, Kamifurano and Biei',
      ja: '富良野・中富良野・上富良野・美瑛でどこで食べるか',
    },
    description: {
      en: 'A practical eating guide to the Furano valley — how far apart the towns actually are, what is open when, and where to stop for curry between Furano and Biei.',
      ja: '富良野の谷を旅する方のための実用的な食事ガイド。町と町の実際の距離、営業時間、そして富良野と美瑛の間でカレーを食べるならどこか。',
    },
    date: '2026-08-25',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Guest Relations', ja: 'ゲストリレーション' },
    category: 'furano-travel-guide',
    tags: ['restaurants furano area', 'where to eat furano', 'restaurants kamifurano', 'restaurants biei', 'curry restaurant furano area', '富良野 レストラン', '美瑛 レストラン'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg',
    featured: false,
    popular: false,
    readingTime: '7 min',
    sections: [
      {
        heading: { en: 'The Valley Is Smaller Than It Looks', ja: 'この谷は、見た目より小さい' },
        level: 2,
        paragraphs: [
          {
            en: 'Furano, Nakafurano, Kamifurano and Biei read like four separate destinations on a map and behave like one long road in practice. Furano to Nakafurano is about six kilometres. Nakafurano to Kamifurano is about eight. Biei sits further north, roughly thirty minutes by car in winter, and is the only one of the four that feels like a proper journey rather than a hop.',
            ja: '富良野、中富良野、上富良野、美瑛は地図の上では4つの別々の目的地に見えますが、実際には一本の長い道のように移動できます。富良野から中富良野まで約6キロ、中富良野から上富良野まで約8キロ。美瑛はさらに北にあり、冬季は車でおよそ30分。4つの中で唯一、「ちょっと移動する」ではなく「旅をする」感覚のある区間です。',
          },
          {
            en: 'That matters when you are hungry, because it means you are rarely more than twenty minutes from anywhere in the valley — and it means the honest answer to "where should we eat" is usually not "in the town we happen to be standing in". Nepal Dining is based in Nakafurano, near the middle of that road, which is a geographical accident we have come to appreciate.',
            ja: 'これはお腹がすいたときに効いてきます。谷のどこにいても、たいていは20分以内でどこへでも行けるということだからです。つまり「どこで食べようか」への正直な答えは、多くの場合「いま立っている町」ではありません。ネパールダイニングはその道のほぼ中間、中富良野町にあります。地理的な偶然ですが、ありがたく思っています。',
          },
        ],
      },
      {
        heading: { en: 'From Furano: Six Kilometres North', ja: '富良野から：北へ6キロ' },
        level: 2,
        paragraphs: [
          {
            en: 'Furano is the biggest of the four and has the widest choice, particularly around the station and the ski resort base. It is also where the queues are in high season. If you are staying in Furano and everything within walking distance has a wait on it, driving six kilometres north to Nakafurano takes about fifteen minutes and there is free parking at the other end.',
            ja: '富良野は4つの中で最も大きく、特に駅周辺とスキー場のベースエリアでは選択肢が豊富です。同時に、ハイシーズンには行列ができる場所でもあります。富良野に滞在していて、歩いて行ける範囲がどこも待ちになっている場合、北へ6キロ、車で約15分の中富良野まで足を延ばせば、着いた先には無料駐車場があります。',
          },
          {
            en: 'From Furano Ski Resort specifically, the drive is the same distance and is a natural stop on the way back to accommodation rather than a detour.',
            ja: '富良野スキー場からも距離は同じで、宿へ戻る道すがらの自然な立ち寄り先になります。わざわざの遠回りにはなりません。',
          },
        ],
      },
      {
        heading: { en: 'From Kamifurano: Eight Kilometres South', ja: '上富良野から：南へ8キロ' },
        level: 2,
        paragraphs: [
          {
            en: 'Kamifurano is the quieter northern neighbour, known for its onsen and for Tokachidake beyond it. It has fewer places to eat in the evening than visitors expect, particularly outside the summer season, and the eight kilometres south to Nakafurano is a short run on a road that is generally well cleared in winter.',
            ja: '上富良野は静かな北隣の町で、温泉と、その先の十勝岳で知られています。夕方に食事のできる場所は旅行者の想像より少なく、特に夏季以外はその傾向が強くなります。南へ8キロの中富良野までは短い移動で、冬もおおむね除雪の行き届いた道です。',
          },
        ],
      },
      {
        heading: { en: 'From Biei: The Long Way Down', ja: '美瑛から：丘を越えて南へ' },
        level: 2,
        paragraphs: [
          {
            en: 'Biei is the one that takes planning. The Blue Pond and the patchwork hills are the reason people go, and in winter the light is gone by mid-afternoon, which catches out visitors who assumed they could sightsee and then find dinner at leisure. Allow around thirty minutes to drive down to Nakafurano, and bear in mind that our kitchen stops serving at 21:00.',
            ja: '美瑛は計画が必要な一箇所です。青い池とパッチワークの丘を目当てに多くの方が訪れますが、冬は午後の半ばには日が落ちます。観光の後にゆっくり夕食を探せると考えていた旅行者が、これで慌てることになります。中富良野まで車でおよそ30分をみておき、当店の厨房が21:00でお料理を終えることも頭に入れておいてください。',
          },
          {
            en: 'If you are driving the Biei-to-Furano route in a single day, the practical move is to eat in the middle rather than at either end. That is the case for stopping in Nakafurano, and we would make it even if we were not standing in it.',
            ja: '美瑛から富良野までを一日で走るなら、実用的なのは端ではなく途中で食事をとることです。中富良野に立ち寄る理由はそこにあります。仮に私たちがこの町にいなかったとしても、同じことを申し上げるはずです。',
          },
        ],
      },
      {
        heading: { en: 'Planning the Stop', ja: '立ち寄りの計画' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepal Dining is at Akatsukimachi 3-19, Nakafurano — not in Furano, Kamifurano or Biei, but within easy reach of all three. Lunch is 11:00 to 15:00, dinner 17:00 to 21:00, closed the second and fourth Wednesday of each month. Around sixty seats, free parking, English-speaking staff, vegetarian dishes on the standard menu and halal-friendly options, though we are not halal-certified and say so.',
            ja: 'ネパールダイニングは中富良野町暁町3-19にあります。富良野、上富良野、美瑛のいずれでもありませんが、どこからも無理なく来られる場所です。ランチ11:00〜15:00、ディナー17:00〜21:00、毎月第2・第4水曜定休。約60席、無料駐車場、英語対応スタッフ、通常メニューのベジタリアン料理、ハラールフレンドリーな選択肢をご用意しています。ただしハラール認証店ではなく、その点は明記しています。',
          },
          {
            en: 'For a group of more than four, or for any evening in ski season, call 0167-44-2444 before you set off. In a valley this size, a phone call is usually the difference between eating when you arrive and waiting outside in the cold.',
            ja: '5名以上のグループ、またはスキーシーズンの夜は、出発前に 0167-44-2444 までお電話ください。この規模の谷では、電話一本が「着いてすぐ食べられる」か「寒い外で待つ」かの分かれ目になります。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'How far is Biei from Furano?', ja: '美瑛から富良野までどのくらいですか？' },
        a: { en: 'Around thirty minutes by car in winter conditions, with Nakafurano roughly in between. Plan dinner around it rather than assuming you will find something at the end of the drive.', ja: '冬季の路面状況で車におよそ30分、中富良野はそのほぼ中間にあります。着いてから探すのではなく、夕食を計画に入れておくことをおすすめします。' },
      },
      {
        q: { en: 'Is there an Indian restaurant in the Furano area?', ja: '富良野エリアにインド料理店はありますか？' },
        a: { en: 'Yes. Nepal Dining serves Nepalese and North Indian food from Nakafurano, about fifteen minutes from Furano and a similar distance from Kamifurano.', ja: 'はい。ネパールダイニングが中富良野からネパール・北インド料理をお出ししています。富良野から約15分、上富良野からも同程度の距離です。' },
      },
      {
        q: { en: 'Where should we eat between Furano and Biei?', ja: '富良野と美瑛の間で食事をするならどこですか？' },
        a: { en: 'Somewhere in the middle, which in practice means Nakafurano or Kamifurano. Eating at either end of that drive tends to mean eating late.', ja: '中間、つまり実質的には中富良野か上富良野です。この道の端で食事をとろうとすると、たいてい遅い時間になります。' },
      },
      {
        q: { en: 'Do restaurants in the Furano area close early in winter?', ja: '冬季、富良野エリアの飲食店は早く閉まりますか？' },
        a: { en: 'Many do, and it surprises visitors. We serve dinner until 21:00 and are closed the second and fourth Wednesday of each month.', ja: '早めに閉まるお店は多く、旅行者の方は驚かれます。当店はディナーを21:00まで、毎月第2・第4水曜は定休日としています。' },
      },
      {
        q: { en: 'Is parking easy in the Furano area in winter?', ja: '冬の富良野エリアは駐車しやすいですか？' },
        a: { en: 'It varies a great deal. Town-centre streets narrow considerably once the snow is banked. We have free parking on site, which is one less thing to solve.', ja: '場所によって大きく異なります。雪が積み上がると市街地の道路はかなり狭くなります。当店は敷地内に無料駐車場がございますので、その分の心配は要りません。' },
      },
    ],
  },
  {
    slug: 'best-restaurants-in-furano',
    title: {
      en: 'Best Restaurants in Furano: A Complete Dining Guide',
      ja: '富良野ベストレストランガイド：完全版',
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
            en: 'For international visitors, Nepal Dining in Nakafurano stands out as the most tourist-friendly restaurant in the area. Offering halal-friendly cuisine (not halal-certified), English-speaking staff, 60 seats with walk-ins welcome, multilingual menus in English, Japanese, Korean, and Chinese, and Hokkaido fusion dishes using local ingredients.',
            ja: '海外からの旅行者にとって、中富良野のネパールダイニングはこのエリアで最も旅行者にやさしいレストランです。ハラールフレンドリー料理（認証店ではありません）、英語対応スタッフ、60席（ウォークイン歓迎）、英語・日本語・韓国語・中国語のメニュー、そして地元食材を使った北海道フュージョン料理を提供しています。',
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
      en: 'Furano Lavender Fields: The Complete Visitor\'s Guide',
      ja: '富良野ラベンダー畑：完全ガイド',
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
      en: 'Halal-Friendly Food in Furano: An Honest Guide for Muslim Visitors',
      ja: '富良野のハラールフレンドリー料理：ムスリム旅行者のための正直なガイド',
    },
    description: {
      en: 'Where to find halal-friendly food in the Furano area of Hokkaido. What we can prepare without pork or alcohol, what we cannot promise, and how to order with confidence.',
      ja: '北海道富良野エリアでハラールフレンドリーな食事を探している方へ。豚肉・アルコールを使わずご用意できるもの、お約束できないこと、安心してご注文いただく方法をご案内します。',
    },
    date: '2026-08-25',
    author: 'Nepal Dining Team',
    authorRole: { en: 'Guest Relations', ja: 'ゲストリレーション' },
    category: 'food-culture',
    tags: ['halal furano', 'halal restaurant furano', 'muslim friendly furano', 'halal food near furano ski resort', '富良野 ハラール'],
    image: 'https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg',
    featured: false,
    popular: true,
    readingTime: '7 min',
    sections: [
      {
        heading: { en: 'Halal-Friendly Dining in the Furano Area', ja: '富良野エリアのハラールフレンドリーな食事' },
        level: 2,
        paragraphs: [
          {
            en: 'Furano is one of the easiest places in Hokkaido to fall in love with and one of the harder places to eat if you avoid pork and alcohol. Rural Japanese cooking leans on both: mirin and cooking sake turn up in sauces that look completely plain, and pork is the default meat in ramen, katsu and much of the izakaya menu. Visitors from Malaysia, Indonesia, Singapore and the Gulf tell us the same thing every winter, which is that the skiing was the easy part and dinner was the puzzle.',
            ja: '富良野は北海道でもとりわけ魅力的な場所ですが、豚肉とアルコールを避ける方にとっては食事が難しい土地でもあります。日本の地方料理はみりんや料理酒を多用し、一見素朴なソースにも入っていることがあります。ラーメンやカツ、多くの居酒屋メニューでは豚肉が基本です。マレーシア、インドネシア、シンガポール、湾岸諸国からのお客様は毎冬同じことをおっしゃいます。スキーは簡単だったが、夕食が難題だった、と。',
          },
          {
            en: 'Nepal Dining is in Nakafurano, the next town north of Furano, about six kilometres from Furano Ski Resort and roughly fifteen minutes by car. Our kitchen is Nepalese and Indian, which means the food we cook every day is already built around lamb, chicken, lentils and vegetables rather than pork, and around yoghurt and spice rather than sake and mirin. That is the honest reason we can help, and it is worth understanding before you read the rest of this page.',
            ja: 'ネパールダイニングは富良野の隣町、中富良野町にあります。富良野スキー場から約6キロ、車でおよそ15分です。当店の厨房はネパール・インド料理で、日々つくる料理はもともと豚肉ではなくラム、チキン、豆、野菜を中心に、日本酒やみりんではなくヨーグルトとスパイスを使って組み立てられています。これが、私たちがお力になれる正直な理由です。',
          },
        ],
      },
      {
        heading: { en: 'What "Halal-Friendly" Means Here, and What It Does Not', ja: '「ハラールフレンドリー」の意味と、その限界' },
        level: 2,
        paragraphs: [
          {
            en: 'Nepal Dining is halal-friendly. We are not a halal-certified restaurant, and we will never tell you otherwise, because the difference matters to the people who ask. Certification means an outside body has audited the supply chain, the kitchen and the handling. We have not been through that process. If certification is a requirement for you rather than a preference, you should know that before you make the drive.',
            ja: '当店はハラールフレンドリーです。ハラール認証店ではありませんし、そう名乗ることもいたしません。この違いは、お尋ねになる方にとって重要だからです。認証とは、第三者機関が仕入れ、厨房、取り扱いを監査することを意味します。当店はその手続きを経ていません。認証が「希望」ではなく「必須条件」である場合は、お越しになる前にお知らせしておきたいことです。',
          },
          {
            en: 'What we can tell you is specific. A great many of our dishes are prepared without pork and without alcohol, our staff know what goes into every plate, and if you ask, you will get a straight answer rather than a reassuring one. Please mention your requirements when you order, not after the food arrives, so the kitchen can work with them from the start.',
            ja: 'お伝えできるのは具体的なことです。当店の多くの料理は豚肉・アルコールを使わずにご用意でき、スタッフは各料理の内容を把握しています。お尋ねいただければ、聞こえのよい答えではなく、正確な答えをお返しします。ご注文の際に（お料理が届いてからではなく）ご要望をお知らせください。厨房が最初から対応できます。',
          },
        ],
      },
      {
        heading: { en: 'What You Can Order', ja: 'おすすめのメニュー' },
        level: 2,
        paragraphs: [
          {
            en: 'The chicken and mutton curries are where most Muslim guests start. Butter Chicken is the mild one and the safest choice for children. Chicken Tikka Masala is our best seller. Mutton Curry and Mutton Sag Curry are the ones our Nepalese regulars order, and Chicken Rara Curry is a Nepalese preparation you will not find in the chain curry houses. Tandoori Chicken and Chicken Tikka come off the tandoor rather than out of a pan, if you would rather have something drier.',
            ja: 'ムスリムのお客様の多くはチキンとマトンのカレーから始められます。バターチキンカレーはマイルドで、お子様にも安心です。チキンティッカマサラカレーは当店の一番人気。マトンカレーとマトンサグカレーはネパール出身の常連さんが選ぶ味で、チキンララカレーはチェーン店では出会えないネパールの調理法です。汁気の少ないものをお好みなら、タンドールで焼くタンドリーチキンやチキンティッカもございます。',
          },
          {
            en: 'For vegetables, Mix Vegetable Curry and Mix Vegetable Soup Curry are both entirely plant-based in their main ingredients, and momo can be ordered with a vegetable filling instead of chicken. Rice and freshly baked naan come alongside. Our standard naan dough contains dairy and egg, but the kitchen will prepare dishes without them on request — and the same goes for allergies and nut-free cooking. Ask when you order.',
            ja: '野菜料理では、ミックス野菜カレーとミックス野菜スープカレーが主な材料をすべて植物性で構成しており、モモもチキンではなく野菜の餡でご注文いただけます。ライスや焼きたてのナンをお添えください。当店の通常のナン生地には乳製品と卵を使用していますが、ご要望に応じて使わずにお作りします。アレルギーやナッツ不使用のご要望も同様です。ご注文の際にお申し付けください。',
          },
        ],
      },
      {
        heading: { en: 'Getting Here from Furano, Kamifurano and Biei', ja: '富良野・上富良野・美瑛からのアクセス' },
        level: 2,
        paragraphs: [
          {
            en: 'From Furano town and from Furano Ski Resort it is about six kilometres, near enough fifteen minutes on a normal winter road. From Kamifurano it is a similar distance in the other direction. From Biei, the run down through the hills takes longer and is worth allowing around thirty minutes for in winter. There is free parking on site, which is a small thing until you are in ski boots with a car full of gear.',
            ja: '富良野市街・富良野スキー場からは約6キロ、通常の冬道でおよそ15分です。上富良野からは反対方向に同程度の距離。美瑛からは丘を越えるため、冬季は30分ほどをみておくと安心です。敷地内に無料駐車場があり、スキーブーツのまま荷物を積んだ車で来られる方にはありがたいはずです。',
          },
          {
            en: 'If you are travelling by train, Nakafurano Station is about 1.4 kilometres away, which is a short taxi ride or a walk in better weather. In deep winter, with snow banked up along the pavements, most guests drive.',
            ja: '電車でお越しの場合、中富良野駅から約1.4キロです。タクシーならすぐ、天気のよい季節なら徒歩圏内です。真冬は歩道に雪が積み上がるため、多くのお客様は車でお越しになります。',
          },
        ],
      },
      {
        heading: { en: 'Hours, Booking and Practical Tips', ja: '営業時間・ご予約・実用的なヒント' },
        level: 2,
        paragraphs: [
          {
            en: 'We serve lunch from 11:00 to 15:00 and dinner from 17:00 to 21:00. We are closed on the second and fourth Wednesday of each month, and open on the first, third and fifth. In ski season the hour after the lifts close is our busiest of the day, so if you are a group of more than four, a phone call ahead on 0167-44-2444 will save you a wait in the cold.',
            ja: 'ランチは11:00〜15:00、ディナーは17:00〜21:00です。毎月第2・第4水曜は定休日、第1・第3・第5水曜は営業しています。スキーシーズンはリフト終了後の1時間が最も混み合いますので、5名以上のグループでお越しの場合は 0167-44-2444 まで事前にお電話いただくと、寒い中でお待たせせずにすみます。',
          },
          {
            en: 'Our staff speak English, and menus are available in more than one language. Tell us your requirements when you book and again when you order, and we will do the rest.',
            ja: 'スタッフは英語に対応しており、メニューも複数言語でご用意しています。ご予約時とご注文時にご要望をお伝えいただければ、あとはこちらでお引き受けします。',
          },
        ],
      },
    ],
    faq: [
      {
        q: { en: 'Is Nepal Dining halal certified?', ja: 'ネパールダイニングはハラール認証店ですか？' },
        a: { en: 'No. We are halal-friendly, not halal-certified, and we want to be clear about that. We have not been through a certification audit. What we can do is prepare a great many dishes without pork or alcohol and tell you honestly what is in anything on the menu.', ja: 'いいえ。当店はハラールフレンドリーであり、ハラール認証店ではありません。この点は明確にお伝えしたいと思っています。認証審査は受けておりません。できるのは、多くの料理を豚肉・アルコールなしでご用意すること、そしてメニューの内容を正直にお伝えすることです。' },
      },
      {
        q: { en: 'Where can I find halal-friendly food near Furano Ski Resort?', ja: '富良野スキー場の近くでハラールフレンドリーな食事はどこで食べられますか？' },
        a: { en: 'Nepal Dining is about six kilometres from the resort in Nakafurano, roughly fifteen minutes by car, with free parking. Halal-friendly options are on the menu every day of the week we are open.', ja: 'ネパールダイニングはスキー場から約6キロ、中富良野町にあり、車でおよそ15分、無料駐車場もございます。営業日はいつでもハラールフレンドリーなメニューをご用意しています。' },
      },
      {
        q: { en: 'Do you use alcohol in your cooking?', ja: '調理にアルコールを使いますか？' },
        a: { en: 'Our curries are not cooked with sake or mirin the way much Japanese food is. If you need certainty about a specific dish, ask before you order and we will check it with the kitchen.', ja: '当店のカレーは、多くの日本料理のように日本酒やみりんで調理することはありません。特定の料理について確認が必要な場合は、ご注文前にお尋ねください。厨房に確認いたします。' },
      },
      {
        q: { en: 'Can you cook without pork?', ja: '豚肉を使わない調理はできますか？' },
        a: { en: 'Yes. Our menu is built around chicken, mutton, seafood, lentils and vegetables. Please tell us your requirements when you order so the kitchen knows from the start.', ja: 'はい。当店のメニューはチキン、マトン、シーフード、豆、野菜を中心に構成されています。ご注文の際にご要望をお知らせいただければ、厨房が最初から対応いたします。' },
      },
      {
        q: { en: 'Do you have an English menu and English-speaking staff?', ja: '英語のメニューや英語を話せるスタッフはいますか？' },
        a: { en: 'Yes to both. Ask any question you like about ingredients; we would rather answer it than have you guess.', ja: 'どちらもございます。材料についてどんなことでもお尋ねください。ご不安なままお召し上がりいただくより、お答えするほうがずっとよいと考えています。' },
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
