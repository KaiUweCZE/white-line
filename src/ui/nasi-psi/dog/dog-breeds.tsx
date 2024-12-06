import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface DogBreedsProps {
  breeds: { href: string; name: string; image: StaticImageData }[];
}

const DogBreeds = ({ breeds }: DogBreedsProps) => {
  return (
    <div className="mb-16">
      <h2 className="text-2xl font-bold mb-6">Vrhy</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {breeds &&
          breeds.map((breed) => (
            <Link
              href={breed.href}
              key={breed.name}
              className="group rounded-lg overflow-hidden secondary-shadow relative"
            >
              <Image src={breed.image} placeholder="blur" alt={`${breed.name} photo`} />
              <span className="gallery-link text-white bg-slate-800/70 w-full pl-4">
                Prohlédnout Galerii
              </span>
              <div className="flex absolute items-center justify-between bg-slate-800/70 w-full bottom-0">
                <h3 className=" text-white pl-4 font-medium">{breed.name}</h3>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default DogBreeds;
