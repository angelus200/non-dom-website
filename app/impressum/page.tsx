export default function Impressum() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-black text-[#0A1628] mb-2">Impressum</h1>
        <div className="w-16 h-1 bg-[#0096C7] rounded mb-8"/>
        <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed">
          <p className="mb-4">Angaben gemäß § 5 TMG</p>
          <p className="mb-6">
            <strong className="text-[#0A1628]">NON DOM Group</strong><br/>
            Für vollständige Impressumsangaben besuchen Sie bitte:<br/>
            <a href="https://non-dom.group/impressum" target="_blank" rel="noopener noreferrer" className="text-[#0096C7] hover:underline">
              https://non-dom.group/impressum
            </a>
          </p>
          <h2 className="text-lg font-black text-[#0A1628] mt-8 mb-3">Kontakt</h2>
          <p className="mb-4">Telefon: 0800 70 800 44<br/>Telegram: @nondomgroup</p>
          <h2 className="text-lg font-black text-[#0A1628] mt-8 mb-3">Haftungsausschluss</h2>
          <p className="mb-4">Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
        </div>
      </div>
    </section>
  );
}
