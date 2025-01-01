import type { Metadata } from 'next';
import { parkinsans } from './fonts/fonts';
import './globals.css';
import Navbar from '@/ui/menu/navbar';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Whiteline Czech | Chovatelská stanice bílého švýcarského ovčáka',
  description:
    'Vítejte v chovatelské stanici White Line Czech. Specializujeme se na chov bílého švýcarského ovčáka, corgi a německého ovčáka. Nabízíme štěňata s PP.',
  keywords: [
    'bílý švýcarský ovčák',
    'chovatelská stanice',
    'německý ovčák',
    'ovčák',
    'corgi',
    'štěňata',
    'štěňata s PP',
    'whiteline',
    'whiteline czech',
    'BŠO',
    'chov psů',
  ],
  authors: [{ name: 'White Line' }],
  creator: 'Whiteline Czech',
  publisher: 'Whiteline Czech',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://whitelineczech.com',
  },
  openGraph: {
    title: 'White Line | Chovatelská stanice bílého švýcarského ovčáka',
    description:
      'Profesionální chov bílého švýcarského ovčáka. Štěňata s PP, chovatelský servis a poradenství.',
    url: 'https://whitelineczech.com',
    siteName: 'Whiteline Czech',
    locale: 'cs_CZ',
    type: 'website',
  },
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
    logo: 'https://whitelineczech.com/logo.png',
    description:
      'Specializujeme se na chov bílého švýcarského ovčáka, corgi a německého ovčáka. Nabízíme štěňata s PP.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
    },
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
    areaServed: 'Czech Republic',
    availableService: [
      {
        '@type': 'Service',
        name: 'Chov bílého švýcarského ovčáka',
      },
      {
        '@type': 'Service',
        name: 'Chov corgi',
      },
      {
        '@type': 'Service',
        name: 'Chov německého ovčáka',
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
