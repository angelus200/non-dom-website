export default function AGB() {
  return (
    <div className="min-h-screen bg-[#0A1628] text-white py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
        <p className="text-gray-400 mb-10">Marketplace24-7 GmbH / non-dom.group · Stand: Juni 2025</p>
        <div className="space-y-8 text-gray-300 leading-relaxed">
          {[
            { title: "1. Geltungsbereich", content: "Diese AGB gelten für alle Verträge über Beratungs-, Analyse-, Strukturierungs- oder Projektleistungen zwischen der Marketplace24-7 GmbH (im Folgenden: „Beraterin") und dem jeweiligen Vertragspartner (im Folgenden: „Mandant"), unabhängig von Medium oder Form der Beauftragung (online, schriftlich, digital oder mündlich bestätigt)." },
            { title: "2. Leistungsgegenstand", content: "Die Beraterin erbringt strategische, wirtschaftliche, rechtliche und steuernahe Beratungsleistungen in folgenden Kernbereichen: Internationale Unternehmensstrukturierung, Gründung, Holding-Setups, Standortverlagerung, Vermögensschutz- & Private-Market-Konzepte, Investorenstrukturen, Anleihen, Trusts, Concierge-Leistungen & Sonderprojekte. Ein konkreter Leistungsumfang ergibt sich entweder aus Einzelangeboten, Leistungsbeschreibungen, E-Mail-Bestätigungen oder Ticketsystemen der Plattform. Die Leistungen stellen keine Steuer- oder Rechtsberatung im engeren Sinne dar, sofern dies nicht ausdrücklich durch entsprechend qualifizierte Partner erfolgt." },
            { title: "3. Vergütung & Abrechnung", content: "Die Leistungen werden auf Stundenbasis vergütet. Abgerechnet wird monatlich, auf Basis protokollierter Arbeitszeiten. Einwände gegen Rechnungen müssen binnen 7 Kalendertagen schriftlich erfolgen. Alle Preise verstehen sich netto, zuzüglich allfälliger gesetzlicher Mehrwertsteuer." },
            { title: "4. Mitwirkungspflichten des Mandanten", content: "Der Mandant verpflichtet sich, der Beraterin alle zur Durchführung erforderlichen Informationen, Dokumente und Mitwirkungsleistungen rechtzeitig zur Verfügung zu stellen. Verzögerungen infolge mangelnder Mitwirkung führen nicht zu Fristverschiebungen und begründen keine Haftung." },
            { title: "5. Geheimhaltung & Datenschutz", content: "Beide Parteien verpflichten sich zur strikten Vertraulichkeit aller Informationen, Dokumente, Geschäftsprozesse und Daten aus der Zusammenarbeit. Die Geheimhaltungspflicht gilt auch nach Vertragsende unbefristet. Die Erfassung und Verarbeitung personenbezogener Daten erfolgt DSGVO-konform." },
            { title: "6. Haftung", content: "Die Beraterin haftet nur bei vorsätzlicher oder grob fahrlässiger Pflichtverletzung. Eine Haftung für Folgeschäden, entgangenen Gewinn oder mittelbare Schäden ist ausgeschlossen. Der Mandant trägt die Verantwortung für unternehmerische Entscheidungen, die auf Basis von Empfehlungen der Beraterin getroffen werden." },
            { title: "7. Kündigung & Beendigung", content: "Beide Parteien können das Mandatsverhältnis mit 14 Tagen Frist schriftlich kündigen, sofern keine abweichende Regelung getroffen wurde. Bereits erbrachte Leistungen bis zum Kündigungszeitpunkt sind voll vergütungspflichtig." },
            { title: "8. Schiedsgerichtsbarkeit", content: "Alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag unterliegen ausschließlich der Internationalen Schweizerischen Schiedsordnung (Swiss Rules 2021). Das Schiedsgericht besteht aus einem Einzelschiedsrichter. Sitz: Zürich, Schweiz – Sprache: Deutsch – Recht: Schweizer OR." },
            { title: "9. Schlussbestimmungen", content: "Nebenabreden bedürfen der Schriftform. Sollten einzelne Bestimmungen unwirksam sein, bleibt die Wirksamkeit der übrigen unberührt. Erfüllungsort ist Freienbach SZ, Schweiz." },
          ].map((section) => (
            <div key={section.title} className="bg-white/5 rounded-2xl p-6">
              <h2 className="text-lg font-bold text-white mb-3">{section.title}</h2>
              <p>{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
