"use client";
import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";

interface SlideshowProps {
  slides: {
    src: StaticImageData;
    alt: string;
  }[];
}

const Slideshow = ({ slides }: SlideshowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 10000);

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            style={{ objectFit: "cover" }}
            layout="fill"
            priority={index === 0}
            quality={80}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
