import { Camera } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';

interface PuppyBoxProps {
  puppies: {
    name: string;
    images: StaticImageData[];
    labels: string[];
  }[];
  gender: 'Fenky' | 'Psi';
}

const PuppyBox = ({ puppies, gender }: PuppyBoxProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{gender}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {puppies.map((puppy) => (
          <div key={puppy.name} className="space-y-3">
            <div className="relative aspect-[3/2] rounded-lg overflow-hidden secondary-shadow">
              {puppy.images?.[0] ? (
                <Image
                  src={puppy.images[0]}
                  alt={puppy.name}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <Camera className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
            <h3 className="font-medium text-lg text-center">{puppy.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PuppyBox;
