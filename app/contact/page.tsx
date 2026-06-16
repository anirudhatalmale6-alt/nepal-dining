'use client';

import { useState } from 'react';
import { useLang } from "../lib/LanguageContext";
import Link from 'next/link';

export default function ContactPage() {
  const { lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 rounded-xl border border-[#E8D5B7] bg-white focus:outline-none focus:ring-2 focus:ring-[#D4821A]/30 focus:border-[#D4821A] transition-all text-[#1C1A18] placeholder-[#9B8C7D]";
  const labelClass = "block text-sm font-semibold text-[#1C1A18] mb-2";

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-[#1C1A18] overflow-hidden">
        <div className="absolute inset-0 opacity-20"
          style={{ backgroundImage: "url('https://nepaldining.online/wp-content/uploads/2026/06/chicken-tikka-masala.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#D4821A] uppercase tracking-[0.2em] text-sm font-semibold mb-4">
            {lang === 'en' ? 'Get in Touch' : 'お問い合わせ'}
          </p>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
            {lang === 'en' ? 'Contact Us' : 'お問い合わせフォーム'}
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {lang === 'en'
              ? 'Questions about our menu, hours, or reservations? We\'d love to hear from you.'
              : 'メニュー・営業時間・ご予約についてのご質問は、お気軽にお問い合わせください。'}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#FDF8F0]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-serif text-[#1C1A18] mb-2">
                  {lang === 'en' ? 'Nepal Dining' : 'ネパールダイニング'}
                </h2>
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-[#D4821A] to-[#F0A830] mb-6" />
              </div>

              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: lang === 'en' ? 'Address' : '住所',
                  value: lang === 'en' ? 'Miyamachi 3-32, Nakafurano\nHokkaido 〒071-0714' : '〒071-0714\n北海道空知郡中富良野町宮町3-32',
                  link: null,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: lang === 'en' ? 'Phone' : '電話番号',
                  value: '0167-44-2444',
                  link: 'tel:0167442444',
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                  label: lang === 'en' ? 'Hours' : '営業時間',
                  value: lang === 'en'
                    ? 'Tue–Sun: 11:30–15:00 / 17:00–21:30\nMonday: Closed'
                    : '火〜日: 11:30〜15:00 / 17:00〜21:30\n月曜日: 定休日',
                  link: null,
                },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start bg-white rounded-2xl p-5 shadow-sm border border-[#F0A830]/20">
                  <div className="w-10 h-10 rounded-full bg-[#D4821A]/10 flex items-center justify-center text-[#D4821A] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-[#9B8C7D] font-semibold uppercase tracking-wide mb-1">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-[#D4821A] font-semibold hover:text-[#F0A830] transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-[#1C1A18] text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#F0A830]/20">
                <p className="text-xs text-[#9B8C7D] font-semibold uppercase tracking-wide mb-4">
                  {lang === 'en' ? 'Follow Us' : 'SNS'}
                </p>
                <div className="flex gap-3">
                  {[
                    { href: 'https://facebook.com', label: 'Facebook', color: '#1877F2', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
                    )},
                    { href: 'https://instagram.com', label: 'Instagram', color: '#E1306C', icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    )},
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform hover:scale-110"
                      style={{ backgroundColor: s.color }}
                      aria-label={s.label}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="bg-white rounded-2xl p-12 shadow-xl text-center border border-[#F0A830]/20">
                  <div className="w-16 h-16 bg-[#769a00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-[#769a00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif text-[#1C1A18] mb-3">
                    {lang === 'en' ? 'Message Sent!' : 'メッセージを送信しました！'}
                  </h3>
                  <p className="text-[#6B5E4E] mb-8">
                    {lang === 'en'
                      ? "Thank you for reaching out. We'll get back to you within 24 hours."
                      : 'お問い合わせありがとうございます。24時間以内にご返信いたします。'}
                  </p>
                  <Link href="/" className="inline-block px-8 py-3 bg-gradient-to-r from-[#D4821A] to-[#F0A830] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                    {lang === 'en' ? 'Return Home' : 'ホームへ戻る'}
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-xl border border-[#F0A830]/20 space-y-6">
                  <h2 className="text-2xl font-serif text-[#1C1A18] mb-2">
                    {lang === 'en' ? 'Send a Message' : 'メッセージを送る'}
                  </h2>
                  <p className="text-[#6B5E4E] text-sm mb-6">
                    {lang === 'en'
                      ? 'Fill in the form and we\'ll respond within 24 hours.'
                      : 'フォームにご記入ください。24時間以内にご返信いたします。'}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass}>
                        {lang === 'en' ? 'Your Name' : 'お名前'} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className={inputClass}
                        placeholder={lang === 'en' ? 'Taro Yamada' : '山田 太郎'}
                        value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>
                        {lang === 'en' ? 'Phone (Optional)' : '電話番号（任意）'}
                      </label>
                      <input
                        type="tel"
                        className={inputClass}
                        placeholder="090-0000-0000"
                        value={form.phone}
                        onChange={e => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      {lang === 'en' ? 'Email Address' : 'メールアドレス'} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className={inputClass}
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={e => setForm({ ...form, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>
                      {lang === 'en' ? 'Subject' : '件名'}
                    </label>
                    <select
                      className={inputClass}
                      value={form.subject}
                      onChange={e => setForm({ ...form, subject: e.target.value })}
                    >
                      <option value="">{lang === 'en' ? 'Select a topic…' : 'トピックを選択…'}</option>
                      <option>{lang === 'en' ? 'Reservation Enquiry' : 'ご予約について'}</option>
                      <option>{lang === 'en' ? 'Menu & Dietary Questions' : 'メニュー・アレルギーについて'}</option>
                      <option>{lang === 'en' ? 'Group Booking' : '団体予約'}</option>
                      <option>{lang === 'en' ? 'Halal Certification' : 'ハラール認証について'}</option>
                      <option>{lang === 'en' ? 'Other' : 'その他'}</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      {lang === 'en' ? 'Message' : 'メッセージ'} <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={5}
                      className={inputClass}
                      placeholder={lang === 'en'
                        ? 'How can we help you?'
                        : 'ご用件をご記入ください'}
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-[#D4821A] to-[#F0A830] text-white rounded-xl font-semibold text-lg hover:opacity-90 transition-all hover:shadow-lg hover:shadow-[#D4821A]/30 active:scale-[0.99]"
                  >
                    {lang === 'en' ? 'Send Message' : 'メッセージを送信する'}
                  </button>

                  <p className="text-xs text-center text-[#9B8C7D]">
                    {lang === 'en'
                      ? 'For faster response, you can also call us at 0167-44-2444'
                      : 'お急ぎの場合は、お電話（0167-44-2444）にてご連絡ください'}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-[#1C1A18] text-center mb-12">
            {lang === 'en' ? 'Frequently Asked Questions' : 'よくあるご質問'}
          </h2>
          <div className="space-y-4">
            {(lang === 'en' ? [
              { q: 'Do you offer halal food?', a: 'Yes! Our kitchen follows halal preparation guidelines. Please inform our staff of any dietary requirements when ordering.' },
              { q: 'Is English spoken at the restaurant?', a: 'Absolutely. Our staff speaks English and we offer English menus. We welcome international guests warmly.' },
              { q: 'Do I need a reservation?', a: 'Walk-ins are welcome but reservations are highly recommended, especially during Furano\'s lavender season (June–August).' },
              { q: 'Do you offer takeout?', a: 'Yes! Takeout orders are available. Please call ahead or use our online ordering system.' },
            ] : [
              { q: 'ハラール対応はしていますか？', a: 'はい、ハラール対応のお食事をご用意しております。アレルギーや食事制限がある場合はスタッフまでお知らせください。' },
              { q: '英語は話せますか？', a: 'スタッフが英語対応可能です。英語メニューもご用意しており、外国からのお客様も安心してご来店いただけます。' },
              { q: '予約は必要ですか？', a: '予約なしでもご来店いただけますが、特にラベンダーシーズン（6〜8月）は事前のご予約をおすすめします。' },
              { q: 'テイクアウトはできますか？', a: 'はい、テイクアウトも承っております。お電話またはオンライン注文フォームよりご注文ください。' },
            ]).map((item) => (
              <details key={item.q} className="group bg-[#FDF8F0] rounded-xl border border-[#F0A830]/20 overflow-hidden">
                <summary className="flex justify-between items-center cursor-pointer px-6 py-4 font-semibold text-[#1C1A18] list-none">
                  {item.q}
                  <svg className="w-5 h-5 text-[#D4821A] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-[#6B5E4E] leading-relaxed border-t border-[#F0A830]/20 pt-4">
                  {item.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
