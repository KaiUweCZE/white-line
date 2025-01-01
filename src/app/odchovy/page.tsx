'use client';
import BreedSelect from '@/ui/odchovy/breed-select';
import ContainerBreeds from '@/ui/odchovy/container-breeds';
import { breedData } from '@/ui/odchovy/data/breed-data';
import { useState } from 'react';

const OdchovyPage = () => {
  const [actualBreed, setActualBreed] = useState<string>('Bílý švýcarský ovčák');
  const data = breedData.filter((breed) => breed.type === actualBreed);

  const title = () => {
    switch (actualBreed) {
      case 'Bílý švýcarský ovčák':
        return 'Bílého švýcarského ovčáka';
      case 'Německý ovčák':
        return 'Německého ovčáka';
      case 'Corgi':
        return 'Corgi';
      default:
        return 'Bílý švýcarský ovčák';
    }
  };
  return (
    <div className="wrapper mx-auto primary-bg max-width pt-8 px-8 min-h-[45dvh]">
      <div className="grid gap-8 h-fit">
        <div className="grid gap-2">
          <h2 className="text-2xl font-bold">Odchovy {title()}</h2>
          <BreedSelect setActualBreed={setActualBreed} actualBreed={actualBreed} />
        </div>
        <main>{data && <ContainerBreeds data={data} />}</main>
      </div>
    </div>
  );
};

export default OdchovyPage;
