import { CalendarDays, ChevronRight /*, PawPrint*/ } from 'lucide-react';
import { BreedType } from './data/breed-data';
import Image from 'next/image';
import Link from 'next/link';
import LiDot from '../li-dot';

const BoxBreed = ({ breed }: { breed: BreedType }) => {
  return (
    <article className="box-breed secondary-shadow rounded-md border-2 border-gray-100 bg-white hover:border-gray-300 hover:bg-slate-50 transition">
      {/* Parent photos section with overlay */}
      <figure className="relative w-full">
        <Image
          src={breed.img}
          placeholder="blur"
          alt={breed.name}
          width={600}
          height={400}
          className="object-cover "
          quality={50}
          sizes="(max-width: 800px) 80svw, (max-width: 1280px) 40svw, 600px"
        />
        <figcaption className="absolute top-3 right-3 bg-white/70  text-slate-800 text-xs font-medium px-2 py-1 rounded-sm flex items-center gap-2">
          <CalendarDays className="h-3.5 w-3.5" />
          {/* <span>datum narození:</span>*/}
          <span>{breed.birth}</span>
        </figcaption>
      </figure>
      {/* Content section */}
      <div className="box-breed-content">
        <header className="mb-4 relative">
          <h2 className="text-lg font-semibold text-slate-800">{breed.name}</h2>

          <p className="mt-1 text-sm text-gray-600">
            {breed.father} & {breed.mother}
          </p>
          <hr className="absolute -bottom-2 left-0 w-full h-0.5 bg-gray-100" />
        </header>

        <div className="grid grid-cols-2 gap-6">
          <section className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-700">Psi</h3>
            <ul className="space-y-1.5">
              {breed.males ? (
                breed.males.map((male) => (
                  <li key={male} className="text-sm text-slate-600 flex items-center">
                    <LiDot />
                    {male}
                  </li>
                ))
              ) : (
                <li className="text-sm italic text-slate-500">Žádní psi</li>
              )}
            </ul>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-slate-700">Feny</h3>
            <ul className="space-y-1.5">
              {breed.females ? (
                breed.females.map((female) => (
                  <li key={female} className="text-sm text-slate-600 flex items-center">
                    <LiDot />
                    {female}
                  </li>
                ))
              ) : (
                <li className="text-sm italic text-slate-500">Žádné feny</li>
              )}
            </ul>
          </section>
        </div>
        <footer className="h-fit flex items-center justify-between border-t border-gray-100 pt-4 mt-4">
          <span className="text-sm font-medium text-slate-600">
            Celkem:{' '}
            <span className="text-slate-800">
              {breed.males.length + (breed.females ? breed.females.length : 0)} štěňat
            </span>
          </span>

          <Link
            href={`/odchovy/${breed.id}`}
            className="group inline-flex items-center text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            aria-label={`Zobrazit detail vrhu ${breed.name}`}
          >
            Detail vrhu
            <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </footer>
      </div>
    </article>
  );
};

export default BoxBreed;
