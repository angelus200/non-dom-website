"use client";
import { useEffect } from "react";
import Link from "next/link";

const apps = [
  { icon: "💼", name: "Business Angel App", url: "businessangel.app", href: "https://www.businessangel.app", tags: ["Investment", "Deal-Flow", "KI-Matching"] },
  { icon: "🏢", name: "ImmoPortal", url: "immoportal.app", href: "https://portal.immoportal.app", tags: ["Immobilien", "Refinanzierung", "KI-Analyse"] },
  { icon: "🤖", name: "Buchhaltung KI", url: "buchhaltung-ki.app", href: "https://www.buchhaltung-ki.app", tags: ["Buchhaltung", "DATEV", "Automatisierung"] },
  { icon: "📦", name: "E-Commerce Rente", url: "ecommercerente.com", href: "https://www.ecommercerente.com", tags: ["Amazon FBA", "Passives Einkommen", "B2B"] },
  { icon: "🔧", name: "Unternehmensoptimierung", url: "unternehmensoptimierung.app", href: "https://www.unternehmensoptimierung.app", tags: ["Holding", "Vermögensschutz"] },
  { icon: "✨", name: "Weitere KI-Apps", url: "In Entwicklung", href: null, tags: ["Coming Soon"], disabled: true },
];

const features = [
  { icon: "🔍", title: "KI-Unternehmensanalyse", desc: "Vollautomatische Analyse mit konkreten Handlungsempfehlungen in Echtzeit." },
  { icon: "📄", title: "Dokumenten-KI", desc: "Verträge, Rechnungen, Formulare — klassifiziert und verarbeitet automatisch." },
  { icon: "🧠", title: "KI-Berater 24/7", desc: "Persönlicher KI-Berater für steuerliche, rechtliche und operative Fragen." },
  { icon: "⚡", title: "Automatisierte Workflows", desc: "Einmal konfigurieren, dauerhaft automatisieren. Repetitive Aufgaben entfallen." },
  { icon: "📊", title: "Zentrales Dashboard", desc: "Alle KPIs, Daten und KI-Auswertungen in einem übersichtlichen Command Center." },
  { icon: "🛡️", title: "DSGVO-konform", desc: "Ihre Daten bleiben in Deutschland. ISO-zertifizierte Infrastruktur." },
];

const targets = [
  { icon: "💻", name: "Selbstständige", desc: "Automatisierung vom ersten Tag" },
  { icon: "🔨", name: "Handwerk", desc: "Digitalisierung leicht gemacht" },
  { icon: "🛒", name: "E-Commerce", desc: "Skalierung mit KI-Power" },
  { icon: "🚚", name: "Transport", desc: "Logistik & Routen optimieren" },
  { icon: "🚀", name: "Startups", desc: "Investor-Matching & Funding" },
  { icon: "📋", name: "Berater", desc: "KI als strategischen Partner" },
  { icon: "🍽️", name: "Gastronomie", desc: "Kosten senken, Prozesse straffen" },
  { icon: "🏘️", name: "Immobilien", desc: "Portfolio analysieren & optimieren" },
];

const steps = [
  { n: 1, t: "Kostenlos registrieren", d: "In 2 Minuten angemeldet. Keine Kreditkarte." },
  { n: 2, t: "Unternehmensprofil anlegen", d: "KI analysiert Ihre Branche und erstellt ein personalisiertes Optimierungsprofil." },
  { n: 3, t: "Plattformen aktivieren", d: "Die relevanten KI-Plattformen auswählen — einzeln oder im Bundle." },
  { n: 4, t: "Workflows automatisieren", d: "KI übernimmt repetitive Aufgaben und optimiert täglich." },
  { n: 5, t: "Ergebnisse messen", d: "ROI im Dashboard sehen. Erste Ergebnisse nach 48 Stunden." },
];

