import { useEffect, useRef, useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight, X, Info } from 'lucide-react';
import Button from '@/ui/primitives/button';
import { useSwipeNavigation } from '@/hooks/useSwipeNavigation';
import SwipeInfo from '@/ui/swipe-info';

interface ImageViewerProps {
  active: boolean;
  setActive: (active: boolean) => void;
  images: StaticImageData[];
  initialIndex: number;
  captions?: string[];
}

const ImageViewer = ({ active, setActive, images, initialIndex, captions }: ImageViewerProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const [showSwipeGuide, setShowSwipeGuide] = useState(true);

  const { currentIndex, setCurrentIndex, goToNext, goToPrev, isSwiping, swipeHandlers } =
    useSwipeNavigation({
      itemCount: images.length,
      initialIndex,
      swipeConfig: {
        trackTouch: true,
        delta: 10,
        preventScrollOnSwipe: true,
      },
    });

  const closeViewer = useCallback(() => {
    setActive(false);
  }, [setActive]);

  useEffect(() => {
    if (isSwiping) {
      setShowSwipeGuide(false);
    }
  }, [isSwiping]);

  // Handle keydown
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeViewer();
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
      } else if (event.key === 'i') {
        setShowInfo((prev) => !prev);
      }
    };

    if (active) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [active, closeViewer, goToNext, goToPrev]);

  // Update index when viewer is activated
  useEffect(() => {
    if (active) {
      setCurrentIndex(initialIndex);
    }
  }, [active, initialIndex, setCurrentIndex]);

  useEffect(() => {
    if (active) {
      setCurrentIndex(initialIndex);
      setShowSwipeGuide(true); // Reset after each open
    }
  }, [active, initialIndex, setCurrentIndex]);

  if (!active) return null;

  return (
    <div
      className="image-viewer fixed inset-0 z-50 flex items-center justify-center bg-black/80 transition-all duration-300"
      aria-modal="true"
      role="dialog"
      aria-label="Prohlížeč obrázků"
    >
      {showSwipeGuide && <SwipeInfo hideTrigger={isSwiping} />}
      <Button
        onClick={closeViewer}
        className="absolute top-0 rounded-bl-lg right-0 z-10 p-2 bg-black/50 hover:bg-black/70 transition-colors"
        aria-label="Zavřít prohlížeč"
      >
        <X className="w-7 h-7" color="white" />
      </Button>

      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <Button
            onClick={goToPrev}
            className="button-arrow absolute left-0 p-2 rounded-r-lg bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Předchozí obrázek"
          >
            <ArrowLeft className="arrow w-7 h-7" color="white" />
          </Button>

          <Button
            onClick={goToNext}
            className="button-arrow absolute right-0 p-2 rounded-l-lg bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Další obrázek"
          >
            <ArrowRight className="arrow w-7 h-7" color="white" />
          </Button>
        </>
      )}
      <div className="absolute top-5 left-5 bg-black/70 text-white px-3 py-1 rounded-lg z-50">
        {isSwiping ? 'Swipuji...' : `Obrázek ${currentIndex + 1} / ${images.length}`}
      </div>
      {/* Main image*/}
      <div
        {...swipeHandlers}
        className="relative w-full h-full flex items-center justify-center"
        style={{ touchAction: 'none' }}
      >
        <Image
          src={images[currentIndex]}
          alt={captions?.[currentIndex] || `Obrázek ${currentIndex + 1}`}
          className="object-contain max-h-screen h-auto w-auto"
          height={images[currentIndex].height}
          priority
          placeholder="blur"
        />

        {/* caption about picture*/}
        {showInfo && captions && captions[currentIndex] && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm md:text-base">{captions[currentIndex]}</p>
          </div>
        )}

        {/* position dots*/}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <Button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-white' : 'bg-white/50'
                }`}
                aria-label={`Přejít na obrázek ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageViewer;
