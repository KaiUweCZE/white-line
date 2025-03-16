import { MetadataRoute } from 'next';
import { breedData } from '@/ui/odchovy/data/breed-data';
import { dataDogs } from '@/ui/nasi-psi/data/data-dogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://whitelineczech.com';

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/nasi-psi`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/odchovy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ];

  const dogPages = dataDogs.map((dog) => ({
    url: `${baseUrl}/nasi-psi/${dog.name
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const litterPages = breedData.map((litter) => ({
    url: `${baseUrl}/odchovy/${litter.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...dogPages, ...litterPages];
}
