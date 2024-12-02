import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type GalleryDogType = {
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
        <Link key={dog.name} href={`/nasi-psi/${dog.name.toLowerCase()}`}>
          <figure className="relative rounded-lg overflow-hidden secondary-shadow cursor-pointer">
            <Image src={dog.img} alt={`photo of ${dog.name}`} />
            <figcaption className="w-full absolute bg-slate-800/60 text-white image-tag px-4">
              <span className="z-40">{dog.name}</span>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
};

export default DogsGallery;
