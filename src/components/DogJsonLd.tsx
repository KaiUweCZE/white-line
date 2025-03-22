'use client';

import { StaticImageData } from 'next/image';
import JsonLd from './JsonLd';

interface DogSchemaProps {
  dog: {
    name?: string;
    kennel?: string;
    breed?: string;
    description?: string;
    img?: string | StaticImageData;
    titles?: string[];
    races?: { date: string; name: string; result: string }[];
    contests?: { date: string; name: string; grade: string }[];
    health?: string[];
    registration?: string;
    birth?: string;
  };
}

export default function DogJsonLd({ dog }: DogSchemaProps) {
  const dogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${dog.name} ${dog.kennel ? dog.kennel : ''} - ${dog.breed}`,
    description: dog.description || `${dog.breed} z chovatelské stanice Whiteline Czech`,
    image: dog.img,
    brand: {
      '@type': 'Brand',
      name: 'Whiteline Czech',
    },
    // Registrační číslo jako produktové ID - důležité pro vyhledávače
    productID: dog.registration,
    // Pokud existuje číslo zápisu, přidejme ho jako sku
    sku: dog.registration || `dog-${dog.name?.toLowerCase().replace(/\s+/g, '-')}`,
    category: dog.breed,
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock', // nebo OutOfStock
      price: '0', // Můžeš použít 0 pokud pes není na prodej
      priceCurrency: 'CZK',
      url: `https://whitelineczech.com/nasi-psi/${encodeURIComponent(
        dog.name?.toLowerCase() || ''
      )}`,
    },
    additionalProperty: [
      // Datum narození
      ...(dog.birth
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Datum narození',
              value: dog.birth,
            },
          ]
        : []),
      // Tituly
      ...(dog.titles?.map((title) => ({
        '@type': 'PropertyValue',
        name: 'Titul',
        value: title,
      })) || []),
      // Zdravotní testy
      ...(dog.health?.map((health) => ({
        '@type': 'PropertyValue',
        name: 'Zdravotní test',
        value: health,
      })) || []),
      // Závodní výsledky (pouze top 3)
      ...(dog.races?.slice(0, 3).map((race) => ({
        '@type': 'PropertyValue',
        name: 'Závod',
        value: `${race.date} - ${race.name}: ${race.result}`,
      })) || []),
    ],
  };

  return <JsonLd data={dogSchema} />;
}
