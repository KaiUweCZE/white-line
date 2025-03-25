import { StaticImageData } from 'next/image';

interface GalleryDotsProps {
  hasMultipleImages: boolean;
  activeIndex: number;
  onDotClick: (index: number) => void;
  images: StaticImageData[];
  showInfo: boolean;
}

const GalleryDots = ({
  hasMultipleImages,
  activeIndex,
  onDotClick,
  images,
  showInfo,
}: GalleryDotsProps) => {
  if (!hasMultipleImages || showInfo) return null;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('active index', activeIndex);
  };
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
      {images.map((_, index) => (
        <button
          key={index}
          className={`w-2 h-2 rounded-full transition-colors ${
            index === activeIndex ? 'bg-white' : 'bg-white/50'
          }`}
          onClick={() => onDotClick(index)}
          onMouseDown={handleMouseDown}
          aria-label={`Přejít na obrázek ${index + 1}`}
          aria-current={index === activeIndex ? 'true' : 'false'}
        />
      ))}
    </div>
  );
};

export default GalleryDots;
