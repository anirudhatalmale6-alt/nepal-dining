'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Lang, Translations } from './i18n';

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LangContext = createContext<LangContextType>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = localStorage.getItem('nd-lang') as Lang | null;
    if (saved && (saved === 'en' || saved === 'ja')) {
      setLangState(saved);
    } else {
      const browser = navigator.language.startsWith('ja') ? 'ja' : 'en';
      setLangState(browser);
    }
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem('nd-lang', l);
  };

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
