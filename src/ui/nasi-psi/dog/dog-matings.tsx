import { Heart, ExternalLink, UserPlus, Users } from 'lucide-react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/ui/primitives/button';

interface MatingItem {
  name: string;
  href?: string;
  partner: string;
  puppies: string;
  image?: StaticImageData;
}

interface DogMatingsProps {
  matings: MatingItem[];
  initialShow?: number;
}

const DogMatings = ({ matings, initialShow = 3 }: DogMatingsProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayCount = showAll ? matings.length : initialShow;

  if (!matings || matings.length === 0) {
    return null;
  }

  return (
    <section className="container">
      <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
        {/*<Heart className="w-4 h-4 text-gray-600" />*/}
        Krytí
      </h2>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {matings.slice(0, displayCount).map((mating, index) => (
          <div
            key={`${mating.name}-${index}`}
            className="p-5 rounded border border-gray-100 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-gray-800">{mating.name}</h3>
              <div className="flex items-center gap-2 mt-1 text-gray-600">
                <span className="text-sm">Partner: {mating.partner}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-gray-600">
                <span className="text-sm">Štěňata: {mating.puppies}</span>
              </div>
            </div>

            {mating.image && (
              <div className="mt-3 relative h-32 w-full overflow-hidden rounded bg-gray-100">
                <Image
                  src={mating.image}
                  alt={`${mating.name} foto`}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {mating.href && (
              <div className="mt-3 text-right">
                <Link
                  href={mating.href}
                  className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
                >
                  <span>Zobrazit vrh</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </div>

      {matings.length > initialShow && (
        <div className="mt-6 text-center">
          <Button size="sm" onClick={() => setShowAll(!showAll)} className="px-6">
            {showAll ? 'Zobrazit méně' : `Zobrazit všech ${matings.length} krytí`}
          </Button>
        </div>
      )}
    </section>
  );
};

export default DogMatings;
