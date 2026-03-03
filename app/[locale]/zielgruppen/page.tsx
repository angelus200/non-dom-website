"use client";
import {useTranslations} from 'next-intl';

export default function Zielgruppen() {
  const t = useTranslations('targetGroups');

  const targets = [
    { icon: "💻", name: t('groups.0.name'), desc: t('groups.0.desc'), benefits: [t('groups.0.benefits.0'), t('groups.0.benefits.1'), t('groups.0.benefits.2')] },
    { icon: "🔨", name: t('groups.1.name'), desc: t('groups.1.desc'), benefits: [t('groups.1.benefits.0'), t('groups.1.benefits.1'), t('groups.1.benefits.2')] },
    { icon: "🛒", name: t('groups.2.name'), desc: t('groups.2.desc'), benefits: [t('groups.2.benefits.0'), t('groups.2.benefits.1'), t('groups.2.benefits.2')] },
    { icon: "🚚", name: t('groups.3.name'), desc: t('groups.3.desc'), benefits: [t('groups.3.benefits.0'), t('groups.3.benefits.1'), t('groups.3.benefits.2')] },
    { icon: "🚀", name: t('groups.4.name'), desc: t('groups.4.desc'), benefits: [t('groups.4.benefits.0'), t('groups.4.benefits.1'), t('groups.4.benefits.2')] },
    { icon: "📋", name: t('groups.5.name'), desc: t('groups.5.desc'), benefits: [t('groups.5.benefits.0'), t('groups.5.benefits.1'), t('groups.5.benefits.2')] },
    { icon: "🍽️", name: t('groups.6.name'), desc: t('groups.6.desc'), benefits: [t('groups.6.benefits.0'), t('groups.6.benefits.1'), t('groups.6.benefits.2')] },
    { icon: "🏘️", name: t('groups.7.name'), desc: t('groups.7.desc'), benefits: [t('groups.7.benefits.0'), t('groups.7.benefits.1'), t('groups.7.benefits.2')] },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#0D1F3C] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4">{t('badge')}</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">{t('title')} <span className="text-[#00B4D8]">{t('titleHighlight')}</span></h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">{t('subtitle')}</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {targets.map((item) => (
            <div key={item.name} className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-2xl p-7 transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,150,199,0.12)]">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="font-black text-[#0A1628] text-xl mb-2">{item.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {item.benefits.map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="text-[#0096C7] font-bold">✓</span> {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
