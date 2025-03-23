import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  hasMultipleImages: boolean;
  onPrev: () => void;
  onNext: () => void;
  activeIndex: number;
  isLast: boolean;
  isTransitioning: boolean;
}

const NavigationButtons = ({
  hasMultipleImages,
  onPrev,
  onNext,
  activeIndex,
  isTransitioning,
  isLast,
}: NavigationButtonsProps) => {
  if (!hasMultipleImages) return null;

  return (
    <>
      <button
        className="absolute left-4 p-2 z-10 place-self-center"
        onClick={onPrev}
        disabled={isTransitioning}
        aria-label="Předchozí obrázek"
      >
        <ArrowLeft
          className="arrow-icon h-6 w-6 transition-transform hover:scale-110"
          color="white"
          strokeWidth={4}
        />
      </button>
      <button
        className="absolute right-4 p-2 z-10 place-self-center "
        onClick={onNext}
        disabled={isTransitioning}
        aria-label="Další obrázek"
      >
        <ArrowRight
          className="arrow-icon h-6 w-6 transition-transform hover:scale-110"
          color="white"
          strokeWidth={4}
        />
      </button>
    </>
  );
};

export default NavigationButtons;
