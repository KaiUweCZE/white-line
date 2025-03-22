// vrh ch
import blaezImg1 from '../images/vrhch/blaez.webp';
import rikaImg1 from '../images/vrhch/rika1.webp';
import fenixImg1 from '../images/vrhk/fenix-otec.webp';
import freeImg1 from '../images/vrhk/free-matka.webp';
import simpleIgorImg1 from '../images/vrhm/simply-igor-otec.webp';
import simbaImg1 from '../images/c-vrha/simba.webp';

import { breedChImages } from '../images/vrhch';
import { BreedDetailType } from '@/types/types';
import { breedKImages } from '../images/vrhk';
import { breedMImages } from '../images/vrhm';
import { breedCAImages } from '../images/c-vrha';
import { tildaImg } from '@/assets/images/our-dogs/tilda';

export const breedDetails: BreedDetailType[] = [
  {
    id: 'swch',
    name: 'Vrh Ch',
    birth: '19.6.2018',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      image: blaezImg1,
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      image: rikaImg1,
      physical: ['61 cm', 'plnochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: ['Chara Jasmine', 'Chessie', 'Chilli'],
    males: ['Chariowalda', 'Cheddar', 'Che Guevara', 'Cheiron', 'Chupacabra'],
    gallery: breedChImages,
  },
  {
    id: 'swk',
    name: 'Vrh K',
    birth: '19.1.2021',
    father: {
      name: 'Fénix Bílá Merci',
      image: fenixImg1,
      physical: ['dlouhosrstý', '65 cm', 'plnochrupý', 'skus nůžkový', 'DNA'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['BH-VT', 'HWT', 'NHAT'],
    },
    mother: {
      name: 'Flying Free vom Weissen Unterberg',
      image: freeImg1,
      physical: ['dlouhosrstá', '60 cm', 'plnochrupá', 'těsné nůžky'],
      health: ['HD A', 'ED 0', 'DM N/N', 'MDR1 +/-'],
    },
    females: ['Kalinka', 'Kalypso', 'Keira', 'Kubra'],
    males: ['Kallikrates', 'Kamikaze', 'Kilimanjaro', 'Kohinoor'],
    gallery: breedKImages,
  },
  {
    id: 'swm',
    name: 'Vrh M',
    birth: '8.2.2022',
    father: {
      name: 'Simply One Igor',
      image: simpleIgorImg1,
      physical: ['dlouhosrstý', '63 cm', 'plnochrupý', 'DKK: A', 'DLK: 0'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['šampion Polska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      image: rikaImg1,
      physical: ['61 cm', 'plnochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: ['Mademoiselle', 'Maya', 'Melanie', 'Mercedes', 'Minerva'],
    males: ['Maximilian'],
    gallery: breedMImages,
  },
  {
    id: 'cra',
    name: 'Vrh A',
    birth: '20.12.2024',
    father: {
      name: 'Simba Tender Lion z Jurajského Zamku',
      image: simbaImg1,
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['šampion Polska'],
    },
    mother: {
      name: 'Lovlipon Tilda Tango',
      image: tildaImg.smecka,
      physical: ['61 cm', 'plnochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: ['Abba', 'Astrid', 'Axa'],
    males: ['Almqvist'],
    gallery: breedCAImages,
  },
];
