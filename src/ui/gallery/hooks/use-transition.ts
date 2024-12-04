// hooks/use-transitions.ts
import { useState, useCallback, useEffect } from "react";

interface UseTransitionsProps {
  totalItems: number;
  transitionDuration?: number;
}

export const useTransitions = ({
  totalItems,
  transitionDuration = 300,
}: UseTransitionsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setActiveIndex(index);
    },
    [isTransitioning]
  );

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  }, [totalItems, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  }, [totalItems, isTransitioning]);

  // Reset transitioning stavu
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, transitionDuration);
    return () => clearTimeout(timer);
  }, [activeIndex, transitionDuration]);

  return {
    activeIndex,
    isTransitioning,
    goToSlide,
    nextSlide,
    prevSlide,
  };
};
