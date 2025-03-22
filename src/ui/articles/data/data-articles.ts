import {
  italiePaseniImages,
  vrhPImages,
  corgiVrhAImages,
  fenixVeteranVystavaImages,
  kohinoorVystavaImages,
} from '@/assets/images/articles/2024';
import { Article } from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const galleryDefault = { width: 600, height: 350, expander: false };

export const newsData: Article[] = [
  {
    headline: 'Corgi vrh A',
    text: `V prosinci 2024 Narodil se nám první vrh Welsh corgi cardigan. Matka Lovitpon Tilda Tango a otec CIB Simba Tender Lion z Jurajskiego Zamku přivedli na svět 3 fenky a 1 psa. Porod proběhl bez komplikací.`,
    content: `V prosinci 2024 Narodil se nám první vrh Welsh corgi cardigan. Matka [Lovitpon Tilda Tango](https://whitelineczech.com/nasi-psi/tilda-tango) a otec **CIB Simba Tender Lion z Jurajskiego** Zamku přivedli na svět 3 fenky a 1 psa. Porod proběhl bez komplikací.

Pejsek se jmenuje **ALMQVIST** (pes) a fenky mají jména **ABBA**, **ASTRID** a **AXA** (feny).

Mezi 10. a 15. únorem 2025 všechna štěňata odešla do svých nových domovů. Novým majitelům děkujeme za důvěru a přejeme hodně radostných chvil.  
[Detail vrhu](https://whitelineczech.com/odchovy/cra)
`,
    time: '20.2.2025',
    year: 2025,
    images: [...corgiVrhAImages.gallery], // Zde by byly všechny obrázky
    labels: [
      'Simba(Otec) s Tildou',
      'Tilda a štěňata po porodu',
      'Abba 4 týdny',
      'Astrid 4 týdny',
      'Axa 4 týdny',
      'Almqvist 4 týdny',
      'Abba 5 týdnů',
      'Axa 5 týdnů',
      'Almqvist 5 týdnů',
    ],
    galleryOptions: { width: 500, height: 375, expander: false },
    sameSize: true,
    tags: { name: 'štěňata', type: 'puppies' },
    // lastUpdated: '25.1.2025' // Nové pole pro sledování aktualizací
  },
  {
    headline: 'Pasení v Itálii',
    text: `🏆 ME v pasení tradičním stylem 2024 🏆
Na loňském MČR jsme se s Frederikou kvalifikovali ze 2. místa na ME, které se tento rok konalo v Italském městečku Bibbona.
Celkem zde startovalo 31 psů z 11 zemí. Z kvalifikačních kol, která probíhala v pátek a v sobotu trať nikdo nedokončil a jen 11 týmům se podařilo získat body.
Do nedělního finále, kam postupovalo 10 nejlepších týmů, jsme se kvalifikovali ze 7. místa.
Ani finálové běhy se ale nepodařili dokončit všem, naštěstí jsme to s Frederikou nakonec zvládli a umístili se opět na 7. místě. 🏅
Děkuji za podporu Klubu bílého ovčáka!`,
    content: `### 🏆 ME v pasení tradičním stylem 2024 🏆

Na loňském MČR jsme se s **Frederikou** kvalifikovali ze 2. místa na ME, které se tento rok konalo v Italském městečku Bibbona.

Celkem zde startovalo **31 psů z 11 zemí**. Z kvalifikačních kol, která probíhala v pátek a v sobotu trať nikdo nedokončil a jen 11 týmům se podařilo získat body.

Do nedělního finále, kam postupovalo 10 nejlepších týmů, jsme se kvalifikovali ze **7. místa**.

Ani finálové běhy se ale nepodařili dokončit všem, naštěstí jsme to s Frederikou nakonec zvládli a umístili se opět na **7. místě**. 🏅

---

Děkuji za podporu [Klubu bílého ovčáka](https://www.bily-ovcak.cz/)!`,
    time: '8.říjen 2024',
    year: 2024,
    images: [...italiePaseniImages.gallery],
    labels: [...italiePaseniImages.labels],
    galleryOptions: { width: 600, height: 450, expander: false },
    tags: { name: 'závody', type: 'races' },
  },

  {
    headline: 'Vrh P - Bílý švýcarský ovčák',
    text: `22.6.2024 se narodil náš vrh 🅿️
Fridě a Largovi se narodili 3 chlapečci a 1 holčička 
💙💙💙❤️
Všichni jsou v pořádku a štěňátka jsou už zamluvena`,
    content: `

 V červenu 2024 přivítala naše chovatelská stanice vrh 🅿️ bílého švýcarského ovčáka. Matce **Frídě** a otci **Largovi** se narodili tři psi a jedna fena (3💙 + 1❤️). Všechna štěňata jsou v perfektním zdravotním stavu a již mají své budoucí majitele.

V polovině července jsme začali s postupnou socializací. První vycházky do venkovního prostředí proběhly bez problémů. Pro identifikaci používáme barevné rozlišení - **modrý**, **zelený**, **červený** a naše jediná **fenka**.

O týden později byla štěňata přesunuta do prostorného venkovního výběhu.

Děkujeme budoucím majitelům za projevenou důvěru a přejeme mnoho společných radostných chvil.

[Detail odchovu vrhu P](https://whitelineczech.com/odchovy/swp)`,
    time: '22.června 2024',
    year: 2024,
    images: [...vrhPImages.gallery],
    labels: [
      'Matka Freeda a otec Largo',
      'Freeda se štěňaty na zahradě',
      'Freeda se štěňaty na zahradě',
      'Freeda a štěňata na zahradě',
      'Modrý pejsek 1 týden',
      'Žlutý pejsek 1 týden',
      'Červený pejsek 1 týden',
      'Fenka 1 týden',
      'Modrý pejsek na zahradě',
      'Žlutý pejsek na zahradě',
      'Fenka na zahradě',
    ],
    sameSize: false,
    galleryOptions: { width: 500, height: 350, expander: false },
    tags: { name: 'štěňata', type: 'puppies' },
  },
  {
    headline: 'Výstava',
    text: `Poprvé jsme se s Fenixem zúčastnili výstavy ve třídě veteránů a odešli jsme s pěkným posudkem a hodnocením V1, CACIB-V, BOV 🏆🥇`,
    time: '27.1.2024',
    year: 2024,
    images: [...fenixVeteranVystavaImages.gallery],
    labels: [...fenixVeteranVystavaImages.labels],
    galleryOptions: { width: 360, height: 450, expander: false },
    tags: { name: 'výstava', type: 'exhibition' },
  },
  {
    headline: 'Výstava',
    text: `Kohinoor WLCZ (Frida&Fenix) v pátek 19.1. oslavil 3. narozeniny a s majitelem se o víkendu ukázali na výstavě v Bratislavě.
Kohinoor je na Slovensku chovným psem a na letošní rok má plánované krytí v ČR.`,
    time: '22.1.2024',
    year: 2024,
    images: [...kohinoorVystavaImages.gallery],
    labels: [...kohinoorVystavaImages.labels],
    galleryOptions: { width: 540, height: 600, expander: false },
    tags: { name: 'výstava', type: 'exhibition' },
  },
];
