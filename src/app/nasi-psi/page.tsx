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
    <div className="grid max-width mx-auto my-6 gap-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Naši Psi</h2>
        <section className="grid ">
          <DogsGallery dogs={alive} />
        </section>
      </div>
      <div>
        <section className="grid ">
          <h2 className="text-2xl font-bold mb-4">Ve vzpomínkách</h2>
          <DogsGallery dogs={inMemory} />
        </section>
      </div>
    </div>
  );
};

export default PsiPage;
