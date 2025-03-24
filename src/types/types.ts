import { StaticImageData } from 'next/image';

export interface GalleryImage {
  label: string;
  image: StaticImageData;
}

export interface BreedDetailType {
  id: string;
  name: string;
  father: {
    name: string;
    image: StaticImageData;
    physical: string[];
    health: string[];
    titles?: string[];
  };
  mother: {
    name: string;
    image: StaticImageData;
    physical: string[];
    health: string[];
    titles?: string[];
  };
  females: string[];
  males: string[];
  birth?: string;
  description?: string;
  gallery?: GalleryImage[];
}

export const articleYears = [2025, 2024, 2023] as const;
