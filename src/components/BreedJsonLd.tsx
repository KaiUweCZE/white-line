'use client';

import { StaticImageData } from 'next/image';
import JsonLd from './JsonLd';

interface BreedJsonLdProps {
  breed: {
    id: string;
    name: string;
    father:
      | {
          name: string;
          images?: string | StaticImageData;
          physical?: string[];
          health?: string[];
          titles?: string[];
        }
      | string;
    mother:
      | {
          name: string;
          images?: string | StaticImageData;
          physical?: string[];
          health?: string[];
          titles?: string[];
        }
      | string;
    females?: { name: string; images?: (string | StaticImageData)[] }[] | string[] | null;
    males?: { name: string; images?: (string | StaticImageData)[] }[] | string[];
    birth?: string;
    img?: string | StaticImageData;
  };
}

export default function BreedJsonLd({ breed }: BreedJsonLdProps) {
  // Zpracování různých formátů dat
  const fatherName = typeof breed.father === 'string' ? breed.father : breed.father.name;
  const motherName = typeof breed.mother === 'string' ? breed.mother : breed.mother.name;

  // Zpracování štěňat podle formátu
  const processedFemales = breed.females
    ? breed.females.map((f) => (typeof f === 'string' ? f : f.name))
    : [];

  const processedMales = breed.males
    ? breed.males.map((m) => (typeof m === 'string' ? m : m.name))
    : [];

  const breedType =
    breed.id[0] === 's'
      ? 'švýcarský ovčák'
      : breed.id[0] === 'c'
      ? 'welsh corgi cardigan'
      : 'německý ovčák';

  const litterDescription = `${
    breed.name
  } - odchov plemene ${breedType}. Otec: ${fatherName}, matka: ${motherName}. ${
    breed.birth ? `Datum narození: ${breed.birth}` : ''
  }`;

  const isCurrentLitter = breed.birth
    ? breed.birth.slice(-4) === new Date().getFullYear().toString()
    : false;

  const totalPuppies = (processedFemales.length || 0) + (processedMales.length || 0);

  const price = isCurrentLitter ? (breedType === 'welsh corgi cardigan' ? '40000' : '20000') : '0';

  const breedSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: breed.name,
    description: litterDescription,
    image: breed.img,
    brand: {
      '@type': 'Brand',
      name: 'Whiteline Czech',
    },
    category: breedType,
    // Pokud je vrh z letošního roku, je pravděpodobně aktuální
    offers: {
      '@type': 'Offer',
      availability: isCurrentLitter
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
      availabilityStarts: breed.birth,
      price: price,
      priceCurrency: 'CZK',
      url: `https://whitelineczech.com/odchovy/${breed.id}`,
    },
    additionalProperty: [
      ...(breed.birth
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Datum narození',
              value: breed.birth,
            },
          ]
        : []),
      {
        '@type': 'PropertyValue',
        name: 'Otec',
        value: fatherName,
      },
      {
        '@type': 'PropertyValue',
        name: 'Matka',
        value: motherName,
      },
      {
        '@type': 'PropertyValue',
        name: 'Počet štěňat',
        value: totalPuppies.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Počet fen',
        value: processedFemales.length.toString(),
      },
      {
        '@type': 'PropertyValue',
        name: 'Počet psů',
        value: processedMales.length.toString(),
      },
    ],
  };

  return <JsonLd data={breedSchema} />;
}
