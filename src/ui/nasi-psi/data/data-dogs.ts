import { dogsImg } from '@/assets/images/our-dogs';
import { frederikaImg } from '@/assets/images/our-dogs/frederika';
import { fenixImg } from '@/assets/images/our-dogs/fenix';
import { freeImg } from '@/assets/images/our-dogs/free';
import { chupImg } from '@/assets/images/our-dogs/chupacabra';
import { chessieImg } from '@/assets/images/our-dogs/chessie';
import { hopeImg } from '@/assets/images/our-dogs/hope';
import { kodyImg } from '@/assets/images/our-dogs/kody';
import { artabanImg } from '@/assets/images/our-dogs/artaban';
import { breedImgs } from '@/assets/images/our-breed';
import { tildaImg } from '@/assets/images/our-dogs/tilda';
import { alexiaImg } from '@/assets/images/our-dogs/alexia';
import { nicoleImgs } from '@/assets/images/our-dogs/nicole';
import { gennyImgs } from '@/assets/images/our-dogs/genny';

export const dataDogs = [
  {
    id: 'alexia',
    name: 'Alexia',
    breed: 'bílý švýcarský ovčák',
    type: 'chovná fena FCI',
    kennel: 'Trebons Berger Blanc',
    img: alexiaImg.smecka, // Placeholder
    alive: false,
    registration: 'Z Reg/ACO/1723/-06/05',
    birth: '25.3.2005',
    description: 'dlouhosrstá, 62 cm, plnochrupá, skus nůžkový',
    health: ['HD C'],
    exams: [], // Nejsou uvedeny
    portrait: alexiaImg.portret, // Placeholder
    titles: ['Český šampion', 'Slovenský šampion krásy'],
    pedigree: 'https://db.bily-ovcak.cz/psi/4527/alexia-of-trebons-berger-blanc',
    breeds: [
      {
        name: 'Vrh G Whiteline Czech',
        image: breedImgs.vrhCh,
        href: '',
      },
    ],
    races: [], // Nemá závody
    contests: [], // Není uvedeno
    gallery: [], // Placeholder pro galerii
  },
  {
    id: 'allia-nicole',
    name: 'Allia Nicole',
    breed: 'bílý švýcarský ovčák',
    type: 'chovná fena FCI',
    kennel: "Haely's Future",
    img: nicoleImgs.smecka, // Placeholder
    alive: false,
    registration: 'Z Reg/ACO/1448/-04/04',
    birth: '10.1.2004',
    description: 'dlouhosrstá, 57 cm, plnochrupá, skus nůžkový',
    health: ['HD A'],
    exams: ['ZOP'],
    portrait: nicoleImgs.portret, // Placeholder
    titles: ['Český šampion', 'Slovenský šampion krásy'],
    pedigree: 'https://db.bily-ovcak.cz/psi/4341/allia-nicole-of-haelys-future',
    breeds: [
      {
        name: 'Vrh D Whiteline Czech',
        image: breedImgs.vrhCh, // Podle požadavku používám stejný placeholder
        href: '',
      },
      {
        name: 'Vrh F Whiteline Czech',
        image: breedImgs.vrhCh,
        href: '',
      },
    ],
    races: [], // Nemá závody
    contests: [], // Není uvedeno
    gallery: [], // Placeholder pro galerii
  },
  {
    id: 'artaban',
    name: 'Artaban',
    breed: 'bílý švýcarský ovčák',
    type: 'pes',
    kennel: 'Whiteline Czech',
    img: artabanImg.smecka, // Placeholder
    alive: false,
    registration: 'Z Reg/ACO/1408/04',
    birth: '31.5.2004',
    death: '16.3.2017', // Datum úmrtí
    description: 'krátkosrstý, plnochrupý, skus nůžkový',
    health: [], // Nejsou uvedeny zdravotní údaje
    exams: ['ZOP', 'ZZO', 'CANISTERAPIE'],
    portrait: artabanImg.portret, // Placeholder
    titles: [], // Nejsou uvedeny tituly
    pedigree: 'https://db.bily-ovcak.cz/psi/4237/artaban-whiteline-czech',
    breeds: [], // Nemá odchovy
    races: [], // Nemá závody
    contests: [
      {
        date: '22.4.2006',
        name: 'MVP České Budějovice',
        grade: 'V1, CAC, CACIB',
      },
      {
        date: '8.10.2005',
        name: 'MVP České Budějovice',
        grade: 'V1, CAJC, BOB',
      },
      {
        date: '10.9.2005',
        name: 'Klubová výstava',
        grade: 'V1, CAJC, BOJ, BOB',
      },
      {
        date: '23.7.2005',
        name: 'NVP Mladá Boleslav',
        grade: 'V2',
      },
      {
        date: '23.4.2005',
        name: 'MVP České Budějovice',
        grade: 'V1, CAJC',
      },
      {
        date: '12.2.2005',
        name: 'CACIB Brno',
        grade: 'VN 3',
      },
    ],
    gallery: artabanImg.galleryLabels, // Placeholder pro galerii
  },
  {
    id: 'fenix',
    name: 'Fenix',
    kennel: 'Bílá Merci',
    breed: 'bílý švýcarský ovčák',
    type: 'chovný pes FCI',
    img: dogsImg.fenix.smecka,
    alive: true,
    registration: 'Z Reg/ACO/3554/15/17',
    birth: '27.5.2015',
    description: 'dlouhosrstý, 65 cm, plnochrupý, skus nůžkový, DNA',
    health: ['HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
    exams: ['BH-VT', 'HWT', 'NHAT'],
    portrait: dogsImg.fenix.portret,
    titles: [],
    pedigree: 'https://db.bily-ovcak.cz/psi/356/fenix-bila-merci',
    matings: [
      {
        name: 'Vrh B White Essence',
        // image: vrhMImg, // Placeholder
        href: '',
        partner: 'Baby Ely Falco line',
        puppies: '3 psi + 2 feny',
      },
      {
        name: 'Vrh A pod Javorovým',
        //  image: vrhMImg,
        href: '',
        partner: 'Lotty z Blatenských luk',
        puppies: '3 psi + 2 feny',
      },
      {
        name: 'Vrh E Donnevara',
        //  image: vrhMImg,
        href: '',
        partner: 'Britney Donnevara',
        puppies: '4 psi + 6 fen',
      },
      {
        name: 'Vrh H Meroxen',
        // image: vrhMImg,
        href: '',
        partner: 'Greis Meroxen',
        puppies: '4 psi + 1 fena',
      },
      {
        name: 'Vrh A z Farmy Pole',
        //image: vrhMImg,
        href: '',
        partner: 'Baileys Venturado',
        puppies: '5 psů + 3 feny',
      },
      {
        name: 'Vrh A Goral Tatrika',
        //image: vrhMImg,
        href: '',
        partner: 'Xahna AKBO-Parchovany',
        puppies: '3 feny',
      },
      {
        name: 'Vrh K Whiteline Czech',
        // image: vrhMImg,
        href: '',
        partner: 'Flying Free vom Weissen Unterberg',
        puppies: '4 psi + 4 feny',
      },
      {
        name: 'Vrh B Salli Sambatrae',
        // image: vrhMImg,
        href: '',
        partner: 'Kylie Star z Ranče Montara',
        puppies: '4 psi + 4 feny',
      },
      {
        name: 'Vrh A Lineage of Danthea',
        //image: vrhMImg,
        href: '',
        partner: 'Arthéa Dark Albedi Blondi',
        puppies: '6 psů + 2 feny',
      },
      {
        name: 'Vrh F Falco line',
        //image: vrhMImg,
        href: '',
        partner: 'Canis Ronja Falco line',
        puppies: '4 psi + 3 feny',
      },
    ],

    races: [], // V datech nejsou uvedeny žádné závody
    contests: [
      {
        date: '5.2.2022',
        name: 'DUO CACIB Brno',
        grade: 'V2, Res. CAC- P. Márová',
      },
      {
        date: '11.9.2021',
        name: 'Klubová výstava Česká Skalice',
        grade: 'V- J. Karhanová',
      },
      {
        date: '12.6.2021',
        name: 'Klubová výstava Jedovnice',
        grade: 'V3- P. Řehánek',
      },
      {
        date: '13.9.2020',
        name: 'Speciální výstava Česká Skalice',
        grade: 'VD- O. Plšková',
      },
      {
        date: '12.9.2020',
        name: 'Klubová výstava Česká Skalice',
        grade: 'V- V. Tichá',
      },
      {
        date: '11.1.2020',
        name: 'Hanácká národní výstava',
        grade: 'V1, CAC- Ing. L. Jančík',
      },
      {
        date: '14.9.2019',
        name: 'Klubová výstava České Skalice',
        grade: 'V3- I. Nováková',
      },
      {
        date: '20.4.2019',
        name: 'MVP Praha',
        grade: 'V2, Res. CAC- M. Redlicki (PL)',
      },
      {
        date: '23.3.2019',
        name: 'Speciální výstava Dětřichov',
        grade: 'V3- V. Staviarská (SK)',
      },
      {
        date: '2.2.2019',
        name: 'DUO CACIB Brno',
        grade: 'V2, Res. CAC- J. Matyáš (SK)',
      },
      {
        date: '8.9.2018',
        name: 'Klubová výstava Česká Skalice',
        grade: 'V2, Res.CAC- Ing. J. Karhanová',
      },
      {
        date: '19.5.2018',
        name: 'Slovenská klubová výstava Kamenný Mlyn',
        grade: 'V2, Res.CAC- E. Deutscher (A)',
      },
      {
        date: '31.3.2018',
        name: 'Speciální výstava Dětřichov',
        grade: 'V1, CAC- T. Havelka (SK)',
      },
      {
        date: '4.11.2017',
        name: 'DOUBLE CACIB Prague',
        grade: 'V1, CAC- L. Željko (PL)',
      },
      {
        date: '9.9.2017',
        name: 'Klubová výstava Česká Skalice',
        grade: 'V3- Ing. L. Jančík',
      },
      {
        date: '13.5.2017',
        name: 'Slovenská klubová výstava Kamenný Mlyn',
        grade: 'V3- Mgr. V. Staviarská (SK)',
      },
      {
        date: '15.4.2017',
        name: 'Speciální výstava Svojanov',
        grade: 'VD2- V. Tichá',
      },
      {
        date: '8.4.2017',
        name: 'Národní výstava Ostrava',
        grade: 'VD1- M. Václavík',
      },
    ],
    gallery: fenixImg.galleryLabels,
  },
  {
    id: 'frederika',
    name: 'Frederika',
    kennel: 'Bílá Merci',
    breed: 'bílý švýcarský ovčák',
    type: 'chovná fena',
    img: dogsImg.frederika.smecka,
    alive: true,
    registration: 'Z Reg/ACO/3556/15/18',
    birth: '27.5.2015',
    description: 'dlouhosrstá, 61 cm, plnochrupá, skus nůžkový',
    health: [' HD A', 'ED 0', 'MDR1 +/+', 'DM N/N'],
    exams: ['IHT3-TS,', 'IHT2-TS,', 'IHT1-TS,', 'HWT,', 'NHAT'],
    portrait: dogsImg.frederika.portret,
    titles: ['Český šampion práce', 'Mistr ČR v pasení TS 2022'],
    pedigree: 'https://db.bily-ovcak.cz/psi/376/frederika-bila-merci',
    breeds: [
      {
        name: 'Vrh Ch',
        image: breedImgs.vrhCh,
        href: 'https://www.rajce.idnes.cz/whitelineczech/album/vrh-litter-ch-whiteline-czech',
      },
      {
        name: 'Vrh I',
        image: breedImgs.vrhI,
        href: 'https://www.rajce.idnes.cz/whitelineczech/album/vrh-i-whiteline-czech-bily-svycarsky-ovcak',
      },
      {
        name: 'Vrh M',
        image: breedImgs.vrhM,
        href: 'https://www.rajce.idnes.cz/whitelineczech/album/vrh-m-whiteline-czech-bily-svycarsky-ovcak',
      },
    ],
    races: [
      {
        date: '6.6.2022',
        name: 'Pentecost-Trial',
        result: 'IHT3- 86%- velmi dobrá- 4. místo',
      },
      {
        date: '5.6.2022',
        name: 'Pentecost-Trial',
        result: 'IHT3- 64%- SAT- 5. místo',
      },
      { date: '28.5.2022', name: 'Těně', result: 'IHT3- 75%- dobrá- 7. místo' },
      {
        date: '27.5.2022',
        name: 'Těně',
        result: 'IHT3- 93%- výborná- 1. místo- CACT, CACITR',
      },
      {
        date: '6.5.2022',
        name: 'Podbradec',
        result: 'IHT3- 89%- velmi dobrá- 2- místo',
      },
      {
        date: '15.-17.4.2022',
        name: 'Székesfehérvár',
        result: 'IHT3- 69%- SAT- 5. místo',
      },
      {
        date: '17.10.2021',
        name: 'Těně',
        result: 'IHT3- 73%- dobrá- 6. místo',
      },
      {
        date: '27.9.2021',
        name: 'Načešice',
        result: 'IHT3- 85%- velmi dobrá- 1. místo- CACT',
      },
      {
        date: '26.9.2021',
        name: 'Pohořelice',
        result: 'IHT3- 95%- výborná- 3. místo',
      },
      {
        date: '18.9.2021',
        name: 'Martínkovice',
        result: 'IHT3- 85%- velmi dobrá- 5. místo- CACT',
      },
      {
        date: '29.8.2021',
        name: 'Těně',
        result: 'MČR IHT2- 78%- dobrá- 7. místo',
      },
      {
        date: '10.7.2021',
        name: 'Pohořelice',
        result: 'IHT2- 82%- velmi dobrá- 4. místo',
      },
      {
        date: '3.7.2021',
        name: 'Martínkovice',
        result: 'IHT2- 91%- výborná- 2. místo',
      },
      {
        date: '29.5.2021',
        name: 'Pohořelice',
        result: 'IHT2- 91%- výborná- 1. místo',
      },
      {
        date: '3.10.2020',
        name: 'Martínkovice',
        result: 'IHT2- 73%- dobrá- 5- místo',
      },
      {
        date: '28.9.2020',
        name: 'Těně',
        result: 'MČR IHT1- 88%- velmi dobrá- 5. místo',
      },
      {
        date: '2.11.2019',
        name: 'Těně',
        result: 'farma závod Dopasná- 5. místo',
      },
      {
        date: '22.9.2019',
        name: 'Načešice',
        result: 'IHT1- 94%- výborná- 2. místo',
      },
      {
        date: '11.8.2019',
        name: 'Budišov',
        result: 'IHT1- 87%- velmi dobrá- 3. místo',
      },
      {
        date: '23.3.2019',
        name: 'Těně',
        result: 'farma závod Rozpasná- 3. místo',
      },
      {
        date: '16.3.2019',
        name: 'Načešice',
        result: 'IHT1- 85%- velmi dobrá- 5.místo',
      },
      {
        date: '4.11.2017',
        name: 'Libhošť',
        result: 'IHT1- 84%- výborná- 3. místo',
      },
    ],

    contests: [
      {
        date: '12.6.2021',
        name: 'Klubová výstava Jedovnice',
        grade: 'V- P. Řehánek',
      },
      {
        date: '11.1.2020',
        name: 'Hanácká národní výstava',
        grade: 'V1, CAC- Ing. L. Jančík',
      },
      {
        date: '9.6.2019',
        name: 'Klubová výstava Nová Živohošť',
        grade: 'V1, CAC- Ing. L. Jančík',
      },
      {
        date: '23.3.2019',
        name: 'Speciální výstava Dětřichov',
        grade: 'V- V. Staviarská (SK)',
      },
      { date: '2.2.2019', name: 'DUO CACIB Brno', grade: 'V3- J. Matyáš (SK)' },
      {
        date: '11.9.2021',
        name: 'Klubová výstava Česká Skalice',
        grade: 'V- J. Karhanová',
      },
      {
        date: '12.6.2021',
        name: 'Klubová výstava Jedovnice',
        grade: 'V- P. Řehánek',
      },
      {
        date: '13.9.2020',
        name: 'Speciální výstava Česká Skalice',
        grade: 'V- O. Plšková',
      },
      {
        date: '12.9.2020',
        name: 'Klubová výstava Česká Skalice',
        grade: 'VD- V. Tichá',
      },
      {
        date: '11.1.2020',
        name: 'Hanácká národní výstava',
        grade: 'V1, CAJC, BOJ- Ing. L. Jančík',
      },
    ],
    gallery: frederikaImg.galleryLabels,
  },
  {
    id: 'genny-lee',
    name: 'Genny Lee',
    breed: 'bílý švýcarský ovčák',
    type: 'chovná fena FCI',
    kennel: 'Donnevara',
    img: gennyImgs.smecka, // Placeholder
    alive: false, // Ve vzpomínkách
    registration: 'N Reg/ACO/1027/02/04',
    birth: '8.4.2002',
    description: 'krátkosrstá, 61 cm, plnochrupá, skus nůžkový',
    health: ['HD A'],
    exams: ['ZOP', 'ZPU1'],
    portrait: gennyImgs.portret, // Placeholder
    titles: [
      'Vítěz střední a východní Evropy 2004',
      'Český junior šampion',
      'Slovenský šampion krásy mladých',
      'Český šampion',
      'Slovenský šampion krásy',
      'Klubový šampion',
      'Miss 2003',
    ],
    pedigree: 'https://db.bily-ovcak.cz/psi/2952/genny-lee-donnevara',
    breeds: [
      {
        name: 'Vrh A Whiteline Czech',
        image: breedImgs.vrhCh, // Podle požadavku
        href: '',
      },
      {
        name: 'Vrh B Whiteline Czech',
        image: breedImgs.vrhCh,
        href: '',
      },
      {
        name: 'Vrh C Whiteline Czech',
        image: breedImgs.vrhM,
        href: '',
      },
      {
        name: 'Vrh E Whiteline Czech',
        image: breedImgs.vrhM,
        href: '',
      },
      {
        name: 'Vrh N Donnevara',
        image: breedImgs.vrhM,
        href: '',
      },
      {
        name: 'Vrh P Donnevara',
        image: breedImgs.vrhM,
        href: '',
      },
      {
        name: 'Vrh R Donnevara',
        image: breedImgs.vrhM,
        href: '',
      },
      {
        name: 'Vrh T Donnevara',
        image: breedImgs.vrhM,
        href: '',
      },
    ],
    races: [], // Nejsou závody
    contests: [
      {
        date: '', // Data nejsou uvedena
        name: 'Česko - 5 x CAJC, 10 x CAC, 2 x R. CACIB, CACIB, 5 x BOB',
        grade: 'Nejlepší dorost, 2 x Národní vítěz, Vítěz Brna, Klubový vítěz KBO 2005',
      },
      {
        date: '',
        name: 'Slovensko - 3 x CAJC, 5 x CAC, CACIB, 2 x BOB',
        grade: '',
      },
      {
        date: '',
        name: 'Německo - Světová výstava 2003',
        grade: 'VD 3',
      },
      {
        date: '',
        name: 'Klubová výstava RWS 2005',
        grade: 'V1, CAC VDH',
      },
      {
        date: '',
        name: 'Rakousko - Alpentrophy 2005',
        grade: 'V2, R. CACA',
      },
      {
        date: '',
        name: 'Tulln 2005',
        grade: 'V1, CACA',
      },
    ],
    gallery: [], // Placeholder pro galerii
  },
  {
    id: 'hope-and-honor',
    name: 'Hope and Honor',
    breed: 'bílý švýcarský ovčák',
    type: 'nechovná fena',
    kennel: "von King's Silbertal",
    img: dogsImg.hope.smecka, // Placeholder
    alive: true,
    registration: 'VDH/RWS18/2998',
    birth: '6.1.2018',
    description: 'dlouhosrstá, DNA',
    health: ['MDR1 +/+*'],
    exams: [], // Nejsou uvedeny
    portrait: dogsImg.hope.portret, // Placeholder
    titles: [], // Nejsou uvedeny
    pedigree:
      'http://www.pedigreedatabase.com/white_shepherd/dog.html?id=2725015-hopen-honour-von-kings-silbertal',
    breeds: [], // Nemá vrhy
    races: [], // Nemá závody
    contests: [], // Nemá výstavy
    gallery: hopeImg.galleryLabels, // Placeholder pro galerii
  },
  {
    id: 'chessie',
    name: 'Chessie',
    breed: 'bílý švýcarský ovčák',
    type: 'chovná fena FCI',
    kennel: 'Whiteline Czech',
    img: dogsImg.chessie.smecka,
    alive: true,
    registration: 'CMKU/ACO/4444/18',
    birth: '19.6.2018',
    description: 'dlouhosrstá, 61 cm, plnochrupá, skus nůžkový',
    health: ['HD A', 'ED 0', 'MDR1 +/+*', 'DM N/N*'],
    exams: ['NHAT'],
    portrait: dogsImg.chessie.portret, // Placeholder pro portrét
    titles: [], // Není v datech uvedeno
    pedigree: 'https://db.bily-ovcak.cz/psi/1240/chessie-whiteline-czech',
    breeds: [
      {
        name: 'Vrh J',
        image: breedImgs.vrhJ, // Placeholder
        href: '', // Odkaz na galerii
      },
      {
        name: 'Vrh L',
        image: breedImgs.vrhL, // Placeholder
        href: '',
      },
      {
        name: 'Vrh N',
        image: breedImgs.vrhN, // Placeholder
        href: '',
      },
    ],
    races: [],
    contests: [
      {
        date: '11.1.2020',
        name: 'Hanácká národní výstava',
        grade: 'V2 Res.CAC- Ing. L. Jančík',
      },
      {
        date: '14.9.2019',
        name: 'Klubová výstava Česká Skalice',
        grade: 'VD- I. Nováková',
      },
    ],
    gallery: chessieImg.galleryLabels, // Placeholder pro galerii
  },
  {
    id: 'flying-free',
    name: 'Flying Free',
    breed: 'bílý švýcarský ovčák',
    type: 'chovná fena FCI',
    kennel: 'Weissen Unterberg', // Chovatelská stanice
    img: dogsImg.free.smecka, // Placeholder pro hlavní obrázek
    alive: true,
    registration: 'CMKU/ACO/4990/-20/19/20',
    birth: '13.2.2019',
    description: 'dlouhosrstá, 60 cm, plnochrupá, těsné nůžky',
    health: ['HD A', 'ED 0', 'DM N/N', 'MDR1 +/-'],
    exams: [], // Nejsou uvedeny žádné zkoušky
    portrait: dogsImg.free.portret, // Placeholder pro portrét
    titles: [],
    pedigree: 'https://db.bily-ovcak.cz/psi/6839/flying-free-vom-weissen-unterberg', // Odkaz na rodokmen, bude potřeba doplnit
    breeds: [
      {
        name: 'Vrh K',
        image: breedImgs.vrhK,
        href: 'https://www.rajce.idnes.cz/whitelineczech/album/vrh-k-whiteline-czech-bily-svycarsky-ovcak',
      },
    ],
    races: [],
    contests: [
      {
        date: '5.2.2022',
        name: 'DUO CACIB Brno',
        grade: 'VD- P. Márová',
      },
      {
        date: '11.9.2021',
        name: 'Klubová výstava Česká Skalice',
        grade: 'V- J. Karhanová',
      },
      {
        date: '12.6.2021',
        name: 'Klubová výstava Jedovnice',
        grade: 'V- P. Řehánek',
      },
      {
        date: '13.9.2020',
        name: 'Speciální výstava Česká Skalice',
        grade: 'V- O. Plšková',
      },
      {
        date: '12.9.2020',
        name: 'Klubová výstava Česká Skalice',
        grade: 'VD- V. Tichá',
      },
      {
        date: '11.1.2020',
        name: 'Hanácká národní výstava',
        grade: 'V1, CAJC, BOJ- Ing. L. Jančík',
      },
    ],
    gallery: freeImg.galleryLabels, // Placeholder pro galerii
  },
  {
    id: 'chupacabra',
    name: 'Chupacabra',
    breed: 'bílý švýcarský ovčák',
    type: 'nechovný pes',
    kennel: 'Whiteline Czech',
    img: dogsImg.chup.smecka, // Placeholder
    alive: true,
    registration: 'CMKU/ACO/4442/18',
    birth: '19.6.2018',
    description: 'dlouhosrstý, 65 cm, plnochrupý, skus klešťový',
    health: ['HD A', 'ED 0', 'MDR1 +/+*', 'DM N/N*'],
    exams: ['NHAT'],
    portrait: dogsImg.chup.portret, // Placeholder
    titles: [], // Nejsou uvedeny
    pedigree: 'https://db.bily-ovcak.cz/psi/1224/chupacabra-whiteline-czech',
    breeds: [], // Nemá vrhy
    races: [], // Nemá závody
    contests: [
      {
        date: '11.1.2020',
        name: 'Hanácká národní výstava',
        grade: 'V3- Ing. L. Jančík',
      },
      {
        date: '20.4.2019',
        name: 'MVP Praha',
        grade: 'V2- M. Redlicki (PL)',
      },
    ],
    gallery: chupImg.galleryLabels, // Placeholder pro galerii
  },
  {
    id: 'saruman',
    name: 'Saruman',
    breed: 'bílý švýcarský ovčák',
    type: 'pes',
    kennel: 'White Miraja',
    img: kodyImg.smecka, // Placeholder
    alive: false,
    registration: 'Z Reg/ACO/1745/06',
    birth: '5.4.2006',
    death: '27.2.2020', // Datum úmrtí
    description: 'krátkosrstý, plnochrupý, skus nůžkový',
    health: ['HD C', 'ED 0'],
    exams: [], // Nejsou uvedeny
    portrait: kodyImg.portret, // Placeholder
    titles: [], // Nejsou uvedeny
    pedigree: 'https://db.bily-ovcak.cz/psi/4578/saruman-white-miraja',
    breeds: [], // Nemá odchovy
    races: [], // Nemá závody
    contests: [
      {
        date: '21.9.2008',
        name: 'BBI CUP Česká Skalice',
        grade: 'V1, CAC',
      },
      {
        date: '29.3.2008',
        name: 'Specilání výstava Svojanov',
        grade: 'V1, CAC, VSV',
      },
      {
        date: '21.4.2007',
        name: 'MVP České Budějovice',
        grade: 'V1, CAJC, BOB',
      },
      {
        date: '7.10.2006',
        name: 'MVP České Budějovice',
        grade: 'VN',
      },
    ],
    gallery: kodyImg.galleryLabels, // Placeholder pro galerii
  },
  {
    id: 'tilda-tango',
    name: 'Tilda Tango',
    breed: 'Welsh Corgi Cardigan',
    type: 'chovná fena FCI',
    kennel: 'Lovlipon',
    img: tildaImg.smecka,
    alive: true,
    registration: 'CMKU/WCC/616/-22/21',
    birth: '19.12.2021',
    description: 'červená, krátkosrstá, 31.5 cm, plnochrupá, skus nůžkový',

    portrait: tildaImg.portret, // Placeholder
    titles: [], // Nejsou uvedeny
    pedigree:
      'https://genealogie.corgiklub.eu/fe-item1velord2/view/4877?filter=1%26Jmeno%3Dtilda%26Plemeno%3D0%26CisloZapisuOrder%3D0%26Barva%3D0%26Pohlavi%3D0%26DatNarozeni%3D0%26Chovnost%3D0%26DOG_FILTER_PROB_DKK%3D0%26DOG_FILTER_PROB_DLK%3D0%26DOG_FILTER_HEALTH%3D0%26DOG_FILTER_LAND%3D0%26DOG_FILTER_BREEDER%3D0%26filter%3Dfiltrovat%26_do%3DdogFilterForm-submit%26',
    breeds: [
      {
        name: 'Vrh A',
        image: breedImgs.cvrhA,
        href: '',
      },
    ], // Nemá vrhy
    races: [], // Nemá závody
    contests: [
      {
        date: '7.5.2023',
        name: 'Olomouc',
        grade: 'VD, CAC',
      },
    ], // Nemá výstavy
    gallery: tildaImg.galleryLabels, // Placeholder pro galerii
  },
];
