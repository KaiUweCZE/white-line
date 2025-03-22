import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import NavigationButtons from './navigation-buttons';
import GalleryInfoButton from './gallery-info-button';
import GalleryFullscreenButton from './gallery-fullscreen-button';
import GalleryInfoText from './gallery-info-text';
import GalleryDots from './gallery-dots';

interface GalleryContentProps {
  images: StaticImageData[];
  labels: string[];
  activeIndex: number;
  isTransitioning: boolean;
  isFullscreen?: boolean;
  width?: number;
  height?: number;
  onNext: () => void;
  onPrev: () => void;
  onDotClick: (index: number) => void;
  onFullscreenToggle: () => void;
  fullscreen?: boolean;
  sameSize?: boolean;
}

const GalleryContent = ({
  images,
  labels,
  activeIndex,
  isTransitioning,
  isFullscreen = false,
  fullscreen = false,
  width = 600,
  height = 400,
  onNext,
  onPrev,
  onDotClick,
  onFullscreenToggle,
  sameSize = true,
}: GalleryContentProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const currentLabel = labels[activeIndex];
  const hasMultipleImages = images.length > 1;
  const aspectRatio = (width / height).toFixed(2);

  const containerStyles = !isFullscreen && {
    width: width ? `${width}px` : '100%',
    maxWidth: '100%',
    aspectRatio: aspectRatio,
  };

  const imageDisplayClass = isFullscreen || !sameSize ? 'object-contain' : 'object-cover';

  return (
    <section
      role="region"
      aria-label="Galerie fotografií"
      className={`grid relative mx-auto ${isFullscreen && 'bg-black/60'} backdrop-blur-md ${
        isFullscreen ? 'w-screen h-screen' : 'max-w-full'
      }`}
      style={containerStyles ? containerStyles : {}}
    >
      {/* Carousel wrapper */}
      <div
        className={`relative overflow-hidden w-full gallery ${sameSize && 'accent-shadow'} ${
          isFullscreen ? 'rounded-none' : 'rounded-lg'
        }`}
      >
        <div
          className="absolute inset-0 flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-full relative max-h-[90dvh] place-self-center"
            >
              <Image
                src={img}
                alt={labels[index] || `Obrázek ${index + 1}`}
                fill
                placeholder="blur"
                className={`${imageDisplayClass}`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <NavigationButtons
        hasMultipleImages={hasMultipleImages}
        onPrev={onPrev}
        onNext={onNext}
        isTransitioning={isTransitioning}
      />
      <GalleryInfoButton
        currentLabel={currentLabel}
        showInfo={showInfo}
        setShowInfo={setShowInfo}
      />
      <GalleryFullscreenButton
        fullscreen={fullscreen}
        isFullscreen={isFullscreen}
        onFullscreenToggle={onFullscreenToggle}
      />
      <GalleryInfoText showInfo={showInfo} currentLabel={currentLabel} />

      <GalleryDots
        hasMultipleImages={hasMultipleImages}
        activeIndex={activeIndex}
        onDotClick={onDotClick}
        images={images}
      />
    </section>
  );
};

export default GalleryContent;
