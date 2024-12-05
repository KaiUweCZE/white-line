import clsx from "clsx";
import Link from "next/link";

const DesktopMenu = ({
  navPaths,
  pathname,
}: {
  navPaths: { name: string; href: string }[];
  pathname: string;
}) => {
  return (
    <ul className="flex items-center justify-end gap-3">
      {navPaths.map((path) => (
        <li
          key={path.name}
          className={clsx("text-xl font-bold", {
            "text-sky-400": pathname === path.href,
          })}
        >
          <Link href={path.href}>{path.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default DesktopMenu;
