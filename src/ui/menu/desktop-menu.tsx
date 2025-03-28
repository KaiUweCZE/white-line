import clsx from 'clsx';
import Link from 'next/link';

const DesktopMenu = ({
  navPaths,
  pathname,
}: {
  navPaths: { name: string; href: string }[];
  pathname: string;
}) => {
  return (
    <ul className="desktop-menu items-center justify-end gap-3" role="menubar">
      {navPaths.map((path) => (
        <li
          key={path.name}
          role="none"
          className={clsx('text-xl font-bold', {
            'text-sky-400': pathname === path.href,
          })}
        >
          <Link href={path.href} role="menuitem">
            {path.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
