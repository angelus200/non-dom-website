"use client";
import {useTranslations} from 'next-intl';

export default function Impressum() {
  const t = useTranslations('imprint');

  return (
    <div className="min-h-screen bg-[#0A1628] text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-10">{t('title')}</h1>
        <div className="bg-white/5 rounded-2xl p-5 sm:p-6 md:p-8 space-y-4 text-gray-300 leading-relaxed">
          <p className="text-xl font-semibold text-white">{t('company')}</p>
          <p>{t('address')}</p>
          <p>{t('email')}</p>
          <p>{t('register')}</p>
          <p>{t('court')}</p>
          <p className="pt-4 border-t border-white/10 text-white font-semibold">{t('brand')}</p>
        </div>
      </div>
    </div>
  );
}
