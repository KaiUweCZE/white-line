import BoxBreed from "./box-breed";
import { breedData } from "./data/breed-data";

const ContainerBreeds = () => {
  const data = breedData;
  return (
    <section className="grid grid-cols-2 gap-4 pb-8">
      {data.map((breed) => (
        <BoxBreed key={breed.id} breed={breed} />
      ))}
    </section>
  );
};

export default ContainerBreeds;
