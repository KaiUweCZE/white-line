import { useCallback, useEffect, useState } from "react";
import GalleryContent from "./gallery-content";
import { useScrollLock } from "./hooks/use-scrolllock";
import { useKeyboardShortcuts } from "./hooks/use-keybaord-shortcuts";
import { StaticImageData } from "next/image";

interface GalleryProps {
  images: StaticImageData[];
  alts: string[];
  width?: number;
  height?: number;
  fullscreen: boolean;
}
const Gallery = ({
  images,
  alts,
  width = 600,
  height = 400,
  fullscreen,
}: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setActiveIndex(0);
  }, [images]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length, isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length, isTransitioning]);

  useScrollLock(isFullscreen);
  useKeyboardShortcuts({
    isFullscreen,
    onExit: () => setIsFullscreen(false),
    onNext: nextSlide,
    onPrev: prevSlide,
  });

  // Reset transitioning stavu
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  const handleDotClick = useCallback((index: number) => {
    setIsTransitioning(true);
    setActiveIndex(index);
  }, []);

  const toggleFullscreen = useCallback(() => {
    setIsFullscreen((prev) => !prev);
  }, []);

  const galleryContent = (
    <GalleryContent
      images={images}
      alts={alts}
      activeIndex={activeIndex}
      isTransitioning={isTransitioning}
      fullscreen={fullscreen}
      isFullscreen={isFullscreen}
      width={width}
      height={height}
      onNext={nextSlide}
      onPrev={prevSlide}
      onDotClick={handleDotClick}
      onFullscreenToggle={toggleFullscreen}
    />
  );

  return (
    <>
      {!isFullscreen && galleryContent}
      {isFullscreen && (
        <div className="fixed inset-0 z-50">{galleryContent}</div>
      )}
    </>
  );
};

export default Gallery;
