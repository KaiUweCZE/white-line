import { dataDogs } from '../../ui/nasi-psi/data/data-dogs';
import DogsGallery from '@/ui/nasi-psi/dogs-gallery';

const PsiPage = () => {
  // Oprava filtru, aby správně vrátil objekty s pouze img a name
  const alive = dataDogs
    .filter((dog) => dog.alive)
    .map((dog) => ({ img: dog.img, name: dog.name }));
  const inMemory = dataDogs
    .filter((dog) => !dog.alive)
    .map((dog) => ({ img: dog.img, name: dog.name }));

  return (
    <main className="max-w-7xl mx-auto py-8 md:py-12 primary-bg">
      {/* Sekce živých psů */}
      <section className="mb-16 px-4">
        <h2 className="text-2xl font-bold  pb-2 inline-block">Naši psi</h2>
        <div>
          <DogsGallery dogs={alive} />
        </div>
      </section>

      {/* Elegantní oddělovač sekcí */}
      <div className="relative my-12">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center">
          <h2 className="px-6 primary-bg text-gray-500 text-lg font-medium">Ve vzpomínkách</h2>
        </div>
      </div>

      {/* Sekce psů ve vzpomínkách */}
      <section className="px-4">
        <div>
          <DogsGallery dogs={inMemory} />
        </div>
      </section>
    </main>
  );
};

export default PsiPage;
