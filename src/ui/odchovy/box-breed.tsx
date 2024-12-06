import { ChevronRight /*, PawPrint*/ } from 'lucide-react';
import { BreedType } from './data/breed-data';
import Image from 'next/image';
import Link from 'next/link';

const BoxBreed = ({ breed }: { breed: BreedType }) => {
  return (
    <div className="box-breed secondary-shadow rounded-xl border border-gray-100 bg-white hover:border-blue-200">
      {/* Parent photos section with overlay */}
      <Image src={breed.img} placeholder="blur" alt={breed.name} width={600} height={400} />
      {/* Content section */}
      <div className="box-breed-content">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">{breed.name}</h3>
          <p className="mt-1 text-sm text-gray-500">
            {breed.father} & {breed.mother}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400">Psi</h4>
            <ul className="space-y-1">
              {breed.males.map((male) => (
                <li key={male} className="text-sm text-gray-600">
                  {male}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium uppercase tracking-wider text-gray-400">Feny</h4>
            <ul className="space-y-1">
              {breed.females &&
                breed.females.map((female) => (
                  <li key={female} className="text-sm text-gray-600">
                    {female}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        <div className="h-fit flex items-center justify-between border-t border-gray-100 pt-4">
          <span className="text-sm text-gray-500">
            Celkem: {breed.males.length + (breed.females ? breed.females.length : 0)} štěňat
          </span>
          <Link href={`/odchovy/${breed.id}`}>
            <button className="group inline-flex items-center text-sm font-medium text-blue-600">
              Detail vrhu
              <ChevronRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BoxBreed;
