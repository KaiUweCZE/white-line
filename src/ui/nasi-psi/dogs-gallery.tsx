import { SquareArrowOutUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import LinkPrimary from '../primitives/link-primary';

type GalleryDogType = {
  id: string;
  name: string;
  img: StaticImageData;
};

interface DogsGalleryProps {
  dogs: GalleryDogType[];
}

const DogsGallery = ({ dogs }: DogsGalleryProps) => {
  return (
    <div className="grid grid-cols-3 gap-4 dogs-gallery">
      {dogs.map((dog) => (
        <div key={dog.id}>
          <div className="relative rounded-sm overflow-hidden secondary-shadow cursor-pointer">
            <Image
              src={dog.img}
              alt={`photo of ${dog.name}`}
              placeholder="blur"
              sizes="(max-width: 480px) 100vw, (max-width: 800px) 50vw, (max-width: 1280px) 33.33vw, 422px"
              className="w-full"
              height={300}
              width={400}
              loading="lazy"
              quality={50}
            />
            <div className="absolute bottom-4 z-10 left-4">
              <h2 className="z-10 text-white font-semibold text-xl">{dog.name}</h2>

              <LinkPrimary
                href={`/nasi-psi/${dog.id}`}
                leftIcon={<SquareArrowOutUpRight className="h-4 w-4 text-white" />}
              >
                <span className="text-white">Detail psa</span>
              </LinkPrimary>
            </div>
            <div className="absolute bg-gradient-to-t h-32 w-full bottom-0 from-black/80 via-black/40 to-transparent rounded-b-md"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DogsGallery;
