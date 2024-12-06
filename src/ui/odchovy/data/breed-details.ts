// vrh ch
import blaezImg1 from '../images/vrhch/blaez.webp';
import blaezImg2 from '../images/vrhch/blaez2.webp';
import rikaImg1 from '../images/vrhch/rika1.webp';
import rikaImg2 from '../images/vrhch/rika2.webp';
import img1 from '../images/vrhch/chup.webp';
import chupImg1 from '../images/vrhch/chup.webp';
import chupImg2 from '../images/vrhch/chup2.webp';
import chupImg3 from '../images/vrhch/chup3.webp';
import chessieImg1 from '../images/vrhch/chessie.webp';
import chessieImg2 from '../images/vrhch/chessie2.webp';
import cheironImg1 from '../images/vrhch/cheiron1.webp';
import cheironImg2 from '../images/vrhch/cheiron2.webp';
/*import { StaticImageData } from 'next/image';

interface ParentInfo {
  name: string;
  images: StaticImageData[];
  physical?: string[];
  health?: string[];
  titles?: string[];
}

interface BreedDetail {
  id: string;
  name: string;
  birth: string;
  father: ParentInfo;
  mother: ParentInfo;
  females?: {
    name: string;
    images: StaticImageData[];
    labels: string[];
  }[];
  males?: {
    name: string;
    images: StaticImageData[];
    labels: string[];
  }[];
}*/

