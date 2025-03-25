import Image, { StaticImageData } from 'next/image';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
/*import NavigationButtons from './navigation-buttons';
import GalleryInfoButton from './gallery-info-button';
import GalleryFullscreenButton from './gallery-fullscreen-button';
import GalleryInfoText from './gallery-info-text';
import GalleryDots from './gallery-dots';*/

const NavigationButtons = dynamic(() => import('./navigation-buttons'), {
  ssr: false,
});

const GalleryInfoButton = dynamic(() => import('./gallery-info-button'), {
  ssr: false,
});

const GalleryFullscreenButton = dynamic(() => import('./gallery-fullscreen-button'), {
  ssr: false,
});

const GalleryInfoText = dynamic(() => import('./gallery-info-text'), {
  ssr: false,
});

const GalleryDots = dynamic(() => import('./gallery-dots'), {
  ssr: false,
});

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
  withoutTransform?: boolean;
  placeholder: StaticImageData;
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
  withoutTransform = false,
  placeholder,
}: GalleryContentProps) => {
  const [showInfo, setShowInfo] = useState(false);
  const currentLabel = labels[activeIndex];
  const hasMultipleImages = images.length > 1;
  const aspectRatio = (width / height).toFixed(2);
  const [isPlaceholder, setIsPlaceholder] = useState(true);

  const containerStyles = !isFullscreen && {
    width: width ? `${width}px` : '100%',
    maxWidth: '100%',
    aspectRatio: aspectRatio,
  };

  useEffect(() => {
    setIsPlaceholder(true);
  }, [placeholder]);

  const imageDisplayClass = isFullscreen || !sameSize ? 'object-contain' : 'object-cover';

  return (
    <section
      aria-label="Galerie fotografií"
      className={`grid relative mx-auto ${isFullscreen && 'bg-black/60'} backdrop-blur-md ${
        isFullscreen ? 'w-screen h-[100dvh]' : 'max-w-full'
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
          className={`absolute inset-0 flex ${
            withoutTransform ? '' : 'transition-transform duration-300 ease-in-out'
          }`}
          style={{
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
        >
          {
            <Image
              src={placeholder}
              alt={'placeholder obrázek, nízká kvalita'}
              fill
              className={`${imageDisplayClass} gallery-appear`}
              priority
              placeholder="blur"
              quality={1}
              onLoad={() => {
                console.log('Placeholder loaded');
              }}
            />
          }
          {images.map((img, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full grid place-items-center h-full relative max-h-[90dvh] place-self-center ${
                isPlaceholder ? 'opacity-0' : 'gallery-appear'
              }`}
            >
              <figure
                className="grid relative w-full h-full overflow-hidden"
                style={{ maxHeight: img.height, maxWidth: img.width }}
              >
                <Image
                  src={img}
                  alt={labels[index] || `Obrázek ${index + 1}`}
                  fill
                  placeholder="blur"
                  className={`${imageDisplayClass} place-self-center`}
                  priority={index === 0}
                  style={{ maxHeight: img.height }}
                  onLoad={() => {
                    if (index === 0) {
                      console.log('Image loaded');
                      setIsPlaceholder(false);
                    }
                  }}
                />
                <GalleryInfoText
                  showInfo={showInfo}
                  currentLabel={currentLabel}
                  width={width}
                  expanded={isFullscreen}
                />
              </figure>
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
        isFullscreen={isFullscreen}
      />
      <GalleryFullscreenButton
        fullscreen={fullscreen}
        isFullscreen={isFullscreen}
        onFullscreenToggle={onFullscreenToggle}
      />

      <GalleryDots
        hasMultipleImages={hasMultipleImages}
        activeIndex={activeIndex}
        onDotClick={onDotClick}
        images={images}
        showInfo={showInfo}
      />
    </section>
  );
};

export default GalleryContent;
