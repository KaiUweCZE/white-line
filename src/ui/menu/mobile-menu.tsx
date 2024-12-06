import clsx from "clsx";
import Link from "next/link";

const MobileMenu = ({
  navPaths,
  pathname,
}: {
  navPaths: { name: string; href: string }[];
  pathname: string;
}) => {
  return (
    <div 
      className="mobile-menu w-36 bg-stone-800/90 primary-shadow"
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="navigation menu"
    >
      <ul className="expanded py-3" role="menu">
        {navPaths?.map((path) => (
          <li
            key={path.name}
            role="menuitem"
            className={clsx(
              "cursor-pointer px-4",
              pathname === path.href && "text-sky-400"
            )}
          >
            <Link href={path.href} aria-current={pathname === path.href ? "page" : undefined}
              tabIndex={0}>{path.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