export default function Home() {
  useEffect(() => {
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
  }, []);

  return (
    <>
      {/* HERO */}
      <section className="bg-gradient-to-br from-[#0A1628] via-[#0D1F3C] to-[#0a2a4a] py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-50" style={{backgroundImage:"radial-gradient(circle at 20% 50%, rgba(0,180,216,0.14) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(0,150,199,0.09) 0%, transparent 40%)"}}/>
        <div className="absolute inset-0" style={{backgroundImage:"linear-gradient(rgba(0,180,216,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,216,0.04) 1px, transparent 1px)", backgroundSize:"52px 52px", WebkitMaskImage:"radial-gradient(ellipse 90% 90% at 50% 50%, black 30%, transparent 100%)"}}/>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-[rgba(0,180,216,0.18)] border border-[rgba(0,180,216,0.35)] px-4 py-1.5 rounded-full text-[#48CAE4] text-xs font-semibold mb-5">
              ✦ Deutschlands #1 KI Mittelstands-Plattform
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mb-5">
              Der #1 <span className="text-[#00B4D8]">Unternehmer</span><br/>Marktplatz
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
              KI-gestützte Plattformen, automatisierte Workflows und ein Netzwerk aus 32+ europäischen Unternehmen — ab sofort kostenlos.
            </p>
            <div className="flex gap-3 flex-wrap mb-10">
              <a href="https://non-dom.group/mitglied-werden" target="_blank" rel="noopener noreferrer"
                className="bg-[#0096C7] hover:bg-[#0077B6] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,150,199,0.5)]">
                👥 Jetzt Mitglied werden →
              </a>
              <Link href="/loesungen"
                className="border-2 border-[rgba(0,180,216,0.45)] text-[#48CAE4] hover:border-[#00B4D8] hover:bg-[rgba(0,180,216,0.08)] px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200">
                Alle Lösungen ansehen
              </Link>
            </div>
            <div className="flex gap-8 flex-wrap">
              {[["32+","Unternehmen"],["5","KI-Plattformen"],["€0","Basis-Mitgliedschaft"],["48h","Erste Ergebnisse"]].map(([n,l]) => (
                <div key={l}>
                  <span className="block text-[1.9rem] font-black text-[#00B4D8] tracking-tight leading-none">{n}</span>
                  <span className="text-white/55 text-xs mt-0.5 block">{l}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Hero Card */}
          <div className="hidden lg:block bg-white/5 border border-[rgba(0,180,216,0.2)] rounded-2xl p-7 backdrop-blur-sm">
            <div className="text-white font-bold text-lg mb-5">🚀 Unsere KI-Plattformen</div>
            {apps.filter(a => !a.disabled).map((app) => (
              <a key={app.name} href={app.href!} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-white/[0.04] hover:bg-[rgba(0,180,216,0.12)] border border-[rgba(0,180,216,0.1)] hover:border-[rgba(0,180,216,0.28)] rounded-xl p-3 mb-2.5 text-white transition-all duration-200 group">
                <span className="text-2xl flex-shrink-0">{app.icon}</span>
                <div>
                  <div className="font-bold text-sm">{app.name}</div>
                  <div className="text-white/50 text-xs mt-0.5">{app.tags.join(" · ")}</div>
                </div>
                <span className="ml-auto text-[#00B4D8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNER */}
      <section className="py-8 px-4 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-xs tracking-[3px] uppercase text-gray-400 font-semibold mb-5">Medien, Partner & Zertifizierungen</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            {[
              { name: "Fit for Fun", url: "https://www.fitforfun.de", logo: "/logos/fitforfun.webp" },
              { name: "Forbes", url: "https://www.forbes.com", logo: "/logos/forbes.webp" },
              { name: "Focus Online", url: "https://www.focus.de", logo: "/logos/focus.webp" },
              { name: "KfW Partner", url: "https://www.kfw.de", logo: "/logos/kfw.webp" },
              { name: "Handelskammer D-CH", url: "https://www.handelskammer-d-ch.de", logo: "/logos/handelskammer.webp" },
              { name: "Business Angels Deutschland", url: "https://www.business-angels.de", logo: "/logos/band.webp" },
              { name: "Swiss Startup Association", url: "https://www.swissstartup.ch", logo: "/logos/swiss-startup.webp" },
              { name: "Brands Wanted", url: "https://www.brandswanted.com", logo: "/logos/brands-wanted.webp" },
              { name: "Unternehmen der Zukunft", url: "https://www.diind.de", logo: "/logos/unternehmen-zukunft.webp" },
            ].map(p => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-105">
                <img src={p.logo} alt={p.name} className="h-8 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* APPS */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="inline-block bg-[rgba(0,150,199,0.08)] text-[#0096C7] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">KI-Ökosystem</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-3">Unsere <span className="text-[#0096C7]">5 spezialisierten</span> Plattformen</h2>
            <p className="text-gray-500 max-w-xl leading-relaxed">Jede Plattform löst ein konkretes Mittelstandsproblem — gemeinsam das vollständigste Unternehmer-Ökosystem Deutschlands.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {apps.map((app, i) => {
              const Card = (
                <div className={`bg-white border-[1.5px] ${app.disabled ? "border-gray-200 opacity-40" : "border-gray-200 hover:border-[#0096C7] hover:shadow-[0_8px_28px_rgba(0,150,199,0.15)] hover:-translate-y-0.5 cursor-pointer"} rounded-2xl p-6 transition-all duration-300 relative overflow-hidden fade-up`}>
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#00B4D8] to-[#0096C7] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"/>
                  {app.disabled && <span className="absolute top-3 right-3 bg-gray-100 text-gray-400 text-[0.65rem] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Demnächst</span>}
                  {!app.disabled && <span className="float-right text-[#0096C7] text-sm">↗</span>}
                  <span className="text-3xl mb-3 block">{app.icon}</span>
                  <div className="font-black text-[#0A1628] text-base mb-1">{app.name}</div>
                  <div className="text-[#0096C7] text-xs font-semibold mb-3">{app.url}</div>
                  <div className="flex gap-1.5 flex-wrap">
                    {app.tags.map(t => <span key={t} className="text-[0.67rem] font-bold bg-[rgba(0,150,199,0.08)] border border-[rgba(0,150,199,0.2)] text-[#0096C7] px-2.5 py-0.5 rounded-full">{t}</span>)}
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[rgba(0,150,199,0.08)] text-[#0096C7] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">KI-Technologie</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-3">Intelligenz, die für Sie <span className="text-[#0096C7]">arbeitet</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">DSGVO-konform, speziell für den deutschen Mittelstand — sofort einsatzbereit.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
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
      <section className="py-20 px-4 bg-[#0A1628] relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(circle at 80% 50%, rgba(0,180,216,0.11) 0%, transparent 55%)"}}/>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">Warum NON DOM Group</span>
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-10">Das smarteste System für den <span className="text-[#00B4D8]">Mittelstand</span></h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="flex flex-col gap-6">
              {[
                { icon: "🏆", t: "Europäisches Netzwerk", d: "32+ Unternehmen in ganz Europa — einzigartiges Know-how und Netzwerkeffekte." },
                { icon: "💡", t: "Spezialisierte KI-Plattformen", d: "Jede Plattform löst echte Mittelstandsprobleme mit modernster KI — keine Generallösung." },
                { icon: "🔗", t: "Vollständige Integration", d: "Ein Login, ein Dashboard — alle Plattformen kommunizieren miteinander." },
                { icon: "💰", t: "Unschlagbares Preis-Leistungs-Verhältnis", d: "Basis-Mitgliedschaft kostenlos. Premium ab einem Bruchteil vergleichbarer Lösungen." },
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
              {steps.map((s, i) => (
                <div key={s.n} className={`flex gap-4 relative fade-up ${i < steps.length - 1 ? "pb-7" : ""}`}>
                  {i < steps.length - 1 && <div className="absolute left-[17px] top-10 w-0.5 bottom-0 bg-gradient-to-b from-[rgba(0,180,216,0.45)] to-[rgba(0,180,216,0.02)]"/>}
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
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-[rgba(0,150,199,0.08)] text-[#0096C7] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-3">Zielgruppen</span>
            <h2 className="text-3xl lg:text-4xl font-black text-[#0A1628] tracking-tight mb-3">Für jeden Unternehmer die <span className="text-[#0096C7]">passende Lösung</span></h2>
            <p className="text-gray-500 max-w-xl mx-auto leading-relaxed">Ob Einzelunternehmer oder Mittelständler — unsere KI-Plattform passt sich Ihrer Branche an.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {targets.map((t, i) => (
              <div key={t.name} className="bg-white hover:bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-xl p-5 text-center transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,150,199,0.12)] fade-up">
                <span className="text-3xl mb-2 block">{t.icon}</span>
                <div className="font-black text-[#0A1628] text-sm mb-1">{t.name}</div>
                <div className="text-gray-400 text-xs">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{background:"radial-gradient(circle at 30% 50%, rgba(255,255,255,0.07) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(255,255,255,0.05) 0%, transparent 50%)"}}/>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl lg:text-4xl font-black text-white tracking-tight mb-3">Bereit für den smarten<br/>Unternehmer-Marktplatz?</h2>
          <p className="text-white/80 text-base mb-8">Kostenlos registrieren. Erste Ergebnisse in 48 Stunden. Kein Risiko.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a href="https://non-dom.group/mitglied-werden" target="_blank" rel="noopener noreferrer"
              className="bg-white text-[#0077B6] hover:shadow-[0_8px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200">
              👥 Jetzt kostenlos Mitglied werden →
            </a>
            <Link href="/kontakt"
              className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-200">
              Beratungsgespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
