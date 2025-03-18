import vrhA from '@/assets/images/breed/vrha.webp';
import vrhB from '@/assets/images/breed/vrhb.webp';
import vrhC from '@/assets/images/breed/vrhc.webp';
//import vrhD from "@/assets/images/breed/vrhd.webp"
import vrhE from '@/assets/images/breed/vrhe.webp';
import vrhF from '@/assets/images/breed/vrhf.webp';
import vrhG from '@/assets/images/breed/vrhg.webp';
import vrhH from '@/assets/images/breed/vrhh.webp';
import vrhCh from '@/assets/images/breed/vrhch.webp';
import vrhI from '@/assets/images/breed/vrhi.webp';
import vrhJ from '@/assets/images/breed/vrhj.webp';
import vrhK from '@/assets/images/breed/vrhk.webp';
import vrhL from '@/assets/images/breed/vrhl.webp';
import vrhM from '@/assets/images/breed/vrhm.webp';
import vrhN from '@/assets/images/breed/vrhn.webp';
import { StaticImageData } from 'next/image';

export interface BreedType {
  id: string;
  name: string;
  type: string;
  father: string;
  shortFatherName: string;
  mother: string;
  shortMotherName: string;
  females: string[] | null;
  males: string[];
  img: StaticImageData;
  birth?: string;
}

