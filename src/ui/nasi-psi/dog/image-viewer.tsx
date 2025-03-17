import { useEffect, useRef, useState, useCallback } from 'react';
import Image, { StaticImageData } from 'next/image';
import { ArrowLeft, ArrowRight, X, Info } from 'lucide-react';
import Button from '@/ui/primitives/button';

interface ImageViewerProps {
  active: boolean;
  setActive: (active: boolean) => void;
  images: StaticImageData[];
  initialIndex: number;
  captions?: string[];
}

const ImageViewer = ({ active, setActive, images, initialIndex, captions }: ImageViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [showInfo, setShowInfo] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const closeViewer = useCallback(() => {
    setActive(false);
  }, [setActive]);

  // Navigace mezi obrázky
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  }, [images.length]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  }, [images.length]);

  // Zpracování kláves a kliknutí
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

    const handleOverlayClick = (event: MouseEvent) => {
      // Zavřít viewer při kliknutí mimo obrázek
      if (event.target === overlayRef.current) {
        closeViewer();
      }
    };

    if (active) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden'; // Zabránit scrollování stránky
      overlayRef.current?.addEventListener('click', handleOverlayClick);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = ''; // Vrátit scrollování
      overlayRef.current?.removeEventListener('click', handleOverlayClick);
    };
  }, [active, closeViewer, goToNext, goToPrev]);

  useEffect(() => {
    if (active) {
      setCurrentIndex(initialIndex);
    }
  }, [initialIndex, active]);

  // Pokud není aktivní, nic nerendrujeme
  if (!active) return null;

  return (
    <div
      ref={overlayRef}
      className="image-viewer fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm transition-all duration-300"
      aria-modal="true"
      role="dialog"
      aria-label="Prohlížeč obrázků"
    >
      {/* Ovládací prvky */}
      <Button
        onClick={closeViewer}
        className="absolute top-0 rounded-bl-lg right-0 z-10 p-2  bg-black/50 hover:bg-black/70 transition-colors"
        aria-label="Zavřít prohlížeč"
      >
        <X className="w-7 h-7" color="white" />
      </Button>

      {/* Navigační šipky - pouze pokud máme více obrázků */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-0 p-2 rounded-r-lg bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Předchozí obrázek"
          >
            <ArrowLeft className="w-7 h-7" color="white" />
          </button>

          <Button
            onClick={goToNext}
            className="absolute right-0 p-2 rounded-l-lg bg-black/50 hover:bg-black/70 transition-colors"
            aria-label="Další obrázek"
          >
            <ArrowRight className="w-7 h-7" color="white" />
          </Button>
        </>
      )}

      {/* Tlačítko pro informace - pouze pokud máme popisky */}
      {captions && captions[currentIndex] && (
        <Button
          onClick={() => setShowInfo(!showInfo)}
          className="absolute bottom-0 right-0 z-10 p-2 rounded-tl-lg  bg-black/50 hover:bg-black/70 transition-colors"
          aria-label={showInfo ? 'Skrýt popisek' : 'Zobrazit popisek'}
        >
          <Info className="w-7 h-7" color="white" />
        </Button>
      )}

      {/* Hlavní obsah - obrázek */}
      <div ref={imageRef} className="grid relative w-fit h-full max-w-6xl max-h-full">
        <Image
          src={images[currentIndex]}
          alt={captions?.[currentIndex] || `Obrázek ${currentIndex + 1}`}
          className="object-contain place-self-center transition-opacity duration-300 max-h-screen h-full"
          height={images[currentIndex].height}
          priority
          placeholder="blur"
        />

        {/* Informace o obrázku */}
        {showInfo && captions && captions[currentIndex] && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white text-sm md:text-base">{captions[currentIndex]}</p>
          </div>
        )}

        {/* Indikátor pozice (tečky) - pouze pokud máme více obrázků */}
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
