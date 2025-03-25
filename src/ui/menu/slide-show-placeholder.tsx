import Image from 'next/image';
import placeholderImg from '@/assets/images/header/1header.webp';

const SlideShowPlaceholder = () => {
  return (
    <section className="slideshow" aria-label="hero slideshow">
      <Image
        src={placeholderImg}
        alt={'Frederika pase, nízká kvalita, lepší obrázky se načítají'}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 80rem"
        className="object-cover -z-1"
        quality={20}
        placeholder="blur"
        priority={true}
      />
    </section>
  );
};

export default SlideShowPlaceholder;
