import React from 'react';
import corgiImg from '@/assets/images/corgi.webp';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/ui/primitives/button';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="container-error h-screen">
      <section>
        <Image
          className="error-image"
          src={corgiImg}
          alt="cartoon obrázek s corgi, která má u sebe otazník"
          width={400}
          priority
        />
        <div className="flex flex-col w-full items-center">
          <h2>Tahle stránka tu není...</h2>
          <Link href={'/'}>
            <Button variant="outlined" leftIcon={<Home className="w-4 h-4" />}>
              Zpět
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
