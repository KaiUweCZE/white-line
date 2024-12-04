// hooks/useKeyboardControls.ts
import { useEffect } from "react";

interface KeyboardShorcutsProps {
  isFullscreen: boolean;
  onExit: () => void;
  onNext: () => void;
  onPrev: () => void;
}

/**
 * Hook pro zpracování klávesových zkratek v galerii
 * Zpracovává Escape pro ukončení fullscreen módu a šipky pro navigaci
 */
export const useKeyboardShortcuts = ({
  isFullscreen,
  onExit,
  onNext,
  onPrev,
}: KeyboardShorcutsProps) => {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isFullscreen) return;

      switch (e.key) {
        case "Escape":
          onExit();
          break;
        case "ArrowRight":
          onNext();
          break;
        case "ArrowLeft":
          onPrev();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    // Cleanup při unmount
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFullscreen, onExit, onNext, onPrev]);
};
