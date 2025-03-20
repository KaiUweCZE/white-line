import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <section className="text-center relative grid primary-bg h-[45dvh] place-items-center">
      <Link
        href="/odchovy"
        className="inline-flex absolute top-4 left-4 items-center text-gray-800 hover:text-gray-900"
      >
        <ChevronLeft className="w-5 h-5 mr-1" />
        Zpět na odchovy
      </Link>

      <h1 className="text-4xl font-bold mb-4 text-gray-800">
        Detailní informace nejsou k dispozici
      </h1>
    </section>
  );
};

export default NotFound;
