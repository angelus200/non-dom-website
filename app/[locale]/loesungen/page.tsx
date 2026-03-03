"use client";
import {useTranslations} from 'next-intl';

export default function Loesungen() {
  const t = useTranslations('solutions');

  const apps = [
    { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/a2d19a68-3aec-422e-6d2b-b4087c2e7d00/public", name: "Business Angel App", url: "businessangel.app", href: "https://www.businessangel.app", tags: t('apps.0.tags'), desc: t('apps.0.desc') },
    { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/80501913-9d72-4804-335e-de63063c1800/public", name: "ImmoPortal", url: "immoportal.app", href: "https://portal.immoportal.app", tags: t('apps.1.tags'), desc: t('apps.1.desc') },
    { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/c582d6ad-dd7a-4aed-584f-5e9ace690900/public", name: "Buchhaltung KI", url: "buchhaltung-ki.app", href: "https://www.buchhaltung-ki.app", tags: t('apps.2.tags'), desc: t('apps.2.desc') },
    { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/0201a548-ba53-4eb9-d265-183dc763d400/public", name: "E-Commerce Rente", url: "ecommercerente.com", href: "https://www.ecommercerente.com", tags: t('apps.3.tags'), desc: t('apps.3.desc') },
    { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/960202a1-985a-49ef-c707-22ca49543100/public", name: "Unternehmensoptimierung", url: "unternehmensoptimierung.app", href: "https://www.unternehmensoptimierung.app", tags: t('apps.4.tags'), desc: t('apps.4.desc') },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#0D1F3C] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4">{t('badge')}</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">{t('title')} <span className="text-[#00B4D8]">{t('titleHighlight')}</span></h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">{t('subtitle')}</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-6">
          {apps.map((app) => (
            <a key={app.name} href={app.href} target="_blank" rel="noopener noreferrer"
              className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-2xl p-8 flex flex-col lg:flex-row gap-6 items-start transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,150,199,0.12)] group">
              <img src={app.icon} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" alt={app.name} />
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 flex-wrap">
                  <div>
                    <div className="font-black text-[#0A1628] text-xl mb-1">{app.name}</div>
                    <div className="text-[#0096C7] text-sm font-semibold mb-3">{app.url}</div>
                  </div>
                  <span className="text-[#0096C7] text-xl group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{app.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-bold bg-[rgba(0,150,199,0.08)] border border-[rgba(0,150,199,0.2)] text-[#0096C7] px-3 py-1 rounded-full">{app.tags}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}
