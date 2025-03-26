import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import '@/assets/styles/slideshow.css';
import { useState } from 'react';

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
  const [firstDesktopLoaded, setFirstDesktopLoaded] = useState(false);
  const [firstMobileLoaded, setFirstMobileLoaded] = useState(false);

  const isReady = firstDesktopLoaded || firstMobileLoaded;

  return (
    <section className={`slideshow  ${!isReady && 'display-none'}`} aria-label="hero slideshow">
      {/* Desktop slidy */}
      <div className="desktop-slideshow">
        {slides.map((slide, index) => (
          <div key={`desktop-${index}`} className={`slide slide-${index % 4}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 0vw, (max-width: 1280px) 100vw, 80rem"
              quality={60}
              placeholder="blur"
              className={`object-cover`}
              loading="lazy"
              onLoad={() => {
                if (index === 0) setFirstDesktopLoaded(true);
              }}
            />
          </div>
        ))}
      </div>

      {/* Mobilní slidy */}
      <div className="mobile-slideshow">
        {mobileSlides.map((slide, index) => (
          <div key={`mobile-${index}`} className={`slide slide-${index % 4}`}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 640px) 100vw, 0svw"
              quality={50}
              placeholder="blur"
              className="object-cover"
              loading="lazy"
              onLoad={() => {
                if (index === 0) setFirstMobileLoaded(true);
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
