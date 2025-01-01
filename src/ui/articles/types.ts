import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export interface GalleryType {
  images: StaticImageData[];
  alts: string[];
  width?: number;
  height?: number;
}

export interface Article {
  headline: string;
  text: string;
  time: string;
  year: number;
  images: StaticImageData[];
  labels?: string[];
  sameSize?: boolean;
  galleryOptions?: { width: number; height: number; expander: boolean };
  tags?: { name: string; type: 'puppies' | 'races' | 'exhibition' };
}

export type RestrictOption = 'Závody' | 'Štěňata' | 'Výstava' | null;
export type YearOption = 'Roky' | null;

export interface ActiveState {
  restrict: RestrictOption;
  year: YearOption;
}

export interface FilterOption {
  name: 'Závody' | 'Štěňata' | 'Výstava' | 'Roky';
  icon: ReactNode; // We'll type this properly with the icon component
  color?: 'yellow' | 'purple' | 'green';
  variant: 'restrict' | 'year';
}
