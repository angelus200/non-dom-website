"use client";
import { useEffect } from "react";
import {Link} from "@/i18n/routing";
import {useTranslations, useLocale} from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const locale = useLocale();
  useEffect(() => {
    // Load Vidyard script for German locale
    if (locale === 'de' && !document.querySelector('script[src*="vidyard"]')) {
      const script = document.createElement('script');
      script.src = 'https://play.vidyard.com/embed/v4.js';
      script.async = true;
      document.body.appendChild(script);
    }

    // Fade-up animation observer
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e, i) => {
        if (e.isIntersecting) {
          const delay = parseInt((e.target as HTMLElement).dataset.delay || "0");
          setTimeout(() => e.target.classList.add("visible"), delay);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.07 });
    document.querySelectorAll(".fade-up").forEach((el, i) => {
      (el as HTMLElement).dataset.delay = String((i % 6) * 80);
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, [locale]);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#0a2a4a] py-12 sm:py-16 md:py-24 px-4 relative overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src="https://assets.cdn.filesafe.space/0beKz0TSeMQXqUf2fDg7/media/67da9e3926b50104b0a47a8b.mp4"
        />
        <div className="absolute inset-0 bg-[#0A1628] opacity-60" />
        <div className="absolute inset-0 opacity-50" style={{backgroundImage:"radial-gradient(circle at 20% 50%, rgba(0,180,216,0.14) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,150,199,0.09) 0%, transparent 40%)"}}/>
        <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(0,180,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.04) 1px, transparent 1px)", backgroundSize:"52px 52px", WebkitMaskImage:"radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)"}}/>
        <div className={`max-w-7xl mx-auto relative z-10 grid gap-8 lg:gap-16 ${locale === 'de' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'} items-start`}>
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(0,180,216,0.18)] border border-[rgba(0,180,216,0.35)] px-3 sm:px-4 py-1.5 rounded-full text-[#48CAE4] text-xs font-semibold mb-5">
              <div className="flex items-center justify-center gap-3 sm:gap-8 text-sm font-semibold">
                <span className="flex items-center gap-1.5 sm:gap-2 text-white text-sm sm:text-base">
                  🇨🇭 <span className="text-[#00B4D8]">{t('hero.badge1')}</span>
                </span>
                <span className="text-white/40">|</span>
                <span className="flex items-center gap-1.5 sm:gap-2 text-white text-sm sm:text-base">
                  🤖 <span className="text-[#00B4D8]">{t('hero.badge2')}</span>
                </span>
              </div>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5">
              {t('hero.title')} <span className="text-[#00B4D8]">{t('hero.titleHighlight')}</span><br/>{t('hero.titleLine2')}
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/loesungen"
                className="bg-[#0096C7] hover:bg-[#0077B6] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,150,199,0.5)] text-center">
                {t('hero.ctaPrimary')}
              </Link>
              <Link href="/kontakt"
                className="border-2 border-[rgba(0,180,216,0.45)] text-[#48CAE4] hover:border-[#00B4D8] hover:bg-[rgba(0,180,216,0.08)] px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 text-center">
                {t('hero.ctaSecondary')}
              </Link>
            </div>
            <div className="grid grid-cols-2 sm:flex gap-4 sm:gap-8 mb-10">
              {[["32+",t('hero.stat1')],["5",t('hero.stat2')],["€0",t('hero.stat3')],["48h",t('hero.stat4')]].map(([n,l]) => (
                <div key={l}>
                  <span className="block text-2xl sm:text-[1.9rem] font-black text-[#00B4D8] tracking-tight leading-none">{n}</span>
                  <span className="text-white/55 text-xs mt-0.5 block">{l}</span>
                </div>
              ))}
            </div>

            {/* Founder Video - German only */}
            {locale === 'de' && (
              <div className="max-w-lg mx-auto mt-6 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,180,216,0.25)]">
                <img
                  style={{width: '100%', margin: 'auto', display: 'block'}}
                  className="vidyard-player-embed"
                  src="https://play.vidyard.com/CArVm63iGds3wzXw5D1kx4.jpg"
                  data-uuid="CArVm63iGds3wzXw5D1kx4"
                  data-v="4"
                  data-type="inline"
                  alt="Die KI-Revolution: Überleben für KMU"
                />
              </div>
            )}
          </div>
          {/* Benefits List - German only */}
          {locale === 'de' && (
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 sm:p-8 shadow-[0_8px_32px_rgba(0,180,216,0.2)]">
              <h2 className="text-white font-bold text-xl mb-6">{t('hero.benefitsTitle')}</h2>
              <div className="flex flex-col gap-4">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-green-400 text-xl flex-shrink-0 mt-0.5">✅</span>
                    <span className="text-white/90 text-base sm:text-lg leading-relaxed">{t(`hero.benefits.${i}`)}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PARTNER */}
      <section className="py-6 sm:py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs tracking-[3px] uppercase text-gray-400 font-semibold mb-5">{t('partners.title')}</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: "Fit for Fun", url: "https://unternehmen.fitforfun.de/gesundheit-als-lifestyle.html", logo: "/logos/fitforfun.webp" },
              { name: "Forbes", url: "https://www.forbes.at/artikel/markenaufbau-im-amazon-zeitalter", logo: "/logos/forbes.webp" },
              { name: "Focus Online", url: "https://unternehmen.focus.de/amazon-markenaufbau.html", logo: "/logos/focus.webp" },
              { name: "KfW Partner", url: "https://non-dom.group/kfw-partnerschaft", logo: "/logos/kfw.webp" },
              { name: "Handelskammer D-CH", url: "https://kg.angelus.group/wilkommen-auf-den-seiten-der-angelus-group/", logo: "/logos/handelskammer.webp" },
              { name: "Business Angels Deutschland", url: "https://www.business-angels.de", logo: "/logos/band.webp" },
              { name: "Swiss Startup Association", url: "https://swissstartupassociation.ch", logo: "/logos/swiss-startup.webp" },
              { name: "Brands Wanted", url: "https://www.brandswanted.com", logo: "/logos/brands-wanted.webp" },
              { name: "Unternehmen der Zukunft", url: "https://www.diind.de", logo: "/logos/unternehmen-zukunft.webp" },
            ].map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-105">
                <img src={p.logo} alt={p.name} className="h-12 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="inline-block bg-[rgba(0,150,199,0.08)] text-[#0096C7] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">{t('platformsSection.badge')}</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-3">{t('platformsSection.title')} <span className="text-[#0096C7]">{t('platformsSection.titleHighlight')}</span> {t('platformsSection.titleEnd')}</h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">{t('platformsSection.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/a2d19a68-3aec-422e-6d2b-b4087c2e7d00/public", name: "Business Angel App", url: "businessangel.app", href: "https://www.businessangel.app", tags: t('platforms.app1.tags') },
              { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/80501913-9d72-4804-335e-de63063c1800/public", name: "ImmoPortal", url: "immoportal.app", href: "https://portal.immoportal.app", tags: t('platforms.app2.tags') },
              { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/c582d6ad-dd7a-4aed-584f-5e9ace690900/public", name: "Buchhaltung KI", url: "buchhaltung-ki.app", href: "https://www.buchhaltung-ki.app", tags: t('platforms.app3.tags') },
              { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/0201a548-ba53-4eb9-d265-183dc763d400/public", name: "E-Commerce Rente", url: "ecommercerente.com", href: "https://www.ecommercerente.com", tags: t('platforms.app4.tags') },
              { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/960202a1-985a-49ef-c707-22ca49543100/public", name: "Unternehmensoptimierung", url: "unternehmensoptimierung.app", href: "https://www.unternehmensoptimierung.app", tags: t('platforms.app5.tags') },
              { icon: "✨", name: t('platforms.app6.name'), url: t('platforms.app6.url'), href: null, tags: t('platforms.app6.tags'), disabled: true },
            ].map((app, i) => {
              const Card = (
                <div className={`bg-white border-[1.5px] ${app.disabled ? "border-gray-200 opacity-40" : "border-gray-200 hover:border-[#0096C7] hover:shadow-[0_8px_28px_rgba(0,150,199,0.15)] hover:-translate-y-0.5 cursor-pointer"} rounded-2xl p-6 transition-all duration-300 relative overflow-hidden fade-up`}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00B4D8] to-[#0096C7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                  {app.disabled && <span className="absolute top-3 right-3 bg-gray-100 text-gray-400 text-[0.65rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">{t('platformsSection.comingSoon')}</span>}
                  {!app.disabled && <span className="float-right text-[#0096C7] text-sm">↗</span>}
                  {app.icon.startsWith('http') ? (
                    <img src={app.icon} className="w-12 h-12 rounded-xl object-cover mb-3" alt={app.name} />
                  ) : (
                    <span className="text-3xl mb-3 block">{app.icon}</span>
                  )}
                  <div className="font-black text-[#0A1628] text-base mb-1">{app.name}</div>
                  <div className="text-[#0096C7] text-xs font-semibold mb-3">{app.url}</div>
                  <div className="flex gap-1.5 flex-wrap">
                    <span className="text-[0.67rem] font-bold bg-[rgba(0,150,199,0.08)] border border-[rgba(0,150,199,0.2)] text-[#0096C7] px-2.5 py-0.5 rounded-full">{app.tags}</span>
                  </div>
                </div>
              );
              return app.disabled ? <div key={app.name}>{Card}</div> : (
                <a key={app.name} href={app.href!} target="_blank" rel="noopener noreferrer" className="group block">{Card}</a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[rgba(0,150,199,0.08)] text-[#0096C7] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">{t('features.badge')}</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-3">{t('features.title')} <span className="text-[#0096C7]">{t('features.titleHighlight')}</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">{t('features.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: "🔍", title: t('features.items.0.title'), desc: t('features.items.0.desc') },
              { icon: "📄", title: t('features.items.1.title'), desc: t('features.items.1.desc') },
              { icon: "🧠", title: t('features.items.2.title'), desc: t('features.items.2.desc') },
              { icon: "⚡", title: t('features.items.3.title'), desc: t('features.items.3.desc') },
              { icon: "📊", title: t('features.items.4.title'), desc: t('features.items.4.desc') },
              { icon: "🛡️", title: t('features.items.5.title'), desc: t('features.items.5.desc') },
            ].map((f, i) => (
              <div key={f.title} className="bg-gray-50 hover:bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-xl p-6 transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,150,199,0.1)] fade-up">
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <div className="font-black text-[#0A1628] text-base mb-2">{f.title}</div>
                <div className="text-gray-500 text-sm leading-relaxed">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(circle at 80% 50%, rgba(0,180,216,0.11) 0%, transparent 55%)"}}/>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">{t('why.badge')}</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-10">{t('why.title')} <span className="text-[#00B4D8]">{t('why.titleHighlight')}</span></h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              {[
                { icon: "🏆", t: t('why.reasons.0.title'), d: t('why.reasons.0.desc') },
                { icon: "💡", t: t('why.reasons.1.title'), d: t('why.reasons.1.desc') },
                { icon: "🔗", t: t('why.reasons.2.title'), d: t('why.reasons.2.desc') },
                { icon: "💰", t: t('why.reasons.3.title'), d: t('why.reasons.3.desc') },
              ].map((p, i) => (
                <div key={p.t} className="flex gap-4 fade-up">
                  <div className="flex-shrink-0 w-11 h-11 bg-[rgba(0,180,216,0.14)] border border-[rgba(0,180,216,0.28)] rounded-xl flex items-center justify-center text-xl">{p.icon}</div>
                  <div>
                    <div className="font-black text-white mb-1">{p.t}</div>
                    <div className="text-white/55 text-sm leading-relaxed">{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              {[
                { n: 1, t: t('why.steps.0.title'), d: t('why.steps.0.desc') },
                { n: 2, t: t('why.steps.1.title'), d: t('why.steps.1.desc') },
                { n: 3, t: t('why.steps.2.title'), d: t('why.steps.2.desc') },
                { n: 4, t: t('why.steps.3.title'), d: t('why.steps.3.desc') },
                { n: 5, t: t('why.steps.4.title'), d: t('why.steps.4.desc') },
              ].map((s, i) => (
                <div key={s.n} className={`flex gap-4 relative fade-up ${i < 4 ? "pb-7" : ""}`}>
                  {i < 4 && <div className="absolute left-[17px] top-10 w-0.5 bottom-0 bg-gradient-to-b from-[rgba(0,180,216,0.45)] to-[rgba(0,180,216,0.02)]"/>}
                  <div className="flex-shrink-0 w-9 h-9 bg-[#0096C7] rounded-full flex items-center justify-center text-white font-black text-sm">{s.n}</div>
                  <div>
                    <div className="font-black text-white text-sm mb-1">{s.t}</div>
                    <div className="text-white/50 text-sm leading-relaxed">{s.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TARGETS */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[rgba(0,150,199,0.08)] text-[#0096C7] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">{t('targets.badge')}</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-3">{t('targets.title')} <span className="text-[#0096C7]">{t('targets.titleHighlight')}</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">{t('targets.subtitle')}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "💻", name: t('targets.items.0.name'), desc: t('targets.items.0.desc') },
              { icon: "🔨", name: t('targets.items.1.name'), desc: t('targets.items.1.desc') },
              { icon: "🛒", name: t('targets.items.2.name'), desc: t('targets.items.2.desc') },
              { icon: "🚚", name: t('targets.items.3.name'), desc: t('targets.items.3.desc') },
              { icon: "🚀", name: t('targets.items.4.name'), desc: t('targets.items.4.desc') },
              { icon: "📋", name: t('targets.items.5.name'), desc: t('targets.items.5.desc') },
              { icon: "🍽️", name: t('targets.items.6.name'), desc: t('targets.items.6.desc') },
              { icon: "🏘️", name: t('targets.items.7.name'), desc: t('targets.items.7.desc') },
            ].map((item, i) => (
              <div key={item.name} className="bg-white hover:bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,150,199,0.12)] fade-up">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <div className="font-black text-[#0A1628] text-sm mb-1">{item.name}</div>
                <div className="text-gray-400 text-xs">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  );
}
