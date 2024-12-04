// hooks/useScrollLock.ts
import { useEffect } from "react";

/**
 * Hook pro zamezení scrollování stránky
 * Používá se při fullscreen módu pro lepší UX
 */
export const useScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    // Uchováme původní hodnotu overflow pro pozdější obnovení
    const originalOverflow = document.body.style.overflow;

    if (isLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup funkce obnoví původní stav
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isLocked]);
};
