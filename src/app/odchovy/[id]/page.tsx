'use client';
import DogGallery from '@/ui/dog-gallery';
import { breedDetails } from '@/ui/odchovy/data/breed-details';
import PuppiesReview from '@/ui/odchovy/odchov/puppies-review';
import ParentBox from '@/ui/odchovy/parent-box';
import { ChevronLeft, Calendar } from 'lucide-react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';

const BreedDetail = () => {
  const params = useParams();
  const id = params.id;
  const data = breedDetails.find((breed) => id === breed.id);
  if (!data) {
    notFound();
  }
  const { name, birth, father, mother, males, females, gallery } = data;
  const images = gallery?.map((p) => p.image);
  const labels = gallery?.map((p) => p.label);
  return (
    <main className="container mx-auto px-4 py-8 primary-bg">
      <Link
        href="/odchovy"
        className="inline-flex items-center text-gray-600 hover:text-gray-800 mb-6"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Zpět na odchovy
      </Link>

      <div className="space-y-12">
        <div className="bg-white rounded-sm accent-shadow p-6 pb-0 mb-8 grid gap-4">
          <header>
            <h1 className="text-3xl font-bold mb-4">{name}</h1>

            <div className="flex items-center mb-6 text-gray-600">
              <Calendar className="w-5 h-5 mr-2" />
              <span>Datum narození: {birth}</span>
            </div>
          </header>

          <section className="grid md:grid-cols-2 gap-8">
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
          </section>

          <PuppiesReview females={females.map((p) => p.name)} males={males.map((p) => p.name)} />
        </div>
      </div>
      <section>
        <DogGallery images={images ?? []} labels={labels ?? []} />
      </section>
    </main>
  );
};

export default BreedDetail;

/*
  {(females?.length > 0 || males?.length > 0) && (
    <div className="bg-white rounded-sm accent-shadow p-6">
      <h2 className="text-2xl font-bold mb-8">Štěňata</h2>
      {females && females.length > 0 && <PuppyBox puppies={females} gender="Fenky" />}

      {males && males.length > 0 && <PuppyBox puppies={males} gender="Psi" />}
    </div>
  )}*/
