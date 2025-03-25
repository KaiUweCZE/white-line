import Image from 'next/image';
import placeholderImg from '@/assets/images/header/1header.webp';
import placeholderImgMobile from '@/assets/images/header/1header-mobile.webp';

const SlideShowPlaceholder = () => {
  return (
    <section className="slideshow" aria-label="hero slideshow">
      <Image
        src={placeholderImg}
        alt={'Frederika pase, nízká kvalita, lepší obrázky se načítají'}
        fill
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 80vw, 80rem"
        className="object-cover -z-1 desktop-placeholder"
        quality={20}
        placeholder="blur"
        priority
      />
      <Image
        src={placeholderImgMobile}
        alt={'Frederika pase, nízká kvalita, lepší obrázky se načítají'}
        fill
        className="object-cover -z-1 mobile-placeholder"
        sizes="(max-width: 640px) 100vw, 0vw"
        quality={20}
        placeholder="blur"
        priority
      />
    </section>
  );
};

export default SlideShowPlaceholder;
