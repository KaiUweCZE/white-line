'use client';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Button from '../primitives/button';
import { useRouter } from 'next/navigation';

type GalleryDogType = {
  name: string;
  img: StaticImageData;
};

interface DogsGalleryProps {
  dogs: GalleryDogType[];
}

const DogsGallery = ({ dogs }: DogsGalleryProps) => {
  const navigate = useRouter();
  const handleNavigate = (href: string) => {
    navigate.push(href.toLowerCase());
  };

  return (
    <div className="grid grid-cols-3 gap-4 dogs-gallery">
      {dogs.map((dog) => (
        <div key={dog.name}>
          <figure className="relative rounded-lg overflow-hidden secondary-shadow cursor-pointer">
            <Image
              src={dog.img}
              alt={`photo of ${dog.name}`}
              placeholder="blur"
              className=" w-full"
            />
            <div className="absolute bottom-4 z-10 left-4">
              <h3 className="z-10 text-white font-semibold text-xl">{dog.name}</h3>

              <Button
                variant="accent"
                size="sm"
                leftIcon={<SquareArrowOutUpRight className="h-4 w-4 text-white" />}
                onClick={() => handleNavigate(`/nasi-psi/${dog.name}`)}
              >
                <span className="text-white">Detail psa</span>
              </Button>
            </div>
            <div className="absolute bg-gradient-to-t h-32 w-full bottom-0 from-black/80 via-black/40 to-transparent rounded-b-md"></div>
          </figure>
        </div>
      ))}
    </div>
  );
};

export default DogsGallery;
