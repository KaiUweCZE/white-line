import { ArrowLeft, ArrowRight, Maximize2, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

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
  return (
    <div
      className={`grid relative w-full ${
        isFullscreen ? "w-screen h-screen" : ""
      }`}
      style={!isFullscreen ? { width, height } : undefined}
    >
      {/* Carousel wrapper */}
      <div
        className={`relative overflow-hidden w-full h-full gallery primary-shadow ${
          isFullscreen ? "rounded-none" : "rounded-lg"
        }`}
      >
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
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
    </div>
  );
};

export default GalleryContent;
