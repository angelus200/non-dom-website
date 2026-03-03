"use client";
import {useTranslations} from 'next-intl';

export default function Webinare() {
  const t = useTranslations('webinars');

  const webinare = [
    { icon: "🧠", tag: t('tags.free'), date: t('items.0.date'), time: t('items.0.time'), title: t('items.0.title'), desc: t('items.0.desc') },
    { icon: "🤖", tag: t('tags.free'), date: t('items.1.date'), time: t('items.1.time'), title: t('items.1.title'), desc: t('items.1.desc') },
    { icon: "💼", tag: t('tags.premium'), date: t('items.2.date'), time: t('items.2.time'), title: t('items.2.title'), desc: t('items.2.desc') },
    { icon: "🏢", tag: t('tags.premium'), date: t('items.3.date'), time: t('items.3.time'), title: t('items.3.title'), desc: t('items.3.desc') },
    { icon: "🎯", tag: t('tags.exclusive'), date: t('items.4.date'), time: t('items.4.time'), title: t('items.4.title'), desc: t('items.4.desc') },
    { icon: "🛡️", tag: t('tags.resource'), date: t('items.5.date'), time: t('items.5.time'), title: t('items.5.title'), desc: t('items.5.desc'), url: "https://unternehmervermoegensschutz.de" },
    { icon: "✈️", tag: t('tags.resource'), date: t('items.6.date'), time: t('items.6.time'), title: t('items.6.title'), desc: t('items.6.desc'), url: "https://wegzugsbesteuerungvermeiden.de" },
    { icon: "🏝️", tag: t('tags.resource'), date: t('items.7.date'), time: t('items.7.time'), title: t('items.7.title'), desc: t('items.7.desc'), url: "https://investorenschutz-nordzypern.de" },
    { icon: "🌍", tag: t('tags.resource'), date: t('items.8.date'), time: t('items.8.time'), title: t('items.8.title'), desc: t('items.8.desc'), url: "https://vermoegensschutz-international.de" },
    { icon: "💊", tag: t('tags.resource'), date: t('items.9.date'), time: t('items.9.time'), title: t('items.9.title'), desc: t('items.9.desc'), url: "https://coronahilfenratgeber.de" },
    { icon: "💰", tag: t('tags.resource'), date: t('items.10.date'), time: t('items.10.time'), title: t('items.10.title'), desc: t('items.10.desc'), url: "https://foerdermittelratgeber.com" },
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
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {webinare.map((w) => (
            <div key={w.title} className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-2xl p-7 flex gap-5 items-start transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,150,199,0.12)]">
              <div className="text-4xl flex-shrink-0">{w.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${w.tag === t('tags.free') ? "bg-green-100 text-green-700" : w.tag === t('tags.premium') ? "bg-[rgba(0,150,199,0.1)] text-[#0096C7]" : w.tag === t('tags.resource') ? "bg-blue-100 text-blue-700" : "bg-purple-100 text-purple-700"}`}>{w.tag}</span>
                  <span className="text-gray-400 text-xs">{w.date} · {w.time}</span>
                </div>
                <h3 className="font-black text-[#0A1628] text-lg mb-1">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{w.desc}</p>
                <a href={w.url || "/kontakt"} target={w.url ? "_blank" : undefined} rel={w.url ? "noopener noreferrer" : undefined}
                  className="inline-block bg-[#0096C7] hover:bg-[#0077B6] text-white text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200">
                  {w.url ? t('cta.visit') : t('cta.register')}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
