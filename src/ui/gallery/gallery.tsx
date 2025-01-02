import { useState } from 'react';
import { StaticImageData } from 'next/image';
import GalleryContent from './gallery-content';

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

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const handleDotClick = (index: number) => {
    if (!isTransitioning && index !== activeIndex) {
      setIsTransitioning(true);
      setActiveIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    }
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <GalleryContent
      images={images}
      labels={labels}
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
      sameSize={sameSize ?? true}
    />
  );
};

export default Gallery;
