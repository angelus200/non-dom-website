import "../globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {getTranslations} from 'next-intl/server';

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'metadata'});

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: "https://app.non-dom.group",
      siteName: t('siteName'),
      locale: locale === 'de' ? 'de_DE' : 'en_US',
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