export const breedDetails = [
  {
    id: 'swa',
    name: 'Vrh Ch',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      images: [blaezImg1, blaezImg2],
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      images: [rikaImg1, rikaImg2],
      physical: ['61 cm', 'plonochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: [
      {
        name: 'Chara Jasmine',
        images: [img1],
        labels: ['Chara Jasmine'],
      },
      {
        name: 'Chessie',
        images: [chessieImg1, chessieImg2],
        labels: ['Chessie'],
      },
      {
        name: 'Chilli',
        images: [img1],
        labels: ['Chilli'],
      },
    ],
    males: [
      {
        name: 'Chariowalda',
        images: [img1],
        labels: ['Chariowalda'],
      },
      {
        name: 'Cheddar',
        images: [img1],
        labels: ['Cheddar'],
      },
      {
        name: 'Che Guevara',
        images: [img1],
        labels: ['Che Guevara'],
      },
      {
        name: 'Cheiron',
        images: [cheironImg1, cheironImg2],
        labels: ['Cheiron'],
      },
      {
        name: 'Chupacabra',
        images: [chupImg1, chupImg2, chupImg3],
        labels: ['Chupacabra'],
      },
    ],
  },
  {
    id: 'swb',
    name: 'Vrh Ch',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      images: [blaezImg1, blaezImg2],
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      images: [rikaImg1, rikaImg2],
      physical: ['61 cm', 'plonochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: [
      {
        name: 'Chara Jasmine',
        images: [img1],
        labels: ['Chara Jasmine'],
      },
      {
        name: 'Chessie',
        images: [chessieImg1, chessieImg2],
        labels: ['Chessie'],
      },
      {
        name: 'Chilli',
        images: [img1],
        labels: ['Chilli'],
      },
    ],
    males: [
      {
        name: 'Chariowalda',
        images: [img1],
        labels: ['Chariowalda'],
      },
      {
        name: 'Cheddar',
        images: [img1],
        labels: ['Cheddar'],
      },
      {
        name: 'Che Guevara',
        images: [img1],
        labels: ['Che Guevara'],
      },
      {
        name: 'Cheiron',
        images: [cheironImg1, cheironImg2],
        labels: ['Cheiron'],
      },
      {
        name: 'Chupacabra',
        images: [chupImg1, chupImg2, chupImg3],
        labels: ['Chupacabra'],
      },
    ],
  },
  {
    id: 'swc',
    name: 'Vrh Ch',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      images: [blaezImg1, blaezImg2],
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      images: [rikaImg1, rikaImg2],
      physical: ['61 cm', 'plnochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: [
      {
        name: 'Chara Jasmine',
        images: [img1],
        labels: ['Chara Jasmine'],
      },
      {
        name: 'Chessie',
        images: [chessieImg1, chessieImg2],
        labels: ['Chessie'],
      },
      {
        name: 'Chilli',
        images: [img1],
        labels: ['Chilli'],
      },
    ],
    males: [
      {
        name: 'Chariowalda',
        images: [img1],
        labels: ['Chariowalda'],
      },
      {
        name: 'Cheddar',
        images: [img1],
        labels: ['Cheddar'],
      },
      {
        name: 'Che Guevara',
        images: [img1],
        labels: ['Che Guevara'],
      },
      {
        name: 'Cheiron',
        images: [cheironImg1, cheironImg2],
        labels: ['Cheiron'],
      },
      {
        name: 'Chupacabra',
        images: [chupImg1, chupImg2, chupImg3],
        labels: ['Chupacabra'],
      },
    ],
  },
  {
    id: 'swd',
    name: 'Vrh Ch',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      images: [blaezImg1, blaezImg2],
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      images: [rikaImg1, rikaImg2],
      physical: ['61 cm', 'plonochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: [
      {
        name: 'Chara Jasmine',
        images: [img1],
        labels: ['Chara Jasmine'],
      },
      {
        name: 'Chessie',
        images: [chessieImg1, chessieImg2],
        labels: ['Chessie'],
      },
      {
        name: 'Chilli',
        images: [img1],
        labels: ['Chilli'],
      },
    ],
    males: [
      {
        name: 'Chariowalda',
        images: [img1],
        labels: ['Chariowalda'],
      },
      {
        name: 'Cheddar',
        images: [img1],
        labels: ['Cheddar'],
      },
      {
        name: 'Che Guevara',
        images: [img1],
        labels: ['Che Guevara'],
      },
      {
        name: 'Cheiron',
        images: [cheironImg1, cheironImg2],
        labels: ['Cheiron'],
      },
      {
        name: 'Chupacabra',
        images: [chupImg1, chupImg2, chupImg3],
        labels: ['Chupacabra'],
      },
    ],
  },
  {
    id: 'swe',
    name: 'Vrh Ch',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      images: [blaezImg1, blaezImg2],
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      images: [rikaImg1, rikaImg2],
      physical: ['61 cm', 'plonochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: [
      {
        name: 'Chara Jasmine',
        images: [img1],
        labels: ['Chara Jasmine'],
      },
      {
        name: 'Chessie',
        images: [chessieImg1, chessieImg2],
        labels: ['Chessie'],
      },
      {
        name: 'Chilli',
        images: [img1],
        labels: ['Chilli'],
      },
    ],
    males: [
      {
        name: 'Chariowalda',
        images: [img1],
        labels: ['Chariowalda'],
      },
      {
        name: 'Cheddar',
        images: [img1],
        labels: ['Cheddar'],
      },
      {
        name: 'Che Guevara',
        images: [img1],
        labels: ['Che Guevara'],
      },
      {
        name: 'Cheiron',
        images: [cheironImg1, cheironImg2],
        labels: ['Cheiron'],
      },
      {
        name: 'Chupacabra',
        images: [chupImg1, chupImg2, chupImg3],
        labels: ['Chupacabra'],
      },
    ],
  },
  {
    id: 'swch',
    name: 'Vrh Ch',
    birth: '4.6.2019',
    father: {
      name: 'Bland Blaez vom Weissen Unterberg',
      images: [blaezImg1, blaezImg2],
      physical: ['65 cm', 'plnochrupý'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['junioršampion Slovinska'],
    },
    mother: {
      name: 'Frederika Bílá Merci',
      images: [rikaImg1, rikaImg2],
      physical: ['61 cm', 'plonochrupá'],
      health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
      titles: ['NHAT', 'HWT', 'IHT1', 'IHT2', 'IHT3 CACT CAC'],
    },
    females: [
      {
        name: 'Chara Jasmine',
        images: [img1],
        labels: ['Chara Jasmine'],
      },
      {
        name: 'Chessie',
        images: [chessieImg1, chessieImg2],
        labels: ['Chessie'],
      },
      {
        name: 'Chilli',
        images: [img1],
        labels: ['Chilli'],
      },
    ],
    males: [
      {
        name: 'Chariowalda',
        images: [img1],
        labels: ['Chariowalda'],
      },
      {
        name: 'Cheddar',
        images: [img1],
        labels: ['Cheddar'],
      },
      {
        name: 'Che Guevara',
        images: [img1],
        labels: ['Che Guevara'],
      },
      {
        name: 'Cheiron',
        images: [cheironImg1, cheironImg2],
        labels: ['Cheiron'],
      },
      {
        name: 'Chupacabra',
        images: [chupImg1, chupImg2, chupImg3],
        labels: ['Chupacabra'],
      },
    ],
  },
];
