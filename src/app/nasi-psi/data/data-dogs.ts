import alexiaMain from "@/assets/images/our-dogs/Alexia_smecka.webp";
import alliaMain from "@/assets/images/our-dogs/Allia_smecka.webp";
import artabanMain from "@/assets/images/our-dogs/artaban_smecka.webp";
import fenixMain from "@/assets/images/our-dogs/fenix_smecka.webp";
import frederikaMain from "@/assets/images/our-dogs/frederika_smecka.webp";
import freeMain from "@/assets/images/our-dogs/free_smecka.webp";
import gennyMain from "@/assets/images/our-dogs/Genny_smecka.webp";
import hopeMain from "@/assets/images/our-dogs/hope_smecka.webp";
import chessieMain from "@/assets/images/our-dogs/chessie_smecka.webp";
import chupMain from "@/assets/images/our-dogs/chup_smecka.webp";
import sarumanMain from "@/assets/images/our-dogs/saruman_smecka.webp";
import tildaMain from "@/assets/images/our-dogs/tilda_smecka.webp";
import frederikaPortret from "@/assets/images/our-dogs/frederika/frederika_portret.webp";
import freePortret from "@/assets/images/our-dogs/free/free_portret.webp";
import fenixPortret from "@/assets/images/our-dogs/fenix/fenix_portret.webp";
import chessiePortret from "@/assets/images/our-dogs/chessie/chessie_portret.webp";
import vrhChImg from "@/assets/images/our-breed/vrhch.jpg";
import vrhIImg from "@/assets/images/our-breed/vrhi.jpg";
import vrhMImg from "@/assets/images/our-breed/vrhm.jpg";
import vrhKImg from "@/assets/images/our-breed/vrhk.jpg";
import vrhJImg from "@/assets/images/our-breed/vrhj.jpg";

import frederikaGallery1 from "@/assets/images/our-dogs/frederika/gallery/rika-pase.webp";
import frederikaGallery2 from "@/assets/images/our-dogs/frederika/gallery/3header.webp";
import frederikaGallery3 from "@/assets/images/our-dogs/frederika/gallery/corgi.webp";

