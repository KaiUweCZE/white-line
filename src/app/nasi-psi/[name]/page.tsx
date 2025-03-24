'use client';
import { lazy, Suspense } from 'react';
import { Award, Medal } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dataDogs } from '../../../ui/nasi-psi/data/data-dogs';
import DogHero from '@/ui/nasi-psi/dog/dog-hero';
import DogBreeds from '@/ui/nasi-psi/dog/dog-breeds';
import DogMatings from '@/ui/nasi-psi/dog/dog-matings';
import DogJsonLd from '@/components/DogJsonLd';

const DogGallery = lazy(() => import('@/ui/dog-gallery'));
const DogContests = lazy(() => import('@/ui/nasi-psi/dog/dog-contests'));

const DogDetail = () => {
  const params = useParams();
  // const name = params.name;
  const name = typeof params.name === 'string' && decodeURIComponent(params.name);

  const data = dataDogs.find((e) => e.id === name);

  const heroData = {
    name: data?.name,
    portrait: data?.portrait,
    type: data?.type,
    breed: data?.breed,
    birth: data?.birth,
    kennel: data?.kennel,
    description: data?.description,
    registration: data?.registration,
    titles: data?.titles,
    exams: data?.exams,
    health: data?.health,
    pedigree: data?.pedigree,
  };

  const JsonLdDogData = {
    name: data?.name,
    kennel: data?.kennel,
    breed: data?.breed,
    description: data?.description,
    img: data?.portrait.src,
    titles: data?.titles,
    races: data?.races,
    contests: data?.contests,
    health: data?.health,
    registration: data?.registration,
    birth: data?.birth,
  };

  const areContests = data?.contests && data?.contests?.length > 0;
  const areRaces = data?.races && data?.races?.length > 0;
  const areBreeds = data?.breeds && data?.breeds?.length > 0;
  const areMating = data?.matings && data?.matings?.length > 0;
  const areGallery = data?.gallery && data?.gallery?.length > 0;

  const images = (areGallery && data.gallery.map((e) => e.image)) || [];
  const labels = (areGallery && data.gallery.map((e) => e.label)) || [];
  return (
    <>
      <DogJsonLd dog={JsonLdDogData} />
      <main className="mx-auto px-4 py-8 max-w-7xl grid gap-12">
        {/* Hero sekce */}
        <DogHero dog={heroData} />

        {/* Sekce s vrhy */}
        {areBreeds && <DogBreeds breeds={data.breeds} />}

        {/* Sekce s krytím */}
        {areMating && <DogMatings matings={data.matings} />}
        {/*Galerie */}

        <Suspense fallback={<div className="h-32 w-full animate-pulse bg-gray-100 rounded"></div>}>
          {areGallery && <DogGallery images={images} labels={labels} />}
        </Suspense>
        {/* Výstavy a závody */}

        <Suspense fallback={<div className="h-24 w-full animate-pulse bg-gray-100 rounded"></div>}>
          <div className="grid lg:grid-cols-2 gap-12">
            {areContests && (
              <DogContests title="Výstavy" icon={Award} items={data.contests} resultKey="grade" />
            )}
            {areRaces && (
              <DogContests title="Závody" icon={Medal} items={data.races} resultKey="result" />
            )}
          </div>
        </Suspense>
      </main>
    </>
  );
};

export default DogDetail;

{
  /*{areGallery && <DogGallery images={images} labels={labels} />*/
}

{
  /* <div className="grid lg:grid-cols-2 gap-12">
          {areContests && (
            <DogContests title="Výstavy" icon={Award} items={data.contests} resultKey="grade" />
          )}

          {areRaces && (
            <DogContests title="Závody" icon={Medal} items={data.races} resultKey="result" />
          )}
        </div>*/
}
