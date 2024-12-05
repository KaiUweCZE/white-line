import img1 from "@/assets/images/news/a.jpg";
import img2 from "@/assets/images/news/b.jpg";
import img3 from "@/assets/images/news/c.jpg";
import img4 from "@/assets/images/news/d.jpg";

import img13cervena from "@/assets/images/news/a.jpg";
import img13cervenb from "@/assets/images/news/b.jpg";
import img13cervenc from "@/assets/images/news/c.jpg";
import img13cervend from "@/assets/images/news/d.jpg";
import img13cervene from "@/assets/images/news/e.webp";
import img13cervenf from "@/assets/images/news/f.webp";
import img13cerveng from "@/assets/images/news/g.webp";

import cerven20a from "@/assets/images/news/20cerven/a.webp";
import cerven20b from "@/assets/images/news/20cerven/b.webp";
import cerven20c from "@/assets/images/news/20cerven/c.webp";
import cerven20d from "@/assets/images/news/20cerven/d.webp";

import tilda2811a from "../images/tilda-28-11-2024(1).jpeg"

import { Article } from "../types";

const galleryDefault = { width: 600, height: 350, expander: false };

export const newsData: Article[] = [
  {
    headline: "Corgi Vrh A",
    text: `Před Vánoci očekáváme narození našeho prvního vrhu plemene Welsh corgi cardigan🧡
Za letáček děkujeme EWE Design - Grafika pro chovatele - Graphics for breeders`,
    time: "10.říjen 2024",
    year: 2024,
    images: [tilda2811a],
    labels: ["Frída a štěňata", "modrý kluk", "zelený kluk", "červený kluk"],
    galleryOptions: { width: 600, height: 450, expander: false },
    tags: { name: "štěňata", type: "puppies" },
  },
  {
    headline: "Štěňátka se budou stěhovat",
    text: "Štěňátka se budou již brzy stěhovat do venkovního výběhu, a tak jsme využili pěkného počasí a vzali je poprvé ven",
    time: "12.červenec 2024",
    year: 2024,
    images: [img1, img2, img3, img4],
    labels: ["Frída a štěňata", "modrý kluk", "zelený kluk", "červený kluk"],
    galleryOptions: galleryDefault,
    tags: { name: "závody", type: "races" },
  },
  {
    headline: "Fotky vrhu P",
    text: "Fotky štěňátek",
    time: "13.červenec 2024",
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
    labels: ["Frída s dětmi", "červený pejsek", "fenka", "fenka", "leták", "frída s dětmi", "frída s dětmi"],
    galleryOptions: galleryDefault,
    tags: { name: "závody", type: "races" },
  },
  {
    headline: "2 týdny",
    text: `Štěňátka z vrhu ,,P” (Frida&Largo) oslavila včera 2 týdny.
     Všechna už mají otevřená očka, dostala první odčervení a mají se čile k světu`,
    time: "7.červenec 2024",
    year: 2024,
    images: [],
    labels: [],
    galleryOptions: galleryDefault,
    tags: { name: "výstava", type: "exhibition" },
  },
  {
    headline: "Narodila se štěňata",
    text: `22.6.2024 se narodil náš vrh 🅿️
Fridě a Largovi se narodili 3 chlapečci a 1 holčička 
💙💙💙❤️
Všichni jsou v pořádku a štěňátka jsou už zamluvena`,
    time: "22.června 2023",
    year: 2023,
    images: [cerven20a, cerven20b, cerven20c, cerven20d],
    labels: ["fenka", "žlut pejsek", "červený pejsek", "modrý pejsek"],
    galleryOptions: { width: 300, height: 525, expander: false },
    tags: { name: "štěňata", type: "puppies" },
  },
];
