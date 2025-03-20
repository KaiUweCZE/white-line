import { CalendarDays, Globe, Medal, ExternalLink } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type DogHeroType = {
  name?: string;
  portrait?: StaticImageData;
  kennel?: string;
  type?: string;
  breed?: string;
  birth?: string;
  description?: string;
  registration?: string;
  health?: string[];
  exams?: string[];
  titles?: string[];
  pedigree?: string;
};

interface DogHeroProps {
  dog: DogHeroType;
}

const DogHero = ({ dog }: DogHeroProps) => {
  const areExams = dog?.exams && dog.exams.length > 0;
  const areHealth = dog?.health && dog.health.length > 0;
  return (
    <div className="container flex flex-col md:flex-row gap-8">
      <div className="flex-shrink-0 mx-auto md:mx-0">
        {dog.portrait && (
          <div className="relative rounded-md overflow-hidden">
            <Image
              src={dog.portrait}
              alt={`${dog.name} photo`}
              height={400}
              width={300}
              placeholder="blur"
              className="secondary-shadow"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/70 to-transparent pt-8 pb-4 px-4">
              <h1 className="text-3xl font-bold text-white">{dog?.name}</h1>
              <p className="text-blue-100 font-medium">{dog.kennel}</p>
            </div>
          </div>
        )}
      </div>

      <div className="flex-grow">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className=" p-5 rounded-sm shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
              Základní informace
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">PLEMENO</p>
                  <p className="text-gray-700">{dog?.breed}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 font-medium">DATUM NAROZENÍ</p>
                  <p className="text-gray-700">{dog?.birth}</p>
                </div>
              </div>

              <div className="mt-2 pl-8">
                <p className="text-xs text-gray-500 font-medium">REGISTRAČNÍ ČÍSLO</p>
                <p className="text-gray-600 text-sm">{dog?.registration}</p>
              </div>

              <div className="mt-3 bg-gray-50 p-3 rounded-lg">
                <p className="text-xs text-gray-500 font-medium mb-1">POPIS</p>
                <p className="text-gray-700 text-sm">{dog?.description}</p>
              </div>

              {dog.pedigree && (
                <Link
                  href={dog.pedigree}
                  className="inline-flex items-center gap-2 mt-2 text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  Zobrazit rodokmen
                </Link>
              )}
            </div>
          </div>
          <div className="space-y-6">
            {areHealth && (
              <div className=" p-5 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  Zdravotní vyšetření
                </h2>

                <div className="flex flex-wrap gap-2">
                  {dog.health?.map((item, index) => (
                    <span key={index} className=" text-sm font-medium inline-flex items-center">
                      {dog.health?.length === index + 1 ? item.trim() : `${item.trim()}, `}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {areExams && (
              <div className=" p-5 rounded-sm shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  Zkoušky
                </h2>

                <div className="flex flex-wrap gap-2">
                  {dog.exams?.map((exam, index) => (
                    <span key={index} className="text-sm font-medium">
                      {exam.trim()}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {dog?.titles && dog.titles.length > 0 && (
          <div className="mt-6 pt-6 border-t">
            <div className="flex gap-4 flex-wrap">
              {dog.titles.map((title, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-blue-50 text-blue-500 px-4 py-2 rounded-md shadow-sm"
                >
                  <Medal className="w-4 h-4" />
                  <span className="font-medium">{title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DogHero;
