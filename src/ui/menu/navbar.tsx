import { slides, mobileSlides } from "./data/menu-data";
import NavbarMenu from "./navbar-menu";
import Slideshow from "./slide-show";

const Navbar = () => {
  return (
    <header className="navbar" role="banner">
      <Slideshow slides={slides} mobileSlides={mobileSlides} />
      <div className="header-bar  bg-stone-950/70">
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
