'use client';
import React from 'react';
import { Award, Medal } from 'lucide-react';
import { useParams } from 'next/navigation';
import { dataDogs } from '../../../ui/nasi-psi/data/data-dogs';
import DogHero from '@/ui/nasi-psi/dog/dog-hero';
import DogBreeds from '@/ui/nasi-psi/dog/dog-breeds';
import DogContests from '@/ui/nasi-psi/dog/dog-contests';

const DogDetail = () => {
  const params = useParams();
  // const name = params.name;
  const name = typeof params.name === 'string' && decodeURIComponent(params.name);

  const data = dataDogs.find((e) => e.name.toLowerCase() === name);

  const heroData = {
    name: data?.name,
    portrait: data?.portrait,
    type: data?.type,
    breed: data?.breed,
    birth: data?.birth,
    description: data?.description,
    registration: data?.registration,
    titles: data?.titles,
    exams: data?.exams,
    health: data?.health,
    pedigree: data?.pedigree,
  };

  const areContests = data?.contests && data?.contests?.length > 0;
  const areRaces = data?.races && data?.races?.length > 0;
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero sekce */}
      <DogHero dog={heroData} />

      {/* Sekce s vrhy */}
      {data?.breeds && <DogBreeds breeds={data?.breeds} />}

      {/* Výstavy a závody */}
      <div className="grid lg:grid-cols-2 gap-12">
        {areContests && (
          <DogContests title="Výstavy" icon={Award} items={data.contests} resultKey="grade" />
        )}

        {areRaces && (
          <DogContests title="Závody" icon={Medal} items={data.races} resultKey="result" />
        )}
      </div>
    </div>
  );
};

export default DogDetail;
