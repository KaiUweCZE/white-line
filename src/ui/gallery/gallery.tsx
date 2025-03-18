import { useCallback, useEffect, useState } from 'react';
import GalleryContent from './gallery-content';
import { useScrollLock } from './hooks/use-scrolllock';
import { useKeyboardShortcuts } from './hooks/use-keybaord-shortcuts';
import { StaticImageData } from 'next/image';

interface GalleryProps {
  images: StaticImageData[];
  labels: string[];
  width?: number;
  height?: number;
  fullscreen: boolean;
  sameSize?: boolean;
}
const Gallery = ({
  images,
  labels,
  width = 600,
  height = 400,
  fullscreen,
  sameSize,
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
      labels={labels}
      activeIndex={activeIndex}
      isTransitioning={isTransitioning}
      fullscreen={fullscreen}
      // need to remove isFullscreen for image viewer
      isFullscreen={isFullscreen}
      width={width}
      height={height}
      onNext={nextSlide}
      onPrev={prevSlide}
      onDotClick={handleDotClick}
      onFullscreenToggle={toggleFullscreen}
      sameSize={sameSize ?? true}
    />
  );

  return (
    <>
      {!isFullscreen && galleryContent}
      {/*isFullscreen && (
        <ImageViewer
          images={images}
          active={isFullscreen}
          setActive={setIsFullscreen}
          initialIndex={activeIndex}
        />
      )*/}
      {isFullscreen && (
        <div className="gallery-wrapper fixed h-screen w-screen inset-0 z-50">{galleryContent}</div>
      )}
    </>
  );
};

export default Gallery;
