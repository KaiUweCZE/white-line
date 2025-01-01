import { ArrowLeft, ArrowRight, Info, Maximize2, X } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';

interface GalleryContentProps {
  images: StaticImageData[];
  labels: string[];
  activeIndex: number;
  isTransitioning: boolean;
  isFullscreen: boolean;
  width?: number;
  height?: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
  onFullscreenToggle: () => void;
  fullscreen: boolean;
  sameSize?: boolean;
}

const GalleryContent = ({
  images,
  labels,
  activeIndex,
  isTransitioning,
  isFullscreen,
  fullscreen,
  width,
  height,
  onNext,
  onPrev,
  onDotClick,
  onFullscreenToggle,
  sameSize,
}: GalleryContentProps) => {
  const [activeInfo, setActiveInfo] = useState(false);
  return (
    <div
      className={`grid relative mx-auto ${isFullscreen ? 'w-screen h-screen' : 'max-w-full'}`}
      style={
        !isFullscreen
          ? {
              width: width ? `${width}px` : '100%',
              maxWidth: '100%',
            }
          : undefined
      }
    >
      {/* Carousel wrapper */}
      <div
        className={`relative overflow-hidden w-full gallery primary-shadow ${
          isFullscreen ? 'rounded-none' : 'rounded-lg'
        }`}
        style={
          !isFullscreen
            ? {
                paddingBottom: `${((height || 400) / (width || 600)) * 100}%`,
                position: 'relative',
              }
            : undefined
        }
      >
        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              <Image
                src={img}
                alt={labels[index]}
                fill
                placeholder="blur"
                className={`${isFullscreen || !sameSize ? 'object-contain' : 'object-cover'} ${
                  isFullscreen ? 'bg-black/90' : ''
                }`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ovládací prvky */}
      {images.length > 1 && (
        <>
          {' '}
          <ArrowLeft
            className="absolute arrow-icon h-6 w-6 left-4 cursor-pointer place-self-center hover:scale-110 transition-transform"
            color="white"
            strokeWidth={4}
            onClick={onPrev}
            aria-disabled={isTransitioning}
          />
          <ArrowRight
            className="absolute arrow-icon h-6 w-6 right-4 cursor-pointer place-self-center hover:scale-110 transition-transform"
            color="white"
            strokeWidth={4}
            onClick={onNext}
            aria-disabled={isTransitioning}
          />
        </>
      )}

      {/* Info button */}
      {labels[activeIndex] && (
        <button
          onClick={() => setActiveInfo(!activeInfo)}
          className="absolute bottom-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          <Info className="h-5 w-5" color="white" />
        </button>
      )}

      {/* Fullscreen button */}
      {fullscreen && (
        <button
          onClick={onFullscreenToggle}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
        >
          {isFullscreen ? (
            <X className="h-6 w-6" color="white" />
          ) : (
            <Maximize2 className="h-5 w-5" color="white" />
          )}
        </button>
      )}

      {/* Info text */}
      {activeInfo && labels[activeIndex] && (
        <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="text-white text-sm">{labels[activeIndex]}</p>
        </div>
      )}

      {/* Navigation dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => onDotClick(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryContent;
