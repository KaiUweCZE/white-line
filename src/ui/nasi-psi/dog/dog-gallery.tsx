import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import ImageViewer from './image-viewer';
import { Images } from 'lucide-react';
import { useWindowSize } from '@/ui/menu/hooks/use-window-size';

interface DogGalleryProps {
  images: StaticImageData[];
  title?: string;
  metaData?: Record<string, any>;
}

const DogGallery = ({ images, title = 'Fotogalerie', metaData }: DogGalleryProps) => {
  // Funkce pro výpočet grid-span hodnot na základě poměru stran
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isSmall = useWindowSize(1000);
  const isExtraSmall = useWindowSize(640);

  const getGridSpans = (image: StaticImageData) => {
    const aspectRatio = image.width / image.height;
    const coefficient = isSmall ? (isExtraSmall ? 1.2 : 1.5) : 2.2;
    let rowSpan;
    let colSpan;

    // Pevně definované výšky podle poměru stran
    if (aspectRatio >= 1) {
      // Široké nebo čtvercové obrázky
      rowSpan = 15 * coefficient;
    } else if (aspectRatio >= 0.75) {
      // Mírně vysoké obrázky
      rowSpan = 30 * coefficient;
    } else if (aspectRatio >= 0.5) {
      // Vysoké obrázky
      rowSpan = 40 * coefficient;
    } else {
      // Velmi vysoké obrázky
      rowSpan = 60 * coefficient;
    }

    // Dopočítáme šířku podle poměru stran a přiřazené výšky
    colSpan = Math.round(rowSpan * aspectRatio);
    rowSpan = Math.round(rowSpan);

    console.log(aspectRatio, rowSpan, colSpan);

    return {
      rowSpan,
      colSpan,
    };
  };

  const captions = metaData?.captions
    ? images.map((_, index) => metaData.captions[index] || `Fotka ${index + 1}`)
    : images.map((_, index) => `Fotka ${index + 1}`);

  // Otevření vieweru při kliknutí na obrázek
  const openViewer = (index: number) => {
    setActiveImageIndex(index);
    setIsViewerOpen(true);
  };

  return (
    <section className="p-2 bg-gray-50 rounded-xl shadow-sm border border-gray-100 w-full overflow-hidden">
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-4">
        <Images className="h-6 w-6" />
        <span>{title}</span>
      </h2>
      <div className="dog-gallery">
        {images.map((image, index) => {
          const { rowSpan, colSpan } = getGridSpans(image);

          return (
            <figure
              key={index}
              className="dog-gallery-item"
              style={{
                gridRow: `span ${rowSpan}`,
                gridColumn: `span ${colSpan}`,
              }}
            >
              <Image
                placeholder="blur"
                src={image}
                alt={`Fotka ${index + 1}`}
                className="dog-gallery-image"
                fill
                onClick={() => openViewer(index)}
              />
            </figure>
          );
        })}
      </div>

      <div className="mt-4 text-sm text-gray-500 text-right">Celkem {images.length} fotografií</div>
      <ImageViewer
        active={isViewerOpen}
        setActive={setIsViewerOpen}
        images={images}
        initialIndex={activeImageIndex}
        captions={captions}
      />
    </section>
  );
};

export default DogGallery;
