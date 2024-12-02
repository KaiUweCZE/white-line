import { CalendarDays, Globe, Medal } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type DogHeroType = {
  name?: string;
  portrait?: StaticImageData;
  type?: string;
  breed?: string;
  birth?: string;
  description?: string;
  registration?: string;
  health?: string[];
  exams?: string[];
  titles?: string[];
};

interface DogHeroProps {
  dog: DogHeroType;
}

const DogHero = ({ dog }: DogHeroProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        {dog.portrait && (
          <Image
            src={dog.portrait}
            alt={`${name} photo`}
            height={400}
            width={300}
            className="rounded-lg secondary-shadow"
          />
        )}
      </div>

      <div className="flex-grow">
        <div className="max-w-2xl">
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{dog?.name}</h1>
            <p className="text-lg text-gray-600">{dog?.type}</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <Globe className="w-5 h-5" />
                <span>{dog?.breed}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CalendarDays className="w-5 h-5" />
                <span>{dog?.birth}</span>
              </div>
              <p className="text-sm text-gray-500">{dog?.registration}</p>
              <p className="text-gray-600">{dog?.description}</p>
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-sm font-medium text-gray-500 mb-2">
                  ZDRAVOTNÍ VYŠETŘENÍ
                </h2>
                <p className="text-gray-900">
                  {dog?.health && dog.health.join(", ")}
                </p>
              </div>
              <div>
                <h2 className="text-sm font-medium text-gray-500 mb-2">
                  ZKOUŠKY
                </h2>
                <p className="text-gray-900">
                  {dog?.exams && dog.exams.join(", ")}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="flex gap-4 flex-wrap">
              {dog?.titles &&
                dog.titles.map((title, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full"
                  >
                    <Medal className="w-4 h-4" />
                    <span className="text-sm font-medium">{title}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DogHero;
