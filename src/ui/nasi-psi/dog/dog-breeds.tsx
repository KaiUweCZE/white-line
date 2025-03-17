import Button from '@/ui/primitives/button';
import { Camera, PawPrint } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';

interface DogBreedsProps {
  breeds: { href: string; name: string; image: StaticImageData }[];
}

const DogBreeds = ({ breeds }: DogBreedsProps) => {
  const navigate = useRouter();

  const handleLink = (href: string) => {
    navigate.replace(href);
  };

  return (
    <section className="container-our-dogs-breeds ">
      <h2 className="text-2xl font-bold mb-4 flex items-center">Vrhy</h2>

      <div className="our-dogs-breed">
        {breeds.map((breed) => (
          <div key={breed.name} className="relative shadow-md rounded-md our-dogs-frame">
            {/* Obrázek s pevným poměrem stran */}
            <div className="relative">
              <Image
                src={breed.image}
                placeholder="blur"
                alt={`${breed.name} - fotogalerie štěňat`}
                height={300}
                width={400}
                className="object-cover rounded-md"
              />

              {/* Gradient overlay pro lepší čitelnost */}
              <div className="absolute bg-gradient-to-t h-32 w-full bottom-0 from-black/80 via-black/40 to-transparent rounded-b-md"></div>
            </div>

            {/* Obsah - název a tlačítko */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-xl font-bold ">{breed.name}</h3>

              <Button
                variant="accent"
                size="sm"
                leftIcon={<Camera className="h-4 w-4 text-white" />}
                onClick={() => handleLink(breed.href)}
                className="transition-transform "
                aria-label={`Prohlédnout galerii vrhu ${breed.name}`}
              >
                <span className="text-white">Prohlédnout galerii</span>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DogBreeds;
