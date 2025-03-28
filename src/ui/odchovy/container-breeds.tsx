'use client';
import BoxBreed from './box-breed';
import { BreedType } from './data/breed-data';

interface ContainerBreedsProps {
  data: BreedType[];
}

const ContainerBreeds = ({ data }: ContainerBreedsProps) => {
  return (
    <section className="grid grid-cols-2 gap-4 pb-8 container-breeds">
      <h2 className="sr-only">{data[0].type}</h2>
      {data.map((breed) => (
        <BoxBreed key={breed.id} breed={breed} />
      ))}
    </section>
  );
};

export default ContainerBreeds;
