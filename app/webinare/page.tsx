export default function Webinare() {
  const webinare = [
    { date: "Jeden Dienstag", time: "19:00 Uhr", title: "KI im Mittelstand — Einstieg & Überblick", desc: "Lernen Sie in 60 Minuten wie KI konkret in Ihrem Unternehmen eingesetzt werden kann.", tag: "Kostenlos", icon: "🧠" },
    { date: "Jeden Donnerstag", time: "18:00 Uhr", title: "Buchhaltung automatisieren mit KI", desc: "Live-Demo: Wie Sie Ihre Buchhaltung vollständig automatisieren und DATEV-konform bleiben.", tag: "Kostenlos", icon: "🤖" },
    { date: "1x monatlich", time: "17:00 Uhr", title: "Business Angel Masterclass", desc: "Für Investoren und Gründer: Deal-Flow, Bewertung, KI-Matching und Netzwerk.", tag: "Premium", icon: "💼" },
    { date: "1x monatlich", time: "19:00 Uhr", title: "Immobilien & KI — Portfoliooptimierung", desc: "KI-gestützte Analyse Ihres Immobilienportfolios und Refinanzierungsstrategien.", tag: "Premium", icon: "🏢" },
    { date: "Auf Anfrage", time: "Nach Vereinbarung", title: "1:1 Unternehmensberatung mit KI", desc: "Persönliches Beratungsgespräch für Ihre spezifischen Unternehmensherausforderungen.", tag: "Exklusiv", icon: "🎯" },
  ];

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#0D1F3C] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4">Webinare & Events</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Wissen, das <span className="text-[#00B4D8]">weiterbringt</span></h1>
          <p className="text-white/65 text-lg max-w-2xl mx-auto">Live-Webinare, Masterclasses und 1:1 Beratung — von Experten für Unternehmer.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto flex flex-col gap-5">
          {webinare.map((w) => (
            <div key={w.title} className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-2xl p-7 flex gap-5 items-start transition-all duration-200 hover:shadow-[0_8px_28px_rgba(0,150,199,0.12)]">
              <div className="text-4xl flex-shrink-0">{w.icon}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${w.tag === "Kostenlos" ? "bg-green-100 text-green-700" : w.tag === "Premium" ? "bg-[rgba(0,150,199,0.1)] text-[#0096C7]" : "bg-purple-100 text-purple-700"}`}>{w.tag}</span>
                  <span className="text-gray-400 text-xs">{w.date} · {w.time}</span>
                </div>
                <h3 className="font-black text-[#0A1628] text-lg mb-1">{w.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{w.desc}</p>
                <a href="https://non-dom.group/mitglied-werden" target="_blank" rel="noopener noreferrer"
                  className="inline-block bg-[#0096C7] hover:bg-[#0077B6] text-white text-sm font-bold px-5 py-2 rounded-lg transition-all duration-200">
                  Jetzt anmelden →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
