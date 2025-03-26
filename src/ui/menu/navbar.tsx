'use client';
import { slides, mobileSlides } from './data/menu-data';
import dynamic from 'next/dynamic';
import NavbarMenu from './navbar-menu';
import SlideShowPlaceholder from './slide-show-placeholder';

const SlideShow = dynamic(() => import('./slide-show'));

const Navbar = () => {
  return (
    <header className="navbar">
      <SlideShowPlaceholder />
      <SlideShow slides={slides} mobileSlides={mobileSlides} />
      <div className="header-bar bg-stone-950/70">
        <h1 className="flex pl-4 items-center" aria-label="logo">
          <span className="text-2xl font-bold">Whiteline</span>
          <span className="text-sky-400 text-2xl font-bold">Czech</span>
        </h1>
        <NavbarMenu />
      </div>
    </header>
  );
};

export default Navbar;