export const dataDogs = [
  {
    name: "Alexia",
    breed: "",
    img: alexiaMain,
    alive: false,
  },
  {
    name: "Allia",
    breed: "",
    img: alliaMain,
    alive: false,
  },
  {
    name: "Artaban",
    breed: "",
    img: artabanMain,
    alive: false,
  },
  {
    name: "Fenix",
    breed: "",
    img: fenixMain,
    alive: true,
    info: {
      section: {
        li: [
          "chovný pes",
          "plemeno: bílý švýcarský ovčák",
          "číslo zápisu: Z Reg/ACO/3554/15/17",
          "datum narození: 27.5.2015",
          "dlouhosrstý, 65 cm, plnochrupý, skus nůžkový, DNA",
          "zdraví: HD A, ED 0, MDR1 +/+, DM N/N",
        ],
        trials: ["zkoušky: BH-VT,", "HWT,", "NHAT"],
        link: "https://db.bily-ovcak.cz/psi/376/frederika-bila-merci",
        portrait: fenixPortret,
      },
      children: [
        "B White Essence Fenix & Baby Ely Falco line 3 psi + 2 feny",
        "A pod Javorovým Fenix & Lotty z Blatenských luk 3 psi + 2 feny",
      ],
      contests: [
        "5.2.2022 DUO CACIB Brno- V2, Res. CAC- P. Márová",
        "11.9.2021 Klubová výstava Česká Skalice- V- J. Karhanová",
        "12.6.2021 Klubová výstava Jedovnice- V3- P. Řehánek",
        "13.9.2020 Speciální výstava Česká Skalice- VD- O. Plšková",
        "12.9.2020 Klubová výstava Česká Skalice- V- V. Tichá",
        "11.1.2020 Hanácká národní výstava- V1, CAC- Ing. L. Jančík",
        "14.9.2019 Klubová výstava České Skalice- V3- I. Nováková",
        "20.4.2019 MVP Praha- V2, Res. CAC- M. Redlicki (PL)",
        "23.3.2019 Speciální výstava Dětřichov- V3- V. Staviarská (SK)",
        "2.2.2019 DUO CACIB Brno- V2, Res. CAC- J. Matyáš (SK)",
        "8.9.2018 Klubová výstava Česká Skalice- V2, Res.CAC- Ing. J. Karhanová",
        "19.5.2018 Slovenská klubová výstava Kamenný Mlyn- V2, Res.CAC- E. Deutscher (A)",
        "31.3.2018 Speciální výstava Dětřichov- V1, CAC- T. Havelka (SK)",
        "4.11.2017 DOUBLE CACIB Prague- V1, CAC- L. Željko (PL)",
        "9.9.2017 Klubová výstava Česká Skalice- V3- Ing. L. Jančík",
        "13.5.2017 Slovenská klubová výstava Kamenný Mlyn- V3- Mgr. V. Staviarská (SK)",
        "15.4.2017 Speciální výstava Svojanov- VD2- V. Tichá",
        "8.4.2017 Národní výstava Ostrava- VD1- M. Václavík",
      ],
    },
  },
  {
    name: "Frederika",
    breed: "bílý švýcarský ovčák",
    type: "chovná fena",
    img: frederikaMain,
    alive: true,
    registration: "Z Reg/ACO/3556/15/18",
    birth: "27.5.2015",
    description: "dlouhosrstá, 61 cm, plnochrupá, skus nůžkový",
    health: [" HD A", "ED 0", "MDR1 +/+", "DM N/N"],
    exams: ["IHT3-TS,", "IHT2-TS,", "IHT1-TS,", "HWT,", "NHAT"],
    portrait: frederikaPortret,
    titles: ["Český šampion práce", "Mistr ČR v pasení TS 2022"],
    pedigree: "https://db.bily-ovcak.cz/psi/376/frederika-bila-merci",
    breeds: [
      {
        name: "Vrh Ch",
        image: vrhChImg,
        href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-litter-ch-whiteline-czech",
      },
      {
        name: "Vrh I",
        image: vrhIImg,
        href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-i-whiteline-czech-bily-svycarsky-ovcak",
      },
      {
        name: "Vrh M",
        image: vrhMImg,
        href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-m-whiteline-czech-bily-svycarsky-ovcak",
      },
    ],
    races: [
      {
        date: "6.6.2022",
        name: "Pentecost-Trial",
        result: "IHT3- 86%- velmi dobrá- 4. místo",
      },
      {
        date: "5.6.2022",
        name: "Pentecost-Trial",
        result: "IHT3- 64%- SAT- 5. místo",
      },
      { date: "28.5.2022", name: "Těně", result: "IHT3- 75%- dobrá- 7. místo" },
      {
        date: "27.5.2022",
        name: "Těně",
        result: "IHT3- 93%- výborná- 1. místo- CACT, CACITR",
      },
      {
        date: "6.5.2022",
        name: "Podbradec",
        result: "IHT3- 89%- velmi dobrá- 2- místo",
      },
      {
        date: "15.-17.4.2022",
        name: "Székesfehérvár",
        result: "IHT3- 69%- SAT- 5. místo",
      },
      {
        date: "17.10.2021",
        name: "Těně",
        result: "IHT3- 73%- dobrá- 6. místo",
      },
      {
        date: "27.9.2021",
        name: "Načešice",
        result: "IHT3- 85%- velmi dobrá- 1. místo- CACT",
      },
      {
        date: "26.9.2021",
        name: "Pohořelice",
        result: "IHT3- 95%- výborná- 3. místo",
      },
      {
        date: "18.9.2021",
        name: "Martínkovice",
        result: "IHT3- 85%- velmi dobrá- 5. místo- CACT",
      },
      {
        date: "29.8.2021",
        name: "Těně",
        result: "MČR IHT2- 78%- dobrá- 7. místo",
      },
      {
        date: "10.7.2021",
        name: "Pohořelice",
        result: "IHT2- 82%- velmi dobrá- 4. místo",
      },
      {
        date: "3.7.2021",
        name: "Martínkovice",
        result: "IHT2- 91%- výborná- 2. místo",
      },
      {
        date: "29.5.2021",
        name: "Pohořelice",
        result: "IHT2- 91%- výborná- 1. místo",
      },
      {
        date: "3.10.2020",
        name: "Martínkovice",
        result: "IHT2- 73%- dobrá- 5- místo",
      },
      {
        date: "28.9.2020",
        name: "Těně",
        result: "MČR IHT1- 88%- velmi dobrá- 5. místo",
      },
      {
        date: "2.11.2019",
        name: "Těně",
        result: "farma závod Dopasná- 5. místo",
      },
      {
        date: "22.9.2019",
        name: "Načešice",
        result: "IHT1- 94%- výborná- 2. místo",
      },
      {
        date: "11.8.2019",
        name: "Budišov",
        result: "IHT1- 87%- velmi dobrá- 3. místo",
      },
      {
        date: "23.3.2019",
        name: "Těně",
        result: "farma závod Rozpasná- 3. místo",
      },
      {
        date: "16.3.2019",
        name: "Načešice",
        result: "IHT1- 85%- velmi dobrá- 5.místo",
      },
      {
        date: "4.11.2017",
        name: "Libhošť",
        result: "IHT1- 84%- výborná- 3. místo",
      },
    ],

    contests: [
      {
        date: "12.6.2021",
        name: "Klubová výstava Jedovnice",
        grade: "V- P. Řehánek",
      },
      {
        date: "11.1.2020",
        name: "Hanácká národní výstava",
        grade: "V1, CAC- Ing. L. Jančík",
      },
      {
        date: "9.6.2019",
        name: "Klubová výstava Nová Živohošť",
        grade: "V1, CAC- Ing. L. Jančík",
      },
      {
        date: "23.3.2019",
        name: "Speciální výstava Dětřichov",
        grade: "V- V. Staviarská (SK)",
      },
      { date: "2.2.2019", name: "DUO CACIB Brno", grade: "V3- J. Matyáš (SK)" },
      {
        date: "12.1.2019",
        name: "Hanácká národní výstava",
        grade: "V1, CAC- MVDr. V. Piskay (SK)",
      },
      {
        date: "6.4.2018",
        name: "Národní výstava Ostrava",
        grade: "V1, CAC- P. Márová",
      },
      {
        date: "31.3.2018",
        name: "Speciální výstava Dětřichov",
        grade: "V-T. Havelka (SK)",
      },
      {
        date: "9.9.2017",
        name: "Klubová výstava Česká Skalice",
        grade: "V1, CAC-Ing. L. Jančík",
      },
      {
        date: "13.5.2017",
        name: "Slovenská klubová výstava Kamenný Mlyn",
        grade: "V3-Mgr. V. Staviarská (SK)",
      },
      {
        date: "15.4.2017",
        name: "Speciální výstava Svojanov",
        grade: "VD-Vl. Tichá",
      },
      {
        date: "8.4.2017",
        name: "Národní výstava Ostrava",
        grade: "VD2-M. Václavík",
      },
      {
        date: "6.2.2016",
        name: "DUO CACIB Brno",
        grade: "VN3- A. Redlicka (PL)",
      },
      {
        date: "9.1.2016",
        name: "Hanácká národní výstava",
        grade: "VN1- Ing. L. Jančík",
      },
    ],

    gallery: [frederikaGallery1, frederikaGallery2, frederikaGallery3],
  },
  {
    name: "Free",
    breed: "",
    img: freeMain,
    alive: true,
    info: {
      section: {
        li: [
          "chovná fena",
          "plemeno: bílý švýcarský ovčák",
          "číslo zápisu: CMKU/ACO/4990/-20/19/20",
          "datum narození: 13.2.2019",
          "dlouhosrstá, 60 cm, plnochrupá, těsné nůžky",
          "zdraví: HD A, ED 0, DM N/N, MDR1 +/-",
        ],
        link: "https://db.bily-ovcak.cz/psi/376/frederika-bila-merci",
        portrait: freePortret,
        breed: [
          {
            name: "Vrh K",
            image: vrhKImg,
            href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-k-whiteline-czech-bily-svycarsky-ovcak",
          },
        ],
      },
      contests: [
        "5.2.2022 DUO CACIB Brno- VD- P. Márová",
        "11.9.2021 Klubová výstava Česká Skalice- V- J. Karhanová",
        "12.6.2021 Klubová výstava Jedovnice- V- P. Řehánek",
        "13.9.2020 Speciální výstava Česká Skalice- V- O. Plšková",
        "12.9.2020 Klubová výstava Česká Skalice- VD- V. Tichá",
        "11.1.2020 Hanácká národní výstava- V1, CAJC, BOJ- Ing. L. Jančík",
      ],
    },
  },
  {
    name: "Genny",
    breed: "",
    img: gennyMain,
    alive: false,
  },
  {
    name: "Hope",
    breed: "",
    img: hopeMain,
    alive: true,
  },
  {
    name: "Chessie",
    breed: "",
    img: chessieMain,
    alive: true,
    info: {
      section: {
        li: [
          "chovná fena",
          "plemeno: bílý švýcarský ovčák",
          "číslo zápisu: CMKU/ACO/4444/18",
          "datum narození: 19.6.2018",
          "dlouhosrstá, 61 cm, plnochrupá, skus nůžkový",
          "zdraví: HD A, ED 0, MDR1 +/+*, DM N/N*",
        ],
        link: "https://db.bily-ovcak.cz/psi/376/frederika-bila-merci",
        portrait: chessiePortret,
        breed: [
          {
            name: "Vrh J",
            image: vrhJImg,
            href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-j-whiteline-czech-bily-svycarsky-ovcak",
          },
          {
            name: "Vrh L",
            image: vrhIImg,
            href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-i-whiteline-czech-bily-svycarsky-ovcak",
          },
          {
            name: "Vrh N",
            image: vrhMImg,
            href: "https://www.rajce.idnes.cz/whitelineczech/album/vrh-m-whiteline-czech-bily-svycarsky-ovcak",
          },
        ],
      },
      contests: [
        "11.1.2020 Hanácká národní výstava- V2 Res.CAC- Ing. L. Jančík",
        "14.9.2019 Klubová výstava Česká Skalice- VD- I. Nováková",
      ],
    },
  },
  {
    name: "Chupacabra",
    breed: "",
    img: chupMain,
    alive: true,
  },
  {
    name: "Saruman",
    breed: "",
    img: sarumanMain,
    alive: false,
  },
  {
    name: "Tilda",
    breed: "",
    img: tildaMain,
    alive: true,
  },
];
