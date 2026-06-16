'use client';

import { useLang } from "../lib/LanguageContext";
import { translations } from '../lib/i18n';
import Link from 'next/link';

export default function AccessPage() {
  const { lang } = useLang();
  const t = translations[lang];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#1C1A18] overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#D4821A] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            {lang === 'en' ? 'Getting Here' : 'アクセス方法'}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {lang === 'en' ? 'Access & Hours' : 'アクセス・営業時間'}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Find us in the heart of Nakafurano, surrounded by Hokkaido\'s stunning lavender countryside.'
              : '中富良野の中心部、北海道の美しいラベンダーの郷にあります。'}
          </p>
        </div>
      </section>

      {/* Map + Info */}
      <section className="py-16 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2917.4!2d142.4497!3d43.5183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f0cd8b2a3c6b0e1%3A0x123456789!2sNepal+Dining!5e0!3m2!1sen!2sjp!4v1620000000000!5m2!1sen!2sjp"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nepal Dining Location"
              />
            </div>

            {/* Info Cards */}
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#F0A830]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4821A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4821A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1A18] mb-1">
                      {lang === 'en' ? 'Address' : '住所'}
                    </h3>
                    <p className="text-[#6B5E4E]">〒071-0714</p>
                    <p className="text-[#6B5E4E]">
                      {lang === 'en'
                        ? 'Miyamachi 3-32, Nakafurano, Sorachi District, Hokkaido'
                        : '北海道空知郡中富良野町宮町3-32'}
                    </p>
                    <a
                      href="https://maps.google.com/?q=Nepal+Dining+Nakafurano"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-2 text-sm text-[#D4821A] hover:text-[#F0A830] font-medium transition-colors"
                    >
                      {lang === 'en' ? 'Open in Google Maps' : 'Googleマップで開く'}
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#F0A830]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4821A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4821A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#1C1A18] mb-3">
                      {lang === 'en' ? 'Business Hours' : '営業時間'}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#6B5E4E] text-sm">
                          {lang === 'en' ? 'Tue – Sun (Lunch)' : '火〜日（ランチ）'}
                        </span>
                        <span className="font-semibold text-[#1C1A18] text-sm">11:30 – 15:00</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-[#6B5E4E] text-sm">
                          {lang === 'en' ? 'Tue – Sun (Dinner)' : '火〜日（ディナー）'}
                        </span>
                        <span className="font-semibold text-[#1C1A18] text-sm">17:00 – 21:30</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-[#6B5E4E] text-sm">
                          {lang === 'en' ? 'Monday' : '月曜日'}
                        </span>
                        <span className="font-semibold text-red-500 text-sm">
                          {lang === 'en' ? 'Closed' : '定休日'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#F0A830]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4821A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4821A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1A18] mb-1">
                      {lang === 'en' ? 'Phone' : '電話番号'}
                    </h3>
                    <a href="tel:0167442200" className="text-2xl font-bold text-[#D4821A] hover:text-[#F0A830] transition-colors">
                      0167-44-2200
                    </a>
                    <p className="text-sm text-[#6B5E4E] mt-1">
                      {lang === 'en' ? 'Reservations & Enquiries' : 'ご予約・お問い合わせ'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="bg-white rounded-2xl p-6 shadow-md border border-[#F0A830]/20">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#D4821A]/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-[#D4821A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1C1A18] mb-1">
                      {lang === 'en' ? 'Free Parking' : '無料駐車場'}
                    </h3>
                    <p className="text-[#6B5E4E]">
                      {lang === 'en'
                        ? 'Ample free parking available on-site. Accessible for all vehicle types.'
                        : '店舗敷地内に無料駐車場をご用意しています。大型車もご利用いただけます。'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Directions */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-[#1C1A18] text-center mb-12">
            {lang === 'en' ? 'Directions' : 'アクセス方法'}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🚗',
                title: lang === 'en' ? 'By Car' : '車でお越しの場合',
                desc: lang === 'en'
                  ? '30 min from Furano City. Follow Route 38 toward Nakafurano. Free parking on-site.'
                  : '富良野市内から約30分。国道38号線で中富良野方面へ。店舗に無料駐車場あり。',
              },
              {
                icon: '🚃',
                title: lang === 'en' ? 'By Train' : '電車でお越しの場合',
                desc: lang === 'en'
                  ? '15-minute walk from Nakafurano Station on the JR Furano Line. Taxi available outside the station.'
                  : 'JR富良野線・中富良野駅から徒歩約15分。駅前からタクシーもご利用いただけます。',
              },
              {
                icon: '🚌',
                title: lang === 'en' ? 'By Bus' : 'バスでお越しの場合',
                desc: lang === 'en'
                  ? 'Furano bus services run regularly from Asahikawa and Sapporo during peak tourist seasons.'
                  : '旭川・札幌からのバスが繁忙期に定期運行。富良野バスターミナルよりタクシー利用可。',
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6 rounded-2xl bg-[#FDF8F0] border border-[#F0A830]/20">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-[#1C1A18] mb-3">{item.title}</h3>
                <p className="text-[#6B5E4E] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-[#D4821A] to-[#F0A830]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif text-white mb-4">
            {lang === 'en' ? 'Ready to Visit?' : 'ご来店お待ちしています'}
          </h2>
          <p className="text-white/80 mb-8">
            {lang === 'en'
              ? 'Book your table in advance — especially recommended during Furano\'s lavender season.'
              : '事前にご予約いただくとスムーズです。ラベンダーシーズンは特にお早めに。'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservation"
              className="px-8 py-4 bg-white text-[#D4821A] rounded-full font-semibold hover:bg-[#FDF8F0] transition-colors">
              {lang === 'en' ? 'Reserve a Table' : 'テーブルを予約する'}
            </Link>
            <a href="tel:0167442200"
              className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-colors">
              {lang === 'en' ? 'Call Us' : '電話で問い合わせ'}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
