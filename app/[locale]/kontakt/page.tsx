export default function Kontakt() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A1628] to-[#0D1F3C] py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block bg-[rgba(0,180,216,0.18)] text-[#48CAE4] text-xs font-bold tracking-[3px] uppercase px-3 py-1 rounded-full mb-4">Kontakt</span>
          <h1 className="text-4xl lg:text-5xl font-black text-white tracking-tight mb-4">Sprechen Sie mit <span className="text-[#00B4D8]">uns</span></h1>
          <p className="text-white/65 text-lg max-w-xl mx-auto">Wir helfen Ihnen den richtigen Einstieg in die KI-Welt zu finden.</p>
        </div>
      </section>
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-black text-[#0A1628] mb-6">Kontaktmöglichkeiten</h2>
            <div className="flex flex-col gap-4">
              {[
                { icon: "📞", title: "Kostenlose Hotline", info: "0800 70 800 44", sub: "Mo–Fr 9:00–18:00 Uhr", href: "tel:080070800044" },
                { icon: "💬", title: "Telegram Community", info: "@nondomgroup", sub: "Direkte Antwort in der Community", href: "https://t.me/nondomgroup" },
              ].map((c) => (
                <a key={c.title} href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  className="bg-white border-[1.5px] border-gray-200 hover:border-[#0096C7] rounded-xl p-5 flex gap-4 items-center transition-all duration-200 hover:shadow-[0_4px_20px_rgba(0,150,199,0.12)]">
                  <div className="w-12 h-12 bg-[rgba(0,150,199,0.08)] rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="font-black text-[#0A1628] text-sm">{c.title}</div>
                    <div className="text-[#0096C7] font-bold text-base">{c.info}</div>
                    <div className="text-gray-400 text-xs">{c.sub}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div className="bg-white border-[1.5px] border-gray-200 rounded-2xl p-8">
            <h2 className="text-2xl font-black text-[#0A1628] mb-6">Nachricht senden</h2>
            <div className="flex flex-col gap-4">
              {[["Ihr Name","text","Max Mustermann"],["Ihre E-Mail","email","max@firma.de"],["Unternehmen","text","Musterfirma GmbH"]].map(([label,type,placeholder]) => (
                <div key={label as string}>
                  <label className="block text-sm font-bold text-[#0A1628] mb-1.5">{label as string}</label>
                  <input type={type as string} placeholder={placeholder as string} className="w-full border-[1.5px] border-gray-200 focus:border-[#0096C7] rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200"/>
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-[#0A1628] mb-1.5">Ihre Nachricht</label>
                <textarea rows={4} placeholder="Wie können wir Ihnen helfen?" className="w-full border-[1.5px] border-gray-200 focus:border-[#0096C7] rounded-lg px-4 py-2.5 text-sm outline-none transition-colors duration-200 resize-none"/>
              </div>
              <a href="https://non-dom.group/kontakt" target="_blank" rel="noopener noreferrer"
                className="w-full bg-[#0096C7] hover:bg-[#0077B6] text-white font-bold py-3 rounded-lg text-center transition-all duration-200 block">
                Nachricht senden →
              </a>
              <p className="text-gray-400 text-xs text-center">Oder nutzen Sie das offizielle <a href="https://non-dom.group/kontakt" target="_blank" rel="noopener noreferrer" className="text-[#0096C7] hover:underline">Kontaktformular</a></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
