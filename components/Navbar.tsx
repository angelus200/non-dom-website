"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#00B4D8] shadow-[0_2px_20px_rgba(0,180,216,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-[70px] gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logos/non-dom-logo.webp" alt="NON DOM GROUP" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 ml-6">
          {[
            { href: "/loesungen", label: "Lösungen" },
            { href: "/zielgruppen", label: "Zielgruppen" },
            { href: "/webinare", label: "Webinare" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#1A2332] hover:text-[#0096C7] hover:bg-[rgba(0,150,199,0.07)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          <a
            href="https://non-dom.group/mitglied-werden"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0096C7] hover:bg-[#0077B6] text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
          >
            👥 Mitglied Werden
          </a>
          <a
            href="https://vertrieb.non-dom.group/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0A1628] text-[#00B4D8] px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200 hover:bg-[#0D1F3C]"
          >
            🤝 Partner Werden
          </a>
          <a
            href="tel:080070800044"
            className="bg-[#FF3B30] hover:bg-[#cc2e25] text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
          >
            📞 0800 70 800 44
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden ml-auto p-2 rounded-md text-[#1A2332]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "rotate-45 translate-y-1.5" : ""}`} />
          <div className={`w-5 h-0.5 bg-current mb-1 transition-all ${open ? "opacity-0" : ""}`} />
          <div className={`w-5 h-0.5 bg-current transition-all ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 flex flex-col gap-2">
          {[
            { href: "/loesungen", label: "Lösungen" },
            { href: "/zielgruppen", label: "Zielgruppen" },
            { href: "/webinare", label: "Webinare" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((l) => (
            <Link key={l.href} href={l.href} className="text-[#1A2332] font-medium py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <a href="https://non-dom.group/mitglied-werden" target="_blank" rel="noopener noreferrer" className="mt-2 bg-[#0096C7] text-white text-center py-2.5 rounded-lg font-bold">
            👥 Mitglied Werden
          </a>
          <a href="tel:080070800044" className="bg-[#FF3B30] text-white text-center py-2.5 rounded-lg font-bold">
            📞 0800 70 800 44
          </a>
        </div>
      )}
    </nav>
  );
}
