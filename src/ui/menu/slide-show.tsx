'use client';
import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { useOrientation } from './hooks/use-orientation';

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

const Slideshow = ({ slides, mobileSlides }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const orientation = useOrientation();

  const actualSlides = orientation === 'landscape' ? slides : mobileSlides;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % actualSlides.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentSlide, actualSlides.length, orientation]);

  return (
    <section className="slideshow" aria-label="hero slideshow">
      {actualSlides.map((slide, index) => (
        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            //sizes="100vw"
            priority={index === 0}
            loading={index === 0 ? 'eager' : 'lazy'}
            quality={90}
            placeholder="blur"
            className="object-cover"
          />
        </div>
      ))}
    </section>
  );
};

export default Slideshow;
