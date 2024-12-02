"use client";
import Image, { StaticImageData } from "next/image";
import { useState, useCallback, useEffect } from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

interface GalleryProps {
  images: StaticImageData[];
  alts: string[];
  width?: number;
  height?: number;
}

const Gallery = ({ images, alts, width = 600, height = 400 }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

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

  // Resetujeme transitioning stav po dokončení animace
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 300); // Musí odpovídat duration v CSS transition
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="grid relative" style={{ width, height }}>
      {/* Carousel wrapper */}
      <div className="overflow-hidden w-full h-full gallery primary-shadow">
        {/* container for images*/}
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
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <ArrowLeft
        className="absolute arrow-icon h-6 w-6 left-1 cursor-pointer place-self-center "
        color="white"
        strokeWidth={4}
        onClick={prevSlide}
        aria-disabled={isTransitioning}
      />
      <ArrowRight
        className="absolute arrow-icon h-6 w-6 right-1 cursor-pointer place-self-center "
        color="white"
        strokeWidth={4}
        onClick={nextSlide}
        aria-disabled={isTransitioning}
      />

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isTransitioning) {
                setIsTransitioning(true);
                setActiveIndex(index);
              }
            }}
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

export default Gallery;
