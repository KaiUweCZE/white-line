import { type Metadata } from 'next';
import { parkinsans } from './fonts/fonts';
import './globals.css';
import Navbar from '@/ui/menu/navbar';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  metadataBase: new URL('https://whitelineczech.com'),
  title: 'Whiteline Czech | Chovatelská stanice bílého švýcarského ovčáka',
  description:
    'Chovatelská stanice Whiteline Czech - chov bílého švýcarského ovčáka s PP. Nabízíme kvalitní štěňata s průkazem původu.',
  generator: 'Next.js',
  applicationName: 'Whiteline Czech',
  referrer: 'origin-when-cross-origin',
  category: 'chovatelská stanice',
  keywords: [
    'bílý švýcarský ovčák štěňata',
    'štěňata BŠO s PP',
    'chovatelská stanice BŠO',
    'bílý švýcarský ovčák chov',
    'prodej štěňat s PP',
    'Whiteline Czech',
    'chovatelská stanice z Táborska',
    'štěňata bílého švýcarského ovčáka',
    'BŠO chovatelská stanice Jižní Čechy',
    'čistokrevná štěňata bílého švýcarského ovčáka',
    'chovatelská stanice Jižní Čechy',
    'štěňata s PP Jihočeský kraj',
    'chovný pes BŠO',
    'chovná fena BŠO',
    'chovná fena corgi',
    'welsh corgi',
  ],
  authors: [{ name: 'Whiteline Czech' }],
  creator: 'Whiteline Czech',
  publisher: 'Whiteline Czech',
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
    languages: {
      'cs-CZ': 'https://whitelineczech.com',
    },
  },
  other: {
    'format-detection': 'telephone=yes',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Whiteline Czech | Chovatelská stanice bílého švýcarského ovčáka',
    description:
      'Profesionální chovatelská stanice zaměřená na chov bílého švýcarského ovčáka s PP.',
    images: ['/images/seo/og-image.webp'],
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://whitelineczech.com',
    siteName: 'Whiteline Czech - Chovatelská stanice',
    title: 'Whiteline Czech | Profesionální chov bílého švýcarského ovčáka',
    description:
      'Profesionální chovatelská stanice zaměřená na chov bílého švýcarského ovčáka. Nabízíme zdravá štěňata s PP, kompletní chovatelský servis a poradenství.',
    images: [
      {
        url: '/images/seo/og-image.webp',
        width: 1200,
        height: 630,
        alt: 'Whiteline Czech - Bílý švýcarský ovčák',
      },
    ],
    emails: ['matej.mikulas.pise@gmail.com'],
    phoneNumbers: ['+420603219394'],
    countryName: 'Czech Republic',
  },
  verification: {
    google: 'google-site-verification=NY76x19ODko37iQ2mNf2x5RcHH6xwVt1xxjfO3ab230',
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
    logo: 'https://whitelineczech.com/images/seo/logo.webp',
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
        <Navbar />
        <main id="main-content" className="">
          {children}
        </main>
      </body>
    </html>
  );
}
