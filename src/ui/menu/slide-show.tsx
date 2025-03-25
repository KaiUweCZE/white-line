import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import '@/assets/styles/slideshow.css';
import { useEffect, useState } from 'react';

interface SlideshowProps {
  slides: {
    src: StaticImageData;
    alt: string;
  }[];
  mobileSlides: {
    src: StaticImageData;
    alt: string;
  }[];
}

export default function SlideShow({ slides, mobileSlides }: SlideshowProps) {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    // Skutečně načíst všechny obrázky
    const loadImages = async () => {
      try {
        // Vytvoření pole promisů pro načtení všech obrázků
        const imagePromises = [...slides, ...mobileSlides].map((slide) => {
          console.log('Načítání obrázku...', {
            'jak to zatím vypadá?': slide,
            'loaded images': imagesLoaded,
          });
          return new Promise((resolve, reject) => {
            const img = new window.Image();
            img.src = slide.src.src; // Přístup k src na StaticImageData objektu
            img.onload = resolve;
            img.onerror = reject;
            console.log('Načten obrázek?', img);
          });
        });

        console.log('hotovson? ');

        // Počkat až se všechny načtou
        await Promise.all(imagePromises);
        setImagesLoaded(true);
      } catch (error) {
        console.error('Chyba při načítání obrázků:', error);
        // I v případě chyby nastavíme loaded po 3 sekundách
        setTimeout(() => setImagesLoaded(true), 3000);
      }
    };

    loadImages();
  }, [slides, mobileSlides]);

  // Nic nezobrazovat, dokud nejsou všechny obrázky načteny
  if (!imagesLoaded) return null;
  return (
    <section className="slideshow" aria-label="hero slideshow">
      {/* Desktop slidy */}
      <div className="desktop-slideshow">
        {slides.map((slide, index) => (
          <div key={`desktop-${index}`} className={`slide slide-${index % 4}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 80rem"
              quality={70}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Mobilní slidy */}
      <div className="mobile-slideshow">
        {mobileSlides.map((slide, index) => (
          <div
            key={`mobile-${index}`}
            className={`slide slide-${index % 4}`} // Použijeme modulo, pokud by bylo více než 4 slidy
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={65}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
