import {
  vrhAImages,
  italiePaseniImages,
  vrhPNarozeniImages,
  stenataVenkuImages,
  vrhPFotkyImages,
  corgiVrhAImages,
  fenixVeteranVystavaImages,
  kohinoorVystavaImages,
} from '@/assets/images/articles/2024';
import { Article } from '../types';

const galleryDefault = { width: 600, height: 350, expander: false };

export const newsData: Article[] = [
  {
    headline: 'Welsh corgi cardigan - vrh A',
    text: `V prosinci 2024 Narodil se nám první vrh Welsh corgi cardigan. Matka Lovitpon Tilda Tango a otec CIB Simba Tender Lion z Jurajskiego Zamku přivedli na svět 3 fenky a 1 psa. Porod proběhl bez komplikací.`,
    content: `V prosinci 2024 Narodil se nám první vrh Welsh corgi cardigan. Matka [Lovitpon Tilda Tango](https://whitelineczech.com/nasi-psi/tilda-tango) a otec **CIB Simba Tender Lion z Jurajskiego** Zamku přivedli na svět 3 fenky a 1 psa. Porod proběhl bez komplikací.

Pejsek se jmenuje **ALMQVIST** (pes) a fenky mají jména **ABBA**, **ASTRID** a **AXA** (feny).

Mezi 10. a 15. únorem 2025 všechna štěňata odešla do svých nových domovů. Novým majitelům děkujeme za důvěru a přejeme hodně radostných chvil.  
[Detail vrhu](https://whitelineczech.com/odchovy/cra)
`,
    time: '20.2.2025',
    year: 2025,
    images: [...corgiVrhAImages.gallery, ...vrhAImages.gallery], // Zde by byly všechny obrázky
    labels: ['Vrh A', 'Welsh corgi cardigan', 'štěňata', 'ALMQVIST', 'ABBA', 'ASTRID', 'AXA'],
    galleryOptions: { width: 500, height: 375, expander: false },
    sameSize: true,
    tags: { name: 'štěňata', type: 'puppies' },
    // lastUpdated: '25.1.2025' // Nové pole pro sledování aktualizací
  },
  /*{
    headline: 'Narodil se vrh A',
    text: `20.12. se nám narodil náš první vrh cardiganů ve složení 3 fenky a 1 pejsek.🧡🧡🧡
Porod proběhl přirozeně, bez komplikací a maminka i štěňátka jsou v pořádku.`,
    time: '20.12.2024',
    year: 2024,
    images: [...corgiVrhAImages.gallery],
    labels: [...corgiVrhAImages.labels],
    sameSize: false,
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
    labels: [...vrhAImages.labels],
    galleryOptions: { width: 600, height: 450, expander: false },
    tags: { name: 'štěňata', type: 'puppies' },
  },*/

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

o 31 psů z 11 zemí. Z kvalifikačních kol, která probíhala v pátek a v sobotu trať nikdo nedokončil a jen 11 týmům se podařilo získat body.
Do nedělního finále, kam postupovalo 10 nejlepších týmů, jsme se kvalifikovali ze 7. místa.
Ani finálové běhy se ale nepodařili dokončit všem, naštěstí jsme to s Frederikou nakonec zvládli a umístili se opět na 7. místě. 🏅
Děkuji za podporu Klubu bílého ovčáka!
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
    labels: [...vrhPFotkyImages.labels],
    galleryOptions: galleryDefault,
    tags: { name: 'závody', type: 'races' },
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
