import type { Metadata } from 'next';
import { parkinsans } from './fonts/fonts';
import './globals.css';
import Navbar from '@/ui/menu/navbar';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://whitelineczech.com'),
  title: 'Whiteline Czech | Chovatelská stanice bílého švýcarského ovčáka',
  description:
    'Chovatelská stanice Whiteline Czech - chov bílého švýcarského ovčáka s PP. Nabízíme kvalitní štěňata s průkazem původu.',
  keywords: [
    'bílý švýcarský ovčák štěňata',
    'štěňata BŠO s PP',
    'chovatelská stanice BŠO',
    'bílý švýcarský ovčák chov',
    'prodej štěňat s PP',
    'White Line Czech',
    'chovatelská stanice z Táborska',
    'štěňata bílého švýcarského ovčáka',
    'BŠO chovatelská stanice',
  ],
  authors: [{ name: 'White Line Czech' }],
  creator: 'White Line Czech',
  publisher: 'White Line Czech',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://whitelineczech.com',
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://whitelineczech.com',
    siteName: 'White Line Czech - Chovatelská stanice',
    title: 'White Line Czech | Profesionální chov bílého švýcarského ovčáka',
    description:
      'Profesionální chovatelská stanice zaměřená na chov bílého švýcarského ovčáka. Nabízíme zdravá štěňata s PP, kompletní chovatelský servis a poradenství.',
    images: [
      {
        url: '/assets/images/seo/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'White Line Czech - Bílý švýcarský ovčák',
      },
    ],
  },
  verification: {
    google: 'váš-google-verification-code', // Přidejte po verifikaci v Google Search Console
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#ffffff',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Whiteline Czech',
    url: 'https://whitelineczech.com',
    logo: 'https://whitelineczech.com/assets/images/seo/logo.webp',
    description:
      'Profesionální chovatelská stanice zaměřená na chov bílého švýcarského ovčáka s PP.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
      addressRegion: 'Jihočeský kraj',
      addressLocality: 'Choustník',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+420603219394',
      contactType: 'customer service',
      availableLanguage: ['Czech', 'English'],
    },
    sameAs: ['https://www.facebook.com/search/top?q=whiteline%20czech'],
  };

  const breedingService = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Dog Breeding',
    provider: {
      '@type': 'Organization',
      name: 'Whiteline Czech',
    },
    description: 'Profesionální chov psů s PP - bílý švýcarský ovčák, corgi, německý ovčák',
    areaServed: {
      '@type': 'Country',
      name: 'Czech Republic',
    },
    availableService: [
      {
        '@type': 'Service',
        name: 'Chov bílého švýcarského ovčáka',
        description: 'Odchov štěňat BŠO s PP',
      },
      {
        '@type': 'Service',
        name: 'Chov corgi',
        description: 'Odchov štěňat welsh corgi s PP',
      },
      {
        '@type': 'Service',
        name: 'Chov německého ovčáka',
        description: 'Odchov štěňat německého ovčáka s PP',
      },
    ],
  };

  return (
    <html lang="cs">
      <head>
        <JsonLd data={jsonLd} />
        <JsonLd data={breedingService} />
      </head>
      <body className={`${parkinsans.variable} font-parkinsans antialiased`}>
        <a href="#main-content" className="sr-only focus:not-sr-only">
          Přeskočit na hlavní obsah
        </a>
        <Navbar />
        <main id="main-content" className="">
          {children}
        </main>
        {/* <footer className="bg-stone-950 text-white py-8">
          <div className="container mx-auto">
            <p className="text-center">&copy; {new Date().getFullYear()} Whiteline Czech. Všechna práva vyhrazena.</p>
          </div>
        </footer> */}
      </body>
    </html>
  );
}
