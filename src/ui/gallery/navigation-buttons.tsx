import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationButtonsProps {
  hasMultipleImages: boolean;
  onPrev: () => void;
  onNext: () => void;
  isTransitioning: boolean;
}

const NavigationButtons = ({
  hasMultipleImages,
  onPrev,
  onNext,
  isTransitioning,
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
          className="arrow-icon h-8 w-8 transition-transform hover:scale-110 text-white hover:text-slate-200"
          strokeWidth={3}
        />
      </button>
      <button
        className="absolute right-4 p-2 z-10 place-self-center "
        onClick={onNext}
        disabled={isTransitioning}
        aria-label="Další obrázek"
      >
        <ArrowRight
          className="arrow-icon h-8 w-8 transition-transform hover:scale-110 text-white hover:text-slate-200"
          strokeWidth={3}
        />
      </button>
    </>
  );
};

export default NavigationButtons;
