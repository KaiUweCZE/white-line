import {
  vrhAImages,
  italiePaseniImages,
  vrhPNarozeniImages,
  stenataVenkuImages,
  vrhPFotkyImages,
  corgiVrhAImages,
} from '@/assets/images/articles/2024';
import { Article } from '../types';

const galleryDefault = { width: 600, height: 350, expander: false };

export const newsData: Article[] = [
  {
    headline: 'Narodil se vrh A',
    text: `20.12. se nám narodil náš první vrh cardiganů ve složení 3 fenky a 1 pejsek.🩷🩷🩷🩵
Porod proběhl přirozeně, bez komplikací a maminka i štěňátka jsou v pořádku.`,
    time: '20.12.2024',
    year: 2024,
    images: [...corgiVrhAImages.gallery],
    labels: [],
    galleryOptions: { width: 600, height: 450, expander: false },
    tags: { name: 'štěňata', type: 'puppies' },
  },
  {
    headline: 'Corgi Vrh A',
    text: `Před Vánoci očekáváme narození našeho prvního vrhu plemene Welsh corgi cardigan🧡
Za letáček děkujeme EWE Design - Grafika pro chovatele - Graphics for breeders`,
    time: '10.říjen 2024',
    year: 2024,
    images: [...vrhAImages.gallery],
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
    images: [...italiePaseniImages.gallery],
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
    images: [...stenataVenkuImages.gallery],
    labels: ['Frída a štěňata', 'modrý kluk', 'zelený kluk', 'červený kluk'],
    galleryOptions: galleryDefault,
    tags: { name: 'závody', type: 'races' },
  },
  {
    headline: 'Fotky vrhu P',
    text: 'Fotky štěňátek',
    time: '13.červenec 2024',
    year: 2024,
    images: [...vrhPFotkyImages.gallery],
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
    time: '22.června 2024',
    year: 2024,
    images: [...vrhPNarozeniImages.gallery],
    labels: ['fenka', 'žlut pejsek', 'červený pejsek', 'modrý pejsek'],
    galleryOptions: { width: 300, height: 525, expander: false },
    tags: { name: 'štěňata', type: 'puppies' },
  },
];
