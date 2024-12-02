import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utilita pro inteligentní spojování CSS tříd
 * @param inputs - Pole CSS tříd, objektů podmíněných tříd nebo falsy hodnot
 * @returns Optimalizovaný řetězec CSS tříd
 *
 * Kombinuje sílu clsx pro podmíněné spojování tříd s twMerge pro optimalizaci
 * Tailwind CSS tříd a řešení konfliktů
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
