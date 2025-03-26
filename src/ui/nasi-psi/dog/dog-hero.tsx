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
    <article className="container flex flex-col md:flex-row gap-8">
      <header className="flex-shrink-0 mx-auto md:mx-0">
        <h1 className="sr-only">{dog?.name} - Profil psa</h1>
        {dog.portrait && (
          <figure className="relative rounded-md overflow-hidden">
            <Image
              src={dog.portrait}
              alt={`${dog.name} - portrét`}
              height={400}
              width={300}
              sizes="300px"
              quality={60}
              placeholder="blur"
              className="secondary-shadow"
            />
            <figcaption className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-gray-900/70 to-transparent pt-8 pb-4 px-4">
              <h2 className="text-3xl mb-0 text-white">{dog?.name}</h2>
              <p className="text-blue-100 font-medium">{dog.kennel}</p>
            </figcaption>
          </figure>
        )}
      </header>

      <div className="flex-grow">
        <div className="grid gap-6 lg:grid-cols-2">
          <section
            className="p-5 rounded-sm shadow-sm border border-gray-100"
            aria-labelledby="basic-info-heading"
          >
            <h2
              id="basic-info-heading"
              className="text-lg font-semibold text-gray-700 mb-4 flex items-center"
            >
              Základní informace
            </h2>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                <dl>
                  <dt className="text-xs text-gray-500 font-medium">PLEMENO</dt>
                  <dd className="text-gray-700">{dog?.breed}</dd>
                </dl>
              </div>

              <div className="flex items-center gap-3">
                <CalendarDays className="w-5 h-5 text-gray-500 flex-shrink-0" aria-hidden="true" />
                <dl>
                  <dt className="text-xs text-gray-500 font-medium">DATUM NAROZENÍ</dt>
                  <dd className="text-gray-700">{dog?.birth}</dd>
                </dl>
              </div>

              <dl className="mt-2 pl-8">
                <dt className="text-xs text-gray-500 font-medium">REGISTRAČNÍ ČÍSLO</dt>
                <dd className="text-gray-600 text-sm">{dog?.registration}</dd>
              </dl>

              <dl className="mt-3 bg-gray-50 p-3 rounded-lg">
                <dt className="text-xs text-gray-500 font-medium mb-1">POPIS</dt>
                <dd className="text-gray-700 text-sm">{dog?.description}</dd>
              </dl>

              {dog.pedigree && (
                <Link
                  href={dog.pedigree}
                  className="inline-flex items-center gap-2 mt-2 text-sky-800 hover:text-blue-800 font-medium transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>Zobrazit rodokmen</span>
                  <span className="sr-only">(otevře se v novém okně)</span>
                </Link>
              )}
            </div>
          </section>

          <div className="space-y-6">
            {areHealth && (
              <section
                className="p-5 rounded-sm shadow-sm border border-gray-100"
                aria-labelledby="health-heading"
              >
                <h2
                  id="health-heading"
                  className="text-lg font-semibold text-gray-700 mb-4 flex items-center"
                >
                  Zdravotní vyšetření
                </h2>

                <ul className="flex flex-wrap gap-2">
                  {dog.health?.map((item, index) => (
                    <li key={index} className="text-sm font-medium">
                      {item.trim()}
                      {index < (dog.health?.length || 0) - 1 && ','}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {areExams && (
              <section
                className="p-5 rounded-sm shadow-sm border border-gray-100"
                aria-labelledby="exams-heading"
              >
                <h2
                  id="exams-heading"
                  className="text-lg font-semibold text-gray-700 mb-4 flex items-center"
                >
                  Zkoušky
                </h2>

                <ul className="flex flex-wrap gap-2">
                  {dog.exams?.map((exam, index) => (
                    <li key={index} className="text-sm font-medium">
                      {exam.trim()}
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>
        </div>

        {dog?.titles && dog.titles.length > 0 && (
          <section className="mt-6 pt-6 border-t" aria-labelledby="titles-heading">
            <h2 id="titles-heading" className="sr-only">
              Tituly
            </h2>
            <ul className="flex gap-4 flex-wrap">
              {dog.titles.map((title, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-md shadow-sm"
                >
                  <Medal className="w-4 h-4" aria-hidden="true" />
                  <span className="font-medium">{title}</span>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
};

export default DogHero;
