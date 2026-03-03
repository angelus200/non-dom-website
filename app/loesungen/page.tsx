import Link from "next/link";

const apps = [
  { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/a2d19a68-3aec-422e-6d2b-b4087c2e7d00/public", name: "Business Angel App", url: "businessangel.app", href: "https://www.businessangel.app", tags: ["Investment", "Deal-Flow", "KI-Matching"], desc: "Verbinden Sie sich mit Business Angels, optimieren Sie Ihren Deal-Flow und finden Sie durch KI-Matching die richtigen Investoren für Ihr Unternehmen." },
  { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/80501913-9d72-4804-335e-de63063c1800/public", name: "ImmoPortal", url: "immoportal.app", href: "https://portal.immoportal.app", tags: ["Immobilien", "Refinanzierung", "KI-Analyse"], desc: "KI-gestützte Immobilienanalyse, automatisierte Bewertungen und smarte Refinanzierungsstrategien für Ihr Immobilienportfolio." },
  { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/c582d6ad-dd7a-4aed-584f-5e9ace690900/public", name: "Buchhaltung KI", url: "buchhaltung-ki.app", href: "https://www.buchhaltung-ki.app", tags: ["Buchhaltung", "DATEV", "Automatisierung"], desc: "Vollautomatische Buchhaltung mit DATEV-Integration. Rechnungen, Belege und Jahresabschluss — von der KI erledigt." },
  { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/0201a548-ba53-4eb9-d265-183dc763d400/public", name: "E-Commerce Rente", url: "ecommercerente.com", href: "https://www.ecommercerente.com", tags: ["Amazon FBA", "Passives Einkommen", "B2B"], desc: "Aufbau eines automatisierten Amazon FBA-Business als passives Einkommensmodell — mit KI-optimierter Produktauswahl." },
  { icon: "https://imagedelivery.net/rk4bV2CWwt-By7i6uzvaLA/960202a1-985a-49ef-c707-22ca49543100/public", name: "Unternehmensoptimierung", url: "unternehmensoptimierung.app", href: "https://www.unternehmensoptimierung.app", tags: ["Holding", "Vermögensschutz", "Optimierung"], desc: "Strukturierung Ihrer Unternehmensgruppe als Holding, Vermögensschutz und steuerliche Optimierung durch KI-Analyse." },
];

export default function Loesungen() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#0D1F3C] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4">KI-Ökosystem</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Unsere <span className="text-[#00B4D8]">Lösungen</span></h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto leading-relaxed">5 spezialisierte KI-Plattformen — jede löst ein konkretes Mittelstandsproblem.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-6">
          {apps.map((app) => (
            <a key={app.name} href={app.href} target="_blank" rel="noopener noreferrer"
              className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-2xl p-8 flex flex-col lg:flex-row gap-6 items-start transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,150,199,0.12)] group">
              {app.icon.startsWith('http') ? (
                <img src={app.icon} className="w-16 h-16 rounded-xl object-cover flex-shrink-0" alt={app.name} />
              ) : (
                <div className="text-5xl flex-shrink-0">{app.icon}</div>
              )}
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
                  {app.tags.map(t => <span key={t} className="text-xs font-bold bg-[rgba(0,150,199,0.08)] border border-[rgba(0,150,199,0.2)] text-[#0096C7] px-3 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="py-16 px-4 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">Alle Plattformen kostenlos testen</h2>
          <p className="text-white/80 mb-6">€0 Basis-Mitgliedschaft. Sofort starten.</p>
          <a href="https://non-dom.group/mitglied-werden" target="_blank" rel="noopener noreferrer"
            className="inline-block bg-white text-[#0077B6] hover:-translate-y-0.5 hover:shadow-xl px-8 py-3.5 rounded-xl font-bold transition-all duration-200">
            👥 Jetzt Mitglied werden →
          </a>
        </div>
      </section>
    </>
  );
}
