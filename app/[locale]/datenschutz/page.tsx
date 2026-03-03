"use client";
import {useTranslations} from 'next-intl';

export default function Datenschutz() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen bg-[#0A1628] text-white py-12 sm:py-16 md:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-400 mb-8 sm:mb-10">{t('subtitle')}</p>
        <div className="space-y-6 text-gray-300 leading-relaxed text-sm">
          <p>{t('intro')}</p>
          <div className="bg-white/5 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">1. {t('sections.overview.title')}</h2>
            <p className="mb-4">{t('sections.overview.intro')}</p>
            <p className="mb-4">{t('sections.overview.desc')}</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">2. {t('sections.hosting.title')}</h2>
            <p className="mb-4">{t('sections.hosting.desc')}</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">3. {t('sections.general.title')}</h2>
            <p className="mb-4">{t('sections.general.desc')}</p>
          </div>
          <div className="bg-white/5 rounded-2xl p-5 sm:p-6">
            <h2 className="text-xl font-bold text-white mb-4">4. {t('sections.dataCollection.title')}</h2>
            <p>{t('sections.dataCollection.desc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
