import { Ruler, Award, Cross } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import LiDot from '../li-dot';

interface ParentBoxProps {
  name: string;
  image: StaticImageData;
  physical?: string[];
  health?: string[];
  titles?: string[];
  gender: 'Matka' | 'Otec';
}

const ParentBox = ({ name, image, physical, health, titles, gender }: ParentBoxProps) => {
  //const dotColor = gender === 'Otec' ? 'bg-blue-500' : 'bg-pink-500';

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">{gender}</h2>
      <div className="relative w-full aspect-[3/2] rounded-lg overflow-hidden accent-shadow">
        {image && (
          <Image
            src={image}
            alt={name}
            fill
            placeholder="blur"
            className="object-cover"
            quality={50}
            sizes="(max-width: 640px) 80svw, (max-width: 1280px) 40svw, 600px"
          />
        )}
      </div>
      <div className="space-y-3">
        <h3 className="font-medium text-lg  border-b border-gray-200/70">{name}</h3>
        <div className="space-y-4  ">
          {physical && physical.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-700">
                <Ruler className="w-4 h-4" />
                <span className="text-sm font-medium">Fyzické vlastnosti</span>
              </div>
              {physical.map((info, index) => (
                <p key={index} className="flex items-center gap-2 text-sm text-gray-600 pl-6">
                  <LiDot />
                  {info}
                </p>
              ))}
            </div>
          )}

          {health && health.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-700">
                <Cross className="w-4 h-4" />
                <span className="text-sm font-medium">Zdravotní testy</span>
              </div>
              {health.map((info, index) => (
                <p key={index} className="flex items-center gap-2 text-sm text-gray-600 pl-6">
                  <LiDot />
                  {info}
                </p>
              ))}
            </div>
          )}

          {titles && titles.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-gray-700">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Tituly a zkoušky</span>
              </div>
              {titles.map((info, index) => (
                <p key={index} className="flex items-center gap-2 text-sm text-gray-600 pl-6">
                  <LiDot />
                  {info}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParentBox;
