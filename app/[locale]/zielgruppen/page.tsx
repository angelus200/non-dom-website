const targets = [
  { icon: "💻", name: "Selbstständige & Freiberufler", desc: "Als Einzelkämpfer haben Sie wenig Zeit für Administration. Unsere KI automatisiert Buchhaltung, Rechnungsstellung und Kundenkommunikation — damit Sie sich auf Ihr Kerngeschäft konzentrieren können.", benefits: ["Automatische Rechnungsstellung", "KI-Buchhaltung ohne Steuerberater", "Zeitersparnis bis zu 15h/Woche"] },
  { icon: "🔨", name: "Handwerk & Gewerbe", desc: "Digitalisierung muss nicht kompliziert sein. Unsere Plattformen helfen Handwerksbetrieben, effizienter zu arbeiten und mehr Aufträge zu gewinnen.", benefits: ["Digitale Auftragsabwicklung", "Automatisierte Angebotserstellung", "Kundenverwaltung mit KI"] },
  { icon: "🛒", name: "E-Commerce & Handel", desc: "Skalieren Sie Ihr Online-Business mit KI-Power. Von Amazon FBA bis zur eigenen Shop-Optimierung — wir haben die passende Lösung.", benefits: ["Amazon FBA Automatisierung", "KI-Produktanalyse", "Passive Einkommensströme"] },
  { icon: "🚚", name: "Transport & Logistik", desc: "Optimieren Sie Routen, Fuhrpark und Auftragsmanagement mit intelligenter KI — und sparen Sie Kosten bei jedem Kilometer.", benefits: ["Routenoptimierung", "Flottenmanagement", "Automatisierte Auftragsverteilung"] },
  { icon: "🚀", name: "Startups & Scale-ups", desc: "Investor-Matching, Pitchdeck-Analyse und Netzwerk zu Business Angels — alles was Sie für Ihre Wachstumsphase brauchen.", benefits: ["Business Angel Matching", "KI-Pitchdeck-Analyse", "Investoren-Netzwerk"] },
  { icon: "📋", name: "Berater & Coaches", desc: "Nutzen Sie KI als strategischen Partner. Analysieren Sie Kundendaten, automatisieren Sie Berichte und gewinnen Sie mehr Klienten.", benefits: ["KI-gestützte Analysen", "Automatisierte Berichte", "Kunden-Akquise optimieren"] },
  { icon: "🍽️", name: "Gastronomie & Hotellerie", desc: "Von der Buchhaltung bis zur Mitarbeiterplanung — KI hilft Ihnen, Kosten zu senken und den Betrieb effizienter zu gestalten.", benefits: ["Kostenoptimierung", "Digitale Buchhaltung", "Mitarbeiterplanung mit KI"] },
  { icon: "🏘️", name: "Immobilien & Verwaltung", desc: "Analysieren Sie Ihr Portfolio mit KI, optimieren Sie Refinanzierungen und verwalten Sie Objekte effizienter als je zuvor.", benefits: ["Portfolio-KI-Analyse", "Refinanzierungsoptimierung", "Automatisierte Verwaltung"] },
];

export default function Zielgruppen() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#0D1F3C] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4">Zielgruppen</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Für jeden <span className="text-[#00B4D8]">Unternehmer</span></h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">Unsere KI-Plattform passt sich Ihrer Branche und Unternehmensgröße an.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
          {targets.map((t) => (
            <div key={t.name} className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-2xl p-7 transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,150,199,0.12)]">
              <div className="text-4xl mb-3">{t.icon}</div>
              <h3 className="font-black text-[#0A1628] text-xl mb-2">{t.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{t.desc}</p>
              <ul className="flex flex-col gap-1.5">
                {t.benefits.map(b => (
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
