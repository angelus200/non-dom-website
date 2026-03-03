"use client";
import {Link} from "@/i18n/routing";
import {useTranslations} from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-[#0A1628] border-t-4 border-[#0096C7] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/logos/non-dom-logo.webp" alt="NON DOM GROUP" className="h-10 w-auto" />
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-[270px]">
              {t('description')}
            </p>
            <div className="mt-5 flex flex-col gap-2">
              <a href={`tel:${t('phone')}`} className="text-[#48CAE4] text-sm hover:opacity-70 transition-opacity">📞 {t('phone')}</a>
              <a href="https://t.me/nondomgroup" target="_blank" rel="noopener noreferrer" className="text-[#48CAE4] text-sm hover:opacity-70 transition-opacity">💬 {t('telegram')}</a>
              <Link href="/kontakt" className="text-[#48CAE4] text-sm hover:opacity-70 transition-opacity">✉️ {t('contactForm')}</Link>
            </div>
            <div className="mt-5 flex gap-4">
              <a href="https://www.linkedin.com/company/non-dom-group/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/nondomgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00B4D8] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Plattformen */}
          <div>
            <h4 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">{t('platforms')}</h4>
            {[
              { href: "https://www.businessangel.app", label: "Business Angel App" },
              { href: "https://portal.immoportal.app", label: "ImmoPortal" },
              { href: "https://www.buchhaltung-ki.app", label: "Buchhaltung KI" },
              { href: "https://www.ecommercerente.com", label: "E-Commerce Rente" },
              { href: "https://www.unternehmensoptimierung.app", label: "Unternehmensoptimierung" },
            ].map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                className="block text-white/50 hover:text-white text-sm mb-2 transition-colors duration-200">
                {l.label}
              </a>
            ))}
          </div>

          {/* Unternehmen */}
          <div>
            <h4 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">{t('company')}</h4>
            <Link href="/kontakt" className="block text-white/50 hover:text-white text-sm mb-2 transition-colors duration-200">
              {t('contact')}
            </Link>
            <a href="https://t.me/nondomgroup" target="_blank" rel="noopener noreferrer" className="block text-white/50 hover:text-white text-sm mb-2 transition-colors duration-200">
              {t('telegramCommunity')}
            </a>
          </div>

          {/* Rechtliches */}
          <div>
            <h4 className="text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-4">{t('legal')}</h4>
            <Link href="/impressum" className="block text-white/50 hover:text-white text-sm mb-2 transition-colors duration-200">
              {t('imprint')}
            </Link>
            <Link href="/datenschutz" className="block text-white/50 hover:text-white text-sm mb-2 transition-colors duration-200">
              {t('privacy')}
            </Link>
            <Link href="/agb" className="block text-white/50 hover:text-white text-sm mb-2 transition-colors duration-200">
              {t('terms')}
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-white/35 text-xs">{t('copyright')}</span>
          <div className="flex gap-5">
            <Link href="/impressum" className="text-white/35 hover:text-[#00B4D8] text-xs transition-colors duration-200">
              {t('imprint')}
            </Link>
            <Link href="/datenschutz" className="text-white/35 hover:text-[#00B4D8] text-xs transition-colors duration-200">
              {t('privacy')}
            </Link>
            <Link href="/agb" className="text-white/35 hover:text-[#00B4D8] text-xs transition-colors duration-200">
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
