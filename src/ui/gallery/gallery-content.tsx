import { ArrowLeft, ArrowRight, Info, Maximize2, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

interface GalleryContentProps {
  images: StaticImageData[];
  alts: string[];
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
}

const GalleryContent = ({
  images,
  alts,
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
}: GalleryContentProps) => {
  const [activeInfo, setActiveInfo] = useState(false);
  return (
    <div
      className={`grid relative mx-auto ${
        isFullscreen ? "w-screen h-screen" : "max-w-full"
      }`}
      style={!isFullscreen ? {
        width: width ? `${width}px` : '100%',
        maxWidth: '100%',
      } : undefined}
    >
      {/* Carousel wrapper */}
    <div
        className={`relative overflow-hidden w-full gallery primary-shadow ${
          isFullscreen ? "rounded-none" : "rounded-lg"
        }`}
        style={!isFullscreen ? {
          paddingBottom: `${((height || 400) / (width || 600)) * 100}%`,
          position: 'relative'
        } : undefined}
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
                alt={alts[index]}
                fill

                className={`${
                  isFullscreen ? "object-contain bg-black/90" : "object-cover"
                }`}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Ovládací prvky */}
     {images.length > 1 && <> <ArrowLeft
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
      /></>
}
      {/* Fullscreen toggle */}
      {fullscreen && (
        <>
          {!isFullscreen ? (
            <Maximize2
              className="absolute top-4 right-4 cursor-pointer text-white hover:scale-110 transition-transform"
              onClick={onFullscreenToggle}
            />
          ) : (
            <X
              className="absolute top-4 right-4 cursor-pointer text-white hover:scale-110 transition-transform"
              onClick={onFullscreenToggle}
            />
          )}
        </>
      )}

      {/* Navigační tečky */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => !isTransitioning && onDotClick(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              activeIndex === index ? "bg-white" : "bg-white/50"
            }`}
            aria-label={`Přejít na obrázek ${index + 1}`}
          />
        ))}
      </div>
      <div className="absolute top-4 left-4 text-white">
        <Info className="w-5 h-5" onMouseEnter={() => setActiveInfo(true)} onMouseLeave={() => setActiveInfo(false)} />
      {activeInfo && <span>{alts[activeIndex]}</span>}
      </div>
     
    </div>
  );
};

export default GalleryContent;