export const breedData = [
  {
    id: 'swn',
    name: 'Vrh N',
    type: 'Bílý švýcarský ovčák',
    father: 'Bastien Altája',
    shortFatherName: 'Bastien',
    mother: 'Chessie Whiteline Czech',
    shortMotherName: 'Chessie',
    females: ['Nessie', 'Nicole-Allia'],
    males: ['Nero', 'Newton', 'Nobel'],
    img: vrhN,
  },
  {
    id: 'swm',
    name: 'Vrh M',
    type: 'Bílý švýcarský ovčák',
    father: 'Simply One Igor',
    shortFatherName: 'Simply',
    mother: 'Frederika Bílá Merci',
    shortMotherName: 'Frederika',
    females: ['Mademoiselle', 'Maya', 'Melanie', 'Mercedes', 'Minerva'],
    males: ['Maximilian'],
    img: vrhM,
  },
  {
    id: 'swl',
    name: 'Vrh L',
    type: 'Bílý švýcarský ovčák',
    father: 'Chester la Blankpapilio',
    shortFatherName: 'Chester',
    mother: 'Chessie Whiteline Czech',
    shortMotherName: 'Chessie',
    females: null,
    males: ['Lego', 'Lucius Wolf', 'Lupin'],
    img: vrhL,
  },
  {
    id: 'swk',
    name: 'Vrh K',
    type: 'Bílý švýcarský ovčák',
    father: 'Fénix Bílá Merci',
    shortFatherName: 'Fénix',
    mother: 'Flying Free vom Weissen Unterberg',
    shortMotherName: 'Frída',
    females: ['Kalinka', 'Kalypso', 'Keira', 'Kubra'],
    males: ['Kallikrates', 'Kamikaze', 'Kilimanjaro', 'Kohinoor'],
    img: vrhK,
  },
  {
    id: 'swj',
    name: 'Vrh J',
    type: 'Bílý švýcarský ovčák',
    father: 'Neros du Glacier des Loups',
    shortFatherName: 'Neros',
    mother: 'Chessie Whiteline Czech',
    shortMotherName: 'Chessie',
    females: ["J'Adore", 'Jeana Aira', 'Jetaimie', 'Jewel'],
    males: ['Jad Aaron'],
    img: vrhJ,
  },
  {
    id: 'swi',
    name: 'Vrh I',
    type: 'Bílý švýcarský ovčák',
    father: 'Chester la Blankpapilio',
    shortFatherName: 'Chester',
    mother: 'Frederika Bílá Merci',
    shortMotherName: 'Frederika',
    females: ['Imaculada', 'Iwanga'],
    males: ['Iarlaith', 'Ignac', 'Iniobong', 'Izydor'],
    img: vrhI,
  },
  {
    id: 'swch',
    name: 'Vrh Ch',
    type: 'Bílý švýcarský ovčák',
    father: 'Bland Blaez vom Weissen Unterberg',
    shortFatherName: 'Bland Blaez',
    mother: 'Frederika Bílá Merci',
    shortMotherName: 'Frederika',
    females: ['Chara Jasmine', 'Chessie', 'Chilli'],
    males: ['Chariowalda', 'Cheddar', 'Che Guevara', 'Cheiron', 'Chupacabra'],
    img: vrhCh,
  },
  {
    id: 'swh',
    name: 'Vrh H',
    type: 'Bílý švýcarský ovčák',
    father: 'Aico vom Bruckner-Land',
    shortFatherName: 'Aico',
    mother: 'Alexia of Trebons Berger Blanc',
    shortMotherName: 'Alexia',
    females: ['Go-go', 'Grace', 'Gwendoline'],
    males: ['Grim', 'Gringo', 'Grizzly Bear'],
    img: vrhH,
  },
  {
    id: 'swg',
    name: 'Vrh G',
    type: 'Bílý švýcarský ovčák',
    father: 'Chester la Blankpapilio',
    shortFatherName: 'Chester',
    mother: 'Frederika Bílá Merci',
    shortMotherName: 'Frederika',
    females: ['Imaculada', 'Iwanga'],
    males: ['Iarlaith', 'Ignac', 'Iniobong', 'Izydor'],
    img: vrhG,
  },
  {
    id: 'swf',
    name: 'Vrh F',
    type: 'Bílý švýcarský ovčák',
    father: 'Herkules King vom Nicolaiberg',
    shortFatherName: 'Herkules',
    mother: 'Allia - Nicole of Haely´s Future',
    shortMotherName: 'Allia',
    females: ['Fancy', 'Fanny', 'Farah', 'Fee', 'Flower'],
    males: ['Fenix', 'Foster King'],
    img: vrhF,
  },
  {
    id: 'swe',
    name: 'Vrh E',
    type: 'Bílý švýcarský ovčák',
    father: 'Fill White Majestics',
    shortFatherName: 'Fill',
    mother: 'Genny Lee Donnevara',
    shortMotherName: 'Genny',
    females: ['Electra', 'Eyscha', 'Eywy'],
    males: ['Efram', 'Eliott Whity', 'Emily', 'Eugene'],
    img: vrhE,
  },
  {
    id: 'swc',
    name: 'Vrh C',
    type: 'Bílý švýcarský ovčák',
    father: 'Melody Boy Miraja',
    shortFatherName: 'Melody',
    mother: 'Genny Lee Donnevara',
    shortMotherName: 'Genny',
    females: ['Carmen', 'Carol', 'Carrie'],
    males: ['Carl v. B.', 'Clipper', 'Cirith', 'Cooper'],
    img: vrhC,
  },
  {
    id: 'swb',
    name: 'Vrh B',
    type: 'Bílý švýcarský ovčák',
    father: 'Asterix Star z Ranče Montara',
    shortFatherName: 'Asterix',
    mother: 'Genny Lee Donnevara',
    shortMotherName: 'Genny',
    females: ['Bessie', 'Blanche', 'Buffy'],
    males: ['Baquero', 'Bean', 'Berry', 'Black Jack', 'Brilliant'],
    img: vrhB,
  },
  {
    id: 'swa',
    name: 'Vrh A',
    type: 'Bílý švýcarský ovčák',
    father: 'African-Jambo from old Vienna',
    shortFatherName: 'African-Jambo',
    mother: 'Genny Lee Donnevara',
    shortMotherName: 'Genny',
    females: ['Amy', 'Arnica', 'Amádea'],
    males: ['Artaban', 'Ahepjuk'],
    img: vrhA,
  },
  {
    id: 'cra',
    name: 'Vrh A',
    type: 'Corgi',
    father: 'African-Jambo from old Vienna',
    shortFatherName: 'African-Jambo',
    mother: 'Genny Lee Donnevara',
    shortMotherName: 'Genny',
    females: ['Amy', 'Arnica', 'Amádea'],
    males: ['Artaban', 'Ahepjuk'],
    img: vrhA,
  },
];
