import Image from 'next/image';
import placeholderImg from '@/assets/images/header/1header.webp';
import placeholderImgMobile from '@/assets/images/header/1header-mobile.webp';

const SlideShowPlaceholder = () => {
  return (
    <section className="slideshow" aria-label="hero slideshow">
      <Image
        src={placeholderImg}
        alt={'Frederika pase, placeholder, nízká kvalita'}
        fill
        sizes="(max-width: 640px) 0svw, (max-width: 1280px) 80svw, 80rem"
        className="object-cover desktop-placeholder"
        quality={20}
        placeholder="blur"
        priority
        onLoad={() => {
          console.log('Desktop placeholder loaded');
        }}
      />
      <Image
        src={placeholderImgMobile}
        alt={'Frederika pase, placeholder, nízká kvalita'}
        fill
        className="object-cover mobile-placeholder"
        sizes="(max-width: 640px) 80svw, 0vw"
        quality={20}
        placeholder="blur"
        priority
      />
    </section>
  );
};

export default SlideShowPlaceholder;
