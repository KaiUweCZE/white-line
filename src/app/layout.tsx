import { type Metadata } from 'next';
import { parkinsans } from './fonts/fonts';
import './globals.css';
import Navbar from '@/ui/menu/navbar';
import JsonLd from '@/components/JsonLd';
import dynamic from 'next/dynamic';
const SpeedInsights = dynamic(
  () => import('@vercel/speed-insights/next').then((mod) => mod.SpeedInsights),
  { ssr: true, loading: () => null }
);
const Analytics = dynamic(() => import('@vercel/analytics/react').then((mod) => mod.Analytics), {
  ssr: true,
  loading: () => null,
});

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
    'bílý švýcarský ovčák štěňata s PP',
    'chovatelská stanice BŠO Jižní Čechy',
    'welsh corgi štěňata',
    'Whiteline Czech',
    'chov psů s průkazem původu',
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
      'Profesionální chovatelská stanice zaměřená na chov bílého švýcarského ovčáka. Nabízíme zdravá štěňata s PP, kompletní chovatelský servis a poradenství.',
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
};

/**
 * RootLayout is a component that sets up the HTML structure and metadata for the website.
 * It includes various JSON-LD schemas for SEO purposes, such as organization, service,
 * and local business information. The component wraps the children elements within the
 * main content area and includes navigation and analytics components.
 *
 * @param {{ children: React.ReactNode }} props - The children elements to be rendered
 * inside the main content area.
 */
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
      postalCode: '39118',
      streetAddress: 'Choustník 8',
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Chovatelská stanice',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chov bílého švýcarského ovčáka',
            description: 'Odchov štěňat BŠO s PP',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chov corgi',
            description: 'Odchov štěňat welsh corgi s PP',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chov německého ovčáka',
            description: 'Odchov štěňat německého ovčáka s PP',
          },
        },
      ],
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://whitelineczech.com/#business',
    name: 'Whiteline Czech - Chovatelská stanice',
    image: 'https://whitelineczech.com/images/seo/logo.webp',
    telephone: '+420603219394',
    email: 'matej.mikulas.pise@gmail.com',
    url: 'https://whitelineczech.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
      addressRegion: 'Jihočeský kraj',
      addressLocality: 'Choustník',
      postalCode: '39118',
      streetAddress: 'Choustník 8',
    },
    location: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CZ',
        addressRegion: 'Jihočeský kraj',
        addressLocality: 'Choustník',
        postalCode: '39118',
        streetAddress: 'Choustník 8',
      },
    },
    priceRange: '12000-40000',
    description:
      'Profesionální chovatelská stanice zaměřená na chov bílého švýcarského ovčáka. Odchováváme 1-2 vrhy ročně s důrazem na zdraví a kvalitu štěňat.',
    // Přidej vhodné kategorie
    additionalType: [
      'http://www.productontology.org/id/Dog_breeder',
      'http://www.productontology.org/id/Animal_husbandry',
    ],
  };

  return (
    <html lang="cs" suppressHydrationWarning>
      <head>
        {/* <script crossOrigin="anonymous" src="//unpkg.com/react-scan/dist/auto.global.js" /> */}
        <JsonLd data={jsonLd} />
        <JsonLd data={breedingService} />
        <JsonLd data={localBusinessSchema} />
        <meta name="seznam-wmt" content="jgM2Oyr7TA7D79qtjDa5ZoQFmPxYWHbz" />
      </head>
      <body className={`${parkinsans.variable} font-parkinsans antialiased`}>
        <Navbar />
        <div id="main-content" className="page-wrapper">
          {children}
          <SpeedInsights />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
