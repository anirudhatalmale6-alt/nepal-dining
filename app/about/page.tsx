'use client';
import Link from 'next/link';
import { useLang } from '../lib/LanguageContext';
import { altFromImageUrl } from '../lib/imageAlt';
import ReservationForm from '../components/ReservationForm';
import { useTeam } from '../lib/teamData';

export default function AboutPage() {
  const { t, lang } = useLang();

  // Live list from /team-data/team.json (admin/team.php). See app/lib/teamData.ts.
  const teamMembers = useTeam();

  const timeline = [
    {
      year: '2020',
      event: lang === 'ja'
        ? 'ネパールダイニングが中富良野にオープンし、地域のお客様や富良野を訪れる旅行者に本格的なネパール・インド料理をお届けし始めました。COVID-19の困難な時期に、現オーナーが2020年6月から事業を支え、地域の知識と観光産業への理解を活かしてレストランの安定運営に貢献しました。'
        : 'Nepal Dining opened its doors in Nakafurano, bringing authentic Nepalese and Indian cuisine to the local community and visitors exploring the Furano region. At the same time, the current owner began working closely with the business during the challenging COVID-19 period in June 2020. By actively supporting daily operations, sharing knowledge about the local community and tourism industry, and contributing ideas for business growth, the owner played an important role in helping the restaurant navigate difficult circumstances.',
    },
    {
      year: '2021',
      event: lang === 'ja'
        ? 'COVID-19の中、地元のお客様の継続的なご支援に感謝しています。皆様の励ましと信頼が、ネパールダイニングを中富良野と富良野のコミュニティで知られるレストランへと導きました。'
        : 'During the COVID-19 pandemic, we were grateful for the continued support of local residents. Their encouragement and trust helped Nepal Dining become known throughout the Nakafurano and Furano communities.',
    },
    {
      year: '2022',
      event: lang === 'ja'
        ? '地元のお客様が友人や家族に体験を共有してくださるにつれ、ネパールダイニングの認知度は着実に向上しました。皆様のご支援が、本格的な料理と温かいおもてなしの評判を確立する上で重要な役割を果たしました。'
        : 'As local customers continued to share their experiences with friends and family, awareness of Nepal Dining steadily grew. Their support played an important role in establishing our reputation for authentic food and warm hospitality.',
    },
    {
      year: '2023',
      event: lang === 'ja'
        ? 'パンデミック後、国内外からの旅行者がネパールダイニングを訪れるようになりました。地元のお客様の変わらぬご支援とともに、より多くのお客様をお迎えし、富良野エリアでの存在感を強めました。'
        : 'As travel gradually resumed after the pandemic, more domestic and international visitors began discovering Nepal Dining. Together with the continued support of our local customers, we welcomed a growing number of guests and strengthened our presence in the Furano area.',
    },
    {
      year: '2024',
      event: lang === 'ja'
        ? '地元の皆様と観光客からのご支援を受け、ネパールダイニングは拡大を続けました。メニューの充実、サービスの改善、そして本格的な味わい、質の高い食材、卓越したおもてなしへのさらなるコミットメントを強化しました。'
        : 'With growing support from both local residents and tourists, Nepal Dining continued to expand. We enhanced our menu, improved our services, and further strengthened our commitment to authentic flavors, quality ingredients, and exceptional hospitality.',
    },
    {
      year: '2025',
      event: lang === 'ja'
        ? '増え続けるお客様により良いサービスを提供するため、中富良野のより広く快適な場所に移転しました。新しいスペースにより、より多くのご家族、グループ、旅行者をお迎えし、さらに充実したお食事体験を提供できるようになりました。'
        : 'To better serve our growing number of guests, we relocated to a larger and more comfortable location in Nakafurano. The new space allowed us to welcome more families, groups, and travelers while providing an even better dining experience.',
    },
    {
      year: '2026',
      event: lang === 'ja'
        ? '現在、ネパールダイニングは日本国内外のお客様にお食事を提供しています。本格的なネパール・インドの味わいと富良野・北海道の最高の食材を組み合わせ、品質、おもてなし、忘れられないお食事体験へのコミットメントを続けています。'
        : 'Today, Nepal Dining proudly serves guests from Japan and around the world. By combining authentic Nepalese and Indian flavors with the finest ingredients from Furano and Hokkaido, we continue our commitment to quality, hospitality, and unforgettable dining experiences.',
    },
  ];

  const sections = {
    welcome: {
      title: lang === 'ja' ? '私たちについて' : 'About Us',
      text: lang === 'ja'
        ? 'ネパールダイニングへようこそ。ネパールとインドの豊かな味わいが、富良野・北海道の自然美と出会う場所です。中富良野の中心に位置する当レストランは、伝統的なヒマラヤ料理と温かいネパールのおもてなしに触発された、本格的なお食事体験を提供しています。地元の皆様や世界中からの旅行者に、心に残るひとときをお届けすることが私たちの目標です。'
        : 'Welcome to Nepal Dining, where the rich flavors of Nepal and India meet the natural beauty of Furano, Hokkaido. Located in the heart of Nakafurano, our restaurant offers an authentic dining experience inspired by traditional Himalayan recipes and warm Nepalese hospitality. We are proud to serve a diverse menu featuring classic Nepalese and Indian dishes, carefully prepared to satisfy both local residents and international visitors. Whether you are joining us for a family meal, a casual lunch, or a special gathering, our goal is to make every visit memorable.',
    },
    philosophy: {
      title: lang === 'ja' ? '私たちの理念' : 'Our Philosophy',
      text: lang === 'ja'
        ? 'ネパールダイニングでは、素晴らしい料理は質の高い食材、本格的なレシピ、そして真心のこもったおもてなしから始まると信じています。シェフたちは代々受け継がれてきた伝統的な調理法に従い、北海道の新鮮な地元食材を取り入れながら、ネパールとインドの本来の味わいを守り続けています。すべてのお食事は丁寧に調理され、味、新鮮さ、品質の完璧なバランスを確保しています。'
        : 'At Nepal Dining, we believe great food begins with quality ingredients, authentic recipes, and genuine hospitality. Our chefs follow traditional cooking methods passed down through generations, preserving the true flavors of Nepal and India while embracing the freshness of Hokkaido\'s local produce. Every meal is prepared with care, ensuring a perfect balance of taste, freshness, and quality. We are committed to creating an enjoyable dining experience for every guest, regardless of dietary preferences or cultural background.',
    },
    ingredients: {
      title: lang === 'ja' ? '素材へのこだわり' : 'Our Ingredients',
      text: lang === 'ja'
        ? 'すべての料理は、伝統的なレシピと調理法を用いて丁寧に調理しています。ネパールとインドから直輸入した本格的なスパイスに、新鮮な旬の野菜、上質な乳製品、そして富良野とその周辺地域で育まれた「ななつぼし」米を組み合わせています。富良野は肥沃な農地、清らかな環境、そして卓越した農産物で知られています。この地域の新鮮な野菜、高品質な米、地元産の乳製品が当店の料理に独自の個性を加え、北海道の最高の食材とネパール・インドの豊かな料理の伝統を融合させています。'
        : 'Every dish is carefully prepared using traditional recipes and cooking techniques. We combine authentic spices from Nepal and India with fresh seasonal vegetables, premium dairy products, and locally grown Nanatsuboshi rice from Furano and the surrounding region. Furano is renowned for its fertile farmland, clean environment, and exceptional agricultural products. The region\'s fresh vegetables, high-quality rice, and locally produced dairy add a unique character to our cuisine, allowing us to blend the best of Hokkaido with the vibrant culinary traditions of Nepal and India.',
    },
    furano: {
      title: lang === 'ja' ? '富良野とのつながり' : 'Furano & Local Connection',
      text: lang === 'ja'
        ? '2013年以来、富良野を故郷と呼べることを幸せに思っています。この地域の美しい自然景観、清らかな環境、そして地元コミュニティの温かさが、まるで第二の故郷のように感じさせてくれます。地元の皆様と世界中からの旅行者のおもてなしの心に触発され、2020年7月にネパールダイニングをオープンしました。富良野を訪れるすべての方に本格的な味わいと心のこもったおもてなしを共有するという、シンプルな目標を持って。'
        : 'Since 2013, we have been fortunate to call Furano our home. The area\'s beautiful natural scenery, clean environment, and the warmth of the local community have made us feel as if this is our second hometown. Inspired by the hospitality of both local residents and visitors from around the world, we opened Nepal Dining in July 2020 with a simple goal: to share authentic flavors and heartfelt hospitality with everyone who visits Furano.',
    },
    hospitality: {
      title: lang === 'ja' ? 'おもてなし' : 'Our Hospitality',
      text: lang === 'ja'
        ? 'おもてなしは私たちのすべての活動の中心にあります。世界中からのお客様を温かいサービスと快適な雰囲気でお迎えしています。英語対応サービス、ハラルフレンドリーな選択肢、ベジタリアン料理、ヴィーガン料理、アレルギー対応のお食事をリクエストに応じてご提供し、すべての方に満足いただけるお食事体験をお約束します。ネパールとインドの本格的な味わいを、富良野の中心でお楽しみいただけることを楽しみにしています。'
        : 'Hospitality is at the heart of everything we do. We welcome guests from around the world with friendly service and a comfortable atmosphere. English-friendly service, halal-friendly options, vegetarian dishes, vegan choices, and allergy-conscious meals are available upon request, ensuring everyone can enjoy a satisfying dining experience. We look forward to welcoming you and sharing the authentic taste of Nepal and India in the heart of Furano.',
    },
  };

  const lookingAhead = lang === 'ja'
    ? '私たちの使命は変わりません：ネパールのおもてなしの温かさとネパール・インドの豊かな味わいを共有しながら、富良野をユニークにする卓越した地元食材を活かし続けること。'
    : 'As we move forward, our mission remains the same: to share the warmth of Nepalese hospitality and the rich flavors of Nepal and India while embracing the exceptional local ingredients that make Furano unique.';

  return (
    <div style={{ paddingTop: 72, minHeight: '100vh', background: '#FFFDF8' }}>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '80px 24px 60px', background: 'linear-gradient(135deg, #1C1A18 0%, #2D2820 100%)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(https://www.nepaldining.online/wp-content/uploads/2026/06/butter-chicken-curry.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.15 }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: '#D4821A', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 12 }}>{lang === 'ja' ? '私たちのストーリー' : 'Our Story'}</div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1.15, marginBottom: 20 }}>
            {lang === 'ja' ? '北海道でヒマラヤの味を' : 'A Taste of the Himalayas in Hokkaido'}
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.7, maxWidth: 650, margin: '0 auto' }}>
            {lang === 'ja'
              ? '富良野のラベンダー畑に囲まれた中富良野で、本格ネパール・インド料理と温かいおもてなしをお届けしています。'
              : 'Surrounded by Furano\'s famous lavender fields, mountains, and beautiful countryside, Nepal Dining has become a favorite destination for travelers seeking delicious food and a welcoming atmosphere.'}
          </p>
        </div>
      </section>

      {/* Welcome / About Us */}
      <section style={{ padding: '80px 24px', background: '#FFFDF8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 24, textAlign: 'center' }}>{sections.welcome.title}</h2>
          <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.9, textAlign: 'center' }}>{sections.welcome.text}</p>
        </div>
      </section>

      {/* Philosophy + Ingredients side by side */}
      <section style={{ padding: '60px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.08)' }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🙏</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 16 }}>{sections.philosophy.title}</h3>
            <p style={{ fontSize: 15, color: '#6B5E4E', lineHeight: 1.8 }}>{sections.philosophy.text}</p>
          </div>
          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.08)' }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🌾</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 16 }}>{sections.ingredients.title}</h3>
            <p style={{ fontSize: 15, color: '#6B5E4E', lineHeight: 1.8 }}>{sections.ingredients.text}</p>
          </div>
        </div>
      </section>

      {/* Furano + Hospitality */}
      <section style={{ padding: '60px 24px', background: '#FFFDF8' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 48 }}>
          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.08)' }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>🏔️</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 16 }}>{sections.furano.title}</h3>
            <p style={{ fontSize: 15, color: '#6B5E4E', lineHeight: 1.8 }}>{sections.furano.text}</p>
          </div>
          <div style={{ background: 'white', borderRadius: 20, padding: '36px 32px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', border: '1px solid rgba(212,130,26,0.08)' }}>
            <div style={{ fontSize: 32, marginBottom: 16 }}>💛</div>
            <h3 style={{ fontSize: 22, fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 16 }}>{sections.hospitality.title}</h3>
            <p style={{ fontSize: 15, color: '#6B5E4E', lineHeight: 1.8 }}>{sections.hospitality.text}</p>
          </div>
        </div>
      </section>

      {/* Food Images Grid */}
      <section style={{ padding: '40px 24px 0', background: '#FFFDF8' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {['butter-chicken-curry','momo','garlic-naan','chicken-veg-soup-curry'].map((img, i) => (
            <div key={i} style={{ borderRadius: 14, overflow: 'hidden', aspectRatio: '1' }}>
              <img src={`https://www.nepaldining.online/wp-content/uploads/2026/06/${img}.jpg`} alt={altFromImageUrl(img, lang)} loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '60px 24px', background: 'linear-gradient(135deg, #D4821A, #F0A830)', marginTop: 40 }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 32, textAlign: 'center' }}>
          {[
            { val: '14+', label: lang === 'ja' ? '富良野での歴史' : 'Years Serving Furano' },
            { val: '4.9★', label: lang === 'ja' ? 'Googleレビュー評価' : 'Google Rating' },
            { val: '50+', label: lang === 'ja' ? '本格メニュー' : 'Authentic Dishes' },
          ].map((s, i) => (
            <div key={i}>
              <div style={{ fontSize: 44, fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', lineHeight: 1 }}>{s.val}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.85)', marginTop: 8, fontWeight: 500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline / Our Journey */}
      <section style={{ padding: '80px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 48, textAlign: 'center' }}>
            {lang === 'ja' ? '私たちの歩み' : 'Our Journey'}
          </h2>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 60, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #D4821A, #769a00)', borderRadius: 2 }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, marginBottom: 36, position: 'relative' }}>
                <div style={{ width: 60, flexShrink: 0, textAlign: 'right', paddingRight: 12 }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: '#D4821A', fontFamily: 'Georgia, serif' }}>{item.year}</span>
                </div>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #D4821A, #F0A830)', flexShrink: 0, marginTop: 4, position: 'relative', zIndex: 1, boxShadow: '0 0 0 4px #FDF8F0' }} />
                <div style={{ flex: 1, background: 'white', borderRadius: 14, padding: '16px 20px', boxShadow: '0 2px 12px rgba(28,26,24,0.07)', border: '1px solid rgba(212,130,26,0.08)' }}>
                  <p style={{ fontSize: 15, color: '#1C1A18', lineHeight: 1.7 }}>{item.event}</p>
                </div>
              </div>
            ))}
            {/* Looking Ahead */}
            <div style={{ display: 'flex', gap: 24, position: 'relative' }}>
              <div style={{ width: 60, flexShrink: 0, textAlign: 'right', paddingRight: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: '#769a00', fontFamily: 'Georgia, serif' }}>✦</span>
              </div>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg, #769a00, #8BC34A)', flexShrink: 0, marginTop: 4, position: 'relative', zIndex: 1, boxShadow: '0 0 0 4px #FDF8F0' }} />
              <div style={{ flex: 1, background: 'linear-gradient(135deg, rgba(118,154,0,0.08), rgba(118,154,0,0.03))', borderRadius: 14, padding: '16px 20px', border: '1px solid rgba(118,154,0,0.15)' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#769a00', marginBottom: 8 }}>{lang === 'ja' ? '未来へ' : 'Looking Ahead'}</div>
                <p style={{ fontSize: 15, color: '#1C1A18', lineHeight: 1.7 }}>{lookingAhead}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section id="team" style={{ padding: '80px 24px', background: '#1C1A18', scrollMarginTop: 80 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 800, color: 'white', fontFamily: 'Georgia, serif', marginBottom: 48, textAlign: 'center' }}>
            {lang === 'ja' ? 'チーム紹介' : 'Meet the Team'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {teamMembers.map(member => (
              <div key={member.id} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: 16, padding: '24px 20px', border: '1px solid rgba(255,255,255,0.08)', textAlign: 'center' }}>
                {member.photo ? (
                  <img src={member.photo} alt={member.name} loading="lazy"
                    style={{ width: 96, height: 96, borderRadius: '50%', objectFit: 'cover', margin: '0 auto 14px', display: 'block', border: '3px solid rgba(212,130,26,0.5)' }} />
                ) : (
                  <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'linear-gradient(135deg, #D4821A, #769a00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 40, margin: '0 auto 14px' }}>{member.emoji}</div>
                )}
                <h3 style={{ fontSize: 15, fontWeight: 700, color: 'white', marginBottom: 4 }}>{member.name}</h3>
                <div style={{ fontSize: 12, color: '#D4821A', fontWeight: 600, marginBottom: 10, letterSpacing: '0.03em' }}>{lang === 'ja' ? member.roleJa : member.role}</div>
                <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.65)', lineHeight: 1.6 }}>{lang === 'ja' ? member.descJa : member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Hours & Location */}
      <section style={{ padding: '60px 24px', background: '#FDF8F0' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 40 }}>
          <div style={{ background: 'white', borderRadius: 16, padding: '32px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>🕐</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1C1A18', marginBottom: 16 }}>{lang === 'ja' ? '営業時間' : 'Business Hours'}</h3>
            <div style={{ fontSize: 15, color: '#1C1A18', lineHeight: 2 }}>
              <div>{lang === 'ja' ? '火〜日曜日' : 'Tue – Sun'}</div>
              <div style={{ fontWeight: 600 }}>11:00 – 15:00 / 17:00 – 21:00</div>
              <div style={{ fontSize: 13, color: '#C0392B', marginTop: 8, fontWeight: 600 }}>{lang === 'ja' ? '定休日: 第2・第4水曜日' : '2nd & 4th Wednesday: Closed'}</div>
            </div>
          </div>
          <div style={{ background: 'white', borderRadius: 16, padding: '32px', boxShadow: '0 4px 20px rgba(28,26,24,0.06)', textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>📍</div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: '#1C1A18', marginBottom: 16 }}>{lang === 'ja' ? '所在地' : 'Location'}</h3>
            <div style={{ fontSize: 15, color: '#6B5E4E', lineHeight: 1.8 }}>
              {lang === 'ja'
                ? '北海道空知郡中富良野町曙町3-19'
                : 'Hokkaido, Sorachi Gun, Nakafurano Cho, Akatsukimachi 3-19'}
            </div>
            <div style={{ fontSize: 13, color: '#D4821A', marginTop: 16, fontWeight: 600, lineHeight: 1.7 }}>
              {lang === 'ja'
                ? '6月〜7月はピークシーズンのため、事前のご予約をお勧めします。'
                : 'June–July is peak season. We recommend making a reservation in advance for a smooth dining experience.'}
            </div>
          </div>
        </div>
      </section>

      {/* Book Your Table - same form as homepage */}
      <section id="reservation" style={{ padding: '80px 24px', background: '#FFFDF8' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                <div style={{ width: 40, height: 2, background: 'linear-gradient(90deg, #D4821A, transparent)' }} />
                <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4821A' }}>{t.reservation.eyebrow}</span>
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 44px)', fontWeight: 800, color: '#1C1A18', fontFamily: 'Georgia, serif', marginBottom: 20 }}>{t.reservation.headline}</h2>
              <p style={{ fontSize: 16, color: '#6B5E4E', lineHeight: 1.7, marginBottom: 32 }}>{t.reservation.subheadline}</p>
              <div style={{ padding: '24px', background: '#FDF8F0', borderRadius: 16, border: '1px solid rgba(212,130,26,0.1)', marginBottom: 24 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#D4821A', letterSpacing: '0.05em', marginBottom: 12, textTransform: 'uppercase' }}>{lang === 'ja' ? '営業時間' : 'Business Hours'}</div>
                <div style={{ fontSize: 15, color: '#1C1A18', lineHeight: 2, whiteSpace: 'pre-line' }}>
                  {lang === 'ja' ? '火〜日: 11:00〜15:00 / 17:00〜21:00\n定休日: 第2・第4水曜日' : 'Tue–Sun: 11:00–15:00 / 17:00–21:00\n2nd & 4th Wednesday: Closed'}
                </div>
              </div>
              <p style={{ fontSize: 14, color: '#6B5E4E' }}>{t.reservation.alt} <a href="tel:0167-44-2444" style={{ color: '#D4821A', fontWeight: 700, textDecoration: 'none' }}>0167-44-2444</a></p>
            </div>
            <div style={{ background: 'white', borderRadius: 24, padding: '40px', boxShadow: '0 20px 60px rgba(28,26,24,0.1)', border: '1px solid rgba(212,130,26,0.08)' }}>
              <ReservationForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
