'use client';
import { usePathname } from 'next/navigation';
import HamburgerIcon from './hamburger-icon';
import DesktopMenu from './desktop-menu';
import { useState } from 'react';
import MobileMenu from './mobile-menu';

const navPaths = [
  { name: 'Úvod', href: '/' },
  { name: 'Odchovy', href: '/odchovy' },
  { name: 'Naši Psi', href: '/nasi-psi' },
];

const NavbarMenu = () => {
  const pathname = usePathname();
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <nav className="flex items-center justify-end pr-4 relative" aria-label="main menu">
      <HamburgerIcon setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />

      <DesktopMenu pathname={pathname} navPaths={navPaths} />

      {isMenuActive && (
        <MobileMenu pathname={pathname} navPaths={navPaths} setIsMenuActive={setIsMenuActive} />
      )}
    </nav>
  );
};

export default NavbarMenu;

{
  /*isSmall ? (
  <HamburgerIcon setIsMenuActive={setIsMenuActive} isMenuActive={isMenuActive} />
) : (
  <DesktopMenu pathname={pathname} navPaths={navPaths} />
)}
{isSmall && isMenuActive && (
  <MobileMenu pathname={pathname} navPaths={navPaths} setIsMenuActive={setIsMenuActive} />
)*/
}
