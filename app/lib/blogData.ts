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
      "slug": "where-to-eat-after-skiing-furano",
      "title": {
        "en": "Best Restaurants Near Furano Ski Resort: Where to Eat After Skiing",
        "ja": "富良野スキー場周辺のおすすめレストラン：スキー後の食事ガイド"
      },
      "description": {
        "en": "Where to eat after a day on the slopes at Furano Ski Resort — warming soup curry, fresh naan, halal-friendly and vegetarian options, about 15 minutes away with free parking.",
        "ja": "富良野スキー場で滑った後の食事ガイド — 体を温めるスープカレー、焼きたてナン、ハラール対応・ベジタリアン対応。車で約15分、無料駐車場あり。"
      },
      "date": "2026-08-25",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Winter Sports Writer",
        "ja": "ウィンタースポーツライター"
      },
      "category": "seasonal-events",
      "tags": [
        "furano ski resort restaurant",
        "where to eat after skiing furano",
        "curry after skiing furano",
        "halal food near furano ski resort",
        "vegetarian food furano",
        "dinner near furano ski resort"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg",
      "featured": true,
      "popular": true,
      "readingTime": "6 min",
      "sections": [
        {
          "heading": {
            "en": "How Far Is It From the Slopes?",
            "ja": "ゲレンデからどのくらい？"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Nepal Dining sits about 6 kilometres from Furano Ski Resort, in Nakafurano — roughly 15 minutes by car on a normal winter day, and an easy stop on the way back to Kamifurano, Biei or your accommodation. There is free parking on site, which matters more than it sounds when you are still in ski boots and the car is full of gear.",
              "ja": "ネパールダイニングは富良野スキー場から約6キロ、中富良野町にあります。通常の冬の日なら車で約15分。上富良野や美瑛、宿へ戻る道すがら気軽に立ち寄れる場所です。敷地内に無料駐車場があります — スキーブーツのまま、荷物を積んだ車で向かうときには、これが想像以上にありがたいはずです。"
            },
            {
              "en": "We are not inside Furano city itself. We are in Nakafurano, the next town along the valley, which is why the drive is short but the prices and the atmosphere are noticeably more relaxed than the resort strip.",
              "ja": "当店は富良野市内ではなく、谷筋をひとつ進んだ中富良野町にあります。だからこそ移動は短時間で済み、それでいて価格も雰囲気もリゾート中心部よりずっと落ち着いています。"
            }
          ]
        },
        {
          "heading": {
            "en": "Why Curry After a Day on the Mountain",
            "ja": "スキーの後にカレーがいい理由"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "A full day at Furano burns through a lot of energy, and the cold does as much of that as the skiing. What you want afterwards is something hot, salty and substantial that arrives quickly. Soup curry does exactly that — it is a Hokkaido speciality for good reason, and it is close to the ideal recovery meal after a day in the snow.",
              "ja": "富良野で一日滑ると、想像以上に体力を消耗します。しかもその多くは滑走そのものよりむしろ寒さによるもの。だから後に欲しくなるのは、熱くて、しっかり塩気があって、すぐに出てくる食事です。スープカレーはまさにそれ — 北海道の名物になったのには理由があり、雪の中で過ごした一日の後の回復食としてほぼ理想的です。"
            }
          ]
        },
        {
          "heading": {
            "en": "What to Order After Skiing",
            "ja": "スキー後におすすめのメニュー"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Soup curry is the obvious first choice — a thin, spiced broth with vegetables and your choice of chicken or vegetables, and you set the spice level yourself. Butter chicken is the other favourite with skiers: rich, mild and warming, and it goes well with a family sharing several dishes.",
              "ja": "まず選んでいただきたいのはスープカレー。スパイスの効いたさらりとしたスープに野菜、そしてチキンか野菜をお選びいただけます。辛さはお好みで調整可能です。もうひとつスキーヤーに人気なのがバターチキン — コクがあり、マイルドで、体が温まります。数皿を家族でシェアするスタイルにもよく合います。"
            },
            {
              "en": "Order the naan fresh from the tandoor — we bake it to order, and cheese naan in particular tends to disappear fast at a table of hungry skiers. Momo, Nepalese steamed dumplings, make a good starter while the curries are being prepared.",
              "ja": "ナンはタンドールで焼きたてをどうぞ — ご注文をいただいてから焼き上げます。とくにチーズナンは、お腹を空かせたスキーヤーのテーブルではあっという間になくなります。カレーをお待ちいただく間の前菜には、ネパールの蒸し餃子モモがおすすめです。"
            }
          ]
        },
        {
          "heading": {
            "en": "Halal-Friendly and Vegetarian Options",
            "ja": "ハラール対応・ベジタリアン対応について"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Nepal Dining is halal-friendly. To be clear about what that means: we are not a halal-certified restaurant, and we will not tell you otherwise. What we can do is prepare a great many of our dishes without pork or alcohol, and our staff will tell you honestly what is in anything you ask about. Please mention your requirements when you order.",
              "ja": "当店はハラールフレンドリーです。ただし、その意味は正確にお伝えします。当店はハラール認証店ではなく、そう名乗ることもいたしません。できるのは、多くのメニューを豚肉・アルコールを使わずにご用意することと、お尋ねいただいた料理の内容をスタッフが正直にお伝えすることです。ご注文の際にご要望をお知らせください。"
            },
            {
              "en": "Vegetarian visitors are well covered. Vegetable curries, dal, mixed vegetable dishes and vegetarian momo are all on the regular menu rather than hidden away as substitutions, and the same applies — ask us and we will tell you exactly what is in a dish.",
              "ja": "ベジタリアンの方にも十分な選択肢があります。野菜カレー、ダル、ミックスベジタブル、ベジモモなどは代替メニューではなく通常メニューとしてご用意しています。こちらも同様に、お尋ねいただければ料理の内容を正確にお答えします。"
            }
          ]
        },
        {
          "heading": {
            "en": "Hours, Winter Driving and Booking Ahead",
            "ja": "営業時間・冬の道路・ご予約について"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We are open 11:00–15:00 for lunch and 17:00–21:00 for dinner, Tuesday to Sunday. We close on the 2nd and 4th Wednesday of each month, so it is worth checking before you set out. Last orders are before 21:00, which is earlier than many visitors expect after a late afternoon on the slopes.",
              "ja": "営業時間はランチ11:00〜15:00、ディナー17:00〜21:00、火曜〜日曜です。毎月第2・第4水曜日は定休日ですので、お出かけ前にご確認ください。ラストオーダーは21:00前 — 夕方遅くまで滑った後だと、思ったより早いと感じられるかもしれません。"
            },
            {
              "en": "Roads in the valley are cleared regularly but they are snow-covered for most of the season, so allow more time than the map suggests and use winter tyres. In peak ski season, and especially for groups, please call ahead on 0167-44-2444 or book a table online — a full restaurant and a hungry group after dark is not a happy combination.",
              "ja": "谷沿いの道路は定期的に除雪されますが、シーズン中の大半は雪道です。地図の所要時間より余裕をもって、冬タイヤでお越しください。スキーシーズンのピーク時、とくにグループでのご来店は、事前に 0167-44-2444 までお電話いただくか、オンラインでのご予約をおすすめします。暗くなってから満席でお待たせするのは、私たちも本意ではありません。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "How far is Nepal Dining from Furano Ski Resort?",
            "ja": "富良野スキー場からどのくらいの距離ですか？"
          },
          "a": {
            "en": "About 6 kilometres, roughly 15 minutes by car in normal winter conditions. We are in Nakafurano, the next town along from Furano, and there is free parking on site.",
            "ja": "約6キロ、通常の冬の路面状況で車で約15分です。富良野の隣、中富良野町にあり、無料駐車場をご用意しています。"
          }
        },
        {
          "q": {
            "en": "What time do you close in ski season?",
            "ja": "スキーシーズンの閉店時間は？"
          },
          "a": {
            "en": "Dinner service runs 17:00–21:00, Tuesday to Sunday, with last orders before 21:00. We are closed on the 2nd and 4th Wednesday of each month.",
            "ja": "ディナーは火曜〜日曜の17:00〜21:00、ラストオーダーは21:00前です。毎月第2・第4水曜日は定休日です。"
          }
        },
        {
          "q": {
            "en": "Is there halal food near Furano Ski Resort?",
            "ja": "富良野スキー場の近くでハラール対応の食事はできますか？"
          },
          "a": {
            "en": "Nepal Dining is halal-friendly, about 15 minutes from the resort. We are not halal-certified, but many dishes are prepared without pork or alcohol and our staff will tell you exactly what is in any dish. Please mention your requirements when ordering.",
            "ja": "ネパールダイニングはハラールフレンドリーで、スキー場から約15分です。ハラール認証店ではありませんが、多くの料理を豚肉・アルコールなしでご用意でき、スタッフが料理の内容を正確にお伝えします。ご注文時にご要望をお知らせください。"
          }
        },
        {
          "q": {
            "en": "Do you have vegetarian food?",
            "ja": "ベジタリアン向けの料理はありますか？"
          },
          "a": {
            "en": "Yes. Vegetable curries, dal, mixed vegetable dishes and vegetarian momo are all on the regular menu, not special-order substitutions.",
            "ja": "はい。野菜カレー、ダル、ミックスベジタブル、ベジモモなどを通常メニューとしてご用意しています。特別対応の代替メニューではありません。"
          }
        },
        {
          "q": {
            "en": "Do I need to book in ski season?",
            "ja": "スキーシーズンは予約が必要ですか？"
          },
          "a": {
            "en": "It is strongly recommended for groups and on busy evenings. Call 0167-44-2444 or book a table through the website.",
            "ja": "グループでのご来店や混雑する夜は、ご予約を強くおすすめします。0167-44-2444 までお電話いただくか、ウェブサイトからご予約ください。"
          }
        }
      ]
    },
    {
      "slug": "vegetarian-food-in-furano",
      "title": {
        "en": "Vegetarian and Vegan-Friendly Food in Furano: What to Order",
        "ja": "富良野のベジタリアン・ヴィーガン対応料理：何を頼めばいいか"
      },
      "description": {
        "en": "Vegetarian food in the Furano area of Hokkaido. The plant-based dishes on our menu, vegan and nut-free cooking on request, and how to order so the kitchen gets it right.",
        "ja": "北海道富良野エリアのベジタリアン料理。当店の植物性メニュー、ご要望に応じたヴィーガン・ナッツ不使用の調理、そして厨房に正しく伝わるご注文の仕方をご案内します。"
      },
      "date": "2026-08-25",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Guest Relations",
        "ja": "ゲストリレーション"
      },
      "category": "food-culture",
      "tags": [
        "vegetarian restaurant furano",
        "vegan food furano",
        "vegetarian indian food furano",
        "vegetarian food near furano ski resort",
        "富良野 ベジタリアン"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/mix-veg-curry.jpg",
      "featured": false,
      "popular": true,
      "readingTime": "6 min",
      "sections": [
        {
          "heading": {
            "en": "Vegetarian Eating in the Furano Area",
            "ja": "富良野エリアでのベジタリアンの食事"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Vegetarian travellers in rural Hokkaido run into the same wall repeatedly, which is that a dish can look entirely plant-based and still be built on dashi made from bonito. Vegetable tempura, miso soup, a bowl of noodles in clear broth: all of them commonly carry fish stock, and nobody thinks to mention it because in Japan it is not considered a meat ingredient at all.",
              "ja": "北海道の地方を旅するベジタリアンの方は、同じ壁に何度もぶつかります。見た目は完全に植物性の料理でも、鰹だしが使われていることがあるのです。野菜天ぷら、味噌汁、澄んだスープの麺類。いずれも魚のだしを含むことが多く、日本ではだしを肉の材料とは考えないため、わざわざ説明されないことも珍しくありません。"
            },
            {
              "en": "Indian and Nepalese kitchens are a different proposition. Vegetarian cooking is not an accommodation there, it is half the tradition, and the stock is vegetable or nothing at all. Nepal Dining is in Nakafurano, about six kilometres from Furano Ski Resort and around fifteen minutes by car, and vegetarian dishes are on the standard menu rather than hidden behind a special request.",
              "ja": "インド・ネパール料理の厨房は事情が異なります。ベジタリアン料理は「特別対応」ではなく伝統の半分を占めるもので、だしは野菜か、あるいは使いません。ネパールダイニングは中富良野町にあり、富良野スキー場から約6キロ、車でおよそ15分。ベジタリアン料理は特別注文ではなく通常メニューに載っています。"
            }
          ]
        },
        {
          "heading": {
            "en": "The Vegetarian Dishes on Our Menu",
            "ja": "当店のベジタリアンメニュー"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Mix Vegetable Curry is the everyday choice, mild enough for children and made with seasonal vegetables. Mix Vegetable Soup Curry is the Hokkaido style, a thinner spiced broth rather than a thick sauce, and it is the one to order after a cold day outside. Both come with rice or naan.",
              "ja": "ミックス野菜カレーは日常的な一皿で、辛さは控えめ、お子様にも向いており、季節の野菜を使っています。ミックス野菜スープカレーは北海道スタイル。とろみのあるソースではなく、スパイスの効いたさらりとしたスープで、寒い一日の後にはこちらがおすすめです。どちらもライスかナンをお選びいただけます。"
            },
            {
              "en": "Momo, the Nepalese steamed dumpling, comes with either a chicken or a vegetable filling — ask for the vegetable one when you order. That also applies to the Momo and Vegetable Soup Curry, which is the dish most likely to be new to you and the one people come back for.",
              "ja": "ネパールの蒸し餃子モモは、チキンと野菜の2種類の餡からお選びいただけます。ご注文の際に「野菜」とお伝えください。モモ野菜スープカレーも同様です。初めての方が最も多く、そしてリピーターの多い一品です。"
            },
            {
              "en": "On the bread side, Plain Naan, Garlic Naan and Cheese Naan are all baked to order in the tandoor. Rice is available on its own. Between a vegetable curry, a naan, some momo and a soup curry to share, a vegetarian table eats as well here as anyone else does, which is not something we can say about every restaurant in the valley.",
              "ja": "パンはプレーンナン、ガーリックナン、チーズナンをタンドールでその都度焼き上げます。ライス単品もございます。野菜カレーとナン、モモ、それにスープカレーを取り分ければ、ベジタリアンの方も他のお客様と変わらない食卓になります。この谷のすべてのレストランについて同じことが言えるわけではありません。"
            }
          ]
        },
        {
          "heading": {
            "en": "Vegan, Allergies and Nut-Free: Please Just Ask",
            "ja": "ヴィーガン・アレルギー・ナッツ不使用：お気軽にお尋ねください"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Vegetarian and vegan are not the same request, so here is the honest detail. Our standard naan dough is made with dairy and egg, and several curries are finished with cream or yoghurt — that is what gives Butter Chicken and Tikka Masala their texture. So the default versions of those are not vegan.",
              "ja": "ベジタリアンとヴィーガンは別のご要望ですので、正確にお伝えします。当店の通常のナン生地には乳製品と卵を使用しており、いくつかのカレーは仕上げに生クリームやヨーグルトを使います。バターチキンやティッカマサラの口当たりはそこから生まれています。つまり、これらの通常版はヴィーガン対応ではありません。"
            },
            {
              "en": "What we can do is make them vegan on request. Tell us when you order and the kitchen will prepare your dishes — naan included — without dairy or egg. The same goes for allergies and for nut-free cooking: ask our staff, tell them exactly what you need to avoid, and they will work with the kitchen. We would far rather have that conversation before the food is cooked than after it reaches the table.",
              "ja": "ご要望をいただければ、ヴィーガン対応でお作りします。ご注文時にお申し付けください。ナンを含め、乳製品・卵を使わずにご用意いたします。アレルギーやナッツ不使用のご要望も同様です。避けたいものを具体的にスタッフにお伝えいただければ、厨房と調整いたします。お料理がテーブルに届いてからより、つくる前にお話しいただけるほうがずっと確実です。"
            }
          ]
        },
        {
          "heading": {
            "en": "Spice Levels and Ordering Tips",
            "ja": "辛さの調整とご注文のコツ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Spice is adjustable and the default is milder than most visitors expect, because the majority of our regulars are local families. If you want it hot, say so, and if you are ordering for a mixed table with children, order the vegetable curry mild and let the adults add heat.",
              "ja": "辛さは調整できます。常連のお客様の多くが地元のご家族のため、標準の辛さは多くの旅行者が想像するより控えめです。辛めがお好みならその旨をお伝えください。お子様を含むテーブルでは、野菜カレーを控えめにしてお召し上がりいただき、大人の方が辛さを足すのがおすすめです。"
            }
          ]
        },
        {
          "heading": {
            "en": "Where We Are and When We Are Open",
            "ja": "アクセスと営業時間"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We are in Nakafurano, the town immediately north of Furano, with free parking on site. Lunch runs 11:00 to 15:00 and dinner 17:00 to 21:00. We are closed on the second and fourth Wednesday of each month. For a group, a call ahead on 0167-44-2444 is worth the thirty seconds.",
              "ja": "富良野のすぐ北隣、中富良野町にあり、敷地内に無料駐車場がございます。ランチは11:00〜15:00、ディナーは17:00〜21:00。毎月第2・第4水曜は定休日です。グループでお越しの際は、0167-44-2444 まで30秒のお電話をいただけると確実です。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Is there vegetarian food in Furano?",
            "ja": "富良野にベジタリアン料理はありますか？"
          },
          "a": {
            "en": "Yes. Nepal Dining in Nakafurano, about fifteen minutes from Furano, keeps vegetarian curries and soup curries on the standard menu rather than as a special order.",
            "ja": "はい。富良野から車で約15分の中富良野町にあるネパールダイニングでは、ベジタリアンのカレーとスープカレーを特別注文ではなく通常メニューでご用意しています。"
          }
        },
        {
          "q": {
            "en": "Do you have vegan options?",
            "ja": "ヴィーガン対応はありますか？"
          },
          "a": {
            "en": "Yes, on request. Our standard naan dough contains dairy and egg and several curries are finished with cream or yoghurt, so the default versions are not vegan — but tell us when you order and the kitchen will prepare your dishes, naan included, without dairy or egg.",
            "ja": "はい、ご要望に応じて対応いたします。当店の通常のナン生地には乳製品と卵を使用し、いくつかのカレーは生クリームやヨーグルトで仕上げるため、通常版はヴィーガン対応ではありません。ご注文時にお申し付けいただければ、ナンを含め乳製品・卵を使わずにお作りします。"
          }
        },
        {
          "q": {
            "en": "Does your vegetable curry contain fish stock?",
            "ja": "野菜カレーに魚のだしは入っていますか？"
          },
          "a": {
            "en": "No. Our kitchen is Nepalese and Indian, so bonito dashi is not part of how we cook — which is exactly the ingredient that catches vegetarians out elsewhere in Japan.",
            "ja": "いいえ。当店の厨房はネパール・インド料理ですので、鰹だしは使いません。日本の他のお店でベジタリアンの方が見落としがちなのが、まさにこの材料です。"
          }
        },
        {
          "q": {
            "en": "Can you make the vegetarian dishes less spicy for children?",
            "ja": "子ども向けに辛さを抑えられますか？"
          },
          "a": {
            "en": "Yes, spice is adjustable and our default is already mild, because most of our regulars are local families.",
            "ja": "はい、辛さは調整できます。常連のお客様の多くが地元のご家族のため、標準の辛さはもともと控えめです。"
          }
        },
        {
          "q": {
            "en": "Is the momo vegetarian?",
            "ja": "モモはベジタリアンですか？"
          },
          "a": {
            "en": "It comes both ways — chicken or vegetable. Ask for the vegetable filling when you order, and the same applies to the Momo and Vegetable Soup Curry.",
            "ja": "チキンと野菜の2種類からお選びいただけます。ご注文の際に「野菜」とお伝えください。モモ野菜スープカレーも同様です。"
          }
        },
        {
          "q": {
            "en": "Can you cook nut-free, or around an allergy?",
            "ja": "ナッツ不使用やアレルギー対応はできますか？"
          },
          "a": {
            "en": "Please ask our staff and tell them exactly what needs to be avoided — they will work it out with the kitchen. Do it when you order rather than after the food arrives.",
            "ja": "スタッフに、避けたいものを具体的にお伝えください。厨房と調整いたします。お料理が届いてからではなく、ご注文時にお願いいたします。"
          }
        },
        {
          "q": {
            "en": "Is there vegetarian food near Furano Ski Resort?",
            "ja": "富良野スキー場の近くにベジタリアン料理はありますか？"
          },
          "a": {
            "en": "We are about six kilometres from the resort, roughly fifteen minutes by car, with free parking. A vegetable soup curry after a day on the mountain is the order we would recommend.",
            "ja": "スキー場から約6キロ、車でおよそ15分、無料駐車場もございます。山で過ごした一日の後には、野菜スープカレーをおすすめします。"
          }
        }
      ]
    },
    {
      "slug": "best-curry-in-furano",
      "title": {
        "en": "The Best Curry in Furano: Nepalese, Indian and Hokkaido Soup Curry",
        "ja": "富良野で食べる本格カレー：ネパール・インドカレーと北海道スープカレー"
      },
      "description": {
        "en": "Three different kinds of curry in the Furano area — Nepalese, North Indian and Hokkaido soup curry — what makes each one different, and which to order first.",
        "ja": "富良野エリアで味わえる3種類のカレー。ネパール、北インド、そして北海道スープカレー。それぞれの違いと、最初に頼むべき一皿をご紹介します。"
      },
      "date": "2026-08-25",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Kitchen",
        "ja": "キッチン"
      },
      "category": "food-culture",
      "tags": [
        "best curry furano",
        "curry restaurant furano",
        "soup curry furano",
        "indian curry furano",
        "富良野 カレー",
        "富良野 スープカレー"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg",
      "featured": false,
      "popular": true,
      "readingTime": "7 min",
      "sections": [
        {
          "heading": {
            "en": "Three Kinds of Curry Under One Roof",
            "ja": "一つの店で味わう3種類のカレー"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Ask for curry in Furano and you could be handed three quite different things. There is Japanese curry rice, thick and sweet and closer to a stew. There is Hokkaido soup curry, which is a local invention from Sapporo and is exactly what the name says. And there is the Indian and Nepalese kind, cooked from whole spices with the sauce built around the meat rather than poured over it.",
              "ja": "富良野で「カレー」と頼むと、まったく異なる3つの料理が出てくる可能性があります。とろみと甘みがあり、シチューに近い日本のカレーライス。札幌発祥の北海道スープカレー。そして、ホールスパイスから調理し、ソースを上からかけるのではなく肉とともに仕立てるインド・ネパールのカレーです。"
            },
            {
              "en": "Nepal Dining, in Nakafurano about fifteen minutes north of Furano, does the second and third of those. Our kitchen is Nepalese, our menu is largely North Indian, and the soup curries are our answer to the Hokkaido dish we now live among. Below is how to tell them apart and what to order first.",
              "ja": "ネパールダイニングは富良野から北へ車で約15分の中富良野町にあり、この2番目と3番目をお出ししています。厨房はネパール、メニューは主に北インド、そしてスープカレーは、いま暮らすこの北海道の料理に対する私たちの答えです。以下、その違いと最初の一皿をご案内します。"
            }
          ]
        },
        {
          "heading": {
            "en": "Nepalese Curry: Rara, Sag and Dal",
            "ja": "ネパールのカレー：ララ、サグ、ダル"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Chicken Rara Curry is the one to order if you want to taste what a Nepalese kitchen actually cooks. Rara is a home style, spiced but not heavy, with the sauce reduced rather than thickened, and you will not find it in the chain curry houses along the highway.",
              "ja": "本場のネパール家庭の味を知りたい方には、チキンララカレーをおすすめします。ララは家庭料理のスタイルで、スパイスは効いていながら重たくなく、とろみをつけるのではなくソースを煮詰めて仕上げます。国道沿いのチェーン店では出会えない一皿です。"
            },
            {
              "en": "Sag means greens. Mutton Sag Curry and Chicken Sag Curry are both built on spinach, which makes them the lighter end of the meat menu. Dal Chicken and Dal Mutton bring lentils into the same pot, and lentils are the thing that makes a Nepalese meal filling in a way that has nothing to do with richness. Keema Egg Curry and Sag Keema Curry are the minced-meat side of the same tradition.",
              "ja": "サグとは青菜のこと。マトンサグカレーとチキンサグカレーはほうれん草を土台にしており、肉料理の中では軽めの部類です。ダルチキンとダルマトンは同じ鍋に豆を加えたもの。豆こそが、こってりさせることなくネパールの食事に満足感を与える存在です。キーマエッグカレーとサグキーマカレーは、同じ伝統の挽き肉料理です。"
            }
          ]
        },
        {
          "heading": {
            "en": "Indian Curry: Butter Chicken, Tikka Masala and the Tandoor",
            "ja": "インドのカレー：バターチキン、ティッカマサラ、そしてタンドール"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Chicken Tikka Masala is our best seller and the safest first order for anyone who has not eaten this food before. Butter Chicken is milder still and is what most children in the dining room are eating. Both are finished with dairy, which is where the roundness comes from.",
              "ja": "チキンティッカマサラカレーは当店の一番人気で、この料理を初めて召し上がる方にも安心の一皿です。バターチキンカレーはさらにマイルドで、店内のお子様の多くが召し上がっています。どちらも乳製品で仕上げており、そのまろやかな口当たりが生まれています。"
            },
            {
              "en": "If you would rather have something without a sauce at all, Tandoori Chicken and Chicken Tikka come straight off the tandoor. So does the naan, which is baked to order rather than warmed — Garlic Naan and Cheese Naan are the two that regulars keep coming back for, and a cheese naan shared across a table of four is a reliable way to end an argument about what to order.",
              "ja": "ソースのない料理をお望みなら、タンドリーチキンとチキンティッカをタンドールから直接お出しします。ナンも同様に、温め直しではなくご注文ごとに焼き上げます。常連のお客様がくり返し注文されるのはガーリックナンとチーズナン。4人でチーズナンを分け合えば、何を頼むかの議論はたいてい決着します。"
            }
          ]
        },
        {
          "heading": {
            "en": "Hokkaido Soup Curry, Made by a Nepalese Kitchen",
            "ja": "北海道スープカレーを、ネパールの厨房で"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Soup curry is Hokkaido's own dish. It is thin rather than thick, closer to a spiced broth, and the vegetables are cooked to keep their shape rather than dissolve. We make three: Chicken and Vegetable, Mix Vegetable, and Momo and Vegetable, which puts Nepalese dumplings in a Sapporo-style bowl and is the most Nepalese thing on the Hokkaido half of the menu.",
              "ja": "スープカレーは北海道が生んだ料理です。とろみではなくさらりとしたスパイススープに近く、野菜は溶かさず形を残して仕上げます。当店では3種類をご用意しています。チキン野菜、ミックス野菜、そしてモモ野菜スープカレー。札幌スタイルの器にネパールの餃子を入れた、メニューの北海道側で最もネパールらしい一皿です。"
            },
            {
              "en": "In winter the soup curries outsell everything else, and the reason is not complicated. After a day outside in Hokkaido you want the heat to arrive as liquid.",
              "ja": "冬はスープカレーが何よりもよく出ます。理由は単純です。北海道で一日外にいた後は、温かさが液体でやってくるほうがありがたいのです。"
            }
          ]
        },
        {
          "heading": {
            "en": "Naan, Rice and How to Order",
            "ja": "ナン、ライス、注文の仕方"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Most curries come with a choice of rice or naan and many can be ordered as a large portion. Spice is adjustable in both directions; the default is milder than visitors expect because most of our regulars are local families. If you are undecided, order one Nepalese curry, one soup curry and a garlic naan for the table, and share.",
              "ja": "ほとんどのカレーはライスかナンをお選びいただけ、多くは大盛りにも対応しています。辛さは強くも弱くも調整可能。常連のお客様の多くが地元のご家族のため、標準の辛さは旅行者の想像より控えめです。迷われたら、ネパールのカレーを1つ、スープカレーを1つ、それにガーリックナンをテーブルに頼んで分け合ってみてください。"
            },
            {
              "en": "We are open 11:00 to 15:00 and 17:00 to 21:00, closed the second and fourth Wednesday of each month, with free parking. Takeout is available if you would rather eat back at the accommodation.",
              "ja": "営業は11:00〜15:00と17:00〜21:00、毎月第2・第4水曜は定休日、無料駐車場をご用意しています。宿でお召し上がりになりたい場合は、テイクアウトも承ります。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Where can I find the best curry in Furano?",
            "ja": "富良野でおいしいカレーはどこで食べられますか？"
          },
          "a": {
            "en": "Nepal Dining is in Nakafurano, about fifteen minutes north of Furano, and serves Nepalese and North Indian curries alongside Hokkaido-style soup curry. Chicken Tikka Masala is the best seller; Chicken Rara Curry is the one to try if you want something you will not find elsewhere in the valley.",
            "ja": "ネパールダイニングは富良野から北へ約15分の中富良野町にあり、ネパール・北インドのカレーと北海道スタイルのスープカレーをお出ししています。一番人気はチキンティッカマサラカレー。この谷の他では味わえないものをお探しなら、チキンララカレーをどうぞ。"
          }
        },
        {
          "q": {
            "en": "What is the difference between soup curry and normal curry?",
            "ja": "スープカレーと普通のカレーの違いは何ですか？"
          },
          "a": {
            "en": "Soup curry is a Hokkaido dish: a thin spiced broth with vegetables kept whole, eaten with rice on the side. A regular curry has a reduced, thicker sauce cooked together with the meat.",
            "ja": "スープカレーは北海道の料理で、スパイスの効いたさらりとしたスープに野菜を形を残して入れ、ライスを添えていただきます。通常のカレーは、肉と一緒に煮詰めたとろみのあるソースです。"
          }
        },
        {
          "q": {
            "en": "Is the curry very spicy?",
            "ja": "カレーはとても辛いですか？"
          },
          "a": {
            "en": "Not by default. Spice is adjustable, and the standard level is set for local families. Ask for it hotter and we will oblige.",
            "ja": "標準では辛くありません。辛さは調整でき、標準は地元のご家族に合わせています。辛めをご希望であればお申し付けください。"
          }
        },
        {
          "q": {
            "en": "Do you have vegetarian curry?",
            "ja": "ベジタリアンのカレーはありますか？"
          },
          "a": {
            "en": "Yes — Mix Vegetable Curry and Mix Vegetable Soup Curry are both on the standard menu.",
            "ja": "はい。ミックス野菜カレーとミックス野菜スープカレーを通常メニューでご用意しています。"
          }
        },
        {
          "q": {
            "en": "Is the naan baked fresh?",
            "ja": "ナンは焼きたてですか？"
          },
          "a": {
            "en": "Yes, in the tandoor, to order. Plain, garlic and cheese.",
            "ja": "はい、タンドールでご注文ごとに焼き上げます。プレーン、ガーリック、チーズをご用意しています。"
          }
        }
      ]
    },
    {
      "slug": "where-to-eat-in-nakafurano",
      "title": {
        "en": "Where to Eat in Nakafurano: A Guide to the Town Next Door to Furano",
        "ja": "中富良野で食事するなら：富良野の隣町ガイド"
      },
      "description": {
        "en": "Nakafurano is a small town between Furano and Kamifurano, and it is where Nepal Dining has cooked since 2019. Lunch, dinner, parking, access from Farm Tomita and the station.",
        "ja": "中富良野は富良野と上富良野の間にある小さな町。ネパールダイニングが料理を出し続けてきた場所です。ランチ、ディナー、駐車場、ファーム富田や中富良野駅からのアクセスをご案内します。"
      },
      "date": "2026-08-25",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Guest Relations",
        "ja": "ゲストリレーション"
      },
      "category": "furano-travel-guide",
      "tags": [
        "restaurant nakafurano",
        "best restaurant nakafurano",
        "indian restaurant nakafurano",
        "lunch nakafurano",
        "中富良野 レストラン",
        "中富良野 カレー"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/momo.jpg",
      "featured": false,
      "popular": false,
      "readingTime": "6 min",
      "sections": [
        {
          "heading": {
            "en": "A Small Town With a Full Kitchen",
            "ja": "小さな町の、ちゃんとした厨房"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Most people meet Nakafurano by accident. They come for Farm Tomita in July, or they drive through in February on the way between Furano Ski Resort and Kamifurano, and the town registers as a few minutes of road between two better-known names. It is smaller than Furano and quieter than Kamifurano, and that is most of its appeal.",
              "ja": "多くの方は偶然に中富良野と出会います。7月にファーム富田を訪れたり、2月に富良野スキー場と上富良野の間を車で通り抜けたり。二つの有名な地名にはさまれた数分間の道として記憶されがちです。富良野より小さく、上富良野より静か。その静けさこそが、この町のよさです。"
            },
            {
              "en": "It also means that when you decide you are hungry here, the options are finite. Nepal Dining has been cooking in Nakafurano since 2019, and this page is the practical version of what visitors usually want to know: what we serve, when we are open, and how to find us.",
              "ja": "ただ、それはお腹がすいたときの選択肢が限られるということでもあります。ネパールダイニングは2019年から中富良野で料理をお出ししてきました。このページは、旅行者の方がよく知りたいことを実用的にまとめたものです。何を出しているか、いつ開いているか、どうやって行くか。"
            }
          ]
        },
        {
          "heading": {
            "en": "What We Serve",
            "ja": "お出ししているもの"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Nepalese and North Indian food, cooked from whole spices, plus Hokkaido-style soup curry. Chicken Tikka Masala and Butter Chicken are the two most-ordered curries. Momo, the Nepalese steamed dumpling, is the dish people come back for and the one most likely to be new to you. Naan is baked to order in the tandoor rather than reheated.",
              "ja": "ホールスパイスから調理するネパール・北インド料理と、北海道スタイルのスープカレーです。よく注文されるカレーはチキンティッカマサラとバターチキン。ネパールの蒸し餃子モモは、リピーターの多い一品であり、初めての方が最も多い料理でもあります。ナンは温め直しではなく、タンドールでご注文ごとに焼き上げます。"
            },
            {
              "en": "The dining room seats around sixty, walk-ins are welcome, and the staff speak English. Vegetarian dishes are on the standard menu, and we are halal-friendly — not halal-certified, and we say so plainly, because the distinction matters to the people who ask.",
              "ja": "客席は約60席、ご予約なしのご来店も歓迎で、スタッフは英語に対応します。ベジタリアン料理は通常メニューにあり、当店はハラールフレンドリーです。ハラール認証店ではなく、その点ははっきりお伝えします。お尋ねになる方にとって、この違いは重要だからです。"
            }
          ]
        },
        {
          "heading": {
            "en": "Lunch or Dinner in Nakafurano",
            "ja": "中富良野のランチとディナー"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Lunch runs 11:00 to 15:00 and is the quieter service, which makes it the better one if you are travelling with small children or want to talk to the staff about ingredients without a queue behind you. Dinner runs 17:00 to 21:00 and in ski season the first hour after the lifts close is the busiest stretch of the day.",
              "ja": "ランチは11:00〜15:00で、比較的落ち着いた時間帯です。小さなお子様連れの方や、後ろに列を気にせず材料についてスタッフに相談したい方には、こちらがおすすめです。ディナーは17:00〜21:00。スキーシーズンはリフト終了直後の1時間が一日で最も混み合います。"
            },
            {
              "en": "We are closed on the second and fourth Wednesday of each month, and open on the first, third and fifth — worth checking against the calendar before you drive, because it is the kind of detail that catches people out.",
              "ja": "毎月第2・第4水曜は定休日、第1・第3・第5水曜は営業しています。見落としやすい点ですので、お車でお越しになる前にカレンダーでご確認ください。"
            }
          ]
        },
        {
          "heading": {
            "en": "Finding Us: Station, Farm Tomita and the Road to Furano",
            "ja": "アクセス：駅、ファーム富田、富良野への道"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We are at Akatsukimachi 3-19 in Nakafurano. Nakafurano Station is about 1.4 kilometres away, a short taxi ride or a walk when the pavements are clear. Farm Tomita is a few minutes by car in summer. Furano town and Furano Ski Resort are both about six kilometres south, near enough fifteen minutes on a normal winter road, and Kamifurano is a similar distance north.",
              "ja": "所在地は中富良野町暁町3-19です。中富良野駅から約1.4キロ、タクシーならすぐ、歩道の雪がない時期なら徒歩でも。夏はファーム富田から車で数分です。富良野市街と富良野スキー場はいずれも南へ約6キロ、通常の冬道でおよそ15分。上富良野は北へ同程度の距離です。"
            },
            {
              "en": "There is free parking on site. In winter that matters more than it sounds, because the alternative in a small Hokkaido town is usually a snow-narrowed street.",
              "ja": "敷地内に無料駐車場がございます。冬場はこれが思っている以上に重要です。北海道の小さな町では、代わりになるのはたいてい雪で狭くなった道路だからです。"
            }
          ]
        },
        {
          "heading": {
            "en": "Booking, Groups and Takeout",
            "ja": "ご予約・グループ・テイクアウト"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Walk-ins are fine most of the time. For groups of more than four, or any evening in ski season, call ahead on 0167-44-2444 or use the reservation form on this site. Takeout is available if you would rather eat back at the accommodation, which in deep winter is a perfectly reasonable preference.",
              "ja": "ほとんどの場合、ご予約なしでも大丈夫です。5名以上のグループ、またはスキーシーズンの夜は、0167-44-2444 までお電話いただくか、当サイトのご予約フォームをご利用ください。宿でお召し上がりになりたい場合はテイクアウトも承ります。真冬にはまったく理にかなったご選択です。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Are there restaurants in Nakafurano?",
            "ja": "中富良野にレストランはありますか？"
          },
          "a": {
            "en": "Yes, though it is a small town so the choice is limited. Nepal Dining has served Nepalese and Indian food in Nakafurano since 2019, with around sixty seats, English-speaking staff and free parking.",
            "ja": "はい。ただし小さな町ですので選択肢は限られます。ネパールダイニングは2019年から中富良野でネパール・インド料理をお出ししており、約60席、英語対応スタッフ、無料駐車場をご用意しています。"
          }
        },
        {
          "q": {
            "en": "How far is Nakafurano from Furano?",
            "ja": "中富良野から富良野までどのくらいですか？"
          },
          "a": {
            "en": "About six kilometres, roughly fifteen minutes by car in normal winter conditions. Nakafurano is the next town north.",
            "ja": "約6キロ、通常の冬の路面状況で車でおよそ15分です。中富良野は富良野の北隣の町です。"
          }
        },
        {
          "q": {
            "en": "Can I walk from Nakafurano Station?",
            "ja": "中富良野駅から歩けますか？"
          },
          "a": {
            "en": "It is about 1.4 kilometres. Easy enough outside winter; in deep snow most guests take a taxi or drive.",
            "ja": "約1.4キロです。冬以外なら十分歩ける距離ですが、雪深い時期は多くのお客様がタクシーかお車でお越しになります。"
          }
        },
        {
          "q": {
            "en": "Are you open on Wednesdays?",
            "ja": "水曜日は営業していますか？"
          },
          "a": {
            "en": "On the first, third and fifth Wednesday of the month, yes. We are closed on the second and fourth.",
            "ja": "第1・第3・第5水曜は営業しています。第2・第4水曜は定休日です。"
          }
        },
        {
          "q": {
            "en": "Do you take reservations?",
            "ja": "予約はできますか？"
          },
          "a": {
            "en": "Yes, by phone on 0167-44-2444 or through the form on this site. Walk-ins are welcome too, but a group of five or more in ski season is worth booking.",
            "ja": "はい。0167-44-2444 までお電話いただくか、当サイトのフォームからご予約いただけます。ご予約なしのご来店も歓迎ですが、スキーシーズンに5名以上でお越しの場合はご予約をおすすめします。"
          }
        }
      ]
    },
    {
      "slug": "where-to-eat-furano-nakafurano-kamifurano-biei",
      "title": {
        "en": "Where to Eat in Furano, Nakafurano, Kamifurano and Biei",
        "ja": "富良野・中富良野・上富良野・美瑛でどこで食べるか"
      },
      "description": {
        "en": "A practical eating guide to the Furano valley — how far apart the towns actually are, what is open when, and where to stop for curry between Furano and Biei.",
        "ja": "富良野の谷を旅する方のための実用的な食事ガイド。町と町の実際の距離、営業時間、そして富良野と美瑛の間でカレーを食べるならどこか。"
      },
      "date": "2026-08-25",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Guest Relations",
        "ja": "ゲストリレーション"
      },
      "category": "furano-travel-guide",
      "tags": [
        "restaurants furano area",
        "where to eat furano",
        "restaurants kamifurano",
        "restaurants biei",
        "curry restaurant furano area",
        "富良野 レストラン",
        "美瑛 レストラン"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-rara-curry.jpg",
      "featured": false,
      "popular": false,
      "readingTime": "7 min",
      "sections": [
        {
          "heading": {
            "en": "The Valley Is Smaller Than It Looks",
            "ja": "この谷は、見た目より小さい"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Furano, Nakafurano, Kamifurano and Biei read like four separate destinations on a map and behave like one long road in practice. Furano to Nakafurano is about six kilometres. Nakafurano to Kamifurano is about eight. Biei sits further north, roughly thirty minutes by car in winter, and is the only one of the four that feels like a proper journey rather than a hop.",
              "ja": "富良野、中富良野、上富良野、美瑛は地図の上では4つの別々の目的地に見えますが、実際には一本の長い道のように移動できます。富良野から中富良野まで約6キロ、中富良野から上富良野まで約8キロ。美瑛はさらに北にあり、冬季は車でおよそ30分。4つの中で唯一、「ちょっと移動する」ではなく「旅をする」感覚のある区間です。"
            },
            {
              "en": "That matters when you are hungry, because it means you are rarely more than twenty minutes from anywhere in the valley — and it means the honest answer to \"where should we eat\" is usually not \"in the town we happen to be standing in\". Nepal Dining is based in Nakafurano, near the middle of that road, which is a geographical accident we have come to appreciate.",
              "ja": "これはお腹がすいたときに効いてきます。谷のどこにいても、たいていは20分以内でどこへでも行けるということだからです。つまり「どこで食べようか」への正直な答えは、多くの場合「いま立っている町」ではありません。ネパールダイニングはその道のほぼ中間、中富良野町にあります。地理的な偶然ですが、ありがたく思っています。"
            }
          ]
        },
        {
          "heading": {
            "en": "From Furano: Six Kilometres North",
            "ja": "富良野から：北へ6キロ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Furano is the biggest of the four and has the widest choice, particularly around the station and the ski resort base. It is also where the queues are in high season. If you are staying in Furano and everything within walking distance has a wait on it, driving six kilometres north to Nakafurano takes about fifteen minutes and there is free parking at the other end.",
              "ja": "富良野は4つの中で最も大きく、特に駅周辺とスキー場のベースエリアでは選択肢が豊富です。同時に、ハイシーズンには行列ができる場所でもあります。富良野に滞在していて、歩いて行ける範囲がどこも待ちになっている場合、北へ6キロ、車で約15分の中富良野まで足を延ばせば、着いた先には無料駐車場があります。"
            },
            {
              "en": "From Furano Ski Resort specifically, the drive is the same distance and is a natural stop on the way back to accommodation rather than a detour.",
              "ja": "富良野スキー場からも距離は同じで、宿へ戻る道すがらの自然な立ち寄り先になります。わざわざの遠回りにはなりません。"
            }
          ]
        },
        {
          "heading": {
            "en": "From Kamifurano: Eight Kilometres South",
            "ja": "上富良野から：南へ8キロ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Kamifurano is the quieter northern neighbour, known for its onsen and for Tokachidake beyond it. It has fewer places to eat in the evening than visitors expect, particularly outside the summer season, and the eight kilometres south to Nakafurano is a short run on a road that is generally well cleared in winter.",
              "ja": "上富良野は静かな北隣の町で、温泉と、その先の十勝岳で知られています。夕方に食事のできる場所は旅行者の想像より少なく、特に夏季以外はその傾向が強くなります。南へ8キロの中富良野までは短い移動で、冬もおおむね除雪の行き届いた道です。"
            }
          ]
        },
        {
          "heading": {
            "en": "From Biei: The Long Way Down",
            "ja": "美瑛から：丘を越えて南へ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Biei is the one that takes planning. The Blue Pond and the patchwork hills are the reason people go, and in winter the light is gone by mid-afternoon, which catches out visitors who assumed they could sightsee and then find dinner at leisure. Allow around thirty minutes to drive down to Nakafurano, and bear in mind that our kitchen stops serving at 21:00.",
              "ja": "美瑛は計画が必要な一箇所です。青い池とパッチワークの丘を目当てに多くの方が訪れますが、冬は午後の半ばには日が落ちます。観光の後にゆっくり夕食を探せると考えていた旅行者が、これで慌てることになります。中富良野まで車でおよそ30分をみておき、当店の厨房が21:00でお料理を終えることも頭に入れておいてください。"
            },
            {
              "en": "If you are driving the Biei-to-Furano route in a single day, the practical move is to eat in the middle rather than at either end. That is the case for stopping in Nakafurano, and we would make it even if we were not standing in it.",
              "ja": "美瑛から富良野までを一日で走るなら、実用的なのは端ではなく途中で食事をとることです。中富良野に立ち寄る理由はそこにあります。仮に私たちがこの町にいなかったとしても、同じことを申し上げるはずです。"
            }
          ]
        },
        {
          "heading": {
            "en": "Planning the Stop",
            "ja": "立ち寄りの計画"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Nepal Dining is at Akatsukimachi 3-19, Nakafurano — not in Furano, Kamifurano or Biei, but within easy reach of all three. Lunch is 11:00 to 15:00, dinner 17:00 to 21:00, closed the second and fourth Wednesday of each month. Around sixty seats, free parking, English-speaking staff, vegetarian dishes on the standard menu and halal-friendly options, though we are not halal-certified and say so.",
              "ja": "ネパールダイニングは中富良野町暁町3-19にあります。富良野、上富良野、美瑛のいずれでもありませんが、どこからも無理なく来られる場所です。ランチ11:00〜15:00、ディナー17:00〜21:00、毎月第2・第4水曜定休。約60席、無料駐車場、英語対応スタッフ、通常メニューのベジタリアン料理、ハラールフレンドリーな選択肢をご用意しています。ただしハラール認証店ではなく、その点は明記しています。"
            },
            {
              "en": "For a group of more than four, or for any evening in ski season, call 0167-44-2444 before you set off. In a valley this size, a phone call is usually the difference between eating when you arrive and waiting outside in the cold.",
              "ja": "5名以上のグループ、またはスキーシーズンの夜は、出発前に 0167-44-2444 までお電話ください。この規模の谷では、電話一本が「着いてすぐ食べられる」か「寒い外で待つ」かの分かれ目になります。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "How far is Biei from Furano?",
            "ja": "美瑛から富良野までどのくらいですか？"
          },
          "a": {
            "en": "Around thirty minutes by car in winter conditions, with Nakafurano roughly in between. Plan dinner around it rather than assuming you will find something at the end of the drive.",
            "ja": "冬季の路面状況で車におよそ30分、中富良野はそのほぼ中間にあります。着いてから探すのではなく、夕食を計画に入れておくことをおすすめします。"
          }
        },
        {
          "q": {
            "en": "Is there an Indian restaurant in the Furano area?",
            "ja": "富良野エリアにインド料理店はありますか？"
          },
          "a": {
            "en": "Yes. Nepal Dining serves Nepalese and North Indian food from Nakafurano, about fifteen minutes from Furano and a similar distance from Kamifurano.",
            "ja": "はい。ネパールダイニングが中富良野からネパール・北インド料理をお出ししています。富良野から約15分、上富良野からも同程度の距離です。"
          }
        },
        {
          "q": {
            "en": "Where should we eat between Furano and Biei?",
            "ja": "富良野と美瑛の間で食事をするならどこですか？"
          },
          "a": {
            "en": "Somewhere in the middle, which in practice means Nakafurano or Kamifurano. Eating at either end of that drive tends to mean eating late.",
            "ja": "中間、つまり実質的には中富良野か上富良野です。この道の端で食事をとろうとすると、たいてい遅い時間になります。"
          }
        },
        {
          "q": {
            "en": "Do restaurants in the Furano area close early in winter?",
            "ja": "冬季、富良野エリアの飲食店は早く閉まりますか？"
          },
          "a": {
            "en": "Many do, and it surprises visitors. We serve dinner until 21:00 and are closed the second and fourth Wednesday of each month.",
            "ja": "早めに閉まるお店は多く、旅行者の方は驚かれます。当店はディナーを21:00まで、毎月第2・第4水曜は定休日としています。"
          }
        },
        {
          "q": {
            "en": "Is parking easy in the Furano area in winter?",
            "ja": "冬の富良野エリアは駐車しやすいですか？"
          },
          "a": {
            "en": "It varies a great deal. Town-centre streets narrow considerably once the snow is banked. We have free parking on site, which is one less thing to solve.",
            "ja": "場所によって大きく異なります。雪が積み上がると市街地の道路はかなり狭くなります。当店は敷地内に無料駐車場がございますので、その分の心配は要りません。"
          }
        }
      ]
    },
    {
      "slug": "best-restaurants-in-furano",
      "title": {
        "en": "Best Restaurants in Furano: A Complete Dining Guide",
        "ja": "富良野ベストレストランガイド：完全版"
      },
      "description": {
        "en": "How to choose where to eat in the Furano valley: what the area is known for, what to expect in each season, and the practical details that decide a meal — hours, parking, language and dietary needs.",
        "ja": "富良野エリアでの食事場所の選び方。この地域の食の特徴、季節ごとの傾向、そして実際に食事を左右する要素（営業時間、駐車場、言語対応、食事制限）をご案内します。"
      },
      "date": "2025-05-10",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Food & Travel Writer",
        "ja": "グルメ＆旅行ライター"
      },
      "category": "furano-travel-guide",
      "tags": [
        "furano restaurants",
        "best food furano",
        "halal furano",
        "hokkaido dining"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg",
      "featured": true,
      "popular": true,
      "readingTime": "6 min",
      "sections": [
        {
          "heading": {
            "en": "What the Furano Valley Is Known For",
            "ja": "富良野エリアの食の特徴"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "This is farming country. The valley and the hills around it produce dairy, potatoes, corn, onions and melons, and Hokkaido as a whole is known for its seafood. That shows up on menus across the area in different ways — some kitchens lean on the local produce directly, others simply cook well with what is grown nearby.",
              "ja": "ここは農業地帯です。この谷とその周囲の丘陵では、乳製品、じゃがいも、とうもろこし、玉ねぎ、メロンなどが生産され、北海道全体としては海産物でも知られています。それが地域のさまざまなお店のメニューに、それぞれの形で表れています。地元の食材を前面に出す店もあれば、近隣で採れたもので丁寧に料理する店もあります。"
            },
            {
              "en": "Soup curry deserves a mention on its own. It is a Hokkaido speciality rather than a Furano one, but it suits this climate so well that you will find it across the island, and it is the dish most visitors from outside Japan end up remembering.",
              "ja": "スープカレーについては別に触れておく価値があります。富良野というより北海道の名物ですが、この気候に非常によく合うため道内各地で見られ、海外からのお客様が最も印象に残る一皿になることが多い料理です。"
            }
          ]
        },
        {
          "heading": {
            "en": "What Actually Decides Where You Eat",
            "ja": "実際に食事場所を決める要素"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "In a rural valley the deciding factors are rarely the food alone. Opening hours are shorter than in a city and many places close between lunch and dinner. Distances are real — what looks close on a map is a drive. Parking matters. And if you are travelling without Japanese, whether anyone at the restaurant speaks English changes the evening considerably.",
              "ja": "地方の谷あいでは、食事場所を決めるのは料理だけではないことがほとんどです。営業時間は都市部より短く、ランチとディナーの間は閉まる店も多くあります。距離も現実的な問題です。地図で近く見えても、実際は車での移動になります。駐車場も重要です。そして日本語が不安な方にとっては、英語が通じるかどうかで夜の過ごしやすさが大きく変わります。"
            },
            {
              "en": "Season changes things too. During the lavender weeks in July and August, and again through the ski season, the evening sitting fills up across the valley. Booking ahead is worth the phone call, especially for a group.",
              "ja": "季節によっても事情が変わります。7月・8月のラベンダーの時期、そしてスキーシーズンの間は、谷全体で夜の席が埋まりやすくなります。特にグループの場合、事前のお電話は一本かける価値があります。"
            }
          ]
        },
        {
          "heading": {
            "en": "Where We Fit: Nepal Dining, Nakafurano",
            "ja": "当店について：ネパールダイニング（中富良野）"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We are a Nepalese and Indian restaurant based in Nakafurano, in the middle of the valley. About fifteen minutes by car from Furano Ski Resort and from Kamifurano, and around thirty from Biei. Free parking, sixty seats, and walk-ins welcome outside the busiest evenings.",
              "ja": "当店は谷の中ほど、中富良野にあるネパール・インド料理店です。富良野スキー場および上富良野から車でおよそ15分、美瑛からは30分ほどです。無料駐車場、60席をご用意し、混雑する夜以外はご予約なしでもお越しいただけます。"
            },
            {
              "en": "On the menu you will find curries — butter chicken, tikka masala, mutton, keema, prawn and seafood among them — three soup curries, naan baked to order in the tandoor, rice, tandoori chicken, chicken tikka and momo, the Nepalese steamed dumpling, which comes with a chicken or a vegetable filling. You choose the spice level yourself.",
              "ja": "メニューにはカレーが並びます。バターチキン、ティッカマサラ、マトン、キーマ、エビ、シーフードなど。スープカレーは3種類、ナンはタンドールでその都度焼き上げ、ライス、タンドリーチキン、チキンティッカ、そしてネパールの蒸し餃子モモをご用意しています。モモはチキンと野菜からお選びいただけます。辛さはお客様ご自身でお選びいただけます。"
            }
          ]
        },
        {
          "heading": {
            "en": "Language, Diet and Practical Details",
            "ja": "言語・食事制限・実用情報"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Our staff speak English. We are halal-friendly — not halal-certified, and we say so plainly, because the difference matters to the people who ask. Vegetarian dishes are on the standard menu. Vegan is possible on request: our standard naan dough contains dairy and egg, but the kitchen will prepare dishes without them if you say so when you order. The same applies to nut-free cooking and to allergies.",
              "ja": "スタッフは英語に対応しています。当店はハラールフレンドリーです。ハラール認証店ではありませんので、その点ははっきりとお伝えしています。この違いは、お尋ねになる方にとって重要だからです。ベジタリアン料理は通常メニューにございます。ヴィーガン対応もご相談いただけます。当店の通常のナン生地には乳製品と卵を使用していますが、ご注文時にお申し付けいただければ、それらを使わずにお作りします。ナッツ不使用やアレルギー対応も同様です。"
            },
            {
              "en": "We open Tuesday to Sunday, 11:00 to 15:00 and 17:00 to 21:00, and close on the second and fourth Wednesday of each month. The number is 0167-44-2444. If you are more than four people, or arriving at a busy hour in season, a call ahead is the safest way to get a table.",
              "ja": "営業は火曜日から日曜日、11:00〜15:00および17:00〜21:00です。毎月第2・第4水曜日は定休日となります。お電話は0167-44-2444です。5名以上のグループの方、またはシーズン中の混雑する時間帯にお越しの場合は、事前にお電話いただくのが確実です。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Do restaurants in the Furano area have English menus?",
            "ja": "富良野エリアのレストランに英語メニューはありますか？"
          },
          "a": {
            "en": "It varies, and outside the tourist spots you should not assume it. Our staff speak English, so ordering is straightforward here even if you have no Japanese.",
            "ja": "店によって異なり、観光エリア以外では期待しないほうが無難です。当店はスタッフが英語に対応していますので、日本語が話せなくてもご注文いただけます。"
          }
        },
        {
          "q": {
            "en": "Is there halal food in the Furano area?",
            "ja": "富良野エリアにハラール料理はありますか？"
          },
          "a": {
            "en": "We are halal-friendly, not halal-certified — we have not been through a certification audit and we will not claim otherwise. Many dishes are prepared without pork or alcohol; ask us and we will tell you exactly what is in a dish.",
            "ja": "当店はハラールフレンドリーですが、ハラール認証は受けておりません。認証審査を経ていないため、そのように名乗ることはいたしません。豚肉やアルコールを使わずにご用意できる料理も多くございます。お尋ねいただければ、料理の内容を正確にお答えします。"
          }
        },
        {
          "q": {
            "en": "Do I need to book?",
            "ja": "予約は必要ですか？"
          },
          "a": {
            "en": "Not usually. During lavender season and ski season the evening fills up, so for a group of more than four or a busy evening, call 0167-44-2444 first.",
            "ja": "通常は不要です。ラベンダーシーズンとスキーシーズンの夜は席が埋まりやすいため、5名以上のグループや混雑する夜は、事前に0167-44-2444までお電話ください。"
          }
        },
        {
          "q": {
            "en": "How far are you from Furano town and the ski resort?",
            "ja": "富良野の街やスキー場からどのくらいですか？"
          },
          "a": {
            "en": "About fifteen minutes by car from Furano Ski Resort, the same from Kamifurano, and around thirty minutes from Biei. We are in Nakafurano with free parking.",
            "ja": "富良野スキー場から車でおよそ15分、上富良野からも同じくらい、美瑛からは30分ほどです。当店は中富良野にあり、無料駐車場がございます。"
          }
        }
      ]
    },
    {
      "slug": "furano-lavender-guide",
      "title": {
        "en": "Furano Lavender Fields: The Complete Visitor's Guide",
        "ja": "富良野ラベンダー畑：完全ガイド"
      },
      "description": {
        "en": "Furano lavender season: when it actually peaks, how the crowds and the traffic behave, and how to plan meals around a day in the fields.",
        "ja": "富良野のラベンダーシーズン。実際の見頃、混雑と渋滞の傾向、そして花畑で過ごす一日の食事の組み立て方をご案内します。"
      },
      "date": "2025-04-22",
      "author": "Yuki Tanaka",
      "authorRole": {
        "en": "Travel Writer",
        "ja": "旅行ライター"
      },
      "category": "furano-attractions",
      "tags": [
        "furano lavender",
        "hokkaido travel",
        "furano summer",
        "lavender season"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg",
      "featured": true,
      "popular": true,
      "readingTime": "5 min",
      "sections": [
        {
          "heading": {
            "en": "When It Actually Peaks",
            "ja": "実際の見頃"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Lavender season in the Furano valley runs through July into early August, with the strongest colour usually in the middle weeks of July. Early varieties start showing from late June. The exact peak moves with the weather each year, so if you are travelling specifically for it, check the farms' own updates in the week before you go rather than booking months ahead on a guess.",
              "ja": "富良野エリアのラベンダーシーズンは7月から8月初旬にかけてで、色が最も濃くなるのは通常7月の中旬です。早咲きの品種は6月下旬から色づき始めます。見頃の正確な時期はその年の天候によって前後しますので、これを目的に旅行される場合は、数ヶ月前に見込みで予約するより、出発前の週に各農園の最新情報をご確認ください。"
            }
          ]
        },
        {
          "heading": {
            "en": "What the Season Does to the Valley",
            "ja": "シーズン中の谷の様子"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "This is the busiest few weeks of the year here. Roads that are empty in May take much longer in July, car parks at the well-known farms fill by mid-morning, and restaurants that normally seat you straight away have a wait at lunchtime. None of that is a reason to avoid the season — it is a reason to start early.",
              "ja": "この数週間が一年で最も混み合う時期です。5月にはがらがらの道も7月には時間がかかり、有名な農園の駐車場は午前中には埋まり、普段ならすぐに座れる飲食店も昼どきは待ちが出ます。これはシーズンを避ける理由ではなく、早めに動く理由です。"
            },
            {
              "en": "The practical pattern that works: fields first thing, lunch early rather than at noon, and the afternoon somewhere quieter. Nakafurano and Kamifurano are both worth a look while you are between farms.",
              "ja": "うまくいく組み立てはこうです。朝いちばんに花畑、昼食は正午ではなく早めに、午後は少し静かな場所で。農園の移動の合間に、中富良野と上富良野にも立ち寄る価値があります。"
            }
          ]
        },
        {
          "heading": {
            "en": "Eating Around a Field Day",
            "ja": "花畑の日の食事"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We open at 11:00, and in July and August the first hour is the easy one — after about half past twelve the lunch service is busy. We are in Nakafurano, in the middle of the valley, so we are a short drive from most of the farms, and there is free parking.",
              "ja": "当店は11:00に開店します。7月・8月は最初の1時間が狙い目で、12時半を過ぎるとランチタイムは混み合います。当店は谷の中ほどの中富良野にありますので、多くの農園から車ですぐです。無料駐車場もございます。"
            },
            {
              "en": "In hot weather people tend to order lighter — the soup curries go well in summer, and momo before them. If you are a group of more than four, call 0167-44-2444 ahead; in season the evening sitting fills up. Our hours are 11:00 to 15:00 and 17:00 to 21:00, Tuesday to Sunday, closed the second and fourth Wednesday.",
              "ja": "暑い時期は軽めのご注文が多くなります。夏はスープカレーがよく合い、その前にモモもおすすめです。5名以上のグループの方は、0167-44-2444まで事前にお電話ください。シーズン中は夜の席が埋まります。営業時間は火曜日から日曜日の11:00〜15:00と17:00〜21:00、第2・第4水曜日は定休日です。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "When is the best time to see lavender in Furano?",
            "ja": "富良野のラベンダーの見頃はいつですか？"
          },
          "a": {
            "en": "July, with the strongest colour usually in the middle weeks. Early varieties show from late June. The peak shifts with the weather, so check the farms' own updates in the week before you travel.",
            "ja": "7月で、色が最も濃くなるのは通常中旬です。早咲きは6月下旬から。見頃は天候で前後しますので、出発前の週に各農園の最新情報をご確認ください。"
          }
        },
        {
          "q": {
            "en": "How busy does it get?",
            "ja": "どのくらい混みますか？"
          },
          "a": {
            "en": "These are the busiest weeks of the year in the valley. Car parks fill by mid-morning and lunch service is busy from about half past twelve. Starting early solves most of it.",
            "ja": "一年で最も混み合う時期です。駐車場は午前中に埋まり、ランチは12時半ごろから混み合います。早めに動けばたいていは解決します。"
          }
        },
        {
          "q": {
            "en": "Can we eat lunch near the lavender farms?",
            "ja": "ラベンダー農園の近くで昼食はとれますか？"
          },
          "a": {
            "en": "We are in Nakafurano, a short drive from most of the farms, open from 11:00 with free parking. The first hour is the quietest.",
            "ja": "当店は中富良野にあり、多くの農園から車ですぐです。11:00開店、無料駐車場ございます。最初の1時間が最も空いています。"
          }
        },
        {
          "q": {
            "en": "Should we book?",
            "ja": "予約は必要ですか？"
          },
          "a": {
            "en": "For a group of more than four in July and August, yes — call 0167-44-2444. Otherwise walk-ins are fine, especially at lunch.",
            "ja": "7月・8月に5名以上のグループでお越しの場合はお願いします。0167-44-2444までお電話ください。それ以外、特にランチはご予約なしでも大丈夫です。"
          }
        }
      ]
    },
    {
      "slug": "halal-food-in-furano",
      "title": {
        "en": "Halal-Friendly Food in Furano: An Honest Guide for Muslim Visitors",
        "ja": "富良野のハラールフレンドリー料理：ムスリム旅行者のための正直なガイド"
      },
      "description": {
        "en": "Where to find halal-friendly food in the Furano area of Hokkaido. What we can prepare without pork or alcohol, what we cannot promise, and how to order with confidence.",
        "ja": "北海道富良野エリアでハラールフレンドリーな食事を探している方へ。豚肉・アルコールを使わずご用意できるもの、お約束できないこと、安心してご注文いただく方法をご案内します。"
      },
      "date": "2026-08-25",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Guest Relations",
        "ja": "ゲストリレーション"
      },
      "category": "food-culture",
      "tags": [
        "halal furano",
        "halal restaurant furano",
        "muslim friendly furano",
        "halal food near furano ski resort",
        "富良野 ハラール"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-tikka.jpg",
      "featured": false,
      "popular": true,
      "readingTime": "7 min",
      "sections": [
        {
          "heading": {
            "en": "Halal-Friendly Dining in the Furano Area",
            "ja": "富良野エリアのハラールフレンドリーな食事"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Furano is one of the easiest places in Hokkaido to fall in love with and one of the harder places to eat if you avoid pork and alcohol. Rural Japanese cooking leans on both: mirin and cooking sake turn up in sauces that look completely plain, and pork is the default meat in ramen, katsu and much of the izakaya menu. Visitors from Malaysia, Indonesia, Singapore and the Gulf tell us the same thing every winter, which is that the skiing was the easy part and dinner was the puzzle.",
              "ja": "富良野は北海道でもとりわけ魅力的な場所ですが、豚肉とアルコールを避ける方にとっては食事が難しい土地でもあります。日本の地方料理はみりんや料理酒を多用し、一見素朴なソースにも入っていることがあります。ラーメンやカツ、多くの居酒屋メニューでは豚肉が基本です。マレーシア、インドネシア、シンガポール、湾岸諸国からのお客様は毎冬同じことをおっしゃいます。スキーは簡単だったが、夕食が難題だった、と。"
            },
            {
              "en": "Nepal Dining is in Nakafurano, the next town north of Furano, about six kilometres from Furano Ski Resort and roughly fifteen minutes by car. Our kitchen is Nepalese and Indian, which means the food we cook every day is already built around lamb, chicken, lentils and vegetables rather than pork, and around yoghurt and spice rather than sake and mirin. That is the honest reason we can help, and it is worth understanding before you read the rest of this page.",
              "ja": "ネパールダイニングは富良野の隣町、中富良野町にあります。富良野スキー場から約6キロ、車でおよそ15分です。当店の厨房はネパール・インド料理で、日々つくる料理はもともと豚肉ではなくラム、チキン、豆、野菜を中心に、日本酒やみりんではなくヨーグルトとスパイスを使って組み立てられています。これが、私たちがお力になれる正直な理由です。"
            }
          ]
        },
        {
          "heading": {
            "en": "What \"Halal-Friendly\" Means Here, and What It Does Not",
            "ja": "「ハラールフレンドリー」の意味と、その限界"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Nepal Dining is halal-friendly. We are not a halal-certified restaurant, and we will never tell you otherwise, because the difference matters to the people who ask. Certification means an outside body has audited the supply chain, the kitchen and the handling. We have not been through that process. If certification is a requirement for you rather than a preference, you should know that before you make the drive.",
              "ja": "当店はハラールフレンドリーです。ハラール認証店ではありませんし、そう名乗ることもいたしません。この違いは、お尋ねになる方にとって重要だからです。認証とは、第三者機関が仕入れ、厨房、取り扱いを監査することを意味します。当店はその手続きを経ていません。認証が「希望」ではなく「必須条件」である場合は、お越しになる前にお知らせしておきたいことです。"
            },
            {
              "en": "What we can tell you is specific. A great many of our dishes are prepared without pork and without alcohol, our staff know what goes into every plate, and if you ask, you will get a straight answer rather than a reassuring one. Please mention your requirements when you order, not after the food arrives, so the kitchen can work with them from the start.",
              "ja": "お伝えできるのは具体的なことです。当店の多くの料理は豚肉・アルコールを使わずにご用意でき、スタッフは各料理の内容を把握しています。お尋ねいただければ、聞こえのよい答えではなく、正確な答えをお返しします。ご注文の際に（お料理が届いてからではなく）ご要望をお知らせください。厨房が最初から対応できます。"
            }
          ]
        },
        {
          "heading": {
            "en": "What You Can Order",
            "ja": "おすすめのメニュー"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "The chicken and mutton curries are where most Muslim guests start. Butter Chicken is the mild one and the safest choice for children. Chicken Tikka Masala is our best seller. Mutton Curry and Mutton Sag Curry are the ones our Nepalese regulars order, and Chicken Rara Curry is a Nepalese preparation you will not find in the chain curry houses. Tandoori Chicken and Chicken Tikka come off the tandoor rather than out of a pan, if you would rather have something drier.",
              "ja": "ムスリムのお客様の多くはチキンとマトンのカレーから始められます。バターチキンカレーはマイルドで、お子様にも安心です。チキンティッカマサラカレーは当店の一番人気。マトンカレーとマトンサグカレーはネパール出身の常連さんが選ぶ味で、チキンララカレーはチェーン店では出会えないネパールの調理法です。汁気の少ないものをお好みなら、タンドールで焼くタンドリーチキンやチキンティッカもございます。"
            },
            {
              "en": "For vegetables, Mix Vegetable Curry and Mix Vegetable Soup Curry are both entirely plant-based in their main ingredients, and momo can be ordered with a vegetable filling instead of chicken. Rice and freshly baked naan come alongside. Our standard naan dough contains dairy and egg, but the kitchen will prepare dishes without them on request — and the same goes for allergies and nut-free cooking. Ask when you order.",
              "ja": "野菜料理では、ミックス野菜カレーとミックス野菜スープカレーが主な材料をすべて植物性で構成しており、モモもチキンではなく野菜の餡でご注文いただけます。ライスや焼きたてのナンをお添えください。当店の通常のナン生地には乳製品と卵を使用していますが、ご要望に応じて使わずにお作りします。アレルギーやナッツ不使用のご要望も同様です。ご注文の際にお申し付けください。"
            }
          ]
        },
        {
          "heading": {
            "en": "Getting Here from Furano, Kamifurano and Biei",
            "ja": "富良野・上富良野・美瑛からのアクセス"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "From Furano town and from Furano Ski Resort it is about six kilometres, near enough fifteen minutes on a normal winter road. From Kamifurano it is a similar distance in the other direction. From Biei, the run down through the hills takes longer and is worth allowing around thirty minutes for in winter. There is free parking on site, which is a small thing until you are in ski boots with a car full of gear.",
              "ja": "富良野市街・富良野スキー場からは約6キロ、通常の冬道でおよそ15分です。上富良野からは反対方向に同程度の距離。美瑛からは丘を越えるため、冬季は30分ほどをみておくと安心です。敷地内に無料駐車場があり、スキーブーツのまま荷物を積んだ車で来られる方にはありがたいはずです。"
            },
            {
              "en": "If you are travelling by train, Nakafurano Station is about 1.4 kilometres away, which is a short taxi ride or a walk in better weather. In deep winter, with snow banked up along the pavements, most guests drive.",
              "ja": "電車でお越しの場合、中富良野駅から約1.4キロです。タクシーならすぐ、天気のよい季節なら徒歩圏内です。真冬は歩道に雪が積み上がるため、多くのお客様は車でお越しになります。"
            }
          ]
        },
        {
          "heading": {
            "en": "Hours, Booking and Practical Tips",
            "ja": "営業時間・ご予約・実用的なヒント"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We serve lunch from 11:00 to 15:00 and dinner from 17:00 to 21:00. We are closed on the second and fourth Wednesday of each month, and open on the first, third and fifth. In ski season the hour after the lifts close is our busiest of the day, so if you are a group of more than four, a phone call ahead on 0167-44-2444 will save you a wait in the cold.",
              "ja": "ランチは11:00〜15:00、ディナーは17:00〜21:00です。毎月第2・第4水曜は定休日、第1・第3・第5水曜は営業しています。スキーシーズンはリフト終了後の1時間が最も混み合いますので、5名以上のグループでお越しの場合は 0167-44-2444 まで事前にお電話いただくと、寒い中でお待たせせずにすみます。"
            },
            {
              "en": "Our staff speak English, and menus are available in more than one language. Tell us your requirements when you book and again when you order, and we will do the rest.",
              "ja": "スタッフは英語に対応しており、メニューも複数言語でご用意しています。ご予約時とご注文時にご要望をお伝えいただければ、あとはこちらでお引き受けします。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Is Nepal Dining halal certified?",
            "ja": "ネパールダイニングはハラール認証店ですか？"
          },
          "a": {
            "en": "No. We are halal-friendly, not halal-certified, and we want to be clear about that. We have not been through a certification audit. What we can do is prepare a great many dishes without pork or alcohol and tell you honestly what is in anything on the menu.",
            "ja": "いいえ。当店はハラールフレンドリーであり、ハラール認証店ではありません。この点は明確にお伝えしたいと思っています。認証審査は受けておりません。できるのは、多くの料理を豚肉・アルコールなしでご用意すること、そしてメニューの内容を正直にお伝えすることです。"
          }
        },
        {
          "q": {
            "en": "Where can I find halal-friendly food near Furano Ski Resort?",
            "ja": "富良野スキー場の近くでハラールフレンドリーな食事はどこで食べられますか？"
          },
          "a": {
            "en": "Nepal Dining is about six kilometres from the resort in Nakafurano, roughly fifteen minutes by car, with free parking. Halal-friendly options are on the menu every day of the week we are open.",
            "ja": "ネパールダイニングはスキー場から約6キロ、中富良野町にあり、車でおよそ15分、無料駐車場もございます。営業日はいつでもハラールフレンドリーなメニューをご用意しています。"
          }
        },
        {
          "q": {
            "en": "Do you use alcohol in your cooking?",
            "ja": "調理にアルコールを使いますか？"
          },
          "a": {
            "en": "Our curries are not cooked with sake or mirin the way much Japanese food is. If you need certainty about a specific dish, ask before you order and we will check it with the kitchen.",
            "ja": "当店のカレーは、多くの日本料理のように日本酒やみりんで調理することはありません。特定の料理について確認が必要な場合は、ご注文前にお尋ねください。厨房に確認いたします。"
          }
        },
        {
          "q": {
            "en": "Can you cook without pork?",
            "ja": "豚肉を使わない調理はできますか？"
          },
          "a": {
            "en": "Yes. Our menu is built around chicken, mutton, seafood, lentils and vegetables. Please tell us your requirements when you order so the kitchen knows from the start.",
            "ja": "はい。当店のメニューはチキン、マトン、シーフード、豆、野菜を中心に構成されています。ご注文の際にご要望をお知らせいただければ、厨房が最初から対応いたします。"
          }
        },
        {
          "q": {
            "en": "Do you have an English menu and English-speaking staff?",
            "ja": "英語のメニューや英語を話せるスタッフはいますか？"
          },
          "a": {
            "en": "Yes to both. Ask any question you like about ingredients; we would rather answer it than have you guess.",
            "ja": "どちらもございます。材料についてどんなことでもお尋ねください。ご不安なままお召し上がりいただくより、お答えするほうがずっとよいと考えています。"
          }
        }
      ]
    },
    {
      "slug": "nepalese-food-guide",
      "title": {
        "en": "Nepalese Food Explained: Momo, Curry and What to Order First",
        "ja": "ネパール料理入門：モモ、カレー、最初に頼むなら"
      },
      "description": {
        "en": "What Nepalese food actually is, how it differs from Indian cooking, and — if you have never eaten it before — what to order on your first visit.",
        "ja": "ネパール料理とはどんな料理か、インド料理とどう違うのか。そして初めて召し上がる方が最初に何を頼めばよいかをご案内します。"
      },
      "date": "2025-02-28",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Head Chef",
        "ja": "ヘッドシェフ"
      },
      "category": "food-culture",
      "tags": [
        "nepalese food",
        "dal bhat",
        "momos",
        "himalayan cuisine"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/momo.jpg",
      "featured": true,
      "popular": false,
      "readingTime": "5 min",
      "sections": [
        {
          "heading": {
            "en": "Where Nepalese Cooking Sits",
            "ja": "ネパール料理の位置づけ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Nepal sits between Tibet and northern India, and its food shows it. From the north come the steamed dumplings and the simpler, warming dishes; from the south the spice blends and the tandoor. The result is its own thing rather than a version of either.",
              "ja": "ネパールはチベットと北インドの間に位置しており、その食文化にもそれが表れています。北からは蒸し餃子や素朴で体の温まる料理が、南からはスパイスの調合とタンドールが伝わりました。その結果生まれたのは、どちらかの亜流ではない独自の料理です。"
            },
            {
              "en": "The usual difference people notice is restraint. Nepalese cooking generally leans less on cream and oil than the Indian restaurant food most visitors know, and more on letting the main ingredient taste of itself. That is a matter of tendency, not a rule — plenty of Nepalese dishes are rich.",
              "ja": "多くの方が最初に気づく違いは「控えめさ」です。ネパール料理は、一般的な海外のインド料理店の味に比べ、生クリームや油に頼ることが少なく、主となる食材そのものの味を活かす傾向があります。ただしこれは傾向であって規則ではありません。濃厚なネパール料理もたくさんあります。"
            }
          ]
        },
        {
          "heading": {
            "en": "Momo: Start Here",
            "ja": "モモ：まずはここから"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "If you have never eaten Nepalese food, order momo first. They are steamed dumplings, related to Tibetan momo and not far in spirit from gyoza, seasoned with ginger, garlic and spices rather than soy. They come six to a portion, and you can have them with a chicken or a vegetable filling.",
              "ja": "ネパール料理が初めての方は、まずモモをご注文ください。チベットのモモに連なる蒸し餃子で、餃子と発想は遠くありませんが、醤油ではなく生姜・にんにく・スパイスで味付けします。6個入りで、餡はチキンまたは野菜からお選びいただけます。"
            },
            {
              "en": "They are mild, they arrive before the curries, and they give a table something to share while the rest of the order is still cooking. We also serve them in a soup curry — the Momo and Vegetable Soup Curry is the dish people most often come back for.",
              "ja": "辛くなく、カレーより先にお出しできますので、残りのお料理ができあがるまでテーブルで取り分けていただけます。スープカレーに入れたメニューもございます。モモ野菜スープカレーは、リピーターの多い一品です。"
            }
          ]
        },
        {
          "heading": {
            "en": "Dal Bhat, and What We Actually Serve",
            "ja": "ダルバートについて、そして当店でお出ししているもの"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Dal bhat is the everyday meal of Nepal: rice with lentil soup, a vegetable curry and pickles, eaten twice a day by much of the country. It is the dish people mean when they talk about Nepalese home cooking, and it is worth knowing about.",
              "ja": "ダルバートはネパールの日常食です。ライスに、レンズ豆のスープ、野菜のカレー、漬物を添えたもので、国内の多くの人が一日二回これを食べます。ネパールの家庭料理といえばこの料理を指し、知っておく価値があります。"
            },
            {
              "en": "To be straight with you: dal bhat as a set is not on our menu. What we serve is a curry menu — around twenty curries, three soup curries, naan baked to order, rice, tandoori chicken, chicken tikka and momo. Our two dal dishes, Dal Mutton and Dal Chicken, are lentil curries cooked with meat, so they are not the vegetarian dal of a dal bhat plate. We would rather tell you that here than have you arrive expecting something else.",
              "ja": "正直にお伝えします。セットとしてのダルバートは当店のメニューにはございません。当店はカレーを中心としたメニューで、カレー約20種類、スープカレー3種類、その都度焼き上げるナン、ライス、タンドリーチキン、チキンティッカ、モモをご用意しています。ダルを使った料理はダルマトンカレーとダルチキンカレーの2品ですが、いずれも肉と一緒に煮込んだレンズ豆のカレーですので、ダルバートのベジタリアンのダルとは別のものです。お越しになってから違ったということのないよう、ここでお伝えしておきます。"
            }
          ]
        },
        {
          "heading": {
            "en": "Heat, and Asking for Changes",
            "ja": "辛さとご要望について"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "You choose the spice level yourself, so \"Nepalese food is spicy\" is not a reason to stay away. Ordered mild, butter chicken has no heat in it at all. Ordered at the top of the range, several curries will take the roof off. Tell us where on that scale you want to be.",
              "ja": "辛さはお客様ご自身でお選びいただけますので、「ネパール料理は辛い」というのは敬遠する理由にはなりません。マイルドでご注文いただければ、バターチキンに辛みはまったくありません。一番上の辛さでは、かなり刺激的なカレーもございます。どのあたりがお好みか、遠慮なくお申し付けください。"
            },
            {
              "en": "The same applies to what goes in. Vegetarian dishes are on the standard menu. Our standard naan dough contains dairy and egg and several curries are finished with cream or yoghurt, but the kitchen will prepare dishes without them on request — and the same for nut-free cooking and allergies. Ask when you order, not after.",
              "ja": "内容についても同様です。ベジタリアン料理は通常メニューにございます。当店の通常のナン生地には乳製品と卵を使用し、いくつかのカレーは生クリームやヨーグルトで仕上げていますが、ご要望に応じてそれらを使わずにお作りします。ナッツ不使用やアレルギー対応も同じです。お料理が届いてからではなく、ご注文の際にお申し付けください。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "What is dal bhat?",
            "ja": "ダルバートとは何ですか？"
          },
          "a": {
            "en": "The everyday meal of Nepal — rice with lentil soup, vegetable curry and pickles. It is not on our menu as a set; we serve a curry menu instead, and our two dal dishes are cooked with mutton or chicken.",
            "ja": "ネパールの日常食で、ライスにレンズ豆のスープ、野菜カレー、漬物を添えたものです。当店ではセットとしてのご用意はなく、カレー中心のメニューとなっております。当店のダル料理2品はマトンまたはチキンと一緒に調理しています。"
          }
        },
        {
          "q": {
            "en": "What should I order if I have never had Nepalese food?",
            "ja": "ネパール料理が初めてなら何を頼めばよいですか？"
          },
          "a": {
            "en": "Momo first — mild steamed dumplings, six to a portion, chicken or vegetable. Then butter chicken if you want something gentle, or a soup curry if you want the Hokkaido speciality.",
            "ja": "まずはモモです。辛くない蒸し餃子で6個入り、チキンまたは野菜からお選びいただけます。そのあとは、やさしい味がお好みならバターチキン、北海道名物を試すならスープカレーがおすすめです。"
          }
        },
        {
          "q": {
            "en": "Is Nepalese food spicy?",
            "ja": "ネパール料理は辛いですか？"
          },
          "a": {
            "en": "Only if you order it that way. You set the spice level, and mild really is mild.",
            "ja": "ご注文次第です。辛さはお選びいただけますし、マイルドは本当にマイルドです。"
          }
        },
        {
          "q": {
            "en": "Is momo vegetarian?",
            "ja": "モモはベジタリアンですか？"
          },
          "a": {
            "en": "It comes both ways. Ask for the vegetable filling when you order.",
            "ja": "チキンと野菜の2種類がございます。ご注文の際に「野菜」とお伝えください。"
          }
        }
      ]
    },
    {
      "slug": "hokkaido-food-guide",
      "title": {
        "en": "Soup Curry and Hokkaido Food: What to Eat in the Furano Area",
        "ja": "スープカレーと北海道の食：富良野エリアで何を食べるか"
      },
      "description": {
        "en": "Hokkaido food explained for visitors — what the island is known for, what soup curry actually is, and what you can eat in the Furano valley without a long drive.",
        "ja": "旅行者のための北海道グルメガイド。北海道の食の特徴、スープカレーとは何か、そして遠出をせずに富良野エリアで食べられるものをご紹介します。"
      },
      "date": "2025-01-05",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Food & Travel",
        "ja": "グルメ＆旅行"
      },
      "category": "hokkaido-travel-tips",
      "tags": [
        "hokkaido food",
        "hokkaido cuisine",
        "japan food guide"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg",
      "featured": false,
      "popular": true,
      "readingTime": "5 min",
      "sections": [
        {
          "heading": {
            "en": "What Hokkaido Is Known For",
            "ja": "北海道の食の特徴"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Hokkaido has a reputation in Japan for its ingredients rather than for any one dish. Dairy, potatoes, corn, onions and melons come off the land; crab, scallops, sea urchin and salmon come out of the cold water around it. Much of what you eat here is good because of what went into it, not because of what was done to it.",
              "ja": "北海道は日本国内で、特定の料理というより「食材」で知られています。陸からは乳製品、じゃがいも、とうもろこし、玉ねぎ、メロン。周囲の冷たい海からは、かに、ほたて、うに、鮭。この土地の食事の多くは、凝った調理よりも素材の良さでおいしいのです。"
            },
            {
              "en": "The seafood is mostly a coastal experience, and Furano is inland — a couple of hours from either coast. Plan a market visit around a trip to Sapporo or Hakodate rather than expecting it on your doorstep here.",
              "ja": "海産物は基本的に沿岸で楽しむものです。富良野は内陸にあり、どちらの海岸からも車で2時間ほどかかります。市場めぐりは札幌や函館への移動に合わせて計画されるとよいでしょう。"
            }
          ]
        },
        {
          "heading": {
            "en": "Soup Curry: The One to Try",
            "ja": "スープカレー：試すならこれ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Soup curry is Hokkaido's own contribution to Japanese food. It began in Sapporo and it is exactly what the name says — not a thick curry sauce but a thin, aromatic spiced broth, served with vegetables and a protein, and eaten with rice on the side.",
              "ja": "スープカレーは、北海道が日本の食に加えた独自の一品です。札幌で生まれ、その名のとおり、とろみのあるカレーソースではなく、さらりとした香り高いスパイススープに、野菜とメインの具材を合わせ、ライスを添えていただきます。"
            },
            {
              "en": "It suits this climate. In winter it is the most warming thing on any menu, and because you choose the heat level, it works for people who do not normally eat spicy food. We serve three: Mix Vegetable, Chicken and Vegetable, and Momo and Vegetable — the last is the one people come back for.",
              "ja": "この気候によく合います。冬にはどのメニューよりも体を温めてくれますし、辛さを選べるため、普段辛いものを召し上がらない方にも向いています。当店では3種類ご用意しています。ミックス野菜、チキン＆野菜、そしてモモ＆野菜です。最後のものはリピーターの多い一品です。"
            }
          ]
        },
        {
          "heading": {
            "en": "Eating in the Furano Valley",
            "ja": "富良野エリアでの食事"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "The valley is farming country, so what it does well is what it grows — corn, dairy, melons in season. Restaurants are spread out and many close between lunch and dinner, so distances and opening hours matter more here than in a city.",
              "ja": "この谷は農業地帯ですので、得意なのは育てているものです。とうもろこし、乳製品、そして旬のメロン。飲食店は点在しており、ランチとディナーの間に閉まる店も多いため、都市部よりも距離と営業時間が重要になります。"
            },
            {
              "en": "We are a Nepalese and Indian restaurant based in Nakafurano, the town in the middle of the valley — about fifteen minutes by car from Furano Ski Resort and from Kamifurano, around thirty from Biei. Free parking, sixty seats, and English-speaking staff.",
              "ja": "当店は谷の中ほどの町、中富良野にあるネパール・インド料理店です。富良野スキー場および上富良野から車でおよそ15分、美瑛からは30分ほどです。無料駐車場、60席、英語対応のスタッフがおります。"
            }
          ]
        },
        {
          "heading": {
            "en": "If You Have Dietary Requirements",
            "ja": "食事制限のある方へ"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Vegetarian dishes are on our standard menu: Mix Vegetable Curry, Mix Vegetable Soup Curry, and momo with a vegetable filling. Please note that our two dal dishes are cooked with mutton or chicken, so they are not vegetarian despite the name.",
              "ja": "ベジタリアン料理は通常メニューにございます。ミックス野菜カレー、ミックス野菜スープカレー、そして野菜餡のモモです。なお、当店のダル料理2品はマトンまたはチキンと一緒に調理しておりますので、名前に反してベジタリアンではございません。"
            },
            {
              "en": "We are halal-friendly — not halal-certified, and we say so plainly. Vegan, nut-free and allergy requests are possible on request: our standard naan contains dairy and egg, but the kitchen will work around it if you tell us when you order.",
              "ja": "当店はハラールフレンドリーです。ハラール認証店ではありませんので、その点ははっきりとお伝えしています。ヴィーガン、ナッツ不使用、アレルギー対応もご相談いただけます。当店の通常のナンには乳製品と卵が入っていますが、ご注文時にお申し付けいただければ対応いたします。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "What is soup curry?",
            "ja": "スープカレーとは何ですか？"
          },
          "a": {
            "en": "A Hokkaido dish that began in Sapporo: a thin, aromatic spiced broth with vegetables and a protein, eaten with rice on the side rather than poured over it. You choose the heat level.",
            "ja": "札幌で生まれた北海道の料理です。さらりとした香り高いスパイススープに野菜とメインの具材を合わせ、ライスはかけずに添えていただきます。辛さはお選びいただけます。"
          }
        },
        {
          "q": {
            "en": "Can I eat good seafood in Furano?",
            "ja": "富良野で海鮮は食べられますか？"
          },
          "a": {
            "en": "Furano is inland, a couple of hours from either coast, so the seafood markets are better combined with a trip to Sapporo or Hakodate.",
            "ja": "富良野は内陸にあり、どちらの海岸からも2時間ほどかかります。海鮮市場は札幌や函館への旅程に組み込まれるのがおすすめです。"
          }
        },
        {
          "q": {
            "en": "Is there vegetarian food in the Furano area?",
            "ja": "富良野エリアにベジタリアン料理はありますか？"
          },
          "a": {
            "en": "On our menu: Mix Vegetable Curry, Mix Vegetable Soup Curry and vegetable momo. Our dal dishes are cooked with meat, so they are not an option.",
            "ja": "当店では、ミックス野菜カレー、ミックス野菜スープカレー、野菜餡のモモがございます。ダル料理は肉と一緒に調理しているため、対象外となります。"
          }
        },
        {
          "q": {
            "en": "Where exactly are you?",
            "ja": "場所はどこですか？"
          },
          "a": {
            "en": "Nakafurano, in the middle of the Furano valley. About fifteen minutes by car from Furano Ski Resort and from Kamifurano, around thirty from Biei. Free parking.",
            "ja": "富良野エリアの中ほど、中富良野です。富良野スキー場および上富良野から車でおよそ15分、美瑛からは30分ほどです。無料駐車場がございます。"
          }
        }
      ]
    },
    {
      "slug": "biei-blue-pond-guide",
      "title": {
        "en": "Biei Blue Pond: Complete Visitor's Guide from Furano",
        "ja": "美瑛青い池：富良野からの完全ガイド"
      },
      "description": {
        "en": "Visiting the Biei Blue Pond from the Furano valley: why it is that colour, when to go, what winter changes, and where to eat on the way back.",
        "ja": "富良野エリアから美瑛の青い池へ。なぜあの色なのか、いつ行くとよいか、冬はどう変わるか、そして帰り道の食事どころをご案内します。"
      },
      "date": "2025-01-20",
      "author": "Yuki Tanaka",
      "authorRole": {
        "en": "Travel Writer",
        "ja": "旅行ライター"
      },
      "category": "hokkaido-travel-tips",
      "tags": [
        "biei blue pond",
        "biei hokkaido",
        "hokkaido travel"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/momo-veg-soup-curry.jpg",
      "featured": false,
      "popular": false,
      "readingTime": "5 min",
      "sections": [
        {
          "heading": {
            "en": "Why It Is That Colour",
            "ja": "なぜあの色なのか"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "The Blue Pond was not built to be looked at. It formed behind erosion-control dams put in to protect Biei from volcanic mudflows, and the flooded trees still standing in it are the ones that were there before the water arrived.",
              "ja": "青い池は、見せるためにつくられたものではありません。美瑛を火山泥流から守るための治山ダムによって水が溜まり、できあがった池です。水中に立ち枯れた木々は、水が来る前からそこにあったものです。"
            },
            {
              "en": "The colour comes from mineral particles suspended in the water — aluminium compounds carried in from upstream — which scatter light towards the blue end. It is genuinely that colour rather than a trick of photography, though it does shift with the light and the weather, and a flat grey day will not look like the postcards.",
              "ja": "あの色は、水中に漂う鉱物の微粒子によるものです。上流から流れ込むアルミニウムの化合物が光を散乱させ、青系の色に見せています。写真の加工ではなく実際にあの色ですが、光や天候によって変化しますので、曇り空の日には絵葉書のようには見えません。"
            }
          ]
        },
        {
          "heading": {
            "en": "When to Go",
            "ja": "訪れる時期"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Summer gives the strongest contrast, with the turquoise set against green. Autumn is quieter. In winter the pond is lit in the evenings — the illumination is run by the town and the dates move from year to year, so check locally before making a special trip for it.",
              "ja": "夏は緑とのコントラストが最も強く出ます。秋は静かです。冬は夕方にライトアップが行われますが、これは町が主催しており日程は年によって変わりますので、これを目当てに行かれる場合は現地の情報をご確認ください。"
            },
            {
              "en": "Early morning is the calmest water and the best reflections, at any time of year. Later in the day the surface picks up wind and the mirror effect goes.",
              "ja": "一年を通して、水面が最も静かで反射が美しいのは早朝です。日が高くなると風で水面が波立ち、鏡のような映り込みは失われます。"
            }
          ]
        },
        {
          "heading": {
            "en": "Getting There, and Getting Back",
            "ja": "行き方と帰り道"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "The pond is north of the Furano valley, past Biei. Public transport is limited and seasonal, so most visitors drive. We would rather not quote you a journey time we have not driven ourselves — check it on the day, and in winter allow noticeably longer than the map says, because the roads are snow-covered for months.",
              "ja": "青い池は富良野エリアの北、美瑛のさらに先にあります。公共交通は本数が限られ季節によっても変わるため、多くの方は車で向かわれます。当店が実際に走っていない区間の所要時間を申し上げるのは控えます。当日ご確認ください。冬は道路が何ヶ月も雪に覆われますので、地図の表示よりかなり余裕をみてください。"
            },
            {
              "en": "What we can tell you is our own end of it: from Biei down to us in Nakafurano is around thirty minutes by car in winter conditions. If you are heading back south towards Furano after the pond, we are roughly on the way, with free parking.",
              "ja": "お伝えできるのは当店側の距離です。美瑛から中富良野の当店までは、冬の路面状況で車でおよそ30分です。青い池のあと富良野方面へ南下される場合、当店はおおむね通り道にあたります。無料駐車場もございます。"
            }
          ]
        },
        {
          "heading": {
            "en": "Eating on the Way",
            "ja": "道中の食事"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "A day trip north tends to end cold and late, which is the point at which soup curry earns its reputation. We open 11:00 to 15:00 and 17:00 to 21:00, Tuesday to Sunday, and close on the second and fourth Wednesday of each month. The number is 0167-44-2444.",
              "ja": "北への日帰り旅行は、体が冷えて遅くなりがちです。そんなときこそスープカレーの出番です。当店の営業は火曜日から日曜日、11:00〜15:00と17:00〜21:00。毎月第2・第4水曜日は定休日です。お電話は0167-44-2444です。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Why is the Biei Blue Pond blue?",
            "ja": "なぜ美瑛の青い池は青いのですか？"
          },
          "a": {
            "en": "Mineral particles suspended in the water scatter light towards the blue. It really is that colour, though it changes with light and weather.",
            "ja": "水中に漂う鉱物の微粒子が光を散乱させ、青く見せています。実際にあの色ですが、光と天候によって変化します。"
          }
        },
        {
          "q": {
            "en": "Is the Blue Pond worth visiting in winter?",
            "ja": "冬に青い池へ行く価値はありますか？"
          },
          "a": {
            "en": "It is lit in the evenings in winter, but the illumination is run by the town and the dates change each year — check locally before planning a trip around it.",
            "ja": "冬は夕方にライトアップされますが、町の主催で日程が毎年変わります。これを目的に計画される場合は現地の情報をご確認ください。"
          }
        },
        {
          "q": {
            "en": "How far is the Blue Pond from Furano?",
            "ja": "富良野から青い池までどのくらいですか？"
          },
          "a": {
            "en": "It is north of Biei, and we would rather not quote a drive time we have not measured. From Biei down to us in Nakafurano is about thirty minutes in winter.",
            "ja": "美瑛の北にあります。当店が実測していない区間の所要時間は申し上げません。美瑛から中富良野の当店までは、冬でおよそ30分です。"
          }
        },
        {
          "q": {
            "en": "Do I need a car?",
            "ja": "車は必要ですか？"
          },
          "a": {
            "en": "Realistically yes. Public transport to the pond is limited and seasonal.",
            "ja": "実質的には必要です。青い池への公共交通は本数が限られ、季節によっても変わります。"
          }
        }
      ]
    },
    {
      "slug": "furano-winter-travel-guide",
      "title": {
        "en": "Furano Winter Travel Guide: Skiing, Snow & Hot Curries",
        "ja": "富良野冬の旅行ガイド：スキー、雪、ホットカレー"
      },
      "description": {
        "en": "Planning a winter trip to the Furano area of Hokkaido: when the ski season runs, how to get around once the snow arrives, and where to eat a hot meal at the end of the day.",
        "ja": "北海道・富良野エリアへの冬の旅行ガイド。スキーシーズンの時期、雪が積もってからの移動手段、そして一日の終わりに温かい食事をとれる場所をご案内します。"
      },
      "date": "2024-12-01",
      "author": "Nepal Dining Team",
      "authorRole": {
        "en": "Winter Sports Writer",
        "ja": "ウィンタースポーツライター"
      },
      "category": "seasonal-events",
      "tags": [
        "furano winter",
        "furano ski resort",
        "hokkaido skiing"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg",
      "featured": false,
      "popular": true,
      "readingTime": "6 min",
      "sections": [
        {
          "heading": {
            "en": "When the Winter Season Runs",
            "ja": "冬のシーズンはいつからいつまで"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Furano Ski Resort usually opens in late November and stays open into early May, though the exact dates move each year with the snowfall — check the resort's own calendar before booking flights around a specific week. January and February are the heart of the season, when the snow is coldest and driest.",
              "ja": "富良野スキー場は例年11月下旬にオープンし、5月初旬まで営業しています。ただし正確な日程はその年の降雪状況によって前後しますので、特定の週に合わせて航空券を取る場合はスキー場の公式カレンダーをご確認ください。シーズンの中心は1月と2月で、雪が最も冷たく乾いた状態になります。"
            },
            {
              "en": "December and March are worth considering if you would rather not travel at peak time. The snow is still good, the slopes are quieter, and rooms in the valley are easier to find. From April the days warm noticeably and the snow turns heavier as the afternoon goes on.",
              "ja": "混雑期を避けたい方には12月と3月もおすすめです。雪質は十分によく、ゲレンデは空いていて、谷あいの宿も見つけやすくなります。4月に入ると日中の気温が上がり、午後にかけて雪が重くなってきます。"
            }
          ]
        },
        {
          "heading": {
            "en": "Getting Around Once the Snow Arrives",
            "ja": "雪が積もってからの移動"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Winter changes how you move around this valley. The roads are cleared regularly and are generally fine to drive, but they stay snow-covered for months, so a rental car needs winter tyres and every journey takes longer than the map suggests. Leave more time than you think you need, particularly after dark.",
              "ja": "冬はこの谷での移動の仕方が変わります。道路は定期的に除雪されており走行に問題はありませんが、何ヶ月も雪に覆われた状態が続くため、レンタカーには冬用タイヤが必要で、移動時間は地図の表示より長くかかります。特に日没後は、思っているより余裕をもって出発してください。"
            },
            {
              "en": "For distances: we are based in Nakafurano, in the middle of the valley. From Furano Ski Resort it is about fifteen minutes by car, and about the same from Kamifurano. From Biei, further north, allow around thirty minutes in winter conditions. There is free parking at the restaurant, which matters more than it sounds when the back of the car is full of ski gear.",
              "ja": "距離の目安です。当店は谷の中ほど、中富良野にございます。富良野スキー場から車でおよそ15分、上富良野からもほぼ同じくらいです。さらに北の美瑛からは、冬の路面状況で30分ほどをみておいてください。当店には無料駐車場がございます。車にスキー道具を積んだままの方には、これが意外と大きな違いになります。"
            }
          ]
        },
        {
          "heading": {
            "en": "Eating at the End of a Cold Day",
            "ja": "寒い一日の終わりの食事"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "A full day outside in this climate burns a great deal of energy, and the cold takes as much out of you as the skiing does. What most people want afterwards is something hot, substantial and quick to arrive. Soup curry answers that about as well as anything — a thin, spiced broth with the heat level set to your own taste, and a Hokkaido speciality for good reason.",
              "ja": "この気候の中で一日を外で過ごすと、かなりの体力を消耗します。滑ること以上に、寒さそのものが体力を奪います。そのあとに多くの方が求めるのは、熱くて、しっかりしていて、早く出てくる食事です。スープカレーはまさにそれに応えます。辛さをお好みで選べるスパイスの効いたスープで、北海道の名物になっているのには理由があります。"
            },
            {
              "en": "Butter chicken is the other dish skiers order most — rich, mild and warming, and it suits a table sharing several things at once. Naan comes fresh from the tandoor, and momo, the Nepalese steamed dumpling, makes a good starter while the curries are still cooking. Portions are sized for people who have been outdoors all day.",
              "ja": "スキーヤーの方に多いもう一つの注文がバターチキンです。濃厚でマイルド、体が温まり、数品を取り分けるテーブルにもよく合います。ナンはタンドールで焼きたてをお出しし、ネパールの蒸し餃子モモは、カレーができあがるまでの前菜にぴったりです。一日中外で過ごした方に合わせた量でご用意しています。"
            }
          ]
        },
        {
          "heading": {
            "en": "Before You Come: Hours, Booking and Dietary Needs",
            "ja": "お越しになる前に：営業時間・ご予約・食事制限"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We open Tuesday to Sunday, 11:00 to 15:00 and again from 17:00 to 21:00, and we close on the second and fourth Wednesday of each month. In ski season the evening sitting fills up, so if you are a group of more than four, or arriving straight off the mountain at a busy hour, please call ahead on 0167-44-2444. Otherwise walk-ins are welcome — we seat sixty.",
              "ja": "営業は火曜日から日曜日、11:00〜15:00および17:00〜21:00です。毎月第2・第4水曜日は定休日となります。スキーシーズンの夜は席が埋まりやすいため、5名以上のグループの方、または混雑する時間帯にゲレンデから直接お越しになる場合は、0167-44-2444までお電話ください。それ以外はご予約なしでも歓迎しております。席数は60席です。"
            },
            {
              "en": "Our staff speak English and the menu is available in more than one language, which is worth knowing if you are travelling without Japanese. On the food side we are halal-friendly — not halal-certified, and we say so plainly, because the difference matters to the people who ask. Vegetarian dishes are on the standard menu, and vegan, nut-free and allergy requests are all possible: tell us when you order, before the kitchen starts, rather than after the food arrives.",
              "ja": "スタッフは英語に対応しており、メニューも複数言語でご用意しています。日本語に不安のある方もご安心ください。食事内容については、当店はハラールフレンドリーです。ハラール認証店ではありませんので、その点ははっきりとお伝えしています。この違いは、お尋ねになる方にとって重要だからです。ベジタリアン料理は通常メニューにございます。ヴィーガン、ナッツ不使用、アレルギー対応もご相談いただけます。お料理が届いてからではなく、調理を始める前、ご注文の際にお申し付けください。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "When does Furano Ski Resort open and close?",
            "ja": "富良野スキー場の営業期間は？"
          },
          "a": {
            "en": "Usually late November to early May, but the dates shift each year with the snowfall. Check the resort's own calendar before booking around a specific week.",
            "ja": "例年11月下旬から5月初旬までですが、日程はその年の降雪によって前後します。特定の週に合わせてご予約される場合は、スキー場の公式カレンダーをご確認ください。"
          }
        },
        {
          "q": {
            "en": "Which month has the best snow?",
            "ja": "雪質が一番良いのは何月ですか？"
          },
          "a": {
            "en": "January and February are the coldest and driest. December and March are quieter on the slopes with snow that is still good, which is worth considering if you would rather avoid the peak.",
            "ja": "1月と2月が最も寒く乾燥しています。12月と3月はゲレンデが空いていながら雪質も十分によいため、混雑期を避けたい方にはおすすめです。"
          }
        },
        {
          "q": {
            "en": "How far is Nepal Dining from Furano Ski Resort?",
            "ja": "富良野スキー場からネパールダイニングまでどのくらいですか？"
          },
          "a": {
            "en": "About fifteen minutes by car. We are in Nakafurano, in the middle of the valley, and there is free parking.",
            "ja": "車でおよそ15分です。当店は谷の中ほどの中富良野にあり、無料駐車場がございます。"
          }
        },
        {
          "q": {
            "en": "Do I need a car to get around Furano in winter?",
            "ja": "冬の富良野では車が必要ですか？"
          },
          "a": {
            "en": "It makes things much easier. The valley is spread out and the roads stay snow-covered for months, so plan on winter tyres and more travel time than the map suggests.",
            "ja": "あったほうがかなり楽です。この谷は広く、道路は何ヶ月も雪に覆われます。冬用タイヤをご用意のうえ、地図の表示より余裕をもった移動時間をみておいてください。"
          }
        },
        {
          "q": {
            "en": "Can we eat vegetarian or halal-friendly after skiing?",
            "ja": "スキーの後にベジタリアンやハラールフレンドリーの食事はできますか？"
          },
          "a": {
            "en": "Yes. Vegetarian dishes are on the standard menu, and we are halal-friendly — not halal-certified, and we are clear about that. Vegan, nut-free and allergy requests are possible if you tell us when you order.",
            "ja": "はい。ベジタリアン料理は通常メニューにございます。当店はハラールフレンドリーです（ハラール認証店ではありません）。ヴィーガン、ナッツ不使用、アレルギー対応も、ご注文の際にお申し付けいただければ対応いたします。"
          }
        }
      ]
    },
    {
      "slug": "furano-family-travel-guide",
      "title": {
        "en": "Furano with Kids: The Complete Family Travel Guide",
        "ja": "子連れ富良野：家族旅行完全ガイド"
      },
      "description": {
        "en": "Eating out in the Furano area with children: how the ordering works, which dishes tend to suit younger eaters, and the practical details — parking, timing and how to handle allergies.",
        "ja": "富良野エリアで子ども連れの外食ガイド。注文の仕組み、小さなお子様に向きやすい料理、そして駐車場・時間帯・アレルギー対応といった実用的な情報をご案内します。"
      },
      "date": "2024-11-15",
      "author": "Yuki Tanaka",
      "authorRole": {
        "en": "Family Travel Writer",
        "ja": "ファミリー旅行ライター"
      },
      "category": "furano-travel-guide",
      "tags": [
        "furano family travel",
        "furano kids",
        "hokkaido family trip"
      ],
      "image": "https://www.nepaldining.online/wp-content/uploads/2026/06/chicken-veg-soup-curry.jpg",
      "featured": false,
      "popular": false,
      "readingTime": "5 min",
      "sections": [
        {
          "heading": {
            "en": "Eating Out in the Valley with Children",
            "ja": "子ども連れでの谷での外食"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Two things make family meals easier here than the map suggests, and one makes them harder. Easier: distances between places are short by car, and restaurants outside the town centre are rarely crowded at lunchtime. Harder: many kitchens close between lunch and dinner, so a hungry child at four in the afternoon can be a problem. Plan around the gap.",
              "ja": "この地域で家族の食事が地図の印象より楽になる理由が二つ、逆に難しくなる理由が一つあります。楽な点は、車での移動距離が短いことと、街の中心部から離れたお店は昼どきでも混み合うことが少ないことです。難しい点は、多くの店がランチとディナーの間に閉まることです。午後4時にお子様がお腹を空かせると困ることになります。この時間帯を見越して計画されるとよいでしょう。"
            }
          ]
        },
        {
          "heading": {
            "en": "How Ordering Works Here",
            "ja": "当店でのご注文の仕組み"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "The part that matters most for families is that you set the spice level yourself on the curries. Ordered mild, butter chicken is a sweet, creamy tomato curry with no heat in it at all, which is usually the safest place to start with a child who has not eaten this food before.",
              "ja": "ご家族にとって最も重要なのは、カレーの辛さをお客様ご自身でお選びいただける点です。マイルドでご注文いただくと、バターチキンは辛みのまったくない、甘くクリーミーなトマトのカレーになります。この料理が初めてのお子様には、まずここから始めていただくのが安心です。"
            },
            {
              "en": "Plain naan and rice both come as separate items, so a child who would rather just eat bread can do exactly that while the adults share curries. Momo, the steamed dumplings, are mild and come six to a portion with a chicken or a vegetable filling — they tend to go down well and they arrive before the curries do.",
              "ja": "プレーンナンとライスはそれぞれ単品でご注文いただけますので、パンだけ食べたいというお子様にはそのようにしていただけます。大人の方はカレーを取り分けてお楽しみください。蒸し餃子のモモは辛くなく、6個入りでチキンまたは野菜の餡からお選びいただけます。お子様に好まれることが多く、カレーより先にお出しできます。"
            }
          ]
        },
        {
          "heading": {
            "en": "Allergies and What Is in the Food",
            "ja": "アレルギーと料理の内容について"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "Please tell us when you order rather than after the food arrives — once a curry is made, it is made. Our standard naan dough contains dairy and egg, and several curries are finished with cream or yoghurt, so those are not dairy-free by default. The kitchen will prepare dishes without dairy or egg on request, and the same goes for nut-free cooking.",
              "ja": "お料理が届いてからではなく、ご注文の際にお申し付けください。カレーは一度作ってしまうと変更ができません。当店の通常のナン生地には乳製品と卵を使用しており、いくつかのカレーは仕上げに生クリームやヨーグルトを使います。そのため、これらは初期状態では乳製品不使用ではありません。ご要望をいただければ、乳製品・卵を使わずにお作りします。ナッツ不使用のご対応も同様です。"
            },
            {
              "en": "If you are unsure about a specific dish, ask and we will tell you what is actually in it rather than guessing on your behalf. That is a better conversation to have at the start of a meal than at the end of one.",
              "ja": "特定の料理についてご不安がある場合は、お尋ねください。推測でお答えするのではなく、実際に何が入っているかをお伝えします。この確認は、食事の終わりではなく最初にしていただくほうが確実です。"
            }
          ]
        },
        {
          "heading": {
            "en": "Practical Details",
            "ja": "実用情報"
          },
          "level": 2,
          "paragraphs": [
            {
              "en": "We are in Nakafurano, about fifteen minutes by car from Furano Ski Resort and from Kamifurano, and around thirty from Biei. There is free parking, which is worth knowing when you are unloading children and gear. We seat sixty, so there is usually room, though the evening sitting fills up in lavender and ski season.",
              "ja": "当店は中富良野にあり、富良野スキー場および上富良野から車でおよそ15分、美瑛からは30分ほどです。無料駐車場がございますので、お子様や荷物を降ろす際にも安心です。席数は60席ですので通常は余裕がありますが、ラベンダーシーズンとスキーシーズンの夜は埋まりやすくなります。"
            },
            {
              "en": "Opening hours are Tuesday to Sunday, 11:00 to 15:00 and 17:00 to 21:00, closed on the second and fourth Wednesday of each month. Lunch is the quieter service and the easier one with small children. The number is 0167-44-2444.",
              "ja": "営業時間は火曜日から日曜日、11:00〜15:00および17:00〜21:00です。毎月第2・第4水曜日は定休日です。ランチのほうが空いており、小さなお子様連れには過ごしやすい時間帯です。お電話は0167-44-2444です。"
            }
          ]
        }
      ],
      "faq": [
        {
          "q": {
            "en": "Can you make the curry not spicy for a child?",
            "ja": "子ども向けに辛くないカレーにできますか？"
          },
          "a": {
            "en": "Yes. You choose the spice level, and ordered mild the butter chicken has no heat in it at all — it is a sweet, creamy tomato curry.",
            "ja": "はい。辛さはお選びいただけます。マイルドでご注文いただければ、バターチキンは辛みのまったくない、甘くクリーミーなトマトのカレーになります。"
          }
        },
        {
          "q": {
            "en": "What if my child will not eat curry?",
            "ja": "子どもがカレーを食べない場合は？"
          },
          "a": {
            "en": "Plain naan and rice are both available on their own, and momo — mild steamed dumplings, six to a portion, chicken or vegetable — usually work well and arrive before the curries.",
            "ja": "プレーンナンとライスはそれぞれ単品でご注文いただけます。モモ（辛くない蒸し餃子、6個入り、チキンまたは野菜）もお子様に好まれることが多く、カレーより先にお出しできます。"
          }
        },
        {
          "q": {
            "en": "Can you cook around a dairy, egg or nut allergy?",
            "ja": "乳製品・卵・ナッツのアレルギーに対応できますか？"
          },
          "a": {
            "en": "Yes, on request. Tell us when you order, before the kitchen starts. Our standard naan contains dairy and egg and some curries are finished with cream, so please say so rather than assuming.",
            "ja": "はい、ご要望に応じて対応いたします。調理を始める前、ご注文の際にお申し付けください。当店の通常のナンには乳製品と卵が入っており、一部のカレーは生クリームで仕上げていますので、お手数ですがお申し出ください。"
          }
        },
        {
          "q": {
            "en": "Is lunch or dinner easier with young children?",
            "ja": "小さな子ども連れにはランチとディナーどちらがよいですか？"
          },
          "a": {
            "en": "Lunch. It is the quieter service, and in lavender and ski season the evening sitting fills up.",
            "ja": "ランチです。より空いており、ラベンダーシーズンやスキーシーズンは夜の席が埋まりやすくなります。"
          }
        }
      ]
    }
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
