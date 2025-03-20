import { StaticImageData } from 'next/image';
import chessie1 from './gallery/chessie.webp';
import chessie2 from './gallery/chessie2.webp';
import chup1 from './gallery/chup.webp';
import chup2 from './gallery/chup2.webp';
import chup3 from './gallery/chup3.webp';
import chup4 from './gallery/chup4.webp';
import cheiron1 from './gallery/cheiron.webp';
import cheiron2 from './gallery/cheiron2.webp';
import chariowalda1 from './gallery/chariowalda.webp';
import chariowalda2 from './gallery/chariowalda2.webp';
import chupAndChessie from './gallery/chup-a-chessie.webp';
import chupRikaChessie from './gallery/chup-chessie-rika.webp';

export interface GalleryImage {
  label: string;
  image: StaticImageData;
}

export const breedAImages: GalleryImage[] = [
  {
    label: 'Chara Jasmine',
    image: chessie1,
  },
  {
    label: 'Chessie',
    image: chessie2,
  },
  {
    label: 'Chupacabra',
    image: chup1,
  },
  {
    label: 'Chupacabra',
    image: chup2,
  },
  {
    label: 'Chupacabra',
    image: chup3,
  },
  {
    label: 'Chupacabra',
    image: chup4,
  },
  {
    label: 'Cheiron',
    image: cheiron1,
  },
  {
    label: 'Cheiron',
    image: cheiron2,
  },
  {
    label: 'Chupacabra a Chessie',
    image: chupAndChessie,
  },
  {
    label: 'Chupacabra a Chessie a Rika',
    image: chupRikaChessie,
  },
  {
    label: 'Chariowalda',
    image: chariowalda1,
  },
  {
    label: 'Chariowalda',
    image: chariowalda2,
  },
];
