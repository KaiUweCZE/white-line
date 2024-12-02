// src/app/fonts/fonts.ts
import localFont from "next/font/local";

export const parkinsans = localFont({
  src: [
    {
      path: "./Parkinsans-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Parkinsans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Parkinsans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./Parkinsans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Parkinsans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Parkinsans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-parkinsans",
  display: "swap", // Zajistí rychlé zobrazení textu i během načítání fontu
});
