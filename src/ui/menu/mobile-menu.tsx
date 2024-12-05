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
    <div className="mobile-menu w-36 bg-stone-800/90 primary-shadow">
      <ul className="expanded py-3">
        {navPaths?.map((path) => (
          <li
            key={path.name}
            className={clsx(
              "cursor-pointer px-4",
              pathname === path.href && "text-sky-400"
            )}
          >
            <Link href={path.href}>{path.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
