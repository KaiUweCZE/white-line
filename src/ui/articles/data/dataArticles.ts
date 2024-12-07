import img1 from '@/assets/images/news/a.jpg';
import img2 from '@/assets/images/news/b.jpg';
import img3 from '@/assets/images/news/c.jpg';
import img4 from '@/assets/images/news/d.jpg';

import img13cervena from '@/assets/images/news/a.jpg';
import img13cervenb from '@/assets/images/news/b.jpg';
import img13cervenc from '@/assets/images/news/c.jpg';
import img13cervend from '@/assets/images/news/d.jpg';
import img13cervene from '@/assets/images/news/e.webp';
import img13cervenf from '@/assets/images/news/f.webp';
import img13cerveng from '@/assets/images/news/g.webp';

import cerven20a from '@/assets/images/news/20cerven/a.webp';
import cerven20b from '@/assets/images/news/20cerven/b.webp';
import cerven20c from '@/assets/images/news/20cerven/c.webp';
import cerven20d from '@/assets/images/news/20cerven/d.webp';

import tilda2811a from '../images/tilda-28-11-2024(1).jpeg';

import img810a from '../images/8-10-2024/1.webp';
import img810b from '../images/8-10-2024/2.webp';
import img810c from '../images/8-10-2024/3.webp';
import img810d from '../images/8-10-2024/4.webp';
import img810e from '../images/8-10-2024/5.webp';
import img810f from '../images/8-10-2024/6.webp';
import img810g from '../images/8-10-2024/7.webp';
import img810h from '../images/8-10-2024/8.webp';
import img810i from '../images/8-10-2024/9.webp';

import { Article } from '../types';

const galleryDefault = { width: 600, height: 350, expander: false };

export const newsData: Article[] = [
  {
    headline: 'Corgi Vrh A',
    text: `Před Vánoci očekáváme narození našeho prvního vrhu plemene Welsh corgi cardigan🧡
Za letáček děkujeme EWE Design - Grafika pro chovatele - Graphics for breeders`,
    time: '10.říjen 2024',
    year: 2024,
    images: [tilda2811a],
    labels: ['Frída a štěňata', 'modrý kluk', 'zelený kluk', 'červený kluk'],
    galleryOptions: { width: 600, height: 450, expander: false },
    tags: { name: 'štěňata', type: 'puppies' },
  },

  {
    headline: 'Pasení v Itálii',
    text: `🏆ME v pasání tradičním stylem 2024🏆
    Na loňském MČR jsme se s Frederikou kvalifikovali ze 2. místa na ME, které se tento rok konalo v Italském městečku Bibbona.
    Celkem zde startovalo 31 psů z 11 zemí. Z kvalifikačních kol, která probíhala v pátek a v sobotu trať nikdo nedokončil a jen 11 týmům se podařilo získat body. 
    Do nedělního finále, kam postupovalo 10 nejlepších týmů, jsme se kvalifikovali ze 7. místa.
    Ani finálové běhy se ale nepodařili dokončit všem, naštěstí jsme to s Frederikou nakonec zvládli a umístili se opět na 7. místě.🏅
    Děkuji za podporu Klubu bílého ovčáka!`,
    time: '8.říjen 2024',
    year: 2024,
    images: [img810a, img810b, img810c, img810d, img810e, img810f, img810g, img810h, img810i],
    labels: [
      'Česká výprava',
      'Česká výprava',
      'účastnící závodů',
      'Frederika',
      'Frederika a Tilda',
      'Frederika',
      'Freferika a Tilda',
      'Frederika',
      'Frederika a Tilda',
      'Místo závodů',
      'Místo závodů',
    ],
    galleryOptions: { width: 600, height: 450, expander: false },
    tags: { name: 'závody', type: 'races' },
  },
  {
    headline: 'Štěňátka se budou stěhovat',
    text: 'Štěňátka se budou již brzy stěhovat do venkovního výběhu, a tak jsme využili pěkného počasí a vzali je poprvé ven',
    time: '12.červenec 2024',
    year: 2024,
    images: [img1, img2, img3, img4],
    labels: ['Frída a štěňata', 'modrý kluk', 'zelený kluk', 'červený kluk'],
    galleryOptions: galleryDefault,
    tags: { name: 'závody', type: 'races' },
  },
  {
    headline: 'Fotky vrhu P',
    text: 'Fotky štěňátek',
    time: '13.červenec 2024',
    year: 2024,
    images: [
      img13cervena,
      img13cervenb,
      img13cervenc,
      img13cervend,
      img13cervene,
      img13cervenf,
      img13cerveng,
    ],
    labels: [
      'Frída s dětmi',
      'červený pejsek',
      'fenka',
      'fenka',
      'leták',
      'frída s dětmi',
      'frída s dětmi',
    ],
    galleryOptions: galleryDefault,
    tags: { name: 'závody', type: 'races' },
  },
  {
    headline: '2 týdny',
    text: `Štěňátka z vrhu ,,P” (Frida&Largo) oslavila včera 2 týdny.
     Všechna už mají otevřená očka, dostala první odčervení a mají se čile k světu`,
    time: '7.červenec 2024',
    year: 2024,
    images: [],
    labels: [],
    galleryOptions: galleryDefault,
    tags: { name: 'výstava', type: 'exhibition' },
  },
  {
    headline: 'Narodila se štěňata',
    text: `22.6.2024 se narodil náš vrh 🅿️
Fridě a Largovi se narodili 3 chlapečci a 1 holčička 
💙💙💙❤️
Všichni jsou v pořádku a štěňátka jsou už zamluvena`,
    time: '22.června 2023',
    year: 2023,
    images: [cerven20a, cerven20b, cerven20c, cerven20d],
    labels: ['fenka', 'žlut pejsek', 'červený pejsek', 'modrý pejsek'],
    galleryOptions: { width: 300, height: 525, expander: false },
    tags: { name: 'štěňata', type: 'puppies' },
  },
];
