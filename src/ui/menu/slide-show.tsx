import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import '@/assets/styles/slideshow.css';

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

export default function Slideshow({ slides, mobileSlides }: SlideshowProps) {
  return (
    <section className="slideshow" aria-label="hero slideshow">
      {/* Desktop slidy */}
      <div className="desktop-slideshow">
        {slides.map((slide, index) => (
          <div
            key={`desktop-${index}`}
            className={`slide slide-${index % 4}`} // Použijeme modulo, pokud by bylo více než 4 slidy
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 80rem) 100vw, 80rem"
              priority={index === 0}
              loading={index === 0 ? 'eager' : 'lazy'}
              quality={80}
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
              quality={75}
              placeholder="blur"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
