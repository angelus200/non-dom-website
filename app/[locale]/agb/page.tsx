"use client";
import {useTranslations} from 'next-intl';

export default function AGB() {
  const t = useTranslations('terms');

  return (
    <div className="min-h-screen bg-[#0A1628] text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">{t('title')}</h1>
        <p className="text-gray-400 mb-10">{t('subtitle')}</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {[0,1,2,3,4,5,6,7,8].map((i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">{t(`sections.${i}.title`)}</h2>
              <p>{t(`sections.${i}.content`)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
