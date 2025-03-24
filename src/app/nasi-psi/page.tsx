import { dataDogs } from '../../ui/nasi-psi/data/data-dogs';
import DogsGallery from '@/ui/nasi-psi/dogs-gallery';

const PsiPage = () => {
  // Oprava filtru, aby správně vrátil objekty s pouze img a name
  const alive = dataDogs
    .filter((dog) => dog.alive)
    .map((dog) => ({ id: dog.id, img: dog.img, name: dog.name }));
  const inMemory = dataDogs
    .filter((dog) => !dog.alive)
    .map((dog) => ({ id: dog.id, img: dog.img, name: dog.name }));

  return (
    <main className="wrapper mx-auto py-8 md:py-12 primary-bg">
      {/* Sekce živých psů */}
      <section className="mb-16 px-4">
        <h1 className="page-headline">Naši psi</h1>
        <div>
          <DogsGallery dogs={alive} />
        </div>
      </section>

      <section className="px-4">
        <header className="relative my-12 grid">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <h2 className="relative px-6 primary-bg text-gray-500 text-lg font-medium inline-block mx-auto">
            Ve vzpomínkách
          </h2>
        </header>
        <div>
          <DogsGallery dogs={inMemory} />
        </div>
      </section>
    </main>
  );
};

export default PsiPage;
