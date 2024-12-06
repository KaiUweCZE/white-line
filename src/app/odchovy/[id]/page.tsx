'use client';
import { breedDetails } from '@/ui/odchovy/data/breed-details';
import ParentBox from '@/ui/odchovy/parent-box';
import PuppyBox from '@/ui/odchovy/puppy-box';
import { ChevronLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const BreedDetail = () => {
  const params = useParams();

  const id = params.id;

  const data = breedDetails.find((breed) => 'swch' === breed.id);

  console.log(id);
  if (!data) {
    return <div>Vrh nenalezen</div>;
  }

  const { name, birth, father, mother, females, males } = data;

  return (
    <main className="container mx-auto px-4 py-8">
      <Link
        href="/odchovy"
        className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Zpět na odchovy
      </Link>

      <div className="space-y-12">
        {/* Základní informace */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h1 className="text-3xl font-bold mb-4">{name}</h1>

          <div className="flex items-center mb-6 text-gray-600">
            <Calendar className="w-5 h-5 mr-2" />
            <span>Datum narození: {birth}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <ParentBox
              name={father.name}
              images={father.images}
              physical={father.physical}
              health={father.health}
              titles={father.titles}
              gender="Otec"
            />

            <ParentBox
              name={mother.name}
              images={mother.images}
              physical={mother.physical}
              health={mother.health}
              titles={mother.titles}
              gender="Matka"
            />
          </div>
        </div>

        {/* Štěňata */}
        {(females?.length > 0 || males?.length > 0) && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-8">Štěňata</h2>
            {females && females.length > 0 && <PuppyBox puppies={females} gender="Fenky" />}

            {males && males.length > 0 && <PuppyBox puppies={males} gender="Psi" />}
          </div>
        )}
      </div>
    </main>
  );
};

export default BreedDetail;
