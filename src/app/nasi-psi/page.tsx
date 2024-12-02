import { dataDogs } from "./data/data-dogs";
import DogsGallery from "@/ui/nasi-psi/dogs-gallery";

const PsiPage = () => {
  const alive = dataDogs.filter(
    (dog) => dog.alive && { img: dog.img, name: dog.name }
  );
  const inMemory = dataDogs.filter(
    (dog) => !dog.alive && { img: dog.img, name: dog.name }
  );

  return (
    <div className="max-width mx-auto mt-6">
      <h2 className="text-2xl font-bold">Naši Psi</h2>
      <section className="grid ">
        <h3>Živy</h3>
        <DogsGallery dogs={alive} />
      </section>
      <section className="grid ">
        <h3>Ve vzpomínkách</h3>
        <DogsGallery dogs={inMemory} />
      </section>
    </div>
  );
};

export default PsiPage;
