import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ImageViewer from './image-viewer';
import { Images, Maximize2 } from 'lucide-react';

interface DogGalleryProps {
  images: StaticImageData[];
  labels?: string[];
  title?: string;
  metaData?: Record<string, string>;
}

const DogGallery = ({ images, labels, title = 'Fotogalerie' }: DogGalleryProps) => {
  // Funkce pro výpočet grid-span hodnot na základě poměru stran
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Otevření vieweru při kliknutí na obrázek
  const openViewer = (index: number) => {
    setActiveImageIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <section className="p-4 bg-gray-50 rounded-xl shadow-sm border border-gray-100 w-full">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <Images className="h-6 w-6" />
        <span>{title}</span>
      </h2>

      <div className="masonry-gallery">
        {images.map((image, index) => (
          <figure key={index} className="masonry-item " onClick={() => openViewer(index)}>
            <Image
              src={image}
              alt={labels?.[index] || `Fotka ${index + 1}`}
              className="rounded-[0.2rem] accent-shadow"
              placeholder="blur"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Maximize2 className="text-white/90 w-6 h-6" />
            </div>
            <figcaption className="fluid-caption">
              {labels?.[index] || `Fotka ${index + 1}`}
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-right">Celkem {images.length} fotografií</div>

      <ImageViewer
        active={isViewerOpen}
        setActive={setIsViewerOpen}
        images={images}
        initialIndex={activeImageIndex}
        captions={labels || images.map((_, i) => `Fotka ${i + 1}`)}
      />
    </section>
  );
};

export default DogGallery;
