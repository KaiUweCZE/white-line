import { slides } from "./data/menu-data";
import NavbarMenu from "./navbar-menu";
import Slideshow from "./slide-show";

const Navbar = () => {
  return (
    <header className="navbar">
      <Slideshow slides={slides} />
      <div className="header-bar bg-stone-950/70">
        <div className="flex pl-4 items-center">
          <span className="text-2xl font-bold">Whiteline</span>
          <span className="text-sky-400 text-2xl font-bold">Czech</span>
        </div>
        <NavbarMenu />
      </div>
    </header>
  );
};

export default Navbar;
