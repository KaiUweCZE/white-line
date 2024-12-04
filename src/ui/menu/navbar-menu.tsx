"use client";
import { usePathname } from "next/navigation";
import { useWindowSize } from "./hooks/use-window-size";
import HamburgerIcon from "./hamburger-icon";
import DesktopMenu from "./desktop-menu";
import { useState } from "react";
import MobileMenu from "./mobile-menu";

const navPaths = [
  { name: "Úvod", href: "/" },
  { name: "Odchovy", href: "/odchovy" },
  { name: "Naši Psi", href: "/nasi-psi" },
];

const NavbarMenu = () => {
  const pathname = usePathname();
  const isSmall = useWindowSize();
  const [isMenuActive, setIsMenuActive] = useState(false);
  return (
    <div className="flex items-center justify-end pr-4 relative">
      {isSmall ? (
        <HamburgerIcon setIsMenuActive={setIsMenuActive} />
      ) : (
        <DesktopMenu pathname={pathname} navPaths={navPaths} />
      )}
      {isSmall && isMenuActive && <MobileMenu />}
    </div>
  );
};

export default NavbarMenu;
