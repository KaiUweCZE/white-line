import { useState, useCallback, useEffect } from 'react';
import { useSwipeable, SwipeableHandlers, SwipeableProps } from 'react-swipeable';

interface UseSwipeNavigationProps {
  itemCount: number;
  initialIndex?: number;
  onIndexChange?: (newIndex: number) => void;
  loop?: boolean;
  swipeConfig?: Partial<SwipeableProps>;
}

interface UseSwipeNavigationReturn {
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  goToNext: () => void;
  goToPrev: () => void;
  isSwiping: boolean;
  swipeHandlers: SwipeableHandlers;
  canGoNext: boolean;
  canGoPrev: boolean;
}

/**
 * Custom hook for navigation using swipe gestures
 *
 * @param itemCount Number of items to navigate between
 * @param initialIndex Initial index (default: 0)
 * @param onIndexChange Callback called when the index changes
 * @param loop Whether navigation should continue in a loop (default: true)
 * @param swipeConfig Configuration for react-swipeable
 * @returns Objects and functions for swipe navigation
 */
export const useSwipeNavigation = ({
  itemCount,
  initialIndex = 0,
  onIndexChange,
  loop = true,
  swipeConfig = {},
}: UseSwipeNavigationProps): UseSwipeNavigationReturn => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isSwiping, setIsSwiping] = useState(false);

  // Reset index
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  useEffect(() => {
    onIndexChange?.(currentIndex);
  }, [currentIndex, onIndexChange]);

  const canGoNext = loop || currentIndex < itemCount - 1;
  const canGoPrev = loop || currentIndex > 0;

  const goToNext = useCallback(() => {
    if (!canGoNext) return;

    setCurrentIndex((prevIndex) => {
      if (prevIndex === itemCount - 1) {
        return loop ? 0 : prevIndex;
      }
      return prevIndex + 1;
    });
  }, [itemCount, loop, canGoNext]);

  const goToPrev = useCallback(() => {
    if (!canGoPrev) return;

    setCurrentIndex((prevIndex) => {
      if (prevIndex === 0) {
        return loop ? itemCount - 1 : prevIndex;
      }
      return prevIndex - 1;
    });
  }, [itemCount, loop, canGoPrev]);

  const defaultSwipeConfig: SwipeableProps = {
    trackTouch: true,
    trackMouse: false,
    rotationAngle: 0,
    delta: 10,
    preventScrollOnSwipe: true,
    touchEventOptions: { passive: false },
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      goToNext();
    },
    onSwipedRight: () => {
      goToPrev();
    },
    onSwiping: () => {
      setIsSwiping(true);
    },
    onSwiped: () => {
      setIsSwiping(false);
    },
    ...defaultSwipeConfig,
    ...swipeConfig,
  });

  return {
    currentIndex,
    setCurrentIndex,
    goToNext,
    goToPrev,
    isSwiping,
    swipeHandlers,
    canGoNext,
    canGoPrev,
  };
};
