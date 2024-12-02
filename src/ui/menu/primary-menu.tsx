"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navPaths = [
  { name: "Úvod", href: "/" },
  { name: "Odchovy", href: "/odchovy" },
  { name: "Naši Psi", href: "/nasi-psi" },
];

const PrimaryMenu = () => {
  const pathname = usePathname();
  return (
    <ul className="flex items-center justify-end gap-3 pr-4">
      {navPaths.map((path) => (
        <li
          key={path.name}
          className={clsx("text-xl font-bold", {
            "text-sky-300": pathname === path.href,
          })}
        >
          <Link href={path.href}>{path.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PrimaryMenu;
