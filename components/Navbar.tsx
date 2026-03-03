"use client";
import { useState } from "react";
import {Link, usePathname} from "@/i18n/routing";
import {useLocale, useTranslations} from 'next-intl';
import {useRouter} from 'next/navigation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    router.push(`/${newLocale}${pathname}`);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b-2 border-[#00B4D8] shadow-[0_2px_20px_rgba(0,180,216,0.12)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center h-[70px] gap-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <img src="/logos/non-dom-logo.webp" alt="NON DOM GROUP" className="h-10 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1 ml-6">
          <Link
            href="/loesungen"
            className="text-[#1A2332] hover:text-[#0096C7] hover:bg-[rgba(0,150,199,0.07)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
          >
            {t('solutions')}
          </Link>
          <Link
            href="/zielgruppen"
            className="text-[#1A2332] hover:text-[#0096C7] hover:bg-[rgba(0,150,199,0.07)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
          >
            {t('targetGroups')}
          </Link>
          <Link
            href="/webinare"
            className="text-[#1A2332] hover:text-[#0096C7] hover:bg-[rgba(0,150,199,0.07)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
          >
            {t('webinars')}
          </Link>
          <Link
            href="/kontakt"
            className="text-[#1A2332] hover:text-[#0096C7] hover:bg-[rgba(0,150,199,0.07)] px-3 py-2 rounded-md text-sm font-medium transition-all duration-200"
          >
            {t('contact')}
          </Link>
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-2 ml-auto">
          {/* Language Switcher */}
          <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => switchLocale('en')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${locale === 'en' ? 'bg-[#0096C7] text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              EN
            </button>
            <button
              onClick={() => switchLocale('de')}
              className={`px-3 py-1 rounded text-xs font-bold transition-all ${locale === 'de' ? 'bg-[#0096C7] text-white' : 'text-gray-600 hover:text-gray-900'}`}
            >
              DE
            </button>
          </div>
          <a
            href={`tel:${t('phone')}`}
            className="bg-[#FF3B30] hover:bg-[#cc2e25] text-white px-4 py-2 rounded-lg text-sm font-bold transition-all duration-200"
          >
            📞 {t('phone')}
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
          <Link href="/loesungen" className="text-[#1A2332] font-medium py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
            {t('solutions')}
          </Link>
          <Link href="/zielgruppen" className="text-[#1A2332] font-medium py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
            {t('targetGroups')}
          </Link>
          <Link href="/webinare" className="text-[#1A2332] font-medium py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
            {t('webinars')}
          </Link>
          <Link href="/kontakt" className="text-[#1A2332] font-medium py-2 border-b border-gray-100" onClick={() => setOpen(false)}>
            {t('contact')}
          </Link>
          {/* Mobile Language Switcher */}
          <div className="flex gap-2 mt-2">
            <button
              onClick={() => { switchLocale('en'); setOpen(false); }}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${locale === 'en' ? 'bg-[#0096C7] text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              English
            </button>
            <button
              onClick={() => { switchLocale('de'); setOpen(false); }}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-bold transition-all ${locale === 'de' ? 'bg-[#0096C7] text-white' : 'bg-gray-100 text-gray-600'}`}
            >
              Deutsch
            </button>
          </div>
          <a href={`tel:${t('phone')}`} className="mt-2 bg-[#FF3B30] text-white text-center py-2.5 rounded-lg font-bold">
            📞 {t('phone')}
          </a>
        </div>
      )}
    </nav>
  );
}
